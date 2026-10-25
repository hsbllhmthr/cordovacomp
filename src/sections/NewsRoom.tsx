import React from 'react';
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';

interface ArticleItem {
  id: number;
  category: string;
  title: string;
  date: string;
  image: string;
  featured?: boolean;
}

const articlesData: ArticleItem[] = [
  {
    id: 1,
    featured: true,
    category: 'PRESS RELEASE',
    title: 'Pastikan Kebutuhan Ibadah Umat Terpenuhi, Cordova Super Store Perluas Layanan One-Stop Store Makassar',
    date: '24 Oktober 2026',
    image: '/images/bg-outlet.png',
  },
  {
    id: 2,
    category: 'PRESS RELEASE',
    title: 'Sambut Musim Umrah, Cordova Hadirkan Paket Lengkap Perlengkapan Ibadah Siap Berangkat',
    date: '22 Oktober 2026',
    image: '/images/features/feature-3.png',
  },
  {
    id: 3,
    category: 'PRESS RELEASE',
    title: "Penyediaan Mushaf Al-Qur'an Bertashih Resmi Kemenag dan Pustaka Islam Bermutu",
    date: '19 Oktober 2026',
    image: '/images/features/feature-1.png',
  },
  {
    id: 4,
    category: 'PRESS RELEASE',
    title: 'Jaminan Keaslian 100%: Kurma Pilihan, Madu Murni, dan Herbal Thibbun Nabawi',
    date: '15 Oktober 2026',
    image: '/images/features/feature-4.png',
  },
  {
    id: 5,
    category: 'PRESS RELEASE',
    title: 'Kolaborasi Strategis Cordova Bersama Puluhan Mitra Travel Umrah dan Komunitas',
    date: '10 Oktober 2026',
    image: '/images/features/feature-2.png',
  },
];

export const NewsRoom: React.FC = () => {
  const featuredArticle = articlesData.find((a) => a.featured) || articlesData[0];
  const gridArticles = articlesData.filter((a) => !a.featured);

  return (
    <section id="berita" className="w-full bg-white relative font-['Poppins']">
      {/* Kanvas 1440px Center Aligned Sesuai Desain Figma */}
      <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-[104px] pt-16 lg:pt-[87px] pb-20 lg:pb-[115px]">
        {/* Header Section: Informasi Media & Judul Utama */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="mb-8 lg:mb-10"
        >
          <span className="text-neutral-400 text-xs font-medium uppercase tracking-wider block mb-2">
            INFORMASI MEDIA
          </span>
          <h2 className="text-blue-900 text-2xl sm:text-3xl font-medium leading-snug sm:leading-10">
            Cordova News Room
          </h2>
        </motion.div>

        {/* Layout Grid Artikel Seimbang: 4 Kolom x 2 Baris dengan Gap Mepet & Presisi */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-3 lg:gap-3">
          {/* Kartu Utama Kiri (Featured): Span 2 Kolom x 2 Baris */}
          <motion.article
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.55 }}
            className="sm:col-span-2 lg:col-span-2 lg:row-span-2 bg-black rounded-[10px] relative overflow-hidden flex flex-col justify-end p-6 sm:p-8 lg:p-10 group cursor-pointer transition-all duration-300 hover:brightness-105 min-h-[380px] lg:min-h-0"
          >
            {/* Gambar Background Sesuai Tema Artikel */}
            <div className="absolute inset-0 z-0">
              <img
                src={featuredArticle.image}
                alt={featuredArticle.title}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              {/* Overlay Gradient Halus untuk Keterbacaan Teks Maksimal */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/75 to-black/30 group-hover:via-black/65 transition-colors duration-300" />
            </div>

            {/* Konten Teks Kartu Utama */}
            <div className="relative z-10">
              <span className="text-white text-xs font-normal tracking-wider uppercase block mb-2.5">
                {featuredArticle.category}
              </span>
              <h3 className="text-white text-base sm:text-lg lg:text-xl font-semibold leading-snug sm:leading-relaxed mb-3.5 line-clamp-3">
                {featuredArticle.title}
              </h3>
              <div className="flex items-center gap-1.5 text-white/80 text-xs font-normal">
                <Calendar className="w-3.5 h-3.5 text-white/70 shrink-0" />
                <span>{featuredArticle.date}</span>
              </div>
            </div>
          </motion.article>

          {/* 4 Kartu Kanan: Masing-masing 1 Kolom x 1 Baris (2 Baris Sejajar) */}
          {gridArticles.map((article, index) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="col-span-1 bg-black rounded-[10px] relative overflow-hidden flex flex-col justify-end p-5 sm:p-6 group cursor-pointer transition-all duration-300 hover:brightness-105 h-[254px]"
            >
              {/* Gambar Background Sesuai Tema Artikel */}
              <div className="absolute inset-0 z-0">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                {/* Overlay Gradient Halus */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/30 group-hover:via-black/70 transition-colors duration-300" />
              </div>

              {/* Konten Teks Kartu */}
              <div className="relative z-10">
                <span className="text-white text-xs font-normal tracking-wider uppercase block mb-2">
                  {article.category}
                </span>
                <h4 className="text-white text-sm sm:text-[15px] font-semibold leading-snug mb-3 line-clamp-3">
                  {article.title}
                </h4>
                <div className="flex items-center gap-1.5 text-white/80 text-xs font-normal">
                  <Calendar className="w-3.5 h-3.5 text-white/70 shrink-0" />
                  <span>{article.date}</span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
