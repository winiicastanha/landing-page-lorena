import React from 'react'
import { IconArrowRight, IconSparkles } from '@tabler/icons-react'

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center text-white overflow-hidden"
      style={{background: 'linear-gradient(to bottom right, #db2777, #2a013c)'}}
    >
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>
      
      {/* Dark overlay for better contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/30"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/25 backdrop-blur-md border border-white/30 px-5 py-2.5 rounded-full mb-8 shadow-2xl">
            <IconSparkles size={20} className="text-white drop-shadow-md" />
            <span className="text-sm font-bold text-white drop-shadow-md">A rede social oficial dos fãs</span>
          </div>

          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="block text-white" style={{textShadow: '0 4px 20px rgba(0,0,0,0.5), 0 2px 8px rgba(0,0,0,0.3)'}}>
              Conecte-se com
            </span>
            <span className="block text-white" style={{textShadow: '0 4px 20px rgba(0,0,0,0.5), 0 2px 8px rgba(0,0,0,0.3)'}}>
              Lorena Improta
            </span>
          </h1>

          {/* Description */}
          <p className="text-xl md:text-2xl text-white mb-10 max-w-2xl mx-auto font-medium" style={{textShadow: '0 2px 12px rgba(0,0,0,0.5), 0 1px 6px rgba(0,0,0,0.3)'}}>
            Lives exclusivas, conteúdos especiais, área kids com jogos e muito mais para toda a família!
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-white text-[#db2777] px-8 py-4 rounded-full font-bold hover:bg-gray-50 transition-all hover:scale-105 flex items-center gap-2 shadow-2xl">
              Começar Grátis
              <IconArrowRight size={20} />
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:opacity-90 transition-all shadow-xl" style={{background: 'linear-gradient(135deg, rgba(219, 39, 119, 0.2), rgba(42, 1, 60, 0.3))'}}>
              Saiba Mais
            </button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-white rounded-full"></div>
        </div>
      </div>
    </section>
  )
}

export default Hero

