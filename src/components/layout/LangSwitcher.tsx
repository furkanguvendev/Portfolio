import { useLangStore } from '../../store/useLangStore'

export default function LangSwitcher() {
  const { lang, toggleLang } = useLangStore()

  return (
    <button
      onClick={toggleLang}
      aria-label={lang === 'tr' ? 'Switch to English' : 'Türkçeye geç'}
      className="text-sm font-medium tracking-wider text-neutral-400 transition-colors hover:text-white"
    >
      <span className={lang === 'tr' ? 'text-amber-400' : ''}>TR</span>
      {' / '}
      <span className={lang === 'en' ? 'text-amber-400' : ''}>EN</span>
    </button>
  )
}