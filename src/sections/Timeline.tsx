import React from 'react';
import { Container } from '@/components/ui/Container';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { Reveal } from '@/components/ui/Reveal';
import { timelineMilestones } from '@/data/timeline';

export const Timeline: React.FC = () => {
  return (
    <section id="perjalanan" className="py-20 sm:py-28 bg-soft/40 border-y border-blue-50">
      <Container>
        <SectionTitle
          badge="Kilas Balik"
          title="Perjalanan Cordova Super Store"
          subtitle="Tumbuh dari toko literatur Islami sederhana hingga kini menjadi destinasi one-stop store pilihan keluarga Muslim."
        />

        {/* Desktop Horizontal Timeline (lg screens) */}
        <div className="hidden lg:block relative my-12">
          {/* Central connecting horizontal line */}
          <div className="absolute top-1/2 left-8 right-8 h-1 bg-gradient-to-r from-primary/30 via-primary to-primary/30 transform -translate-y-1/2 z-0" />

          <div className="grid grid-cols-4 gap-6 relative z-10">
            {timelineMilestones.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={item.year}
                  className={`flex flex-col items-center ${
                    isEven ? 'justify-start' : 'justify-end'
                  }`}
                >
                  <Reveal delay={0.1 * index}>
                    <div className="bg-white rounded-24 p-6 shadow-sm border border-blue-100 flex flex-col items-center text-center">
                      <div className="w-14 h-14 rounded-full bg-navy text-white font-extrabold text-sm flex items-center justify-center mb-4 border-4 border-soft shadow">
                        {item.year}
                      </div>
                      <h3 className="text-base font-bold text-navy mb-2">
                        {item.title}
                      </h3>
                      <p className="text-xs text-muted leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </Reveal>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile & Tablet Vertical Timeline (< lg screens) */}
        <div className="lg:hidden relative pl-6 border-l-2 border-primary/30 space-y-10 my-8 ml-4">
          {timelineMilestones.map((item, index) => (
            <Reveal key={item.year} delay={0.1 * index}>
              <div className="relative">
                {/* Node indicator */}
                <div className="absolute -left-[35px] top-1 w-6 h-6 rounded-full bg-primary border-4 border-white shadow" />

                <div className="bg-white rounded-24 p-6 shadow-sm border border-blue-100">
                  <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary font-black text-xs mb-2">
                    {item.year}
                  </span>
                  <h3 className="text-lg font-bold text-navy mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
};

