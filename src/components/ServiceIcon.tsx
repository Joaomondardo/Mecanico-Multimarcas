import React from 'react';
import { Disc, Car, Droplet, Wrench, Cpu, Activity, Snowflake, Gauge } from 'lucide-react';

interface ServiceIconProps {
  name: string;
  className?: string;
}

export const ServiceIcon: React.FC<ServiceIconProps> = ({ name, className = "w-6 h-6 text-[#001a33]" }) => {
  const norm = name.toLowerCase();

  if (norm.includes('freio') || norm.includes('disc')) {
    return <Disc className={className} />;
  }
  if (norm.includes('suspensa') || norm.includes('burst') || norm.includes('amortecedor')) {
    return <Car className={className} />;
  }
  if (norm.includes('oleo') || norm.includes('óleo') || norm.includes('oil')) {
    return <Droplet className={className} />;
  }
  if (norm.includes('pneu') || norm.includes('roda') || norm.includes('truck')) {
    return <Gauge className={className} />;
  }
  if (norm.includes('mecanica') || norm.includes('mecânica') || norm.includes('geral') || norm.includes('wrench')) {
    return <Wrench className={className} />;
  }
  if (norm.includes('injecao') || norm.includes('injeção') || norm.includes('cpu') || norm.includes('scanner')) {
    return <Cpu className={className} />;
  }
  if (norm.includes('ar') || norm.includes('condicionado')) {
    return <Snowflake className={className} />;
  }

  return <Activity className={className} />;
};
