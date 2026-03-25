import { Briefcase, MessageSquare, Clock, CheckCircle } from 'lucide-react'
import { useAuth } from '../../context/AuthContext'

const stats = [
  { label: 'Active Projects', value: '2', icon: Briefcase, color: 'bg-phos-50 text-phos-600' },
  { label: 'Unread Messages', value: '3', icon: MessageSquare, color: 'bg-ink-50 text-ink-600' },
  { label: 'Pending Reviews', value: '1', icon: Clock, color: 'bg-amber-50 text-amber-600' },
  { label: 'Completed', value: '5', icon: CheckCircle, color: 'bg-green-50 text-green-600' },
]

const recentProjects = [
  { name: 'Brand Identity Package', creator: 'Amara D.', status: 'In Progress', due: 'Apr 2, 2026', progress: 60 },
  { name: 'Website Redesign', creator: 'Kofi M.', status: 'Review', due: 'Mar 28, 2026', progress: 90 },
  { name: 'Social Media Kit', creator: 'Zara O.', status: 'Completed', due: 'Mar 15, 2026', progress: 100 },
]

const statusColors = {
  'In Progress': 'bg-blue-100 text-blue-700',
  'Review': 'bg-amber-100 text-amber-700',
  'Completed': 'bg-green-100 text-green-700',
}

export default function ClientOverviewPage() {
  const { profile, user } = useAuth()
  const firstName = profile?.first_name || user?.user_metadata?.first_name || 'there'

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-ink-900">Welcome back, {firstName} 👋</h1>
        <p className="text-ink-500 text-sm mt-1">Here's what's happening with your projects.</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map(({ label, value, icon: Icon, color }) => (
          <div key={label} className="bg-white rounded-xl border border-ink-100 p-5">
            <div className={`w-10 h-10 rounded-lg ${color} flex items-center justify-center mb-3`}>
              <Icon size={20} />
            </div>
            <p className="text-2xl font-bold text-ink-900">{value}</p>
            <p className="text-xs text-ink-500 mt-0.5">{label}</p>
          </div>
        ))}
      </div>

      {/* Active Projects */}
      <div className="bg-white rounded-xl border border-ink-100">
        <div className="px-6 py-4 border-b border-ink-100">
          <h2 className="text-base font-semibold text-ink-900">Your Projects</h2>
        </div>
        <div className="divide-y divide-ink-100">
          {recentProjects.map(proj => (
            <div key={proj.name} className="px-6 py-4">
              <div className="flex items-start justify-between gap-4">
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-ink-900 truncate">{proj.name}</p>
                  <p className="text-xs text-ink-500 mt-0.5">Creator: {proj.creator} · Due {proj.due}</p>
                </div>
                <span className={`shrink-0 text-xs font-semibold px-2.5 py-1 rounded-full ${statusColors[proj.status]}`}>
                  {proj.status}
                </span>
              </div>
              <div className="mt-3">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs text-ink-400">Progress</span>
                  <span className="text-xs font-semibold text-ink-600">{proj.progress}%</span>
                </div>
                <div className="w-full bg-ink-100 rounded-full h-1.5">
                  <div className="bg-phos-500 h-1.5 rounded-full transition-all" style={{ width: `${proj.progress}%` }} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
