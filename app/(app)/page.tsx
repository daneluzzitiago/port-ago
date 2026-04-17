import { Navbar } from './_components/Navbar'
import { HeroSection } from './_components/sections/HeroSection'
import { FormationSection } from './_components/sections/FormationSection'
import { ExperiencesSection } from './_components/sections/ExperiencesSection'
import { ProjectsSection } from './_components/sections/ProjectsSection'

export const dynamic = 'force-dynamic'

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <FormationSection />
        <ExperiencesSection />
        <ProjectsSection />
      </main>
    </>
  )
}
