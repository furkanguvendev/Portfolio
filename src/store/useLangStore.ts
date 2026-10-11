import { create } from 'zustand'

export type Lang = 'tr' | 'en'

const getInitial = (): Lang => {
  try {
    const saved = localStorage.getItem('lang')
    if (saved === 'tr' || saved === 'en') return saved
  } catch {
    /* localStorage kapalıysa sessizce geç */
  }
  return navigator.language.toLowerCase().startsWith('tr') ? 'tr' : 'en'
}

type LangState = {
  lang: Lang
  toggleLang: () => void
}

export const useLangStore = create<LangState>((set, get) => ({
  lang: getInitial(),
  toggleLang: () => {
    const next: Lang = get().lang === 'tr' ? 'en' : 'tr'
    try {
      localStorage.setItem('lang', next)
    } catch {
      /* yoksay */
    }
    set({ lang: next })
  },
}))