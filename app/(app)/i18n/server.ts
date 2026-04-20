import { cookies } from 'next/headers'
import type { Locale } from './config'

export async function getLocale(): Promise<Locale> {
  const cookieStore = await cookies()
  const lang = cookieStore.get('lang')?.value
  return (lang === 'en' ? 'en' : 'pt') as Locale
}
