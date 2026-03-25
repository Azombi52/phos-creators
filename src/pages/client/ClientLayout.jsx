import { useState } from 'react'
import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import {
  LayoutDashboard, FolderOpen, MessageSquare, CreditCard,
  Settings, LogOut, Menu, X, Bell,
} from 'lucide-react'
import { useAuth } from '../../context/AuthContext'

const navItems = [
  { label: 'Overview',  to: '/client-dashboard',           icon: LayoutDashboard, end: true },
  { label: 'Projects',  to: '/client-dashboard/projects',  icon: FolderOpen },
  { label: 'Messages',  to: '/client-dashboard/messages',  icon: MessageSquare },
  { label: 'Payments',  to: '/client-dashboard/payments',  icon: CreditCard },
  { label: 'Settings',  to: '/client-dashboard/settings',  icon: Settings },
]

export default function ClientLayout() {
  const { user, profile, signOut } = useAuth()
  const navigate = useNavigate()
  const [sidebarOpen, setSidebarOpen] = useState(false)

  async function handleSignOut() {
    await signOut()
    navigate('/login')
  }

  const firstName = profile?.first_name || user?.user_metadata?.first_name || 'Client'
  const lastName  = profile?.last_name  || user?.user_metadata?.last_name  || ''
  const initials  = `${firstName[0] || ''}${lastName[0] || ''}`.toUpperCase() || 'C'

  return (
    <div className="min-h-screen bg-ink-50 flex">
      {/* Sidebar */}
      <aside className={`fixed inset-y-0 left-0 z-40 w-64 bg-ink-950 flex flex-col transition-transform duration-300 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 lg:static lg:flex`}>
        {/* Logo */}
        <div className="flex items-center gap-2.5 px-6 py-5 border-b border-ink-800">
          <div className="w-8 h-8 rounded-lg bg-phos-500 flex items-center justify-center shadow-sm">
            <span className="text-ink-950 font-bold text-sm">P</span>
          </div>
          <span className="font-bold text-white text-base tracking-tight">Phos <span className="text-phos-400">Creators</span></span>
        </div>

        {/* Nav */}
        <nav className="flex-1 px-3 py-5 space-y-1 overflow-y-auto">
          {navItems.map(({ label, to, icon: Icon, end }) => (
            <NavLink
              key={to} to={to} end={end}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-semibold transition-colors ${
                  isActive ? 'bg-phos-500 text-ink-950' : 'text-ink-300 hover:text-white hover:bg-ink-800'
                }`
              }
            >
              <Icon size={18} />
              {label}
            </NavLink>
          ))}
        </nav>

        {/* User + sign out */}
        <div className="px-3 py-4 border-t border-ink-800 space-y-1">
          <div className="flex items-center gap-3 px-3 py-2">
            <div className="w-8 h-8 rounded-full bg-phos-500 flex items-center justify-center text-ink-950 font-bold text-xs shrink-0">
              {initials}
            </div>
            <div className="min-w-0">
              <p className="text-white text-sm font-semibold truncate">{firstName} {lastName}</p>
              <p className="text-ink-400 text-xs truncate">{user?.email}</p>
            </div>
          </div>
          <button onClick={handleSignOut} className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-semibold text-ink-400 hover:text-white hover:bg-ink-800 transition-colors">
            <LogOut size={18} />
            Sign out
          </button>
        </div>
      </aside>

      {/* Overlay (mobile) */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-30 bg-black/50 lg:hidden" onClick={() => setSidebarOpen(false)} />
      )}

      {/* Main content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top bar */}
        <header className="bg-white border-b border-ink-100 px-6 py-4 flex items-center justify-between sticky top-0 z-20">
          <button onClick={() => setSidebarOpen(true)} className="lg:hidden p-2 -ml-2 rounded-lg text-ink-600 hover:bg-ink-50">
            <Menu size={20} />
          </button>
          <div className="flex items-center gap-3 ml-auto">
            <button className="relative p-2 rounded-lg text-ink-500 hover:bg-ink-50 transition-colors">
              <Bell size={18} />
            </button>
            <div className="w-8 h-8 rounded-full bg-phos-500 flex items-center justify-center text-ink-950 font-bold text-xs">
              {initials}
            </div>
          </div>
        </header>

        <main className="flex-1 p-6 overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
