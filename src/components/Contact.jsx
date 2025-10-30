import React, { useState } from 'react'
import { IconMail, IconPhone, IconMapPin, IconBrandLinkedin, IconBrandTwitter, IconBrandGithub } from '@tabler/icons-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    alert('Thank you for your message! We will get back to you soon.')
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const contactInfo = [
    {
      icon: <IconMail size={24} />,
      title: 'Email',
      value: 'contato@loreinplay.com',
      href: 'mailto:contato@loreinplay.com',
    },
    {
      icon: <IconPhone size={24} />,
      title: 'Telefone',
      value: '+55 (11) 9999-9999',
      href: 'tel:+5511999999999',
    },
    {
      icon: <IconMapPin size={24} />,
      title: 'Localização',
      value: 'São Paulo, Brasil',
      href: '#',
    },
  ]

  const socialLinks = [
    { icon: <IconBrandLinkedin size={24} />, href: '#', label: 'LinkedIn' },
    { icon: <IconBrandTwitter size={24} />, href: '#', label: 'Twitter' },
    { icon: <IconBrandGithub size={24} />, href: '#', label: 'GitHub' },
  ]

  return (
    <section id="contact" className="py-20 md:py-32 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="bg-gradient-to-r from-pink to-deep-purple bg-clip-text text-transparent font-semibold text-sm uppercase tracking-wider">
              Contato
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
              Vamos Conversar?
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Tem dúvidas ou sugestões? Adoraríamos ouvir você. Envie uma mensagem e 
              responderemos o mais breve possível.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Nome
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-pink focus:ring-2 focus:ring-pink/20 outline-none transition-all"
                    placeholder="Seu nome"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-pink focus:ring-2 focus:ring-pink/20 outline-none transition-all"
                    placeholder="seu.email@exemplo.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Assunto
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-pink focus:ring-2 focus:ring-pink/20 outline-none transition-all"
                    placeholder="Como podemos ajudar?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-pink focus:ring-2 focus:ring-pink/20 outline-none transition-all resize-none"
                    placeholder="Conte-nos mais sobre sua necessidade..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full text-white px-8 py-4 rounded-lg font-semibold hover:opacity-90 transition-all shadow-lg hover:shadow-xl"
                  style={{background: 'linear-gradient(to right, #db2777, #2a013c)'}}
                >
                  Enviar Mensagem
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <div className="bg-white rounded-2xl p-8 shadow-sm mb-8">
                <h3 className="text-2xl font-bold mb-6">Entre em Contato</h3>
                <div className="space-y-6">
                  {contactInfo.map((info) => (
                    <a
                      key={info.title}
                      href={info.href}
                      className="flex items-start gap-4 group hover:text-pink transition-colors"
                    >
                      <div className="text-pink mt-1">{info.icon}</div>
                      <div>
                        <div className="font-medium text-gray-500 text-sm">{info.title}</div>
                        <div className="font-semibold">{info.value}</div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <h3 className="text-xl font-bold mb-6">Siga-nos</h3>
                <div className="flex gap-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      aria-label={social.label}
                      className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:text-white transition-all hover:scale-110"
                      style={{'--hover-bg': 'linear-gradient(to right, #db2777, #2a013c)'}}
                      onMouseEnter={(e) => e.currentTarget.style.background = 'linear-gradient(to right, #db2777, #2a013c)'}
                      onMouseLeave={(e) => e.currentTarget.style.background = ''}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>

              {/* Map placeholder */}
              <div className="mt-8 rounded-2xl h-64 flex items-center justify-center text-white" style={{background: 'linear-gradient(to bottom right, #db2777, #2a013c)'}}>
                <div className="text-center">
                  <IconMapPin size={48} className="mx-auto mb-2" />
                  <p className="font-semibold">São Paulo, Brasil</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact

