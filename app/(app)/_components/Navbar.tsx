'use client'

import { useEffect, useState } from 'react'

const NAV_SECTIONS = [
  { id: 'hero', label: 'Home' },
  { id: 'formation', label: 'Formação' },
  { id: 'experiences', label: 'Experiências' },
  { id: 'projects', label: 'Projetos' },
] as const

export function Navbar() {
  const [activeId, setActiveId] = useState<string>('hero')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActiveId(entry.target.id)
        }
      },
      { rootMargin: '-40% 0px -55% 0px' },
    )

    for (const { id } of NAV_SECTIONS) {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-bg/90 backdrop-blur-sm border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between h-14">
        <span className="text-sm font-bold text-purple-lightest tracking-widest uppercase select-none">
          Portfolio
        </span>
        <ul className="flex gap-6">
          {NAV_SECTIONS.map(({ id, label }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className={`text-xs font-bold uppercase tracking-widest transition-colors ${
                  activeId === id
                    ? 'text-purple-light'
                    : 'text-gray hover:text-text'
                }`}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
