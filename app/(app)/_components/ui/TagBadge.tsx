type TagBadgeProps = {
  label: string
}

export function TagBadge({ label }: TagBadgeProps) {
  return (
    <span className="text-xs font-medium text-purple-light px-3 py-1 rounded-full border border-purple-light/30 bg-purple-light/10">
      {label}
    </span>
  )
}
