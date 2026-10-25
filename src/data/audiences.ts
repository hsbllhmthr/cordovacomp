import { AudienceSegment } from '@/types';

export const audiences: AudienceSegment[] = [
  {
    id: 'keluarga',
    title: 'Individu & Keluarga Muslim',
    description: 'Menyediakan kebutuhan ibadah harian, busana santun, bacaan bermutu, dan nutrisi herbal keluarga.',
    bulletPoints: [
      'Pilihan busana santun & syar\'i untuk seluruh anggota keluarga',
      'Buku bacaan dan media edukasi anak Islami',
      'Perlengkapan ibadah berkualitas untuk rumah dan perjalanan',
    ],
    icon: 'Users',
  },
  {
    id: 'jamaah',
    title: 'Jamaah Haji & Umrah',
    description: 'Solusi lengkap sebelum keberangkatan hingga kepulangan dari tanah suci.',
    bulletPoints: [
      'Paket perlengkapan manasik & keberangkatan lengkap',
      'Oleh-oleh haji & umrah higienis dan siap bagi',
      'Kurma pilihan, kacang arab, cokelat kerikil, & air zam-zam terjamin',
    ],
    icon: 'Compass',
  },
  {
    id: 'reseller',
    title: 'Reseller & Mitra Usaha',
    description: 'Peluang bermitra menyediakan produk-produk Islami berkualitas dengan harga bersaing.',
    bulletPoints: [
      'Harga grosir menguntungkan untuk dijual kembali',
      'Katalog produk yang terus diperbarui',
      'Kemudahan pemesanan repeat order via admin khusus',
    ],
    icon: 'TrendingUp',
  },
  {
    id: 'lembaga',
    title: 'Komunitas & Lembaga',
    description: 'Mendukung kebutuhan masjid, yayasan, rumah Qur\'an, sekolah, dan institusi.',
    bulletPoints: [
      'Pengadaan mushaf Al-Qur\'an wakaf & sarana ibadah',
      'Paket hadiah/bingkisan Idul Fitri & event keagamaan',
      'Layanan pemesanan custom & pengiriman terorganisir',
    ],
    icon: 'Building2',
  },
];

