import React from 'react'
import { IconSparkles } from '@tabler/icons-react'

const Gallery = () => {
  const images = [
    { src: '/historico_1.png', alt: 'Lorena Improta' },
    { src: '/historico_2.png', alt: 'Lorena Improta' },
  ]

  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="bg-gradient-to-r from-pink to-deep-purple bg-clip-text text-transparent font-semibold text-sm uppercase tracking-wider">
              Galeria
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
              Momentos Exclusivos
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Acompanhe os melhores momentos da Lorena e tenha acesso a conteúdos 
              exclusivos que você não encontra em nenhum outro lugar.
            </p>
          </div>

          {/* Gallery Grid */}
          <div className="grid md:grid-cols-2 gap-8 max-w-1xl mx-auto">
            {images.map((image, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-pink-50 to-purple-50"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-auto max-w-sm mx-auto"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div className="flex items-center gap-2 text-white">
                    <IconSparkles size={20} />
                    <span className="font-semibold">Conteúdo Exclusivo</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <button className="text-white px-8 py-3 rounded-full font-semibold hover:opacity-90 transition-all shadow-lg hover:shadow-xl" style={{background: 'linear-gradient(to right, #db2777, #2a013c)'}}>
              Ver Mais Conteúdos
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Gallery

