import { useState } from 'react'
import { FileText, Download, CheckCircle, Clock, AlertCircle, Plus, Eye } from 'lucide-react'

const contracts = [
  { id: 1, client: 'Solaris Energy', initials: 'SE', color: 'from-amber-400 to-orange-500', package: 'Brand Identity Package', value: 1200, status: 'active', signed: 'Jan 15, 2026', expires: 'Mar 15, 2026', milestones: 4, milestonesComplete: 2 },
  { id: 2, client: 'Kente Digital', initials: 'KD', color: 'from-emerald-400 to-teal-600', package: 'Monthly Retainer', value: 800, status: 'active', signed: 'Sep 1, 2025', expires: 'Ongoing', milestones: 1, milestonesComplete: 1 },
  { id: 3, client: 'LearnAfrica', initials: 'LA', color: 'from-blue-400 to-blue-600', package: 'Brand Audit', value: 250, status: 'completed', signed: 'Feb 1, 2026', expires: 'Mar 15, 2026', milestones: 2, milestonesComplete: 2 },
  { id: 4, client: 'Pula Fintech', initials: 'PF', color: 'from-purple-400 to-purple-700', package: 'Logo Design', value: 350, status: 'pending', signed: null, expires: null, milestones: 3, milestonesComplete: 0 },
  { id: 5, client: 'Afrowave Music', initials: 'AM', color: 'from-rose-400 to-rose-700', package: 'Brand Identity Package', value: 1200, status: 'completed', signed: 'Nov 15, 2025', expires: 'Feb 28, 2026', milestones: 4, milestonesComplete: 4 },
]

const statusConfig = {
  active: { label: 'Active', color: 'bg-emerald-100 text-emerald-700', icon: CheckCircle },
  pending: { label: 'Awaiting signature', color: 'bg-amber-100 text-amber-700', icon: Clock },
  completed: { label: 'Completed', color: 'bg-ink-100 text-ink-500', icon: CheckCircle },
}

