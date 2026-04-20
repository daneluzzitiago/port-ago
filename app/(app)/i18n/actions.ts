'use server'

import { cookies } from 'next/headers'
import { revalidatePath } from 'next/cache'
import { type Locale, locales } from './config'

export async function setLanguage(locale: Locale) {
  if (!locales.includes(locale)) return

  const cookieStore = await cookies()
  cookieStore.set('lang', locale, {
    path: '/',
    maxAge: 60 * 60 * 24 * 365,
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
  })
  revalidatePath('/')
}
