export interface HeroContent {
  backgroundImage: string;
  backgroundVideo?: string;
  headline: string;
  subtext: string;
  ctaButtons: Array<{ text: string; link: string; primary?: boolean }>;
}

export interface FounderBio {
  name: string;
  role: string;
  photo: string;
  bio: string;
}

export interface ProcessStep {
  title: string;
  description: string;
  icon: string;
}

export interface ArtworkItem {
  id: string;
  title: string;
  artist: string;
  image: string;
  year: string;
  medium: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ContactInfo {
  address: string;
  phone: string;
  email: string;
  mapEmbedUrl: string;
  socialMedia: {
    instagram?: string;
    linkedin?: string;
    facebook?: string;
    twitter?: string;
  };
}

export interface BlogPost {
  url: string | undefined;
  id: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  slug: string;
}
