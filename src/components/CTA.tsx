import React from 'react';
import { MessageCircle, ShoppingBag } from 'lucide-react';
import { getGeneralWhatsAppLink } from '../utils/whatsapp';
import { BRAND_CONFIG } from '../data/config';
import { Reveal } from './Reveal';
import { motion } from 'motion/react';

interface CTAProps {
  onOpenOrder: () => void;
}

export const CTA: React.FC<CTAProps> = ({ onOpenOrder }) => {
  const whatsappUrl = getGeneralWhatsAppLink(
    "Olá, Indira! Vim pelo website da A Curiosa na Cozinha e gostaria de informações sobre pratos e encomendas."
  );

  return (
    <section className="relative py-24 sm:py-28 overflow-hidden bg-[#161211] text-white">
      {/* Background Image with Dark Vignette */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/images/cta-bg.jpg"
          alt="Ingredientes frescos e pratos angolanos"
          className="w-full h-full object-cover object-center scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/70" />
        <div className="absolute inset-0 bg-[#D81B60]/15 mix-blend-multiply" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        
        {/* Calligraphy Script Title com Transição */}
        <Reveal delay={0.1}>
          <h2 className="font-script text-5xl sm:text-6xl md:text-7xl text-white font-bold tracking-wide drop-shadow-md">
            Pronto para saborear?
          </h2>
        </Reveal>

        {/* Short Text com Transição */}
        <Reveal delay={0.25}>
          <p className="text-neutral-200 text-base sm:text-xl font-light max-w-2xl mx-auto leading-relaxed">
            Faça a sua encomenda e descubra os sabores da <span className="text-pink-300 font-semibold">A Curiosa na Cozinha</span>. Receitas preparadas com afeto para tornar os seus momentos inesquecíveis.
          </p>
        </Reveal>

        {/* Action Buttons com Transição */}
        <Reveal delay={0.4}>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenOrder}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#D81B60] hover:bg-[#C2185B] text-white text-base font-bold px-8 py-4 rounded-full shadow-xl shadow-[#D81B60]/40 transition-all duration-300 hover:scale-102 hover:shadow-2xl cursor-pointer"
            >
              <ShoppingBag className="w-5 h-5" />
              <span>Fazer uma encomenda</span>
            </button>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-emerald-600 hover:bg-emerald-700 text-white text-base font-semibold px-7 py-4 rounded-full shadow-lg transition-all duration-300 hover:scale-102 cursor-pointer"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Falar no WhatsApp</span>
            </a>
          </div>
        </Reveal>

        {/* Contact info note */}
        <Reveal delay={0.5}>
          <p className="text-xs sm:text-sm text-neutral-400 pt-2">
            Atendimento personalizado em Luanda • WhatsApp: <strong className="text-neutral-200">{BRAND_CONFIG.whatsappFormatted}</strong>
          </p>
        </Reveal>

      </div>
    </section>
  );
};
