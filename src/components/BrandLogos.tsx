import React, { useState } from 'react';

interface BrandIconProps {
  brandId: string;
  className?: string;
  useColor?: boolean;
}

// Reliable CDN URLs for official brand logos
const BRAND_CDN_LOGOS: Record<string, string> = {
  honda: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/honda.svg',
  ford: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/ford.svg',
  bmw: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/bmw.svg',
  toyota: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/toyota.svg',
  lexus: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/lexus.svg',
  acura: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/acura.svg',
  mercedes: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/mercedes.svg',
  'mercedes-benz': 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/mercedes.svg',
  chevrolet: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/chevrolet.svg',
  volkswagen: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/volkswagen.svg',
  vw: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/volkswagen.svg',
  audi: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/audi.svg',
};

export const BrandLogoIcon: React.FC<BrandIconProps> = ({ brandId, className = "w-7 h-7" }) => {
  const [imgError, setImgError] = useState(false);
  const normalizedId = brandId.toLowerCase();

  // If CDN URL exists and no loading error, render official CDN SVG with fallback
  const cdnUrl = BRAND_CDN_LOGOS[normalizedId];

  if (cdnUrl && !imgError) {
    return (
      <img
        src={cdnUrl}
        alt={`${brandId} logo`}
        className={`${className} object-contain`}
        referrerPolicy="no-referrer"
        onError={() => setImgError(true)}
      />
    );
  }

  // Fallback: Accurate SVG Vector Badges for each car brand
  switch (normalizedId) {
    case 'honda':
      return (
        <svg className={className} viewBox="0 0 100 100" fill="currentColor">
          <path d="M14 15h72c4 0 6 3 4 12-7 35-14 55-18 58-2 2-6 2-14 2H42c-8 0-12 0-14-2-4-3-11-23-18-58-2-9 0-12 4-12z" fill="none" stroke="currentColor" strokeWidth="6" />
          <path d="M25 22h11c1 0 2 1 2 2l-2 54c0 1-1 2-2 2h-9c-1 0-2-1-2-2l-2-54c0-1 1-2 4-2zM75 22h-11c-1 0-2 1-2 2l2 54c0 1 1 2 2 2h9c1 0 2-1 2-2l2-54c0-1-1-2-4-2z" fill="currentColor" />
          <path d="M33 46h34v8H33z" fill="currentColor" />
        </svg>
      );

    case 'ford':
      return (
        <svg className={className} viewBox="0 0 120 70" fill="none">
          <ellipse cx="60" cy="35" rx="56" ry="30" fill="#003399" />
          <ellipse cx="60" cy="35" rx="52" ry="26" fill="none" stroke="white" strokeWidth="2" />
          <text x="60" y="45" textAnchor="middle" fill="white" fontSize="30" fontWeight="900" fontFamily="Georgia, serif" italic="true">Ford</text>
        </svg>
      );

    case 'bmw':
      return (
        <svg className={className} viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="48" fill="#001a33" stroke="#cbd5e1" strokeWidth="2" />
          <circle cx="50" cy="50" r="32" fill="white" stroke="#001a33" strokeWidth="2" />
          <path d="M 50 18 A 32 32 0 0 1 82 50 L 50 50 Z" fill="#0066b1" />
          <path d="M 18 50 A 32 32 0 0 1 50 82 L 50 50 Z" fill="#0066b1" />
          <text x="50" y="15" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold" fontFamily="sans-serif" letterSpacing="3">BMW</text>
        </svg>
      );

    case 'toyota':
      return (
        <svg className={className} viewBox="0 0 100 70" fill="none" stroke="currentColor" strokeWidth="6">
          <ellipse cx="50" cy="35" rx="46" ry="30" />
          <ellipse cx="50" cy="35" rx="16" ry="27" />
          <ellipse cx="50" cy="22" rx="32" ry="12" />
        </svg>
      );

    case 'lexus':
      return (
        <svg className={className} viewBox="0 0 100 70" fill="none" stroke="currentColor" strokeWidth="6">
          <ellipse cx="50" cy="35" rx="46" ry="30" />
          <path d="M 28 20 L 70 20 L 28 50 L 74 50" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );

    case 'acura':
      return (
        <svg className={className} viewBox="0 0 100 100" fill="currentColor">
          <circle cx="50" cy="50" r="44" fill="none" stroke="currentColor" strokeWidth="6" />
          <path d="M 50 18 L 26 76 L 36 76 L 50 38 L 64 76 L 74 76 Z" />
          <path d="M 40 46 L 60 46 L 50 28 Z" />
        </svg>
      );

    case 'mercedes':
    case 'mercedes-benz':
      return (
        <svg className={className} viewBox="0 0 100 100" fill="currentColor">
          <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="5" />
          <polygon points="50,8 46,47 50,50 54,47" />
          <polygon points="14,71 47,54 50,50 48,48" />
          <polygon points="86,71 52,48 50,50 53,54" />
        </svg>
      );

    case 'chevrolet':
      return (
        <svg className={className} viewBox="0 0 100 60">
          <polygon points="32,10 68,10 68,22 98,22 98,38 68,38 68,50 32,50 32,38 2,38 2,22 32,22" fill="#d97706" stroke="currentColor" strokeWidth="2" />
          <polygon points="34,14 66,14 66,24 94,24 94,36 66,36 66,46 34,46 34,36 6,36 6,24 34,24" fill="#fbbf24" />
        </svg>
      );

    case 'volkswagen':
    case 'vw':
      return (
        <svg className={className} viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="6">
          <circle cx="50" cy="50" r="45" />
          <path d="M 20 25 L 35 68 L 50 38 L 65 68 L 80 25" strokeLinecap="round" strokeLinejoin="round" />
          <line x1="10" y1="46" x2="90" y2="46" strokeWidth="3" />
          <path d="M 30 25 L 50 62 L 70 25" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );

    case 'audi':
      return (
        <svg className={className} viewBox="0 0 120 50" fill="none" stroke="currentColor" strokeWidth="5">
          <circle cx="27" cy="25" r="18" />
          <circle cx="49" cy="25" r="18" />
          <circle cx="71" cy="25" r="18" />
          <circle cx="93" cy="25" r="18" />
        </svg>
      );

    default:
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 1 12.5V16c0 .6.4 1 1 1h2" />
          <circle cx="7" cy="17" r="2" />
          <circle cx="17" cy="17" r="2" />
        </svg>
      );
  }
};
