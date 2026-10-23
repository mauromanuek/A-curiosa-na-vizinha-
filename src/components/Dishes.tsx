import React, { useState } from 'react';
import { DISHES, CATEGORIES, Dish } from '../data/dishes';
import { Eye, MessageCircle, Clock, Users } from 'lucide-react';
import { motion } from 'motion/react';
import { Reveal } from './Reveal';

interface DishesProps {
  onSelectDish: (dish: Dish) => void;
  onQuickOrder: (dish: Dish) => void;
}

export const Dishes: React.FC<DishesProps> = ({ onSelectDish, onQuickOrder }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("Todos");

  const filteredDishes = selectedCategory === "Todos"
    ? DISHES
    : DISHES.filter((dish) => dish.category === selectedCategory);

  return (
    <section id="pratos" className="py-20 lg:py-28 bg-[#FAF6F3] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header com Transição de Revelação */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16 space-y-3">
          <Reveal delay={0.1}>
            <div className="inline-flex items-center gap-2 text-[#D81B60] text-xs font-bold tracking-[0.2em] uppercase">
              <span className="w-6 h-px bg-[#D81B60]" />
              <span>DESTAQUES</span>
              <span className="w-6 h-px bg-[#D81B60]" />
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 font-display tracking-tight">
              Alguns dos nossos pratos
            </h2>
          </Reveal>

          <Reveal delay={0.3}>
            <p className="text-neutral-600 text-base sm:text-lg">
              Receitas feitas com carinho, para momentos especiais.
            </p>
          </Reveal>

          {/* Category Filter Pills com Transição */}
          <Reveal delay={0.4}>
            <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`text-xs sm:text-sm font-semibold px-4 py-2 rounded-full transition-all duration-200 cursor-pointer ${
                    selectedCategory === cat
                      ? 'bg-[#D81B60] text-white shadow-md shadow-[#D81B60]/20'
                      : 'bg-white text-neutral-700 hover:bg-neutral-100 border border-neutral-200/70'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Dishes Grid - CARDS APARECEM COM TRANSIÇÃO ESCALONADA AO FAZER SCROLL */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {filteredDishes.map((dish, index) => (
            <motion.div
              key={dish.id}
              initial={{ opacity: 0, y: 30, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{
                duration: 0.55,
                delay: (index % 4) * 0.12,
                ease: [0.21, 0.47, 0.32, 0.98]
              }}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-neutral-100 flex flex-col hover:-translate-y-1.5 cursor-pointer"
              onClick={() => onSelectDish(dish)}
            >
              {/* Dish Image Container */}
              <div className="relative aspect-4/3 overflow-hidden bg-neutral-100">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-500 ease-out"
                  loading="lazy"
                />
                
                {/* Overlay hover badge */}
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="inline-flex items-center gap-1.5 bg-white text-neutral-900 text-xs font-bold px-3.5 py-1.5 rounded-full shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <Eye className="w-3.5 h-3.5 text-[#D81B60]" />
                    <span>Ver detalhes</span>
                  </span>
                </div>

                {/* Popular or Category Tag */}
                {dish.isPopular && (
                  <span className="absolute top-3 left-3 bg-[#D81B60] text-white text-[11px] font-bold px-2.5 py-1 rounded-full shadow-sm tracking-wide uppercase">
                    Mais Pedido
                  </span>
                )}
              </div>

              {/* Dish Info */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-lg text-neutral-900 group-hover:text-[#D81B60] transition-colors leading-snug">
                    {dish.name}
                  </h3>

                  <p className="text-neutral-500 text-xs sm:text-sm line-clamp-2 mt-2 leading-relaxed">
                    {dish.shortDescription}
                  </p>

                  <div className="flex items-center gap-3 text-[11px] text-neutral-400 mt-3 pt-3 border-t border-neutral-100">
                    <span className="flex items-center gap-1">
                      <Users className="w-3 h-3 text-neutral-400" />
                      {dish.serves}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-neutral-400" />
                      24h
                    </span>
                  </div>
                </div>

                {/* Price & Action Row */}
                <div className="mt-4 pt-3 border-t border-neutral-100 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] uppercase font-bold text-neutral-400 block tracking-wider">
                      Preço
                    </span>
                    <span className="text-base sm:text-lg font-extrabold text-neutral-900">
                      {dish.price}
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelectDish(dish);
                      }}
                      className="text-xs font-semibold text-neutral-700 hover:text-[#D81B60] px-2.5 py-1.5 rounded-lg hover:bg-pink-50 transition-colors"
                      title="Ver detalhes do prato"
                    >
                      Ver prato
                    </button>
                    
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        onQuickOrder(dish);
                      }}
                      className="p-2 rounded-full bg-[#D81B60] hover:bg-[#C2185B] text-white transition-all shadow-sm shadow-[#D81B60]/30 hover:scale-105"
                      title="Encomendar este prato"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
