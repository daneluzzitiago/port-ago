import { getPayload } from 'payload'
import config from '@payload-config'
import type { Experience } from '@/payload-types'
import { SectionWrapper } from '../ui/SectionWrapper'
import { ExperienceCard } from '../ui/ExperienceCard'

export async function ExperiencesSection() {
  const payload = await getPayload({ config })
  const { docs } = await payload.find({
    collection: 'experiences',
    sort: 'order',
    limit: 100,
    pagination: false,
  })

  const experiences = [...(docs as Experience[])].reverse()

  return (
    <SectionWrapper id="experiences" title="Experiências">
      <div className="flex flex-col gap-4">
        {experiences.map((experience) => (
          <ExperienceCard key={experience.id} experience={experience} />
        ))}
      </div>
    </SectionWrapper>
  )
}
