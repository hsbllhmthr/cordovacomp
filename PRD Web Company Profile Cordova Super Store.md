# PRD — Web Company Profile Cordova Super Store

**Versi:** 1.0 (Draft) · **Tanggal:** 25 Oktober 2026 · **Stack:** React + Vite · **Sumber konten:** Draft Company Profile 2026 (PDF)

## 1. Ringkasan Produk

Cordova Super Store adalah *one-stop Islamic store* di Makassar (berdiri sejak 1998) yang melayani kebutuhan Muslim dan Muslimah: Al-Qur'an dan buku Islami, perlengkapan ibadah, fashion Muslim, perlengkapan haji dan umrah, kurma dan oleh-oleh haji umrah, herbal, serta produk pendukung keluarga Muslim.

Produk ini adalah **website company profile** yang mengubah draft PDF menjadi situs responsif yang bisa diakses publik, membangun kredibilitas, dan mengarahkan pengunjung ke kanal pembelian (outlet, WhatsApp, marketplace, media sosial).

**Tagline:** *Untuk Ibadah Terbaikmu* · **Positioning:** *"Satu tempat untuk berbagai kebutuhan ibadah dan keseharian keluarga Muslim."*

## 2. Tujuan dan Metrik Keberhasilan

| Tujuan | Metrik | Target awal |
| --- | --- | --- |
| Membangun kredibilitas brand | Bounce rate | < 55% |
| Mengarahkan pengunjung ke kanal belanja | Klik tombol WhatsApp, marketplace, dan Maps | ≥ 8% dari sesi |
| Menjaring kerja sama (reseller, lembaga, supplier) | Submit form atau klik WhatsApp kolaborasi | ≥ 10 lead/bulan |
| Mudah ditemukan di pencarian lokal | Muncul untuk kata kunci "toko Islami Makassar" dan "oleh-oleh haji Makassar" | Halaman 1 dalam 3 bulan |
| Performa baik di HP | Lighthouse Performance (mobile) | ≥ 90 |

## 3. Target Pengguna

1. **Individu dan keluarga** — mencari kebutuhan ibadah, hadiah, kebutuhan harian keluarga Muslim.
2. **Jamaah haji dan umrah** — perlengkapan perjalanan dan oleh-oleh.
3. **Reseller** — produk untuk dijual kembali dan pembelian jumlah banyak.
4. **Komunitas dan lembaga** — masjid, rumah Qur'an, sekolah, pesantren, institusi.
5. **Supplier, brand, dan mitra bisnis** — distribusi dan pengembangan kategori.

Perangkat utama: **HP (±75%)**, sehingga desain *mobile-first*.

## 4. Ruang Lingkup

**Termasuk (In Scope):**

- Situs statis satu halaman (*single-page* dengan navigasi anchor) berisi seluruh konten PDF.
- Tombol CTA WhatsApp (Admin 1 dan Admin 2), tautan Instagram, TikTok, marketplace, dan Google Maps.
- Form kontak/kolaborasi sederhana (opsional, lihat F-12).
- SEO dasar, Open Graph, *structured data* LocalBusiness.
- Konten dikelola lewat file data (JSON/TS), tanpa backend.

**Tidak termasuk (Out of Scope, fase ini):**

- E-commerce, keranjang, dan pembayaran (transaksi tetap lewat outlet, WhatsApp, marketplace).
- CMS/dashboard admin dan login.
- Multi-bahasa (fase 2: Inggris/Arab).

## 5. Struktur Halaman (Sitemap)

Mapping dari slide PDF ke section web:

| No | Section (ID anchor) | Sumber slide | Isi utama |
| --- | --- | --- | --- |
| 1 | **Hero** (`#beranda`) | Cover | Nama, "One-Stop Islamic Store", tagline, CTA WhatsApp + Lihat Produk |
| 2 | **Tentang** (`#tentang`) | Tentang Cordova | 3 paragraf profil + foto outlet |
| 3 | **Positioning** (`#keunggulan`) | Positioning Kami | Kutipan + 4 kartu: Lengkap, Mudah, Dekat, Fleksibel |
| 4 | **Kategori Produk** (`#produk`) | Kategori Produk | 8 kartu kategori |
| 5 | **Siapa yang Kami Layani** (`#layanan`) | Siapa yang Kami Layani | 4 segmen pelanggan |
| 6 | **Kanal Belanja** (`#kanal`) | Kanal Belanja & Pelayanan | Outlet, WhatsApp, Marketplace, Social Media |
| 7 | **Mengapa Cordova** (`#mengapa`) | Mengapa Cordova | 6 poin keunggulan |
| 8 | **Kolaborasi** (`#kolaborasi`) | Peluang Kolaborasi | 4 jenis kerja sama + CTA |
| 9 | **Nilai IKHLAS** (`#nilai`) | Nilai yang Kami Bawa | Akronim IKHLAS |
| 10 | **Galeri** (`#galeri`) | Aktivitas & Pengalaman Customer | 4 grup foto: Outlet & Display, Campaign & Promo, Event/Bazar, Pelayanan Customer |
| 11 | **Perjalanan** (`#perjalanan`) | Perjalanan Cordova | Timeline 1998 → 2026 |
| 12 | **Kontak** (`#kontak`) | Mari Terhubung | Alamat, WhatsApp, IG, TikTok, peta, QR |

