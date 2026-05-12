import type { Experience } from '@/payload-types'
import { Badge } from './Badge'
import { Heading } from './Heading'
import { Text } from './Text'

type ExperienceCardProps = {
  experience: Experience
}

export function ExperienceCard({ experience }: ExperienceCardProps) {
  return (
    <div className="glass-panel w-full rounded-[var(--radius-xl)] border border-border p-6 transition-all duration-[var(--duration-normal)] hover:border-secondary/60 hover:shadow-lg">
      <div className="flex flex-wrap items-start justify-between gap-2">
        <div>
          <Heading level={3} size="2xl">{experience.companyName}</Heading>
          <Text as="span" size="sm" className="font-medium text-primary">{experience.companyDescription}</Text>
        </div>
        {experience.duration && (
          <Text as="span" variant="caption">{experience.duration}</Text>
        )}
      </div>

      <div className="flex flex-col gap-2 mt-2">
        {experience.position && (
          <Text size="sm" variant="strong" className="text-secondary">{experience.position}</Text>
        )}
        {experience.description && (
          <Text size="sm" variant="muted" className="md:max-w-[80%]">{experience.description}</Text>
        )}
      </div>

      {experience.tools && experience.tools.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-2">
          {experience.tools.map((tool) => (
             <Badge key={tool} label={tool} variant="secondary" className="!px-1 !py-0.5" />
          ))}
        </div>
      )}
    </div>
  )
}
