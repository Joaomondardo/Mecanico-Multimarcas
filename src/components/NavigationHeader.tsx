import React from 'react';
import { ViewMode } from '../types';
import { Calculator, MapPin, QrCode, MessageCircle } from 'lucide-react';
import { HeaderLogo } from './HeaderLogo';

interface NavigationHeaderProps {
  currentView: ViewMode;
  onViewChange: (mode: ViewMode) => void;
  onOpenQrCode: () => void;
  phone: string;
  whatsapp: string;
}

export const NavigationHeader: React.FC<NavigationHeaderProps> = ({
  currentView,
  onViewChange,
  onOpenQrCode,
  phone,
  whatsapp
}) => {
  const cleanPhone = phone.replace(/\D/g, '');
  const cleanWhatsapp = whatsapp.replace(/\D/g, '') || cleanPhone;

  return (
    <header className="bg-[#001a33] text-white border-b border-blue-900/60 sticky top-0 z-40 shadow-sm">
      <div className="max-w-[1240px] mx-auto px-4 py-3 flex flex-col md:flex-row items-center justify-between gap-3">
        {/* Logo & Title */}
        <div className="flex items-center gap-2.5">
          <div className="bg-white/10 p-1.5 rounded-xl backdrop-blur-xs flex items-center justify-center">
            <HeaderLogo size="md" className="text-white" />
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-white text-[15px] leading-[1.1] tracking-wide uppercase">
              Mecânico
            </span>
          </div>
        </div>

        {/* Navigation Anchors */}
        <nav className="hidden md:flex items-center gap-4 text-xs font-semibold text-slate-300">
          <a
            href="#simulador-revisao"
            className="hover:text-white transition-colors py-1 px-2.5 rounded-lg hover:bg-white/10"
          >
            Guia por Km (Manual)
          </a>
          <a
            href="#location-coverage"
            className="hover:text-white transition-colors py-1 px-2.5 rounded-lg hover:bg-white/10"
          >
            Onde Estamos
          </a>
          <a
            href="#faq"
            className="hover:text-white transition-colors py-1 px-2.5 rounded-lg hover:bg-white/10"
          >
            Dúvidas Frequentes
          </a>
        </nav>

        {/* Action Quick Buttons */}
        <div className="flex items-center gap-2 text-xs">
          <button
            onClick={onOpenQrCode}
            className="p-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors flex items-center gap-1.5 font-medium"
            title="Compartilhar Cartão via QR Code"
          >
            <QrCode className="w-4 h-4" />
            <span>QR Code</span>
          </button>

          <a
            href={`https://wa.me/${cleanWhatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-lg shadow-2xs transition-colors flex items-center gap-1.5"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>WhatsApp</span>
          </a>
        </div>
      </div>
    </header>
  );
};
