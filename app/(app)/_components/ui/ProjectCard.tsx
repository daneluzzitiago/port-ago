import type { Project } from '@/payload-types'
import { Badge } from './Badge'
import { Heading } from './Heading'
import { Text } from './Text'
import { Link } from './Link'

type ProjectCardProps = {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="h-full flex flex-col gap-2 py-2">
      <div className="flex items-start justify-between gap-2">
        <Heading level={3} size="2xl">{project.title}</Heading>
        {project.isWorkInProgress && (
          <Badge label="WIP" variant="accent" size="sm" />
        )}
      </div>

      <Text size="sm" variant="muted" className="flex-1">{project.description}</Text>

      {project.tools && project.tools.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {project.tools.map((tool) => (
            <Badge key={tool} label={tool} className="!px-1 !py-0.5" />
          ))}
        </div>
      )}

      {(project.githubUrl || project.projectUrl) && (
        <div className="flex gap-3">
          {project.githubUrl && (
            <Link
              href={project.githubUrl}
              variant="nav"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-light hover:text-primary-lighter"
            >
              GitHub →
            </Link>
          )}
          {project.projectUrl && (
            <Link
              href={project.projectUrl}
              variant="accent"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live →
            </Link>
          )}
        </div>
      )}
    </div>
  )
}
