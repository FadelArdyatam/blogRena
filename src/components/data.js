import cek from '../assets/cek.jpg';
import image from '../assets/image.png'



export const blogPosts = [
  {
    id: 1,
    title: "Praktikum Jaringan Dasar: Pengenalan Topologi Jaringan",
    author: "Dr. Ahmad Fauzi",
    authorRole: "Dosen Jaringan Komputer",
    authorAvatar: "/api/placeholder/100/100",
    date: "14 Jan 2025",
    readTime: "5 min",
    category: "Praktikum",
    content: `Pada praktikum ini, kita akan mempelajari berbagai topologi jaringan seperti topologi bus, star, ring, dan mesh. Setiap topologi memiliki kelebihan dan kekurangan tersendiri.
    
    Topologi bus menggunakan kabel tunggal sebagai media transmisi, sedangkan topologi star menghubungkan semua perangkat ke sebuah hub atau switch. Topologi ring menghubungkan perangkat dalam bentuk lingkaran, dan topologi mesh menghubungkan setiap perangkat secara langsung.
    
    Praktikum ini akan membantu memahami bagaimana memilih topologi yang sesuai untuk kebutuhan jaringan.`,
    tags: ['Topologi Jaringan', 'Jaringan Dasar', 'Praktikum'],
    imageUrl: image,
    likes: 35,
    comments: 10,
    shares: 5
  },
  {
    id: 2,
    title: "Praktikum Konfigurasi Router dan Switch",
    author: "Dr. Budi Santoso",
    authorRole: "Dosen Jaringan Komputer",
    authorAvatar: image,
    date: "15 Jan 2025",
    readTime: "8 min",
    category: "Praktikum",
    content: `Praktikum ini akan membahas cara mengkonfigurasi router dan switch menggunakan Cisco Packet Tracer. Router berfungsi untuk menghubungkan jaringan yang berbeda, sedangkan switch digunakan untuk menghubungkan perangkat dalam jaringan yang sama.
    
    Langkah-langkah yang akan dipelajari meliputi pengaturan IP address, konfigurasi routing static dan dynamic, serta pengaturan VLAN pada switch. Praktikum ini sangat penting untuk memahami manajemen jaringan yang efisien.`,
    tags: ['Router', 'Switch', 'Cisco Packet Tracer'],
    imageUrl: "https://th.bing.com/th/id/OIP.1ndorypMclIlGbfueIzCNwHaE3?rs=1&pid=ImgDetMain",
    likes: 45,
    comments: 15,
    shares: 7
  },
  {
    id: 3,
    title: "Praktikum Implementasi Firewall dan VPN",
    author: "Dr. Budi Santoso",
    authorRole: "Dosen Keamanan Jaringan",
    authorAvatar: "../assets/image.png",
    date: "16 Jan 2025",
    readTime: "10 min",
    category: "Praktikum",
    content: `Praktikum ini fokus pada implementasi firewall dan VPN untuk meningkatkan keamanan jaringan. Firewall digunakan untuk memfilter lalu lintas jaringan yang tidak diinginkan, sedangkan VPN (Virtual Private Network) digunakan untuk membuat koneksi aman melalui jaringan publik.
    
    Kita akan mempelajari cara mengkonfigurasi firewall menggunakan pfSense dan membuat koneksi VPN menggunakan OpenVPN. Praktikum ini sangat berguna untuk memahami prinsip-prinsip keamanan jaringan.`,
    tags: ['Firewall', 'VPN', 'Keamanan Jaringan'],
    imageUrl: "https://static.vecteezy.com/system/resources/previews/000/600/578/original/network-firewall-icon-illustration-vector-on-white-background.jpg",
    likes: 50,
    comments: 20,
    shares: 10
  },
  {
    id: 4,
    title: "Praktikum Analisis Paket Data dengan Wireshark",
    author: "Dr. Ahmad Fathurrahman",
    authorRole: "Dosen Analisis Jaringan",
    authorAvatar: cek, // Updated to use the image from the assets folder
    date: "17 Jan 2025",
    readTime: "7 min",
    category: "Praktikum",
    content: `Wireshark adalah alat yang sangat berguna untuk menganalisis paket data dalam jaringan. Pada praktikum ini, kita akan mempelajari cara menggunakan Wireshark untuk menangkap dan menganalisis paket data.
    
    Langkah-langkah yang akan dipelajari meliputi cara menangkap paket, menganalisis protokol jaringan seperti TCP, UDP, dan HTTP, serta mengidentifikasi masalah jaringan. Praktikum ini sangat penting untuk memahami bagaimana data dikirim dan diterima dalam jaringan.`,
    tags: ['Wireshark', 'Analisis Paket', 'Jaringan'],
    imageUrl: "https://th.bing.com/th/id/R.d462559c86883446983275d974675eae?rik=SITYeixJB%2fXxgw&riu=http%3a%2f%2fallpcworld.com%2fwp-content%2fuploads%2f2016%2f09%2fWireshark-Free-Download-Logo.png&ehk=%2fYYXx2wXTnD%2fY5JAq%2bgVtKMCCkzsuEV1olEw%2bs8vgcw%3d&risl=&pid=ImgRaw&r=0",
    likes: 40,
    comments: 12,
    shares: 6
  },
  {
    id: 5,
    title: "Praktikum Jaringan Nirkabel: Konfigurasi Access Point",
    author: "Dr. Eka Putra",
    authorRole: "Dosen Jaringan Nirkabel",
    authorAvatar: "/api/placeholder/100/100",
    date: "18 Jan 2025",
    readTime: "8 min",
    category: "Praktikum",
    content: `Praktikum ini akan membahas cara mengkonfigurasi access point untuk jaringan nirkabel. Kita akan mempelajari cara mengatur SSID, keamanan jaringan, dan optimasi sinyal.
    
    Praktikum ini sangat penting untuk memahami bagaimana jaringan nirkabel bekerja dan bagaimana cara mengoptimalkannya untuk penggunaan sehari-hari.`,
    tags: ['Jaringan Nirkabel', 'Access Point', 'WiFi'],
    imageUrl: "https://unsplash.com/photos/a-person-decorating-cookies-on-a-table-OZrOqF_OXxw",
    likes: 30,
    comments: 15,
    shares: 8
  },
  {
    id: 6,
    title: "Manajemen Bandwidth",
    author: "Akhmad Fathurrahman S.Kom., M.",
    authorRole: "Dosen Jaringan Komputer",
    authorAvatar: "/api/placeholder/100/100",
    date: "19 Jan 2025",
    readTime: "9 min",
    category: "Teori",
    content: `Manajemen bandwidth merupakan proses pengaturan jumlah data pada jaringan dengan mengatur alokasi perangkat yang memakan data jaringan. Hal ini membantu meringankan kemacetan jaringan dan memastikan aplikasi kritis suatu organisasi mendapatkan bandwidth yang cukup. Konsep pengelolaan bandwidth menyerupai dengan penjatahan. Prinsip penjatahan menyerupai kondisi darurat akibat pandemi covid-19 yang membatasi jumlah komoditas. Penjatahan memastikan apakah semua orang mendapatkan yang dibutuhkan. Dalam pengertian bandwidth management, porsi bandwidth di jatah untuk setiap aplikasi maupun perangkat..
    Manajemen bandwidth adalah cara untuk menyelesaikan masalah kecepatan internet yang tiba-tiba melambat ketika banyak yang menggunakan jaringan. Maupun membuka aplikasi di beberapa aplikasi dalam satu perangkat sekaligus.
    Apa itu Bandwidth

    Bandwidth mengacu pada jumlah maksimum data yang dapat ditransfer jaringan, perangkat, maupun aplikasi. Semakin besar bandwidth, makin cepat kecepatan koneksi jaringannya.
Bandwidth dapat diibaratkan sedotan yang memiliki ukuran berbeda. Orang dengan sedotan yang lebih besar mampu menyeruput minuman lebih banyak daripada sedotan lebih kecil.
Hal yang sama dengan perangkat maupun alamat IP dengan lebar pita yang lebih besar. Sebab dapat mempengaruhi koneksi internet lebih cepat.
Pentingnya manajemen bandwidth
Koneksi jaringan dipengaruhi beberapa aktivitas yang terjadi. Jika berada dalam lingkungan perkantoran, aktivitas karyawan mempengaruhi koneksi jaringan, antara lain:
Mengunggah informasi karyawan baru ke dalam platform sistem informasi sumber daya manusia
Mendownload bahan penelitian untuk riset melalui mesin pencari seperti Google
Menonton video hiburan di Youtube
Mengunggah foto, video, maupun konten lewat sosial media
Dari banyaknya aktivitas ini, manajemen bandwidth membantu mengalokasikan bandwidth untuk aktivitas penting.

Bagaimana cara kerja management bandwidth

Management bandwidth bisa dilakukan dengan berbagai cara. Seperti bagaimana jaringan administrasi dapat mengendalikan bandwidth.
Administrasi jaringan dapat mengendalikan bandwidth berdasarkan aplikasi. Bukan cuma itu, lebih banyak bandwidth yang mengatur penggunaan platform dan media komunikasi.
Sementara, Internet Service Provider (ISP) dapat mengimplementasikan pengaturan bandwidth berdasarkan alamat IP.
Apabila alamat IP ditentukan untuk menggunakan perusahaan, mereka dapat mengalokasikan lebih banyak bandwidth.

Penggunaan alat manajemen bandwidth
Management bandwidth memiliki alat dan software yang dapat diimplementasikan sebagai berikut
Router
Fungsi utama router adalah membuat rute lalu lintas bandwidth untuk kepada tujuan masing-masing. Anda masih bisa memakainya untuk mengimplementasikan control bandwidth untuk menganalisa lalu lintas.

Pembatas bandwidth
Pembatas bandwidth memantau lalu lintas dengan membatasi bandwidth berdasarkan perangkat yang sudah ditetapkan. Berbeda dengan router, alat ini dirancang khusus untuk mengendalikan bandwidth.

Traffic shaping tools
Cara lain untuk mengendalikan bandwidth adalah menggunakan alat pembentuk lalu lintas atau traffic shaping tools. Fungsi alat ini menunda jenis lalu lintas jaringan tertentu untuk perangkat maupun aplikasi yang lebih penting.

Manfaat dari manajemen bandwidth
Salah satu manfaat manajemen bandwidth yang signifikan adalah mengurangi kemacetan antara jaringan maupun aplikasi. Tanpa itu, semua aplikasi akan memperebutkan bandwidth sehingga dapat mengganggu pekerjaan.

Selain mengurangi kemacetan jaringan antar perangkat, berikut ini manfaat lain management bandwidth berdasarkan ipwithease.com.

Meningkatkan performa jaringan
Manfaat utama mengaktifkan manajemen bandwidth pada router WiFi adalah meningkatkan performa jaringan mereka. Dapat diaktifkan dari panel admin router WiFi, dan memungkinkan organisasi mengalokasikan bandwidth ke perangkat maupun aplikasi lainnya berdasarkan prioritas.

Meningkatkan user experience
Management bandwidth bermanfaat untuk meningkatkan pengalaman pengguna untuk memastikan distribusi bandwidth dilakukan secara adil dan merata kepada pengguna. Tanpa adanya management bandwidth, perangkat manapun akan kesulitan mendapatkan bandwith.

Baca juga : Pentingnya Memberikan Customer Experience Terbaik

Efisiensi alokasi sumber daya daringan
Aktivasi manajemen bandwidth memungkinkan Anda mengalokasikan sumber daya secara efisien untuk memastikan penggunaan internet yang tidak adil. Hal ini penting untuk penggunaan organisasi dengan banyak penggunaan dan perangkat yang terhubung.

Management bandwidth memungkinkan pengoptimalan pemakaian bandwidth yang tersedia sehingga banyak perangkat dapat bergabung dengan jaringan tanpa mengalami kemacetan jaringan maupun penurunan kinerja.

Hal ini memastikan kecepatan dan kinerja jaringan secara keseluruhan tidak terganggu dan semua perangkat menerima bagian yang adik dari sumber daya jaringan

Memprioritaskan aplikasi kritis
Memprioritaskan aplikasi atau jaringan menjadi manfaat dari management bandwidth. Kemampuan ini mampu mengalokasikan lebih banyak bandwidth ke aplikasi maupun perangkat yang sangat dibutuhkan.

Mengalokasikan lebih banyak bandwidth untuk aktivitas internet yang membutuhkan kecepatan transfer daya dan bandwidth lebih tinggi seperti mengunduh, online meeting, hingga analitik daya.

Baca juga : Teknologi Cloud Computing Telah Mengubah Kultur Masyarakat

Dampak yang dirasakan dari prioritas alokasi bandwidth adalah meningkatkan kinerja jaringan pada perangkat untuk tugas-tugas penting seperti remote working maupun online meeting yang butuh koneksi internet yang lebih cepat.

Efisiensi pemanfaatan paket data
Untuk pengguna paket data dengan limit tertentu, management bandwidth menjadi fitur yang bermanfaat untuk membantu mengurangi pemakaian biaya berlebih.

Management bandwidth memberi kendali besar data yang dipakai oleh setiap perangkat maupun aplikasi supaya tidak melebihi batas data yang dianjurkan.

Manajemen bandwidth adalah cara untuk mengatasi masalah kecepatan internet yang lambat ketika banyak yang menggunakan jaringan tersebut. Tidak hanya mengendalikan lalu lintas bandwidth, proses manajemen ini mampu meningkatkan pengalaman pengguna menjadi lebih baik.
    Kita akan mempelajari cara membuat VPC, mengkonfigurasi subnet, security group, dan route table. Praktikum ini sangat penting untuk memahami bagaimana membangun infrastruktur jaringan di cloud.`,
    tags: ['Bandwidth', 'Fiber Optic'],
    imageUrl: "https://images.unsplash.com/photo-1604869515882-4d10fa4b0492?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    likes: 55,
    comments: 18,
    shares: 9
  },
];

