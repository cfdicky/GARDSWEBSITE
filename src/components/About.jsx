import { Target, Compass, Sparkles } from 'lucide-react'
import Reveal from './Reveal'
import { brand, about } from '../data/company'

export default function About() {
  return (
    <section className="section-pad">
      <div className="container-app grid items-center gap-14 lg:grid-cols-2">
        <Reveal direction="right">
          <div className="relative">
            <div className="aspect-[4/5] w-full overflow-hidden rounded-3xl bg-brand-gradient-soft">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                alt="Tim Gards Creative sedang berdiskusi konsep desain"
                loading="lazy"
                referrerPolicy="no-referrer"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="glass-card absolute -bottom-6 -right-6 hidden max-w-[220px] p-5 sm:block">
              <p className="text-sm font-semibold text-ink-900 dark:text-white">
                "Ide yang baik pantas mendapat eksekusi yang baik."
              </p>
              <p className="mt-2 text-xs text-ink-400">— Prinsip kerja kami</p>
            </div>
          </div>
        </Reveal>

        <Reveal direction="left">
          <span className="eyebrow">Tentang Kami</span>
          <h2 className="mt-5 text-3xl font-bold tracking-tight text-ink-900 dark:text-white sm:text-4xl">
            Studio kreatif di balik identitas digital brand Anda
          </h2>
          <p className="mt-5 leading-relaxed text-ink-600 dark:text-ink-200">{about.story}</p>

          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            <div className="rounded-2xl border border-ink-100 p-5 dark:border-white/10">
              <Compass className="text-primary-500" size={22} />
              <h3 className="mt-3 font-semibold text-ink-900 dark:text-white">Visi</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-ink-500 dark:text-ink-300">{about.vision}</p>
            </div>
            <div className="rounded-2xl border border-ink-100 p-5 dark:border-white/10">
              <Target className="text-secondary-500" size={22} />
              <h3 className="mt-3 font-semibold text-ink-900 dark:text-white">Misi</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-ink-500 dark:text-ink-300">
                {about.mission[0]}
              </p>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-2.5">
            {about.values.map((value) => (
              <span
                key={value.title}
                className="inline-flex items-center gap-1.5 rounded-full bg-ink-50 px-4 py-2 text-xs font-medium text-ink-700 dark:bg-white/5 dark:text-ink-200"
              >
                <Sparkles size={12} className="text-accent-500" />
                {value.title}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
      <p className="sr-only">{brand.description}</p>
    </section>
  )
}
