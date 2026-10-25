import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useScrollSpy } from '@/hooks/useScrollSpy';

const WhatsAppIcon: React.FC<{ size?: number; className?: string }> = ({ size = 15, className = '' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`shrink-0 ${className}`}
  >
    <path
      d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9.6 8.5a.6.6 0 0 0-.6.4c-.3.7-.4 1.4-.4 2.1 0 3.1 2.5 5.6 5.6 5.6.7 0 1.4-.1 2.1-.4.3-.1.4-.3.4-.6v-1.1a.6.6 0 0 0-.4-.6l-1.5-.7a.6.6 0 0 0-.7.2l-.7.8a4.9 4.9 0 0 1-2.8-2.8l.8-.7a.6.6 0 0 0 .2-.7l-.7-1.5a.6.6 0 0 0-.6-.4H9.6z"
      fill="currentColor"
    />
  </svg>
);

const navItems = [
  { label: 'Beranda', href: '#beranda' },
  { label: 'Tentang Kami', href: '#tentang' },
  { label: 'Produk', href: '#produk' },
  { label: 'Belanja', href: '#belanja' },
  { label: 'Kerja Sama', href: '#kolaborasi' },
  { label: 'Kontak', href: '#kontak' },
];

const sectionIds = navItems.map((item) => item.href.substring(1));

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const activeId = useScrollSpy(sectionIds, 120);

  // Kunci scroll halaman saat menu mobile terbuka penuh
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let ticking = false;

    const updateNavbar = () => {
      const currentScrollY = window.scrollY;

      if (isOpen) {
        setIsVisible(true);
        ticking = false;
        return;
      }

      if (currentScrollY > 50) {
        setIsScrolled(true);

        // Scroll ke BAWAH lebih dari 6px -> sembunyikan navbar
        if (currentScrollY > lastScrollY && currentScrollY - lastScrollY > 6) {
          setIsVisible(false);
        }
        // Scroll ke ATAS lebih dari 6px -> turunkan navbar sticky putih solid
        else if (currentScrollY < lastScrollY && lastScrollY - currentScrollY > 6) {
          setIsVisible(true);
        }
      } else {
        // Tepat di puncak halaman (Hero) -> transparan kembali
        setIsScrolled(false);
        setIsVisible(true);
      }

      lastScrollY = currentScrollY;
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateNavbar);
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 font-['Poppins'] transition-all duration-300 ease-in-out shadow-none ${
          isVisible ? 'translate-y-0' : '-translate-y-full pointer-events-none'
        } ${
          isScrolled
            ? 'bg-white border-b border-gray-200 py-5 sm:py-6'
            : 'bg-transparent border-b-0 py-6 lg:py-[30px]'
        }`}
      >
        <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-[100px] flex items-center justify-between">
          {/* 1. Logo Brand */}
          <a
            href="#beranda"
            className="flex items-center group focus:outline-none relative h-8 sm:h-9 w-32 sm:w-36"
            aria-label="Cordova Super Store Beranda"
          >
            {/* Logo Putih untuk Background Hero Transparan */}
            <img
              src="/images/logo.png"
              alt="Cordova Super Store Logo Putih"
              className={`h-full w-auto object-contain absolute left-0 top-0 transition-opacity duration-300 ${
                isScrolled ? 'opacity-0 pointer-events-none' : 'opacity-100'
              }`}
            />
            {/* Logo Berwarna untuk Sticky Latar Putih Solid */}
            <img
              src="/images/logo-color.png"
              alt="Cordova Super Store Logo Berwarna"
              className={`h-full w-auto object-contain absolute left-0 top-0 transition-opacity duration-300 ${
                isScrolled ? 'opacity-100' : 'opacity-0 pointer-events-none'
              }`}
            />
          </a>

          {/* 2. Menu Navigasi Desktop */}
          <nav className="hidden lg:flex items-center gap-7 xl:gap-8">
            {navItems.map((item) => {
              const isActive = activeId === item.href.substring(1);
              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={`text-xs transition-colors duration-150 ${
                    isScrolled
                      ? isActive
                        ? 'text-blue-900 font-semibold'
                        : 'text-neutral-700 hover:text-blue-900 font-medium'
                      : isActive
                        ? 'text-white font-semibold'
                        : 'text-white/85 hover:text-white font-medium'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* 3. Tombol Chat WhatsApp Desktop */}
          <div className="hidden lg:block">
            <a
              href="https://wa.me/6285243147030?text=Halo%20Cordova%20Super%20Store%2C%20saya%20ingin%20bertanya%20mengenai%20produk"
              target="_blank"
              rel="noopener noreferrer"
              className={`h-9 px-4 rounded-[50px] border flex items-center justify-center gap-2 text-xs font-semibold whitespace-nowrap transition-all active:scale-95 cursor-pointer focus:outline-none ${
                isScrolled
                  ? 'border-neutral-900 text-neutral-900 hover:bg-neutral-900 hover:text-white focus:ring-2 focus:ring-neutral-400'
                  : 'border-white text-white hover:bg-white/15 focus:ring-2 focus:ring-white/40'
              }`}
            >
              <WhatsAppIcon size={15} />
              <span className="leading-none whitespace-nowrap">Chat Whatsapp</span>
            </a>
          </div>

          {/* 4. Tombol Hamburger Mobile */}
          <button
            onClick={() => setIsOpen(true)}
            className={`lg:hidden p-2 rounded-lg focus:outline-none transition-colors ${
              isScrolled
                ? 'text-neutral-900 hover:bg-neutral-100 focus:ring-2 focus:ring-neutral-300'
                : 'text-white hover:bg-white/10 focus:ring-2 focus:ring-white/40'
            }`}
            aria-label="Buka menu"
          >
            <Menu size={26} />
          </button>
        </div>
      </header>

      {/* 5. Mobile Full-Screen Menu Overlay (Full dari Ujung Atas Layar sampai Bawah) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.28, ease: 'easeOut' }}
            className="fixed inset-0 z-50 w-full h-[100dvh] bg-black/98 backdrop-blur-2xl flex flex-col justify-between p-6 sm:p-8 lg:hidden font-['Poppins']"
          >
            {/* Header Menu Full Screen (Logo & Tombol Tutup X Sejajar Rapi di Puncak Layar) */}
            <div className="flex items-center justify-between w-full pt-2 pb-5 border-b border-white/10">
              <a href="#beranda" onClick={closeMenu} className="flex items-center h-8 sm:h-9 w-auto">
                <img
                  src="/images/logo.png"
                  alt="Cordova Super Store Logo"
                  className="h-8 sm:h-9 w-auto object-contain"
                />
              </a>
              <button
                onClick={closeMenu}
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors active:scale-90 cursor-pointer"
                aria-label="Tutup menu"
              >
                <X size={24} />
              </button>
            </div>

            {/* Daftar Link Menu Navigasi */}
            <nav className="flex flex-col space-y-2.5 my-auto py-6">
              {navItems.map((item, idx) => {
                const isActive = activeId === item.href.substring(1);
                return (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    onClick={closeMenu}
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.04 * idx, duration: 0.25 }}
                    className={`px-4 py-3 rounded-2xl text-lg font-medium transition-all ${
                      isActive
                        ? 'bg-white/15 text-white font-semibold'
                        : 'text-white/80 hover:bg-white/10 hover:text-white'
                    }`}
                  >
                    {item.label}
                  </motion.a>
                );
              })}
            </nav>

            {/* Bagian Bawah: Tombol Chat WhatsApp Admin */}
            <div className="pt-4 pb-2 border-t border-white/10">
              <a
                href="https://wa.me/6285243147030?text=Halo%20Cordova%20Super%20Store%2C%20saya%20ingin%20bertanya%20mengenai%20produk"
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
                className="w-full h-12 rounded-[50px] bg-green-500 hover:bg-green-600 text-white flex items-center justify-center text-sm font-semibold gap-2.5 transition-all shadow-lg active:scale-95 cursor-pointer"
              >
                <WhatsAppIcon size={18} />
                <span>Chat Whatsapp Admin</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
