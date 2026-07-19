// Central place for all brand/company content.
// Edit this file to update copy across the whole site — no component edits needed.

export const brand = {
  name: 'Gards Creative',
  shortName: 'Gards',
  tagline: 'Creative Ideas. Digital Solutions.',
  description:
    'Gards Creative adalah studio kreatif yang menyediakan layanan Branding, Website Development, UI/UX Design, Social Media Design, Content Creation, Motion Graphics, Photography, Videography, dan Digital Marketing untuk membantu bisnis membangun identitas digital yang kuat.',
  heroDescription:
    'Kami memadukan strategi, desain, dan teknologi untuk membangun identitas digital yang tidak hanya terlihat indah — tapi juga bekerja untuk pertumbuhan bisnis Anda.',
}

export const navLinks = [
  { label: 'Beranda', path: '/' },
  { label: 'Tentang Kami', path: '/about' },
  { label: 'Portfolio', path: '/portfolio' },
  { label: 'Kontak', path: '/contact' },
]

export const contact = {
  email: 'hello@gardscreative.com',
  whatsapp: '+62 812-3456-7890',
  whatsappLink: 'https://wa.me/6281234567890',
  address: 'Jl. Kreatif Raya No. 21, Jakarta Selatan, Indonesia',
  mapEmbedUrl:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.987!2d106.822!3d-6.229!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMTMnNDQuNCJTIDEwNsKwNDknMTkuMiJF!5e0!3m2!1sen!2sid!4v0000000000000',
}

export const socials = [
  { label: 'Instagram', icon: 'Instagram', url: 'https://instagram.com/gardscreative' },
  { label: 'LinkedIn', icon: 'Linkedin', url: 'https://linkedin.com/company/gardscreative' },
  { label: 'WhatsApp', icon: 'MessageCircle', url: 'https://wa.me/6281234567890' },
  { label: 'Email', icon: 'Mail', url: 'mailto:hello@gardscreative.com' },
]

export const stats = [
  { label: 'Projects Completed', value: 150, suffix: '+' },
  { label: 'Happy Clients', value: 80, suffix: '+' },
  { label: 'Years of Experience', value: 5, suffix: '+' },
  { label: 'Client Satisfaction', value: 99, suffix: '%' },
]

export const process = [
  {
    step: '01',
    title: 'Discovery',
    description: 'Kami menggali tujuan bisnis, target audiens, dan tantangan Anda secara mendalam.',
  },
  {
    step: '02',
    title: 'Strategy',
    description: 'Menyusun rencana kreatif dan teknis yang selaras dengan sasaran pertumbuhan brand.',
  },
  {
    step: '03',
    title: 'Design',
    description: 'Mewujudkan konsep menjadi desain visual yang khas, modern, dan mudah dikenali.',
  },
  {
    step: '04',
    title: 'Development',
    description: 'Membangun produk digital dengan kode yang rapi, cepat, dan siap berkembang.',
  },
  {
    step: '05',
    title: 'Revision',
    description: 'Menyempurnakan detail bersama Anda hingga hasil benar-benar sesuai ekspektasi.',
  },
  {
    step: '06',
    title: 'Launch',
    description: 'Meluncurkan hasil akhir dan mendampingi performa pasca-peluncuran.',
  },
]

export const about = {
  story:
    'Gards Creative lahir dari keyakinan sederhana: ide yang baik pantas mendapatkan eksekusi yang baik pula. Sejak awal berdiri, kami berfokus membantu bisnis lokal maupun rintisan digital menerjemahkan visi mereka menjadi identitas visual dan produk digital yang kuat, konsisten, dan berdampak nyata pada pertumbuhan.',
  vision:
    'Menjadi studio kreatif terpercaya yang membantu bisnis di Asia Tenggara tumbuh melalui identitas digital yang kuat dan berkelanjutan.',
  mission: [
    'Menghadirkan solusi kreatif yang relevan dengan tujuan bisnis klien.',
    'Menjaga kualitas desain dan pengembangan pada standar tertinggi.',
    'Membangun kolaborasi yang transparan dan berkelanjutan dengan setiap klien.',
    'Terus belajar dan mengadopsi teknologi serta tren desain terkini.',
  ],
  values: [
    { title: 'Creativity First', description: 'Setiap solusi dimulai dari ide yang orisinal, bukan template.' },
    { title: 'Craftsmanship', description: 'Detail kecil dikerjakan dengan standar yang sama tingginya dengan gambaran besar.' },
    { title: 'Transparency', description: 'Komunikasi terbuka di setiap tahap proses, tanpa kejutan di akhir.' },
    { title: 'Growth Mindset', description: 'Kami mengukur keberhasilan dari dampaknya terhadap pertumbuhan klien.' },
  ],
  team: [
    { name: 'Dito Aditya', role: 'Founder & Creative Director', photo: '/src/assets/images/gards_founder_1784460038262.jpg' },
    { name: 'Nadia Putri', role: 'Lead UI/UX Designer', photo: '/images/team/team-2.jpg' },
    { name: 'Bima Saputra', role: 'Frontend Developer', photo: '/images/team/team-3.jpg' },
    { name: 'Clara Winata', role: 'Motion & Content Lead', photo: '/images/team/team-4.jpg' },
  ],
}
