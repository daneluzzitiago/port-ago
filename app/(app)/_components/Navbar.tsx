'use client'

import { clsx } from 'clsx'
import { useEffect, useState } from 'react'
import { Container } from './ui/Container'
import { Link } from './ui/Link'
import { LanguageSwitcher } from './ui/LanguageSwitcher'
import type { Locale } from '../i18n/config'
import type { getDict } from '../i18n/dictionary'

type NavbarProps = {
  locale: Locale
  dict: ReturnType<typeof getDict>
}

const NAV_IDS = ['hero', 'degrees', 'experiences', 'projects'] as const
const SCROLL_THRESHOLD = 16

export function Navbar({ locale, dict }: NavbarProps) {
  const [activeId, setActiveId] = useState<string>('hero')
  const [hasPassedScrollThreshold, setHasPassedScrollThreshold] = useState(false)

  const navSections = [
    { id: 'hero', label: dict.nav.home },
    { id: 'degrees', label: dict.nav.degrees },
    { id: 'experiences', label: dict.nav.experiences },
    { id: 'projects', label: dict.nav.projects },
  ] as const

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActiveId(entry.target.id)
        }
      },
      { rootMargin: '-40% 0px -55% 0px' },
    )

    for (const id of NAV_IDS) {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setHasPassedScrollThreshold(window.scrollY > SCROLL_THRESHOLD)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      data-scrolled={hasPassedScrollThreshold}
      className={clsx(
        'fixed top-0 left-0 right-0 z-50 border-b transition-all duration-300',
        hasPassedScrollThreshold
          ? 'bg-transparent border-transparent backdrop-blur-0'
          : 'bg-surface/90 border-border backdrop-blur-sm',
      )}
    >
      <Container className="flex items-center justify-between h-14">
        <span className="text-[0.6rem] sm:text-sm font-bold text-primary-lightest tracking-normal sm:tracking-widest uppercase select-none whitespace-nowrap">
          Port Ago <span className="animate-blink text-xs sm:text-base">{'>'}</span>
        </span>
        <ul className="flex items-center gap-1 sm:gap-6">
          {navSections.map(({ id, label }) => (
            <li key={id}>
              <Link href={`#${id}`} variant={activeId === id ? 'nav-active' : 'nav'}>
                {label}
              </Link>
            </li>
          ))}
        </ul>
        <LanguageSwitcher current={locale} />
      </Container>
    </nav>
  )
}
