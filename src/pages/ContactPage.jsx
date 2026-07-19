import { Mail, MapPin, MessageCircle, Clock } from 'lucide-react'
import Seo from '../components/Seo'
import Reveal from '../components/Reveal'
import ContactForm from '../components/ContactForm'
import { contact } from '../data/company'

const infoCards = [
  { icon: Mail, label: 'Email', value: contact.email, href: `mailto:${contact.email}` },
  { icon: MessageCircle, label: 'WhatsApp', value: contact.whatsapp, href: contact.whatsappLink },
  { icon: MapPin, label: 'Alamat', value: contact.address, href: null },
  { icon: Clock, label: 'Jam Kerja', value: 'Senin – Jumat, 09.00 – 18.00', href: null },
]

export default function ContactPage() {
  return (
    <>
      <Seo
        title="Kontak"
        path="/contact"
        description="Hubungi Gards Creative untuk mendiskusikan proyek branding, website, atau kebutuhan digital lainnya."
      />

      <section className="pb-10 pt-32">
        <div className="container-app max-w-2xl text-center">
          <Reveal direction="up">
            <span className="eyebrow">Hubungi Kami</span>
            <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-ink-900 dark:text-white sm:text-5xl">
              Mari <span className="gradient-text">berdiskusi</span> tentang proyek Anda
            </h1>
            <p className="mt-4 text-ink-600 dark:text-ink-300">
              Isi form di bawah atau hubungi kami langsung — tim kami akan merespons dalam 1x24 jam kerja.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-24">
        <div className="container-app grid gap-10 lg:grid-cols-[0.8fr,1.2fr]">
          <div className="space-y-4">
            {infoCards.map((card, i) => {
              const Icon = card.icon
              const content = (
                <div className="flex items-start gap-4 rounded-2xl border border-ink-100 bg-white p-5 transition-colors hover:border-primary-300 dark:border-white/10 dark:bg-ink-800/40">
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-gradient-soft text-primary-600 dark:text-primary-300">
                    <Icon size={19} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-ink-400">{card.label}</p>
                    <p className="mt-1 text-sm font-medium text-ink-900 dark:text-white">{card.value}</p>
                  </div>
                </div>
              )
              return (
                <Reveal key={card.label} direction="up" delay={i * 0.06}>
                  {card.href ? (
                    <a href={card.href} target="_blank" rel="noreferrer noopener">
                      {content}
                    </a>
                  ) : (
                    content
                  )}
                </Reveal>
              )
            })}

            {/* Google Maps placeholder — replace src with your actual embed URL */}
            <Reveal direction="up" delay={0.24} className="overflow-hidden rounded-2xl border border-ink-100 dark:border-white/10">
              <div className="flex aspect-video items-center justify-center bg-ink-100 text-sm text-ink-400 dark:bg-ink-800">
                <iframe
                  title="Lokasi Gards Creative"
                  src={contact.mapEmbedUrl}
                  className="h-full w-full grayscale-[20%]"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </Reveal>
          </div>

          <Reveal direction="left" className="rounded-3xl border border-ink-100 bg-white p-8 dark:border-white/10 dark:bg-ink-800/40 sm:p-10">
            <h2 className="text-xl font-bold text-ink-900 dark:text-white">Kirim Pesan</h2>
            <p className="mt-1.5 text-sm text-ink-500 dark:text-ink-300">
              Ceritakan kebutuhan proyek Anda, tim kami akan segera menghubungi kembali.
            </p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
