import { useEffect } from 'react'
import { useLangStore } from '../store/useLangStore'
import { translations } from '../data/translations'

export function useT() {
  const lang = useLangStore((s) => s.lang)

  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  return translations[lang]
}