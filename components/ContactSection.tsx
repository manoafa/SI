'use client'

import { motion } from 'framer-motion'
import { useMemo, useState } from 'react'
import { Mail, MapPin, Send, CheckCircle, MessageCircle, Gift } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'

const WHATSAPP_URL = 'https://wa.me/261320444374'

export default function ContactSection() {
  const { t } = useLanguage()

  const contactInfo = useMemo(
    () => [
      {
        icon: Mail,
        title: t('contact.info.email.title'),
        value: 'contact@sinnov.info',
        description: t('contact.info.email.desc'),
        href: 'mailto:contact@sinnov.info',
      },
      {
        icon: MessageCircle,
        title: t('contact.info.phone.title'),
        value: '+261 32 04 443 74',
        description: t('contact.info.phone.desc'),
        href: WHATSAPP_URL,
      },
      {
        icon: MapPin,
        title: t('contact.info.offices.title'),
        value: t('contact.info.offices.value'),
        description: t('contact.info.offices.desc'),
        href: null as string | null,
      },
    ],
    [t],
  )

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: '',
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')

    try {
      const web3formsAccessKey = 'bb46c38e-f7f4-474a-892a-64ad9f17a1ef'
      const web3formsEndpoint = 'https://api.web3forms.com/submit'

      const formDataToSend = {
        access_key: web3formsAccessKey,
        name: formData.name,
        email: formData.email,
        company: formData.company || '',
        service: formData.service || '',
        message: formData.message,
        from_name: 'S.INNOVATION',
        subject: formData.company
          ? t('contact.formSubjectWithCompany')
              .replace('{name}', formData.name)
              .replace('{company}', formData.company)
          : t('contact.formSubject').replace('{name}', formData.name),
        reply_to: formData.email,
        website: 'S.INNOVATION',
      }

      const response = await fetch(web3formsEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formDataToSend),
      })

      const result = await response.json()

      if (response.ok && result.success) {
        setIsSubmitted(true)
        setFormData({ name: '', email: '', company: '', service: '', message: '' })
        setTimeout(() => setIsSubmitted(false), 5000)
      } else {
        throw new Error(result.message || t('contact.web3formsError'))
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : t('contact.error'))
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section id="contact" className="bg-white py-20 dark:bg-gray-950">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="mb-6 text-4xl font-bold text-gray-900 dark:text-white md:text-5xl">
            {t('contact.title')} <span className="text-gradient">{t('contact.titleGradient')}</span>
          </h2>
          <p className="mx-auto max-w-3xl text-xl text-gray-600 dark:text-gray-300">{t('contact.subtitle1')}</p>
          <p className="mx-auto mt-3 max-w-2xl text-lg text-gray-600 dark:text-gray-300">{t('contact.subtitle2')}</p>
        </motion.div>

        <div className="grid gap-16 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">{t('contact.getInTouch')}</h3>
            <p className="mb-8 leading-relaxed text-gray-600 dark:text-gray-300">{t('contact.getInTouchLead')}</p>

            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4 rounded-xl bg-gray-50 p-6 dark:bg-gray-900"
                >
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-secondary-100 dark:bg-secondary-900/40">
                    <info.icon className="h-6 w-6 text-secondary-600 dark:text-secondary-400" />
                  </div>
                  <div className="min-w-0 text-left">
                    <h4 className="mb-1 font-semibold text-gray-900 dark:text-white">{info.title}</h4>
                    {info.href ? (
                      <a
                        href={info.href}
                        target={info.href.startsWith('http') ? '_blank' : undefined}
                        rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="break-all font-medium text-gray-700 hover:text-primary-600 dark:text-gray-200 dark:hover:text-primary-400"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="font-medium text-gray-700 dark:text-gray-200">{info.value}</p>
                    )}
                    <p className="text-sm text-gray-500 dark:text-gray-400">{info.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mb-8 rounded-xl bg-gradient-to-r from-secondary-50 to-accent-50 p-6 dark:from-secondary-900/30 dark:to-accent-900/20">
              <div className="flex items-start gap-3">
                <Gift className="mt-0.5 h-6 w-6 flex-shrink-0 text-secondary-600 dark:text-secondary-400" />
                <div>
                  <h4 className="mb-2 font-semibold text-gray-900 dark:text-white">{t('contact.freeTitle')}</h4>
                  <p className="mb-3 text-sm text-gray-600 dark:text-gray-300">{t('contact.freeP1')}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{t('contact.freeP2')}</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="card p-8">
              <h3 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">{t('contact.formTitle')}</h3>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-8 text-center"
                >
                  <CheckCircle className="mx-auto mb-4 h-16 w-16 text-green-500" />
                  <h4 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">{t('contact.sentTitle')}</h4>
                  <p className="text-gray-600 dark:text-gray-300">{t('contact.sentBody')}</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {error && (
                    <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-red-700 dark:border-red-800 dark:bg-red-950/50 dark:text-red-300">
                      {error}
                    </div>
                  )}

                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
                        {t('contact.label.name')}
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 transition-colors focus:border-transparent focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-900 dark:text-white"
                        placeholder={t('contact.placeholder.name')}
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
                        {t('contact.label.email')}
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 transition-colors focus:border-transparent focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-900 dark:text-white"
                        placeholder={t('contact.placeholder.email')}
                      />
                    </div>
                  </div>

                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <label htmlFor="company" className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
                        {t('contact.label.company')}
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 transition-colors focus:border-transparent focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-900 dark:text-white"
                        placeholder={t('contact.placeholder.company')}
                      />
                    </div>
                    <div>
                      <label htmlFor="service" className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
                        {t('contact.label.service')}
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 transition-colors focus:border-transparent focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-900 dark:text-white"
                      >
                        <option value="">{t('contact.service.placeholder')}</option>
                        <option value="web">{t('contact.service.web')}</option>
                        <option value="training">{t('contact.service.training')}</option>
                        <option value="both">{t('contact.service.both')}</option>
                        <option value="other">{t('contact.service.other')}</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
                      {t('contact.label.message')}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full resize-none rounded-lg border border-gray-300 bg-white px-4 py-3 transition-colors focus:border-transparent focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-900 dark:text-white"
                      placeholder={t('contact.placeholder.message')}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="btn-primary flex w-full items-center justify-center space-x-2 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    {isLoading ? (
                      <>
                        <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
                        <span>{t('contact.sending')}</span>
                      </>
                    ) : (
                      <>
                        <Send className="h-5 w-5" />
                        <span>{t('contact.send')}</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
