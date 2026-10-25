import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type TabType = 'komitmen' | 'kemitraan' | 'kilasbalik';

interface TabItem {
  id: number | string;
  title: string;
  description: string;
}

interface TabContent {
  title: React.ReactNode;
  items: TabItem[];
}

const tabData: Record<TabType, TabContent> = {
  komitmen: {
    title: (
      <>
        <span className="block">Enam keunggulan utama yang menjadikan</span>
        <span className="block">Cordova Super Store pilihan terdepan muslim</span>
      </>
    ),
    items: [
      {
        id: 1,
        title: 'Berpengalaman sejak 1998',
        description:
          'Lebih dari 25 tahun konsisten melayani ummat dan keluarga muslim di makassar dan kawasan indonesia timur',
      },
      {
        id: 2,
        title: 'Koleksi lengkap & Terkurasi',
        description:
          'One-stop store dengan 8 kategori utama, memudahkan menemukan semua kebutuhan ibadah dalam satu tempat.',
      },
      {
        id: 3,
        title: 'Jaminan Keaslian Produk',
        description:
          'Buku berlisensi resmi, mushah bertashih Kemenag, kurma & zam-zam asli serta produk terdaftar BPOM.',
      },
      {
        id: 4,
        title: 'Mitra terpercaya instansi & Komunitas',
        description:
          'Dipercaya oleh masjid, yayasan, travel umrah, dan sekolah untuk pengadaan sarana ibadah dan cinderamata.',
      },
      {
        id: 5,
        title: 'Fleksibelitas Berbelanja',
        description:
          'Mendukung pembelian eceran, paket oleh-oleh haji siap bagi, hingga pemesanan kuantitas besar untuk grosir.',
      },
    ],
  },
  kemitraan: {
    title: (
      <>
        <span className="block">Tumbuh bersama dalam menyebarkan</span>
        <span className="block">manfaat & nilai kebaikan bagi umat</span>
        <span className="block">melalui ekosistem Cordova</span>
      </>
    ),
    items: [
      {
        id: 'k1',
        title: 'Kemitraan Reseller & Agen',
        description:
          'Dapatkan akses harga grosir terbaik untuk menjual kembali aneka produk ibadah, fashion muslim, dan herbal di daerah anda.',
      },
      {
        id: 'k2',
        title: 'Mitra Travel Haji & Umrah',
        description:
          'Paket bundling perlengkapan ibadah, kain ihram seragam, koper, dan bingkisan oleh-oleh haji untuk jamaah anda.',
      },
      {
        id: 'k3',
        title: 'Pengadaan Masjid & Yayasan',
        description:
          'Penyediaan mushaf Al-Qur\'an, wakaf, karpet & sound, perlengkapan sholat, serta bingkisan hari besar keagamaan.',
      },
      {
        id: 'k4',
        title: 'Supplier & Penerbit Buku',
        description:
          'Peluang mendistribusikan produk berkualitas anda melalui jaringan outlet fisik dan etalase online Cordova Super Store.',
      },
    ],
  },
  kilasbalik: {
    title: (
      <>
        <span className="block">Tumbuh dari toko literatur islami sederhana</span>
        <span className="block">hingga kini menjadi destinasi one-stop store</span>
        <span className="block">pilihan keluarga muslim</span>
      </>
    ),
    items: [
      {
        id: 'kb1',
        title: '1998 Awal Langkah di Makassar',
        description:
          'Cordova didirikan dengan semangat menyediakan literatur islam bermutu dan mushaf Al-Qur’an bagi masyarakat makassar.',
      },
      {
        id: 'kb2',
        title: '2008 Ekspansi Produk & Busana Muslim',
        description:
          'Memperluas layanan dengan menghadirkan busana muslim/muslimah, mukena, dan perlengkapan ibadah keluarga.',
      },
      {
        id: 'kb3',
        title: '2016 Pusat Oleh-Oleh Haji & Herbal',
        description:
          'Menjadi rujukan terpercaya di indonesia timur untuk perlengkapan ibadah haji, kurma pilihan, zam-zam, dan herbal thibbun nabawi.',
      },
      {
        id: 'kb4',
        title: '2026 Era Baru Cordova Super Store',
        description:
          'Transformasi menuju One Stop Islamic Store Modern, memperkuat integrasi digital, omnichannel, dan kemitraan strategis umat.',
      },
    ],
  },
};

const navChapters: { id: TabType; label: string; href: string }[] = [
  { id: 'komitmen', label: 'Komitmen Kami', href: '#komitmen' },
  { id: 'kemitraan', label: 'Kemitraan Strategis', href: '#kolaborasi' },
  { id: 'kilasbalik', label: 'Kilas Balik', href: '#perjalanan' },
];

