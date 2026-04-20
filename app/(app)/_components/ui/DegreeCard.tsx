import type { Degree } from '@/payload-types'
import { Heading } from './Heading'
import { Text } from './Text'

type DegreeCardProps = {
  degree: Degree
}

export function DegreeCard({ degree }: DegreeCardProps) {
  return (
    <div className="flex-1 flex flex-col gap-2 py-2">
      <Text variant="caption" as="span">{degree.institution}</Text>
      <Heading level={3} size="2xl">{degree.course}</Heading>
      <Text size="sm" variant="muted" className="md:max-w-[80%]">{degree.description}</Text>
    </div>
  )
}
