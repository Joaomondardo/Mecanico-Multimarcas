import React, { useState } from 'react';
import {
  Wrench,
  CheckCircle2,
  ShieldCheck,
  AlertTriangle,
  Clock,
  Car,
  MessageCircle,
  FileText,
  Sparkles,
  Gauge,
  RotateCcw
} from 'lucide-react';

interface MaintenancePlan {
  km: number;
  timeLabel: string;
  title: string;
  description: string;
  replaceItems: string[];
  inspectItems: string[];
  manualNote: string;
}

interface MileageCheckupSimulatorProps {
  whatsapp: string;
  onOpenEstimate?: () => void;
}

export const MileageCheckupSimulator: React.FC<MileageCheckupSimulatorProps> = ({
  whatsapp,
  onOpenEstimate,
}) => {
  const [selectedKm, setSelectedKm] = useState<number>(40000);
  const [selectedBrand, setSelectedBrand] = useState<string>('Volkswagen / Chevrolet / Fiat');

  const brandsList = [
    'Volkswagen / Chevrolet / Fiat',
    'Toyota / Honda / Nissan',
    'Ford / Hyundai / Jeep',
    'BMW / Mercedes / Audi / Premium'
  ];

  // Planos rigorosamente alinhados aos manuais dos proprietários no Brasil
  const maintenancePlans: Record<number, MaintenancePlan> = {
    10000: {
      km: 10000,
      timeLabel: '1 ano de uso',
      title: 'Revisão Inicial de Garantia e Lubrificação',
      description:
        'Focada na troca dos elementos básicos de filtragem e verificação da segurança ativa segundo o plano de manutenção do fabricante.',
      replaceItems: [
        'Óleo do motor especificado no manual (Sintético ou Semisintético)',
        'Filtro de óleo do motor',
        'Filtro de combustível',
        'Filtro de ar-condicionado (cabine) e higienização'
      ],
      inspectItems: [
        'Diagnóstico eletrônico computadorizado (Scanner OBD2)',
        'Espessura das pastilhas e discos de freio dianteiros',
        'Calibragem e rodízio de pneus com balanceamento',
        'Nível e densidade do fluido de arrefecimento',
        'Inspeção visual da suspensão e coifas'
      ],
      manualNote:
        'No manual do proprietário, a troca de óleo a cada 10.000 km (ou 1 ano) é obrigatória para evitar a formação de borra no motor.'
    },
    20000: {
      km: 20000,
      timeLabel: '2 anos de uso',
      title: 'Revisão Intermediária de Filtragem e Freios',
      description:
        'Além da lubrificação completa, inclui a substituição do elemento filtrante do motor e verificação do sistema de freios.',
      replaceItems: [
        'Óleo do motor e filtro de óleo',
        'Filtro de ar do motor (obrigatório em 20.000 km)',
        'Filtro de combustível e filtro de cabine',
        'Anel de vedação do bujão do cárter'
      ],
      inspectItems: [
        'Teste do ponto de ebulição do fluido de freio (DOT 4 / DOT 5.1)',
        'Verificação de folgas na direção e terminais',
        'Inspeção do sistema de escape e catalisador',
        'Estado das velas de ignição e cabos',
        'Alinhamento de direção 3D e balanceamento'
      ],
      manualNote:
        'A substituição do filtro de ar aos 20.000 km previne o aumento do consumo de combustível e perda de potência.'
    },
    30000: {
      km: 30000,
      timeLabel: '3 anos de uso',
      title: 'Revisão de Sistema Térmico e Ignição',
      description:
        'Momento crítico para verificar a eficiência térmica do motor e prevenir falhas de partida em motores flex.',
      replaceItems: [
        'Óleo do motor e filtro de óleo',
        'Filtro de combustível e cabine',
        'Limpeza ou substituição de velas (conforme especificação standard/iridium)'
      ],
      inspectItems: [
        'Sistema de arrefecimento (teste de pressão de tampa e radiador)',
        'Bateria e sistema de carga do alternador',
        'Tensão da correia de acessórios (alternador/ar-condicionado)',
        'Verificação dos amortecedores e batentes dianteiros/traseiros',
        'Scanner computadorizado e reset de inspeção no painel'
      ],
      manualNote:
        'Montadoras recomendam inspecionar o sistema de ignição aos 30.000 km para não sobrecarregar as bobinas.'
    },
    40000: {
      km: 40000,
      timeLabel: '4 anos de uso',
      title: 'Revisão Preventiva Maior (Freio, Ignição e Injeção)',
      description:
        'Uma das revisões mais importantes do manual do proprietário. Envolve itens de desgaste programado para evitar falhas severas.',
      replaceItems: [
        'Óleo do motor, filtro de óleo, filtro de ar e filtro de combustível',
        'Fluido de freio (substituição obrigatória a cada 2 anos ou 40.000 km)',
        'Velas de ignição (motores flex convencionais)',
        'Limpeza técnica do corpo de borboleta (TBI)'
      ],
      inspectItems: [
        'Correias de acessórios e tensores',
        'Fluido de direção hidráulica ou assistência elétrica',
        'Discos de freio, pastilhas e lonas traseiras',
        'Amortecedores, bandejas, buchas e pivôs de suspensão',
        'Sistema de arrefecimento e teste de estanqueidade'
      ],
      manualNote:
        'O fluido de freio é higroscópico (absorve umidade do ar); sua substituição aos 40.000 km ou 2 anos é vital para a eficiência da frenagem.'
    },
    60000: {
      km: 60000,
      timeLabel: '5 a 6 anos de uso',
      title: 'Revisão de Correia Dentada e Arrefecimento',
      description:
        'Revisão chave para prevenir quebras mecânicas graves. Foco em sincronismo do motor e substituição de fluidos de longo prazo.',
      replaceItems: [
        'Kit Correia Dentada e Tensor (para motores com correia) ou inspeção da corrente',
        'Substituição completa do Fluido de Arrefecimento com aditivo orgânico',
        'Óleo do motor e kit completo de filtros (óleo, ar, combustível, cabine)',
        'Velas de ignição e verificação de bobinas'
      ],
      inspectItems: [
        'Bomba d’água (verificação de vazamentos ou folga no rolamento)',
        'Amortecedores, coxins, batentes e bieletas da suspensão',
        'Verificação do nível/estado do óleo de câmbio (manual ou automático)',
        'Embreagem e atuador hidráulico',
        'Scanner diagnóstico completo de módulos'
      ],
      manualNote:
        'O rompimento da correia dentada causa empenamento de válvulas e danos severos ao cabeçote do motor. Siga rigorosamente os 60.000 km ou prazo em anos.'
    },
    80000: {
      km: 80000,
      timeLabel: '7 a 8 anos de uso',
      title: 'Revisão Avançada de Durabilidade e Suspensão',
      description:
        'Inspeção profunda de componentes de desgaste estrutural para devolver o conforto, silêncio e segurança originais do veículo.',
      replaceItems: [
        'Óleo do motor e todos os filtros (óleo, ar, combustível e cabine)',
        'Fluido de freio (segundo ciclo de substituição)',
        'Substituição do kit de velas de ignição',
        'Troca preventiva da correia de acessórios (Poly-V)'
      ],
      inspectItems: [
        'Conjunto de amortecedores e molas (vida útil média indicada pelos fabricantes)',
        'Discos de freio dianteiros/traseiros (medição de espessura mínima)',
        'Buchas da barra estabilizadora e bandejas',
        'Sistema de exaustão e suportes do motor/câmbio',
        'Diagnóstico da sonda lambda e catalisador'
      ],
      manualNote:
        'Aos 80.000 km, a revisão preventiva da suspensão e freios garante estabilidade em curvas e frenagens seguras na estrada.'
    },
    100000: {
      km: 100000,
      timeLabel: '10 anos de uso',
      title: 'Revisão Marco 100 Mil Km (Revitalização Completa)',
      description:
        'Check-up integral para veículos que atingiram 100.000 km, assegurando confiabilidade mecânica por mais 100 mil quilômetros.',
      replaceItems: [
        'Óleo do motor de alta performance e todos os filtros',
        'Fluido de arrefecimento e limpeza do sistema',
        'Kit de correia dentada / correias auxiliares',
        'Verificação/Troca do óleo de câmbio automático (conforme especificação da marca)'
      ],
      inspectItems: [
        'Bomba de combustível e regulador de pressão',
        'Bicos injetores (teste de vazão e estanqueidade no ultrassom)',
        'Caixa de direção e semieixos / juntas homocinéticas',
        'Compressão dos cilindros do motor e vedação de válvulas',
        'Check-up de 40 pontos de segurança veicular'
      ],
      manualNote:
        'Veículos bem cuidados aos 100.000 km mantêm alto valor de revenda e confiabilidade idêntica a de um seminovo.'
    }
  };

  const currentPlan = maintenancePlans[selectedKm] || maintenancePlans[40000];

  const formattedWhatsapp = whatsapp.replace(/\D/g, '');
  const whatsappUrl = `https://wa.me/${formattedWhatsapp}?text=${encodeURIComponent(
    `Olá! Fiz a simulação no site para a revisão de ${selectedKm.toLocaleString(
      'pt-BR'
    )} km (${selectedBrand}). Gostaria de um orçamento para o meu veículo.`
  )}`;

  return (
    <div className="bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800 rounded-3xl border border-slate-700/80 shadow-2xl overflow-hidden p-6 sm:p-8 lg:p-10 text-white font-sans">
      {/* Header do Simulador */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-8 pb-8 border-b border-slate-700/80">
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/30 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Gauge className="w-4 h-4" />
            <span>Guia Oficial de Manutenção pelo Manual</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white">
            Simulador Rápido de Revisão por Quilometragem
          </h2>
          <p className="text-sm sm:text-base text-slate-300 mt-2 max-w-2xl leading-relaxed">
            Selecione a quilometragem atual do seu veículo e veja exatamente os itens de{' '}
            <span className="text-blue-400 font-semibold">substituição obrigatória</span> e{' '}
            <span className="text-emerald-400 font-semibold">inspeção preventiva</span> recomendados pelos manuais das montadoras.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-lg hover:shadow-emerald-600/30 transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <MessageCircle className="w-5 h-5" />
            <span>Cotar Esta Revisão via WhatsApp</span>
          </a>
        </div>
      </div>

      {/* Seletor de Categoria/Marca */}
      <div className="mb-6">
        <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
          1. Selecione a linha do seu veículo:
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
          {brandsList.map((brand) => {
            const isSelected = selectedBrand === brand;
            return (
              <button
                key={brand}
                onClick={() => setSelectedBrand(brand)}
                className={`py-3 px-4 rounded-xl text-left text-xs sm:text-sm font-semibold transition-all cursor-pointer border flex items-center justify-between ${
                  isSelected
                    ? 'bg-blue-600 border-blue-500 text-white shadow-md shadow-blue-600/20'
                    : 'bg-slate-800/80 border-slate-700/80 text-slate-300 hover:bg-slate-800 hover:border-slate-600'
                }`}
              >
                <span className="flex items-center gap-2 truncate">
                  <Car className="w-4 h-4 shrink-0" />
                  <span className="truncate">{brand}</span>
                </span>
                {isSelected && <CheckCircle2 className="w-4 h-4 text-white shrink-0 ml-1" />}
              </button>
            );
          })}
        </div>
      </div>

      {/* Seletor de Quilometragem (Abas em Botões) */}
      <div className="mb-8">
        <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
          2. Escolha a quilometragem ou tempo de uso do carro:
        </label>
        <div className="flex flex-wrap gap-2">
          {[10000, 20000, 30000, 40000, 60000, 80000, 100000].map((kmValue) => {
            const isSelected = selectedKm === kmValue;
            return (
              <button
                key={kmValue}
                onClick={() => setSelectedKm(kmValue)}
                className={`px-4 sm:px-5 py-2.5 rounded-xl font-extrabold text-xs sm:text-sm transition-all cursor-pointer border flex items-center gap-2 ${
                  isSelected
                    ? 'bg-gradient-to-r from-blue-600 to-blue-500 border-blue-400 text-white shadow-lg shadow-blue-500/30 scale-105'
                    : 'bg-slate-800/90 border-slate-700 text-slate-300 hover:bg-slate-800 hover:border-slate-600'
                }`}
              >
                <span>{kmValue.toLocaleString('pt-BR')} km</span>
                <span className="text-[10px] opacity-80 font-normal hidden sm:inline">
                  ({maintenancePlans[kmValue]?.timeLabel})
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Cartão de Exibição do Plano Selecionado */}
      <div className="bg-slate-800/90 rounded-2xl border border-slate-700/80 p-6 sm:p-8 shadow-inner">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-6 border-b border-slate-700/80">
          <div>
            <div className="flex items-center gap-2 text-blue-400 text-xs font-bold uppercase tracking-wider mb-1">
              <Clock className="w-4 h-4" />
              <span>
                Revisão de {currentPlan.km.toLocaleString('pt-BR')} km • {currentPlan.timeLabel}
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-white">
              {currentPlan.title}
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-3xl">
              {currentPlan.description}
            </p>
          </div>

          <div className="shrink-0 bg-slate-900/80 border border-slate-700 rounded-xl px-4 py-3 text-center">
            <span className="block text-[11px] uppercase tracking-wider text-slate-400 font-bold">
              Garantia de Fábrica
            </span>
            <span className="text-sm font-extrabold text-emerald-400 flex items-center justify-center gap-1 mt-0.5">
              <ShieldCheck className="w-4 h-4" />
              100% Compatível
            </span>
          </div>
        </div>

        {/* Grid em 2 Colunas: Itens para Trocar vs Itens para Inspecionar */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-6">
          {/* Coluna 1: Substituição Recomendada */}
          <div className="bg-slate-900/60 rounded-xl p-5 border border-blue-500/30">
            <div className="flex items-center gap-2 mb-4 pb-3 border-b border-slate-800">
              <div className="w-7 h-7 rounded-lg bg-blue-600/20 text-blue-400 flex items-center justify-center font-bold">
                <RotateCcw className="w-4 h-4" />
              </div>
              <div>
                <h4 className="font-extrabold text-sm text-white">
                  Substituição Obrigatória / Recomendada
                </h4>
                <p className="text-[11px] text-slate-400">
                  Itens de troca programada para este quilometragem
                </p>
              </div>
            </div>

            <ul className="space-y-2.5">
              {currentPlan.replaceItems.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200"
                >
                  <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna 2: Inspeção Técnica de Segurança */}
          <div className="bg-slate-900/60 rounded-xl p-5 border border-emerald-500/30">
            <div className="flex items-center gap-2 mb-4 pb-3 border-b border-slate-800">
              <div className="w-7 h-7 rounded-lg bg-emerald-600/20 text-emerald-400 flex items-center justify-center font-bold">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div>
                <h4 className="font-extrabold text-sm text-white">
                  Inspeção Técnica e Scanner 40 Pontos
                </h4>
                <p className="text-[11px] text-slate-400">
                  Check-up preventivo de segurança ativa e passiva
                </p>
              </div>
            </div>

            <ul className="space-y-2.5">
              {currentPlan.inspectItems.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Nota Técnica do Manual */}
        <div className="p-4 rounded-xl bg-blue-950/40 border border-blue-500/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
            <div className="text-xs sm:text-sm text-slate-300">
              <strong className="text-white block sm:inline">
                Dica Técnica do Manual:
              </strong>{' '}
              {currentPlan.manualNote}
            </div>
          </div>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-4 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs shadow-md transition-all flex items-center gap-1.5 whitespace-nowrap"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Pedir Orçamento ({currentPlan.km.toLocaleString('pt-BR')} km)</span>
          </a>
        </div>
      </div>
    </div>
  );
};
