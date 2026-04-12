'use client'

import { useEffect, useMemo, useState, type ReactNode } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLanguage } from '@/context/LanguageContext'
import {
  Rocket,
  Users,
  Code,
  GraduationCap,
  Search,
  Palette,
  Wrench,
  Headphones,
  X,
  Crown,
  TrendingUp,
  MessageCircle,
  UserCheck,
  RefreshCw,
  ShieldAlert,
  Briefcase,
  type LucideIcon,
} from 'lucide-react'

type ModalType = 'web' | 'training' | null

function ModalIconCard({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      className={`touch-manipulation select-none cursor-pointer rounded-xl border border-gray-100 bg-gray-50 p-4 flex flex-col items-center text-center dark:border-gray-800 dark:bg-gray-800/50 ${className}`}
      whileHover={{
        y: -6,
        scale: 1.03,
        boxShadow: '0 14px 28px -10px rgba(0, 0, 0, 0.14)',
        transition: { type: 'spring', stiffness: 400, damping: 22 },
      }}
      whileTap={{
        rotate: [0, -4, 4, -3, 3, -2, 2, 0],
        scale: [1, 1.04, 0.98, 1.01, 1],
        transition: { duration: 0.45, ease: 'easeInOut' },
      }}
    >
      {children}
    </motion.div>
  )
}

