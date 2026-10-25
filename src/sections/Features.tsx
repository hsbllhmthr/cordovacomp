import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

interface FeatureCardProps {
  tag: string;
  title: string;
  image: string;
  objectPosition?: string;
  href?: string;
}

const featuresData: FeatureCardProps[] = [
  {
    tag: 'LENGKAP',
    title: 'Menyediakan 8 kategori kebutuhan islami dalam satu tempat',
    image: '/images/features/feature-1.png',
    objectPosition: 'object-center',
    href: '#produk',
  },
  {
    tag: 'MUDAH',
    title: 'Belanja leluasa dan pesan secara praktis melalui whatsapp',
    image: '/images/features/feature-2.png',
    objectPosition: 'object-center',
    href: 'https://wa.me/6281234567890?text=Halo%20Cordova%20Super%20Store%2C%20saya%20ingin%20belanja',
  },
  {
    tag: 'DEKAT',
    title: 'Lokasi strategis di kota makassar dan mudah untuk di jangkau',
    image: '/images/features/feature-3.png',
    objectPosition: 'object-top',
    href: '#lokasi',
  },
  {
    tag: 'FLEKSIBEL',
    title: 'Melayani pembelian eceran, paket, hingga pesanan besar',
    image: '/images/features/feature-4.png',
    objectPosition: 'object-center',
    href: 'https://wa.me/6281234567890?text=Halo%20Cordova%20Super%20Store%2C%20saya%20ingin%20konsultasi%20pesanan%20paket%20atau%20besar',
  },
];

export const Features: React.FC = () => {
  return (
    <section id="produk" className="w-full bg-black font-['Poppins'] overflow-hidden">
      {/* 4 Kolom Full Width Edge-to-Edge: 1 Kolom di HP, 2 Kolom di Tablet, 4 Kolom di Desktop */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {featuresData.map((item, index) => (
          <motion.a
            key={index}
            href={item.href}
            target={item.href?.startsWith('http') ? '_blank' : '_self'}
            rel={item.href?.startsWith('http') ? 'noopener noreferrer' : undefined}
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: index * 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="group relative h-[420px] sm:h-[500px] lg:h-[609px] w-full overflow-hidden block cursor-pointer select-none border-b sm:border-b-0 sm:border-r border-white/10 last:border-none"
          >
            {/* Foto Background dengan Zoom Halus saat Hover */}
            <img
              src={item.image}
              alt={item.title}
              className={`w-full h-full object-cover ${item.objectPosition || 'object-center'} absolute inset-0 transform group-hover:scale-105 transition-transform duration-700 ease-out`}
            />

            {/* Overlay Gradien Hitam dari Tengah ke Bawah */}
            <div className="w-full h-[384px] left-0 bottom-0 absolute bg-gradient-to-b from-black/0 via-black/60 to-black pointer-events-none" />

            {/* Lapisan Hitam Tambahan untuk Kontras Maksimal */}
            <div className="w-full h-full left-0 top-0 absolute bg-black/20 group-hover:bg-black/10 transition-colors pointer-events-none" />

            {/* Konten Teks & Tombol Aksi di Bagian Bawah */}
            <div className="relative z-10 h-full flex flex-col justify-end px-6 sm:px-8 lg:px-9 xl:px-10 pb-8 sm:pb-10">
              {/* Tag / Kategori */}
              <div className="text-white/80 text-xs sm:text-sm font-normal uppercase tracking-widest mb-2.5 sm:mb-3">
                {item.tag}
              </div>

              {/* Judul Keunggulan */}
              <h3 className="text-white text-lg sm:text-xl lg:text-2xl font-semibold leading-snug mb-5 sm:mb-7 max-w-sm">
                {item.title}
              </h3>

              {/* Tombol Outline Lingkaran dengan Icon Panah */}
              <div className="w-11 h-11 rounded-full border border-white/80 flex items-center justify-center text-white group-hover:bg-white group-hover:text-black group-hover:border-white transition-all duration-300">
                <ArrowUpRight size={18} className="transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
};