## 6. Kebutuhan Fungsional

| ID | Kebutuhan | Prioritas | Kriteria Penerimaan |
| --- | --- | --- | --- |
| F-01 | Navbar *sticky* dengan anchor ke semua section, menu hamburger di mobile | P0 | Klik menu melakukan *smooth scroll*; menu aktif tersorot sesuai posisi scroll |
| F-02 | Hero dengan CTA "Chat WhatsApp" dan "Lihat Kategori Produk" | P0 | Tombol WA membuka `wa.me` dengan pesan awal terisi otomatis |
| F-03 | Section Tentang dengan teks dan foto outlet | P0 | Gambar *lazy-load*, ada atribut `alt` |
| F-04 | Kartu Positioning (4 kartu) | P0 | Responsif: 1 kolom (HP), 2 (tablet), 4 (desktop) |
| F-05 | Grid Kategori Produk (8 kategori) dengan ikon | P0 | Data dari file konfigurasi; klik kartu membuka WhatsApp dengan pesan sesuai kategori |
| F-06 | Section segmen pelanggan | P0 | 4 segmen tampil sesuai konten PDF |
| F-07 | Section Kanal Belanja dengan ikon/logo resmi dan tautan | P0 | Tombol aktif hanya jika URL tersedia; jika kosong, kartu tidak menampilkan tautan |
| F-08 | Section Mengapa Cordova (6 poin) | P1 | Tampil sebagai daftar ber-ikon centang |
| F-09 | Section Kolaborasi dengan CTA "Hubungi untuk Kerja Sama" | P0 | CTA membuka WhatsApp dengan template pesan kolaborasi |
| F-10 | Section Nilai IKHLAS (6 huruf, makna masing-masing) | P1 | Animasi *reveal* saat masuk viewport |
| F-11 | Galeri foto dengan *lightbox* | P1 | Navigasi keyboard dan *swipe* di mobile |
| F-12 | Form kolaborasi (nama, instansi, jenis kerja sama, pesan) yang dikirim ke WhatsApp atau layanan form (Formspree/EmailJS) | P2 | Validasi input; tampil status berhasil/gagal |
| F-13 | Timeline Perjalanan (minimal 1998 dan 2026, mudah ditambah) | P1 | Data dari file konfigurasi; horizontal di desktop, vertikal di mobile |
| F-14 | Section Kontak: alamat, 2 nomor WhatsApp, IG, TikTok, embed Google Maps, QR code | P0 | Nomor klik-untuk-chat; peta tampil tanpa memperlambat *first load* (lazy) |
| F-15 | Tombol WhatsApp melayang (*floating*) di semua halaman | P1 | Tidak menutupi konten penting di mobile |
| F-16 | Tombol *scroll to top* dan footer dengan hak cipta | P2 | — |

## 7. Kebutuhan Non-Fungsional

- **Performa:** LCP < 2,5 detik di 4G; gambar format WebP/AVIF, ukuran maksimum 200 KB per gambar; font *self-hosted* atau `font-display: swap`.
- **Responsif:** breakpoint 360, 768, 1024, 1280 px.
- **Aksesibilitas:** kontras warna WCAG AA, `alt` pada semua gambar, fokus keyboard terlihat, HTML semantik (`header`, `main`, `section`, `footer`).
- **SEO:** `title` dan `meta description` unik, Open Graph dan Twitter Card, `sitemap.xml`, `robots.txt`, JSON-LD `LocalBusiness` (alamat, telepon, jam buka).
- **Keamanan:** tidak menyimpan data pribadi di klien; semua tautan eksternal memakai `rel="noopener noreferrer"`; HTTPS.
- **Kompatibilitas browser:** dua versi terakhir Chrome, Safari, Edge, Firefox; Android 9+ dan iOS 14+.
- **Maintainability:** konten terpisah dari komponen sehingga staf non-teknis hanya mengubah file data.

## 8. Desain dan Identitas Visual

Mengikuti draft PDF:

| Token | Nilai (perkiraan dari PDF) | Penggunaan |
| --- | --- | --- |
| `navy` | `#14355A` | Judul, panel cover, footer |
| `primary` | `#1F66B5` | Aksen, label section, tombol |
| `soft` | `#EEF6FD` | Latar kartu |
| `ink` | `#2B2F36` | Teks isi |
| `muted` | `#6B7280` | Catatan, teks sekunder |

