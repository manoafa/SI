'use client'

import { motion } from 'framer-motion'
import { Code, GraduationCap, Briefcase, Smartphone, Globe, Users, Palette, Database } from 'lucide-react'

const services = [
  {
    icon: Code,
    title: "Conception et Développement",
    subtitle: "Web & Applications",
    description: "Création d'applications web et mobiles sur mesure, utilisant les dernières technologies pour des solutions performantes et évolutives.",
    features: ["Applications Web Responsives", "Applications Mobiles", "Architecture Scalable", "Intégration API"],
    color: "from-secondary-500 to-accent-500"
  },
  {
    icon: GraduationCap,
    title: "Formation",
    subtitle: "Programmation & Développement Personnel",
    description: "Formations personnalisées en programmation et développement personnel pour renforcer les compétences de vos équipes.",
    features: ["Formation Programmation", "Développement Personnel", "Mentoring Technique", "Certification"],
    color: "from-primary-600 to-secondary-600"
  },
  {
    icon: Briefcase,
    title: "Consultation d'Entreprise",
    subtitle: "Transformation Digitale",
    description: "Accompagnement stratégique pour votre transformation digitale avec une approche personnalisée et des solutions durables.",
    features: ["Audit Technologique", "Stratégie Digitale", "Optimisation Processus", "Accompagnement Changement"],
    color: "from-accent-500 to-secondary-600"
  }
]

const technologies = [
  { icon: Smartphone, name: "Mobile" },
  { icon: Globe, name: "Web" },
  { icon: Database, name: "Backend" },
  { icon: Palette, name: "Design" },
  { icon: Users, name: "Collaboration" },
  { icon: Code, name: "Code Quality" }
]

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-gray-50">
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
            Nos <span className="text-gradient">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Des solutions complètes pour transformer vos idées en réalité digitale
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20 text-justify">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="card p-8 h-full">
                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-primary-600 font-semibold mb-4">
                  {service.subtitle}
                </p>
                <p className="text-gray-600 mb-6">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-primary-600 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Technologies */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-8">
            Technologies & Expertises
          </h3>
          <div className="flex flex-wrap justify-center gap-8">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col items-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <tech.icon className="w-12 h-12 text-primary-600 mb-3" />
                <span className="font-semibold text-gray-900">{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <button
            onClick={() => {
              const element = document.getElementById('contact')
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' })
              }
            }}
            className="btn-primary text-lg px-8 py-4"
          >
            Discuter de votre Projet
          </button>
        </motion.div>
      </div>
    </section>
  )
}
