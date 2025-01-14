import { Github, Instagram, Linkedin, Mail } from 'lucide-react';
import Rena from '../assets/Rena.jpg'


const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Profile Image */}
          <div className="w-48 h-48 md:w-64 md:h-64 relative">
            <div className="w-full h-full rounded-full overflow-hidden border-4 border-blue-500 shadow-xl">
              <img 
                src={Rena}
                alt="Profile" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-2 -right-2 bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">
              Available for hire
            </div>
          </div>

          {/* Intro Text */}
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Hello, I'm <span className="text-blue-600">Rena Setyaningsih</span> 👋
            </h1>
            <p className="text-xl text-gray-600 mb-6 max-w-2xl">
              Frontend Developer yang bersemangat dalam menciptakan pengalaman web yang menarik dan intuitif. Spesialisasi dalam React.js dan modern web technologies.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <button  className="flex items-center gap-2 bg-blue-600 text-white px-10 py-3 rounded-full hover:bg-blue-700 transition-colors">
              <a href='https://wa.me/085879757353'>
                Hubungi Saya
            </a>
              </button>

            </div>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Keahlian & Teknologi
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {['React.js', 'Tailwind CSS', 'JavaScript', 'TypeScript', 'Node.js', 'Next.js', 'Git', 'UI/UX'].map((skill) => (
              <div key={skill} className="bg-gray-50 rounded-lg p-6 text-center hover:shadow-md transition-shadow">
                <div className="text-lg font-medium text-gray-900">{skill}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Projects Section 
      <div className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Project Terbaru
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((project) => (
              <div key={project} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <img 
                  src="/api/placeholder/400/200" 
                  alt={`Project ${project}`}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Nama Project {project}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Deskripsi singkat tentang project dan teknologi yang digunakan dalam pembuatannya.
                  </p>
                  <div className="flex items-center gap-2">
                    <a href="#" className="text-blue-600 hover:text-blue-800 flex items-center gap-1">
                      <ExternalLink className="h-4 w-4" />
                      Live Demo
                    </a>
                    <span className="text-gray-300">|</span>
                    <a href="#" className="text-blue-600 hover:text-blue-800 flex items-center gap-1">
                      <Github className="h-4 w-4" />
                      Source Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
*/}
      {/* Contact Section */}
      <div className="bg-blue-50 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Connect!
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Tertarik untuk berkolaborasi atau punya pertanyaan? Jangan ragu untuk menghubungi saya.
            </p>
          </div>
          <div className="flex justify-center gap-6">
            <a href="#" className="bg-white p-4 rounded-full shadow-md hover:shadow-lg transition-shadow">
              <Instagram className="h-6 w-6 text-gray-700" />
            </a>
            <a href="#" className="bg-white p-4 rounded-full shadow-md hover:shadow-lg transition-shadow">
              <Linkedin className="h-6 w-6 text-blue-600" />
            </a>
            <a href="#" className="bg-white p-4 rounded-full shadow-md hover:shadow-lg transition-shadow">
              <Mail className="h-6 w-6 text-red-500" />
            </a>
          </div>
        </div>
      </div>



    </div>


  );
};

export default LandingPage;