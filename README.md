# Gards Creative — Company Profile & Portfolio Website

Website company profile dan portfolio untuk **Gards Creative**, dibangun dengan React 18, Vite, Tailwind CSS, dan Framer Motion.

## Menjalankan Proyek

```bash
npm install
npm run dev
```

Buka `http://localhost:5173` di browser.

Build untuk produksi:

```bash
npm run build
npm run preview
```

## Mengubah Konten Tanpa Menyentuh Kode Komponen

Semua teks, layanan, portfolio, testimoni, dan FAQ berasal dari folder `src/data/`:

| File                        | Isi                                          |
| --------------------------- | --------------------------------------------- |
| `src/data/company.js`       | Nama brand, tagline, kontak, statistik, proses, tentang kami |
| `src/data/services.js`      | Daftar layanan (judul, deskripsi, ikon)       |
| `src/data/portfolio.js`     | Daftar proyek portfolio & kategori filter     |
| `src/data/testimonials.js`  | Testimoni klien untuk carousel                |
| `src/data/faq.js`           | Daftar pertanyaan & jawaban FAQ                |

Cukup edit file-file di atas — tidak perlu mengubah komponen React apa pun.

### Mengganti Gambar

Gambar portfolio, tim, dan testimoni menggunakan path placeholder seperti `/images/portfolio/project-1.jpg`.
Tambahkan gambar asli Anda ke folder `public/images/...` sesuai path yang direferensikan di `src/data/`,
atau ganti langsung path-nya dengan URL gambar Anda. Jika gambar tidak ditemukan, sistem akan otomatis
menampilkan gambar placeholder dari Unsplash/Pravatar sebagai fallback.

### Mengganti Warna & Font

Palet warna dan skala tipografi diatur di `tailwind.config.js` (bagian `theme.extend.colors`).
Font utama adalah **Inter**, dimuat via Google Fonts di `index.html`.

## Struktur Folder

```text
src/
├── assets/            # gambar & ikon statis (opsional)
├── components/        # komponen UI reusable (Navbar, Hero, Services, dll.)
├── data/               # SEMUA konten website — edit di sini
├── hooks/              # custom hooks (mis. useTheme untuk dark mode)
├── layouts/            # MainLayout (Navbar + Footer + Outlet)
├── pages/              # Home, AboutPage, PortfolioPage, ContactPage
├── utils/              # helper functions (cn, iconMap)
├── App.jsx             # definisi routing
└── main.jsx            # entry point aplikasi
```

## Fitur

- ⚡️ React 18 + Vite — build cepat, HMR instan
- 🎨 Tailwind CSS dengan design token brand (primary/secondary/accent)
- 🧭 React Router DOM — routing multi-halaman
- 🎬 Framer Motion — animasi scroll-reveal, stagger, hover
- 🖼️ Swiper — carousel testimoni
- 🔢 React CountUp — statistik dengan animasi angka
- 📝 React Hook Form — form kontak dengan validasi lengkap
- 🔍 React Helmet Async — meta tag SEO per halaman
- 🌗 Dark mode dengan preferensi tersimpan di `localStorage`
- 📱 Mobile-first & fully responsive
- ♿️ Aksesibilitas: fokus keyboard terlihat, `prefers-reduced-motion` dihormati
- 🧹 ESLint + Prettier untuk konsistensi kode

## Catatan Deployment

- Perbarui `index.html` (meta `og:image`, `canonical`) dan `public/sitemap.xml` dengan domain asli sebelum go-live.
- Sambungkan `ContactForm.jsx` (`onSubmit`) ke backend/email service pilihan Anda (mis. Formspree, Resend, atau API sendiri).
- Ganti `contact.mapEmbedUrl` di `src/data/company.js` dengan embed Google Maps lokasi asli Anda.
