import Reveal from '../ui/Reveal'
import { skills } from '../../data/skills'
import { useT } from '../../hooks/useT'

export default function About() {
  const t = useT()

  return (
    <section id="about" className="min-h-svh flex items-center py-20 md:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full">
        <Reveal>
          <p className="text-amber-400 mb-4 tracking-widest text-sm uppercase">
            {t.about.label}
          </p>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight max-w-3xl">
            {t.about.title}
          </h2>
        </Reveal>

        <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          <Reveal delay={0.1} className="space-y-5 text-neutral-400 text-lg leading-relaxed">
            <p>{t.about.p1}</p>
            <p>{t.about.p2}</p>
            <p className="text-neutral-200">{t.about.p3}</p>
          </Reveal>

          <div className="space-y-8">
            {skills.map((group, i) => (
              <Reveal key={group.group} delay={0.2 + i * 0.1}>
                <h3 className="text-sm uppercase tracking-widest text-neutral-500 mb-3">
                  {t.skillGroups[group.group]}
                </h3>
                <ul className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-neutral-200 transition hover:border-amber-400/60 hover:text-white"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}