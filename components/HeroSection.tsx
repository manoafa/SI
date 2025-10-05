'use client'

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { ArrowDown, Sparkles, Globe, Users } from 'lucide-react'
import { useEffect } from 'react'

export default function HeroSection() {
  const scrollToServices = () => {
    const element = document.getElementById('services')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  // Mouse position tracking
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  
  const springConfig = { damping: 25, stiffness: 150 }
  const x = useSpring(mouseX, springConfig)
  const y = useSpring(mouseY, springConfig)

  // Transform values for different parallax effects
  const x1 = useTransform(x, value => value * 0.5)
  const y1 = useTransform(y, value => value * 0.5)
  const x2 = useTransform(x, value => value * -0.3)
  const y2 = useTransform(y, value => value * -0.3)
  const x3 = useTransform(x, value => value * 0.4)
  const y3 = useTransform(y, value => value * 0.4)
  const x4 = useTransform(x, value => value * -0.6)
  const y4 = useTransform(y, value => value * -0.6)
  const x5 = useTransform(x, value => value * 0.2)
  const y5 = useTransform(y, value => value * 0.2)
  const x6 = useTransform(x, value => value * -0.4)
  const y6 = useTransform(y, value => value * -0.4)
  const x7 = useTransform(x, value => value * 0.7)
  const y7 = useTransform(y, value => value * 0.7)
  const x8 = useTransform(x, value => value * -0.5)
  const y8 = useTransform(y, value => value * -0.5)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      try {
        const heroSection = document.getElementById('hero-section')
        if (!heroSection) return
        
        const rect = heroSection.getBoundingClientRect()
        const centerX = rect.width / 2
        const centerY = rect.height / 2
        
        const deltaX = (e.clientX - rect.left - centerX) * 0.1
        const deltaY = (e.clientY - rect.top - centerY) * 0.1
        
        mouseX.set(deltaX)
        mouseY.set(deltaY)
      } catch (error) {
        console.warn('Mouse tracking error:', error)
      }
    }

    const heroSection = document.getElementById('hero-section')
    if (heroSection) {
      heroSection.addEventListener('mousemove', handleMouseMove)
      return () => {
        heroSection.removeEventListener('mousemove', handleMouseMove)
      }
    }
  }, [mouseX, mouseY])

  return (
    <section id="hero-section" className="relative min-h-screen gradient-bg overflow-hidden">
      {/* Background Animation Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full cursor-none"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{
            x: x1,
            y: y1,
          }}
        />
        <motion.div
          className="absolute top-40 right-20 w-16 h-16 bg-white/10 rounded-full cursor-none"
          animate={{
            y: [0, 20, 0],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{
            x: x2,
            y: y2,
          }}
        />
        <motion.div
          className="absolute bottom-40 left-20 w-12 h-12 bg-white/10 rounded-full cursor-none"
          animate={{
            y: [0, -15, 0],
            x: [0, 10, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{
            x: x3,
            y: y3,
          }}
        />
        
        {/* Additional floating circles for richer effect */}
        <motion.div
          className="absolute top-60 right-10 w-8 h-8 bg-secondary-400/20 rounded-full cursor-none"
          animate={{
            y: [0, -10, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{
            x: x4,
            y: y4,
          }}
        />
        
        <motion.div
          className="absolute bottom-60 right-40 w-14 h-14 bg-accent-400/15 rounded-full cursor-none"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{
            x: x5,
            y: y5,
          }}
        />
        
        <motion.div
          className="absolute top-32 left-1/2 w-6 h-6 bg-white/20 rounded-full cursor-none"
          animate={{
            y: [0, 15, 0],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{
            x: x6,
            y: y6,
          }}
        />

        {/* Gold accent circles */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-10 h-10 bg-secondary-500/25 rounded-full cursor-none"
          animate={{
            rotate: [0, 180, 360],
            scale: [0.8, 1.1, 0.8],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{
            x: x7,
            y: y7,
          }}
        />
        
        <motion.div
          className="absolute bottom-1/3 right-1/3 w-16 h-16 bg-accent-500/20 rounded-full cursor-none"
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{
            x: x8,
            y: y8,
          }}
        />
      </div>

      <div className="container mx-auto px-4 pt-32 pb-16 relative z-10">
        <div className="text-center">
          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6"
          >
            Solutions Numériques
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary-400 to-accent-400">
              Responsables
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            Depuis plus de 5 ans, nous accompagnons nos clients dans leurs projets les plus ambitieux. 
            De la conception au déploiement, nous créons des solutions sur mesure qui transforment votre vision en réalité.
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-8 mb-12"
          >
            <div className="flex items-center space-x-2 text-white">
              <Users className="w-6 h-6" />
              <span className="text-lg font-semibold">5+ Ans d'expérience</span>
            </div>
            <div className="flex items-center space-x-2 text-white">
              <Globe className="w-6 h-6" />
              <span className="text-lg font-semibold">Équipe Internationale</span>
            </div>
            <div className="flex items-center space-x-2 text-white">
              <Sparkles className="w-6 h-6" />
              <span className="text-lg font-semibold">Solutions Innovantes</span>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <button
              onClick={() => scrollToServices}
              className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Découvrir nos Services
            </button>
            <button
              onClick={() => {
                const element = document.getElementById('contact')
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' })
                }
              }}
              className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Demander un Devis
            </button>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-col items-center"
          >
            <span className="text-white/70 mb-2">Découvrez plus</span>
            <motion.button
              onClick={scrollToServices}
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-white hover:text-secondary-300 transition-colors duration-300"
            >
              <ArrowDown size={24} />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
