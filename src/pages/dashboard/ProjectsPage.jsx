import { useState } from 'react'
import { Plus, Search, ArrowUpRight, Clock, CheckCircle, AlertCircle, Circle } from 'lucide-react'

const allProjects = [
  { id: 1, client: 'Solaris Energy', initials: 'SE', color: 'from-amber-400 to-orange-500', package: 'Brand Identity Package', amount: 1200, status: 'in_progress', milestone: 'Milestone 2 of 4', due: 'Apr 2, 2026', progress: 50 },
  { id: 2, client: 'Kente Digital', initials: 'KD', color: 'from-emerald-400 to-teal-600', package: 'Monthly Retainer', amount: 800, status: 'awaiting_review', milestone: 'Deliverable submitted', due: 'Ongoing', progress: 75 },
  { id: 3, client: 'LearnAfrica', initials: 'LA', color: 'from-blue-400 to-blue-600', package: 'Brand Audit', amount: 250, status: 'completed', milestone: 'All milestones complete', due: 'Mar 15, 2026', progress: 100 },
  { id: 4, client: 'Pula Fintech', initials: 'PF', color: 'from-purple-400 to-purple-700', package: 'Logo Design', amount: 350, status: 'new', milestone: 'Brief received', due: 'Apr 5, 2026', progress: 0 },
  { id: 5, client: 'Afrowave Music', initials: 'AM', color: 'from-rose-400 to-rose-700', package: 'Brand Identity Package', amount: 1200, status: 'completed', milestone: 'All milestones complete', due: 'Feb 28, 2026', progress: 100 },
  { id: 6, client: 'Nairobi Eats', initials: 'NE', color: 'from-green-400 to-emerald-600', package: 'Brand Audit', amount: 250, status: 'in_progress', milestone: 'Milestone 1 of 2', due: 'Apr 10, 2026', progress: 25 },
]

const statusConfig = {
  new: { label: 'New', color: 'bg-phos-100 text-phos-700', icon: Circle },
  in_progress: { label: 'In progress', color: 'bg-blue-100 text-blue-700', icon: Clock },
  awaiting_review: { label: 'Awaiting review', color: 'bg-amber-100 text-amber-700', icon: AlertCircle },
  completed: { label: 'Completed', color: 'bg-emerald-100 text-emerald-700', icon: CheckCircle },
}

const filters = ['All', 'New', 'In progress', 'Awaiting review', 'Completed']

export default function ProjectsPage() {
  const [search, setSearch] = useState('')
  const [filter, setFilter] = useState('All')
  const [selected, setSelected] = useState(null)

  const filtered = allProjects.filter(p => {
    const matchSearch = !search || p.client.toLowerCase().includes(search.toLowerCase()) || p.package.toLowerCase().includes(search.toLowerCase())
    const matchFilter = filter === 'All' || statusConfig[p.status].label === filter
    return matchSearch && matchFilter
  })

  const project = selected ? allProjects.find(p => p.id === selected) : null

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-xl font-bold text-ink-900">Projects</h1>
          <p className="text-sm text-ink-500">{allProjects.length} total · {allProjects.filter(p => p.status !== 'completed').length} active</p>
        </div>
        <button className="inline-flex items-center gap-2 px-4 py-2 bg-phos-600 hover:bg-phos-700 text-white text-sm font-semibold rounded-lg transition-colors">
          <Plus size={15} /> New project
        </button>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-2 mb-4">
        {filters.map(f => (
          <button key={f} onClick={() => setFilter(f)}
            className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-colors ${filter === f ? 'bg-ink-900 text-white' : 'bg-white border border-ink-200 text-ink-600 hover:border-ink-400'}`}>
            {f}
          </button>
        ))}
        <div className="relative ml-auto">
          <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-ink-400" />
          <input
            type="text" placeholder="Search projects..."
            value={search} onChange={e => setSearch(e.target.value)}
            className="pl-8 pr-3 py-1.5 border border-ink-200 rounded-full text-xs text-ink-700 focus:outline-none focus:border-phos-400 w-48"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {/* Project list */}
        <div className="xl:col-span-2 space-y-3">
          {filtered.map(p => {
            const status = statusConfig[p.status]
            const StatusIcon = status.icon
            return (
              <div key={p.id}
                onClick={() => setSelected(selected === p.id ? null : p.id)}
                className={`bg-white rounded-xl border-2 p-5 cursor-pointer transition-all ${selected === p.id ? 'border-phos-400' : 'border-ink-200 hover:border-ink-300'}`}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${p.color} flex items-center justify-center text-white font-bold text-sm shrink-0`}>
                    {p.initials}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <span className="font-semibold text-ink-900 text-sm">{p.client}</span>
                      <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${status.color} shrink-0 flex items-center gap-1`}>
                        <StatusIcon size={10} /> {status.label}
                      </span>
                    </div>
                    <p className="text-xs text-ink-500 mb-3">{p.package} · Due {p.due}</p>
                    <div className="flex items-center gap-3">
                      <div className="flex-1 bg-ink-100 rounded-full h-1.5">
                        <div className="bg-phos-500 h-1.5 rounded-full transition-all" style={{ width: `${p.progress}%` }} />
                      </div>
                      <span className="text-xs font-semibold text-ink-600 shrink-0">{p.progress}%</span>
                      <span className="text-sm font-bold text-ink-900 shrink-0">${p.amount.toLocaleString()}</span>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}

          {filtered.length === 0 && (
            <div className="bg-white rounded-xl border border-ink-200 p-12 text-center">
              <p className="text-ink-400 text-sm">No projects match your search.</p>
            </div>
          )}
        </div>

        {/* Project detail panel */}
        {project ? (
          <div className="bg-white rounded-xl border border-ink-200 p-6 h-fit sticky top-24">
            <div className="flex items-center gap-3 mb-6">
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${project.color} flex items-center justify-center text-white font-bold`}>
                {project.initials}
              </div>
              <div>
                <h3 className="font-bold text-ink-900">{project.client}</h3>
                <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${statusConfig[project.status].color}`}>
                  {statusConfig[project.status].label}
                </span>
              </div>
            </div>

            <div className="space-y-4 mb-6">
              {[
                { label: 'Package', value: project.package },
                { label: 'Value', value: `$${project.amount.toLocaleString()}` },
                { label: 'Due date', value: project.due },
                { label: 'Milestone', value: project.milestone },
              ].map(({ label, value }) => (
                <div key={label}>
                  <p className="text-xs text-ink-400 mb-0.5">{label}</p>
                  <p className="text-sm font-semibold text-ink-900">{value}</p>
                </div>
              ))}
            </div>

            <div className="mb-6">
              <p className="text-xs text-ink-400 mb-2">Progress</p>
              <div className="bg-ink-100 rounded-full h-2 mb-1">
                <div className="bg-phos-500 h-2 rounded-full" style={{ width: `${project.progress}%` }} />
              </div>
              <p className="text-xs text-ink-500">{project.progress}% complete</p>
            </div>

            <div className="space-y-2">
              <button className="w-full py-2 bg-phos-600 hover:bg-phos-700 text-white text-sm font-semibold rounded-lg transition-colors">
                View full project
              </button>
              <button className="w-full py-2 border border-ink-200 hover:bg-ink-50 text-ink-700 text-sm font-semibold rounded-lg transition-colors">
                Message client
              </button>
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-xl border border-dashed border-ink-200 p-6 flex items-center justify-center text-center h-48 sticky top-24">
            <p className="text-sm text-ink-400">Click a project to see details</p>
          </div>
        )}
      </div>
    </div>
  )
}
