type SectionWrapperProps = {
  id: string
  title?: string
  alternate?: boolean
  children: React.ReactNode
}

export function SectionWrapper({ id, title, alternate = false, children }: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={`min-h-screen px-4 sm:px-8 md:px-16 lg:px-32 py-24 ${alternate ? 'bg-bg-light' : 'bg-bg'}`}
    >
      {title && (
        <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-12">
          {title}
        </h2>
      )}
      {children}
    </section>
  )
}
