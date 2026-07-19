import { Link } from 'react-router-dom'
import { Home } from 'lucide-react'
import Seo from '../components/Seo'

export default function NotFound() {
  return (
    <>
      <Seo title="Halaman Tidak Ditemukan" path="/404" />
      <section className="grid min-h-screen place-items-center px-5 text-center">
        <div>
          <p className="gradient-text text-7xl font-extrabold">404</p>
          <h1 className="mt-4 text-2xl font-bold text-ink-900 dark:text-white">Halaman tidak ditemukan</h1>
          <p className="mt-2 text-ink-500 dark:text-ink-300">
            Halaman yang Anda cari mungkin sudah dipindahkan atau tidak tersedia.
          </p>
          <Link to="/" className="btn-primary mt-8 inline-flex">
            <Home size={18} /> Kembali ke Beranda
          </Link>
        </div>
      </section>
    </>
  )
}
