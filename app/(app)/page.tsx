import { Navbar } from './_components/Navbar'
import { HeroSection } from './_components/sections/HeroSection'
import { FormationSection } from './_components/sections/FormationSection'
import { ExperiencesSection } from './_components/sections/ExperiencesSection'
import { ProjectsSection } from './_components/sections/ProjectsSection'
import { getLocale } from './i18n/server'
import { getDict } from './i18n/dictionary'

export const dynamic = 'force-dynamic'

export default async function HomePage() {
  const locale = await getLocale()
  const dict = getDict(locale)
  return (
    <>
      <Navbar locale={locale} dict={dict} />
      <main>
        <HeroSection locale={locale} dict={dict} />
        <FormationSection locale={locale} title={dict.sections.degrees} />
        <ExperiencesSection locale={locale} title={dict.sections.experiences} />
        <ProjectsSection locale={locale} title={dict.sections.projects} />
      </main>
    </>
  )
}
