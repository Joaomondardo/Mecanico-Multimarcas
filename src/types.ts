export interface Brand {
  id: string;
  name: string;
  country: string;
  popularModels: string[];
  featured: boolean;
}

export interface Service {
  id: string;
  name: string;
  description: string;
  iconName: string;
}

export interface ContactInfo {
  companyName: string;
  subtitle: string;
  tagline: string;
  phone: string;
  whatsapp: string;
  address: string;
  mechanicName: string;
  email: string;
  workingHours: string;
  whatsappGreeting: string;
  serviceRadius: string;
}

export type ViewMode = 'mobile' | 'desktop' | 'estimate' | 'location';
