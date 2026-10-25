import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { companyData } from '@/data/company';
import { getGeneralWhatsAppUrl } from '@/lib/whatsapp';
import { trackEvent } from '@/lib/analytics';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleClick = () => {
    trackEvent('click_whatsapp', { source: 'floating_button' });
  };

  return (
    <div className="fixed bottom-6 right-5 sm:right-6 z-40 flex flex-col items-end">
      {/* Tooltip dialog */}
      {showTooltip && (
        <div className="mb-3 w-64 bg-white p-4 rounded-2xl shadow-xl border border-gray-100 text-xs text-ink relative animate-fade-in">
          <button
            onClick={() => setShowTooltip(false)}
            className="absolute top-2 right-2 text-muted hover:text-ink"
            aria-label="Tutup pesan"
          >
            <X size={14} />
          </button>
          <p className="font-bold text-navy mb-1 text-sm">Butuh bantuan belanja?</p>
          <p className="text-muted leading-relaxed">
            Admin Cordova siap membantu cek stok, katalog, atau pesanan Anda.
          </p>
          <div className="mt-3 flex flex-col gap-1.5">
            <a
              href={getGeneralWhatsAppUrl(companyData.contact.whatsappAdmin1.number)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleClick}
              className="text-primary hover:underline font-semibold block text-center py-1 bg-soft rounded-lg"
            >
              Chat Admin 1 (Belanja)
            </a>
            <a
              href={getGeneralWhatsAppUrl(companyData.contact.whatsappAdmin2.number)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleClick}
              className="text-primary hover:underline font-semibold block text-center py-1 bg-soft rounded-lg"
            >
              Chat Admin 2 (Kerja Sama)
            </a>
          </div>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={getGeneralWhatsAppUrl(companyData.contact.whatsappAdmin1.number)}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
        onMouseEnter={() => setShowTooltip(true)}
        className="w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 active:scale-95 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-[#25D366]/40"
        aria-label="Hubungi kami melalui WhatsApp"
      >
        <MessageCircle size={30} className="fill-current" />
      </a>
    </div>
  );
};

