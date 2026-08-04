import React from 'react';
import { ContactInfo } from '../types';
import { MapPin, Navigation, Clock, ShieldCheck, Wrench, Phone, MessageCircle } from 'lucide-react';

interface LocationCoverageViewProps {
  contactInfo: ContactInfo;
  onOpenEstimate: () => void;
}

export const LocationCoverageView: React.FC<LocationCoverageViewProps> = ({
  contactInfo,
  onOpenEstimate
}) => {
  const cleanWhatsapp = contactInfo.whatsapp.replace(/\D/g, '') || contactInfo.phone.replace(/\D/g, '');

  return (
    <div className="w-full max-w-[1000px] mx-auto px-4 py-8 space-y-8">
      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-[#001a33] to-[#002b52] text-white p-8 rounded-3xl shadow-sm text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-3 max-w-xl">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-500/20 text-blue-200 rounded-full text-xs font-semibold border border-blue-400/30">
            <MapPin className="w-3.5 h-3.5 text-blue-400" />
            <span>Serviço Móvel e Domiciliar Especializado</span>
          </div>
          <h2 className="text-2xl font-extrabold tracking-tight">
            Atendimento Mecânico na sua Casa ou Empresa
          </h2>
          <p className="text-xs text-gray-300 leading-relaxed">
            Não perca tempo em filas de oficinas. Nossa equipe vai até você com equipamentos computadorizados de diagnóstico para realizar serviços de manutenção rápida e mecânica preventiva.
          </p>
        </div>

        <button
          onClick={onOpenEstimate}
          className="px-6 py-3.5 bg-emerald-500 hover:bg-emerald-600 text-white font-bold rounded-2xl shadow-md transition-all text-xs flex items-center gap-2 shrink-0 hover:scale-105"
        >
          <Navigation className="w-4 h-4" />
          <span>Solicitar Atendimento no Local</span>
        </button>
      </div>

      {/* Grid Features */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 bg-white border border-gray-200 rounded-2xl shadow-2xs space-y-3">
          <div className="p-3 bg-blue-50 text-[#001a33] rounded-xl w-fit">
            <Clock className="w-6 h-6" />
          </div>
          <h3 className="font-bold text-sm text-gray-900">Horário Flexível</h3>
          <p className="text-xs text-gray-500 leading-relaxed">
            Segunda a Sábado: Agendamento prévio com horário marcado para sua conveniência.
          </p>
        </div>

        <div className="p-6 bg-white border border-gray-200 rounded-2xl shadow-2xs space-y-3">
          <div className="p-3 bg-blue-50 text-[#001a33] rounded-xl w-fit">
            <Wrench className="w-6 h-6" />
          </div>
          <h3 className="font-bold text-sm text-gray-900">Mecânica Computadorizada</h3>
          <p className="text-xs text-gray-500 leading-relaxed">
            Freios, troca de óleo, mecânica geral e suspensão para todas as marcas.
          </p>
        </div>

        <div className="p-6 bg-white border border-gray-200 rounded-2xl shadow-2xs space-y-3">
          <div className="p-3 bg-blue-50 text-[#001a33] rounded-xl w-fit">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <h3 className="font-bold text-sm text-gray-900">Garantia nos Serviços</h3>
          <p className="text-xs text-gray-500 leading-relaxed">
            Peças originais ou de primeira linha com garantia e nota fiscal para sua total tranquilidade.
          </p>
        </div>
      </div>

      {/* Address & Direct Phone Box */}
      <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-2xs flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="p-4 bg-gray-100 rounded-2xl text-[#001a33]">
            <MapPin className="w-8 h-8" />
          </div>
          <div>
            <div className="text-[10px] uppercase font-bold text-gray-400">Localização e Cobertura</div>
            <h4 className="font-bold text-base text-gray-900">{contactInfo.address}</h4>
            <p className="text-xs text-gray-500 mt-0.5">{contactInfo.serviceRadius}</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <a
            href={`tel:${contactInfo.phone.replace(/\D/g, '')}`}
            className="px-4 py-2.5 bg-[#001a33] text-white text-xs font-semibold rounded-xl flex items-center gap-2 hover:bg-[#002d59]"
          >
            <Phone className="w-4 h-4" />
            <span>Ligar ({contactInfo.phone})</span>
          </a>

          <a
            href={`https://wa.me/${cleanWhatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2.5 bg-emerald-600 text-white text-xs font-semibold rounded-xl flex items-center gap-2 hover:bg-emerald-700"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Chamar no WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
};
