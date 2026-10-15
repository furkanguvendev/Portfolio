import Reveal from '../ui/Reveal'
import { projects } from '../../data/projects'
import { useT } from '../../hooks/useT'
import { useLangStore } from '../../store/useLangStore'

export default function Projects() {
  const t = useT()
  const lang = useLangStore((s) => s.lang)

  return (
    <section id="projects" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full">
        <Reveal>
          <p className="text-amber-400 mb-4 tracking-widest text-sm uppercase">
            {t.projects.label}
          </p>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight">{t.projects.title}</h2>
        </Reveal>

        <div className="mt-12 md:mt-20 space-y-20 md:space-y-32">
          {projects.map((p, i) => (
            <Reveal key={p.id}>
              <article className="group grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-center">
                {/* Görsel */}
                <div className={i % 2 === 1 ? 'md:order-2' : ''}>
                  <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-white/10 bg-neutral-900 transition duration-500 group-hover:-translate-y-1 group-hover:border-amber-400/40">
                    {p.image ? (
                      <img
                        src={p.image}
                        alt={p.name}
                        loading="lazy"
                        className="h-full w-full object-cover object-top transition duration-700 group-hover:scale-105"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-amber-400/20 via-neutral-900 to-orange-400/10">
                        <span className="text-5xl sm:text-6xl font-bold tracking-tight text-white/15">
                          {p.name}
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Bilgi */}
                <div>
                  <p className="text-sm text-neutral-500 mb-2">
                    {String(i + 1).padStart(2, '0')} · {t.projects[p.type]}
                  </p>
                  <h3 className="text-3xl sm:text-4xl font-bold tracking-tight">{p.name}</h3>
                  <p className="mt-4 text-neutral-400 leading-relaxed">{p.desc[lang]}</p>

                  <ul className="mt-5 flex flex-wrap gap-2">
                    {p.tags.map((tag) => (
                      <li
                        key={tag}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-neutral-300"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-7 flex flex-wrap gap-3">
                    {p.demo && (
                      <a
                        href={p.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-full bg-amber-400 text-black px-5 py-2.5 text-sm font-medium transition hover:bg-amber-300"
                      >
                        {t.projects.demo} ↗
                      </a>
                    )}
                    {p.links.map((l) => (
                      <a
                        key={l.href}
                        href={l.href}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-full border border-white/20 px-5 py-2.5 text-sm font-medium transition hover:border-white/60"
                      >
                        {l.label}
                      </a>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}