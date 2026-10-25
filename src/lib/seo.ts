import { companyData } from '@/data/company';

export function getLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: companyData.name,
    image: 'https://cordovasuperstore.com/og-image.jpg',
    '@id': 'https://cordovasuperstore.com',
    url: 'https://cordovasuperstore.com',
    telephone: `+${companyData.contact.whatsappAdmin1.number}`,
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: companyData.contact.address,
      addressLocality: companyData.city,
      addressRegion: 'Sulawesi Selatan',
      addressCountry: 'ID',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: -5.14,
      longitude: 119.4,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
          'Sunday',
        ],
        opens: '08:30',
        closes: '21:30',
      },
    ],
    sameAs: [
      companyData.contact.instagram.url,
      companyData.contact.tiktok.url,
    ],
  };
}

