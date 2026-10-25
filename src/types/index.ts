export interface CompanyInfo {
  name: string;
  tagline: string;
  positioning: string;
  foundingYear: number;
  city: string;
  about: {
    paragraphs: string[];
  };
  contact: {
    address: string;
    cityStateZip: string;
    whatsappAdmin1: {
      number: string;
      label: string;
    };
    whatsappAdmin2: {
      number: string;
      label: string;
    };
    instagram: {
      handle: string;
      url: string;
    };
    tiktok: {
      handle: string;
      url: string;
    };
    maps: {
      embedUrl: string;
      directionUrl: string;
    };
  };
}

export interface ProductCategory {
  id: string;
  title: string;
  description: string;
  icon: string;
  image?: string;
  featured?: boolean;
}

export interface PositioningCard {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface AudienceSegment {
  id: string;
  title: string;
  description: string;
  bulletPoints: string[];
  icon: string;
}

export interface ShoppingChannel {
  id: string;
  title: string;
  description: string;
  actionText: string;
  url?: string;
  icon: string;
  active: boolean;
}

export interface WhyReason {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface CollaborationItem {
  id: string;
  title: string;
  target: string;
  description: string;
  icon: string;
}

export interface ValueItem {
  letter: string;
  title: string;
  description: string;
}

export interface GalleryCategory {
  id: string;
  title: string;
  description: string;
  images: {
    url: string;
    alt: string;
    caption?: string;
  }[];
}

export interface TimelineMilestone {
  year: string;
  title: string;
  description: string;
}

export interface NavItem {
  label: string;
  href: string;
}

