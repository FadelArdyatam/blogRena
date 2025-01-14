import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Calendar, Clock, Tag, ThumbsUp, Share2, MessageCircle, Facebook, Twitter, Linkedin, BookmarkPlus } from 'lucide-react';
import { blogPosts } from './data';

const BlogDetailLayout = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [post, setPost] = useState(null);
  const [imageError, setImageError] = useState(false);
  const [likes, setLikes] = useState(0);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [showShareMenu, setShowShareMenu] = useState(false);



  useEffect(() => {
    const abortController = new AbortController();
    
    const fetchPost = async () => {
      try {
        setLoading(true);
        setError(null);
        
        // Simulate API call - replace with actual API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        const data = blogPosts.find(post => post.id === parseInt(id));
        if (!data) {
          throw new Error('Post not found');
        }
        
        setPost(data);
        setLikes(data.likes || 0);
      } catch (err) {
        if (!abortController.signal.aborted) {
          setError(err.message);
        }
      } finally {
        if (!abortController.signal.aborted) {
          setLoading(false);
        }
      }
    };

    fetchPost();

    return () => {
      abortController.abort();
    };
  }, [id]);

  if (loading) {
    return (
      <div className="w-full max-w-7xl mx-auto space-y-4 animate-pulse">
        <div className="h-64 bg-gray-200 rounded-xl"></div>
        <div className="h-8 bg-gray-200 w-3/4 rounded"></div>
        <div className="h-4 bg-gray-200 w-1/2 rounded"></div>
        <div className="space-y-2">
          <div className="h-4 bg-gray-200 rounded"></div>
          <div className="h-4 bg-gray-200 w-5/6 rounded"></div>
          <div className="h-4 bg-gray-200 w-4/6 rounded"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full max-w-7xl mx-auto bg-red-50 border border-red-200 rounded-xl p-8 text-center">
        <div className="text-red-500 text-xl font-medium mb-2">Oops! Something went wrong</div>
        <div className="text-red-400">{error}</div>
      </div>
    );
  }

  if (!post) return null;

  return (
    <article className="w-full max-w-7xl mx-auto">
      {/* Floating Share Menu */}
      <div className="fixed left-8 top-1/2 transform -translate-y-1/2 hidden lg:flex flex-col gap-4">
        <button 
          onClick={() => setLikes(prev => prev + 1)}
          className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110"
        >
          <ThumbsUp className={`h-5 w-5 ${likes ? 'text-blue-500' : 'text-gray-500'}`} />
          <span className="text-xs mt-1 block">{likes}</span>
        </button>
        <button 
          onClick={() => setShowShareMenu(!showShareMenu)}
          className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110"
        >
          <Share2 className="h-5 w-5 text-gray-500" />
        </button>
        <button 
          onClick={() => setIsBookmarked(!isBookmarked)}
          className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110"
        >
          <BookmarkPlus className={`h-5 w-5 ${isBookmarked ? 'text-blue-500' : 'text-gray-500'}`} />
        </button>
      </div>


        
      {/* Main Content */}
      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        {/* Hero Image */}
        <div className="relative h-96">
          <img
            src={imageError ? "/api/placeholder/800/400" : post.imageUrl}
            alt={post.title}
            className="w-full h-full object-cover"
            onError={() => setImageError(true)}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
            <div className="mb-4">
              <span className="px-3 py-1 bg-blue-500 text-white text-sm font-medium rounded-full">
                {post.category}
              </span>
            </div>
            <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
          </div>
        </div>
        
        <div className="p-8">
          {/* Author Info */}
          <div className="flex items-center mb-8 p-4 bg-gray-50 rounded-lg">
            <img
              src={post.authorAvatar}
              alt={post.author}
              className="w-12 h-12 rounded-full mr-4"
            />
            <div>
              <div className="font-medium text-gray-900">{post.author}</div>
              <div className="text-sm text-gray-500">{post.authorRole}</div>
            </div>
            <div className="ml-auto flex items-center text-gray-500 text-sm">
              <Calendar className="h-4 w-4 mr-1" />
              <span>{post.date}</span>
              <span className="mx-2">•</span>
              <Clock className="h-4 w-4 mr-1" />
              <span>{post.readTime} read</span>
            </div>
          </div>
          
          {/* Content */}
          <div className="prose max-w-none mb-8">
            {post.content.split('\n\n').map((paragraph, index) => (
              <p key={index} className="mb-4 text-gray-700 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Tags */}
          <div className="flex items-center flex-wrap gap-2 mb-8">
            <Tag className="h-4 w-4 text-gray-400" />
            {post.tags.map((tag) => (
              <span 
                key={tag}
                className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-gray-200 cursor-pointer transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Mobile Engagement Bar */}
          <div className="flex items-center justify-between p-4 border-t lg:hidden">
            <button 
              onClick={() => setLikes(prev => prev + 1)}
              className="flex items-center gap-2 text-gray-600"
            >
              <ThumbsUp className={`h-5 w-5 ${likes ? 'text-blue-500' : ''}`} />
              <span>{likes}</span>
            </button>
            <button className="flex items-center gap-2 text-gray-600">
              <MessageCircle className="h-5 w-5" />
              <span>{post.comments}</span>
            </button>
            <button 
              onClick={() => setIsBookmarked(!isBookmarked)}
              className="flex items-center gap-2 text-gray-600"
            >
              <BookmarkPlus className={`h-5 w-5 ${isBookmarked ? 'text-blue-500' : ''}`} />
            </button>
          </div>
        </div>
      </div>

      {/* Share Menu */}
      {showShareMenu && (
        <div className="fixed left-20 top-1/2 transform -translate-y-1/2 bg-white p-4 rounded-lg shadow-xl">
          <div className="flex flex-col gap-4">
            <button className="flex items-center gap-2 text-gray-700 hover:text-blue-500">
              <Facebook className="h-5 w-5" /> Facebook
            </button>
            <button className="flex items-center gap-2 text-gray-700 hover:text-blue-400">
              <Twitter className="h-5 w-5" /> Twitter
            </button>
            <button className="flex items-center gap-2 text-gray-700 hover:text-blue-600">
              <Linkedin className="h-5 w-5" /> LinkedIn
            </button>
          </div>
        </div>
      )}
    </article>
  );
};

BlogDetailLayout.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    authorRole: PropTypes.string.isRequired,
    authorAvatar: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    readTime: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    imageUrl: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired,
    comments: PropTypes.number.isRequired,
    shares: PropTypes.number.isRequired,
  }),
};

export default BlogDetailLayout;