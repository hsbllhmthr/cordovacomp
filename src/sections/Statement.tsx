import React from 'react';
import { motion } from 'framer-motion';

export const Statement: React.FC = () => {
  return (
    <section id="tentang" className="w-full min-h-[320px] sm:min-h-[420px] lg:h-[520px] relative bg-black font-['Poppins'] overflow-hidden flex flex-col justify-center lg:justify-start">
      {/* Container 1440px Responsif */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
        className="w-full max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-[100px] py-14 sm:py-20 lg:py-0 lg:pt-[120px]"
      >
        {/* Label Tagline Kategori */}
        <div className="mb-3 sm:mb-4 justify-start">
          <span className="text-zinc-400 text-sm sm:text-lg lg:text-xl font-normal font-['Poppins']">One Stop </span>
          <span className="text-zinc-400 text-sm sm:text-lg lg:text-xl font-semibold font-['Poppins']">Islamic Store Makassar</span>
        </div>

        {/* Teks Pernyataan Utama */}
        <div className="w-full justify-start">
          <p className="text-white text-lg sm:text-2xl lg:text-[32px] leading-relaxed sm:leading-[42px] lg:leading-[48px] tracking-tight">
            <span className="font-normal font-['Poppins']">
              Satu tempat untuk berbagai kebutuhan ibadah dan keseharian keluarga Muslim.{' '}
            </span>
            <span className="font-semibold font-['Poppins']">
              Solusi terlengkap untuk Al-Qur&apos;an, buku Islami, busana muslim, perlengkapan ibadah, hingga oleh-oleh haji &amp; umrah di Makassar.
            </span>
          </p>
        </div>
      </motion.div>
    </section>
  );
};
