import { Brand, Service, ContactInfo } from '../types';

export const initialContactInfo: ContactInfo = {
  companyName: "Mecânico",
  subtitle: "Multi-Marcas Especializada",
  tagline: "Profissional a seu serviço",
  phone: "617 650-7077",
  whatsapp: "16176507077",
  address: "Atendemos em Domicílio",
  mechanicName: "Mecânico Chefe",
  email: "mecanico.multimarcas@email.com",
  workingHours: "Segunda a Sábado: 08:00 às 18:00",
  whatsappGreeting: "Olá! Vi o seu cartão digital e gostaria de solicitar um orçamento para o meu veículo.",
  serviceRadius: "Boston e região"
};

export const initialBrands: Brand[] = [
  {
    id: "honda",
    name: "Honda",
    country: "Japão",
    popularModels: ["Civic", "HR-V", "Fit", "City", "CR-V"],
    featured: true
  },
  {
    id: "ford",
    name: "Ford",
    country: "EUA",
    popularModels: ["Ka", "EcoSport", "Ranger", "Focus", "Fiesta"],
    featured: true
  },
  {
    id: "bmw",
    name: "BMW",
    country: "Alemanha",
    popularModels: ["320i", "X1", "X3", "330i", "Series 1"],
    featured: true
  },
  {
    id: "toyota",
    name: "Toyota",
    country: "Japão",
    popularModels: ["Corolla", "Hilux", "Yaris", "RAV4", "Etios"],
    featured: true
  },
  {
    id: "lexus",
    name: "Lexus",
    country: "Japão",
    popularModels: ["NX 300h", "UX 250h", "RX 350", "ES 300h"],
    featured: true
  },
  {
    id: "acura",
    name: "Acura",
    country: "Japão / EUA",
    popularModels: ["MDX", "RDX", "TLX", "ILX"],
    featured: true
  },
  {
    id: "mercedes",
    name: "Mercedes",
    country: "Alemanha",
    popularModels: ["C-180", "C-250", "GLA 200", "A-200", "E-250"],
    featured: true
  },
  {
    id: "chevrolet",
    name: "Chevrolet",
    country: "EUA",
    popularModels: ["Onix", "Tracker", "S10", "Cruze", "Spin"],
    featured: true
  },
  {
    id: "volkswagen",
    name: "Volkswagen",
    country: "Alemanha",
    popularModels: ["Gol", "Polo", "T-Cross", "Nivus", "Jetta", "Amarok"],
    featured: true
  },
  {
    id: "audi",
    name: "Audi",
    country: "Alemanha",
    popularModels: ["A3", "A4", "Q3", "Q5", "A5"],
    featured: true
  }
];

export const initialServices: Service[] = [
  {
    id: "freios",
    name: "Freios",
    description: "Substituição de pastilhas, discos, fluido de freio e sangria com aferição computadorizada.",
    iconName: "disc"
  },
  {
    id: "suspensao",
    name: "Suspensão",
    description: "Troca de amortecedores, buchas, pivôs, bieletas e batentes com diagnóstico de ruídos.",
    iconName: "car-burst"
  },
  {
    id: "troca-oleo",
    name: "Troca de Óleo",
    description: "Óleo especificado pela montadora, filtro de óleo, filtro de combustível e filtro de ar.",
    iconName: "oil-can"
  },
  {
    id: "pneus",
    name: "Pneus & Rodas",
    description: "Troca, montagem, balanceamento e alinhamento computadorizado 3D.",
    iconName: "truck-monster"
  },
  {
    id: "mecanica-geral",
    name: "Mecânica Geral",
    description: "Diagnóstico completo do motor, correia dentada, embreagem e reparos eletremecânicos.",
    iconName: "wrench"
  }
];
