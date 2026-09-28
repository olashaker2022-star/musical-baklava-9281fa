export function SampleBadge({ className = '' }: { className?: string }) {
  return (
    <span
      className={`inline-flex items-center rounded-full bg-hekaya-beige/70 px-2.5 py-0.5 text-[11px] font-medium text-hekaya-green-dark ${className}`}
    >
      محتوى تجريبي
    </span>
  )
}
