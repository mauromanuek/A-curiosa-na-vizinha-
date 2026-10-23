import React, { useState, useEffect } from 'react';
import { X, MessageCircle, Calendar, Users, MapPin, Sparkles, CheckCircle2, ArrowRight, Video, Instagram, Briefcase, ChefHat } from 'lucide-react';
import { BRAND_CONFIG } from '../data/config';

export interface ServiceDetail {
  id: 'encomendas' | 'buffet' | 'receitas' | 'parcerias';
  title: string;
  subtitle: string;
  badge: string;
  description: string;
  highlights: string[];
  featuresTitle: string;
  features: { label: string; desc: string }[];
  primaryActionLabel: string;
  type: 'order' | 'buffet_form' | 'content_links' | 'partnership_contact';
}

export const SERVICES_DATA: Record<string, ServiceDetail> = {
  encomendas: {
    id: 'encomendas',
    title: 'Encomendas de Pratos Prontos',
    subtitle: 'Sabor autêntico na sua mesa para momentos especiais',
    badge: 'Almoços & Jantares em Luanda',
    description: 'Preparação artesanal de pratos típicos angolanos e receitas autorais da Indira Rocha Zinga. Cada pedido é feito sob medida com ingredientes frescos adquiridos no próprio dia, para garantir o sabor caseiro e a textura perfeita.',
    highlights: [
      'Encomendas aceitas com antecedência de 24h a 48h',
      'Embalagens térmicas reforçadas que mantêm o prato quente e seguro',
      'Doses para casais, famílias (4 a 6 pessoas) ou grandes grupos',
      'Entrega em Luanda ou levantamento combinado'
    ],
    featuresTitle: 'Como funciona a sua encomenda:',
    features: [
      { label: '1. Escolha o Prato', desc: 'Selecione no cardápio seu prato favorito (Mufete, Calulu, Frango especial, etc.).' },
      { label: '2. Agende a Data', desc: 'Informe o dia e horário que deseja receber a sua refeição quentinha.' },
      { label: '3. Envio pelo WhatsApp', desc: 'Finalize o pedido diretamente com a Indira para confirmação.' }
    ],
    primaryActionLabel: 'Escolher Prato & Encomendar',
    type: 'order'
  },
  buffet: {
    id: 'buffet',
    title: 'Buffet & Catering para Eventos',
    subtitle: 'Soluções gastronómicas completas para ocasiões inesquecíveis',
    badge: 'Casamentos • Aniversários • Corporativo',
    description: 'Transforme a sua festa ou celebração corporativa numa verdadeira experiência gastronómica. Oferecemos serviços de buffet com pratos quentes tradicionais, mesas temáticas angolanas, finger foods e estações ao vivo.',
    highlights: [
      'Atendimento para grupos de 15 a mais de 150 convidados',
      'Montagem de rechauds térmicos profissionais e loiça elegante',
      'Equipa de serviço e empratamento disponível',
      'Menus personalizados conforme o orçamento e preferências dos noivos/anfitriões'
    ],
    featuresTitle: 'Opções de Cardápio para Eventos:',
    features: [
      { label: 'Mesa de Boas-Vindas', desc: 'Salgadinhos finos, caldinhos tradicionais e petiscos angolanos.' },
      { label: 'Pratos Principais', desc: 'Mufete de peixe, Arroz de Marisco, Calulu rico e carnes nobres grelhadas.' },
      { label: 'Acompanhamentos & Doces', desc: 'Feijão de óleo de palma, funge, farofa crocante e sobremesas da casa.' }
    ],
    primaryActionLabel: 'Solicitar Orçamento de Buffet',
    type: 'buffet_form'
  },
  receitas: {
    id: 'receitas',
    title: 'Receitas & Conteúdo Culinário',
    subtitle: 'Aprenda segredos, técnicas e o afeto da cozinha angolana',
    badge: 'Vídeos • Dicas • Workshops',
    description: 'A Indira Rocha Zinga partilha diariamente nos seus canais dicas práticas, receitas fáceis e técnicas ancestrais que descomplicam a culinária para quem ama cozinhar.',
    highlights: [
      'Vídeos tutoriais rápidos no Instagram e TikTok',
      'Dicas secretas de marinadas, escolha de peixes e óleos de palma artesanais',
      'Workshops culinários práticos para iniciantes e apreciadores',
      'Aulas particulares gastronómicas sob agendamento'
    ],
    featuresTitle: 'Onde acompanhar:',
    features: [
      { label: 'Vídeos no Website', desc: 'Assista a vídeos de bastidores e preparações na seção de Galeria.' },
      { label: 'Redes Sociais', desc: 'Receitas passo a passo publicadas semanalmente no Instagram e TikTok.' },
      { label: 'Workshops', desc: 'Aulas práticas para grupos e consultorias gastronómicas individuais.' }
    ],
    primaryActionLabel: 'Ver Vídeos da Indira',
    type: 'content_links'
  },
  parcerias: {
    id: 'parcerias',
    title: 'Parcerias & Colaborações Comerciais',
    subtitle: 'Conecte a sua marca à paixão pela gastronomia autêntica',
    badge: 'Marcas • Empresas • Restauração',
    description: 'Colaborações estratégicas entre a criadora de conteúdo Indira Rocha Zinga e marcas do setor alimentar, bebidas, utensílios de cozinha, eletrodomésticos e eventos.',
    highlights: [
      'Ativação de produtos com receitas exclusivas e vídeos dedicados',
      'Consultoria para cardápios e reestruturação de pratos em restaurantes',
      'Presença VIP em feiras gastronómicas, inaugurações e lançamentos',
      'Campanhas digitais no Instagram, TikTok e YouTube'
    ],
    featuresTitle: 'Formatos de Parceria:',
    features: [
      { label: 'Publieditoriais', desc: 'Vídeos de receitas autênticas destacando o seu produto ou ingrediente.' },
      { label: 'Consultoria de Menu', desc: 'Criação de pratos com alma angolana para restaurantes e bistrôs.' },
      { label: 'Eventos & Workshops', desc: 'Apresentações culinárias ao vivo para clientes e convidados da sua empresa.' }
    ],
    primaryActionLabel: 'Conversar sobre Parceria',
    type: 'partnership_contact'
  }
};

