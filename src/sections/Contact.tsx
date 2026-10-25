import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle2 } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    company: '',
    email: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name && !formData.message) return;

    // Opsional kirim via WhatsApp resmi Cordova Admin 1
    const text = `Halo Admin Cordova Super Store,\n\nNama: ${formData.name}\nPerusahaan/Instansi: ${formData.company || '-'}\nNo. Telp: ${formData.phone || '-'}\nEmail: ${formData.email || '-'}\n\nPesan:\n${formData.message}`;
    const waUrl = `https://wa.me/6285243147030?text=${encodeURIComponent(text)}`;

    setIsSubmitted(true);
    setTimeout(() => {
      window.open(waUrl, '_blank');
    }, 600);
  };

  return (
    <section id="kontak" className="w-full bg-slate-100 relative font-['Poppins']">
      {/* Kanvas 1440px Sesuai Desain Figma */}
      <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-12 xl:px-[104px] pt-16 lg:pt-[100px] pb-20 lg:pb-[110px]">
        {/* Pre-header & Judul Utama */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="mb-12 lg:mb-16"
        >
          <span className="text-neutral-400 text-xs font-medium uppercase tracking-wider block mb-3">
            MARI TERHUBUNG DENGAN CORDOVA
          </span>
          <h2 className="text-blue-900 text-2xl sm:text-3xl lg:text-[32px] font-medium leading-snug sm:leading-[44px] max-w-[840px]">
            Kunjungi gerai kami di makassar atau<br className="hidden sm:block" />
            konsultasi kebutuhan ibadah anda melalui<br className="hidden sm:block" />
            layanan Whatsapp dan media sosial
          </h2>
        </motion.div>

        {/* Informasi Kontak & Detail Alamat (Maksimal 1146px Sesuai Desain Figma) */}
        <div className="w-full max-w-[1146px] mb-12 lg:mb-16">
          {/* Baris 1: Alamat & Kontak WhatsApp */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 xl:gap-12 pb-10 sm:pb-12">
            {/* Kolom Alamat */}
            <div className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-8 xl:gap-12">
              <span className="text-black text-base font-semibold w-auto sm:w-48 shrink-0 whitespace-nowrap">
                Alamat
              </span>
              <p className="text-black text-base font-normal leading-relaxed text-black/85">
                Jl. Abdullah Daeng Sirua,<br />
                Batua, Kec. Manggala, Kota<br />
                Makassar, Sulawesi Selatan<br />
                90233
              </p>
            </div>

            {/* Kolom Kontak WhatsApp */}
            <div className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-8 xl:gap-12">
              <span className="text-black text-base font-semibold w-auto sm:w-48 shrink-0 whitespace-nowrap">
                Kontak Whatsapp
              </span>
              <div className="text-black text-base font-normal leading-relaxed text-black/85 flex flex-col gap-1">
                <a
                  href="https://wa.me/6285243147030"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-900 transition-colors"
                >
                  0852 4314 7030 (Admin 1)
                </a>
                <a
                  href="https://wa.me/6289560190406"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-900 transition-colors"
                >
                  0895 6019 0406 (Admin 2)
                </a>
              </div>
            </div>
          </div>

          {/* Garis Pembatas Horisontal (w-[1146px] h-px bg-stone-300) */}
          <div className="w-full h-px bg-stone-300" />

          {/* Baris 2: Social Media */}
          <div className="pt-10 sm:pt-12">
            <div className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-8 xl:gap-12">
              <span className="text-black text-base font-semibold w-auto sm:w-48 shrink-0 whitespace-nowrap">
                Social Media
              </span>
              <div className="text-black text-base font-normal leading-relaxed text-black/85 flex flex-col sm:flex-row sm:flex-wrap sm:gap-6 lg:gap-8">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-900 transition-colors"
                >
                  @Cordova Super Store (Instagram)
                </a>
                <a
                  href="https://tiktok.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-900 transition-colors"
                >
                  @Cordovasuperstoreind (Tiktok)
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Formulir Pengiriman Pesan (Lebar Pas 1146px Sesuai Desain Figma) */}
        <form onSubmit={handleSubmit} className="w-full max-w-[1146px] flex flex-col gap-4 sm:gap-5">
          {/* Baris 1 Input Form: Nama Lengkap & Nomor Telefon */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 lg:gap-[34px]">
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="Nama Lengkap"
              required
              className="w-full h-14 bg-white/70 focus:bg-white rounded-xl border border-stone-300 px-5 text-base text-black placeholder:text-zinc-400 focus:outline-none focus:border-blue-900 transition-colors"
            />
            <input
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              placeholder="Nomor Telefon (Opsional)"
              className="w-full h-14 bg-white/70 focus:bg-white rounded-xl border border-stone-300 px-5 text-base text-black placeholder:text-zinc-400 focus:outline-none focus:border-blue-900 transition-colors"
            />
          </div>

          {/* Baris 2 Input Form: Nama Perusahaan & Alamat Email */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 lg:gap-[34px]">
            <input
              type="text"
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              placeholder="Nama Perusahaan/Instansi"
              className="w-full h-14 bg-white/70 focus:bg-white rounded-xl border border-stone-300 px-5 text-base text-black placeholder:text-zinc-400 focus:outline-none focus:border-blue-900 transition-colors"
            />
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="Alamat Email"
              className="w-full h-14 bg-white/70 focus:bg-white rounded-xl border border-stone-300 px-5 text-base text-black placeholder:text-zinc-400 focus:outline-none focus:border-blue-900 transition-colors"
            />
          </div>

          {/* Baris 3 Input Form: Pesan Panjang (Textarea h-36) */}
          <div className="w-full">
            <textarea
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Ketikkan pesan anda disini..."
              required
              className="w-full h-36 bg-white/70 focus:bg-white rounded-xl border border-stone-300 p-5 text-base text-black placeholder:text-zinc-400 focus:outline-none focus:border-blue-900 resize-none transition-colors"
            />
          </div>

          {/* Tombol Kirim Pesan & Notifikasi */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2.5 bg-blue-900 hover:bg-blue-950 text-white text-base font-medium px-8 py-3.5 rounded-xl transition-all duration-200 shadow-sm cursor-pointer self-start active:scale-95"
            >
              <Send size={16} />
              <span>Kirim Pesan</span>
            </button>

            {isSubmitted && (
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className="inline-flex items-center gap-2 text-emerald-700 bg-emerald-50 px-4 py-2.5 rounded-lg border border-emerald-200 text-sm"
              >
                <CheckCircle2 size={16} />
                <span>Pesan disiapkan untuk dikirim ke WhatsApp Admin resmi Cordova!</span>
              </motion.div>
            )}
          </div>
        </form>
      </div>
    </section>
  );
};
