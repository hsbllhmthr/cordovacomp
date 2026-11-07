import React, { useState } from 'react';
import { Eye, EyeOff, Check, Lock, AlertCircle, ArrowLeft } from 'lucide-react';

interface AdminLoginPageProps {
  onNavigateHome?: () => void;
  onLoginSuccess?: () => void;
}

export const AdminLoginPage: React.FC<AdminLoginPageProps> = ({
  onNavigateHome,
  onLoginSuccess,
}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [showForgotPassword, setShowForgotPassword] = useState(false);

  const handleGoHome = () => {
    if (onNavigateHome) {
      onNavigateHome();
    } else {
      window.history.pushState(null, '', '/');
      window.location.hash = '';
      window.dispatchEvent(new Event('popstate'));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!email || !password) {
      setErrorMessage('Harap masukkan email dan kata sandi.');
      return;
    }

    setIsLoading(true);

    // Simulasi verifikasi login admin
    setTimeout(() => {
      setIsLoading(false);
      setLoginSuccess(true);
      if (onLoginSuccess) {
        setTimeout(() => {
          onLoginSuccess();
        }, 500);
      }
    }, 600);
  };

  return (
    <div className="w-full min-h-screen lg:h-screen bg-white font-['Poppins'] select-none relative overflow-x-hidden">
      {/* Kontainer Utama: 2 Kolom Layar Penuh (Kiri Form Login, Kanan Ilustrasi Pola Geometris) */}
      <main className="w-full h-full min-h-screen grid grid-cols-1 lg:grid-cols-2">
        {/* ========================================================
            KOLOM KIRI: FORM LOGIN ADMIN (Persis Referensi Desain)
            ======================================================== */}
        <div className="flex flex-col items-center justify-center px-6 sm:px-12 md:px-16 lg:px-20 xl:px-24 py-16 lg:py-12 w-full max-w-[560px] mx-auto">
          {/* 1. Logo di Tengah (Tanpa Kotak Pembungkus) */}
          <div className="mb-6 flex items-center justify-center">
            <img
              src="/images/icon.png"
              alt="Cordova Logo"
              className="h-12 w-auto object-contain"
            />
          </div>

          {/* 2. Judul & Subjudul */}
          <div className="text-center mb-8 w-full">
            <h1 className="text-2xl sm:text-[32px] font-bold text-neutral-900 tracking-tight leading-tight mb-2">
              Welcome back!
            </h1>
            <p className="text-sm text-neutral-500 font-normal">
              Don't have an account yet?{' '}
              <a
                href="#hubungi-it"
                onClick={(e) => {
                  e.preventDefault();
                  setShowForgotPassword(true);
                }}
                className="text-blue-600 hover:text-blue-700 font-medium hover:underline"
              >
                Sign up now
              </a>
            </p>
          </div>

          {/* Alert Sukses Login Demo */}
          {loginSuccess ? (
            <div className="w-full p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center animate-fade-in">
              <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-3">
                <Check size={24} />
              </div>
              <h3 className="text-base font-semibold text-emerald-900 mb-1">
                Autentikasi Berhasil
              </h3>
              <p className="text-xs text-emerald-700 leading-relaxed mb-4">
                Selamat datang kembali, Admin Cordova. Sesi login Anda telah aktif.
              </p>
              <div className="flex flex-col gap-2">
                <button
                  onClick={() => setLoginSuccess(false)}
                  className="w-full py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold transition-colors cursor-pointer"
                >
                  Keluar dari Sesi Demo
                </button>
                {onNavigateHome && (
                  <button
                    onClick={onNavigateHome}
                    className="w-full py-2.5 rounded-full border border-emerald-300 text-emerald-800 hover:bg-emerald-100 text-xs font-medium transition-colors cursor-pointer"
                  >
                    Buka Beranda Website
                  </button>
                )}
              </div>
            </div>
          ) : (
            /* Formulir Input */
            <form onSubmit={handleSubmit} className="w-full space-y-4">
              {/* Pesan Kesalahan jika ada */}
              {errorMessage && (
                <div className="flex items-center gap-2 p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs">
                  <AlertCircle size={16} className="shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              {/* Input Email */}
              <div className="relative">
                <input
                  type="email"
                  id="admin-email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email address"
                  className="w-full h-12 sm:h-13 px-4 rounded-xl border border-neutral-300 text-neutral-900 text-sm placeholder:text-neutral-400 focus:outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-100 transition-all bg-white"
                />
              </div>

              {/* Input Password dengan Toggle Lihat Password */}
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="admin-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  className="w-full h-12 sm:h-13 pl-4 pr-12 rounded-xl border border-neutral-300 text-neutral-900 text-sm placeholder:text-neutral-400 focus:outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-100 transition-all bg-white"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-700 transition-colors p-1 cursor-pointer"
                  aria-label={showPassword ? 'Sembunyikan sandi' : 'Tampilkan sandi'}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>

              {/* Baris Checkbox Remember Me & Lupa Password */}
              <div className="flex items-center justify-between pt-1">
                <label className="flex items-center gap-2.5 text-xs sm:text-sm text-neutral-700 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="w-4 h-4 rounded border-neutral-300 text-blue-600 focus:ring-blue-500 focus:ring-offset-0 cursor-pointer accent-blue-600"
                  />
                  <span>Remember me</span>
                </label>

                <button
                  type="button"
                  onClick={() => setShowForgotPassword(true)}
                  className="text-xs sm:text-sm font-medium text-blue-600 hover:text-blue-800 hover:underline transition-colors cursor-pointer"
                >
                  Forgot password?
                </button>
              </div>

              {/* Tombol Aksi Utama: Log in & Kembali ke Beranda */}
              <div className="pt-2 flex flex-col gap-3">
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full h-12 rounded-full bg-[#2563EB] hover:bg-[#1D4ED8] active:bg-[#1E40AF] text-white text-sm font-semibold transition-all duration-200 shadow-sm hover:shadow flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Memverifikasi...</span>
                    </>
                  ) : (
                    <span>Log in</span>
                  )}
                </button>

                {/* Tombol Kembali ke Beranda */}
                <button
                  type="button"
                  onClick={handleGoHome}
                  className="w-full h-12 rounded-full border border-neutral-300 hover:border-neutral-400 hover:bg-neutral-50 active:bg-neutral-100 text-neutral-700 text-sm font-medium transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <ArrowLeft size={16} />
                  <span>Kembali ke Beranda</span>
                </button>
              </div>
            </form>
          )}

          {/* Modal Lupa Password Sederhana */}
          {showForgotPassword && (
            <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4">
              <div className="bg-white rounded-2xl max-w-sm w-full p-6 shadow-xl border border-gray-100 animate-fade-in">
                <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center mb-3">
                  <Lock size={20} />
                </div>
                <h4 className="text-base font-semibold text-neutral-900 mb-1">
                  Akses Akun &amp; Kata Sandi
                </h4>
                <p className="text-xs text-neutral-500 leading-relaxed mb-4">
                  Pembuatan akun baru atau reset kata sandi dikonfirmasi langsung melalui admin IT Cordova Super Store.
                </p>
                <div className="flex gap-2 justify-end">
                  <button
                    onClick={() => setShowForgotPassword(false)}
                    className="px-4 py-2 rounded-lg text-xs font-medium text-neutral-600 hover:bg-neutral-100 transition-colors cursor-pointer"
                  >
                    Tutup
                  </button>
                  <a
                    href="https://wa.me/6285243147030?text=Halo%20Tim%20IT%20Cordova%2C%20saya%20memerlukan%20bantuan%20akses%20akun%20admin."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-lg text-xs font-semibold bg-blue-600 hover:bg-blue-700 text-white transition-colors"
                  >
                    Hubungi IT Support
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* ========================================================
            KOLOM KANAN: POLA GEOMETRIS BIRU-NAVY SESUAI GAMBAR REFERENSI
            ======================================================== */}
        <div className="hidden lg:block relative w-full h-full overflow-hidden bg-[#0A182F]">
          {/* Pola Grid Geometris SVG (Persis Tile Sail/Crescent Biru seperti di Referensi) */}
          <div className="absolute inset-0 w-full h-full pointer-events-none">
            <svg
              className="w-full h-full"
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              height="100%"
            >
              <defs>
                {/* Tile 120px x 120px dengan kurva seperempat lingkaran cekung ke sudut kanan bawah */}
                <pattern
                  id="cordova-admin-pattern"
                  width="135"
                  height="135"
                  patternUnits="userSpaceOnUse"
                >
                  {/* Warna Latar Tile: Deep Navy */}
                  <rect width="135" height="135" fill="#0A182F" />

                  {/* 
                    Kurva Geometris Biru Elektrik:
                    M 0,135 -> Dari sudut kiri bawah
                    C 75,135 135,75 135,0 -> Melengkung cekung ke sudut kanan atas
                    L 135,135 -> Ke sudut kanan bawah
                    Z -> Menutup kurva kembali ke sudut kiri bawah
                  */}
                  <path
                    d="M 0,135 C 76,135 135,76 135,0 L 135,135 Z"
                    fill="#1F66B5"
                  />

                  {/* Garis batas tipis mikro antar tile agar terlihat presisi dan artistik */}
                  <rect
                    width="135"
                    height="135"
                    fill="none"
                    stroke="#0A182F"
                    strokeWidth="1.5"
                  />
                </pattern>
              </defs>

              {/* Mengisi seluruh kanvas dengan pattern repetisi */}
              <rect width="100%" height="100%" fill="url(#cordova-admin-pattern)" />
            </svg>
          </div>

          {/* Lapisan Vignette Halus untuk Kedalaman Visual */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent pointer-events-none" />
        </div>
      </main>
    </div>
  );
};
