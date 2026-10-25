import React from 'react';
import { Container } from '@/components/ui/Container';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { Card } from '@/components/ui/Card';
import { Reveal } from '@/components/ui/Reveal';
import { valuesList } from '@/data/values';

export const Values: React.FC = () => {
  return (
    <section id="nilai" className="py-20 sm:py-28 bg-navy text-white relative overflow-hidden">
      {/* Background soft ambient glows */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <Container className="relative z-10">
        <SectionTitle
          badge="Budaya Perusahaan"
          title="Nilai yang Kami Bawa: I-K-H-L-A-S"
          subtitle="Landasan moral dan prinsip operasional dalam melayani setiap langkah ibadah konsumen dan mitra."
          light
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {valuesList.map((item, index) => (
            <Reveal key={item.letter} delay={0.08 * index}>
              <Card
                variant="navy"
                className="h-full p-8 border-white/10 hover:border-primary bg-white/5 backdrop-blur-sm"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-2xl bg-primary text-white font-extrabold text-2xl flex items-center justify-center shadow-lg shadow-primary/30">
                    {item.letter}
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-widest text-blue-300 font-semibold">
                      Nilai Cordova
                    </span>
                    <h3 className="text-xl font-bold text-white">
                      {item.title}
                    </h3>
                  </div>
                </div>

                <p className="text-sm text-blue-100/80 leading-relaxed mt-2">
                  {item.description}
                </p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
};

