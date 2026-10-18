const tr = {
  nav: { 
    home: 'Ana Sayfa', 
    about: 'Hakkımda', 
    projects: 'Projeler', 
    contact: 'İletişim' 
  },
  hero: {
    role: 'Full-stack Developer',
    greeting: 'Merhaba, ben',
    desc: 'React, TypeScript ve Spring Boot ile hızlı, temiz ve akıcı web uygulamaları geliştiriyorum.',
    ctaProjects: 'Projelerim',
    ctaContact: 'İletişim',
  },
  about: {
    label: 'Hakkımda',
    title: 'Mühendislik disiplinini yazılıma taşıyorum.',
    p1: 'Marmara Üniversitesi Makine Mühendisliği mezunuyum. Mezuniyetten sonra Workintech’te 6 aylık Full-stack Developer eğitimini tamamladım; Java, Spring Boot, JavaScript, React, Redux ve Tailwind ile çalıştım. Sonrasında TypeScript ve Zustand gibi araçlarla kendimi geliştirmeye devam ettim.',
    p2: 'Şu anda İstanbul’da 2.000’den fazla konutluk büyük bir projede mekanik şef olarak çalışıyorum. Bu süreç bana planlama, ekip koordinasyonu ve baskı altında sorun çözme konusunda çok şey kattı. AutoCAD ve SolidWorks gibi araçlarla geçen yıllarım da detaylara dikkat etmeyi öğretti.',
    p3: 'Bu disiplini yazılıma taşımayı seviyorum; yeni projelere ve fırsatlara açığım.',
    },
  skillGroups: { 
    frontend: 'Frontend', 
    backend: 'Backend & Veritabanı', 
    tools: 'Araçlar' 
  },
  projects: {
    label: 'Projeler',
    title: 'Seçtiğim çalışmalar.',
    fullstack: 'Full-stack',
    frontend: 'Frontend',
    demo: 'Canlı Demo',
    code: 'Kodları İncele',
  },
  contact: {
    label: 'İletişim',
    title: 'Birlikte çalışalım.',
    text: 'Bir pozisyon, proje ya da sadece merhaba demek için bana yazabilirsin.',
    email: 'E-posta Gönder',
    cv: 'CV İndir',
  },
}

const en: typeof tr = {
  nav: { 
    home: 'Home', 
    about: 'About', 
    projects: 'Projects', 
    contact: 'Contact' 
  },
  hero: {
    role: 'Full-stack Developer',
    greeting: "Hi, I'm",
    desc: 'I build fast, clean, and smooth web applications with React, TypeScript, and Spring Boot.',
    ctaProjects: 'My Projects',
    ctaContact: 'Contact Me',
  },
  about: {
    label: 'About',
    title: 'Bringing engineering discipline into software development.',
    p1: 'I graduated from Marmara University with a degree in Mechanical Engineering. After graduation, I completed an intensive 6-month Full-stack Developer program at Workintech, working with Java, Spring Boot, JavaScript, React, Redux, and Tailwind CSS. Since then, I have continued expanding my skillset with TypeScript, Zustand, and modern web software tools.',
    p2: 'I currently work as a mechanical site manager on a major residential construction project with over 2,000 units in Istanbul. This role has sharpened my skills in planning, team coordination, and high-pressure problem solving. My years of experience with design tools like AutoCAD and SolidWorks also cultivated my strong attention to detail.',
    p3: 'I enjoy bringing this discipline into software development and I am open to new projects and opportunities.',
  },
  skillGroups: { 
    frontend: 'Frontend', 
    backend: 'Backend & Database', 
    tools: 'Tools' 
  },
  projects: {
    label: 'Projects',
    title: 'Selected Work',
    fullstack: 'Full-stack',
    frontend: 'Frontend',
    demo: 'Live Demo',
    code: 'Source Code',
  },
  contact: {
    label: 'Contact',
    title: "Let's Work Together",
    text: 'Feel free to reach out about an open role, a project collaboration, or just to say hi.',
    email: 'Send Email',
    cv: 'Download Resume',
  },
}

export type Dict = typeof tr
export const translations = { tr, en }