import React from 'react'
import { IconTarget, IconRocket, IconHeart } from '@tabler/icons-react'

const About = () => {
  const features = [
    {
      icon: <IconTarget size={32} />,
      title: 'Conexão Direta',
      description: 'A forma mais próxima de interagir com a Lorena Improta e acompanhar sua rotina.',
    },
    {
      icon: <IconRocket size={32} />,
      title: 'Conteúdo Exclusivo',
      description: 'Lives, bastidores, tutoriais e conteúdos que você só encontra aqui.',
    },
    {
      icon: <IconHeart size={32} />,
      title: 'Para Toda Família',
      description: 'Da área kids aos conteúdos adultos, diversão garantida para todos.',
    },
  ]

  return (
    <section id="about" className="py-20 md:py-32 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="bg-gradient-to-r from-pink to-deep-purple bg-clip-text text-transparent font-semibold text-sm uppercase tracking-wider">
              Sobre Nós
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
              Por Que Lore In Play?
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              A rede social oficial dos fãs da Lorena Improta, com lives, conteúdos exclusivos,
              área kids e muito mais para toda a família.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="text-pink mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Content Section */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6">
                Sua Conexão com a Lorena Improta
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                O Lore In Play é a rede social oficial onde você se conecta com a Lorena Improta,
                assiste lives exclusivas, acessa bastidores e muito mais.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Com área kids repleta de jogos e atividades, feed interativo e conteúdos especiais,
                diversão garantida para toda a família.
              </p>
              <button className="text-white px-8 py-3 rounded-full font-semibold hover:opacity-90 transition-all shadow-lg" style={{background: 'linear-gradient(to right, #db2777, #2a013c)'}}>
                Conheça Mais Sobre Nós
              </button>
            </div>
            <div className="relative">
              <div className="rounded-3xl shadow-2xl overflow-hidden bg-gradient-to-br from-pink to-deep-purple">
                <img 
                  src="/display.png" 
                  alt="Lorena Improta" 
                  className="w-full h-auto"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-pink/20 rounded-3xl -z-10"></div>
              <div className="absolute -top-6 -left-6 w-48 h-48 bg-deep-purple/20 rounded-3xl -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

