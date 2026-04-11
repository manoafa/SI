'use client'

import { useEffect, useRef, useCallback, useState, useMemo } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'

const clients = [
  {
    name: 'Jacarandas Spices & Ingredients',
    href: 'https://jacarandas-si.com/',
    logo: '/client/Jacarandas-SI.svg',
  },
  {
    name: 'Futurmap',
    href: 'https://www.futurmap.com/',
    logo: '/client/Futurmap.png',
  },
  {
    name: 'be ys Outsourcing Services',
    href: 'https://www.be-ys-outsourcing-services.com/',
    logo: '/client/be-ys.png',
  },
  {
    name: 'GEOMAP',
    href: 'https://www.geomap.mg/',
    logo: '/client/geomap.png',
  },
  {
    name: 'ISCAM Business School',
    href: 'https://www.iscam.mg/',
    logo: '/client/iscam.png',
  },
  {
    name: 'FMFP',
    href: 'https://www.fmfp.mg/',
    logo: '/client/fmfp.jpg',
  },
  {
    name: 'OMNIS',
    href: 'https://omnis.mg/',
    logo: '/client/OMNIS.png',
  },
  {
    name: 'Tsiky Solidarité',
    href: 'https://tsikysolidarite.org/',
    logo: '/client/TsikySolidarite.png',
  },
  {
    name: 'Rebuild & Restore Madagascar',
    href: 'https://rnr.mg/',
    logo: '/client/RnR.png',
  },
  {
    name: 'Radio Madagasikara ho an’i Kristy',
    href: 'https://rmk.mg/',
    logo: '/client/RMK.png',
  },
] as const

const TESTIMONIAL_IDS = [1, 2, 3, 4] as const
type TestimonialId = (typeof TESTIMONIAL_IDS)[number]

const TESTIMONIAL_AUTO_MS = 2500

/** Time for one full pass over the first logo set (half of the track), looping infinitely. */
const MARQUEE_LOOP_MS = 30000

function TestimonialCard({ id, variant }: { id: TestimonialId; variant: 'center' | 'peek' }) {
  const { t } = useLanguage()
  const testimonial = {
    name: t(`testimonial.${id}.name`),
    position: t(`testimonial.${id}.position`),
    company: t(`testimonial.${id}.company`),
    content: t(`testimonial.${id}.content`),
    rating: 5,
  }
  const isPeek = variant === 'peek'
  return (
    <div
      className={`relative flex h-full flex-col rounded-xl border text-left transition ${
        isPeek
          ? 'border-gray-200 bg-white p-2 shadow sm:p-4 md:p-5 dark:border-gray-600 dark:bg-gray-800/95'
          : 'card border-gray-100 p-5 sm:p-8 md:p-10 dark:border-gray-800'
      }`}
    >
      <div className={`absolute right-3 top-3 sm:right-4 sm:top-4 md:top-5 md:right-5 ${isPeek ? 'opacity-50' : ''}`}>
        <Quote
          className={`${isPeek ? 'h-4 w-4 sm:h-6 sm:w-6' : 'h-8 w-8 sm:h-8 sm:w-8'} text-primary-200 dark:text-primary-700/45`}
        />
      </div>

      <div className={`mb-2 flex sm:mb-3 ${isPeek ? 'scale-90' : ''}`}>
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star
            key={i}
            className={`text-yellow-400 fill-current ${isPeek ? 'h-3 w-3 sm:h-4 sm:w-4' : 'h-4 w-4 sm:h-5 sm:w-5'}`}
          />
        ))}
      </div>

      <p
        className={`mb-3 leading-relaxed text-gray-600 dark:text-gray-200 sm:mb-5 ${
          isPeek
            ? 'line-clamp-3 text-[10px] sm:line-clamp-4 sm:text-xs md:text-sm'
            : 'text-[15px] leading-relaxed sm:text-base md:text-lg'
        }`}
      >
        &ldquo;{testimonial.content}&rdquo;
      </p>

      <div
        className={`mt-auto border-t border-gray-100 pt-2 dark:border-gray-700 sm:pt-4 ${isPeek ? 'text-[9px] sm:text-xs md:text-sm' : ''}`}
      >
        <div className={`font-semibold text-gray-900 dark:text-white ${isPeek ? 'line-clamp-1' : ''}`}>
          {testimonial.name}
        </div>
        <div
          className={`text-gray-500 dark:text-gray-400 ${isPeek ? 'line-clamp-1 text-[9px] sm:text-xs' : 'text-xs sm:text-sm'}`}
        >
          {testimonial.position}
        </div>
        <div
          className={`font-medium text-primary-600 dark:text-primary-400 ${isPeek ? 'line-clamp-1 text-[9px] sm:text-xs' : 'text-xs sm:text-sm'}`}
        >
          {testimonial.company}
        </div>
      </div>
    </div>
  )
}

