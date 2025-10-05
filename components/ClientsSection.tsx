'use client'

import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

// Placeholder logos - vous pouvez remplacer par les vrais logos de vos clients
const clientLogos = [
  { name: "Client 1", logo: "🏢", sector: "Technologie" },
  { name: "Client 2", logo: "🏭", sector: "Industrie" },
  { name: "Client 3", logo: "🏥", sector: "Santé" },
  { name: "Client 4", logo: "🏦", sector: "Finance" },
  { name: "Client 5", logo: "🛒", sector: "E-commerce" },
  { name: "Client 6", logo: "🎓", sector: "Éducation" },
  { name: "Client 7", logo: "🚀", sector: "Startup" },
  { name: "Client 8", logo: "🏪", sector: "Retail" },
]

const testimonials = [
  {
    name: "Brunah Fabiola",
    position: "Fondatrice",
    company: "Tsiky Solidarite",
    content: "S.INNOVATION a transformé notre infrastructure digitale. Leur expertise et leur approche collaborative ont dépassé nos attentes.",
    rating: 5
  },
  {
    name: "Camille Ratsimbazafy",
    position: "CEO",
    company: "RMK",
    content: "Une équipe exceptionnelle qui comprend parfaitement les enjeux business. Leur solution mobile a révolutionné notre service client.",
    rating: 5
  },
  {
    name: "Misandratra",
    position: "Responsable Digital",
    company: "ISCAM",
    content: "Grâce à S.INNOVATION, nous avons modernisé notre plateforme e-learning. Résultats immédiats et équipe très professionnelle.",
    rating: 5
  }
]

export default function ClientsSection() {
  return (
    <section id="clients" className="py-20 bg-gray-50 text-center">
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
            Nos <span className="text-gradient">Clients</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Des entreprises de tous secteurs nous font confiance pour leurs projets digitaux
          </p>
        </motion.div>

        {/* Client Logos */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">
            Ils nous font confiance
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8">
            {clientLogos.map((client, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 h-24 flex flex-col items-center justify-center">
                  <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">
                    {client.logo}
                  </div>
                  <div className="text-xs text-gray-500 text-center">
                    <div className="font-semibold text-gray-700">{client.name}</div>
                    <div className="text-gray-400">{client.sector}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">
            Ce qu'ils disent de nous
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="card p-8 relative"
              >
                {/* Quote Icon */}
                <div className="absolute top-6 right-6">
                  <Quote className="w-8 h-8 text-primary-200" />
                </div>

                {/* Rating */}
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-gray-600 mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="border-t pt-4">
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.position}</div>
                  <div className="text-sm text-primary-600 font-medium">{testimonial.company}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { value: "100%", label: "Clients Satisfaits" },
            { value: "24/7", label: "Support Disponible" },
            { value: "5+", label: "Années d'Expérience" },
            { value: "50+", label: "Projets Réussis" }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
