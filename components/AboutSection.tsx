'use client'

import { motion } from 'framer-motion'
import { Target, Eye, Users, MapPin, Award, Clock } from 'lucide-react'
import Image from 'next/image'

const stats = [
  { icon: Clock, value: "5+", label: "Années d'expérience" },
  { icon: Users, value: "50+", label: "Clients satisfaits" },
  { icon: Award, value: "100+", label: "Projets réalisés" },
  { icon: MapPin, value: "4", label: "Pays représentés" }
]

const locations = [
  { country: "Madagascar", flag: "/MG.png", code: "MG" },
  { country: "France", flag: "/FR.png", code: "FR" },
  { country: "Inde", flag: "/IN.png", code: "IN" },
  { country: "Russie", flag: "/RU.png", code: "RU" }
]

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            À Propos de <span className="text-gradient">S.INNOVATION</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Une équipe internationale passionnée par l'innovation et la transformation digitale
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20 text-justify">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Notre Histoire
            </h3>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Depuis plus de 5 ans, nous accompagnons nos clients dans leurs projets les plus ambitieux. 
              De la conception d'applications mobiles, le développement web, l'architecture, le marketing digital 
              ainsi que les formations, nous accompagnons nos clients dans toutes les étapes de leurs projets.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Notre équipe internationale, basée à Madagascar, en France, en Inde et en Russie, travaille en 
              étroite collaboration pour vous offrir des solutions sur mesure et efficaces. Notre entreprise 
              est en constante évolution pour mieux répondre à vos besoins.
            </p>

            {/* International Presence */}
            <div className="mb-8">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">Présence Internationale</h4>
              <div className="flex flex-wrap gap-3">
                {locations.map((location, index) => (
                  <div key={index} className="flex items-center space-x-3 bg-gray-50 px-4 py-2 rounded-lg">
                    <div className="w-8 h-6 relative">
                      <Image 
                        src={location.flag} 
                        alt={`Drapeau ${location.country}`}
                        fill
                        className="object-cover rounded-sm"
                        onError={(e) => {
                          // Fallback to emoji if image fails to load
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          const parent = target.parentElement;
                          if (parent) {
                            parent.innerHTML = `<span class="text-2xl">${getFlagEmoji(location.code)}</span>`;
                          }
                        }}
                      />
                    </div>
                    <span className="font-medium text-gray-700">{location.country}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Content - Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card p-6 text-center"
              >
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-6 h-6 text-primary-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="card p-8"
          >
                <div className="w-16 h-16 bg-gradient-to-r from-secondary-600 to-secondary-700 rounded-xl flex items-center justify-center mb-6">
              <Target className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Notre Mission</h3>
            <p className="text-gray-600 leading-relaxed text-justify">
              En tant que partenaire de confiance, nous accompagnons nos clients dans leur transformation digitale. 
              Forts de notre expertise, nous concevons des solutions sur mesure, alliant intelligence, sécurité et durabilité. 
              Notre approche personnalisée permet à nos clients d'optimiser leurs processus, d'améliorer leur efficacité 
              et de réduire leur impact environnemental.
            </p>
          </motion.div>

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="card p-8"
          >
            <div className="w-16 h-16 bg-gradient-to-r from-accent-600 to-accent-700 rounded-xl flex items-center justify-center mb-6">
              <Eye className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Notre Vision</h3>
            <p className="text-gray-600 leading-relaxed text-justify">
              Devenir le leader des solutions numériques responsables, en plaçant l'innovation au service d'un monde plus durable. 
              Nous aspirons à créer un écosystème technologique qui non seulement répond aux besoins actuels, mais qui prépare 
              l'avenir avec des solutions éthiques, durables et impactantes.
            </p>
          </motion.div>
        </div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-8">Nos Valeurs</h3>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { title: "Innovation", desc: "Toujours à la pointe de la technologie" },
              { title: "Qualité", desc: "Excellence dans chaque projet" },
              { title: "Collaboration", desc: "Travail d'équipe et partenariat" },
              { title: "Durabilité", desc: "Solutions responsables et éthiques" }
            ].map((value, index) => (
              <div key={index} className="p-6 bg-gray-50 rounded-xl">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{value.title}</h4>
                <p className="text-sm text-gray-600">{value.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// Helper function to get flag emoji as fallback
function getFlagEmoji(countryCode: string): string {
  const flagEmojis: { [key: string]: string } = {
    'MG': '🇲🇬',
    'FR': '🇫🇷',
    'IN': '🇮🇳',
    'RU': '🇷🇺'
  }
  return flagEmojis[countryCode] || '🏳️'
}