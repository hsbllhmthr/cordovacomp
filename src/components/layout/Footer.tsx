import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-white relative font-['Poppins'] border-t border-gray-100">
      {/* Kanvas 1440px Sesuai Desain Figma */}
      <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-[104px] pt-16 lg:pt-[80px] pb-12 lg:pb-[90px]">
        {/* Grid 4 Kolom Footer */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-12 lg:mb-16">
          {/* Kolom Kiri Tablet: Logo & Produk Utama */}
          <div className="contents sm:flex sm:flex-col sm:gap-10 lg:contents">
            {/* Kolom 1: Logo Resmi & Tagline (lg:col-span-4) */}
            <div className="order-1 lg:order-1 lg:col-span-4 flex flex-col items-start">
              <a href="#beranda" className="inline-block mb-5">
                <img
                  src="/images/logo-color.png"
                  alt="Cordova Super Store"
                  className="w-44 h-auto object-contain"
                />
              </a>
              <p className="text-black text-sm font-normal leading-relaxed max-w-[280px]">
                Satu tempat untuk berbagai kebutuhan ibadah &amp; keseharian keluarga muslim.
              </p>
            </div>

            {/* Kolom 3: Produk Utama (lg:col-span-3) */}
            <div className="order-3 lg:order-3 lg:col-span-3 sm:pl-0 lg:pl-2">
              <h3 className="text-black text-sm font-semibold leading-5 mb-4 sm:mb-6">
                Produk Utama
              </h3>
              <ul className="flex flex-col gap-2.5 text-black text-sm font-normal leading-6">
                <li>
                  <a href="#kategori" className="hover:text-blue-900 transition-colors">
                    Al-Qur’an &amp; Kitab
                  </a>
                </li>
                <li>
                  <a href="#kategori" className="hover:text-blue-900 transition-colors">
                    Buku Literatur Islami
                  </a>
                </li>
                <li>
                  <a href="#kategori" className="hover:text-blue-900 transition-colors">
                    Perlengkapan Sholat &amp; Ibadah
                  </a>
                </li>
                <li>
                  <a href="#kategori" className="hover:text-blue-900 transition-colors">
                    Busana Muslim &amp; Muslimah
                  </a>
                </li>
                <li>
                  <a href="#kategori" className="hover:text-blue-900 transition-colors">
                    Perlengkapan Haji &amp; Umrah
                  </a>
                </li>
                <li>
                  <a href="#kategori" className="hover:text-blue-900 transition-colors">
                    Kurma, Zam-Zam &amp; Herbal
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Kolom Kanan Tablet: Navigasi & Outlet */}
          <div className="contents sm:flex sm:flex-col sm:gap-10 lg:contents">
            {/* Kolom 2: Navigasi Cepat (lg:col-span-2) */}
            <div className="order-2 lg:order-2 lg:col-span-2 sm:pl-0 lg:pl-2">
              <h3 className="text-black text-sm font-semibold leading-5 mb-4 sm:mb-6">
                Navigasi
              </h3>
              <ul className="flex flex-col gap-2.5 text-black text-sm font-normal leading-6">
                <li>
                  <a href="#tentang" className="hover:text-blue-900 transition-colors">
                    Tentang Cordova
                  </a>
                </li>
                <li>
                  <a href="#kategori" className="hover:text-blue-900 transition-colors">
                    Kategori Produk
                  </a>
                </li>
                <li>
                  <a href="#komitmen" className="hover:text-blue-900 transition-colors">
                    Keunggulan Kami
                  </a>
                </li>
                <li>
                  <a href="#belanja" className="hover:text-blue-900 transition-colors">
                    Kanal Belanja
                  </a>
                </li>
                <li>
                  <a href="#kolaborasi" className="hover:text-blue-900 transition-colors">
                    Peluang Kerja Sama
                  </a>
                </li>
                <li>
                  <a href="#kontak" className="hover:text-blue-900 transition-colors">
                    Lokasi &amp; Kontak
                  </a>
                </li>
              </ul>
            </div>

            {/* Kolom 4: Outlet Makassar & WhatsApp (lg:col-span-3) */}
            <div className="order-4 lg:order-4 lg:col-span-3">
              <h3 className="text-black text-sm font-semibold leading-5 mb-4 sm:mb-6">
                Outlet Makassar
              </h3>
              <div className="flex flex-col gap-4 text-black text-sm font-normal leading-5">
                <p className="leading-relaxed">
                  Jl. Abdullah Daeng Sirua,<br />
                  Batua, Kec. Manggala, Kota<br />
                  Makassar, Sulawesi Selatan
                </p>
                <div className="flex flex-col gap-1.5 pt-1">
                  <a
                    href="https://wa.me/6285243147030"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-900 transition-colors"
                  >
                    Admin 1 : 0852 4314 7030
                  </a>
                  <a
                    href="https://wa.me/6289560190406"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-900 transition-colors"
                  >
                    Admin 2 : 0895 6019 0406
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Garis Pembatas Horisontal (w-[1146px] h-px bg-stone-300) */}
        <div className="w-full max-w-[1146px] h-px bg-stone-300 mb-6 lg:mb-8" />

        {/* Copyright */}
        <div className="w-full max-w-[1146px] flex items-center justify-between text-black text-xs font-normal leading-5">
          <p>© 2026 Cordova Super Store. All Right Reserved</p>
        </div>
      </div>
    </footer>
  );
};
