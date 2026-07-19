import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowUpRight, PlayCircle } from 'lucide-react'
import { brand } from '../data/company'

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-20">
      {/* Animated gradient aurora background */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-white dark:bg-ink-900">
        <div className="absolute inset-0 animate-aurora bg-aurora opacity-90 dark:opacity-60" />
        <div
          className="absolute inset-0 opacity-[0.035] dark:opacity-[0.06]"
          style={{
            backgroundImage:
              'url("data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2760%27 height=%2760%27%3E%3Cfilter id=%27n%27%3E%3CfeTurbulence type=%27fractalNoise%27 baseFrequency=%270.9%27 numOctaves=%272%27/%3E%3C/filter%3E%3Crect width=%2760%27 height=%2760%27 filter=%27url(%23n)%27 opacity=%271%27/%3E%3C/svg%3E")',
          }}
        />
      </div>

      {/* Floating shapes */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[8%] top-[22%] h-16 w-16 animate-float rounded-2xl border border-primary-300/40 bg-primary-500/10 backdrop-blur-sm" />
        <div className="absolute right-[12%] top-[16%] h-24 w-24 animate-float-slow rounded-full border border-secondary-400/30 bg-secondary-500/10" />
        <div className="absolute bottom-[18%] left-[14%] h-12 w-12 animate-float-slow rounded-xl border border-accent-400/40 bg-accent-500/10" />
        <div className="absolute bottom-[28%] right-[8%] h-20 w-20 animate-float rounded-2xl border border-primary-300/30 bg-white/10" />
      </div>

      <div className="container-app grid items-center gap-14 py-16 lg:grid-cols-[1.1fr,0.9fr] lg:gap-8">
        <div>
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="eyebrow"
          >
            Creative Studio &middot; Est. 2019
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 text-4xl font-extrabold leading-[1.1] tracking-tight text-ink-900 dark:text-white sm:text-5xl lg:text-6xl"
          >
            <span className="gradient-text">Creative Ideas.</span>
            <br />
            Digital Solutions.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 max-w-lg text-lg leading-relaxed text-ink-600 dark:text-ink-200"
          >
            {brand.heroDescription}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <Link to="/portfolio" className="btn-primary">
              View Portfolio <ArrowUpRight size={18} />
            </Link>
            <Link to="/contact" className="btn-secondary">
              <PlayCircle size={18} /> Contact Us
            </Link>
          </motion.div>
        </div>

        {/* Signature element: an animated bezier "anchor path" — a nod to the pen tool at
            the heart of design craft, tracing the line between idea and execution. */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative hidden aspect-square items-center justify-center lg:flex"
        >
          <div className="glass-card absolute inset-6 rounded-3xl" />
          <svg viewBox="0 0 400 400" className="relative h-full w-full p-10">
            <motion.path
              d="M 60 320 C 120 100, 280 100, 340 260"
              fill="none"
              stroke="url(#heroGrad)"
              strokeWidth="3"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, ease: 'easeInOut', delay: 0.6 }}
            />
            <defs>
              <linearGradient id="heroGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#2563EB" />
                <stop offset="100%" stopColor="#7C3AED" />
              </linearGradient>
            </defs>
            {[
              { cx: 60, cy: 320, delay: 0.6 },
              { cx: 150, cy: 150, delay: 1.1 },
              { cx: 260, cy: 130, delay: 1.5 },
              { cx: 340, cy: 260, delay: 2.0 },
            ].map((node, i) => (
              <motion.circle
                key={i}
                cx={node.cx}
                cy={node.cy}
                r="7"
                fill="white"
                stroke="#2563EB"
                strokeWidth="2.5"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.4, delay: node.delay }}
              />
            ))}
          </svg>
          <div className="absolute -bottom-2 right-6 rounded-2xl bg-white px-5 py-3 text-center shadow-soft-lg dark:bg-ink-800">
            <p className="text-2xl font-extrabold text-ink-900 dark:text-white">150+</p>
            <p className="text-xs font-medium text-ink-400">Projects Delivered</p>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 sm:flex">
        <span className="text-xs font-medium uppercase tracking-widest text-ink-400">Scroll</span>
        <div className="h-8 w-5 rounded-full border-2 border-ink-300 dark:border-ink-600">
          <div className="mx-auto mt-1.5 h-1.5 w-1.5 animate-scroll-dot rounded-full bg-primary-500" />
        </div>
      </div>
    </section>
  )
}
