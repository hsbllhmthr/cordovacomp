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
  description = "One-Stop Islamic Store di Makassar sejak 1998. Menyediakan Al-Qur'an, buku Islami, busana Muslim, perlengkapan ibadah, hingga oleh-oleh haji & umrah.",
  image,
  url,
}) => {
  const currentOrigin =
    typeof window !== 'undefined' && window.location.origin
      ? window.location.origin
      : (import.meta.env.VITE_SITE_URL || 'https://cordovacomp.vercel.app');

  const canonicalUrl = url || (typeof window !== 'undefined' ? window.location.href : currentOrigin);
  const ogImageUrl = image || `${currentOrigin}/og-image.jpg`;
  const schema = getLocalBusinessSchema(currentOrigin);

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="title" content="Cordova Super Store — Untuk Ibadah Terbaikmu" />
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph / WhatsApp / Facebook */}
      <meta property="og:site_name" content="Cordova Super Store Makassar" />
      <meta property="og:title" content="Cordova Super Store — Untuk Ibadah Terbaikmu" />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImageUrl} />
      <meta property="og:image:secure_url" content={ogImageUrl} />
      <meta property="og:image:type" content="image/jpeg" />
      <meta property="og:image:width" content="600" />
      <meta property="og:image:height" content="600" />
      <meta property="og:image:alt" content="Logo Icon Cordova Super Store Makassar" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content="website" />

      {/* Twitter / Telegram */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content="Cordova Super Store — Untuk Ibadah Terbaikmu" />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImageUrl} />
      <meta name="twitter:image:alt" content="Logo Icon Cordova Super Store Makassar" />

      {/* JSON-LD Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};

