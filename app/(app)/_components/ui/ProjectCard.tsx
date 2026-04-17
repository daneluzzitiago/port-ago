import type { Project } from '@/payload-types'
import { TagBadge } from './TagBadge'

type ProjectCardProps = {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="flex flex-col gap-4 p-6 rounded-xl border border-white/10 bg-white/5 h-full">
      <div className="flex items-start justify-between gap-2">
        <h3 className="text-lg font-semibold text-white">{project.title}</h3>
        {project.isWorkInProgress && (
          <span className="shrink-0 text-xs font-bold text-accent border border-accent/40 px-2 py-0.5 rounded-full">
            WIP
          </span>
        )}
      </div>

      <p className="text-sm text-gray leading-relaxed flex-1">{project.description}</p>

      {project.tools && project.tools.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {project.tools.map((tool) => (
            <TagBadge key={tool} label={tool} />
          ))}
        </div>
      )}

      {(project.githubUrl || project.projectUrl) && (
        <div className="flex gap-3 pt-1">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold text-purple-light uppercase tracking-widest hover:text-purple-lightest transition-colors"
            >
              GitHub →
            </a>
          )}
          {project.projectUrl && (
            <a
              href={project.projectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold text-accent uppercase tracking-widest hover:opacity-80 transition-opacity"
            >
              Live →
            </a>
          )}
        </div>
      )}
    </div>
  )
}
