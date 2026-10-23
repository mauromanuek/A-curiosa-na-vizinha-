import React from 'react';
import { motion } from 'motion/react';
import { Reveal } from './Reveal';

interface ServicesProps {
  onSelectService: (serviceId: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const services = [
    {
      id: 'encomendas',
      title: 'Encomendas',
      description: 'Pratos prontos e personalizados.',
      actionLabel: 'Ver detalhes & prazos',
      icon: (
        <svg className="w-10 h-10 text-[#D81B60]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 13.87A4 4 0 0 1 7.41 6a5.11 5.11 0 0 1 1.05-1.54 5 5 0 0 1 7.08 0A5.11 5.11 0 0 1 16.59 6 4 4 0 0 1 18 13.87V21H6Z" />
          <line x1="6" y1="17" x2="18" y2="17" />
        </svg>
      )
    },
    {
      id: 'buffet',
      title: 'Buffet & Eventos',
      description: 'Para todas as ocasiões especiais.',
      actionLabel: 'Ver opções de menu',
      icon: (
        <svg className="w-10 h-10 text-[#D81B60]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 4v2" />
          <path d="M4 14a8 8 0 0 1 16 0H4z" />
          <path d="M2 18h20" />
        </svg>
      )
    },
    {
      id: 'receitas',
      title: 'Receitas',
      description: 'Dicas e sabores da nossa cozinha.',
      actionLabel: 'Explorar conteúdos',
      icon: (
        <svg className="w-10 h-10 text-[#D81B60]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 2v20" />
          <path d="M6 2v7a3 3 0 0 0 6 0V2" />
          <path d="M9 12v10" />
          <path d="M18 2a3 3 0 0 1 3 3v5h-6" />
        </svg>
      )
    },
    {
      id: 'parcerias',
      title: 'Parcerias',
      description: 'Vamos fazer algo juntos?',
      actionLabel: 'Propor parceria',
      icon: (
        <svg className="w-10 h-10 text-[#D81B60]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="m11 17 2 2a1 1 0 0 0 1.4 0l4.3-4.3a1 1 0 0 0 0-1.4l-3-3a1 1 0 0 0-1.4 0l-1.3 1.3" />
          <path d="m3 11 5.3-5.3a1 1 0 0 1 1.4 0l3 3a1 1 0 0 1 0 1.4L11 11.8" />
          <path d="m7 7 4 4" />
          <path d="m2 18 3-3" />
          <path d="m18 10 3-3" />
        </svg>
      )
    }
  ];

  return (
    <section id="servicos" className="py-20 lg:py-24 bg-[#FFF5F7] border-y border-pink-100/60 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section title com Reveal */}
        <div className="text-center max-w-xl mx-auto mb-14">
          <Reveal delay={0.1}>
            <span className="text-[#D81B60] text-xs font-bold tracking-widest uppercase block mb-1">
              O que fazemos
            </span>
          </Reveal>
          <Reveal delay={0.2}>
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-neutral-900">
              Nossos Serviços
            </h2>
          </Reveal>
          <Reveal delay={0.3}>
            <p className="text-neutral-600 text-sm sm:text-base mt-2">
              Clique em cada serviço para conhecer detalhes, cardápios e possibilidades
            </p>
          </Reveal>
        </div>

        {/* 4 Colunas com Entrada Escalonada */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4 divide-y sm:divide-y-0 lg:divide-x divide-pink-200/60">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: [0.21, 0.47, 0.32, 0.98]
              }}
              className="pt-6 sm:pt-0 lg:px-6 flex flex-col items-center text-center group cursor-pointer hover:-translate-y-1 transition-all duration-200"
              onClick={() => onSelectService(service.id)}
            >
              {/* Minimal Icon */}
              <div className="w-18 h-18 rounded-2xl bg-white shadow-xs group-hover:shadow-md border border-pink-100 flex items-center justify-center transition-all duration-300 group-hover:scale-110 mb-4">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg sm:text-xl font-bold text-neutral-900 group-hover:text-[#D81B60] transition-colors font-display">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-neutral-600 mt-2 max-w-xs leading-relaxed">
                {service.description}
              </p>

              {/* Action trigger button */}
              <button
                type="button"
                className="mt-4 text-xs font-bold text-[#D81B60] group-hover:underline flex items-center gap-1.5 cursor-pointer"
              >
                <span>{service.actionLabel}</span>
                <span>→</span>
              </button>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