export const WhyCordova: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>('komitmen');

  // Sinkronisasi dengan URL hash (misal klik menu 'Kerja Sama' di Navbar)
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash;
      if (hash === '#kolaborasi' || hash === '#kemitraan') {
        setActiveTab('kemitraan');
      } else if (hash === '#perjalanan' || hash === '#kilasbalik') {
        setActiveTab('kilasbalik');
      } else if (hash === '#komitmen') {
        setActiveTab('komitmen');
      }
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const currentTab = tabData[activeTab];

  return (
    <section id="komitmen" className="w-full bg-white relative font-['Poppins']">
      {/* Anchor targets untuk navigasi navbar */}
      <span id="kolaborasi" className="absolute -top-24 pointer-events-none" />
      <span id="perjalanan" className="absolute -top-24 pointer-events-none" />

      {/* Kanvas 1440px Center Aligned dengan Sticky Navigation di Kolom Kiri */}
      <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-[104px] pt-12 sm:pt-16 lg:pt-[136px] pb-16 sm:pb-20 lg:pb-[140px] flex flex-col lg:flex-row justify-between">
        {/* Kolom Kiri: Kolom Penuh yang Menampung Sticky Navigation (Khusus Section Ini) */}
        <div className="w-full lg:w-[280px] shrink-0 mb-8 sm:mb-10 lg:mb-0">
          <div className="lg:sticky lg:top-28 xl:top-32 z-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6 }}
              className="flex items-start"
            >
              {/* Daftar Tab Button: Pill Tab Horizontal di HP/Tablet, Vertikal dengan Indikator di Desktop */}
              <div className="relative flex items-center gap-2 overflow-x-auto pb-2 -mx-2 px-2 scrollbar-none lg:overflow-visible lg:flex-col lg:items-start lg:gap-7 lg:pl-4 w-full">
                {/* Garis Vertikal Abu-abu di Sisi Kiri (Hanya muncul di Desktop) */}
                <div className="hidden lg:block absolute left-0 top-0.5 h-[120px] w-[1.5px] bg-stone-300">
                  {/* Indikator Biru Bergerak Mengikuti Tab Aktif */}
                  <motion.div
                    className="absolute left-[-0.5px] w-[2.5px] h-7 bg-blue-900 rounded-full"
                    animate={{
                      top:
                        activeTab === 'komitmen'
                          ? 0
                          : activeTab === 'kemitraan'
                          ? 48
                          : 96,
                    }}
                    transition={{ type: 'spring', stiffness: 450, damping: 35 }}
                  />
                </div>

                {navChapters.map((chapter) => {
                  const isActive = activeTab === chapter.id;
                  return (
                    <button
                      key={chapter.id}
                      type="button"
                      onClick={() => {
                        setActiveTab(chapter.id);
                        window.history.replaceState(null, '', chapter.href);
                      }}
                      className={`text-left text-xs sm:text-sm transition-all cursor-pointer select-none shrink-0 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full lg:rounded-none lg:px-0 lg:py-0 border lg:border-none ${
                        isActive
                          ? 'bg-blue-900 text-white border-blue-900 lg:bg-transparent lg:text-blue-900 font-medium'
                          : 'bg-white text-zinc-600 border-stone-200 hover:text-black hover:border-stone-400 lg:bg-transparent lg:border-none lg:text-zinc-400 font-normal'
                      }`}
                    >
                      {chapter.label}
                    </button>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Kolom Kanan: Judul & Daftar Item Dinamis Berdasarkan Tab Aktif */}
        <div className="w-full lg:max-w-[710px] min-h-[420px] lg:min-h-[480px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -18 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
            >
              {/* Judul Utama Tab */}
              <h2 className="text-blue-900 text-xl sm:text-2xl lg:text-[30px] font-medium leading-snug sm:leading-[38px] lg:leading-[44px] mb-5 sm:mb-6 lg:mb-10">
                {currentTab.title}
              </h2>

              {/* Daftar Poin / Item */}
              <div className="flex flex-col max-w-[629px]">
                {currentTab.items.map((item, index) => (
                  <div
                    key={item.id}
                    className={`py-4 sm:py-5 lg:py-7 flex flex-col ${
                      index !== currentTab.items.length - 1 ? 'border-b border-stone-300' : ''
                    }`}
                  >
                    {/* Judul Poin */}
                    <h3 className="text-black text-base sm:text-lg font-medium leading-snug">
                      {item.title}
                    </h3>

                    {/* Deskripsi Poin */}
                    <p className="text-black text-sm sm:text-base font-normal leading-relaxed mt-2.5 text-black/85">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