export default function ServicesSection() {
  const { t } = useLanguage()
  const [activeModal, setActiveModal] = useState<ModalType>(null)

  const paths = useMemo(
    () => [
      {
        icon: Rocket,
        title: t('services.path1.title'),
        description: t('services.path1.description'),
        features: [t('services.path1.f1'), t('services.path1.f2'), t('services.path1.f3')],
        lead: t('services.path1.lead'),
        cta: t('services.path1.cta'),
        modal: 'web' as const,
        color: 'from-secondary-500 to-accent-500',
      },
      {
        icon: Users,
        title: t('services.path2.title'),
        description: t('services.path2.description'),
        features: [t('services.path2.f1'), t('services.path2.f2'), t('services.path2.f3')],
        lead: t('services.path2.lead'),
        cta: t('services.path2.cta'),
        modal: 'training' as const,
        color: 'from-primary-600 to-secondary-600',
      },
    ],
    [t],
  )

  const webHighlights = useMemo(
    () => [t('services.modal.web.h1'), t('services.modal.web.h2'), t('services.modal.web.h3')],
    [t],
  )

  const processSteps = useMemo(
    () => [
      { icon: Search, title: t('services.modal.web.p1') },
      { icon: Palette, title: t('services.modal.web.p2') },
      { icon: Wrench, title: t('services.modal.web.p3') },
      { icon: Headphones, title: t('services.modal.web.p4') },
    ],
    [t],
  )

  const trainingBullets = useMemo(
    () => [t('services.modal.training.b1'), t('services.modal.training.b2'), t('services.modal.training.b3')],
    [t],
  )

  const expertiseItems = useMemo(
    (): { icon: LucideIcon; label: string }[] => [
      { icon: Crown, label: t('services.modal.training.e1') },
      { icon: TrendingUp, label: t('services.modal.training.e2') },
      { icon: MessageCircle, label: t('services.modal.training.e3') },
      { icon: UserCheck, label: t('services.modal.training.e4') },
      { icon: RefreshCw, label: t('services.modal.training.e5') },
      { icon: ShieldAlert, label: t('services.modal.training.e6') },
      { icon: Briefcase, label: t('services.modal.training.e7') },
      { icon: Search, label: t('services.modal.training.e8') },
    ],
    [t],
  )

  const scrollToContact = () => {
    const el = document.getElementById('contact')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    if (!activeModal) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = prev
    }
  }, [activeModal])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActiveModal(null)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <section id="services" className="bg-gray-50 py-20 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="mb-6 text-4xl font-bold text-gray-900 dark:text-white md:text-5xl">
            {t('services.sectionTitle')} <span className="text-gradient">{t('services.sectionGradient')}</span>
          </h2>
          <p className="mx-auto max-w-3xl text-xl text-gray-600 dark:text-gray-300">
            {t('services.sectionSubtitle')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-12 text-left">
          {paths.map((path, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="card p-8 h-full flex flex-col">
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${path.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <path.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="mb-3 text-2xl font-bold text-gray-900 dark:text-white">{path.title}</h3>
                <p className="mb-6 leading-relaxed text-gray-600 dark:text-gray-300">{path.description}</p>
                <ul className="space-y-2 mb-8 flex-1">
                  {path.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start text-sm text-gray-600 dark:text-gray-300">
                      <div className="w-2 h-2 bg-primary-600 rounded-full mr-3 mt-1.5 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <p className="mb-4 text-sm font-medium text-primary-700 dark:text-primary-400">{path.lead}</p>
                <button
                  type="button"
                  onClick={() => setActiveModal(path.modal)}
                  className="w-full sm:w-auto btn-primary px-6 py-3 text-center"
                >
                  {path.cta}
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <button type="button" onClick={scrollToContact} className="btn-primary px-8 py-4 text-lg">
            {t('services.discussProject')}
          </button>
        </motion.div>
      </div>

      <AnimatePresence mode="wait">
        {activeModal && (
          <motion.div
            key={activeModal}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <button
              type="button"
              className="absolute inset-0 bg-black/50 backdrop-blur-[2px] cursor-default"
              aria-label={t('ui.closeDialog')}
              onClick={() => setActiveModal(null)}
            />
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby={activeModal === 'web' ? 'modal-web-title' : 'modal-training-title'}
              className="relative z-10 max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-2xl border border-gray-100 bg-white shadow-2xl dark:border-gray-800 dark:bg-gray-950"
              initial={{ opacity: 0, scale: 0.96, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              onClick={e => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setActiveModal(null)}
                className="absolute right-4 top-4 z-20 rounded-lg p-2 text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-800 dark:hover:text-white"
                aria-label={t('ui.ariaClose')}
              >
                <X className="w-6 h-6" />
              </button>

              {activeModal === 'web' ? (
                <>
                  <div className="p-8 md:p-10 pt-12 md:pt-10">
                    <div className="flex items-start gap-4 mb-6 pr-10">
                      <div className="w-14 h-14 bg-gradient-to-r from-secondary-500 to-accent-500 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Code className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <h3 id="modal-web-title" className="mb-2 text-2xl font-bold text-gray-900 dark:text-white md:text-3xl">
                          {t('services.modal.web.title')}
                        </h3>
                        <p className="font-semibold text-primary-600 dark:text-primary-400">{t('services.modal.web.subtitle')}</p>
                      </div>
                    </div>
                    <p className="mb-6 max-w-3xl leading-relaxed text-gray-600 dark:text-gray-300">
                      {t('services.modal.web.intro')}
                    </p>
                    <ul className="space-y-2 mb-10">
                      {webHighlights.map((item, i) => (
                        <li key={i} className="flex items-center text-gray-700 dark:text-gray-200">
                          <div className="w-2 h-2 bg-primary-600 rounded-full mr-3 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <h4 className="mb-6 text-xl font-bold text-gray-900 dark:text-white">{t('services.modal.web.processTitle')}</h4>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                      {processSteps.map((step, i) => (
                        <ModalIconCard key={i}>
                          <step.icon className="mb-3 h-8 w-8 shrink-0 text-primary-600 dark:text-primary-400" />
                          <span className="text-sm font-medium leading-snug text-gray-800 dark:text-gray-100">{step.title}</span>
                        </ModalIconCard>
                      ))}
                    </div>
                  </div>
                  <div className="px-8 md:px-10 pb-8 md:pb-10 -mt-2">
                    <button
                      type="button"
                      onClick={() => setActiveModal(null)}
                      className="btn-primary w-full rounded-lg py-3"
                    >
                      {t('services.modal.close')}
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <div className="p-8 md:p-10 pt-12 md:pt-10">
                    <div className="flex items-start gap-4 mb-6 pr-10">
                      <div className="w-14 h-14 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-xl flex items-center justify-center flex-shrink-0">
                        <GraduationCap className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <h3 id="modal-training-title" className="mb-2 text-2xl font-bold text-gray-900 dark:text-white md:text-3xl">
                          {t('services.modal.training.title')}
                        </h3>
                        <p className="font-semibold text-primary-600 dark:text-primary-400">{t('services.modal.training.subtitle')}</p>
                      </div>
                    </div>
                    <p className="mb-6 max-w-3xl leading-relaxed text-gray-600 dark:text-gray-300">
                      {t('services.modal.training.intro')}
                    </p>
                    <ul className="space-y-2 mb-10">
                      {trainingBullets.map((item, i) => (
                        <li key={i} className="flex items-center text-gray-700 dark:text-gray-200">
                          <div className="w-2 h-2 bg-primary-600 rounded-full mr-3 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <h4 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
                      {t('services.modal.training.expertiseTitle')}
                    </h4>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                      {expertiseItems.map((item, i) => (
                        <ModalIconCard key={i}>
                          <div className="mb-3 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary-500/15 to-secondary-500/20 dark:from-primary-500/25 dark:to-secondary-500/30">
                            <item.icon className="h-7 w-7 text-primary-600 dark:text-primary-400" aria-hidden />
                          </div>
                          <span className="text-sm font-medium leading-snug text-gray-800 dark:text-gray-100">{item.label}</span>
                        </ModalIconCard>
                      ))}
                    </div>
                  </div>
                  <div className="px-8 md:px-10 pb-8 md:pb-10 -mt-2">
                    <button
                      type="button"
                      onClick={() => setActiveModal(null)}
                      className="btn-primary w-full rounded-lg py-3"
                    >
                      {t('services.modal.close')}
                    </button>
                  </div>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
