import React, { useState } from 'react';
import { Film, Image as ImageIcon, Sparkles, Video } from 'lucide-react';
import { motion } from 'motion/react';
import { Reveal } from './Reveal';

export const GalleryAndVideos: React.FC = () => {
  const galleryImages = [
    {
      src: '/assets/images/galeria-1.jpg',
      title: 'Mufete Tradicional de Peixe',
      category: 'Prato Típico'
    },
    {
      src: '/assets/images/galeria-2.jpg',
      title: 'Calulu de Peixe Aromático',
      category: 'Culinária Ancestral'
    },
    {
      src: '/assets/images/galeria-3.jpg',
      title: 'Frango Assado Especial',
      category: 'Grelhados'
    },
    {
      src: '/assets/images/galeria-4.jpg',
      title: 'Arroz de Marisco com Camarões',
      category: 'Mariscos de Luanda'
    },
    {
      src: '/assets/images/galeria-5.jpg',
      title: 'Indira Rocha Zinga na Cozinha',
      category: 'Bastidores'
    },
    {
      src: '/assets/images/galeria-6.jpg',
      title: 'Mesa Farta para Celebração',
      category: 'Buffet & Eventos'
    }
  ];

  const videos = [
    {
      src: '/assets/videos/video-1.mp4',
      title: 'Bastidores & Segredos da Cozinha',
      description: 'Como preparamos as nossas encomendas com amor e dedicação.',
      duration: 'Vídeo 1'
    },
    {
      src: '/assets/videos/video-2.mp4',
      title: 'A Arte da Comida Angolana',
      description: 'Dicas e técnicas especiais compartilhadas pela chef Indira.',
      duration: 'Vídeo 2'
    }
  ];

  const [activeMediaTab, setActiveMediaTab] = useState<'fotos' | 'videos'>('fotos');

  return (
    <section id="galeria" className="py-20 lg:py-28 bg-[#FFFDFB] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header com Transições Suaves */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-6">
          <div className="space-y-2">
            <Reveal delay={0.1}>
              <div className="inline-flex items-center gap-2 text-[#D81B60] text-xs font-bold uppercase tracking-widest">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Experiência Visual</span>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-neutral-900 tracking-tight">
                Galeria & Vídeos
              </h2>
            </Reveal>

            <Reveal delay={0.3}>
              <p className="text-neutral-600 text-sm sm:text-base max-w-xl">
                Um olhar pelos nossos pratos, ingredientes frescos e momentos especiais criados por Indira Rocha Zinga.
              </p>
            </Reveal>
          </div>

          {/* Tab Selector */}
          <Reveal delay={0.35}>
            <div className="inline-flex p-1 rounded-2xl bg-neutral-100 border border-neutral-200 shrink-0">
              <button
                onClick={() => setActiveMediaTab('fotos')}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  activeMediaTab === 'fotos'
                    ? 'bg-white text-neutral-900 shadow-sm'
                    : 'text-neutral-600 hover:text-neutral-900'
                }`}
              >
                <ImageIcon className="w-4 h-4 text-[#D81B60]" />
                <span>Fotografias ({galleryImages.length})</span>
              </button>

              <button
                onClick={() => setActiveMediaTab('videos')}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  activeMediaTab === 'videos'
                    ? 'bg-white text-neutral-900 shadow-sm'
                    : 'text-neutral-600 hover:text-neutral-900'
                }`}
              >
                <Film className="w-4 h-4 text-[#D81B60]" />
                <span>Vídeos ({videos.length})</span>
              </button>
            </div>
          </Reveal>
        </div>

        {/* Gallery Grid com animação suave de revelação */}
        {activeMediaTab === 'fotos' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 24, scale: 0.97 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{
                  duration: 0.5,
                  delay: (index % 3) * 0.12,
                  ease: [0.21, 0.47, 0.32, 0.98]
                }}
                className="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 aspect-4/3 bg-neutral-100 cursor-pointer"
              >
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-500 ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />
                
                <div className="absolute bottom-4 left-4 right-4 text-white transform transition-transform duration-300">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-pink-300 block mb-1">
                    {item.category}
                  </span>
                  <p className="text-base font-bold font-display leading-tight">
                    {item.title}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Local Videos Section com animação */}
        {activeMediaTab === 'videos' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {videos.map((vid, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="bg-neutral-900 rounded-3xl overflow-hidden shadow-xl border border-neutral-800 flex flex-col"
              >
                {/* Local Video Player */}
                <div className="relative aspect-16/9 bg-black flex items-center justify-center">
                  <video
                    controls
                    preload="metadata"
                    className="w-full h-full object-cover"
                  >
                    <source src={vid.src} type="video/mp4" />
                    O seu navegador não suporta a tag de vídeo.
                  </video>
                </div>

                {/* Video Info */}
                <div className="p-6 flex-1 flex flex-col justify-between text-white bg-neutral-900">
                  <div>
                    <div className="flex items-center gap-2 text-xs font-semibold text-[#FF80AB] mb-1.5">
                      <Video className="w-3.5 h-3.5" />
                      <span>{vid.duration}</span>
                    </div>
                    <h3 className="text-xl font-bold font-display text-white">
                      {vid.title}
                    </h3>
                    <p className="text-neutral-400 text-sm mt-2 leading-relaxed">
                      {vid.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
