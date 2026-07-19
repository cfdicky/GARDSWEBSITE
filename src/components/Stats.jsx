import CountUp from 'react-countup'
import { motion } from 'framer-motion'
import { stats } from '../data/company'

export default function Stats() {
  return (
    <section className="relative overflow-hidden bg-brand-gradient py-16">
      <div className="pointer-events-none absolute inset-0 opacity-20 mix-blend-overlay">
        <div className="absolute -left-10 -top-10 h-64 w-64 rounded-full bg-white blur-3xl" />
        <div className="absolute -bottom-10 -right-10 h-64 w-64 rounded-full bg-white blur-3xl" />
      </div>
      <div className="container-app relative grid grid-cols-2 gap-8 lg:grid-cols-4">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="text-center text-white"
          >
            <p className="text-4xl font-extrabold sm:text-5xl">
              <CountUp end={stat.value} duration={2.4} enableScrollSpy scrollSpyOnce />
              {stat.suffix}
            </p>
            <p className="mt-2 text-sm font-medium text-white/80">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
