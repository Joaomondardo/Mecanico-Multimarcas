import React from 'react';
import { Star, Quote, CheckCircle, MessageCircle, ThumbsUp, ShieldCheck } from 'lucide-react';

interface Testimonial {
  name: string;
  car: string;
  rating: number;
  date: string;
  comment: string;
  highlight: string;
  avatarBg: string;
}

interface TestimonialsSectionProps {
  whatsapp: string;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ whatsapp }) => {
  const testimonials: Testimonial[] = [
    {
      name: 'Dr. Roberto Mendes',
      car: 'Volkswagen Jetta TSI 2021',
      rating: 5,
      date: 'Há 2 dias',
      comment:
        'Levei meu carro após acender a luz da injeção. Em menos de 1 hora passaram o scanner oficial, identificaram a falha no combustível e enviaram o orçamento pelo WhatsApp. Serviço transparente e muito rápido.',
      highlight: 'Diagnóstico por Scanner Preciso',
      avatarBg: 'bg-blue-600'
    },
    {
      name: 'Camila Ferreira Ramos',
      car: 'Chevrolet Tracker Premier 2023',
      rating: 5,
      date: 'Há 1 semana',
      comment:
        'A melhor oficina da região! Nunca tentaram empurrar serviços desnecessários. Fiz a revisão dos 40.000 km com troca de óleo e fluido de freio rigorosamente conforme o manual. Recomendo de olhos fechados.',
      highlight: 'Honestidade e Preço Justo',
      avatarBg: 'bg-emerald-600'
    },
    {
      name: 'Carlos Eduardo Souza',
      car: 'Toyota Corolla Altis 2020',
      rating: 5,
      date: 'Há 2 semanas',
      comment:
        'Fiz a troca de amortecedores e alinhamento 3D. O carro saiu parecendo zero quilômetro! Além disso, parcelaram o serviço e cumpriram o prazo prometido de entrega.',
      highlight: 'Garantia e Qualidade Técnica',
      avatarBg: 'bg-indigo-600'
    },
    {
      name: 'Juliana Siqueira Prado',
      car: 'Fiat Pulse Impetus 2022',
      rating: 5,
      date: 'Há 3 semanas',
      comment:
        'Atendimento impecável desde o WhatsApp. Mandaram fotos e vídeos das peças desgastadas antes de trocar. É muito bom ter uma oficina de confiança onde explicam tudo direito.',
      highlight: 'Atendimento pelo WhatsApp',
      avatarBg: 'bg-purple-600'
    },
    {
      name: 'Marcos Vinicius Lima',
      car: 'Honda Civic G10 2019',
      rating: 5,
      date: 'Há 1 mês',
      comment:
        'Fiz a revisão preventiva completa com troca de velas iridium e fluido de arrefecimento. Serviço executado por mecânicos que realmente entendem do assunto e respeitam o cliente.',
      highlight: 'Especialistas em Revisão',
      avatarBg: 'bg-slate-700'
    },
    {
      name: 'Fernando Guimarães',
      car: 'BMW 320i M Sport 2020',
      rating: 5,
      date: 'Há 1 mês',
      comment:
        'Tinha receio de levar fora da concessionária, mas a oficina tem scanner de ponta e equipamentos modernos. Fizeram o reset da revisão perfeitamente e cobrando metade do valor da autorizada.',
      highlight: 'Equipamentos de Ponta',
      avatarBg: 'bg-blue-800'
    }
  ];

  const formattedWhatsapp = whatsapp.replace(/\D/g, '');
  const whatsappUrl = `https://wa.me/${formattedWhatsapp}?text=${encodeURIComponent(
    'Olá! Vi as avaliações da oficina no site e gostaria de agendar uma avaliação para o meu veículo.'
  )}`;

  return (
    <div className="bg-white rounded-3xl border border-gray-200/80 shadow-xs overflow-hidden p-6 sm:p-8 lg:p-10 font-sans">
      {/* Header com Nota Média */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10 pb-8 border-b border-gray-100">
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200/60 text-amber-800 text-xs font-semibold uppercase tracking-wider mb-3">
            <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
            <span>Avaliações Reais de Clientes</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 tracking-tight">
            Quem confia o carro à nossa oficina aprova
          </h2>
          <p className="text-sm sm:text-base text-gray-600 mt-2 max-w-2xl">
            Confira depoimentos de motoristas que já fizeram revisões preventivas, diagnósticos e manutenções com nossos especialistas.
          </p>
        </div>

        {/* Resumo de Nota Google */}
        <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-4 sm:p-5 flex items-center gap-4 shrink-0">
          <div className="text-center sm:text-left">
            <div className="flex items-center gap-1 text-2xl sm:text-3xl font-extrabold text-gray-900">
              <span>4.9</span>
              <span className="text-sm font-semibold text-gray-400">/ 5.0</span>
            </div>
            <div className="flex items-center gap-0.5 mt-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <p className="text-[11px] text-gray-500 font-medium mt-1">
              +450 avaliações verificadas
            </p>
          </div>

          <div className="h-10 w-px bg-gray-200 hidden sm:block" />

          <div className="hidden sm:flex flex-col gap-1">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full">
              <CheckCircle className="w-3.5 h-3.5" />
              100% Orçamento Sem Surpresa
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-700 bg-blue-50 px-2.5 py-1 rounded-full">
              <ShieldCheck className="w-3.5 h-3.5" />
              Garantia em Serviços
            </span>
          </div>
        </div>
      </div>

      {/* Grid de Depoimentos */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="bg-slate-50/70 hover:bg-white rounded-2xl p-6 border border-gray-200/80 hover:border-blue-200 transition-all duration-200 shadow-2xs hover:shadow-lg flex flex-col justify-between"
          >
            <div>
              {/* Topo do Card: Estrelas e Destaque */}
              <div className="flex items-center justify-between gap-2 mb-4">
                <div className="flex items-center gap-0.5">
                  {[...Array(t.rating)].map((_, idx) => (
                    <Star key={idx} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-blue-50 text-blue-700 truncate max-w-[160px]">
                  {t.highlight}
                </span>
              </div>

              {/* Comentário */}
              <p className="text-xs sm:text-sm text-gray-700 leading-relaxed mb-6 italic">
                "{t.comment}"
              </p>
            </div>

            {/* Autor do Depoimento */}
            <div className="flex items-center gap-3 pt-4 border-t border-gray-200/60">
              <div
                className={`w-10 h-10 rounded-full ${t.avatarBg} text-white font-extrabold text-sm flex items-center justify-center shrink-0 shadow-xs`}
              >
                {t.name
                  .split(' ')
                  .slice(0, 2)
                  .map((n) => n[0])
                  .join('')}
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-1">
                  <span className="font-extrabold text-xs sm:text-sm text-gray-900 truncate">
                    {t.name}
                  </span>
                  <CheckCircle className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                </div>
                <p className="text-xs text-gray-500 truncate">{t.car}</p>
              </div>
              <span className="text-[11px] text-gray-400 shrink-0">{t.date}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Footer Banner CTA */}
      <div className="mt-10 p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-blue-900 via-blue-800 to-slate-900 text-white flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-center sm:text-left">
          <p className="text-sm sm:text-base font-extrabold">
            Faça como centenas de motoristas da região: confie no nosso diagnóstico técnico.
          </p>
          <p className="text-xs text-blue-200 mt-1">
            Agende pelo WhatsApp, receba o orçamento detalhado sem compromisso e garanta seu carro em dia.
          </p>
        </div>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all flex items-center gap-2 cursor-pointer"
        >
          <MessageCircle className="w-4 h-4" />
          <span>Agendar Minha Revisão no WhatsApp</span>
        </a>
      </div>
    </div>
  );
};
