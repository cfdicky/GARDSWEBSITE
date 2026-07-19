import { Link } from 'react-router-dom'
import { Mail, MapPin, ArrowUpRight } from 'lucide-react'
import { brand, navLinks, contact, socials } from '../data/company'
import { services } from '../data/services'
import { getIcon } from '../utils/iconMap'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-ink-100 bg-ink-900 text-ink-200 dark:border-white/5">
      <div className="container-app grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
        <div className="lg:col-span-1">
          <Link to="/" className="flex items-center gap-2.5">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-brand-gradient text-sm font-bold text-white">
              G
            </span>
            <span className="text-lg font-bold text-white">{brand.shortName}.</span>
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-400">{brand.tagline}</p>
          <div className="mt-6 flex gap-3">
            {socials.map((social) => {
              const Icon = getIcon(social.icon)
              return (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={social.label}
                  className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-ink-200 transition-colors hover:border-primary-400 hover:text-primary-400"
                >
                  <Icon size={17} />
                </a>
              )
            })}
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-white">Quick Links</h4>
          <ul className="mt-5 space-y-3">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link to={link.path} className="text-sm text-ink-400 transition-colors hover:text-primary-400">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-white">Services</h4>
          <ul className="mt-5 space-y-3">
            {services.slice(0, 6).map((service) => (
              <li key={service.id}>
                <span className="text-sm text-ink-400">{service.title}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-white">Contact</h4>
          <ul className="mt-5 space-y-4 text-sm text-ink-400">
            <li className="flex items-start gap-3">
              <Mail size={16} className="mt-0.5 shrink-0 text-primary-400" />
              <a href={`mailto:${contact.email}`} className="hover:text-primary-400">
                {contact.email}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <MapPin size={16} className="mt-0.5 shrink-0 text-primary-400" />
              <span>{contact.address}</span>
            </li>
          </ul>
          <a
            href={contact.whatsappLink}
            target="_blank"
            rel="noreferrer noopener"
            className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary-400 hover:text-primary-300"
          >
            Chat via WhatsApp <ArrowUpRight size={14} />
          </a>
        </div>
      </div>

      <div className="border-t border-white/5">
        <div className="container-app flex flex-col items-center justify-between gap-3 py-6 text-xs text-ink-400 sm:flex-row">
          <p>
            © {year} {brand.name}. All rights reserved.
          </p>
          <p>Designed &amp; built with care in Indonesia.</p>
        </div>
      </div>
    </footer>
  )
}
