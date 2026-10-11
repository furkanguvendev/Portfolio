import type { Dict } from './translations'

export const skills: { group: keyof Dict['skillGroups']; items: string[] }[] = [
  {
    group: 'frontend',
    items: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Redux', 'Zustand', 'Tailwind CSS', 'Motion'],
  },
  { group: 'backend', items: ['Java', 'Spring Boot', 'SQL', 'PostgreSQL'] },
  { group: 'tools', items: ['Git', 'Cypress', 'VS Code', 'IntelliJ IDEA', 'Figma'] },
]