function TestimonialsCarousel() {
  const { t } = useLanguage()
  const n = TESTIMONIAL_IDS.length
  const [index, setIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const trackRef = useRef<HTMLDivElement>(null)
  const dragStartX = useRef<number | null>(null)
  const dragPointerId = useRef<number | null>(null)

  useEffect(() => {
    if (isPaused) return
    const id = window.setInterval(() => {
      setIndex(i => (i + 1) % n)
    }, TESTIMONIAL_AUTO_MS)
    return () => window.clearInterval(id)
  }, [n, isPaused])

  const go = useCallback((delta: number) => setIndex(i => (i + delta + n * 10) % n), [n])

  useEffect(() => {
    const el = trackRef.current
    if (!el) return
    const onWheel = (e: WheelEvent) => {
      const absX = Math.abs(e.deltaX)
      const absY = Math.abs(e.deltaY)
      if (absX < 8 && absY < 8) return
      let handled = false
      if (absX >= absY) {
        if (e.deltaX > 12) {
          go(1)
          handled = true
        } else if (e.deltaX < -12) {
          go(-1)
          handled = true
        }
      } else {
        if (e.deltaY > 18) {
          go(1)
          handled = true
        } else if (e.deltaY < -18) {
          go(-1)
          handled = true
        }
      }
      if (handled) e.preventDefault()
    }
    el.addEventListener('wheel', onWheel, { passive: false })
    return () => el.removeEventListener('wheel', onWheel)
  }, [go])

  const prevIdx = (index - 1 + n) % n
  const nextIdx = (index + 1) % n

  const onTrackPointerDown = (e: React.PointerEvent) => {
    if (e.pointerType === 'mouse' && e.button !== 0) return
    const t = e.target as HTMLElement
    if (t.closest('button') || t.closest('a')) return
    dragStartX.current = e.clientX
    dragPointerId.current = e.pointerId
    e.currentTarget.setPointerCapture(e.pointerId)
  }

  const onTrackPointerUp = (e: React.PointerEvent) => {
    if (dragPointerId.current !== e.pointerId || dragStartX.current === null) return
    const dx = e.clientX - dragStartX.current
    dragStartX.current = null
    dragPointerId.current = null
    if (Math.abs(dx) > 45) {
      if (dx < 0) go(1)
      else go(-1)
    }
  }

  return (
    <div className="mx-auto max-w-6xl px-1">
      <div
        className="relative flex items-center justify-center"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <button
          type="button"
          onClick={() => go(-1)}
          className="absolute left-0 top-1/2 z-20 -translate-y-1/2 p-0.5 text-primary-600 transition hover:text-primary-800 sm:-left-1 sm:p-1 md:-left-2"
          aria-label={t('clients.carousel.prev')}
        >
          <ChevronLeft className="h-9 w-9 sm:h-12 sm:w-12 md:h-14 md:w-14" strokeWidth={2.25} />
        </button>
        <button
          type="button"
          onClick={() => go(1)}
          className="absolute right-0 top-1/2 z-20 -translate-y-1/2 p-0.5 text-primary-600 transition hover:text-primary-800 sm:-right-1 sm:p-1 md:-right-2"
          aria-label={t('clients.carousel.next')}
        >
          <ChevronRight className="h-9 w-9 sm:h-12 sm:w-12 md:h-14 md:w-14" strokeWidth={2.25} />
        </button>

        <div
          ref={trackRef}
          className="w-full cursor-grab touch-manipulation select-none active:cursor-grabbing"
          onPointerDown={onTrackPointerDown}
          onPointerUp={onTrackPointerUp}
          onPointerCancel={onTrackPointerUp}
          onLostPointerCapture={() => {
            dragStartX.current = null
            dragPointerId.current = null
          }}
        >
          {/* Mobile: one full-width card — no blurred side peeks */}
          <div className="relative z-10 min-h-[220px] w-full px-9 sm:hidden">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="h-full"
            >
              <TestimonialCard id={TESTIMONIAL_IDS[index]} variant="center" />
            </motion.div>
          </div>

          {/* sm+: three-column layout with blurred peek cards */}
          <div className="hidden w-full grid-cols-3 items-stretch gap-1 px-10 sm:grid sm:gap-3 sm:px-12 md:gap-4 md:px-14">
            <div className="relative min-h-[260px] min-w-0">
              <div className="pointer-events-none absolute inset-0 flex items-center justify-center px-0.5">
                <div className="w-full max-w-[200px] scale-90 opacity-60 blur-[2.5px] md:max-w-[240px]">
                  <TestimonialCard id={TESTIMONIAL_IDS[prevIdx]} variant="peek" />
                </div>
              </div>
            </div>

            <div className="relative z-10 min-h-[260px] min-w-0">
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 28 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="h-full"
              >
                <TestimonialCard id={TESTIMONIAL_IDS[index]} variant="center" />
              </motion.div>
            </div>

            <div className="relative min-h-[260px] min-w-0">
              <div className="pointer-events-none absolute inset-0 flex items-center justify-center px-0.5">
                <div className="w-full max-w-[200px] scale-90 opacity-60 blur-[2.5px] md:max-w-[240px]">
                  <TestimonialCard id={TESTIMONIAL_IDS[nextIdx]} variant="peek" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
        {TESTIMONIAL_IDS.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setIndex(i)}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === index ? 'w-8 bg-primary-600' : 'w-2 bg-gray-300 hover:bg-gray-400'
            }`}
            aria-label={t('clients.carousel.goTo').replace('{n}', String(i + 1))}
            aria-current={i === index}
          />
        ))}
      </div>
    </div>
  )
}

function ClientLogoMarquee() {
  const { t } = useLanguage()
  const scrollerRef = useRef<HTMLDivElement>(null)
  const isDraggingRef = useRef(false)
  const movedRef = useRef(false)
  const lastXRef = useRef(0)
  const rafRef = useRef<number>()
  const lastTickRef = useRef<number>(0)
  const isHoveredRef = useRef(false)

  /**
   * Two identical halves: scroll position is folded into [0, half) so moving left
   * from the visual start wraps to the end of the strip (infinite circle).
   */
  const applyScrollDelta = useCallback((el: HTMLDivElement, delta: number) => {
    const half = el.scrollWidth / 2
    if (half <= 1) return
    let pos = el.scrollLeft + delta
    while (pos >= half) pos -= half
    while (pos < 0) pos += half
    el.scrollLeft = pos
  }, [])

  const wrapScrollPosition = useCallback(() => {
    const el = scrollerRef.current
    if (!el) return
    applyScrollDelta(el, 0)
  }, [applyScrollDelta])

  useEffect(() => {
    lastTickRef.current = performance.now()
    const tick = (now: number) => {
      const el = scrollerRef.current
      if (el && !isDraggingRef.current && !isHoveredRef.current) {
        const half = el.scrollWidth / 2
        if (half > 1) {
          const dt = Math.min(now - lastTickRef.current, 32)
          lastTickRef.current = now
          const pxPerMs = half / MARQUEE_LOOP_MS
          applyScrollDelta(el, pxPerMs * dt)
        } else {
          lastTickRef.current = now
        }
      } else {
        lastTickRef.current = now
      }
      rafRef.current = requestAnimationFrame(tick)
    }
    rafRef.current = requestAnimationFrame(tick)
    return () => {
      if (rafRef.current != null) cancelAnimationFrame(rafRef.current)
    }
  }, [applyScrollDelta])

  const scrollByDirection = (direction: 'left' | 'right') => {
    const el = scrollerRef.current
    if (!el) return
    const step = Math.max(280, Math.floor(el.clientWidth * 0.7))
    const delta = direction === 'right' ? step : -step
    applyScrollDelta(el, delta)
  }

  const onPointerDown = (e: React.PointerEvent) => {
    const target = e.target as HTMLElement | null
    if (target?.closest('a[href]')) {
      return
    }
    isDraggingRef.current = true
    movedRef.current = false
    lastXRef.current = e.clientX
    e.currentTarget.setPointerCapture(e.pointerId)
  }

  const onPointerMove = (e: React.PointerEvent) => {
    if (!isDraggingRef.current) return
    const dx = e.clientX - lastXRef.current
    lastXRef.current = e.clientX
    if (Math.abs(dx) > 0.5) movedRef.current = true
    const el = scrollerRef.current
    if (el) {
      applyScrollDelta(el, -dx)
    }
  }

  const endDrag = () => {
    isDraggingRef.current = false
    wrapScrollPosition()
    window.setTimeout(() => {
      movedRef.current = false
    }, 0)
  }

  return (
    <div
      className="relative -mx-4 md:mx-0"
      onMouseEnter={() => {
        isHoveredRef.current = true
      }}
      onMouseLeave={() => {
        isHoveredRef.current = false
      }}
    >
      <div
        className="pointer-events-none absolute inset-y-0 left-0 z-[15] w-14 bg-gradient-to-r from-gray-50 to-transparent dark:from-gray-900 md:w-20"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 z-[15] w-14 bg-gradient-to-l from-gray-50 to-transparent dark:from-gray-900 md:w-20"
        aria-hidden
      />

      <button
        type="button"
        onClick={e => {
          e.preventDefault()
          e.stopPropagation()
          scrollByDirection('left')
        }}
        className="absolute left-0 top-1/2 z-30 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-700 shadow-md transition hover:border-primary-300 hover:bg-primary-50 hover:text-primary-700 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200 dark:hover:border-primary-500 dark:hover:bg-gray-700 dark:hover:text-primary-300 md:left-1 md:h-12 md:w-12"
      >
        <ChevronLeft className="h-6 w-6" strokeWidth={2} />
      </button>
      <button
        type="button"
        onClick={e => {
          e.preventDefault()
          e.stopPropagation()
          scrollByDirection('right')
        }}
        className="absolute right-0 top-1/2 z-30 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-700 shadow-md transition hover:border-primary-300 hover:bg-primary-50 hover:text-primary-700 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200 dark:hover:border-primary-500 dark:hover:bg-gray-700 dark:hover:text-primary-300 md:right-1 md:h-12 md:w-12"
      >
        <ChevronRight className="h-6 w-6" strokeWidth={2} />
      </button>

      <div
        ref={scrollerRef}
        className="scrollbar-hide cursor-grab touch-pan-x overflow-x-auto overflow-y-hidden px-12 active:cursor-grabbing md:px-14"
        style={{ WebkitOverflowScrolling: 'touch' }}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        onPointerLeave={e => {
          if (e.buttons === 0) endDrag()
        }}
        onClickCapture={e => {
          if (movedRef.current) {
            e.preventDefault()
            e.stopPropagation()
          }
        }}
        role="region"
      >
        <div className="flex w-max shrink-0 gap-8 py-3 md:gap-12">
          {[...clients, ...clients].map((client, i) => (
            <motion.a
              key={`${client.href}-${i}`}
              href={client.href}
              target="_blank"
              rel="noopener noreferrer"
              draggable={false}
              className="group flex shrink-0 items-center justify-center rounded-xl border border-gray-100 bg-white px-4 py-3 shadow-md transition-shadow duration-300 hover:border-primary-200 hover:shadow-lg dark:border-gray-700 dark:bg-gray-800/90"
              whileHover={{ scale: 1.06, y: -2 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 400, damping: 22 }}
            >
              <div className="relative h-12 w-36 md:h-14 md:w-40">
                <Image
                  src={client.logo}
                  alt={client.name}
                  fill
                  className="object-contain object-center pointer-events-none"
                  sizes="(max-width: 768px) 144px, 160px"
                  unoptimized={client.logo.endsWith('.svg')}
                />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function ClientsSection() {
  const { t } = useLanguage()

  const bottomStats = useMemo(
    () => [
      { value: '100%', label: t('clients.stat1') },
      { value: '24/7', label: t('clients.stat2') },
      { value: '2019', label: t('clients.stat3') },
      { value: '100+', label: t('clients.stat4') },
    ],
    [t],
  )

  return (
    <section id="clients" className="bg-gray-50 py-20 text-center dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="mb-6 text-4xl font-bold text-gray-900 dark:text-white md:text-5xl">
            {t('clients.title')} <span className="text-gradient">{t('clients.titleGradient')}</span>
          </h2>
          <p className="mx-auto max-w-3xl text-xl text-gray-600 dark:text-gray-300">{t('clients.intro')}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="mb-4 text-center text-2xl font-bold text-gray-900 dark:text-white">
            {t('clients.trustedTitle')}
          </h3>
          <ClientLogoMarquee />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="mb-4 text-center text-2xl font-bold text-gray-900 dark:text-white">
            {t('clients.testimonialsTitle')}
          </h3>
          <p className="mx-auto mb-10 max-w-xl text-sm text-gray-500 dark:text-gray-400">
            {t('clients.testimonialsSubtitle')}
          </p>
          <TestimonialsCarousel />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-2 gap-8 md:grid-cols-4"
        >
          {bottomStats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="mb-2 text-3xl font-bold text-primary-600 dark:text-primary-400 md:text-4xl">{stat.value}</div>
              <div className="text-gray-600 dark:text-gray-300">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
