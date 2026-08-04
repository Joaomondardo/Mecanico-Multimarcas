import React from 'react';
import { ContactInfo, Brand, Service } from '../types';
import { HeaderLogo } from './HeaderLogo';
import { BrandLogoIcon } from './BrandLogos';
import { Phone, MapPin, User, MessageSquare } from 'lucide-react';

interface DesktopBentoViewProps {
  contactInfo: ContactInfo;
  brands: Brand[];
  services: Service[];
  onUpdateContact: (newContact: Partial<ContactInfo>) => void;
  onResetDefaults: () => void;
  onOpenQrCode: () => void;
  onSelectService: (service: Service) => void;
}

export const DesktopBentoView: React.FC<DesktopBentoViewProps> = ({
  contactInfo,
  brands,
  services,
  onSelectService
}) => {
  return (
    <div className="w-full max-w-[800px] mx-auto px-4 py-8">
      {/* Main Grid: Card Preview */}
      <div className="flex justify-center">
        {/* Digital Card Bento Preview */}
        <section className="w-full bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm flex flex-col h-full hover:shadow-md transition-shadow duration-300">
          
          {/* Card Header Area */}
          <div className="bg-white p-8 text-center relative overflow-hidden border-b border-gray-100">
            <div className="relative z-10 flex flex-col items-center">
              <div className="w-24 h-24 bg-gray-50 rounded-full flex items-center justify-center p-2 shadow-xs border border-gray-200 mb-4 hover:scale-105 transition-transform duration-300">
                <HeaderLogo size="lg" />
              </div>
              <div>
                <h2 className="font-extrabold text-3xl text-[#001a33] tracking-tight uppercase">
                  {contactInfo.companyName}
                </h2>
                <p className="font-bold text-xs text-gray-400 mt-2 uppercase tracking-[0.2em]">
                  {contactInfo.tagline}
                </p>
              </div>
            </div>
          </div>

          {/* Card Body Area: Brands Grid + Services List */}
          <div className="flex-grow grid grid-cols-1 md:grid-cols-2">
            
            {/* Brands Grid (Screenshot 4) */}
            <div className="p-6 border-b md:border-b-0 md:border-r border-gray-100 flex flex-col">
              <h4 className="font-bold text-sm text-gray-800 mb-4 border-b border-gray-100 pb-2 tracking-wide uppercase">
                Marcas Especializadas
              </h4>
              <div className="grid grid-cols-2 gap-3 flex-grow">
                {brands.slice(0, 8).map((brand) => (
                  <div
                    key={brand.id}
                    className="border border-gray-200 rounded-xl p-3 flex items-center justify-center hover:border-[#001a33] hover:shadow-2xs transition-all bg-gray-50/50 group cursor-pointer"
                  >
                    <BrandLogoIcon brandId={brand.id} className="h-7 w-7 text-[#001a33] group-hover:scale-110 transition-transform" />
                  </div>
                ))}
              </div>
            </div>

            {/* Services List (Screenshot 4) */}
            <div className="p-6 flex flex-col bg-white">
              <h4 className="font-bold text-sm text-gray-800 mb-4 border-b border-gray-100 pb-2 tracking-wide uppercase">
                Trabalhamos com
              </h4>
              <ul className="space-y-3 font-medium text-xs text-gray-700 flex-grow">
                {services.map((service) => (
                  <li
                    key={service.id}
                    onClick={() => onSelectService(service)}
                    className="flex items-center gap-2.5 group cursor-pointer hover:text-[#001a33] transition-colors"
                  >
                    <span className="w-2 h-2 rounded-full bg-blue-500 group-hover:scale-125 transition-transform" />
                    <span className="group-hover:translate-x-1 transition-transform">{service.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Card Footer Area (Contact Display) */}
          <div className="bg-gray-50 p-4 border-t border-gray-200 text-[#001a33] flex flex-col gap-3">
            <a 
              href={`https://wa.me/${(contactInfo.whatsapp || contactInfo.phone).replace(/[^\d+]/g, '')}`}
              target="_blank" 
              rel="noopener noreferrer"
              className="flex justify-center items-center gap-2 bg-[#001a33] text-white p-3 rounded-lg font-bold shadow-sm hover:bg-[#00264d] transition-colors w-full uppercase tracking-wide text-xs sm:text-sm"
            >
              Nos Chame Agora!
            </a>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-gray-600 font-medium">
              <a 
                href={`tel:${contactInfo.phone.replace(/[^\d+]/g, '')}`} 
                className="flex items-center justify-center gap-2 bg-white border border-gray-200 p-2.5 rounded-lg transition-colors group shadow-sm hover:border-blue-300 hover:bg-blue-50"
              >
                <Phone className="w-4 h-4 text-blue-500" />
                <span className="text-gray-600">Ligar</span>
              </a>
              <a 
                href={`https://wa.me/${(contactInfo.whatsapp || contactInfo.phone).replace(/[^\d+]/g, '')}`}
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-emerald-500 text-white p-2.5 rounded-lg transition-colors group shadow-sm border border-emerald-600 hover:bg-emerald-600"
              >
                <MessageSquare className="w-4 h-4 text-emerald-50" />
                <span className="text-emerald-50">WhatsApp</span>
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
