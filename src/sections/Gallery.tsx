import React, { useState } from 'react';
import { Container } from '@/components/ui/Container';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { Lightbox } from '@/components/ui/Lightbox';
import { Reveal } from '@/components/ui/Reveal';
import { galleryCategories } from '@/data/gallery';
import { Eye } from 'lucide-react';

export const Gallery: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>(galleryCategories[0].id);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const currentCategory =
    galleryCategories.find((cat) => cat.id === activeTab) ||
    galleryCategories[0];

  const handleOpenLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const handlePrev = () => {
    setLightboxIndex((prev) =>
      prev === 0 ? currentCategory.images.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setLightboxIndex((prev) =>
      prev === currentCategory.images.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section id="galeri" className="py-20 sm:py-28 bg-white">
      <Container>
        <SectionTitle
          badge="Dokumentasi"
          title="Aktivitas & Pengalaman Customer"
          subtitle="Gambaran suasana gerai, semarak kegiatan ibadah, bazar, dan momen kehangatan bersama sahabat Cordova."
        />

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {galleryCategories.map((cat) => {
            const isActive = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 focus:outline-none ${
                  isActive
                    ? 'bg-navy text-white shadow-sm'
                    : 'bg-soft text-ink hover:text-primary hover:bg-blue-100/60'
                }`}
              >
                {cat.title}
              </button>
            );
          })}
        </div>

        {/* Gallery Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentCategory.images.map((img, index) => (
            <Reveal key={img.url} delay={0.08 * index}>
              <div
                onClick={() => handleOpenLightbox(index)}
                className="group relative rounded-24 overflow-hidden shadow-sm aspect-[4/3] bg-soft cursor-pointer border border-gray-100"
              >
                <img
                  src={img.url}
                  alt={img.alt}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-navy/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center p-4">
                  <div className="w-10 h-10 rounded-full bg-white/90 text-navy flex items-center justify-center shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform">
                    <Eye size={20} />
                  </div>
                </div>

                {img.caption && (
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 text-white text-xs font-medium">
                    {img.caption}
                  </div>
                )}
              </div>
            </Reveal>
          ))}
        </div>

        {/* Lightbox modal */}
        <Lightbox
          isOpen={lightboxOpen}
          images={currentCategory.images}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxOpen(false)}
          onPrev={handlePrev}
          onNext={handleNext}
        />
      </Container>
    </section>
  );
};

