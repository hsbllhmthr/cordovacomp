import React from 'react';
import { Container } from '@/components/ui/Container';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { Card } from '@/components/ui/Card';
import { Reveal } from '@/components/ui/Reveal';
import { categories } from '@/data/categories';
import { companyData } from '@/data/company';
import { getCategoryWhatsAppUrl } from '@/lib/whatsapp';
import { trackEvent } from '@/lib/analytics';
import {
  BookOpen,
  Library,
  Moon,
  Shirt,
  Luggage,
  Gift,
  Leaf,
  Package,
  ArrowRight,
  MessageCircle,
} from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  BookOpen: <BookOpen size={30} className="text-primary" />,
  Library: <Library size={30} className="text-primary" />,
  Moon: <Moon size={30} className="text-primary" />,
  Shirt: <Shirt size={30} className="text-primary" />,
  Luggage: <Luggage size={30} className="text-primary" />,
  Gift: <Gift size={30} className="text-primary" />,
  Leaf: <Leaf size={30} className="text-primary" />,
  Package: <Package size={30} className="text-primary" />,
};

export const ProductCategories: React.FC = () => {
  const handleCategoryClick = (categoryTitle: string) => {
    trackEvent('click_category', { category: categoryTitle });
  };

  return (
    <section id="produk" className="py-20 sm:py-28 bg-white">
      <Container>
        <SectionTitle
          badge="Koleksi Produk"
          title="8 Kategori Kebutuhan Muslim"
          subtitle="Temukan aneka pilihan produk ibadah, edukasi, dan nutrisi berkualitas tinggi yang lengkap untuk keseharian Anda."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, index) => {
            const waUrl = getCategoryWhatsAppUrl(
              companyData.contact.whatsappAdmin1.number,
              cat.title
            );

            return (
              <Reveal key={cat.id} delay={0.05 * index}>
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => handleCategoryClick(cat.title)}
                  className="block group h-full focus:outline-none focus:ring-2 focus:ring-primary rounded-24"
                >
                  <Card
                    variant="white"
                    className="h-full flex flex-col justify-between p-6 transition-all duration-300 group-hover:border-primary/40 group-hover:shadow-lg group-hover:-translate-y-1"
                  >
                    <div>
                      <div className="w-14 h-14 rounded-2xl bg-soft flex items-center justify-center mb-5 group-hover:bg-primary/10 transition-colors">
                        {iconMap[cat.icon] || <Package size={30} className="text-primary" />}
                      </div>
                      <h3 className="text-lg font-bold text-navy mb-2 group-hover:text-primary transition-colors">
                        {cat.title}
                      </h3>
                      <p className="text-sm text-muted leading-relaxed">
                        {cat.description}
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between text-xs font-semibold text-primary">
                      <span className="flex items-center gap-1.5">
                        <MessageCircle size={14} />
                        Tanya Produk
                      </span>
                      <ArrowRight
                        size={16}
                        className="transform group-hover:translate-x-1 transition-transform"
                      />
                    </div>
                  </Card>
                </a>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

