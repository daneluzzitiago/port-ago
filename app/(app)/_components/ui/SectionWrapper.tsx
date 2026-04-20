import { Container } from './Container'
import { Heading } from './Heading'

type SectionWrapperProps = {
  id: string
  title?: string
  fullWidthContent?: boolean
  children: React.ReactNode
}

export function SectionWrapper({
  id,
  title,
  fullWidthContent = false,
  children,
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className="scroll-mt-14 pb-16 bg-bg"
    >
      <Container className="pt-8">
        <hr className="section-divider" />
      </Container>
      {title && (
        <Container className="py-8">
          <Heading level={2} size="4xl">
            {title}
          </Heading>
        </Container>
      )}
      {fullWidthContent ? children : <Container>{children}</Container>}
    </section>
  )
}
