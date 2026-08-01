import React, { useState } from 'react';
import { MessageCircle, X, Wrench, Send } from 'lucide-react';

interface FloatingWhatsAppButtonProps {
  whatsapp: string;
  onOpenEstimate?: () => void;
}

export const FloatingWhatsAppButton: React.FC<FloatingWhatsAppButtonProps> = ({
  whatsapp,
  onOpenEstimate,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const formattedWhatsapp = whatsapp.replace(/\D/g, '');
  const whatsappUrl = `https://wa.me/${formattedWhatsapp}?text=${encodeURIComponent(
    'Olá! Gostaria de falar com a oficina sobre um orçamento ou agendamento para o meu veículo.'
  )}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 font-sans">
      {/* Expanded Quick Options Card */}
      {isExpanded && (
        <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-4 w-64 animate-in fade-in slide-in-from-bottom-3 duration-200">
          <div className="flex items-center justify-between border-b border-gray-100 pb-2 mb-3">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-bold text-gray-800">Atendimento Online</span>
            </div>
            <button
              onClick={() => setIsExpanded(false)}
              className="text-gray-400 hover:text-gray-600 p-1 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
              aria-label="Fechar"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="text-xs text-gray-600 mb-3">
            Como podemos te ajudar hoje com seu veículo?
          </p>

          <div className="space-y-2">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-all shadow-xs"
            >
              <span className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4" />
                Falar no WhatsApp
              </span>
              <Send className="w-3.5 h-3.5" />
            </a>

            {onOpenEstimate && (
              <button
                onClick={() => {
                  setIsExpanded(false);
                  onOpenEstimate();
                }}
                className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold transition-all shadow-xs cursor-pointer"
              >
                <span className="flex items-center gap-2">
                  <Wrench className="w-4 h-4" />
                  Pedir Orçamento Rápido
                </span>
                <Send className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>
      )}

      {/* Floating Pill Button */}
      <div className="flex items-center gap-2">
        {!isExpanded && (
          <span className="hidden sm:inline-block bg-slate-900 text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-lg border border-slate-700 animate-bounce">
            Fale conosco no WhatsApp
          </span>
        )}

        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="relative group w-14 h-14 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white shadow-xl flex items-center justify-center transition-transform hover:scale-105 active:scale-95 cursor-pointer focus:outline-none"
          aria-label="Atendimento via WhatsApp"
        >
          {/* Animated Ping pulse effect */}
          <span className="absolute -inset-1 rounded-full bg-emerald-500 opacity-75 animate-ping -z-10" />

          {isExpanded ? (
            <X className="w-6 h-6 transition-transform" />
          ) : (
            <MessageCircle className="w-7 h-7 transition-transform" />
          )}
        </button>
      </div>
    </div>
  );
};
