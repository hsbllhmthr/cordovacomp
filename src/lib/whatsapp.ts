/**
 * Helper to build WhatsApp chat link with predefined message
 */
export function getWhatsAppUrl(
  phoneNumber: string,
  message: string
): string {
  // Strip non-digit characters
  const cleanNumber = phoneNumber.replace(/\D/g, '');
  const encodedText = encodeURIComponent(message);
  return `https://wa.me/${cleanNumber}?text=${encodedText}`;
}

export function getGeneralWhatsAppUrl(phoneNumber: string): string {
  return getWhatsAppUrl(
    phoneNumber,
    'Halo Cordova Super Store, saya ingin menanyakan informasi produk dan pelayanan.'
  );
}

export function getCategoryWhatsAppUrl(phoneNumber: string, categoryTitle: string): string {
  return getWhatsAppUrl(
    phoneNumber,
    `Halo Cordova Super Store, saya ingin menanyakan produk kategori "${categoryTitle}".`
  );
}

export function getCollabWhatsAppUrl(phoneNumber: string, collabType?: string): string {
  const typeText = collabType ? ` terkait ${collabType}` : '';
  return getWhatsAppUrl(
    phoneNumber,
    `Halo Admin Cordova Super Store, saya tertarik untuk menjalin kerja sama kemitraan${typeText}. Mohon informasi prosedurnya.`
  );
}