- **Tipografi:** sans-serif bersih (disarankan *Inter* atau *Plus Jakarta Sans*), judul tebal.
- **Komponen:** kartu sudut membulat (radius 24 px) dengan bayangan lembut, label section huruf kapital kecil, garis aksen biru di atas halaman.
- **Nada konten:** hangat, sopan, islami, profesional.

## 9. Tech Stack

| Lapisan | Pilihan | Alasan |
| --- | --- | --- |
| Framework | **React 18+** | Sesuai permintaan, ekosistem luas |
| Build tool | **Vite** | *Dev server* cepat, build ringan |
| Bahasa | **TypeScript** (disarankan) | Aman untuk data konten; JavaScript tetap bisa dipakai |
| Styling | **Tailwind CSS** + design token di `tailwind.config` | Konsisten dan cepat; alternatif CSS Modules |
| Ikon | `lucide-react` | Ringan, konsisten |
| Animasi | `framer-motion` (opsional) | Efek *reveal* sederhana |
| SEO | `react-helmet-async` | Meta tag per halaman |
| Routing | `react-router-dom` (hanya jika ada halaman tambahan, mis. 404 atau kebijakan privasi) | Fase 1 cukup anchor |
| Lint/format | ESLint + Prettier | Kode rapi dan seragam |
| Pengujian | Vitest + Testing Library (komponen kritis) | Opsional |
| Deploy | **Vercel / Netlify / Cloudflare Pages** | Gratis, HTTPS, CI otomatis dari Git |

> **Catatan SEO:** karena React + Vite menghasilkan SPA, pertimbangkan *prerender* (mis. `vite-plugin-ssr`/`vite-ssg` atau `react-snap`) agar mesin pencari membaca konten lengkap.

## 10. Struktur Folder

```
cordova-super-store-web/
├── public/
│   ├── favicon.svg
│   ├── robots.txt
│   ├── sitemap.xml
│   ├── og-image.jpg                  # gambar preview saat dibagikan
│   └── images/
│       ├── hero/
│       ├── outlet/
│       ├── gallery/
│       └── channels/                 # logo WhatsApp, IG, TikTok, marketplace
├── src/
│   ├── assets/
│   │   ├── icons/
│   │   └── fonts/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── FloatingWhatsApp.tsx
│   │   │   └── ScrollToTop.tsx
│   │   ├── ui/                       # komponen generik, dipakai ulang
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── SectionTitle.tsx
│   │   │   ├── Container.tsx
│   │   │   ├── Lightbox.tsx
│   │   │   └── Reveal.tsx
│   │   └── seo/
│   │       └── Seo.tsx
│   ├── sections/                     # satu file per section halaman
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Positioning.tsx
│   │   ├── ProductCategories.tsx
│   │   ├── Audience.tsx
│   │   ├── Channels.tsx
│   │   ├── WhyCordova.tsx
│   │   ├── Collaboration.tsx
│   │   ├── Values.tsx
│   │   ├── Gallery.tsx
│   │   ├── Timeline.tsx
│   │   └── Contact.tsx
│   ├── data/                         # seluruh konten, mudah diedit
│   │   ├── company.ts                # nama, tagline, alamat, kontak
│   │   ├── categories.ts
│   │   ├── audiences.ts
│   │   ├── channels.ts
│   │   ├── reasons.ts
│   │   ├── collaborations.ts
│   │   ├── values.ts
│   │   ├── gallery.ts
│   │   └── timeline.ts
│   ├── hooks/
│   │   ├── useScrollSpy.ts
│   │   └── useInView.ts
│   ├── lib/
│   │   ├── whatsapp.ts               # pembuat tautan wa.me + template pesan
│   │   ├── seo.ts                    # JSON-LD LocalBusiness
│   │   └── analytics.ts              # event klik CTA
│   ├── pages/
│   │   ├── HomePage.tsx              # merangkai semua section
│   │   └── NotFoundPage.tsx
│   ├── styles/
│   │   ├── index.css                 # direktif Tailwind + gaya global
│   │   └── tokens.css                # variabel warna dan spacing
│   ├── types/
│   │   └── index.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── vite-env.d.ts
├── .env.example                      # VITE_WA_ADMIN_1, VITE_WA_ADMIN_2, VITE_GA_ID, dst.
├── .eslintrc.cjs
├── .prettierrc
├── .gitignore
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.ts
├── tsconfig.json
├── vite.config.ts
└── README.md
```

**Prinsip penataan:**

- `sections/` = bagian halaman; `components/ui/` = blok pembangun generik; `data/` = konten murni, tanpa JSX.
- Mengubah isi situs (mis. menambah kategori produk atau milestone) cukup dengan mengedit satu file di `data/`.
- Alias impor `@/` mengarah ke `src/` (atur di `vite.config.ts` dan `tsconfig.json`).
- Nomor WhatsApp dan ID analitik disimpan di `.env`, bukan di kode.

