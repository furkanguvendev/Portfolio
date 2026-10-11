import { motion, useMotionTemplate, useMotionValue } from 'motion/react'
import { useT } from '../../hooks/useT'
import { useLangStore } from '../../store/useLangStore'
import { profile } from '../../data/profile'
import type { MouseEvent } from 'react'

const ease = [0.22, 1, 0.36, 1] as const

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.2 } },
}

const word = {
  hidden: { y: '110%' },
  show: { y: 0, transition: { duration: 0.9, ease } },
}

function RevealText({ text, className = '' }: { text: string; className?: string }) {
  return (
    <motion.span
      variants={container}
      initial="hidden"
      animate="show"
      className={`block ${className}`}
      aria-label={text}
    >
      {text.split(' ').map((w, i) => (
        <span
          key={i}
          aria-hidden
          className="inline-block overflow-hidden align-bottom pb-2 mr-[0.25em]"
        >
          <motion.span variants={word} className="inline-block">
            {w}
          </motion.span>
        </span>
      ))}
    </motion.span>
  )
}

export default function Hero() {
  const x = useMotionValue(-1000)
  const y = useMotionValue(-1000)
  const t = useT()
  const lang = useLangStore((s) => s.lang)

  const spotlight = useMotionTemplate`radial-gradient(450px circle at ${x}px ${y}px, rgba(251,191,36,0.14), transparent 70%)`

  const handleMouseMove = (e: MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    x.set(e.clientX - rect.left)
    y.set(e.clientY - rect.top)
  }

  return (
    <section
      id="home"
      onMouseMove={handleMouseMove}
      className="relative min-h-svh flex items-center overflow-hidden"
    >
      {/* İmleci takip eden ışık */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{ background: spotlight }}
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 w-full">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease }}
          className="text-amber-400 mb-6 tracking-widest text-sm uppercase"
        >
          {t.hero.role}
        </motion.p>

        {/* key={lang}: dil değişince başlık animasyonu yeniden oynar */}
        <h1
          key={lang}
          className="text-5xl sm:text-7xl md:text-8xl font-bold leading-[1.05] tracking-tight"
        >
          <RevealText text={t.hero.greeting} />
          <RevealText
            text={profile.name}
            className="bg-gradient-to-r from-amber-400 to-orange-300 bg-clip-text text-transparent"
          />
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1, ease }}
          className="mt-8 max-w-xl text-lg text-neutral-400"
        >
          {t.hero.desc}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2, ease }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <a
            href="#projects"
            className="rounded-full bg-white text-black px-6 py-3 font-medium transition hover:bg-amber-200"
          >
            {t.hero.ctaProjects}
          </a>
          <a
            href="#contact"
            className="rounded-full border border-white/20 px-6 py-3 font-medium transition hover:border-white/60"
          >
            {t.hero.ctaContact}
          </a>
        </motion.div>
      </div>

      {/* Scroll göstergesi */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 h-12 w-px bg-white/20 overflow-hidden"
      >
        <motion.div
          className="h-4 w-px bg-white"
          animate={{ y: [-16, 48] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>
    </section>
  )
}