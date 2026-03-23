const variants = {
  orange: 'bg-phos-100 text-phos-700 border border-phos-200',
  green: 'bg-emerald-50 text-emerald-700 border border-emerald-200',
  blue: 'bg-blue-50 text-blue-700 border border-blue-200',
  ink: 'bg-ink-100 text-ink-700 border border-ink-200',
  dark: 'bg-ink-900 text-white',
}

export default function Badge({ children, variant = 'orange', className = '' }) {
  return (
    <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold tracking-wide ${variants[variant]} ${className}`}>
      {children}
    </span>
  )
}
