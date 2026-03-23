import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import {
  BarChart3, Package, Users, MessageSquare, FileText,
  CreditCard, Eye, Settings, Bell, Plus, LogOut, Zap
} from 'lucide-react'
import { useAuth } from '../../context/AuthContext'

const navItems = [
  { icon: BarChart3, label: 'Overview', to: '/dashboard' },
  { icon: Package, label: 'Projects', to: '/dashboard/projects' },
  { icon: Users, label: 'Clients', to: '/dashboard/clients' },
  { icon: MessageSquare, label: 'Messages', to: '/dashboard/messages', badge: 3 },
  { icon: FileText, label: 'Contracts', to: '/dashboard/contracts' },
  { icon: CreditCard, label: 'Payments', to: '/dashboard/payments' },
  { icon: Eye, label: 'My storefront', to: '/dashboard/storefront' },
  { icon: Settings, label: 'Settings', to: '/dashboard/settings' },
]

export default function DashboardLayout() {
  const { user, profile, signOut } = useAuth()
  const navigate = useNavigate()

  const displayName = profile
    ? `${profile.first_name} ${profile.last_name}`
    : user?.user_metadata?.first_name
    ? `${user.user_metadata.first_name} ${user.user_metadata.last_name}`
    : 'Creator'

  const initials = displayName.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase()

  async function handleSignOut() {
    await signOut()
    navigate('/')
  }

  return (
    <div className="flex min-h-screen bg-ink-50">
      {/* Sidebar */}
      <aside className="hidden lg:flex flex-col w-60 bg-white border-r border-ink-100 fixed left-0 top-0 bottom-0 z-40">
        {/* Logo */}
        <div className="flex items-center gap-2.5 px-5 py-5 border-b border-ink-100">
          <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-phos-500 to-phos-700 flex items-center justify-center">
            <span className="text-white font-bold text-xs">P</span>
          </div>
          <span className="font-bold text-ink-900 tracking-tight">Phos <span className="text-phos-600">Creators</span></span>
        </div>

        {/* Creator profile */}
        <div className="px-5 py-4 border-b border-ink-100">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-phos-400 to-phos-700 flex items-center justify-center text-white font-bold text-sm shrink-0">
              {initials}
            </div>
            <div className="min-w-0">
              <div className="text-sm font-semibold text-ink-900 truncate">{displayName}</div>
              <div className="text-xs text-ink-500 truncate">
                {user?.email}
              </div>
            </div>
          </div>
        </div>

        {/* Nav */}
        <nav className="flex-1 px-3 py-4 space-y-0.5 overflow-y-auto">
          {navItems.map(({ icon: Icon, label, to, badge }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/dashboard'}
              className={({ isActive }) =>
                `w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-phos-50 text-phos-700'
                    : 'text-ink-600 hover:bg-ink-50 hover:text-ink-900'
                }`
              }
            >
              <Icon size={16} />
              <span className="flex-1">{label}</span>
              {badge && (
                <span className="w-5 h-5 bg-phos-600 text-white text-xs rounded-full flex items-center justify-center font-bold">
                  {badge}
                </span>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Upgrade nudge */}
        <div className="m-3 p-4 bg-phos-50 rounded-xl border border-phos-100">
          <div className="flex items-center gap-2 mb-2">
            <Zap size={14} className="text-phos-600" />
            <span className="text-xs font-bold text-phos-700">Upgrade to Pro</span>
          </div>
          <p className="text-xs text-ink-500 mb-3">Custom domain, advanced analytics, and lower fees.</p>
          <NavLink to="/pricing" className="block w-full py-1.5 bg-phos-600 text-white text-xs font-semibold rounded-lg hover:bg-phos-700 transition-colors text-center">
            See plans
          </NavLink>
        </div>

        {/* Sign out */}
        <div className="px-3 pb-4">
          <button
            onClick={handleSignOut}
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-ink-500 hover:bg-ink-50 hover:text-ink-900 transition-colors"
          >
            <LogOut size={16} />
            Sign out
          </button>
        </div>
      </aside>

      {/* Main */}
      <main className="flex-1 lg:ml-60 min-h-screen flex flex-col">
        {/* Top bar */}
        <div className="bg-white border-b border-ink-100 px-6 py-4 flex items-center justify-between sticky top-0 z-30">
          <div className="lg:hidden flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-phos-500 to-phos-700 flex items-center justify-center">
              <span className="text-white font-bold text-xs">P</span>
            </div>
            <span className="font-bold text-ink-900 text-sm">Phos Creators</span>
          </div>
          <div className="hidden lg:block" />
          <div className="flex items-center gap-3">
            <button className="relative p-2 text-ink-500 hover:text-ink-900 hover:bg-ink-100 rounded-lg transition-colors">
              <Bell size={18} />
              <span className="absolute top-1 right-1 w-2 h-2 bg-phos-500 rounded-full" />
            </button>
            <NavLink
              to="/dashboard/projects"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-phos-600 hover:bg-phos-700 text-white text-sm font-semibold rounded-lg transition-colors"
            >
              <Plus size={14} />
              New project
            </NavLink>
          </div>
        </div>

        {/* Page content */}
        <div className="flex-1">
          <Outlet />
        </div>
      </main>
    </div>
  )
}
