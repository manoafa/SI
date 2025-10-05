'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="md:col-span-2"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 flex items-center justify-center">
                <img 
                  src="/logo.png" 
                  alt="S.INNOVATION Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="font-bold text-2xl">S.INNOVATION</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
              Solutions numériques responsables depuis plus de 5 ans. Nous accompagnons nos clients 
              dans leur transformation digitale avec des solutions sur mesure et durables.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-6">Liens Rapides</h3>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => {
                    const element = document.getElementById('home')
                    if (element) element.scrollIntoView({ behavior: 'smooth' })
                  }}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Accueil
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    const element = document.getElementById('services')
                    if (element) element.scrollIntoView({ behavior: 'smooth' })
                  }}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    const element = document.getElementById('about')
                    if (element) element.scrollIntoView({ behavior: 'smooth' })
                  }}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  À Propos
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    const element = document.getElementById('contact')
                    if (element) element.scrollIntoView({ behavior: 'smooth' })
                  }}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-6">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-primary-400 mt-1" />
                <div>
                  <p className="text-gray-300">contact@sinnov.info</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-primary-400 mt-1" />
                <div>
                  <p className="text-gray-300">+261 38 06 654 18 | +7 901 739 62 33</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary-400 mt-1" />
                <div>
                  <p className="text-gray-300">Équipe internationale</p>
                  <p className="text-gray-400 text-sm">Madagascar, France, Inde, Russie</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} S.INNOVATION. Tous droits réservés.
          </p>
          <button
            onClick={scrollToTop}
            className="mt-4 md:mt-0 text-primary-400 hover:text-primary-300 transition-colors text-sm"
          >
            Retour en haut ↑
          </button>
        </motion.div>
      </div>
    </footer>
  )
}
