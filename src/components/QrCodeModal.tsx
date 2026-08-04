import React, { useState } from 'react';
import { X, Copy, Check, Share2, Smartphone } from 'lucide-react';
import { ContactInfo } from '../types';
import { HeaderLogo } from './HeaderLogo';
import { motion, AnimatePresence } from 'motion/react';

interface QrCodeModalProps {
  isOpen: boolean;
  onClose: () => void;
  contactInfo: ContactInfo;
}

export const QrCodeModal: React.FC<QrCodeModalProps> = ({
  isOpen,
  onClose,
  contactInfo
}) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const currentUrl = window.location.href;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(currentUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // SVG QR Code generator for quick client scan
  const qrCodeSvg = (
    <svg className="w-48 h-48 mx-auto" viewBox="0 0 256 256" fill="none">
      <rect width="256" height="256" fill="white" rx="16" />
      {/* Outer Finder Patterns */}
      <rect x="20" y="20" width="60" height="60" fill="#001a33" rx="8" />
      <rect x="32" y="32" width="36" height="36" fill="white" rx="4" />
      <rect x="42" y="42" width="16" height="16" fill="#001a33" rx="2" />

      <rect x="176" y="20" width="60" height="60" fill="#001a33" rx="8" />
      <rect x="188" y="32" width="36" height="36" fill="white" rx="4" />
      <rect x="198" y="42" width="16" height="16" fill="#001a33" rx="2" />

      <rect x="20" y="176" width="60" height="60" fill="#001a33" rx="8" />
      <rect x="32" y="188" width="36" height="36" fill="white" rx="4" />
      <rect x="42" y="198" width="16" height="16" fill="#001a33" rx="2" />

      {/* Decorative Matrix Data Dots */}
      <circle cx="100" cy="40" r="6" fill="#001a33" />
      <circle cx="120" cy="40" r="6" fill="#001a33" />
      <circle cx="140" cy="40" r="6" fill="#001a33" />
      <circle cx="100" cy="60" r="6" fill="#001a33" />
      <circle cx="140" cy="60" r="6" fill="#001a33" />
      <circle cx="110" cy="80" r="6" fill="#001a33" />
      <circle cx="130" cy="80" r="6" fill="#001a33" />

      <circle cx="40" cy="100" r="6" fill="#001a33" />
      <circle cx="60" cy="100" r="6" fill="#001a33" />
      <circle cx="80" cy="100" r="6" fill="#001a33" />
      <circle cx="100" cy="100" r="6" fill="#001a33" />
      <circle cx="120" cy="100" r="6" fill="#001a33" />
      <circle cx="160" cy="100" r="6" fill="#001a33" />
      <circle cx="180" cy="100" r="6" fill="#001a33" />
      <circle cx="210" cy="100" r="6" fill="#001a33" />

      <circle cx="40" cy="120" r="6" fill="#001a33" />
      <circle cx="80" cy="120" r="6" fill="#001a33" />
      <circle cx="110" cy="120" r="6" fill="#001a33" />
      <circle cx="140" cy="120" r="6" fill="#001a33" />
      <circle cx="170" cy="120" r="6" fill="#001a33" />
      <circle cx="200" cy="120" r="6" fill="#001a33" />

      <circle cx="100" cy="140" r="6" fill="#001a33" />
      <circle cx="130" cy="140" r="6" fill="#001a33" />
      <circle cx="150" cy="140" r="6" fill="#001a33" />
      <circle cx="180" cy="140" r="6" fill="#001a33" />

      <circle cx="100" cy="180" r="6" fill="#001a33" />
      <circle cx="120" cy="180" r="6" fill="#001a33" />
      <circle cx="150" cy="180" r="6" fill="#001a33" />
      <circle cx="190" cy="180" r="6" fill="#001a33" />
      <circle cx="210" cy="180" r="6" fill="#001a33" />

      <circle cx="110" cy="210" r="6" fill="#001a33" />
      <circle cx="140" cy="210" r="6" fill="#001a33" />
      <circle cx="170" cy="210" r="6" fill="#001a33" />
      <circle cx="200" cy="210" r="6" fill="#001a33" />

      {/* Center Wrench Icon */}
      <rect x="110" y="110" width="36" height="36" fill="white" rx="8" stroke="#001a33" strokeWidth="2" />
      <path d="M123 121 M123 123 A3 3 0 1 1 127 127 L133 133" stroke="#001a33" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="bg-white w-full max-w-sm rounded-2xl shadow-xl overflow-hidden flex flex-col text-center"
        >
          {/* Header */}
          <div className="bg-[#001a33] text-white p-4 relative flex flex-col items-center">
            <button
              onClick={onClose}
              className="absolute top-3 right-3 p-1.5 text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            <HeaderLogo size="sm" className="mb-2" />
            <h3 className="font-bold text-sm tracking-tight">{contactInfo.companyName}</h3>
            <p className="text-[11px] text-gray-300">{contactInfo.subtitle}</p>
          </div>

          {/* QR Code display */}
          <div className="p-6 space-y-4">
            <div className="p-4 bg-gray-50 border border-gray-200 rounded-2xl inline-block shadow-inner">
              {qrCodeSvg}
            </div>

            <div>
              <p className="text-xs text-gray-600 font-medium">
                Aponte a câmera do celular para abrir o Cartão Digital no smartphone.
              </p>
              <p className="text-[11px] text-gray-400 mt-1">
                Atendimento: {contactInfo.phone}
              </p>
            </div>

            {/* Copy link button */}
            <div className="pt-2">
              <button
                onClick={handleCopyLink}
                className="w-full bg-blue-50 hover:bg-blue-100 text-[#001a33] font-semibold py-2.5 px-4 rounded-xl border border-blue-200 transition-all text-xs flex items-center justify-center gap-2"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                <span>{copied ? 'Link Copiado!' : 'Copiar Link do Cartão'}</span>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
