export interface Service {
  id: string;
  title: string;
  code: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  benefits: string[];
  workflow: string[];
  featuredProjects: string[];
  bgImage: string;
}

export interface Project {
  id: string;
  name: string;
  category: 'y-te' | 'co-quan-nha-nuoc' | 'thuong-mai' | 'pccc';
  categoryLabel: string;
  scale: string;
  area: string;
  investment: string;
  role: string;
  location: string;
  year: string;
  client: string;
  description: string;
  highlights: string[];
  imageUrl: string;
  gallery: string[];
  isFeatured?: boolean;
}

export interface NewsItem {
  id: string;
  title: string;
  summary: string;
  date: string;
  source: string;
  externalUrl?: string;
  imageUrl: string;
  category: string;
  content?: string[];
  isHot?: boolean;
}

export interface Milestone {
  year: string;
  title: string;
  description: string;
  badge?: string;
  highlightProjects?: string[];
}

export interface ContactMessage {
  fullName: string;
  phone: string;
  email: string;
  serviceType: string;
  projectScale?: string;
  message: string;
}
