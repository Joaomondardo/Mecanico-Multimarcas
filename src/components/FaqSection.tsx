import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, MessageCircle, Wrench, ShieldCheck, CheckCircle2 } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
  icon?: React.ReactNode;
}

interface FaqSectionProps {
  onOpenEstimate: () => void;
  whatsapp: string;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ onOpenEstimate, whatsapp }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FaqItem[] = [
    {
      question: 'Quais marcas de veículos vocês atendem na oficina?',
      answer: 'Atendemos todas as marcas (Volkswagen, Chevrolet, Fiat, Ford, Toyota, Honda, Hyundai, Jeep, Nissan, BMW, Mercedes, Audi, Acura e muito mais). Contamos com um mecânico especialista para diagnóstico preciso em qualquer modelo.',
      icon: <Wrench className="w-4 h-4 text-blue-600" />
    },
    {
      question: 'As peças trocadas e os serviços possuem garantia?',
      answer: 'Sim! Todos os nossos serviços executados e peças instaladas possuem garantia total, seguindo rigorosamente o Código de Defesa do Consumidor e os padrões técnicos dos fabricantes.',
      icon: <ShieldCheck className="w-4 h-4 text-blue-600" />
    },
    {
      question: 'Como funciona o agendamento prévio com horário marcado?',
      answer: 'Você pode escolher o dia e horário que forem mais convenientes para deixar seu veículo. Dessa forma, seu carro entra na linha de serviço sem esperas desnecessárias.',
      icon: <CheckCircle2 className="w-4 h-4 text-blue-600" />
    },
    {
      question: 'Quais formas de pagamento são aceitas na oficina?',
      answer: 'Aceitamos dinheiro, transferência e analisamos condições especiais para pagamento à vista.',
      icon: <HelpCircle className="w-4 h-4 text-blue-600" />
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const formattedWhatsapp = whatsapp.replace(/\D/g, '');
  const whatsappUrl = `https://wa.me/55${formattedWhatsapp}?text=${encodeURIComponent(
    'Olá! Vi a página de vocês e gostaria de tirar uma dúvida sobre serviços para o meu veículo.'
  )}`;

  return (
    <div className="bg-white rounded-3xl border border-gray-200/80 shadow-xs overflow-hidden p-6 sm:p-8 lg:p-10">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 pb-6 border-b border-gray-100">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>FAQ Rápido</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
            Perguntas Frequentes
          </h2>
          <p className="text-sm sm:text-base text-gray-600 mt-1">
            Tire suas principais dúvidas de forma rápida antes de trazer seu veículo
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={onOpenEstimate}
            className="px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-semibold transition-all shadow-xs hover:shadow-md cursor-pointer flex items-center gap-1.5"
          >
            <Wrench className="w-4 h-4" />
            <span>Pedir Orçamento</span>
          </button>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-semibold transition-all shadow-xs hover:shadow-md cursor-pointer flex items-center gap-1.5"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Falar no WhatsApp</span>
          </a>
        </div>
      </div>

      {/* Accordion List */}
      <div className="space-y-3">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className={`border rounded-2xl transition-all duration-200 ${
                isOpen
                  ? 'border-blue-200 bg-blue-50/30 shadow-2xs'
                  : 'border-gray-200 hover:border-gray-300 bg-white'
              }`}
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full py-4 px-5 flex items-center justify-between gap-4 text-left cursor-pointer focus:outline-none"
                aria-expanded={isOpen}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                      isOpen ? 'bg-blue-600 text-white' : 'bg-blue-50 text-blue-600'
                    }`}
                  >
                    {isOpen ? <HelpCircle className="w-4 h-4" /> : faq.icon || <HelpCircle className="w-4 h-4" />}
                  </div>
                  <span className="font-bold text-sm sm:text-base text-gray-900">
                    {faq.question}
                  </span>
                </div>

                <div
                  className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-all ${
                    isOpen ? 'bg-blue-100 text-blue-700 rotate-180' : 'text-gray-400 bg-gray-50'
                  }`}
                >
                  <ChevronDown className="w-4 h-4" />
                </div>
              </button>

              {isOpen && (
                <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-gray-600 leading-relaxed pl-16 border-t border-blue-100/60 mt-1">
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Footer Banner */}
      <div className="mt-8 p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-slate-900 to-slate-800 text-white flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-center sm:text-left">
          <p className="text-sm font-bold">Ainda com alguma dúvida sobre o seu veículo?</p>
          <p className="text-xs text-gray-300 mt-0.5">
            Converse diretamente com nosso mecânico especialista pelo WhatsApp e receba um diagnóstico inicial.
          </p>
        </div>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all flex items-center gap-2"
        >
          <MessageCircle className="w-4 h-4" />
          <span>Falar com Especialista</span>
        </a>
      </div>
    </div>
  );
};
