import React from 'react';

interface HeaderLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const HeaderLogo: React.FC<HeaderLogoProps> = ({ className = '', size = 'md' }) => {
  const sizeClasses = {
    sm: 'w-7 h-7',
    md: 'w-10 h-10',
    lg: 'w-14 h-14',
    xl: 'w-20 h-20'
  };

  const textColor = className.includes('text-') ? '' : 'text-[#001a33]';

  return (
    <div className={`flex items-center justify-center ${sizeClasses[size]} ${textColor} ${className}`}>
      <svg className="w-full h-full drop-shadow-sm" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Backdrop circle for badge feel */}
        <circle cx="50" cy="50" r="48" fill="currentColor" opacity="0.06" />
        
        {/* Cargo Body */}
        <path d="M12 34C12 29.5817 15.5817 26 20 26H56C58.2091 26 60 27.7909 60 30V72H16C13.7909 72 12 70.2091 12 68V34Z" fill="currentColor" />
        
        {/* Front Cabin */}
        <path d="M58 44H74L85.2 55.2C86.974 56.974 88 59.3807 88 61.889V68C88 70.2091 86.2091 72 84 72H58V44Z" fill="currentColor" opacity="0.85" />
        
        {/* Cabin Window */}
        <path d="M62 47H72L79 54H62V47Z" fill="white" />
        
        {/* Detail lines on cargo */}
        <rect x="22" y="34" width="30" height="3" rx="1.5" fill="white" opacity="0.3" />
        
        {/* Shop logo on the side of the van (Gear badge) */}
        <circle cx="36" cy="50" r="11" fill="white" />
        <circle cx="36" cy="50" r="7" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeDasharray="3.5 2" />
        <circle cx="36" cy="50" r="3" fill="white" />

        {/* Wheels */}
        {/* Back Wheel */}
        <circle cx="28" cy="72" r="10.5" fill="#1e293b" stroke="white" strokeWidth="3" />
        <circle cx="28" cy="72" r="4.5" fill="#94a3b8" />
        
        {/* Front Wheel */}
        <circle cx="72" cy="72" r="10.5" fill="#1e293b" stroke="white" strokeWidth="3" />
        <circle cx="72" cy="72" r="4.5" fill="#94a3b8" />
        
        {/* Speed lines behind the van */}
        <path d="M2 65H8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" opacity="0.6"/>
        <path d="M6 55H10" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" opacity="0.4"/>
      </svg>
    </div>
  );
};

