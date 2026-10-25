import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export const Channels: React.FC = () => {
  return (
    <section id="belanja" className="w-full min-h-[460px] h-auto lg:h-[460px] py-14 sm:py-16 lg:py-0 relative overflow-hidden bg-zinc-900 font-['Poppins'] flex flex-col justify-center">
      {/* Background Image Sesuai Desain Figma */}
      <img
        src="/images/bg-outlet.png"
        alt="Akses Berbelanja Cordova Super Store"
        className="w-full h-full object-cover object-center absolute inset-0 pointer-events-none"
      />

      {/* Gradien Hitam dari Kiri ke Kanan untuk Keterbacaan Teks Maksimal di Semua Layar */}
      <div className="w-full h-full left-0 top-0 absolute bg-gradient-to-r from-black/95 via-black/85 sm:via-black/75 to-black/40 sm:to-transparent pointer-events-none" />

      {/* Container Konten Responsif untuk Android, iPhone, Tablet & Desktop */}
      <div className="w-full max-w-[1440px] mx-auto relative px-6 sm:px-12 lg:px-[104px]">
        {/* Label Atas: AKSES BERBELANJA */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="text-white text-xs font-medium tracking-wider uppercase mb-3"
        >
          AKSES BERBELANJA
        </motion.div>

        {/* Judul Utama */}
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-white text-2xl sm:text-3xl font-medium leading-snug sm:leading-10 max-w-xl mb-6 sm:mb-8"
        >
          Pilih kemudahan berbelanja <br className="hidden sm:inline" />
          sesuai kenyamanan anda
        </motion.h2>

        {/* 4 Tombol Akses Berbelanja (Responsif: Full-width di HP, 2 Kolom di Tablet & Desktop) */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col gap-3 max-w-xl"
        >
          {/* Baris 1: Outlet Utama & Marketplace */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            {/* Tombol 1: Outlet Utama Cordova */}
            <a
              href="https://maps.google.com/?q=Cordova+Super+Store+Makassar"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-64 h-12 rounded-[90px] border border-white hover:bg-white hover:text-black flex items-center justify-between px-5 text-white text-base font-normal transition-all active:scale-95 group cursor-pointer"
            >
              <span>Outlet Utama Cordova</span>
              <ArrowUpRight size={16} className="transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            {/* Tombol 2: Marketplace Resmi */}
            <a
              href="https://shopee.co.id"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-56 h-12 rounded-[90px] border border-white hover:bg-white hover:text-black flex items-center justify-between px-5 text-white text-base font-normal transition-all active:scale-95 group cursor-pointer"
            >
              <span>Marketplace Resmi</span>
              <ArrowUpRight size={16} className="transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          {/* Baris 2: Pemesanan Whatsapp & Media Social */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            {/* Tombol 3: Pemesanan Whatsapp */}
            <a
              href="https://wa.me/6281234567890?text=Halo%20Cordova%20Super%20Store%2C%20saya%20ingin%20berbelanja"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-64 h-12 rounded-[90px] border border-white hover:bg-white hover:text-black flex items-center justify-between px-5 text-white text-base font-normal transition-all active:scale-95 group cursor-pointer"
            >
              <span>Pemesanan Whatsapp</span>
              <ArrowUpRight size={16} className="transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            {/* Tombol 4: Media Social */}
            <a
              href="https://instagram.com/cordovasuperstore"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-44 h-12 rounded-[90px] border border-white hover:bg-white hover:text-black flex items-center justify-between px-5 text-white text-base font-normal transition-all active:scale-95 group cursor-pointer"
            >
              <span>Media Social</span>
              <ArrowUpRight size={16} className="transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
