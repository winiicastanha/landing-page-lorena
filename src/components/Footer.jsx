import React from 'react'
import { IconBrandLinkedin, IconBrandTwitter, IconBrandGithub, IconHeart } from '@tabler/icons-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    Empresa: [
      { name: 'Sobre Nós', href: '#about' },
      { name: 'Recursos', href: '#features' },
      { name: 'Blog', href: '#' },
    ],
    Recursos: [
      { name: 'Lives Exclusivas', href: '#features' },
      { name: 'Área Kids', href: '#features' },
      { name: 'Feed Interativo', href: '#features' },
      { name: 'Perguntas Frequentes', href: '#' },
    ],
    Legal: [
      { name: 'Política de Privacidade', href: '#' },
      { name: 'Termos de Uso', href: '#' },
      { name: 'Política de Cookies', href: '#' },
      { name: 'LGPD', href: '#' },
    ],
  }

  const socialLinks = [
    { icon: <IconBrandLinkedin size={20} />, href: '#', label: 'LinkedIn' },
    { icon: <IconBrandTwitter size={20} />, href: '#', label: 'Twitter' },
    { icon: <IconBrandGithub size={20} />, href: '#', label: 'GitHub' },
  ]

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <img 
              src="/LogoBranco.png" 
              alt="Lore In Play" 
              className="max-h-10 w-auto mb-4" 
              style={{ imageRendering: 'crisp-edges' }}
            />
            <p className="text-gray-400 mb-6 max-w-md">
              A rede social oficial dos fãs da Lorena Improta. Lives exclusivas, conteúdos especiais 
              e área kids para toda a família.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center transition-all"
                  onMouseEnter={(e) => e.currentTarget.style.background = 'linear-gradient(to right, #db2777, #2a013c)'}
                  onMouseLeave={(e) => e.currentTarget.style.background = ''}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-white font-semibold mb-4">{title}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-pink transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm flex items-center gap-2">
            © {currentYear} Lore In Play. Feito com <IconHeart size={16} className="text-pink" />{' '}
            no Brasil
          </p>
          <p className="text-gray-400 text-sm">Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

