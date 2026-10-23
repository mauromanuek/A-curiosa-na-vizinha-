import React, { useState, useEffect } from 'react';
import { ChefHat, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';

interface HeroProps {
  onOpenOrder: () => void;
}

export const Hero: React.FC<HeroProps> = () => {
  // 3 fotos verdadeiramente diferentes da Indira em formato Widescreen 16:9
  const lateralSlides = [
    {
      image: '/assets/images/hero-1.jpg',
      alt: 'Indira Rocha Zinga apresentando travessa de peixe e funge',
      caption: 'Indira Rocha Zinga',
      tag: 'Chef & Criadora de Conteúdo'
    },
    {
      image: '/assets/images/hero-2.jpg',
      alt: 'Indira temperando calulu na panela de barro tradicional',
      caption: 'Tempero & Tradição',
      tag: 'Cozinha Artesanal Angolana'
    },
    {
      image: '/assets/images/hero-3.jpg',
      alt: 'Indira apresentando travessa de peixe grelhado especial',
      caption: 'Pratos Especiais & Encomendas',
      tag: 'Sabores Inesquecíveis'
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  // Troca automática entre as 3 fotos a cada 3.5 segundos
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % lateralSlides.length);
    }, 3500);

    return () => clearInterval(timer);
  }, [lateralSlides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % lateralSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + lateralSlides.length) % lateralSlides.length);
  };

  // Frases resumidas digitadas em tempo real
  const typewriterPhrases = [
    'Sabor, tradição e criatividade em cada prato.',
    'Autêntica comida angolana feita com afeto.',
    'Cozinhar é partilhar memórias e amor.'
  ];

  const [phraseIndex, setPhraseIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(55);

  useEffect(() => {
    const fullText = typewriterPhrases[phraseIndex];

    const handleTyping = () => {
      if (!isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length + 1));

        if (currentText === fullText) {
          setTimeout(() => setIsDeleting(true), 2400);
          setTypingSpeed(120);
        } else {
          setTypingSpeed(45 + Math.random() * 25);
        }
      } else {
        setCurrentText(fullText.substring(0, currentText.length - 1));

        if (currentText === '') {
          setIsDeleting(false);
          setPhraseIndex((prev) => (prev + 1) % typewriterPhrases.length);
          setTypingSpeed(250);
        } else {
          setTypingSpeed(25);
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, phraseIndex, typingSpeed, typewriterPhrases]);

  return (
    <section
      id="hero"
      className="relative overflow-hidden pt-28 sm:pt-32 pb-10 sm:pb-14 bg-[#141110] text-white"
    >
      {/* Background Dish (Prato Limpo Sem Letras) */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/images/prato-fundo.jpg"
          alt="Fundo gastronómico com autêntico prato tradicional angolano"
          className="w-full h-full object-cover object-center opacity-40 filter brightness-90"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#141110] via-[#141110]/80 to-[#141110]/60" />
        <div className="absolute inset-0 bg-[#D81B60]/10 mix-blend-color" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* FOTO NA LATERAL: FORMATO WIDESCREEN 16:9 TOTALMENTE VISÍVEL E SEM CORTAR */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, x: -20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex flex-col justify-center"
          >
            <div className="relative w-full group">
              
              {/* Brilho suave */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-[#D81B60]/30 to-amber-500/20 rounded-3xl blur-lg transition-opacity" />
              
              {/* Moldura 16:9 Limpa e Totalmente Visível */}
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border-2 border-white/20 bg-neutral-900 aspect-16/9 w-full">
                
                {/* Imagens 16:9 com Transição Suave */}
                {lateralSlides.map((slide, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                      index === currentSlide
                        ? 'opacity-100 z-10'
                        : 'opacity-0 pointer-events-none z-0'
                    }`}
                  >
                    <img
                      src={slide.image}
                      alt={slide.alt}
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                ))}

                {/* Badge indicador discreto: Foto 1 de 3 */}
                <div className="absolute top-3 right-3 z-20 bg-black/55 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/20 text-[10px] font-bold text-pink-200">
                  {currentSlide + 1} / {lateralSlides.length}
                </div>

                {/* Botões de seta para navegação manual ao passar o mouse */}
                <button
                  type="button"
                  onClick={prevSlide}
                  className="absolute left-2.5 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-black/50 hover:bg-black/80 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm cursor-pointer shadow-md"
                  aria-label="Foto anterior"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={nextSlide}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-black/50 hover:bg-black/80 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm cursor-pointer shadow-md"
                  aria-label="Próxima foto"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              {/* Informações da Foto Posicionadas ABAIXO da Imagem para NUNCA Cobrir a Foto */}
              <div className="mt-3 px-1 flex items-center justify-between text-xs">
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-wider text-[#FF80AB] block">
                    {lateralSlides[currentSlide].tag}
                  </span>
                  <p className="font-semibold text-neutral-200">
                    {lateralSlides[currentSlide].caption}
                  </p>
                </div>

                {/* Barrinhas de progresso interativas */}
                <div className="flex items-center gap-1.5">
                  {lateralSlides.map((_, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => setCurrentSlide(i)}
                      aria-label={`Ver foto ${i + 1}`}
                      className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                        i === currentSlide
                          ? 'w-6 bg-[#FF4081]'
                          : 'w-2 bg-white/30 hover:bg-white/60'
                      }`}
                    />
                  ))}
                </div>
              </div>

            </div>
          </motion.div>

          {/* TEXTO DO HERO: RESUMIDO, ELEGANTE E COM ANIMAÇÃO TYPEWRITER */}
          <div className="lg:col-span-6 space-y-4 text-left">
            
            {/* Tag da chef com entrada suave */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-pink-200 text-xs font-semibold"
            >
              <ChefHat className="w-3.5 h-3.5 text-[#FF4081]" />
              <span>Por Indira Rocha Zinga</span>
            </motion.div>

            {/* Título Principal */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-0.5"
            >
              <div className="flex items-center gap-2.5">
                <svg
                  className="w-8 h-8 sm:w-10 sm:h-10 text-[#FF4081] shrink-0"
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
                <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white font-display">
                  A Curiosa
                </h1>
              </div>
              <h2 className="text-2xl sm:text-4xl font-light tracking-wide text-neutral-200 font-display pl-2">
                na Cozinha
              </h2>
            </motion.div>

            {/* PALAVRAS SENDO ESCRITAS POUCO A POUCO (SEM O SINAL « ») */}
            <div className="min-h-[58px] sm:min-h-[68px] flex items-center">
              <p className="text-lg sm:text-2xl lg:text-3xl font-medium text-pink-100 font-display italic leading-snug">
                {currentText}
                <span className="inline-block w-0.5 h-6 sm:h-7 bg-[#FF4081] ml-1 align-middle animate-pulse" />
              </p>
            </div>

            {/* Descrição resumida */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="text-neutral-300 text-sm sm:text-base leading-relaxed max-w-lg"
            >
              Autêntica culinária angolana preparada com tempero afetivo e ingredientes frescos para a sua mesa.
            </motion.p>

            {/* Selo manuscrito de Comida Angolana */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="pt-2 flex flex-wrap items-center gap-4"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <span className="font-script text-2xl text-[#FF80AB] font-bold">
                  Comida Angolana
                </span>
                <span className="text-pink-300">♡</span>
                <span className="font-script text-xl text-white">
                  e muito mais!
                </span>
              </div>

              <div className="flex items-center gap-1.5 text-xs text-neutral-400">
                <Sparkles className="w-3.5 h-3.5 text-[#FF80AB]" />
                <span>Mufete, Calulu, Moamba & Petiscos</span>
              </div>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
};
