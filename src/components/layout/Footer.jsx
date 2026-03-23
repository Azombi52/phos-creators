import { Link } from 'react-router-dom'
import { Twitter, Instagram, Linkedin, Youtube } from 'lucide-react'

const footerLinks = {
  Platform: [
    { label: 'How it works', href: '/how-it-works' },
    { label: 'Explore creators', href: '/explore' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Creator storefront', href: '/storefront' },
  ],
  Company: [
    { label: 'About us', href: '/about' },
    { label: 'Blog', href: '/blog' },
    { label: 'Careers', href: '/careers' },
    { label: 'Press', href: '/press' },
  ],
  Resources: [
    { label: 'Help center', href: '/help' },
    { label: 'Creator playbook', href: '/playbook' },
    { label: 'API docs', href: '/docs' },
    { label: 'Status', href: '/status' },
  ],
  Legal: [
    { label: 'Privacy policy', href: '/privacy' },
    { label: 'Terms of service', href: '/terms' },
    { label: 'Cookie policy', href: '/cookies' },
    { label: 'Trust & safety', href: '/trust' },
  ],
}

const socials = [
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Youtube, href: '#', label: 'YouTube' },
]

export default function Footer() {
  return (
    <footer className="bg-ink-950 text-ink-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top section */}
        <div className="py-16 grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-phos-500 to-phos-700 flex items-center justify-center">
                <span className="text-white font-bold text-sm">P</span>
              </div>
              <span className="font-bold text-white text-lg tracking-tight">
                Phos <span className="text-phos-400">Creators</span>
              </span>
            </Link>
            <p className="text-sm text-ink-400 leading-relaxed mb-6">
              The platform for African creators to build, sell, and scale their creative businesses globally.
            </p>
            <div className="flex items-center gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-ink-800 hover:bg-ink-700 flex items-center justify-center text-ink-400 hover:text-white transition-colors"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="lg:col-span-4 grid grid-cols-2 sm:grid-cols-4 gap-8">
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h4 className="text-white font-semibold text-sm mb-4">{category}</h4>
                <ul className="space-y-3">
                  {links.map(link => (
                    <li key={link.label}>
                      <Link
                        to={link.href}
                        className="text-sm text-ink-400 hover:text-white transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-ink-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-ink-500">
            © {new Date().getFullYear()} Phos Creators. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-sm text-ink-500">
            <span>Built for Africa.</span>
            <span className="text-phos-500">Designed for the world.</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
