import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Reveal from './Reveal'
import { services } from '../data/services'
import { getIcon } from '../utils/iconMap'

export default function Services() {
  return (
    <section className="section-pad bg-ink-50/60 dark:bg-white/[0.02]">
      <div className="container-app">
        <Reveal direction="up" className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Layanan Kami</span>
          <h2 className="mt-5 text-3xl font-bold tracking-tight text-ink-900 dark:text-white sm:text-4xl">
            Solusi kreatif menyeluruh untuk bisnis Anda
          </h2>
          <p className="mt-4 text-ink-600 dark:text-ink-300">
            Dari strategi brand hingga eksekusi digital — semua kebutuhan identitas bisnis Anda ada di satu tempat.
          </p>
        </Reveal>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{ visible: { transition: { staggerChildren: 0.06 } } }}
          className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service) => {
            const Icon = getIcon(service.icon)
            return (
              <motion.div
                key={service.id}
                variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } }}
                transition={{ duration: 0.5 }}
                whileHover={{ y: -6 }}
                className="group relative overflow-hidden rounded-2xl border border-ink-100 bg-white p-7 shadow-soft transition-colors hover:border-primary-300 dark:border-white/10 dark:bg-ink-800/40"
              >
                <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-brand-gradient opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-20" />
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-brand-gradient-soft text-primary-600 transition-transform duration-300 group-hover:scale-110 dark:text-primary-300">
                  <Icon size={22} />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-ink-900 dark:text-white">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-500 dark:text-ink-300">{service.description}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:text-primary-400">
                  Pelajari lebih lanjut <ArrowRight size={14} />
                </span>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
