'use client'

import { useMemo } from 'react'
import { motion } from 'framer-motion'
import { Target, Globe, Zap, TrendingUp, Users, MapPin, Award, Clock } from 'lucide-react'
import Image from 'next/image'
import { useLanguage } from '@/context/LanguageContext'

export default function AboutSection() {
  const { t } = useLanguage()

  const stats = useMemo(
    () => [
      { icon: Clock, value: '2019', label: t('about.stat.established') },
      { icon: Users, value: '50+', label: t('about.stat.clients') },
      { icon: Award, value: '100+', label: t('about.stat.projects') },
      { icon: MapPin, value: '5', label: t('about.stat.countries') },
    ],
    [t],
  )

  const locations = useMemo(
    () => [
      { countryKey: 'about.country.MG' as const, flag: '/MG.png', code: 'MG' },
      { countryKey: 'about.country.FR' as const, flag: '/FR.png', code: 'FR' },
      { countryKey: 'about.country.IN' as const, flag: '/IN.png', code: 'IN' },
      { countryKey: 'about.country.RU' as const, flag: '/RU.png', code: 'RU' },
      { countryKey: 'about.country.KR' as const, flag: '/KR.png', code: 'KR' },
    ],
    [],
  )

  const whyChoose = useMemo(
    () => [
      { icon: Target, title: t('about.why1.title'), desc: t('about.why1.desc') },
      { icon: Globe, title: t('about.why2.title'), desc: t('about.why2.desc') },
      { icon: Zap, title: t('about.why3.title'), desc: t('about.why3.desc') },
      { icon: TrendingUp, title: t('about.why4.title'), desc: t('about.why4.desc') },
    ],
    [t],
  )

  return (
    <section id="about" className="bg-white py-20 dark:bg-gray-950">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="mb-6 text-4xl font-bold text-gray-900 dark:text-white md:text-5xl">
            {t('about.title')} <span className="text-gradient">{t('about.titleGradient')}</span>
          </h2>
          <p className="mx-auto max-w-3xl text-xl text-gray-600 dark:text-gray-300">{t('about.intro')}</p>
        </motion.div>

        <div className="mb-20 grid items-center gap-16 text-left lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="mb-6 text-3xl font-bold text-gray-900 dark:text-white">{t('about.whoTitle')}</h3>
            <p className="mb-6 text-lg leading-relaxed text-gray-600 dark:text-gray-300">{t('about.p1')}</p>
            <p className="mb-8 text-lg leading-relaxed text-gray-600 dark:text-gray-300">{t('about.p2')}</p>

            <div className="mb-8">
              <h4 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">{t('about.whereTitle')}</h4>
              <div className="flex flex-wrap gap-3">
                {locations.map((location, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 rounded-lg bg-gray-50 px-4 py-2 dark:bg-gray-900"
                  >
                    <div className="relative h-6 w-8">
                      <Image
                        src={location.flag}
                        alt=""
                        fill
                        className="rounded-sm object-cover"
                        onError={e => {
                          const target = e.target as HTMLImageElement
                          target.style.display = 'none'
                          const parent = target.parentElement
                          if (parent) {
                            parent.innerHTML = `<span class="text-2xl">${getFlagEmoji(location.code)}</span>`
                          }
                        }}
                      />
                    </div>
                    <span className="font-medium text-gray-700 dark:text-gray-200">{t(location.countryKey)}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

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
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary-100 dark:bg-primary-900/40">
                  <stat.icon className="h-6 w-6 text-primary-600 dark:text-primary-400" />
                </div>
                <div className="mb-2 text-3xl font-bold text-gray-900 dark:text-white">{stat.value}</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="mb-4 text-center text-3xl font-bold text-gray-900 dark:text-white">
            {t('about.whyTitle')}
          </h3>
          <p className="mx-auto mb-10 max-w-2xl text-center text-gray-600 dark:text-gray-300">
            {t('about.whyIntro')}
          </p>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {whyChoose.map((item, index) => (
              <div key={index} className="card p-6 text-center md:text-left">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-secondary-600 to-accent-600 md:mx-0">
                  <item.icon className="h-6 w-6 text-white" />
                </div>
                <h4 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">{item.title}</h4>
                <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function getFlagEmoji(countryCode: string): string {
  const flagEmojis: { [key: string]: string } = {
    MG: '🇲🇬',
    FR: '🇫🇷',
    IN: '🇮🇳',
    RU: '🇷🇺',
    KR: '🇰🇷',
  }
  return flagEmojis[countryCode] || '🏳️'
}
