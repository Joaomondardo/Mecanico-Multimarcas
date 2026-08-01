import React, { useState, useEffect } from 'react';
import { X, Send, Calculator, Car, Wrench, CheckCircle2 } from 'lucide-react';
import { Brand, Service, ContactInfo } from '../types';
import { BrandLogoIcon } from './BrandLogos';
import { ServiceIcon } from './ServiceIcon';
import { motion, AnimatePresence } from 'motion/react';

interface EstimateModalProps {
  isOpen: boolean;
  onClose: () => void;
  brands: Brand[];
  services: Service[];
  contactInfo: ContactInfo;
  selectedBrandPreload?: Brand | null;
  selectedServicePreload?: Service | null;
}

export const EstimateModal: React.FC<EstimateModalProps> = ({
  isOpen,
  onClose,
  brands,
  services,
  contactInfo,
  selectedBrandPreload,
  selectedServicePreload
}) => {
  const [selectedBrandId, setSelectedBrandId] = useState<string>(selectedBrandPreload?.id || brands[0]?.id || 'honda');
  const [selectedServiceId, setSelectedServiceId] = useState<string>(selectedServicePreload?.id || services[0]?.id || 'freios');
  const [carModel, setCarModel] = useState<string>('');
  const [carYear, setCarYear] = useState<string>('2020');
  const [problemNotes, setProblemNotes] = useState<string>('');
  const [clientLocation, setClientLocation] = useState<string>('');

  useEffect(() => {
    if (isOpen) {
      setSelectedBrandId(selectedBrandPreload?.id || brands[0]?.id || 'honda');
      setSelectedServiceId(selectedServicePreload?.id || services[0]?.id || 'freios');
    }
  }, [isOpen, selectedBrandPreload, selectedServicePreload, brands, services]);

  if (!isOpen) return null;

  const currentBrand = brands.find(b => b.id === selectedBrandId) || brands[0];
  const currentService = services.find(s => s.id === selectedServiceId) || services[0];

  const handleSendEstimateToWhatsapp = () => {
    const cleanWhatsapp = contactInfo.whatsapp.replace(/\D/g, '') || contactInfo.phone.replace(/\D/g, '');
    
    let message = `*SOLICITAÇÃO DE ORÇAMENTO - DIGITAL CARD*\n\n`;
    message += `🚗 *Veículo:* ${currentBrand?.name || 'Não especificado'} ${carModel ? carModel : ''} (${carYear})\n`;
    message += `🔧 *Serviço Desejado:* ${currentService?.name || 'Mecânica'}\n`;
    if (clientLocation) message += `📍 *Local de Atendimento:* ${clientLocation}\n`;
    if (problemNotes) message += `📝 *Observações/Sintomas:* ${problemNotes}\n`;
    message += `\n*Gostaria de confirmar disponibilidade para atendimento.*`;

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/${cleanWhatsapp}?text=${encoded}`, '_blank');
    onClose();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="bg-white w-full max-w-lg rounded-2xl shadow-xl overflow-hidden flex flex-col max-h-[90vh]"
        >
          {/* Modal Header */}
          <div className="bg-[#001a33] text-white p-4 px-6 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="p-2 bg-white/10 rounded-lg">
                <Calculator className="w-5 h-5 text-emerald-400" />
              </div>
              <div>
                <h3 className="font-bold text-sm">Solicitar Orçamento Rápido</h3>
                <p className="text-[11px] text-gray-300">Selecione seu carro e o serviço desejado</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-1 text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Body */}
          <div className="p-6 overflow-y-auto space-y-5 text-xs text-gray-700">
            {/* Step 1: Select Brand */}
            <div>
              <label className="font-bold text-[11px] text-gray-500 uppercase tracking-wider block mb-2">
                1. Marca do Veículo
              </label>
              <div className="grid grid-cols-4 gap-2">
                {brands.slice(0, 8).map((b) => (
                  <button
                    key={b.id}
                    type="button"
                    onClick={() => {
                      setSelectedBrandId(b.id);
                      if (b.popularModels.length > 0 && !carModel) {
                        setCarModel(b.popularModels[0]);
                      }
                    }}
                    className={`p-2 rounded-xl border flex flex-col items-center gap-1 transition-all ${
                      selectedBrandId === b.id
                        ? 'border-[#001a33] bg-blue-50/60 text-[#001a33] font-bold shadow-2xs'
                        : 'border-gray-200 hover:border-gray-300 text-gray-600'
                    }`}
                  >
                    <BrandLogoIcon brandId={b.id} className="w-6 h-6" />
                    <span className="text-[10px] truncate max-w-full">{b.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Model & Year */}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="font-bold text-[11px] text-gray-500 uppercase tracking-wider block mb-1">
                  Modelo do Carro
                </label>
                <input
                  type="text"
                  placeholder="ex: Civic, Corolla, Onix"
                  value={carModel}
                  onChange={(e) => setCarModel(e.target.value)}
                  className="w-full border border-gray-300 rounded-xl p-2.5 text-xs focus:border-[#001a33] outline-none"
                />
              </div>
              <div>
                <label className="font-bold text-[11px] text-gray-500 uppercase tracking-wider block mb-1">
                  Ano de Fabricação
                </label>
                <input
                  type="text"
                  placeholder="ex: 2021"
                  value={carYear}
                  onChange={(e) => setCarYear(e.target.value)}
                  className="w-full border border-gray-300 rounded-xl p-2.5 text-xs focus:border-[#001a33] outline-none"
                />
              </div>
            </div>

            {/* Step 2: Select Service */}
            <div>
              <label className="font-bold text-[11px] text-gray-500 uppercase tracking-wider block mb-2">
                2. Serviço Necessário
              </label>
              <div className="grid grid-cols-2 gap-2">
                {services.map((s) => (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => setSelectedServiceId(s.id)}
                    className={`p-2.5 rounded-xl border flex items-center gap-2.5 transition-all text-left ${
                      selectedServiceId === s.id
                        ? 'border-[#001a33] bg-blue-50/60 text-[#001a33] font-bold shadow-2xs'
                        : 'border-gray-200 hover:border-gray-300 text-gray-600'
                    }`}
                  >
                    <ServiceIcon name={s.iconName || s.name} className="w-4 h-4 shrink-0" />
                    <span className="text-xs truncate">{s.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Location & Problem details */}
            <div className="space-y-3">
              <div>
                <label className="font-bold text-[11px] text-gray-500 uppercase tracking-wider block mb-1">
                  Seu Bairro / Cidade (Para atendimento domiciliar)
                </label>
                <input
                  type="text"
                  placeholder="ex: Downtown, Boston"
                  value={clientLocation}
                  onChange={(e) => setClientLocation(e.target.value)}
                  className="w-full border border-gray-300 rounded-xl p-2.5 text-xs focus:border-[#001a33] outline-none"
                />
              </div>

              <div>
                <label className="font-bold text-[11px] text-gray-500 uppercase tracking-wider block mb-1">
                  Sintomas ou Observações (Opcional)
                </label>
                <textarea
                  rows={2}
                  placeholder="ex: Ruído ao frear, barulho na suspensão..."
                  value={problemNotes}
                  onChange={(e) => setProblemNotes(e.target.value)}
                  className="w-full border border-gray-300 rounded-xl p-2.5 text-xs focus:border-[#001a33] outline-none"
                />
              </div>
            </div>
          </div>

          {/* Modal Footer */}
          <div className="p-4 bg-gray-50 border-t border-gray-200 flex items-center justify-between gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2.5 text-xs text-gray-600 hover:text-gray-900 font-medium"
            >
              Cancelar
            </button>
            <button
              onClick={handleSendEstimateToWhatsapp}
              className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2.5 px-4 rounded-xl shadow-xs transition-all text-xs flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" />
              <span>Enviar via WhatsApp</span>
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
