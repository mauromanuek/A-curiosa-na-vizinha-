import React, { useEffect } from 'react';
import { Dish } from '../data/dishes';
import { X, MessageCircle, Clock, Users, CheckCircle2, AlertCircle } from 'lucide-react';

interface DishModalProps {
  dish: Dish | null;
  onClose: () => void;
  onOrderThisDish: (dish: Dish) => void;
}

export const DishModal: React.FC<DishModalProps> = ({ dish, onClose, onOrderThisDish }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (dish) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [dish, onClose]);

  if (!dish) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6">
      {/* Backdrop with blur */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity animate-in fade-in duration-200"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl overflow-hidden z-10 max-h-[92vh] flex flex-col animate-in zoom-in-95 duration-200">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/50 hover:bg-black/80 text-white flex items-center justify-center transition-colors backdrop-blur-md cursor-pointer"
          aria-label="Fechar"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Scrollable Content Container */}
        <div className="overflow-y-auto flex-1">
          {/* Header Image */}
          <div className="relative aspect-16/9 sm:aspect-21/9 w-full bg-neutral-900 overflow-hidden">
            <img
              src={dish.image}
              alt={dish.name}
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            
            <div className="absolute bottom-4 left-5 right-5 text-white">
              <span className="inline-block bg-[#D81B60] text-white text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-2">
                {dish.category}
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold font-display text-white">
                {dish.name}
              </h2>
            </div>
          </div>

          {/* Details Body */}
          <div className="p-6 sm:p-8 space-y-6">
            
            {/* Price and Key Meta Pills */}
            <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-2xl bg-[#FFF9F6] border border-pink-100">
              <div>
                <p className="text-xs uppercase font-bold text-neutral-400">Preço da Encomenda</p>
                <p className="text-2xl sm:text-3xl font-extrabold text-[#D81B60]">
                  {dish.price}
                </p>
              </div>

              <div className="flex items-center gap-4 text-xs sm:text-sm text-neutral-600">
                <div className="flex items-center gap-1.5">
                  <Users className="w-4 h-4 text-[#D81B60]" />
                  <span className="font-medium">{dish.serves}</span>
                </div>
                <div className="w-px h-6 bg-neutral-200" />
                <div className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-[#D81B60]" />
                  <span className="font-medium">{dish.prepNotice}</span>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="space-y-2">
              <h3 className="text-base font-bold text-neutral-900 uppercase tracking-wide text-xs">
                Sobre o Prato
              </h3>
              <p className="text-neutral-700 leading-relaxed text-sm sm:text-base">
                {dish.description}
              </p>
            </div>

            {/* Ingredients */}
            {dish.ingredients && dish.ingredients.length > 0 && (
              <div className="space-y-3">
                <h3 className="text-xs font-bold text-neutral-900 uppercase tracking-wide">
                  Ingredientes & Acompanhamentos
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {dish.ingredients.map((ing, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs sm:text-sm text-neutral-700">
                      <CheckCircle2 className="w-4 h-4 text-[#D81B60] shrink-0" />
                      <span>{ing}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Ordering tips */}
            <div className="flex items-start gap-3 p-3.5 rounded-xl bg-amber-50/70 border border-amber-200/60 text-amber-900 text-xs">
              <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
              <p>
                As encomendas são preparadas artesanalmente sob medida para a data do seu almoço ou evento em Luanda.
              </p>
            </div>

          </div>
        </div>

        {/* Modal Footer CTA */}
        <div className="p-4 sm:p-6 bg-white border-t border-neutral-100 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="hidden sm:block">
            <p className="text-xs text-neutral-500">Pronto para encomendar?</p>
            <p className="text-sm font-semibold text-neutral-900">{dish.name}</p>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 sm:flex-none px-5 py-3 rounded-xl border border-neutral-200 text-neutral-700 font-semibold text-sm hover:bg-neutral-50 transition-colors cursor-pointer"
            >
              Voltar
            </button>

            <button
              type="button"
              onClick={() => {
                onClose();
                onOrderThisDish(dish);
              }}
              className="flex-2 sm:flex-none inline-flex items-center justify-center gap-2 bg-[#D81B60] hover:bg-[#C2185B] text-white px-7 py-3 rounded-xl font-bold text-sm shadow-md shadow-[#D81B60]/30 transition-all hover:scale-102 cursor-pointer"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Encomendar este prato</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
