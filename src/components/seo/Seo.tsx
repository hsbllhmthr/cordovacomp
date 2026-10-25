import React from 'react';
import { Helmet } from 'react-helmet-async';
import { getLocalBusinessSchema } from '@/lib/seo';

interface SeoProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
}

export const Seo: React.FC<SeoProps> = ({
  title = 'Cordova Super Store — Untuk Ibadah Terbaikmu | One-Stop Islamic Store Makassar',
  description = "One-stop Islamic store terlengkap di Makassar melayani kebutuhan Muslim: Al-Qur'an, buku Islami, perlengkapan ibadah, fashion Muslim, perlengkapan haji & umrah, kurma, dan herbal.",
  image = '/og-image.jpg',
  url = 'https://cordovasuperstore.com',
}) => {
  const schema = getLocalBusinessSchema();

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* JSON-LD Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};

