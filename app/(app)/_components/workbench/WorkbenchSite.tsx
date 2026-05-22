import Image from 'next/image'
import { LanguageSwitcher } from '../ui/LanguageSwitcher'
import type { PortfolioData } from './getPortfolioData'

type Props = {
  data: PortfolioData
}

function formatCommitDate(value: string, locale: PortfolioData['locale']): string {
  const date = new Date(value)

  if (Number.isNaN(date.getTime())) {
    return value
  }

  return new Intl.DateTimeFormat(locale === 'pt' ? 'pt-BR' : 'en', {
    dateStyle: 'medium',
  }).format(date)
}

export function WorkbenchSite({ data }: Props) {
  const { locale, dict, hero, degrees, experiences, projects } = data

  return (
    <main className="site-workbench">
      <nav className="site-workbench__nav" aria-label="Workbench navigation">
        <a className="site-workbench__brand" href="#hero">Port Ago</a>
        <div className="site-workbench__nav-links">
          <a href="#degrees">{dict.nav.degrees}</a>
          <a href="#experiences">{dict.nav.experiences}</a>
          <a href="#projects">{dict.nav.projects}</a>
        </div>
        <div className="site-workbench__language">
          <LanguageSwitcher current={locale} />
        </div>
      </nav>

      <section id="hero" className="site-workbench__hero">
        <div className="site-workbench__photo-card">
          <Image src="/image.png" alt="Developer illustration" width={500} height={500} priority />
        </div>
        <div className="site-workbench__note">
          <p>{hero.role}</p>
          <h1>
            {dict.hero.greeting}
            <span>{hero.name}</span>
            {dict.hero.butCall}
            <span>{hero.nickname}</span>
          </h1>
          <p>{hero.subtitle}</p>
          <a href="#degrees">{hero.ctaLabel}</a>
        </div>
      </section>

      <section id="degrees" className="site-workbench__section">
        <h2>{dict.sections.degrees}</h2>
        <div className="site-workbench__pinboard">
          {degrees.map((degree) => (
            <article key={degree.id} className="site-workbench__card">
              <p>{degree.institution}</p>
              <h3>{degree.course}</h3>
              <p>{degree.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="experiences" className="site-workbench__section">
        <h2>{dict.sections.experiences}</h2>
        <div className="site-workbench__stack">
          {experiences.map((experience) => (
            <article key={experience.id} className="site-workbench__ticket">
              <header>
                <div>
                  <h3>{experience.companyName}</h3>
                  <p>{experience.companyDescription}</p>
                </div>
                {experience.duration && <time>{experience.duration}</time>}
              </header>
              {experience.position && <strong>{experience.position}</strong>}
              {experience.description && <p>{experience.description}</p>}
              {experience.tools && experience.tools.length > 0 && (
                <ul>
                  {experience.tools.map((tool) => (
                    <li key={tool}>{tool}</li>
                  ))}
                </ul>
              )}
            </article>
          ))}
        </div>
      </section>

      <section id="projects" className="site-workbench__section">
        <h2>{dict.sections.projects}</h2>
        <div className="site-workbench__project-grid">
          {projects.map((project) => (
            <article key={project.id} className="site-workbench__project">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              {project.tools && project.tools.length > 0 && (
                <ul>
                  {project.tools.map((tool) => (
                    <li key={tool}>{tool}</li>
                  ))}
                </ul>
              )}
              {project.latestCommit && (
                <div className="site-workbench__commit">
                  <span>{dict.projects.latestCommit}</span>
                  {project.latestCommit.status === 'available' ? (
                    <a
                      href={project.latestCommit.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${dict.projects.latestCommit}: ${project.latestCommit.message}`}
                    >
                      <strong>{project.latestCommit.shortSha}</strong>
                      <span>{project.latestCommit.message}</span>
                      <time dateTime={project.latestCommit.committedAt}>
                        {formatCommitDate(project.latestCommit.committedAt, locale)}
                      </time>
                    </a>
                  ) : (
                    <p title={project.latestCommit.reason}>{dict.projects.commitUnavailable}</p>
                  )}
                </div>
              )}
              <div className="site-workbench__project-actions">
                {project.isWorkInProgress && <span className="site-workbench__status">WIP</span>}
                {project.githubUrl && (
                  <a
                    className="site-workbench__project-button"
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub →
                  </a>
                )}
                {project.projectUrl && (
                  <a
                    className="site-workbench__project-button site-workbench__project-button--primary"
                    href={project.projectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live →
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}
