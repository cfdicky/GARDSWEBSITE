import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus } from 'lucide-react'
import Reveal from './Reveal'
import { faq } from '../data/faq'
import { cn } from '../utils/cn'

export default function FAQ() {
  const [openId, setOpenId] = useState(faq[0]?.id ?? null)

  return (
    <section className="section-pad bg-ink-50/60 dark:bg-white/[0.02]">
      <div className="container-app max-w-3xl">
        <Reveal direction="up" className="text-center">
          <span className="eyebrow">FAQ</span>
          <h2 className="mt-5 text-3xl font-bold tracking-tight text-ink-900 dark:text-white sm:text-4xl">
            Pertanyaan yang sering diajukan
          </h2>
        </Reveal>

        <div className="mt-12 space-y-3">
          {faq.map((item) => {
            const isOpen = openId === item.id
            return (
              <div
                key={item.id}
                className="overflow-hidden rounded-2xl border border-ink-100 bg-white dark:border-white/10 dark:bg-ink-800/40"
              >
                <button
                  onClick={() => setOpenId(isOpen ? null : item.id)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="font-medium text-ink-900 dark:text-white">{item.question}</span>
                  <Plus
                    size={20}
                    className={cn(
                      'shrink-0 text-primary-500 transition-transform duration-300',
                      isOpen && 'rotate-45'
                    )}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-5 text-sm leading-relaxed text-ink-500 dark:text-ink-300">
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
