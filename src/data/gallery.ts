import { GalleryCategory } from '@/types';

export const galleryCategories: GalleryCategory[] = [
  {
    id: 'outlet',
    title: 'Outlet & Display',
    description: 'Suasana interior gerai yang luas, tertata rapi, dan sejuk untuk kenyamanan belanja.',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80',
        alt: 'Etalase buku Islami dan Al-Qur\'an tertata rapi',
        caption: 'Koleksi Al-Qur\'an dan Literatur Islam',
      },
      {
        url: 'https://images.unsplash.com/photo-1584905066893-7d5c142ba4e1?auto=format&fit=crop&w=800&q=80',
        alt: 'Display mukena dan busana Muslim premium',
        caption: 'Koleksi Fashion Muslimah & Busana Keluarga',
      },
      {
        url: 'https://images.unsplash.com/photo-1584285418504-006a88b15e4e?auto=format&fit=crop&w=800&q=80',
        alt: 'Display kurma, madu, dan oleh-oleh haji',
        caption: 'Area Kurma Segar & Oleh-oleh Haji Umrah',
      },
    ],
  },
  {
    id: 'campaign',
    title: 'Campaign & Promo',
    description: 'Kegiatan tematik Ramadan, Idul Adha, Manasik Haji, dan promo spesial sepanjang tahun.',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1564769625905-50e93615e769?auto=format&fit=crop&w=800&q=80',
        alt: 'Festival Semarak Ramadan Cordova Super Store',
        caption: 'Semarak Ramadan & Sambut Idul Fitri',
      },
      {
        url: 'https://images.unsplash.com/photo-1519817650390-64a93db51149?auto=format&fit=crop&w=800&q=80',
        alt: 'Program Spesial Musim Haji & Umrah',
        caption: 'Promo Perlengkapan Haji & Umrah Berkualitas',
      },
    ],
  },
  {
    id: 'event',
    title: 'Event & Bazar',
    description: 'Partisipasi Cordova dalam pameran Islam, bazar akbar masjid, dan roadshow manasik.',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80',
        alt: 'Booth Cordova di Islamic Book Fair Makassar',
        caption: 'Stan Cordova di Islamic Fair Makassar',
      },
      {
        url: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=800&q=80',
        alt: 'Kemitraan pengadaan perlengkapan manasik haji',
        caption: 'Edukasi dan Display Manasik Haji',
      },
    ],
  },
  {
    id: 'customer',
    title: 'Pelayanan Customer',
    description: 'Momen kehangatan staf kami melayani konsumen dengan senyuman dan bantuan penuh.',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&w=800&q=80',
        alt: 'Staf melayani pengunjung dalam memilih Al-Qur\'an',
        caption: 'Konsultasi & Pendampingan Pilihan Al-Qur\'an',
      },
      {
        url: 'https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=800&q=80',
        alt: 'Pelayanan ramah kasir dan packing oleh-oleh haji',
        caption: 'Pengemasan Rapi Paket Oleh-Oleh Haji',
      },
    ],
  },
];

