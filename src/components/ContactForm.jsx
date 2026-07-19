import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { motion } from 'framer-motion'
import { CheckCircle2, Send } from 'lucide-react'
import { services } from '../data/services'
import { cn } from '../utils/cn'

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({ mode: 'onBlur' })

  const onSubmit = async (data) => {
    // Wire this up to your email service, form backend, or API route.
    await new Promise((resolve) => setTimeout(resolve, 900))
    console.log('Contact form submission:', data)
    setSubmitted(true)
    reset()
  }

  const inputClass = (hasError) =>
    cn(
      'w-full rounded-xl border bg-white px-4 py-3 text-sm text-ink-900 placeholder:text-ink-400 transition-colors focus:border-primary-500 dark:bg-ink-800/60 dark:text-white',
      hasError ? 'border-red-400' : 'border-ink-200 dark:border-white/10'
    )

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col items-center justify-center rounded-2xl border border-ink-100 bg-white p-12 text-center dark:border-white/10 dark:bg-ink-800/40"
      >
        <CheckCircle2 className="text-primary-500" size={48} />
        <h3 className="mt-4 text-xl font-semibold text-ink-900 dark:text-white">Pesan Terkirim!</h3>
        <p className="mt-2 max-w-sm text-sm text-ink-500 dark:text-ink-300">
          Terima kasih sudah menghubungi Gards Creative. Tim kami akan membalas dalam 1x24 jam.
        </p>
        <button onClick={() => setSubmitted(false)} className="btn-secondary mt-6 !py-2.5 !px-5 text-sm">
          Kirim pesan lain
        </button>
      </motion.div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-ink-700 dark:text-ink-200">
            Nama Lengkap
          </label>
          <input
            id="name"
            type="text"
            placeholder="John Doe"
            className={inputClass(errors.name)}
            {...register('name', { required: 'Nama wajib diisi', minLength: { value: 2, message: 'Nama terlalu pendek' } })}
          />
          {errors.name && <p className="mt-1.5 text-xs text-red-500">{errors.name.message}</p>}
        </div>

        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-ink-700 dark:text-ink-200">
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="john@email.com"
            className={inputClass(errors.email)}
            {...register('email', {
              required: 'Email wajib diisi',
              pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Format email tidak valid' },
            })}
          />
          {errors.email && <p className="mt-1.5 text-xs text-red-500">{errors.email.message}</p>}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-ink-700 dark:text-ink-200">
            Nomor Telepon
          </label>
          <input
            id="phone"
            type="tel"
            placeholder="0812-3456-7890"
            className={inputClass(errors.phone)}
            {...register('phone', {
              required: 'Nomor telepon wajib diisi',
              pattern: { value: /^[0-9+\-\s()]{8,20}$/, message: 'Format nomor telepon tidak valid' },
            })}
          />
          {errors.phone && <p className="mt-1.5 text-xs text-red-500">{errors.phone.message}</p>}
        </div>

        <div>
          <label htmlFor="service" className="mb-1.5 block text-sm font-medium text-ink-700 dark:text-ink-200">
            Layanan yang Dibutuhkan
          </label>
          <select
            id="service"
            defaultValue=""
            className={inputClass(errors.service)}
            {...register('service', { required: 'Silakan pilih salah satu layanan' })}
          >
            <option value="" disabled>
              Pilih layanan
            </option>
            {services.map((s) => (
              <option key={s.id} value={s.title}>
                {s.title}
              </option>
            ))}
          </select>
          {errors.service && <p className="mt-1.5 text-xs text-red-500">{errors.service.message}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-ink-700 dark:text-ink-200">
          Pesan
        </label>
        <textarea
          id="message"
          rows={5}
          placeholder="Ceritakan sedikit tentang proyek Anda..."
          className={inputClass(errors.message)}
          {...register('message', {
            required: 'Pesan wajib diisi',
            minLength: { value: 10, message: 'Pesan minimal 10 karakter' },
          })}
        />
        {errors.message && <p className="mt-1.5 text-xs text-red-500">{errors.message.message}</p>}
      </div>

      <button type="submit" disabled={isSubmitting} className="btn-primary w-full sm:w-auto">
        {isSubmitting ? 'Mengirim...' : 'Kirim Pesan'} <Send size={16} />
      </button>
    </form>
  )
}
