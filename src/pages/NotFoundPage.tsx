import React from 'react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Home, ArrowLeft } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-soft px-4">
      <Container className="text-center py-16">
        <div className="w-20 h-20 rounded-3xl bg-primary/10 text-primary flex items-center justify-center mx-auto mb-6">
          <span className="text-3xl font-extrabold">404</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-extrabold text-navy mb-3">
          Halaman Tidak Ditemukan
        </h1>
        <p className="text-sm sm:text-base text-muted max-w-md mx-auto mb-8">
          Halaman yang Anda tuju mungkin telah dipindahkan atau tautan yang dimasukkan kurang tepat.
        </p>
        <div className="flex justify-center gap-3">
          <Button variant="primary" href="/" leftIcon={<Home size={18} />}>
            Kembali ke Beranda
          </Button>
          <Button
            variant="outline"
            onClick={() => window.history.back()}
            leftIcon={<ArrowLeft size={18} />}
          >
            Halaman Sebelumnya
          </Button>
        </div>
      </Container>
    </div>
  );
};

