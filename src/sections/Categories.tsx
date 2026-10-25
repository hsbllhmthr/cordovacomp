import React from 'react';
import { motion } from 'framer-motion';

interface CategoryItem {
  id: number;
  title: string;
  image: string;
}

const categoryItems: CategoryItem[] = [
  {
    id: 1,
    title: "Al-Qur'an",
    image: '/images/quran.png',
  },
  {
    id: 2,
    title: 'Buku Islam',
    image: '/images/buku-islam.png',
  },
  {
    id: 3,
    title: 'Perlengkapan Ibadah',
    image: '/images/perlengkapan-ibadah.png',
  },
  {
    id: 4,
    title: 'Fashion Muslim',
    image: '/images/fashion-muslim.png',
  },
  {
    id: 5,
    title: 'Perlengkapan Haji',
    image: '/images/perlengkapan-haji.png',
  },
  {
    id: 6,
    title: 'Oleh-oleh Haji & Umrah',
    image: '/images/oleh-oleh-haji.png',
  },
  {
    id: 7,
    title: 'Herbal & Thibbun Nabawi',
    image: '/images/herbal.png',
  },
];

export const Categories: React.FC = () => {
  return (
    <section id="kategori" className="w-full bg-white relative font-['Poppins']">
      {/* Kanvas 1440px Center Aligned dengan Padding Konsisten Kiri & Kanan */}
      <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-[104px] pt-16 lg:pt-[110px] pb-20 lg:pb-[120px]">
        {/* Label Atas: 8 KATEGORI KEBUTUHAN MUSLIM */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="text-zinc-400 text-xs font-medium tracking-wider uppercase mb-3"
        >
          8 KATEGORI KEBUTUHAN MUSLIM
        </motion.div>

        {/* Judul Utama */}
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-blue-900 text-2xl sm:text-3xl font-medium leading-snug sm:leading-10 max-w-2xl mb-10 sm:mb-12 lg:mb-14"
        >
          Temukan aneka pilihan produk <br className="hidden sm:inline" />
          ibadah, edukasi, dan nutrisi untuk <br className="hidden sm:inline" />
          keseharian anda.
        </motion.h2>

        {/* 7 Card Grid Kategori Produk (Baris 1: 4 kartu seimbang, Baris 2: 3 kartu) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-x-[18px] lg:gap-y-[20px]">
          {categoryItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: index * 0.07, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="relative w-full h-[164px] rounded-[10px] border border-gray-200 overflow-hidden bg-white group cursor-pointer shadow-none"
            >
              {/* Gambar Kategori (Zoom & Efek Buram saat Hover) */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transform group-hover:scale-105 group-hover:blur-[2.5px] transition-all duration-300 ease-out"
              />

              {/* Overlay Putih & Judul Kategori Muncul saat Hover */}
              <div className="absolute inset-0 bg-white/0 group-hover:bg-white/85 transition-all duration-300 ease-out flex items-center justify-center p-4 text-center">
                <span className="text-blue-900 text-base sm:text-lg font-semibold tracking-wide opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 ease-out">
                  {item.title}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
