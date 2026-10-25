import { CompanyInfo, PositioningCard } from '@/types';

export const companyData: CompanyInfo = {
  name: 'Cordova Super Store',
  tagline: 'Untuk Ibadah Terbaikmu',
  positioning: 'Satu tempat untuk berbagai kebutuhan ibadah dan keseharian keluarga Muslim.',
  foundingYear: 1998,
  city: 'Makassar',
  about: {
    paragraphs: [
      'Cordova Super Store adalah one-stop Islamic store terkemuka di Makassar yang berdiri sejak tahun 1998. Selama lebih dari dua dekade, kami setia mendampingi masyarakat Muslim dalam memenuhi berbagai kebutuhan ibadah dan gaya hidup Islami.',
      'Kami menyediakan koleksi Al-Qur\'an dan literatur Islam terlengkap, perlengkapan ibadah harian, busana Muslim modern dan syar\'i, perlengkapan haji dan umrah, aneka kurma dan oleh-oleh khas Timur Tengah, serta aneka produk herbal berkualitas.',
      'Dengan komitmen terhadap keaslian produk, pelayanan hangat, dan kenyamanan berbelanja, Cordova Super Store menjadi mitra terpercaya bagi individu, keluarga Muslim, komunitas dakwah, hingga instansi.',
    ],
  },
  contact: {
    address: 'Jl. Perintis Kemerdekaan (atau outlet utama Cordova Super Store)',
    cityStateZip: 'Makassar, Sulawesi Selatan, Indonesia',
    whatsappAdmin1: {
      number: import.meta.env.VITE_WA_ADMIN_1 || '6281234567890',
      label: 'Admin Pelayanan & Belanja (01)',
    },
    whatsappAdmin2: {
      number: import.meta.env.VITE_WA_ADMIN_2 || '6281234567891',
      label: 'Admin Kerjasama & Reseller (02)',
    },
    instagram: {
      handle: '@cordovasuperstore',
      url: import.meta.env.VITE_INSTAGRAM_URL || 'https://instagram.com/cordovasuperstore',
    },
    tiktok: {
      handle: '@cordovasuperstore',
      url: import.meta.env.VITE_TIKTOK_URL || 'https://tiktok.com/@cordovasuperstore',
    },
    maps: {
      embedUrl: import.meta.env.VITE_MAPS_EMBED_URL || 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127161.234567!2d119.4!3d-5.14!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNcKwMDgnMjQuMCJTIDExOcKwMjQnMDAuMCJF!5e0!3m2!1sid!2sid!4v1600000000000!5m2!1sid!2sid',
      directionUrl: import.meta.env.VITE_MAPS_URL || 'https://maps.google.com/?q=Cordova+Super+Store+Makassar',
    },
  },
};

export const positioningCards: PositioningCard[] = [
  {
    id: 'lengkap',
    title: 'Lengkap',
    description: 'Menyediakan 8 kategori kebutuhan Islami dalam satu tempat, dari Al-Qur\'an, busana, hingga herbal.',
    icon: 'PackageCheck',
  },
  {
    id: 'mudah',
    title: 'Mudah',
    description: 'Pilihan belanja leluasa di toko fisik dengan display rapi atau pemesanan praktis lewat WhatsApp.',
    icon: 'Sparkles',
  },
  {
    id: 'dekat',
    title: 'Dekat',
    description: 'Lokasi strategis di kota Makassar dengan pelayanan hangat layaknya keluarga sendiri.',
    icon: 'MapPin',
  },
  {
    id: 'fleksibel',
    title: 'Fleksibel',
    description: 'Melayani pembelian eceran, paket oleh-oleh haji siap pakai, hingga pesanan kuantitas besar untuk mitra.',
    icon: 'SmilePlus',
  },
];

