import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="beranda" className="w-full h-[100dvh] min-h-[580px] max-h-[980px] relative overflow-hidden bg-black font-['Poppins']">
      {/* Video Background Full Screen Kiri-Kanan */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover left-0 top-0 absolute -z-0 pointer-events-none"
      >
        <source src="/videos/hero-bg.mp4" type="video/mp4" />
      </video>

      {/* Efek LED Pixel Matrix Screen (Dot Mikro & Sangat Padat) */}
      <div
        className="w-full h-full left-0 top-0 absolute pointer-events-none z-[1]"
        style={{
          backgroundImage: 'radial-gradient(circle at center, rgba(0, 0, 0, 0.52) 0.85px, transparent 0.85px)',
          backgroundSize: '3.5px 3.5px',
        }}
      />

      {/* Vignette Atas Lembut */}
      <div className="w-full h-28 left-0 top-0 absolute bg-gradient-to-b from-black/40 to-transparent pointer-events-none z-[2]" />

      {/* Gradien Bawah Lembut Menyatu Sempurna ke Hitam Pekat */}
      <div
        className="w-full h-[75%] sm:h-[68%] min-h-[380px] left-0 bottom-0 absolute pointer-events-none z-[2]"
        style={{
          background: 'linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.18) 25%, rgba(0,0,0,0.55) 55%, rgba(0,0,0,0.88) 82%, #000000 96%, #000000 100%)',
        }}
      />

      {/* Konten Hero Responsif (Android, iPhone, Tablet, Desktop) */}
      <div className="w-full max-w-[1440px] h-full relative mx-auto z-10 px-6 sm:px-12 lg:px-[100px] flex flex-col justify-end pb-10 sm:pb-16 lg:pb-[70px]">
        {/* Hero Title & Buttons (Animasi Fade In Halus) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="flex flex-col gap-5 sm:gap-6 max-w-3xl items-center lg:items-start text-center lg:text-left mx-auto lg:mx-0 w-full"
        >
          {/* Judul & Tagline Responsif (Center di Mobile/Tablet, Rata Kiri di Desktop) */}
          <div className="w-full">
            <h1 className="text-white text-3xl sm:text-4xl lg:text-[48px] font-semibold leading-tight sm:leading-[50px] lg:leading-[58px] tracking-tight">
              Cordova Super Store
            </h1>
            <p className="text-white text-2xl sm:text-3xl lg:text-[48px] font-normal leading-tight sm:leading-[50px] lg:leading-[58px] mt-1 sm:mt-2 text-white/95 tracking-tight">
              Untuk Ibadah Terbaikmu
            </p>
          </div>

          {/* Tombol Aksi Responsif (Center di Mobile, Baris di Tablet & Desktop) */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-1 w-full sm:w-auto">
            {/* Tombol Chat Whatsapp Kami */}
            <a
              href="https://wa.me/6281234567890?text=Halo%20Cordova%20Super%20Store%2C%20saya%20ingin%20bertanya%20mengenai%20produk"
              target="_blank"
              rel="noopener noreferrer"
              className="h-12 px-7 bg-green-500 hover:bg-green-600 rounded-[50px] flex items-center justify-center text-white text-sm font-semibold transition-all shadow-md active:scale-95 cursor-pointer text-center"
            >
              Chat Whatsapp Kami
            </a>

            {/* Tombol Lihat Kategori Produk dengan Icon Panah Kanan */}
            <a
              href="#produk"
              className="h-12 px-6 rounded-[50px] border-2 border-white hover:bg-white/10 flex items-center justify-center text-white text-sm font-semibold transition-all active:scale-95 gap-2 cursor-pointer group text-center"
            >
              <span>Lihat Kategori Produk</span>
              <ArrowRight size={18} className="transform group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
