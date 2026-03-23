import { Link } from 'react-router-dom'

const variants = {
  primary: 'bg-phos-600 hover:bg-phos-700 text-white shadow-sm hover:shadow-md',
  dark: 'bg-ink-900 hover:bg-ink-800 text-white shadow-sm hover:shadow-md',
  outline: 'border-2 border-ink-900 text-ink-900 hover:bg-ink-900 hover:text-white',
  ghost: 'text-ink-700 hover:text-ink-900 hover:bg-ink-100',
  white: 'bg-white text-ink-900 hover:bg-ink-50 shadow-sm',
}

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-5 py-2.5 text-sm',
  lg: 'px-6 py-3 text-base',
  xl: 'px-8 py-4 text-base',
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  to,
  className = '',
  ...props
}) {
  const base = `inline-flex items-center justify-center gap-2 font-semibold rounded-lg transition-all duration-200 ${variants[variant]} ${sizes[size]} ${className}`

  if (to) return <Link to={to} className={base} {...props}>{children}</Link>
  if (href) return <a href={href} className={base} {...props}>{children}</a>
  return <button className={base} {...props}>{children}</button>
}
