import Seo from '../components/Seo'
import Reveal from '../components/Reveal'
import CTA from '../components/CTA'
import { about, brand } from '../data/company'

export default function AboutPage() {
  return (
    <>
      <Seo
        title="Tentang Kami"
        path="/about"
        description="Kenali Gards Creative lebih dekat — cerita, visi, misi, nilai, dan tim di balik studio kreatif kami."
      />

      <section className="section-pad pt-32">
        <div className="container-app max-w-3xl text-center">
          <Reveal direction="up">
            <span className="eyebrow">Tentang Gards Creative</span>
            <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-ink-900 dark:text-white sm:text-5xl">
              Cerita di balik setiap <span className="gradient-text">karya kreatif</span> kami
            </h1>
            <p className="mt-6 leading-relaxed text-ink-600 dark:text-ink-200">{about.story}</p>
          </Reveal>
        </div>
      </section>

      <section className="pb-20">
        <div className="container-app grid gap-6 md:grid-cols-2">
          <Reveal direction="right" className="rounded-2xl border border-ink-100 bg-white p-8 dark:border-white/10 dark:bg-ink-800/40">
            <h2 className="text-xl font-bold text-ink-900 dark:text-white">Visi</h2>
            <p className="mt-3 leading-relaxed text-ink-600 dark:text-ink-300">{about.vision}</p>
          </Reveal>
          <Reveal direction="left" className="rounded-2xl border border-ink-100 bg-white p-8 dark:border-white/10 dark:bg-ink-800/40">
            <h2 className="text-xl font-bold text-ink-900 dark:text-white">Misi</h2>
            <ul className="mt-3 space-y-2">
              {about.mission.map((item) => (
                <li key={item} className="flex gap-2.5 text-sm leading-relaxed text-ink-600 dark:text-ink-300">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary-500" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="section-pad bg-ink-50/60 dark:bg-white/[0.02]">
        <div className="container-app">
          <Reveal direction="up" className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">Nilai Kami</span>
            <h2 className="mt-5 text-3xl font-bold tracking-tight text-ink-900 dark:text-white sm:text-4xl">
              Yang memandu cara kami bekerja
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {about.values.map((value, i) => (
              <Reveal key={value.title} direction="up" delay={i * 0.08} className="rounded-2xl border border-ink-100 bg-white p-6 dark:border-white/10 dark:bg-ink-800/40">
                <h3 className="font-semibold text-ink-900 dark:text-white">{value.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-500 dark:text-ink-300">{value.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-app">
          <Reveal direction="up" className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">Tim Kami</span>
            <h2 className="mt-5 text-3xl font-bold tracking-tight text-ink-900 dark:text-white sm:text-4xl">
              Orang-orang di balik {brand.shortName}
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {about.team.map((member, i) => (
              <Reveal key={member.name} direction="up" delay={i * 0.08} className="text-center">
                <div className="mx-auto aspect-square w-full max-w-[200px] overflow-hidden rounded-2xl bg-ink-100 dark:bg-ink-800">
                  <img
                    src={member.photo}
                    alt={member.name}
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      e.currentTarget.src = `https://i.pravatar.cc/300?u=${member.name}`
                    }}
                    className="h-full w-full object-cover"
                  />
                </div>
                <h3 className="mt-4 font-semibold text-ink-900 dark:text-white">{member.name}</h3>
                <p className="text-sm text-ink-400">{member.role}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  )
}
