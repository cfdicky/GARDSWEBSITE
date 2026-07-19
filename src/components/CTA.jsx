import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import Reveal from './Reveal'

export default function CTA() {
  return (
    <section className="container-app py-10 md:py-16">
      <Reveal direction="scale">
        <div className="relative overflow-hidden rounded-3xl bg-brand-gradient px-8 py-16 text-center sm:px-16">
          <div className="pointer-events-none absolute -left-16 -top-16 h-56 w-56 rounded-full bg-white/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-16 -right-16 h-56 w-56 rounded-full bg-white/10 blur-3xl" />
          <h2 className="mx-auto max-w-xl text-3xl font-bold leading-tight text-white sm:text-4xl">
            Let's Build Something Amazing Together
          </h2>
          <p className="mx-auto mt-4 max-w-md text-white/85">
            Ceritakan tentang proyek Anda, dan mari kita wujudkan menjadi solusi digital yang berdampak.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-7 py-3.5 font-semibold text-primary-600 shadow-soft-lg transition-transform hover:-translate-y-0.5"
          >
            Get Started <ArrowUpRight size={18} />
          </Link>
        </div>
      </Reveal>
    </section>
  )
}
