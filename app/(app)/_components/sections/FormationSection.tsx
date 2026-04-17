import { getPayload } from 'payload'
import config from '@payload-config'
import type { Degree } from '@/payload-types'
import { SectionWrapper } from '../ui/SectionWrapper'
import { DegreeCard } from '../ui/DegreeCard'

export async function FormationSection() {
  const payload = await getPayload({ config })
  const { docs: degrees } = await payload.find({
    collection: 'degrees',
    sort: 'order',
    limit: 100,
    pagination: false,
  })

  return (
    <SectionWrapper id="formation" title="Formação" alternate>
      <div className="flex flex-col sm:flex-row gap-6">
        {(degrees as Degree[]).map((degree) => (
          <DegreeCard key={degree.id} degree={degree} />
        ))}
      </div>
    </SectionWrapper>
  )
}
