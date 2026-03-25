import { useState } from 'react'
import { FolderOpen, ChevronRight, X } from 'lucide-react'

const projects = [
  {
    id: 1, name: 'Brand Identity Package', creator: 'Amara Diallo', skill: 'Brand & Graphic Design',
    status: 'In Progress', budget: '$1,200', due: 'Apr 2, 2026', progress: 60,
    description: 'Complete brand identity including logo, colour palette, typography, and brand guidelines.',
    milestones: [
      { name: 'Discovery & Moodboard', done: true },
      { name: 'Logo Concepts (3 options)', done: true },
      { name: 'Logo Refinement', done: false },
      { name: 'Brand Guidelines Document', done: false },
    ],
  },
  {
    id: 2, name: 'Website Redesign', creator: 'Kofi Mensah', skill: 'Web Development',
    status: 'Review', budget: '$3,500', due: 'Mar 28, 2026', progress: 90,
    description: 'Full redesign and development of company website using React and Tailwind CSS.',
    milestones: [
      { name: 'Wireframes', done: true },
      { name: 'Design Mockups', done: true },
      { name: 'Development', done: true },
      { name: 'Client Review', done: false },
    ],
  },
  {
    id: 3, name: 'Social Media Kit', creator: 'Zara Okonkwo', skill: 'Illustration',
    status: 'Completed', budget: '$600', due: 'Mar 15, 2026', progress: 100,
    description: '30-piece social media template kit for Instagram, Twitter, and LinkedIn.',
    milestones: [
      { name: 'Template Design', done: true },
      { name: 'Icon Set', done: true },
      { name: 'Final Delivery', done: true },
    ],
  },
]

const statusColors = {
  'In Progress': 'bg-blue-100 text-blue-700',
  'Review': 'bg-amber-100 text-amber-700',
  'Completed': 'bg-green-100 text-green-700',
}

export default function ClientProjectsPage() {
  const [selected, setSelected] = useState(null)

  return (
    <div className="flex gap-6 h-full">
      {/* List */}
      <div className={`flex-1 min-w-0 space-y-4 ${selected ? 'hidden lg:block' : ''}`}>
        <h1 className="text-2xl font-bold text-ink-900">Projects</h1>
        {projects.map(p => (
          <button key={p.id} onClick={() => setSelected(p)}
            className="w-full text-left bg-white rounded-xl border border-ink-100 p-5 hover:border-phos-300 hover:shadow-sm transition-all">
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-10 h-10 rounded-lg bg-phos-50 flex items-center justify-center shrink-0">
                  <FolderOpen size={18} className="text-phos-600" />
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-ink-900 truncate">{p.name}</p>
                  <p className="text-xs text-ink-500 mt-0.5">{p.creator} · {p.skill}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 shrink-0">
                <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${statusColors[p.status]}`}>{p.status}</span>
                <ChevronRight size={16} className="text-ink-400" />
              </div>
            </div>
            <div className="mt-4">
              <div className="flex justify-between text-xs text-ink-500 mb-1.5">
                <span>Progress</span><span>{p.progress}%</span>
              </div>
              <div className="w-full bg-ink-100 rounded-full h-1.5">
                <div className="bg-phos-500 h-1.5 rounded-full" style={{ width: `${p.progress}%` }} />
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* Detail panel */}
      {selected && (
        <div className="w-full lg:w-96 bg-white rounded-xl border border-ink-100 flex flex-col shrink-0">
          <div className="flex items-center justify-between px-6 py-4 border-b border-ink-100">
            <h2 className="text-base font-semibold text-ink-900 truncate pr-2">{selected.name}</h2>
            <button onClick={() => setSelected(null)} className="p-1 rounded-lg text-ink-400 hover:text-ink-700 hover:bg-ink-50 shrink-0">
              <X size={18} />
            </button>
          </div>
          <div className="flex-1 overflow-y-auto p-6 space-y-5">
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div><p className="text-xs text-ink-400 mb-0.5">Creator</p><p className="font-semibold text-ink-900">{selected.creator}</p></div>
              <div><p className="text-xs text-ink-400 mb-0.5">Budget</p><p className="font-semibold text-ink-900">{selected.budget}</p></div>
              <div><p className="text-xs text-ink-400 mb-0.5">Due Date</p><p className="font-semibold text-ink-900">{selected.due}</p></div>
              <div><p className="text-xs text-ink-400 mb-0.5">Status</p>
                <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${statusColors[selected.status]}`}>{selected.status}</span>
              </div>
            </div>
            <div>
              <p className="text-xs font-semibold text-ink-700 uppercase tracking-wide mb-2">Description</p>
              <p className="text-sm text-ink-600 leading-relaxed">{selected.description}</p>
            </div>
            <div>
              <p className="text-xs font-semibold text-ink-700 uppercase tracking-wide mb-3">Milestones</p>
              <div className="space-y-2.5">
                {selected.milestones.map((m, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center shrink-0 ${m.done ? 'bg-phos-500 border-phos-500' : 'border-ink-300'}`}>
                      {m.done && <div className="w-1.5 h-1.5 bg-white rounded-full" />}
                    </div>
                    <span className={`text-sm ${m.done ? 'text-ink-500 line-through' : 'text-ink-800'}`}>{m.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
