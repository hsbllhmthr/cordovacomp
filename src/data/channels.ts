import { ShoppingChannel } from '@/types';

export const shoppingChannels: ShoppingChannel[] = [
  {
    id: 'outlet',
    title: 'Outlet Utama Cordova',
    description: 'Kunjungi toko offline kami di Makassar untuk pengalaman belanja langsung dengan display lengkap dan suasana nyaman.',
    actionText: 'Lihat Lokasi di Google Maps',
    url: import.meta.env.VITE_MAPS_URL || 'https://maps.google.com/?q=Cordova+Super+Store+Makassar',
    icon: 'Store',
    active: true,
  },
  {
    id: 'whatsapp',
    title: 'Pemesanan WhatsApp',
    description: 'Konsultasi produk dan pesan langsung bersama admin kami. Layanan cepat dan ramah siap membantu Anda.',
    actionText: 'Chat Admin 1 Sekarang',
    url: 'https://wa.me/6281234567890?text=Halo%20Cordova%20Super%20Store%2C%20saya%20ingin%20bertanya%20mengenai%20produk',
    icon: 'MessageCircle',
    active: true,
  },
  {
    id: 'marketplace',
    title: 'Marketplace Resmi',
    description: 'Belanja aman dan praktis melalui toko online kami di marketplace terpercaya (Shopee & Tokopedia).',
    actionText: 'Segera Hadir di Marketplace',
    url: '', // Dikosongkan sesuai kondisi PDF (belum ada tautan langsung), tombol tidak aktif jika URL kosong
    icon: 'ShoppingBag',
    active: false,
  },
  {
    id: 'social',
    title: 'Media Sosial',
    description: 'Ikuti update produk terbaru, inspirasi Islami, dan promo menarik setiap hari di Instagram dan TikTok kami.',
    actionText: 'Kunjungi Instagram',
    url: import.meta.env.VITE_INSTAGRAM_URL || 'https://instagram.com/cordovasuperstore',
    icon: 'Share2',
    active: true,
  },
];

