import type { Degree } from '@/payload-types'

type DegreeCardProps = {
  degree: Degree
}

export function DegreeCard({ degree }: DegreeCardProps) {
  return (
    <div className="flex-1 flex flex-col gap-2 p-6 rounded-xl border border-white/10 bg-white/5">
      <p className="text-xs font-bold text-accent uppercase tracking-widest">{degree.institution}</p>
      <h3 className="text-lg font-semibold text-white">{degree.course}</h3>
      <p className="text-sm text-gray leading-relaxed">{degree.description}</p>
    </div>
  )
}