interface ServiceModalProps {
  serviceId: string | null;
  onClose: () => void;
  onOpenDishOrder: () => void;
}

export const ServiceModal: React.FC<ServiceModalProps> = ({ serviceId, onClose, onOpenDishOrder }) => {
  // Buffet Form State
  const [eventType, setEventType] = useState('Almoço de Família / Aniversário');
  const [guestCount, setGuestCount] = useState('20 a 30 pessoas');
  const [eventDate, setEventDate] = useState('');
  const [eventLocation, setEventLocation] = useState('Luanda');
  const [contactName, setContactName] = useState('');

  // Partnership Form State
  const [companyName, setCompanyName] = useState('');
  const [partnershipType, setPartnershipType] = useState('Divulgação de Produto / Marca');
  const [partnerMessage, setPartnerMessage] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (serviceId) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [serviceId, onClose]);

  if (!serviceId) return null;

  const currentService = SERVICES_DATA[serviceId];
  if (!currentService) return null;

  // Enviar orçamento de buffet pelo WhatsApp
  const handleBuffetSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = [
      `Olá, Indira! Gostaria de solicitar um orçamento para *Buffet & Eventos*.\n`,
      `🎉 *Tipo de Evento:* ${eventType}`,
      `👥 *Número estimado de convidados:* ${guestCount}`,
      `📅 *Data prevista:* ${eventDate || 'A combinar'}`,
      `📍 *Local / Cidade:* ${eventLocation}`,
      contactName ? `👤 *Nome do Responsável:* ${contactName}` : '',
      `\n_Enviado através do website A Curiosa na Cozinha._`
    ].filter(Boolean).join('\n');

    const url = `https://wa.me/${BRAND_CONFIG.whatsappNumber}?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  // Enviar proposta de parceria pelo WhatsApp
  const handlePartnershipSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = [
      `Olá, Indira! Gostaria de conversar sobre uma *Parceria Comercial / Colaboração* com a A Curiosa na Cozinha.\n`,
      companyName ? `🏢 *Empresa / Marca:* ${companyName}` : '',
      `💼 *Tipo de Parceria:* ${partnershipType}`,
      partnerMessage ? `📝 *Detalhes:* ${partnerMessage}` : '',
      `\n_Enviado através do website A Curiosa na Cozinha._`
    ].filter(Boolean).join('\n');

    const url = `https://wa.me/${BRAND_CONFIG.whatsappNumber}?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/65 backdrop-blur-sm transition-opacity animate-in fade-in duration-200"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden z-10 max-h-[92vh] flex flex-col animate-in zoom-in-95 duration-200">
        
        {/* Modal Top Bar */}
        <div className="bg-gradient-to-r from-neutral-900 via-neutral-900 to-[#231519] p-5 sm:p-6 text-white flex items-center justify-between border-b border-white/10">
          <div>
            <span className="inline-block bg-[#D81B60] text-white text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded-full mb-1">
              {currentService.badge}
            </span>
            <h2 className="text-xl sm:text-2xl font-bold font-display text-white">
              {currentService.title}
            </h2>
            <p className="text-xs text-pink-200 mt-0.5">
              {currentService.subtitle}
            </p>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer shrink-0"
            aria-label="Fechar"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto flex-1 p-6 sm:p-8 space-y-6">
          
          {/* Main Description */}
          <p className="text-neutral-700 text-sm sm:text-base leading-relaxed">
            {currentService.description}
          </p>

          {/* Highlights Checklist */}
          <div className="space-y-2 bg-[#FFF8F9] p-4 rounded-2xl border border-pink-100">
            <h4 className="text-xs font-bold text-neutral-800 uppercase tracking-wider mb-2">
              Diferenciais do Serviço
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {currentService.highlights.map((h, i) => (
                <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-neutral-700">
                  <CheckCircle2 className="w-4 h-4 text-[#D81B60] shrink-0 mt-0.5" />
                  <span>{h}</span>
                </div>
              ))}
            </div>
          </div>

          {/* DEDICATED CONTENT PER SERVICE */}
          
          {/* 1. SE FOR ENCOMENDAS */}
          {currentService.type === 'order' && (
            <div className="space-y-4">
              <h4 className="text-xs font-bold text-neutral-800 uppercase tracking-wider">
                {currentService.featuresTitle}
              </h4>
              <div className="grid grid-cols-1 gap-3">
                {currentService.features.map((f, i) => (
                  <div key={i} className="p-3.5 bg-neutral-50 rounded-xl border border-neutral-200/70">
                    <p className="text-sm font-bold text-neutral-900">{f.label}</p>
                    <p className="text-xs text-neutral-600 mt-0.5">{f.desc}</p>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => {
                    onClose();
                    onOpenDishOrder();
                  }}
                  className="w-full inline-flex items-center justify-center gap-2.5 bg-[#D81B60] hover:bg-[#C2185B] text-white py-3.5 rounded-xl font-bold text-sm shadow-md shadow-[#D81B60]/30 transition-all cursor-pointer"
                >
                  <ChefHat className="w-4 h-4" />
                  <span>Ver Cardápio & Fazer Encomenda</span>
                </button>
              </div>
            </div>
          )}

          {/* 2. SE FOR BUFFET & EVENTOS: FORMULÁRIO DEDICADO DE ORÇAMENTO */}
          {currentService.type === 'buffet_form' && (
            <form onSubmit={handleBuffetSubmit} className="space-y-4 pt-2 border-t border-neutral-100">
              <h4 className="text-xs font-bold text-[#D81B60] uppercase tracking-wider">
                Solicitar Orçamento Personalizado para Evento
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-bold text-neutral-700 uppercase mb-1">
                    Tipo de Evento
                  </label>
                  <select
                    value={eventType}
                    onChange={(e) => setEventType(e.target.value)}
                    className="w-full px-3 py-2 text-xs bg-neutral-50 border border-neutral-200 rounded-xl font-medium focus:ring-2 focus:ring-[#D81B60] focus:outline-none"
                  >
                    <option value="Almoço de Família / Aniversário">Almoço de Família / Aniversário</option>
                    <option value="Casamento / Noivado">Casamento / Noivado</option>
                    <option value="Jantar Corporativo / Empresa">Jantar Corporativo / Empresa</option>
                    <option value="Batizado / Celebração Religiosa">Batizado / Celebração Religiosa</option>
                    <option value="Outro Evento Especial">Outro Evento Especial</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-neutral-700 uppercase mb-1">
                    Número Estimado de Pessoas
                  </label>
                  <select
                    value={guestCount}
                    onChange={(e) => setGuestCount(e.target.value)}
                    className="w-full px-3 py-2 text-xs bg-neutral-50 border border-neutral-200 rounded-xl font-medium focus:ring-2 focus:ring-[#D81B60] focus:outline-none"
                  >
                    <option value="10 a 20 pessoas">10 a 20 pessoas</option>
                    <option value="20 a 40 pessoas">20 a 40 pessoas</option>
                    <option value="40 a 70 pessoas">40 a 70 pessoas</option>
                    <option value="70 a 100 pessoas">70 a 100 pessoas</option>
                    <option value="Mais de 100 convidados">Mais de 100 convidados</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-bold text-neutral-700 uppercase mb-1">
                    Data Prevista
                  </label>
                  <input
                    type="date"
                    value={eventDate}
                    onChange={(e) => setEventDate(e.target.value)}
                    className="w-full px-3 py-2 text-xs bg-neutral-50 border border-neutral-200 rounded-xl font-medium focus:ring-2 focus:ring-[#D81B60] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-neutral-700 uppercase mb-1">
                    Local / Bairro do Evento
                  </label>
                  <input
                    type="text"
                    placeholder="Ex: Talatona, Maianga, etc."
                    value={eventLocation}
                    onChange={(e) => setEventLocation(e.target.value)}
                    className="w-full px-3 py-2 text-xs bg-neutral-50 border border-neutral-200 rounded-xl font-medium focus:ring-2 focus:ring-[#D81B60] focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-bold text-neutral-700 uppercase mb-1">
                  Seu Nome ou Nome da Empresa
                </label>
                <input
                  type="text"
                  placeholder="Ex: Ana Silva"
                  value={contactName}
                  onChange={(e) => setContactName(e.target.value)}
                  className="w-full px-3 py-2 text-xs bg-neutral-50 border border-neutral-200 rounded-xl font-medium focus:ring-2 focus:ring-[#D81B60] focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2.5 bg-[#D81B60] hover:bg-[#C2185B] text-white py-3.5 rounded-xl font-bold text-sm shadow-md shadow-[#D81B60]/30 transition-all cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Solicitar Orçamento de Buffet no WhatsApp</span>
              </button>
            </form>
          )}

          {/* 3. SE FOR RECEITAS & CONTEÚDO CULINÁRIO */}
          {currentService.type === 'content_links' && (
            <div className="space-y-4 pt-2 border-t border-neutral-100">
              <h4 className="text-xs font-bold text-neutral-800 uppercase tracking-wider">
                Aceder aos Conteúdos de Indira Rocha Zinga
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  href="#galeria"
                  onClick={onClose}
                  className="p-4 rounded-2xl bg-neutral-900 text-white hover:bg-neutral-800 transition-colors flex items-center justify-between group"
                >
                  <div className="flex items-center gap-3">
                    <Video className="w-5 h-5 text-[#FF80AB]" />
                    <div>
                      <p className="text-sm font-bold">Ver Vídeos no Site</p>
                      <p className="text-[11px] text-neutral-400">Na nossa galeria de pratos</p>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-neutral-400 group-hover:translate-x-1 transition-transform" />
                </a>

                <a
                  href={BRAND_CONFIG.socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-2xl bg-[#FFF0F5] text-neutral-900 hover:bg-[#FCE4EC] transition-colors flex items-center justify-between group border border-pink-200"
                >
                  <div className="flex items-center gap-3">
                    <Instagram className="w-5 h-5 text-[#D81B60]" />
                    <div>
                      <p className="text-sm font-bold">Seguir no Instagram</p>
                      <p className="text-[11px] text-neutral-600">Receitas diárias em vídeo</p>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-[#D81B60] group-hover:translate-x-1 transition-transform" />
                </a>
              </div>

              {/* Botão de Workshop no WhatsApp */}
              <div className="pt-2">
                <a
                  href={`https://wa.me/${BRAND_CONFIG.whatsappNumber}?text=${encodeURIComponent("Olá, Indira! Gostaria de informações sobre aulas particulares de culinária e workshops da A Curiosa na Cozinha.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2.5 bg-neutral-900 hover:bg-[#D81B60] text-white py-3.5 rounded-xl font-bold text-sm shadow-md transition-all cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 text-[#FF80AB]" />
                  <span>Agendar Aula ou Workshop Culinário</span>
                </a>
              </div>
            </div>
          )}

          {/* 4. SE FOR PARCERIAS COMERCIAIS */}
          {currentService.type === 'partnership_contact' && (
            <form onSubmit={handlePartnershipSubmit} className="space-y-4 pt-2 border-t border-neutral-100">
              <h4 className="text-xs font-bold text-[#D81B60] uppercase tracking-wider">
                Proposta Comercial & Ativação de Marca
              </h4>

              <div>
                <label className="block text-[11px] font-bold text-neutral-700 uppercase mb-1">
                  Nome da Marca / Empresa
                </label>
                <input
                  type="text"
                  placeholder="Ex: Marca de Alimentos ou Restaurante"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  className="w-full px-3 py-2 text-xs bg-neutral-50 border border-neutral-200 rounded-xl font-medium focus:ring-2 focus:ring-[#D81B60] focus:outline-none"
                  required
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold text-neutral-700 uppercase mb-1">
                  Tipo de Colaboração Desejada
                </label>
                <select
                  value={partnershipType}
                  onChange={(e) => setPartnershipType(e.target.value)}
                  className="w-full px-3 py-2 text-xs bg-neutral-50 border border-neutral-200 rounded-xl font-medium focus:ring-2 focus:ring-[#D81B60] focus:outline-none"
                >
                  <option value="Divulgação de Produto / Marca">Divulgação de Produto / Ingrediente</option>
                  <option value="Consultoria para Restaurante">Consultoria para Cardápio de Restaurante</option>
                  <option value="Presença VIP em Evento">Presença VIP / Live Cooking</option>
                  <option value="Campanha Publicitária de Longo Prazo">Campanha Publicitária de Longo Prazo</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-bold text-neutral-700 uppercase mb-1">
                  Mensagem ou Resumo da Proposta
                </label>
                <textarea
                  rows={2}
                  placeholder="Descreva brevemente o que tem em mente..."
                  value={partnerMessage}
                  onChange={(e) => setPartnerMessage(e.target.value)}
                  className="w-full px-3 py-2 text-xs bg-neutral-50 border border-neutral-200 rounded-xl font-medium focus:ring-2 focus:ring-[#D81B60] focus:outline-none resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2.5 bg-[#D81B60] hover:bg-[#C2185B] text-white py-3.5 rounded-xl font-bold text-sm shadow-md shadow-[#D81B60]/30 transition-all cursor-pointer"
              >
                <Briefcase className="w-4 h-4" />
                <span>Enviar Proposta de Parceria no WhatsApp</span>
              </button>
            </form>
          )}

        </div>

      </div>
    </div>
  );
};