Contoh bentuk data:

```ts
// src/data/categories.ts
export const categories = [
  { id: 'alquran', title: "Al-Qur'an", icon: 'BookOpen' },
  { id: 'buku-islami', title: 'Buku Islami', icon: 'Library' },
  { id: 'perlengkapan-ibadah', title: 'Perlengkapan Ibadah', icon: 'Moon' },
  { id: 'fashion-muslim', title: 'Fashion Muslim dan Muslimah', icon: 'Shirt' },
  { id: 'haji-umrah', title: 'Perlengkapan Haji & Umrah', icon: 'Luggage' },
  { id: 'kurma-oleh-oleh', title: 'Kurma & Oleh-Oleh Haji Umrah', icon: 'Gift' },
  { id: 'herbal', title: 'Herbal', icon: 'Leaf' },
  { id: 'produk-lainnya', title: 'Produk Pendukung Muslim Lainnya', icon: 'Package' },
] as const;
```

## 11. Alur Pengguna Utama

1. **Calon pembeli:** buka situs → lihat kategori produk → klik kategori → WhatsApp terbuka dengan pesan "Halo Cordova, saya ingin menanyakan produk *\[kategori\]*" → atau klik Maps untuk datang ke outlet.
2. **Reseller/lembaga:** buka section Kolaborasi → klik CTA → WhatsApp dengan template kerja sama.
3. **Supplier/brand:** section Kolaborasi → Kontak → hubungi admin.

## 12. Analitik

Google Analytics 4 atau Plausible, dengan *event*: `click_whatsapp`, `click_category`, `click_marketplace`, `click_maps`, `click_instagram`, `click_tiktok`, `submit_collab_form`.

## 13. Rencana Pengerjaan

| Fase | Pekerjaan | Estimasi |
| --- | --- | --- |
| 1 | Setup proyek, design token, komponen UI dasar, layout | 2 hari |
| 2 | Section Hero–Kanal (F-02 s.d. F-07) | 3 hari |
| 3 | Section Mengapa–Kontak (F-08 s.d. F-14) | 3 hari |
| 4 | SEO, analitik, optimasi gambar dan performa | 2 hari |
| 5 | QA lintas perangkat, perbaikan, deploy | 2 hari |

Total ±12 hari kerja, belum termasuk waktu menunggu aset dari klien.

## 14. Risiko dan Ketergantungan

- Foto asli beresolusi tinggi belum tersedia (placeholder di PDF). **Dampak:** kredibilitas situs menurun jika memakai gambar *stock*.
- Tautan marketplace dan website masih kosong di PDF.
- SPA kurang optimal untuk SEO tanpa *prerender*.
- Data riset pelanggan belum ada (PDF menyebut dapat ditambahkan di versi final).

## 15. Pertanyaan Terbuka dan Temuan pada Draft PDF

1. **Aset visual:** logo resmi, foto outlet/interior, foto empat kategori galeri, ikon/logo kanal resmi — kapan disediakan?
2. **Tautan kosong:** URL marketplace (Tokopedia/Shopee/TikTok Shop?) dan website — apa saja yang aktif?
3. **Timeline:** hanya ada 1998 dan 2026; milestone di antaranya (pembukaan cabang, penghargaan, dll.) perlu dilengkapi.
4. **Jam operasional** dan koordinat Google Maps outlet belum ada di PDF.
5. **Penulisan:** "SPRITUAL" pada nilai IKHLAS sebaiknya "SPIRITUAL"; "Oleh-Oleh" pada slide kategori tampak terpotong menjadi "OlehOleh"; "CSS" di slide Siapa yang Kami Layani sebaiknya ditulis lengkap "Cordova Super Store" karena bisa membingungkan dengan *Cascading Style Sheets*.
6. **Penamaan akun:** Instagram tertulis "@ Cordova Super Store" (dengan spasi) — perlu *handle* resmi tanpa spasi.
7. **Bahasa:** apakah perlu versi Inggris/Arab pada fase berikutnya?
8. **Form kolaborasi:** dikirim ke WhatsApp saja, atau juga ke email?
9. **Domain dan hosting:** domain sudah dimiliki atau perlu dibeli?

## 16. Definisi Selesai (Definition of Done)

- Seluruh 12 section tampil sesuai konten PDF yang sudah direvisi.
- Lolos uji di HP (Android/iOS), tablet, dan desktop.
- Lighthouse mobile: Performance ≥ 90, Accessibility ≥ 90, SEO ≥ 95.
- Semua tautan CTA berfungsi dan terlacak di analitik.
- Situs ter-*deploy* di domain final dengan HTTPS dan terdaftar di Google Search Console serta Google Business Profile.
