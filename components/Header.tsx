'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { Menu, X, Sun, Moon, ChevronDown } from 'lucide-react'
import { useLanguage, type Language } from '@/context/LanguageContext'
import { useTheme } from '@/context/ThemeContext'

const LANGS: { code: Language; flag: string }[] = [
  { code: 'en', flag: './US.png' },
  { code: 'fr', flag: './FR.png' },
  { code: 'mg', flag: './MG.png' },
  { code: 'ko', flag: './KR.png' },
  { code: 'ru', flag: './RU.png' },
]

export default function Header() {
  const { t, language, setLanguage } = useLanguage()
  const { theme, toggleTheme } = useTheme()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [langOpen, setLangOpen] = useState(false)
  const langRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (!langOpen) return
    const close = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) setLangOpen(false)
    }
    document.addEventListener('mousedown', close)
    return () => document.removeEventListener('mousedown', close)
  }, [langOpen])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  const navMuted = isScrolled ? 'text-gray-700 dark:text-gray-200' : 'text-white'
  const navHover = 'hover:text-primary-600 dark:hover:text-secondary-400'

  const LangPicker = ({ compact }: { compact?: boolean }) => (
    <div className={`relative ${compact ? 'w-full' : ''}`} ref={compact ? undefined : langRef}>
      <button
        type="button"
        onClick={() => setLangOpen(o => !o)}
        className={`flex items-center gap-2 rounded-lg border border-transparent px-2 py-1.5 transition-colors ${
          isScrolled
            ? 'hover:bg-gray-100 dark:hover:bg-gray-800'
            : 'hover:bg-white/10'
        } ${navMuted}`}
        aria-expanded={langOpen}
        aria-haspopup="listbox"
        aria-label={t('ui.language')}
      >
        <Image
          src={LANGS.find(l => l.code === language)?.flag ?? '/flag/US.png'}
          alt=""
          width={22}
          height={16}
          className="rounded-sm object-cover"
        />
        <span className="text-sm font-medium uppercase">{language}</span>
        <ChevronDown className={`h-4 w-4 opacity-70 transition ${langOpen ? 'rotate-180' : ''}`} />
      </button>
      {langOpen && (
        <ul
          role="listbox"
          className={`absolute right-0 z-[60] mt-1 min-w-[11rem] rounded-lg border border-gray-200 bg-white py-1 shadow-lg dark:border-gray-700 dark:bg-gray-900 ${
            compact ? 'left-0 right-0' : ''
          }`}
        >
          {LANGS.map(({ code, flag }) => (
            <li key={code} role="option" aria-selected={language === code}>
              <button
                type="button"
                onClick={() => {
                  setLanguage(code)
                  setLangOpen(false)
                }}
                className={`flex w-full items-center gap-2 px-3 py-2 text-left text-sm hover:bg-gray-50 dark:hover:bg-gray-800 ${
                  language === code ? 'bg-primary-50 font-medium text-primary-700 dark:bg-primary-900/30 dark:text-primary-300' : 'text-gray-800 dark:text-gray-200'
                }`}
              >
                <Image src={flag} alt="" width={22} height={16} className="rounded-sm object-cover" />
                <span>{t(`lang.${code}`)}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg dark:bg-gray-950 dark:shadow-gray-900/40' : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-3">
          <div className="flex min-w-0 items-center space-x-3">
            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center">
              <img src="/logo.png" alt={t('header.logoAlt')} className="h-full w-full object-contain" />
            </div>
            <div className="flex min-w-0 flex-col">
              <span
                className={`truncate text-xl font-bold transition-colors duration-300 sm:text-2xl ${navMuted}`}
              >
                {t('header.brand')}
              </span>
              <div
                className={`hidden truncate text-[10px] font-medium uppercase tracking-wider transition-colors duration-300 sm:block ${
                  isScrolled ? 'text-secondary-600 dark:text-secondary-400' : 'text-secondary-300'
                }`}
              >
                {t('header.tagline')}
              </div>
            </div>
          </div>

          <div className="hidden items-center gap-4 md:flex">
            <button
              type="button"
              onClick={() => scrollToSection('home')}
              className={`transition-colors duration-300 ${navMuted} ${navHover}`}
            >
              {t('nav.home')}
            </button>
            <button
              type="button"
              onClick={() => scrollToSection('services')}
              className={`transition-colors duration-300 ${navMuted} ${navHover}`}
            >
              {t('nav.services')}
            </button>
            <button
              type="button"
              onClick={() => scrollToSection('about')}
              className={`transition-colors duration-300 ${navMuted} ${navHover}`}
            >
              {t('nav.about')}
            </button>
            <button
              type="button"
              onClick={() => scrollToSection('clients')}
              className={`transition-colors duration-300 ${navMuted} ${navHover}`}
            >
              {t('nav.clients')}
            </button>
            <LangPicker />
            <button
              type="button"
              onClick={toggleTheme}
              className={`rounded-lg p-2 transition-colors ${
                isScrolled ? 'hover:bg-gray-100 dark:hover:bg-gray-800' : 'hover:bg-white/10'
              } ${navMuted}`}
              aria-label={theme === 'dark' ? t('ui.lightMode') : t('ui.darkMode')}
            >
              {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            <button type="button" onClick={() => scrollToSection('contact')} className="btn-primary">
              {t('nav.contact')}
            </button>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <button
              type="button"
              onClick={toggleTheme}
              className={`rounded-lg p-2 ${navMuted}`}
              aria-label={theme === 'dark' ? t('ui.lightMode') : t('ui.darkMode')}
            >
              {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            <button
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`transition-colors duration-300 ${navMuted}`}
              aria-label={isMenuOpen ? t('header.menuClose') : t('header.menuOpen')}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="mt-4 rounded-lg bg-white py-4 shadow-lg dark:bg-gray-900 md:hidden">
            <div className="flex flex-col space-y-4 px-4">
              <button
                type="button"
                onClick={() => scrollToSection('home')}
                className="text-left text-gray-700 transition-colors duration-300 hover:text-primary-600 dark:text-gray-200 dark:hover:text-primary-400"
              >
                {t('nav.home')}
              </button>
              <button
                type="button"
                onClick={() => scrollToSection('services')}
                className="text-left text-gray-700 transition-colors duration-300 hover:text-primary-600 dark:text-gray-200 dark:hover:text-primary-400"
              >
                {t('nav.services')}
              </button>
              <button
                type="button"
                onClick={() => scrollToSection('about')}
                className="text-left text-gray-700 transition-colors duration-300 hover:text-primary-600 dark:text-gray-200 dark:hover:text-primary-400"
              >
                {t('nav.about')}
              </button>
              <button
                type="button"
                onClick={() => scrollToSection('clients')}
                className="text-left text-gray-700 transition-colors duration-300 hover:text-primary-600 dark:text-gray-200 dark:hover:text-primary-400"
              >
                {t('nav.clients')}
              </button>
              <div className="border-t border-gray-100 pt-2 dark:border-gray-800">
                <div ref={langRef} className="w-full">
                  <LangPicker compact />
                </div>
              </div>
              <button
                type="button"
                onClick={() => scrollToSection('contact')}
                className="btn-primary w-full text-center"
              >
                {t('nav.contact')}
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
