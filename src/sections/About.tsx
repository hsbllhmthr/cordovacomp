import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="tentang" className="w-full bg-white relative font-['Poppins']">
      {/* Kanvas 1440px Center Aligned dengan Padding Konsisten */}
      <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-[100px] xl:px-[104px] pt-16 lg:pt-[110px] pb-20 lg:pb-[115px]">
        {/* Label Atas */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="text-zinc-400 text-xs font-normal uppercase tracking-wider mb-4 sm:mb-6"
        >
          MENGENAL CORDOVA SUPER STORE
        </motion.div>

        {/* Konten Atas: Judul Kiri & Paragraf Kanan (Sejajar dan Tidak Melebihi Batas) */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 lg:gap-12 mb-12 lg:mb-16">
          {/* Judul Utama Sebelah Kiri */}
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-blue-900 text-2xl sm:text-3xl lg:text-[32px] font-medium leading-snug sm:leading-[42px] lg:leading-[44px] max-w-[540px]"
          >
            Lebih dari dua dekade <br className="hidden sm:inline" />
            membersamai umat dalam<br className="hidden sm:inline" />
            menyediakan sarana<br className="hidden sm:inline" />
            ibadah terbaik.
          </motion.h2>

          {/* Kolom Kanan: Paragraf Deskripsi yang Rapi & Tombol (Dibatasi agar Tidak Melewati Batas) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full max-w-[470px] lg:max-w-[480px] flex flex-col items-start gap-6 sm:gap-7"
          >
            <p className="text-black text-sm sm:text-base font-normal leading-relaxed sm:leading-7 text-black/85">
              Cordova Super Store adalah one stop islamic store terkemuka di Makassar yang berdiri sejak tahun 1998. Selama lebih dari 2 dekade, kami setia mendampingi masyarakat Muslim dalam memenuhi berbagai <br className="hidden sm:inline" />kebutuhan ibadah dan gaya hidup Islami.
            </p>

            {/* Tombol Baca Lebih Lanjut */}
            <a
              href="#tentang"
              className="w-52 h-12 rounded-[90px] border border-black hover:bg-black hover:text-white flex items-center justify-center gap-3 text-black text-base font-normal transition-all active:scale-95 cursor-pointer group shrink-0"
            >
              <span>Baca lebih lanjut</span>
              <ArrowRight size={18} className="transform group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>

        {/* Garis Pembatas Horisontal Rapi Selebar Konten */}
        <div className="w-full h-px bg-gray-200 my-10 lg:my-14" />

        {/* 3 Kolom Statistik Bawah dengan Stagger Reveal */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6 lg:gap-10">
          {/* Kolom 1: Berpengalaman */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col gap-2 sm:gap-2.5"
          >
            <span className="text-blue-900 text-xs sm:text-sm font-normal">Berpengalaman</span>
            <div className="text-black text-3xl sm:text-4xl lg:text-[42px] xl:text-[46px] font-normal leading-tight tracking-tight whitespace-nowrap">
              25+ Tahun
            </div>
            <p className="text-neutral-400 text-sm sm:text-base font-normal">
              Sejak 1998 di Kota Makassar
            </p>
          </motion.div>

          {/* Kolom 2: Produk Terlengkap */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-2 sm:gap-2.5"
          >
            <span className="text-blue-900 text-xs sm:text-sm font-normal">Produk Terlengkap</span>
            <div className="text-black text-3xl sm:text-4xl lg:text-[42px] xl:text-[46px] font-normal leading-tight tracking-tight whitespace-nowrap">
              8+ Kategori
            </div>
            <p className="text-neutral-400 text-sm sm:text-base font-normal">
              Koleksi kategori terlengkap
            </p>
          </motion.div>

          {/* Kolom 3: Kualitas Produk */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col gap-2 sm:gap-2.5"
          >
            <span className="text-blue-900 text-xs sm:text-sm font-normal">Kualitas Produk</span>
            <div className="text-black text-3xl sm:text-4xl lg:text-[42px] xl:text-[46px] font-normal leading-tight tracking-tight whitespace-nowrap">
              100% Asli
            </div>
            <p className="text-neutral-400 text-sm sm:text-base font-normal">
              Amanah &amp; terpercaya
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
