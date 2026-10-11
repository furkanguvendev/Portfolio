import Reveal from '../ui/Reveal'
import { useT } from '../../hooks/useT'
import { profile } from '../../data/profile'

export default function Contact() {
  const t = useT()

  const socials = [
    { label: 'GitHub', href: profile.github },
    { label: 'LinkedIn', href: profile.linkedin },
  ].filter((s) => s.href)

  return (
    <section id="contact" className="min-h-svh flex flex-col justify-center pt-20 md:pt-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full">
        <Reveal>
          <p className="text-amber-400 mb-4 tracking-widest text-sm uppercase">
            {t.contact.label}
          </p>
          <h2 className="text-4xl sm:text-6xl font-bold tracking-tight">
            {t.contact.title}
          </h2>
          <p className="mt-6 max-w-xl text-lg text-neutral-400">{t.contact.text}</p>
        </Reveal>

        <Reveal delay={0.15} className="mt-10 flex flex-wrap gap-4">
          <a
            href={`mailto:${profile.email}`}
            className="rounded-full bg-amber-400 text-black px-6 py-3 font-medium transition hover:bg-amber-300"
          >
            {t.contact.email}
          </a>
          {profile.cvUrl && (
            <a
              href={profile.cvUrl}
              download
              className="rounded-full border border-white/20 px-6 py-3 font-medium transition hover:border-white/60"
            >
              {t.contact.cv}
            </a>
          )}
        </Reveal>

        <Reveal delay={0.25} className="mt-8 text-neutral-400">
          <a href={`mailto:${profile.email}`} className="hover:text-white transition-colors">
            {profile.email}
          </a>
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              className="ml-6 hover:text-white transition-colors"
            >
              {s.label}
            </a>
          ))}
        </Reveal>
      </div>

      <footer className="mt-24 border-t border-white/10 py-6 text-center text-sm text-neutral-500">
        © {new Date().getFullYear()} {profile.name}
      </footer>
    </section>
  )
}