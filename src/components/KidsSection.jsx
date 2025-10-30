import React from 'react'
import { IconDeviceGamepad2, IconPuzzle, IconMusic } from '@tabler/icons-react'

const KidsSection = () => {
  const kidsFeatures = [
    {
      icon: <IconDeviceGamepad2 size={40} />,
      title: 'Jogos Divertidos',
      description: 'Games interativos e educativos para os pequenos se divertirem.',
    },
    {
      icon: <IconPuzzle size={40} />,
      title: 'Atividades',
      description: 'Quebra-cabeças e desafios pensados para as crianças.',
    },
    {
      icon: <IconMusic size={40} />,
      title: 'Música e Dança',
      description: 'Aprenda coreografias e cante junto com a Lorena.',
    },
  ]

  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-pink-100 to-purple-100 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-pink rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-600 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header with Kids Logo */}
          <div className="text-center mb-16">
            <img 
              src="/logo_kids_pink.png" 
              alt="Lore Kids" 
              className="max-h-16 w-auto mx-auto mb-6"
              style={{ imageRendering: 'crisp-edges' }}
            />
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
              Diversão para os Pequenos!
            </h2>
            <p className="text-gray-700 text-lg max-w-2xl mx-auto">
              Uma área especial repleta de jogos, atividades e conteúdos pensados 
              especialmente para as crianças se divertirem com segurança.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {kidsFeatures.map((feature) => (
              <div
                key={feature.title}
                className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="text-pink mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <button className="bg-white text-pink px-8 py-4 rounded-full font-bold hover:bg-gray-50 transition-all hover:scale-105 shadow-xl">
              Explorar Área Kids
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default KidsSection

