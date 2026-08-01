import React, { useState, useEffect } from 'react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { ViewMode, ContactInfo, Brand, Service } from './types';
import { initialContactInfo, initialBrands, initialServices } from './data/initialData';
import { NavigationHeader } from './components/NavigationHeader';
import { DesktopBentoView } from './components/DesktopBentoView';
import { LocationCoverageView } from './components/LocationCoverageView';
import { FaqSection } from './components/FaqSection';
import { MileageCheckupSimulator } from './components/MileageCheckupSimulator';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FloatingWhatsAppButton } from './components/FloatingWhatsAppButton';
import { EstimateModal } from './components/EstimateModal';
import { QrCodeModal } from './components/QrCodeModal';

export default function App() {
  // Load saved contact info or fallback to initial
  const [contactInfo, setContactInfo] = useState<ContactInfo>(() => {
    try {
      const saved = localStorage.getItem('mecanico_contact_info');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (!parsed.serviceRadius || parsed.serviceRadius.includes('São Paulo')) {
          parsed.serviceRadius = initialContactInfo.serviceRadius;
        }
        return parsed;
      }
    } catch {
      // fallback
    }
    return initialContactInfo;
  });

  const [brands] = useState<Brand[]>(initialBrands);
  const [services] = useState<Service[]>(initialServices);

  // Modals state
  const [isEstimateOpen, setIsEstimateOpen] = useState(false);
  const [isQrCodeOpen, setIsQrCodeOpen] = useState(false);
  const [selectedBrandModal, setSelectedBrandModal] = useState<Brand | null>(null);
  const [selectedServiceModal, setSelectedServiceModal] = useState<Service | null>(null);

  // Save changes to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('mecanico_contact_info', JSON.stringify(contactInfo));
    } catch (err) {
      console.error('Failed to save contact info', err);
    }
  }, [contactInfo]);

  const handleUpdateContact = (newContact: Partial<ContactInfo>) => {
    setContactInfo(prev => ({ ...prev, ...newContact }));
  };

  const handleResetDefaults = () => {
    setContactInfo(initialContactInfo);
    try {
      localStorage.removeItem('mecanico_contact_info');
    } catch {
      // ignore
    }
  };

  const handleSelectService = (service: Service) => {
    setSelectedServiceModal(service);
    setSelectedBrandModal(null);
    setIsEstimateOpen(true);
  };

  const handleSelectBrand = (brand: Brand) => {
    setSelectedBrandModal(brand);
    setSelectedServiceModal(null);
    setIsEstimateOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#f7f9fc] text-[#191c1e] font-sans flex flex-col antialiased selection:bg-blue-900 selection:text-white">
      {/* Navigation Header */}
      <NavigationHeader
        currentView={'desktop'}
        onViewChange={(mode) => {
          if (mode === 'estimate') {
            setIsEstimateOpen(true);
          }
        }}
        onOpenQrCode={() => setIsQrCodeOpen(true)}
        phone={contactInfo.phone}
        whatsapp={contactInfo.whatsapp}
      />

      {/* Main Screen Views */}
      <main className="flex-1 flex flex-col py-6 px-2 sm:px-4 space-y-12 max-w-[1400px] mx-auto w-full">
        <section>
          <DesktopBentoView
            contactInfo={contactInfo}
            brands={brands}
            services={services}
            onUpdateContact={handleUpdateContact}
            onResetDefaults={handleResetDefaults}
            onOpenQrCode={() => setIsQrCodeOpen(true)}
            onSelectService={handleSelectService}
            onSelectBrand={handleSelectBrand}
          />
        </section>

        <section id="simulador-revisao">
          <MileageCheckupSimulator
            whatsapp={contactInfo.whatsapp}
            onOpenEstimate={() => setIsEstimateOpen(true)}
          />
        </section>

        <section id="location-coverage">
          <LocationCoverageView
            contactInfo={contactInfo}
            onOpenEstimate={() => setIsEstimateOpen(true)}
          />
        </section>

        <section id="depoimentos">
          <TestimonialsSection whatsapp={contactInfo.whatsapp} />
        </section>

        <section id="faq">
          <FaqSection
            onOpenEstimate={() => setIsEstimateOpen(true)}
            whatsapp={contactInfo.whatsapp}
          />
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-6 px-4 text-center text-xs text-gray-500 mt-auto">
        <div className="max-w-[1240px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <div>
            © {new Date().getFullYear()} Mecânico Multi-Marcas. Todos os direitos reservados.
          </div>
          <div className="flex items-center gap-4 text-gray-400">
            <button
              onClick={() => setIsQrCodeOpen(true)}
              className="hover:text-[#001a33] transition-colors"
            >
              QR Code do Cartão
            </button>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Quick Action */}
      <FloatingWhatsAppButton
        whatsapp={contactInfo.whatsapp}
        onOpenEstimate={() => setIsEstimateOpen(true)}
      />

      {/* Modals */}
      <EstimateModal
        isOpen={isEstimateOpen}
        onClose={() => setIsEstimateOpen(false)}
        brands={brands}
        services={services}
        contactInfo={contactInfo}
        selectedBrandPreload={selectedBrandModal}
        selectedServicePreload={selectedServiceModal}
      />

      <QrCodeModal
        isOpen={isQrCodeOpen}
        onClose={() => setIsQrCodeOpen(false)}
        contactInfo={contactInfo}
      />

      {/* Vercel Speed Insights */}
      <SpeedInsights />
    </div>
  );
}
