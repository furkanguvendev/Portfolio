import { useEffect } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { useUIStore } from '../../store/useUiStore'
import { useActiveSection } from '../../hooks/useActiveSection'
import { useT } from '../../hooks/useT'
import type { Dict } from '../../data/translations'
import { profile } from '../../data/profile'
import { getLenis, scrollToId } from '../../lib/lenis'
import LangSwitcher from './LangSwitcher'

const ids: Array<keyof Dict['nav']> = ['home', 'about', 'projects', 'contact']

export default function Navbar() {
  const { isMenuOpen, toggleMenu, closeMenu } = useUIStore()
  const active = useActiveSection(ids)
  const t = useT()

  useEffect(() => {
    const lenis = getLenis()
    if (isMenuOpen) {
      lenis?.stop()
      document.documentElement.style.overflow = 'hidden'
    } else {
      lenis?.start()
      document.documentElement.style.overflow = ''
    }
    return () => {
      document.documentElement.style.overflow = ''
    }
  }, [isMenuOpen])

  return (
    <>
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-neutral-950/50">
        <nav className="max-w-6xl mx-auto flex items-center justify-between px-4 sm:px-6 py-4">
          <a
            href="#home"
            onClick={(e) => {
              closeMenu()
              scrollToId(e, 'home')
            }}
            className="font-bold text-lg"
          >
            {profile.name.split(' ')[0]}
            <span className="text-amber-400">.</span>
          </a>

          {/* Masaüstü */}
          <ul className="hidden md:flex items-center gap-8 text-sm">
            {ids.map((id) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  onClick={(e) => scrollToId(e, id)}
                  className={`transition-colors ${
                    active === id ? 'text-white' : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  {t.nav[id]}
                </a>
              </li>
            ))}
            <li>
              <LangSwitcher />
            </li>
          </ul>

          {/* Mobil: dil + hamburger */}
          <div className="md:hidden flex items-center gap-3">
            <LangSwitcher />
            <button
              onClick={toggleMenu}
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMenuOpen}
              className="flex h-10 w-10 flex-col items-center justify-center gap-1.5"
            >
              <motion.span
                animate={isMenuOpen ? { rotate: 45, y: 4 } : { rotate: 0, y: 0 }}
                className="block h-0.5 w-6 bg-white"
              />
              <motion.span
                animate={isMenuOpen ? { rotate: -45, y: -4 } : { rotate: 0, y: 0 }}
                className="block h-0.5 w-6 bg-white"
              />
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden fixed inset-0 z-40 bg-neutral-950 overflow-y-auto flex"
            data-lenis-prevent
          >
            <div className="m-auto flex flex-col items-center gap-6 py-24">
              {ids.map((id, i) => (
                <motion.a
                  key={id}
                  href={`#${id}`}
                  onClick={(e) => {
                    closeMenu()
                    scrollToId(e, id)
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.07 }}
                  className={`text-2xl sm:text-3xl font-bold ${
                    active === id ? 'text-amber-400' : 'text-white'
                  }`}
                >
                  {t.nav[id]}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}