import { CreditCard, ArrowUpRight } from 'lucide-react'

const transactions = [
  { id: 'INV-001', project: 'Brand Identity Package', creator: 'Amara Diallo', amount: '$600.00', date: 'Mar 20, 2026', status: 'Paid' },
  { id: 'INV-002', project: 'Website Redesign', creator: 'Kofi Mensah', amount: '$1,750.00', date: 'Mar 10, 2026', status: 'Paid' },
  { id: 'INV-003', project: 'Website Redesign', creator: 'Kofi Mensah', amount: '$1,750.00', date: 'Apr 1, 2026', status: 'Pending' },
  { id: 'INV-004', project: 'Social Media Kit', creator: 'Zara Okonkwo', amount: '$600.00', date: 'Mar 15, 2026', status: 'Paid' },
]

const statusColors = {
  Paid: 'bg-green-100 text-green-700',
  Pending: 'bg-amber-100 text-amber-700',
  Overdue: 'bg-red-100 text-red-700',
}

export default function ClientPaymentsPage() {
  const totalSpent = '$4,700.00'
  const pending = '$1,750.00'

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-ink-900">Payments</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="bg-ink-950 rounded-xl p-6 text-white">
          <p className="text-ink-300 text-sm mb-1">Total Spent</p>
          <p className="text-3xl font-bold">{totalSpent}</p>
          <p className="text-ink-400 text-xs mt-2">Across all projects</p>
        </div>
        <div className="bg-white rounded-xl border border-ink-100 p-6">
          <p className="text-ink-500 text-sm mb-1">Pending Payments</p>
          <p className="text-3xl font-bold text-ink-900">{pending}</p>
          <p className="text-ink-400 text-xs mt-2">Due Apr 1, 2026</p>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-ink-100">
        <div className="px-6 py-4 border-b border-ink-100 flex items-center justify-between">
          <h2 className="text-base font-semibold text-ink-900">Payment History</h2>
          <button className="flex items-center gap-1.5 text-sm font-semibold text-phos-600 hover:text-phos-700">
            Export <ArrowUpRight size={14} />
          </button>
        </div>
        <div className="divide-y divide-ink-100">
          {transactions.map(tx => (
            <div key={tx.id} className="px-6 py-4 flex items-center gap-4">
              <div className="w-9 h-9 rounded-lg bg-ink-50 flex items-center justify-center shrink-0">
                <CreditCard size={16} className="text-ink-500" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-ink-900 truncate">{tx.project}</p>
                <p className="text-xs text-ink-400 mt-0.5">{tx.creator} · {tx.id}</p>
              </div>
              <div className="text-right shrink-0">
                <p className="text-sm font-bold text-ink-900">{tx.amount}</p>
                <p className="text-xs text-ink-400">{tx.date}</p>
              </div>
              <span className={`text-xs font-semibold px-2.5 py-1 rounded-full shrink-0 ${statusColors[tx.status]}`}>
                {tx.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
