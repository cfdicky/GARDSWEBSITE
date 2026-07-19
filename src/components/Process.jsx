import Reveal from './Reveal'
import { process } from '../data/company'

export default function Process() {
  return (
    <section className="section-pad bg-ink-50/60 dark:bg-white/[0.02]">
      <div className="container-app">
        <Reveal direction="up" className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Alur Kerja</span>
          <h2 className="mt-5 text-3xl font-bold tracking-tight text-ink-900 dark:text-white sm:text-4xl">
            Proses yang jelas, dari ide hingga peluncuran
          </h2>
        </Reveal>

        <div className="relative mt-16 grid gap-8 md:grid-cols-3">
          {/* Connecting line for desktop */}
          <div className="absolute left-0 right-0 top-6 hidden h-px bg-gradient-to-r from-transparent via-ink-200 to-transparent dark:via-white/10 md:block" />

          {process.map((item, i) => (
            <Reveal key={item.step} direction="up" delay={i * 0.08}>
              <div className="relative rounded-2xl border border-ink-100 bg-white p-6 dark:border-white/10 dark:bg-ink-800/40">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand-gradient text-lg font-bold text-white">
                  {item.step}
                </span>
                <h3 className="mt-4 text-lg font-semibold text-ink-900 dark:text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-500 dark:text-ink-300">{item.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
