'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, X } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'

type LegalModal = 'privacy' | 'terms' | null

export default function Footer() {
  const { t } = useLanguage()
  const [legalModal, setLegalModal] = useState<LegalModal>(null)

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  useEffect(() => {
    if (!legalModal) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLegalModal(null)
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = prev
      window.removeEventListener('keydown', onKey)
    }
  }, [legalModal])

  return (
    <footer className="bg-gray-900 text-white dark:bg-black">
      <div className="container mx-auto px-4 py-10 md:py-12">
        <div className="grid gap-6 md:grid-cols-4 md:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="md:col-span-2"
          >
            <div className="mb-4 flex items-center space-x-3">
              <div className="w-12 h-12 flex items-center justify-center">
                <img src="/logo.png" alt={t('header.logoAlt')} className="h-full w-full object-contain" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-2xl">{t('header.brand')}</span>
                <div className="text-xs font-medium tracking-wider uppercase text-secondary-400">{t('footer.tagline')}</div>
              </div>
            </div>
            <p className="mb-4 max-w-md leading-relaxed text-gray-300">{t('footer.blurb')}</p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors"
                aria-label={t('footer.aria.linkedin')}
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors"
                aria-label={t('footer.aria.twitter')}
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors"
                aria-label={t('footer.aria.facebook')}
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="mb-4 text-lg font-semibold">{t('footer.quickLinks')}</h3>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => {
                    const element = document.getElementById('home')
                    if (element) element.scrollIntoView({ behavior: 'smooth' })
                  }}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {t('nav.home')}
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
                  {t('nav.services')}
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
                  {t('nav.about')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    const element = document.getElementById('clients')
                    if (element) element.scrollIntoView({ behavior: 'smooth' })
                  }}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {t('nav.clients')}
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
                  {t('nav.contact')}
                </button>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="mb-4 text-lg font-semibold">{t('footer.contactTitle')}</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-primary-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">contact@sinnov.info</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-primary-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">{t('footer.phone')}</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">{t('footer.intlTeam')}</p>
                  <p className="text-sm text-gray-400">{t('footer.locations')}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-8 flex flex-col items-stretch justify-between gap-4 border-t border-gray-800 pt-6 sm:flex-row sm:items-center"
        >
          <p className="text-center text-sm text-gray-400 sm:text-left">
            {t('footer.copyright').replace('{year}', String(new Date().getFullYear()))}
          </p>
          <div className="flex flex-wrap items-center justify-end gap-x-4 gap-y-2">
            <button
              type="button"
              onClick={() => setLegalModal('privacy')}
              className="text-xs text-gray-400 underline-offset-2 transition-colors hover:text-white hover:underline"
            >
              {t('footer.privacy')}
            </button>
            <button
              type="button"
              onClick={() => setLegalModal('terms')}
              className="text-xs text-gray-400 underline-offset-2 transition-colors hover:text-white hover:underline"
            >
              {t('footer.terms')}
            </button>
            <button
              type="button"
              onClick={scrollToTop}
              className="text-sm text-primary-400 transition-colors hover:text-primary-300"
            >
              {t('footer.backToTop')}
            </button>
          </div>
        </motion.div>
      </div>

      <AnimatePresence>
        {legalModal && (
          <motion.div
            key={legalModal}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <button
              type="button"
              className="absolute inset-0 cursor-default bg-black/50 backdrop-blur-[2px]"
              aria-label={t('ui.closeDialog')}
              onClick={() => setLegalModal(null)}
            />
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby={legalModal === 'privacy' ? 'legal-privacy-title' : 'legal-terms-title'}
              className="relative z-10 flex max-h-[90vh] w-full max-w-2xl flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-2xl dark:border-gray-800 dark:bg-gray-950"
              initial={{ opacity: 0, scale: 0.96, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98, y: 8 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              onClick={e => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setLegalModal(null)}
                className="absolute right-3 top-3 z-20 rounded-lg p-2 text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-800 dark:hover:text-white"
                aria-label={t('ui.ariaClose')}
              >
                <X className="h-5 w-5" />
              </button>

              <div className="overflow-y-auto px-6 pb-4 pt-12 sm:px-8 sm:pt-10">
                {legalModal === 'privacy' ? (
                  <LegalPrivacyContent />
                ) : (
                  <LegalTermsContent />
                )}
              </div>

              <div className="border-t border-gray-100 px-6 py-4 dark:border-gray-800 sm:px-8">
                <button
                  type="button"
                  onClick={() => setLegalModal(null)}
                  className="btn-primary w-full rounded-lg py-2.5 text-sm"
                >
                  {t('services.modal.close')}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </footer>
  )
}

function legalDateLocale(language: string) {
  if (language === 'fr') return 'fr-FR'
  if (language === 'ko') return 'ko-KR'
  if (language === 'ru') return 'ru-RU'
  if (language === 'mg') return 'fr-FR'
  return 'en-GB'
}

function LegalPrivacyContent() {
  const { t, language } = useLanguage()
  const dateLocale = legalDateLocale(language)
  const dateStr = new Date().toLocaleDateString(dateLocale, {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })

  return (
    <article className="text-sm text-gray-700 dark:text-gray-300">
      <h2 id="legal-privacy-title" className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
        {t('legal.privacy.title')}
      </h2>
      <p className="mb-4 text-gray-500 dark:text-gray-400">
        {t('legal.lastUpdated')}: {dateStr}
      </p>

      <section className="mb-6">
        <h3 className="mb-2 font-semibold text-gray-900 dark:text-white">{t('legal.privacy.s1h')}</h3>
        <p className="leading-relaxed">{t('legal.privacy.s1p')}</p>
      </section>

      <section className="mb-6">
        <h3 className="mb-2 font-semibold text-gray-900 dark:text-white">{t('legal.privacy.s2h')}</h3>
        <p className="mb-2 leading-relaxed">{t('legal.privacy.s2intro')}</p>
        <ul className="list-disc space-y-1 pl-5 leading-relaxed">
          <li>{t('legal.privacy.s2li1')}</li>
          <li>{t('legal.privacy.s2li2')}</li>
          <li>{t('legal.privacy.s2li3')}</li>
        </ul>
      </section>

      <section className="mb-6">
        <h3 className="mb-2 font-semibold text-gray-900 dark:text-white">{t('legal.privacy.s3h')}</h3>
        <p className="leading-relaxed">{t('legal.privacy.s3p')}</p>
      </section>

      <section className="mb-6">
        <h3 className="mb-2 font-semibold text-gray-900 dark:text-white">{t('legal.privacy.s4h')}</h3>
        <p className="leading-relaxed">{t('legal.privacy.s4p')}</p>
      </section>

      <section className="mb-6">
        <h3 className="mb-2 font-semibold text-gray-900 dark:text-white">{t('legal.privacy.s5h')}</h3>
        <p className="leading-relaxed">{t('legal.privacy.s5p')}</p>
      </section>

      <section>
        <h3 className="mb-2 font-semibold text-gray-900 dark:text-white">{t('legal.privacy.s6h')}</h3>
        <p className="leading-relaxed">
          {t('legal.privacy.s6p')}{' '}
          <span className="text-gray-900 dark:text-white">{t('legal.privacy.email')}</span>
        </p>
      </section>
    </article>
  )
}

function LegalTermsContent() {
  const { t, language } = useLanguage()
  const dateLocale = legalDateLocale(language)
  const dateStr = new Date().toLocaleDateString(dateLocale, {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })

  return (
    <article className="text-sm text-gray-700 dark:text-gray-300">
      <h2 id="legal-terms-title" className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
        {t('legal.terms.title')}
      </h2>
      <p className="mb-4 text-gray-500 dark:text-gray-400">
        {t('legal.lastUpdated')}: {dateStr}
      </p>

      <section className="mb-6">
        <h3 className="mb-2 font-semibold text-gray-900 dark:text-white">{t('legal.terms.s1h')}</h3>
        <p className="leading-relaxed">{t('legal.terms.s1p')}</p>
      </section>

      <section className="mb-6">
        <h3 className="mb-2 font-semibold text-gray-900 dark:text-white">{t('legal.terms.s2h')}</h3>
        <p className="leading-relaxed">{t('legal.terms.s2p')}</p>
      </section>

      <section className="mb-6">
        <h3 className="mb-2 font-semibold text-gray-900 dark:text-white">{t('legal.terms.s3h')}</h3>
        <p className="leading-relaxed">{t('legal.terms.s3p')}</p>
      </section>

      <section className="mb-6">
        <h3 className="mb-2 font-semibold text-gray-900 dark:text-white">{t('legal.terms.s4h')}</h3>
        <p className="leading-relaxed">{t('legal.terms.s4p')}</p>
      </section>

      <section className="mb-6">
        <h3 className="mb-2 font-semibold text-gray-900 dark:text-white">{t('legal.terms.s5h')}</h3>
        <p className="leading-relaxed">{t('legal.terms.s5p')}</p>
      </section>

      <section className="mb-6">
        <h3 className="mb-2 font-semibold text-gray-900 dark:text-white">{t('legal.terms.s6h')}</h3>
        <p className="leading-relaxed">{t('legal.terms.s6p')}</p>
      </section>

      <section>
        <h3 className="mb-2 font-semibold text-gray-900 dark:text-white">{t('legal.terms.s7h')}</h3>
        <p className="leading-relaxed">
          {t('legal.terms.s7p')}{' '}
          <span className="text-gray-900 dark:text-white">{t('legal.terms.email')}</span>
        </p>
      </section>
    </article>
  )
}
