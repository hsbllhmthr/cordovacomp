import React, { useState } from 'react';
import { Container } from '@/components/ui/Container';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Reveal } from '@/components/ui/Reveal';
import { collaborations } from '@/data/collaborations';
import { companyData } from '@/data/company';
import { getCollabWhatsAppUrl, getWhatsAppUrl } from '@/lib/whatsapp';
import { trackEvent } from '@/lib/analytics';
import {
  Store,
  PlaneTakeoff,
  Building,
  Handshake,
  MessageCircle,
  Send,
  CheckCircle,
} from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  Store: <Store size={28} className="text-primary" />,
  PlaneTakeoff: <PlaneTakeoff size={28} className="text-primary" />,
  Building: <Building size={28} className="text-primary" />,
  Handshake: <Handshake size={28} className="text-primary" />,
};

export const Collaboration: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    institution: '',
    collabType: 'Kemitraan Reseller & Agen',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    trackEvent('submit_collab_form', {
      type: formData.collabType,
      has_institution: Boolean(formData.institution),
    });

    const fullMsg = `Halo Admin Kerjasama Cordova Super Store,\n\nNama: ${formData.name}\nInstansi/Usaha: ${formData.institution || '-'}\nJenis Kerja Sama: ${formData.collabType}\nPesan: ${formData.message}`;

    const waLink = getWhatsAppUrl(
      companyData.contact.whatsappAdmin2.number,
      fullMsg
    );

    setSubmitted(true);
    window.open(waLink, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="kolaborasi" className="py-20 sm:py-28 bg-white">
      <Container>
        <SectionTitle
          badge="Kemitraan Strategis"
          title="Peluang Kolaborasi & Sinergi"
          subtitle="Tumbuh bersama dalam menyebarkan manfaat dan nilai kebaikan bagi umat melalui ekosistem Cordova."
        />

        {/* 4 Kolaborasi Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {collaborations.map((collab, index) => {
            const collabWa = getCollabWhatsAppUrl(
              companyData.contact.whatsappAdmin2.number,
              collab.title
            );

            return (
              <Reveal key={collab.id} delay={0.1 * index}>
                <Card
                  variant="white"
                  className="h-full flex flex-col justify-between p-6 border-gray-100 hover:border-primary/40"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-soft flex items-center justify-center mb-4">
                      {iconMap[collab.icon] || <Handshake size={28} className="text-primary" />}
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-primary">
                      {collab.target}
                    </span>
                    <h3 className="text-lg font-bold text-navy mt-1 mb-2">
                      {collab.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-muted leading-relaxed">
                      {collab.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-gray-100">
                    <Button
                      variant="outline"
                      size="sm"
                      href={collabWa}
                      leftIcon={<MessageCircle size={14} />}
                      className="w-full text-xs"
                    >
                      Ajukan Kemitraan
                    </Button>
                  </div>
                </Card>
              </Reveal>
            );
          })}
        </div>

        {/* Form Kolaborasi F-12 */}
        <Reveal delay={0.2}>
          <div className="max-w-2xl mx-auto bg-soft/70 rounded-24 p-6 sm:p-10 border border-blue-100 shadow-sm">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-navy">
                Formulir Pengajuan Kerja Sama
              </h3>
              <p className="text-sm text-muted mt-2">
                Isi data singkat berikut untuk langsung tersambung dengan tim kemitraan kami.
              </p>
            </div>

            {submitted ? (
              <div className="p-6 bg-white rounded-2xl border border-green-100 text-center">
                <CheckCircle className="mx-auto text-green-500 mb-2" size={36} />
                <p className="text-navy font-bold">Terima kasih atas minat Anda!</p>
                <p className="text-xs text-muted mt-1 mb-4">
                  WhatsApp telah terbuka untuk melanjutkan percakapan bersama admin kemitraan.
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setSubmitted(false)}
                >
                  Kirim Formulir Lain
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-navy mb-1.5 uppercase tracking-wide">
                    Nama Lengkap *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder="Contoh: Ahmad Fauzan"
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-navy mb-1.5 uppercase tracking-wide">
                    Nama Toko / Instansi / Travel
                  </label>
                  <input
                    type="text"
                    value={formData.institution}
                    onChange={(e) =>
                      setFormData({ ...formData, institution: e.target.value })
                    }
                    placeholder="Contoh: PT Berkah Wisata / Toko Mandiri"
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-navy mb-1.5 uppercase tracking-wide">
                    Bidang Kolaborasi *
                  </label>
                  <select
                    value={formData.collabType}
                    onChange={(e) =>
                      setFormData({ ...formData, collabType: e.target.value })
                    }
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary bg-white"
                  >
                    <option value="Kemitraan Reseller & Agen">Kemitraan Reseller & Agen</option>
                    <option value="Mitra Travel Haji & Umrah">Mitra Travel Haji & Umrah</option>
                    <option value="Pengadaan Lembaga & Masjid">Pengadaan Lembaga & Masjid</option>
                    <option value="Supplier / Brand Mitra">Supplier / Brand Mitra</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-navy mb-1.5 uppercase tracking-wide">
                    Pesan / Keterangan Singkat *
                  </label>
                  <textarea
                    required
                    rows={3}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="Jelaskan rencana kerja sama atau produk yang ingin dipesan..."
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary bg-white resize-none"
                  />
                </div>

                <div className="pt-2">
                  <Button
                    variant="primary"
                    size="md"
                    type="submit"
                    leftIcon={<Send size={16} />}
                    className="w-full justify-center"
                  >
                    Kirim & Lanjutkan ke WhatsApp
                  </Button>
                </div>
              </form>
            )}
          </div>
        </Reveal>
      </Container>
    </section>
  );
};

