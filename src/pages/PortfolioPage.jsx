import { useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, X, Calendar, User } from 'lucide-react'
import Seo from '../components/Seo'
import Reveal from '../components/Reveal'
import { portfolio, categories } from '../data/portfolio'
import { cn } from '../utils/cn'

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState('Semua')
  const [query, setQuery] = useState('')
  const [selected, setSelected] = useState(null)

  const filtered = useMemo(() => {
    return portfolio.filter((project) => {
      const matchesCategory = activeCategory === 'Semua' || project.category === activeCategory
      const matchesQuery =
        query.trim() === '' ||
        project.title.toLowerCase().includes(query.toLowerCase()) ||
        project.client.toLowerCase().includes(query.toLowerCase())
      return matchesCategory && matchesQuery
    })
  }, [activeCategory, query])

  return (
    <>
      <Seo
        title="Portfolio"
        path="/portfolio"
        description="Jelajahi koleksi proyek Gards Creative — branding, website, UI/UX, social media, photography, dan motion graphic."
      />

      <section className="pb-10 pt-32">
        <div className="container-app text-center">
          <Reveal direction="up">
            <span className="eyebrow">Our Work</span>
            <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-ink-900 dark:text-white sm:text-5xl">
              Portfolio <span className="gradient-text">Kreatif</span> Kami
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-ink-600 dark:text-ink-300">
              Setiap proyek adalah cerita kolaborasi antara strategi, desain, dan hasil nyata bagi klien kami.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-24">
        <div className="container-app">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-wrap gap-2.5">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={cn(
                    'rounded-full border px-4 py-2 text-sm font-medium transition-colors',
                    activeCategory === cat
                      ? 'border-primary-500 bg-brand-gradient text-white'
                      : 'border-ink-200 text-ink-600 hover:border-primary-300 dark:border-white/10 dark:text-ink-300'
                  )}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="relative w-full sm:w-64">
              <Search size={16} className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-ink-400" />
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Cari proyek atau klien..."
                aria-label="Cari proyek"
                className="w-full rounded-full border border-ink-200 bg-white py-2.5 pl-10 pr-4 text-sm text-ink-900 placeholder:text-ink-400 focus:border-primary-500 dark:border-white/10 dark:bg-ink-800/60 dark:text-white"
              />
            </div>
          </div>

          {filtered.length === 0 ? (
            <div className="mt-20 text-center text-ink-400">
              Tidak ada proyek yang cocok dengan pencarian Anda.
            </div>
          ) : (
            <motion.div layout className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <AnimatePresence mode="popLayout">
                {filtered.map((project) => (
                  <motion.button
                    layout
                    key={project.id}
                    onClick={() => setSelected(project)}
                    initial={{ opacity: 0, scale: 0.94 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.94 }}
                    transition={{ duration: 0.3 }}
                    className="group relative aspect-[4/5] overflow-hidden rounded-2xl bg-ink-100 text-left dark:bg-ink-800"
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
                    </div>
                  </motion.button>
                ))}
              </AnimatePresence>
            </motion.div>
          )}
        </div>
      </section>

      {/* Lightbox / project detail modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-ink-900/80 p-4 backdrop-blur-sm"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 16 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative grid w-full max-w-3xl gap-0 overflow-hidden rounded-3xl bg-white dark:bg-ink-800 sm:grid-cols-2"
            >
              <button
                onClick={() => setSelected(null)}
                aria-label="Tutup"
                className="absolute right-4 top-4 z-10 grid h-9 w-9 place-items-center rounded-full bg-white/90 text-ink-800 shadow-soft"
              >
                <X size={18} />
              </button>
              <div className="aspect-square sm:aspect-auto">
                <img
                  src={selected.image}
                  alt={selected.title}
                  onError={(e) => {
                    e.currentTarget.src = `https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=75&sig=${selected.id}`
                  }}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex flex-col justify-center p-8">
                <span className="eyebrow w-fit">{selected.category}</span>
                <h3 className="mt-4 text-2xl font-bold text-ink-900 dark:text-white">{selected.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-500 dark:text-ink-300">{selected.description}</p>
                <div className="mt-5 flex flex-col gap-2 text-sm text-ink-500 dark:text-ink-300">
                  <span className="flex items-center gap-2">
                    <User size={15} className="text-primary-500" /> {selected.client}
                  </span>
                  <span className="flex items-center gap-2">
                    <Calendar size={15} className="text-primary-500" /> {selected.year}
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
