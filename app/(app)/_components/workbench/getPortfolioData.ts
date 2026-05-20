import { getPayload } from 'payload'
import config from '@payload-config'
import type { Degree, Experience, Hero, Project } from '@/payload-types'
import type { Locale } from '../../i18n/config'
import { getDict } from '../../i18n/dictionary'

export type PortfolioData = {
  locale: Locale
  dict: ReturnType<typeof getDict>
  hero: Hero
  degrees: Degree[]
  experiences: Experience[]
  projects: Project[]
}

export async function getPortfolioData(locale: Locale): Promise<PortfolioData> {
  const payload = await getPayload({ config })
  const [hero, degreesResult, experiencesResult, projectsResult] = await Promise.all([
    payload.findGlobal({ slug: 'hero', locale }),
    payload.find({
      collection: 'degrees',
      locale,
      sort: 'order',
      limit: 100,
      pagination: false,
    }),
    payload.find({
      collection: 'experiences',
      locale,
      sort: 'order',
      limit: 100,
      pagination: false,
    }),
    payload.find({
      collection: 'projects',
      locale,
      sort: 'order',
      limit: 100,
      pagination: false,
    }),
  ])

  return {
    locale,
    dict: getDict(locale),
    hero: hero as Hero,
    degrees: degreesResult.docs as Degree[],
    experiences: [...(experiencesResult.docs as Experience[])].reverse(),
    projects: projectsResult.docs as Project[],
  }
}
