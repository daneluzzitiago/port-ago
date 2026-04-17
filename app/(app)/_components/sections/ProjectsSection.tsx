import { getPayload } from 'payload'
import config from '@payload-config'
import type { Project } from '@/payload-types'
import { SectionWrapper } from '../ui/SectionWrapper'
import { ProjectCard } from '../ui/ProjectCard'

export async function ProjectsSection() {
  const payload = await getPayload({ config })
  const { docs: projects } = await payload.find({
    collection: 'projects',
    sort: 'order',
    limit: 100,
    pagination: false,
  })

  return (
    <SectionWrapper id="projects" title="Projetos" alternate>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {(projects as Project[]).map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </SectionWrapper>
  )
}
