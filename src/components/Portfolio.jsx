import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import Reveal from './Reveal'
import { portfolio, categories } from '../data/portfolio'
import { cn } from '../utils/cn'

export default function Portfolio() {
  const [active, setActive] = useState('Semua')

  const filtered = useMemo(() => {
    const list = active === 'Semua' ? portfolio : portfolio.filter((p) => p.category === active)
    return list.slice(0, 6)
  }, [active])

  return (
    <section id="portfolio" className="section-pad">
      <div className="container-app">
        <Reveal direction="up" className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Portfolio</span>
          <h2 className="mt-5 text-3xl font-bold tracking-tight text-ink-900 dark:text-white sm:text-4xl">
            Karya yang berbicara untuk brand klien kami
          </h2>
        </Reveal>

        <div className="mt-10 flex flex-wrap justify-center gap-2.5">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={cn(
                'rounded-full border px-4 py-2 text-sm font-medium transition-colors',
                active === cat
                  ? 'border-primary-500 bg-brand-gradient text-white'
                  : 'border-ink-200 text-ink-600 hover:border-primary-300 dark:border-white/10 dark:text-ink-300'
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div layout className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.94 }}
                transition={{ duration: 0.35 }}
                className="group relative aspect-[4/5] overflow-hidden rounded-2xl bg-ink-100 dark:bg-ink-800"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.src = `https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&q=70&sig=${project.id}`
                  }}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-ink-900/85 via-ink-900/10 to-transparent p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span className="text-xs font-semibold uppercase tracking-wider text-primary-300">
                    {project.category}
                  </span>
                  <h3 className="mt-1 text-lg font-semibold text-white">{project.title}</h3>
                  <p className="mt-1 text-sm text-ink-200">{project.client} &middot; {project.year}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <div className="mt-12 text-center">
          <Link to="/portfolio" className="btn-secondary">
            Lihat Semua Portfolio <ArrowUpRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  )
}
