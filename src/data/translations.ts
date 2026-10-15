const tr = {
  nav: { home: 'Ana Sayfa', about: 'Hakkımda', projects: 'Projeler', contact: 'İletişim' },
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
    p3: 'Bu disiplini yazılıma taşımak istiyorum. Junior Full-stack Developer pozisyonları arıyorum.',
  },
  skillGroups: { frontend: 'Frontend', backend: 'Backend & Veritabanı', tools: 'Araçlar' },
  contact: {
    label: 'İletişim',
    title: 'Birlikte çalışalım.',
    text: 'Bir pozisyon, proje ya da sadece merhaba demek için bana yazabilirsin.',
    email: 'E-posta gönder',
    cv: 'CV İndir',
  },
    projects: {
    label: 'Projeler',
    title: 'Seçtiğim çalışmalar.',
    fullstack: 'Full-stack',
    frontend: 'Frontend',
    demo: 'Canlı Demo',
  },
}

const en: typeof tr = {
  nav: { home: 'Home', about: 'About', projects: 'Projects', contact: 'Contact' },
  hero: {
    role: 'Full-stack Developer',
    greeting: "Hi, I'm",
    desc: 'I build fast, clean and smooth web applications with React, TypeScript and Spring Boot.',
    ctaProjects: 'My Projects',
    ctaContact: 'Contact',
  },
  about: {
    label: 'About',
    title: 'Bringing engineering discipline to software.',
    p1: 'I graduated from Marmara University with a degree in Mechanical Engineering. Afterwards I completed a 6-month Full-stack Developer bootcamp at Workintech, working with Java, Spring Boot, JavaScript, React, Redux and Tailwind. Since then I have kept learning with tools like TypeScript and Zustand.',
    p2: 'I currently work as a mechanical site chief on a large housing project of 2,000+ units in Istanbul. This role taught me a lot about planning, team coordination and solving problems under pressure. Years with tools like AutoCAD and SolidWorks also trained my attention to detail.',
    p3: 'I want to bring this discipline into software, and I am looking for Junior Full-stack Developer roles.',
  },
  skillGroups: { frontend: 'Frontend', backend: 'Backend & Database', tools: 'Tools' },
  contact: {
    label: 'Contact',
    title: "Let's work together.",
    text: 'Feel free to reach out about a position, a project, or just to say hi.',
    email: 'Send an email',
    cv: 'Download CV',
  },
    projects: {
    label: 'Projects',
    title: 'Selected work.',
    fullstack: 'Full-stack',
    frontend: 'Frontend',
    demo: 'Live Demo',
  },
}

export type Dict = typeof tr
export const translations = { tr, en }