export default function ContractsPage() {
  const [selected, setSelected] = useState(null)

  const contract = selected ? contracts.find(c => c.id === selected) : null
  const totalValue = contracts.reduce((s, c) => s + c.value, 0)

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-xl font-bold text-ink-900">Contracts</h1>
          <p className="text-sm text-ink-500">{contracts.length} contracts · ${totalValue.toLocaleString()} total value</p>
        </div>
        <button className="inline-flex items-center gap-2 px-4 py-2 bg-phos-600 hover:bg-phos-700 text-white text-sm font-semibold rounded-lg transition-colors">
          <Plus size={15} /> New contract
        </button>
      </div>

      {/* Summary */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        {[
          { label: 'Active', value: contracts.filter(c => c.status === 'active').length, color: 'text-emerald-600' },
          { label: 'Pending signature', value: contracts.filter(c => c.status === 'pending').length, color: 'text-amber-600' },
          { label: 'Completed', value: contracts.filter(c => c.status === 'completed').length, color: 'text-ink-500' },
        ].map(({ label, value, color }) => (
          <div key={label} className="bg-white rounded-xl border border-ink-200 p-4 text-center">
            <div className={`text-2xl font-black ${color}`}>{value}</div>
            <div className="text-xs text-ink-500 mt-1">{label}</div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {/* Contract list */}
        <div className="xl:col-span-2 space-y-3">
          {contracts.map(c => {
            const status = statusConfig[c.status]
            const StatusIcon = status.icon
            return (
              <div key={c.id} onClick={() => setSelected(selected === c.id ? null : c.id)}
                className={`bg-white rounded-xl border-2 p-5 cursor-pointer transition-all ${selected === c.id ? 'border-phos-400' : 'border-ink-200 hover:border-ink-300'}`}>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-ink-100 flex items-center justify-center shrink-0">
                    <FileText size={18} className="text-ink-500" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <div>
                        <div className="flex items-center gap-2">
                          <div className={`w-6 h-6 rounded-lg bg-gradient-to-br ${c.color} flex items-center justify-center text-white text-xs font-bold`}>{c.initials[0]}</div>
                          <span className="font-semibold text-ink-900 text-sm">{c.client}</span>
                        </div>
                        <p className="text-xs text-ink-500 mt-0.5 ml-8">{c.package}</p>
                      </div>
                      <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${status.color} shrink-0 flex items-center gap-1`}>
                        <StatusIcon size={10} /> {status.label}
                      </span>
                    </div>
                    <div className="flex items-center gap-4 mt-3">
                      <span className="text-sm font-bold text-ink-900">${c.value.toLocaleString()}</span>
                      <span className="text-xs text-ink-400">{c.signed ? `Signed ${c.signed}` : 'Not yet signed'}</span>
                      <span className="text-xs text-ink-400">
                        {c.milestonesComplete}/{c.milestones} milestones
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <button className="p-2 text-ink-400 hover:text-ink-700 hover:bg-ink-100 rounded-lg transition-colors" onClick={e => e.stopPropagation()}>
                      <Eye size={15} />
                    </button>
                    <button className="p-2 text-ink-400 hover:text-ink-700 hover:bg-ink-100 rounded-lg transition-colors" onClick={e => e.stopPropagation()}>
                      <Download size={15} />
                    </button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Contract detail */}
        {contract ? (
          <div className="bg-white rounded-xl border border-ink-200 p-6 h-fit sticky top-24">
            <div className="flex items-center gap-3 mb-5">
              <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${contract.color} flex items-center justify-center text-white font-bold text-sm`}>
                {contract.initials}
              </div>
              <div>
                <h3 className="font-bold text-ink-900 text-sm">{contract.client}</h3>
                <p className="text-xs text-ink-500">{contract.package}</p>
              </div>
            </div>

            <div className="space-y-4 mb-6">
              {[
                { label: 'Contract value', value: `$${contract.value.toLocaleString()}` },
                { label: 'Status', value: statusConfig[contract.status].label },
                { label: 'Signed', value: contract.signed || 'Not yet signed' },
                { label: 'Expires', value: contract.expires || 'N/A' },
              ].map(({ label, value }) => (
                <div key={label} className="flex items-center justify-between py-2 border-b border-ink-50 last:border-0">
                  <span className="text-xs text-ink-400">{label}</span>
                  <span className="text-xs font-semibold text-ink-900">{value}</span>
                </div>
              ))}
            </div>

            {/* Milestones */}
            <div className="mb-6">
              <p className="text-xs font-semibold text-ink-700 mb-3">Milestones</p>
              <div className="space-y-2">
                {Array.from({ length: contract.milestones }, (_, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className={`w-4 h-4 rounded-full flex items-center justify-center ${i < contract.milestonesComplete ? 'bg-emerald-500' : 'bg-ink-200'}`}>
                      {i < contract.milestonesComplete && <CheckCircle size={10} className="text-white" />}
                    </div>
                    <span className={`text-xs ${i < contract.milestonesComplete ? 'text-emerald-700 line-through' : 'text-ink-600'}`}>
                      Milestone {i + 1}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <button className="w-full py-2 bg-phos-600 hover:bg-phos-700 text-white text-sm font-semibold rounded-lg transition-colors flex items-center justify-center gap-2">
                <Eye size={14} /> View contract
              </button>
              <button className="w-full py-2 border border-ink-200 hover:bg-ink-50 text-ink-700 text-sm font-semibold rounded-lg transition-colors flex items-center justify-center gap-2">
                <Download size={14} /> Download PDF
              </button>
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-xl border border-dashed border-ink-200 p-6 flex items-center justify-center h-48 sticky top-24">
            <p className="text-sm text-ink-400">Click a contract to see details</p>
          </div>
        )}
      </div>
    </div>
  )
}
