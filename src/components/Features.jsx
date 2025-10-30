import React from 'react'
import {
  IconDeviceTv,
  IconShieldCheck,
  IconUsers,
  IconCategory,
  IconHeart,
  IconClock,
} from '@tabler/icons-react'

const Features = () => {
  const features = [
    {
      icon: <IconDeviceTv size={40} />,
      title: 'Lives Exclusivas',
      description: 'Assista lives ao vivo com a Lorena e tenha acesso a replays de todas as transmissões.',
      features: ['Lives HD', 'Replays', 'Chat ao vivo'],
    },
    {
      icon: <IconShieldCheck size={40} />,
      title: 'Área Kids Segura',
      description: 'Espaço especial para crianças com jogos, atividades e conteúdos divertidos.',
      features: ['Jogos interativos', 'Sem anúncios', 'Ambiente seguro'],
    },
    {
      icon: <IconUsers size={40} />,
      title: 'Comunidade de Fãs',
      description: 'Conecte-se com outros fãs, compartilhe momentos e participe de discussões.',
      features: ['Chat de fãs', 'Grupos temáticos', 'Eventos exclusivos'],
    },
    {
      icon: <IconCategory size={40} />,
      title: 'Conteúdo Exclusivo',
      description: 'Acesso a fotos, vídeos e conteúdos que você não encontra em nenhum outro lugar.',
      features: ['Bastidores', 'Tutoriais', 'Making of'],
    },
    {
      icon: <IconHeart size={40} />,
      title: 'Feed Interativo',
      description: 'Acompanhe todas as novidades, curta, comente e interaja com posts da Lorena.',
      features: ['Comentários', 'Curtidas', 'Compartilhamentos'],
    },
    {
      icon: <IconClock size={40} />,
      title: 'Notificações em Tempo Real',
      description: 'Receba alertas quando a Lorena postar algo novo ou iniciar uma live.',
      features: ['Push notifications', 'Calendário de lives', 'Lembretes personalizados'],
    },
  ]

  return (
    <section id="features" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="bg-gradient-to-r from-pink to-deep-purple bg-clip-text text-transparent font-semibold text-sm uppercase tracking-wider">
              Recursos
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
              Tudo que Você Precisa
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Uma plataforma completa para você ficar conectado com a Lorena Improta 
              e curtir conteúdos exclusivos para toda a família.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="group p-8 rounded-2xl border-2 border-gray-100 hover:border-pink hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="text-pink mb-4 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-pink transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.features.map((item) => (
                    <li key={item} className="text-sm text-gray-500 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-pink rounded-full"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <p className="text-gray-600 mb-6">
              Pronto para se conectar com a Lorena?
            </p>
            <button className="text-white px-8 py-3 rounded-full font-semibold hover:opacity-90 transition-all shadow-lg hover:shadow-xl" style={{background: 'linear-gradient(to right, #db2777, #2a013c)'}}>
              Experimente Grátis por 7 Dias
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features

