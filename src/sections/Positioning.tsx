import React from 'react';
import { Container } from '@/components/ui/Container';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { Card } from '@/components/ui/Card';
import { Reveal } from '@/components/ui/Reveal';
import { positioningCards, companyData } from '@/data/company';
import { PackageCheck, Sparkles, MapPin, SmilePlus } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  PackageCheck: <PackageCheck size={28} className="text-primary" />,
  Sparkles: <Sparkles size={28} className="text-primary" />,
  MapPin: <MapPin size={28} className="text-primary" />,
  SmilePlus: <SmilePlus size={28} className="text-primary" />,
};

export const Positioning: React.FC = () => {
  return (
    <section id="keunggulan" className="py-20 sm:py-28 bg-soft/50 border-y border-blue-50/60">
      <Container>
        <SectionTitle
          badge="Positioning Kami"
          title="Mengapa Memilih Cordova?"
          subtitle={companyData.positioning}
        />

        {/* Highlight quote banner */}
        <Reveal delay={0.1}>
          <div className="max-w-3xl mx-auto mb-12 p-6 rounded-24 bg-white border border-blue-100 shadow-sm text-center">
            <p className="text-base sm:text-lg font-medium text-navy italic">
              "Kami hadir tidak sekadar sebagai toko niaga, melainkan mitra ibadah Anda — memudahkan setiap langkah kebaikan bagi keluarga Muslim."
            </p>
          </div>
        </Reveal>

        {/* 4 Cards Grid: 1 col on mobile, 2 col on tablet, 4 col on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {positioningCards.map((card, index) => (
            <Reveal key={card.id} delay={0.1 * (index + 1)}>
              <Card
                variant="white"
                className="h-full flex flex-col items-center text-center p-6 border-blue-100/60"
              >
                <div className="w-14 h-14 rounded-2xl bg-soft flex items-center justify-center mb-5 shadow-sm">
                  {iconMap[card.icon] || <Sparkles size={28} className="text-primary" />}
                </div>
                <h3 className="text-xl font-bold text-navy mb-2.5">
                  {card.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  {card.description}
                </p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
};

