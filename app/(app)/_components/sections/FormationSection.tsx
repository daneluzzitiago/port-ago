import { getPayload } from 'payload'
import config from '@payload-config'
import type { Degree } from '@/payload-types'
import { SectionWrapper } from '../ui/SectionWrapper'
import { DegreeCard } from '../ui/DegreeCard'

type Props = { locale: string; title: string }

export async function FormationSection({ locale, title }: Props) {
  const payload = await getPayload({ config })
  const { docs: degrees } = await payload.find({
    collection: 'degrees',
    locale: locale as 'pt' | 'en',
    sort: 'order',
    limit: 100,
    pagination: false,
  })

  return (
    <SectionWrapper id="degrees" title={title}>
      <div className="flex flex-col sm:flex-row gap-6">
        {(degrees as Degree[]).map((degree) => (
          <DegreeCard key={degree.id} degree={degree} />
        ))}
      </div>
    </SectionWrapper>
  )
}
