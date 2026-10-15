import type { Lang } from '../store/useLangStore'

export type Project = {
  id: string
  name: string
  type: 'fullstack' | 'frontend'
  image?: string
  desc: Record<Lang, string>
  tags: string[]
  demo?: string
  links: { label: string; href: string }[]
}

export const projects: Project[] = [
  {
    id: 'moneta',
    name: 'Moneta',
    type: 'fullstack',
    image: '',
    desc: {
      tr: 'Kişisel bütçe planlama uygulaması. Gelir ve giderleri takip edip bütçeni yönetebilirsin. Arayüzü React ile, sunucu tarafını Java Spring Boot ile geliştirdim.',
      en: 'A personal budget planning app for tracking income and expenses. I built the interface with React and the server side with Java Spring Boot.',
    },
    tags: ['React', 'TypeScript', 'Zustand', 'Tailwind CSS', 'Recharts', 'Java', 'Spring Boot'],
    demo: 'https://moneta-wallet.vercel.app/',
    links: [
      { label: 'GitHub (Frontend)', href: 'https://github.com/furkanguvendev/moneta-frontend' },
      { label: 'GitHub (Backend)', href: 'https://github.com/furkanguvendev/moneta' },
    ],
  },
  {
    id: 'weariva',
    name: 'Weariva',
    type: 'frontend',
    image: '',
    desc: {
      tr: 'Kurs sonrası kendimi denemek için yaptığım e-ticaret sitesi. Arayüzün tamamını ben geliştirdim, veriler eğitimde sağlanan hazır API üzerinden geliyor.',
      en: 'An e-commerce site I built after my bootcamp to test myself. I developed the entire frontend; the data comes from a ready-made API provided in the course.',
    },
    tags: ['React', 'TypeScript', 'Redux Toolkit', 'Tailwind CSS', 'React Router', 'Axios'],
    demo: 'https://weariva.vercel.app/',
    links: [{ label: 'GitHub', href: 'https://github.com/furkanguvendev/MyEcommerce/tree/main/ecommerce' }],
  },
  {
    id: 'cashcon',
    name: 'Cashcon',
    type: 'frontend',
    image: '',
    desc: {
      tr: 'Faiz hesabı ve kredi borcu hesabı gibi finansal hesaplamaları yapabileceğin dijital bankacılık temalı bir uygulama.',
      en: 'A neobank-style app for financial calculations such as interest and loan debt.',
    },
    tags: ['React', 'TypeScript', 'Redux', 'Framer Motion', 'Bootstrap', 'React Hook Form'],
    demo: 'https://cash-kon.vercel.app/',
    links: [{ label: 'GitHub', href: 'https://github.com/furkanguvendev/NeoBank' }],
  },
]