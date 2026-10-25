import React from 'react';
import { motion } from 'framer-motion';

interface AudienceSegment {
  id: number;
  title: string;
  description: string;
}

const audienceSegments: AudienceSegment[] = [
  {
    id: 1,
    title: 'Individu & Keluarga Muslim',
    description: 'Menyediakan kebutuhan ibadah harian, busana santun, bacaan bermutu & nutrisi herbal keluarga.',
  },
  {
    id: 2,
    title: 'Jamaah Haji & Umrah',
    description: 'Solusi lengkap sebelum keberangkatan hingga kepulangan dari tanah suci.',
  },
  {
    id: 3,
    title: 'Reseller & Mitra Usaha',
    description: 'Peluang bermitra menyediakan produk-produk islami berkualitas dengan harga bersaing.',
  },
  {
    id: 4,
    title: 'Komunitas & Lembaga',
    description: 'Mendukung kebutuhan masjid, yayasan, rumah Qur’an, sekolah, dan institusi.',
  },
];

export const Audience: React.FC = () => {
  return (
    <section id="layanan" className="w-full bg-slate-100 relative font-['Poppins']">
      {/* Kanvas 1440px Center Aligned Responsif untuk Android, iPhone, Tablet & Desktop */}
      <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-[104px] pt-14 sm:pt-16 lg:pt-[110px] pb-16 sm:pb-20 lg:pb-[130px]">
        {/* Label Atas: SIAPA YANG KAMI LAYANI? */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="text-zinc-400 text-xs font-medium tracking-wider uppercase mb-3"
        >
          SIAPA YANG KAMI LAYANI?
        </motion.div>

        {/* Judul Utama */}
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-blue-900 text-2xl sm:text-3xl font-medium leading-snug sm:leading-10 max-w-2xl mb-8 sm:mb-12 lg:mb-14"
        >
          Cordova Super Store dirancang untuk <br className="hidden sm:inline" />
          memenuhi kebutuhan berbagai kalangan <br className="hidden sm:inline" />
          umat dengan pendekatan personal
        </motion.h2>

        {/* Daftar 4 Segmen Pelanggan dengan Garis Pembatas Horisontal */}
        <div className="w-full max-w-[1121px] flex flex-col">
          {audienceSegments.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className={`py-5 sm:py-6 lg:py-8 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-2 sm:gap-3 lg:gap-8 ${
                index !== audienceSegments.length - 1 ? 'border-b border-stone-300' : ''
              }`}
            >
              {/* Kolom Kiri: Judul Segmen */}
              <div className="w-full lg:w-[480px] shrink-0 text-black text-lg sm:text-xl font-semibold">
                {item.title}
              </div>

              {/* Kolom Kanan: Deskripsi Segmen */}
              <div className="flex-1 text-black text-sm sm:text-base lg:text-lg font-normal leading-relaxed text-black/85">
                {item.description}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
