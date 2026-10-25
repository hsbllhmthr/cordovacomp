# Cordova Super Store — Web Company Profile

Website profil resmi **Cordova Super Store Makassar** — *One-Stop Islamic Store* terkemuka di Makassar sejak 1998.  
Tagline: *"Untuk Ibadah Terbaikmu"*  
Positioning: *"Satu tempat untuk berbagai kebutuhan ibadah dan keseharian keluarga Muslim."*

---

## 🛠️ Tech Stack

- **Framework:** React 18+ (SPA)
- **Build Tool:** Vite
- **Bahasa:** TypeScript
- **Styling:** Tailwind CSS + PostCSS + Autoprefixer
- **Ikon:** Lucide React (`lucide-react`)
- **Animasi:** Framer Motion (`framer-motion`)
- **SEO & Meta Tag:** React Helmet Async (`react-helmet-async`) + JSON-LD `LocalBusiness`

---

## 📂 Struktur Proyek

```
cordova-super-store-web/
├── public/
│   ├── favicon.svg
│   ├── robots.txt
│   ├── sitemap.xml
│   ├── og-image.jpg
│   └── images/
│       ├── hero/
│       ├── outlet/
│       ├── gallery/
│       └── channels/
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
│   │   ├── ui/
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── SectionTitle.tsx
│   │   │   ├── Container.tsx
│   │   │   ├── Lightbox.tsx
│   │   │   └── Reveal.tsx
│   │   └── seo/
│   │       └── Seo.tsx
│   ├── sections/
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
│   ├── data/
│   │   ├── company.ts
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
│   │   ├── whatsapp.ts
│   │   ├── seo.ts
│   │   └── analytics.ts
│   ├── pages/
│   │   ├── HomePage.tsx
│   │   └── NotFoundPage.tsx
│   ├── styles/
│   │   ├── index.css
│   │   └── tokens.css
│   ├── types/
│   │   └── index.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── vite-env.d.ts
├── .env.example
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

---

## 🚀 Panduan Memulai

### 1. Prasyarat
- Node.js (v18 atau lebih baru)
- npm / yarn / pnpm

### 2. Instalasi
```bash
npm install
```

### 3. Konfigurasi Lingkungan (.env)
Salin `.env.example` menjadi `.env` dan sesuaikan nomor WhatsApp dan tautan terkait:
```bash
cp .env.example .env
```

### 4. Menjalankan Server Development
```bash
npm run dev
```
Buka browser di `http://localhost:3000`.

### 5. Build untuk Produksi
```bash
npm run build
```
Hasil build siap dideploy akan berada di direktori `dist/`.

---

## 📝 Pengelolaan Konten
Seluruh teks, nomor kontak, kategori produk, galeri, dan milestone perjalanan disimpan di folder `src/data/`.  
Untuk mengubah informasi tanpa menyentuh kode tampilan, edit file terkait di folder `src/data/`.

