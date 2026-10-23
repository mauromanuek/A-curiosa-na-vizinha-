import React from 'react';
import { BRAND_CONFIG } from '../data/config';
import { Instagram, Youtube, MessageCircle, MapPin, Phone, Mail, Heart } from 'lucide-react';

interface FooterProps {
  onOpenOrder: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenOrder }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contacto" className="bg-[#110E0D] text-white pt-16 pb-12 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row matching the reference layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center pb-12 border-b border-neutral-800">
          
          {/* Left: Brand & Chef Hat Logo */}
          <div className="md:col-span-4 flex items-center gap-3">
            <svg
              className="w-10 h-10 text-white shrink-0"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M6 13.87A4 4 0 0 1 7.41 6a5.11 5.11 0 0 1 1.05-1.54 5 5 0 0 1 7.08 0A5.11 5.11 0 0 1 16.59 6 4 4 0 0 1 18 13.87V21H6Z" />
              <line x1="6" y1="17" x2="18" y2="17" />
            </svg>
            <div>
              <span className="font-script text-3xl font-bold tracking-tight text-white block -mb-1">
                A Curiosa
              </span>
              <span className="text-[11px] uppercase font-bold tracking-[0.25em] text-neutral-300">
                na Cozinha
              </span>
            </div>
          </div>

          {/* Center: Social Media Links */}
          <div className="md:col-span-4 flex items-center justify-start md:justify-center gap-4">
            {/* Instagram */}
            <a
              href={BRAND_CONFIG.socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-neutral-800 hover:bg-[#D81B60] text-neutral-300 hover:text-white flex items-center justify-center transition-all duration-300 hover:scale-110"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>

            {/* TikTok */}
            <a
              href={BRAND_CONFIG.socialLinks.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-neutral-800 hover:bg-[#D81B60] text-neutral-300 hover:text-white flex items-center justify-center transition-all duration-300 hover:scale-110"
              aria-label="TikTok"
            >
              {/* Custom TikTok Icon */}
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
              </svg>
            </a>

            {/* YouTube */}
            <a
              href={BRAND_CONFIG.socialLinks.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-neutral-800 hover:bg-[#D81B60] text-neutral-300 hover:text-white flex items-center justify-center transition-all duration-300 hover:scale-110"
              aria-label="YouTube"
            >
              <Youtube className="w-5 h-5" />
            </a>

            {/* WhatsApp */}
            <a
              href={BRAND_CONFIG.socialLinks.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-neutral-800 hover:bg-emerald-600 text-neutral-300 hover:text-white flex items-center justify-center transition-all duration-300 hover:scale-110"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-5 h-5" />
            </a>
          </div>

          {/* Right: Slogan matching the reference design */}
          <div className="md:col-span-4 flex items-center justify-start md:justify-end">
            <div className="text-right">
              <span className="font-script text-2xl sm:text-3xl text-pink-300 font-bold block">
                Cozinhar é
              </span>
              <span className="font-script text-2xl sm:text-3xl text-white font-bold block -mt-1">
                partilhar amor! ♡
              </span>
            </div>
          </div>

        </div>

        {/* Secondary Info & Links */}
        <div className="py-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-xs text-neutral-400">
          <div>
            <h4 className="text-white font-semibold text-sm mb-2">A Curiosa na Cozinha</h4>
            <p className="leading-relaxed">
              Marca culinária por Indira Rocha Zinga. Autênticos sabores de Angola, encomendas para almoços especiais e buffets para eventos.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm mb-2">Localização & Atendimento</h4>
            <div className="space-y-1.5">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#D81B60]" />
                <span>{BRAND_CONFIG.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#D81B60]" />
                <span>{BRAND_CONFIG.whatsappFormatted}</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm mb-2">Navegação Rápida</h4>
            <div className="flex flex-col space-y-1.5">
              <a href="#hero" className="hover:text-white transition-colors">Início</a>
              <a href="#sobre" className="hover:text-white transition-colors">Sobre a Indira</a>
              <a href="#pratos" className="hover:text-white transition-colors">Cardápio de Pratos</a>
              <a href="#servicos" className="hover:text-white transition-colors">Serviços & Buffet</a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm mb-2">Encomendas</h4>
            <p className="mb-3">
              Pratos preparados sob medida com reserva antecipada.
            </p>
            <button
              onClick={onOpenOrder}
              className="bg-[#D81B60] hover:bg-[#C2185B] text-white font-semibold px-4 py-2 rounded-xl text-xs transition-colors cursor-pointer"
            >
              Fazer Pedido
            </button>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-6 border-t border-neutral-800 text-center text-xs text-neutral-400 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>
            © {currentYear} <strong>A Curiosa na Cozinha</strong> — Indira Rocha Zinga. Todos os direitos reservados.
          </p>
          <p className="text-[11px] text-neutral-400">
            Luanda, Angola
          </p>
        </div>

      </div>
    </footer>
  );
};
