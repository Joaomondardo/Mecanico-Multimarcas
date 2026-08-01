import React, { useState, useEffect } from 'react';
import { X, Copy, Check, Share2, Smartphone } from 'lucide-react';
import { ContactInfo } from '../types';
import { HeaderLogo } from './HeaderLogo';
import { motion, AnimatePresence } from 'motion/react';
import QRCode from 'qrcode';

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
  const [qrCodeUrl, setQrCodeUrl] = useState<string>('');

  useEffect(() => {
    if (isOpen) {
      QRCode.toDataURL(window.location.href, {
        width: 256,
        margin: 2,
        color: {
          dark: '#001a33',
          light: '#ffffff'
        }
      }).then(setQrCodeUrl).catch(console.error);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const currentUrl = window.location.href;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(currentUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const qrCodeDisplay = qrCodeUrl ? (
    <img src={qrCodeUrl} alt="QR Code do Cartão Digital" className="w-48 h-48 mx-auto rounded-xl" />
  ) : (
    <div className="w-48 h-48 mx-auto flex items-center justify-center text-gray-400 text-xs">
      Gerando QR Code...
    </div>
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
              {qrCodeDisplay}
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
