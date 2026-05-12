'use client'

import { useTransition } from 'react'
import { setLanguage } from '../../i18n/actions'
import type { Locale } from '../../i18n/config'

type Props = {
  current: Locale
}

export function LanguageSwitcher({ current }: Props) {
  const [isPending, startTransition] = useTransition()
  const next: Locale = current === 'pt' ? 'en' : 'pt'
  const label = current === 'pt' ? '🇧🇷' : '🇺🇸'

  return (
    <button
      onClick={() => startTransition(() => setLanguage(next))}
      disabled={isPending}
      aria-label={`Switch to ${next === 'pt' ? 'Português' : 'English'}`}
      className="text-sm sm:text-xl hover:scale-110 transition-transform duration-200 disabled:opacity-50 px-1.5 py-1 rounded-full bg-surface/70 border border-border hover:border-border-hover"
    >
      {label}
    </button>
  )
}
