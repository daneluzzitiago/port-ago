import type { Experience } from '@/payload-types'
import { TagBadge } from './TagBadge'

type ExperienceCardProps = {
  experience: Experience
}

export function ExperienceCard({ experience }: ExperienceCardProps) {
  return (
    <div className="flex flex-col gap-3 p-6 rounded-xl border border-white/10 bg-white/5">
      <div className="flex flex-wrap items-start justify-between gap-2">
        <div>
          <h3 className="text-lg font-semibold text-white">{experience.position}</h3>
          <p className="text-sm font-medium text-accent">{experience.companyName}</p>
        </div>
        {experience.duration && (
          <span className="text-xs font-semibold text-gray uppercase tracking-wider shrink-0">
            {experience.duration}
          </span>
        )}
      </div>

      {experience.companyDescription && (
        <p className="text-sm text-gray-light leading-relaxed">{experience.companyDescription}</p>
      )}

      {experience.description && (
        <p className="text-sm text-gray leading-relaxed">{experience.description}</p>
      )}

      {experience.tools && experience.tools.length > 0 && (
        <div className="flex flex-wrap gap-2 pt-1">
          {experience.tools.map((tool) => (
            <TagBadge key={tool} label={tool} />
          ))}
        </div>
      )}
    </div>
  )
}
