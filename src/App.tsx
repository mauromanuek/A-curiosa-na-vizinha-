import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Dishes } from './components/Dishes';
import { DishModal } from './components/DishModal';
import { OrderModal } from './components/OrderModal';
import { Services } from './components/Services';
import { ServiceModal } from './components/ServiceModal';
import { GalleryAndVideos } from './components/GalleryAndVideos';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';
import { Dish } from './data/dishes';
import { BRAND_CONFIG } from './data/config';
import { MessageCircle } from 'lucide-react';

export default function App() {
  const [selectedDishForModal, setSelectedDishForModal] = useState<Dish | null>(null);
  const [isOrderModalOpen, setIsOrderModalOpen] = useState<boolean>(false);
  const [dishForOrder, setDishForOrder] = useState<Dish | null>(null);
  const [selectedServiceId, setSelectedServiceId] = useState<string | null>(null);

  // Abrir modal de encomenda com ou sem prato pré-selecionado
  const handleOpenOrder = (dish?: Dish | null) => {
    setDishForOrder(dish || null);
    setIsOrderModalOpen(true);
  };

  // Abrir modal de detalhes do prato
  const handleSelectDish = (dish: Dish) => {
    setSelectedDishForModal(dish);
  };

  // Quando o visitante clica em "Encomendar este prato" de dentro do modal de detalhes
  const handleOrderFromDetailModal = (dish: Dish) => {
    setSelectedDishForModal(null);
    setDishForOrder(dish);
    setIsOrderModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#FFFDFB] text-neutral-800 flex flex-col selection:bg-[#DE1B60] selection:text-white">
      {/* 1. Header Minimalista & Fixo (Apenas Logo e Botão Encomendar) */}
      <Header onOpenOrder={() => handleOpenOrder(null)} />

      <main className="flex-1">
        {/* 2. Hero Principal com fundo de prato tradicional angolano */}
        <Hero onOpenOrder={() => handleOpenOrder(null)} />

        {/* 3. Pratos em Destaque */}
        <Dishes
          onSelectDish={handleSelectDish}
          onQuickOrder={(dish) => handleOpenOrder(dish)}
        />

        {/* 4. Serviços (Cada opção com detalhes e interação própria) */}
        <Services onSelectService={(serviceId) => setSelectedServiceId(serviceId)} />

        {/* 5. Galeria & Vídeos Locais */}
        <GalleryAndVideos />

        {/* 6. Call-to-Action Final "Pronto para saborear?" */}
        <CTA onOpenOrder={() => handleOpenOrder(null)} />
      </main>

      {/* 7. Rodapé */}
      <Footer onOpenOrder={() => handleOpenOrder(null)} />

      {/* 8. Modal de Detalhes do Prato */}
      <DishModal
        dish={selectedDishForModal}
        onClose={() => setSelectedDishForModal(null)}
        onOrderThisDish={handleOrderFromDetailModal}
      />

      {/* 9. Modal Interativo com a experiência própria de cada Serviço */}
      <ServiceModal
        serviceId={selectedServiceId}
        onClose={() => setSelectedServiceId(null)}
        onOpenDishOrder={() => handleOpenOrder(null)}
      />

      {/* 10. Modal de Encomenda & Envio para WhatsApp */}
      <OrderModal
        isOpen={isOrderModalOpen}
        onClose={() => setIsOrderModalOpen(false)}
        initialDish={dishForOrder}
      />

      {/* Botão Flutuante do WhatsApp no canto inferior direito */}
      {!isOrderModalOpen && !selectedDishForModal && !selectedServiceId && (
        <a
          href={`https://wa.me/${BRAND_CONFIG.whatsappNumber}?text=${encodeURIComponent("Olá, Indira! Gostaria de fazer uma encomenda na A Curiosa na Cozinha.")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-30 flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white px-4 py-3 rounded-full shadow-xl shadow-emerald-950/20 transition-all duration-300 hover:scale-105 active:scale-95 group cursor-pointer"
          aria-label="Falar no WhatsApp"
        >
          <MessageCircle className="w-6 h-6 fill-white text-[#25D366]" />
          <span className="hidden sm:inline font-bold text-sm pr-1">WhatsApp</span>
        </a>
      )}
    </div>
  );
}
