import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import { Star, Quote } from 'lucide-react'
import Reveal from './Reveal'
import { testimonials } from '../data/testimonials'

import 'swiper/css'
import 'swiper/css/pagination'

export default function Testimonials() {
  return (
    <section className="section-pad">
      <div className="container-app">
        <Reveal direction="up" className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Testimoni</span>
          <h2 className="mt-5 text-3xl font-bold tracking-tight text-ink-900 dark:text-white sm:text-4xl">
            Dipercaya oleh brand yang bertumbuh
          </h2>
        </Reveal>

        <div className="mt-14">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="!pb-14"
          >
            {testimonials.map((t) => (
              <SwiperSlide key={t.id}>
                <div className="flex h-full flex-col rounded-2xl border border-ink-100 bg-white p-7 shadow-soft dark:border-white/10 dark:bg-ink-800/40">
                  <Quote className="text-primary-300" size={28} />
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-ink-600 dark:text-ink-200">
                    "{t.review}"
                  </p>
                  <div className="mt-5 flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        size={14}
                        className={i < t.rating ? 'fill-accent-500 text-accent-500' : 'text-ink-200 dark:text-ink-600'}
                      />
                    ))}
                  </div>
                  <div className="mt-4 flex items-center gap-3">
                    <img
                      src={t.photo}
                      alt={t.name}
                      loading="lazy"
                      onError={(e) => {
                        e.currentTarget.src = `https://i.pravatar.cc/80?u=${t.id}`
                      }}
                      className="h-11 w-11 rounded-full object-cover"
                    />
                    <div>
                      <p className="text-sm font-semibold text-ink-900 dark:text-white">{t.name}</p>
                      <p className="text-xs text-ink-400">
                        {t.position}, {t.company}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  )
}
