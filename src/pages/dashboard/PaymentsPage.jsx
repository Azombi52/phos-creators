import { useState } from 'react'
import { DollarSign, TrendingUp, ArrowDownLeft, Clock, CheckCircle, AlertCircle, Download, Plus } from 'lucide-react'

const transactions = [
  { id: 1, client: 'Kente Digital', initials: 'KD', color: 'from-emerald-400 to-teal-600', type: 'payment', amount: 800, status: 'received', date: 'Mar 22, 2026', desc: 'Monthly Retainer — March' },
  { id: 2, client: 'Solaris Energy', initials: 'SE', color: 'from-amber-400 to-orange-500', type: 'milestone', amount: 300, status: 'received', date: 'Mar 18, 2026', desc: 'Brand Identity — Milestone 1' },
  { id: 3, client: 'Pula Fintech', initials: 'PF', color: 'from-purple-400 to-purple-700', type: 'deposit', amount: 175, status: 'in_escrow', date: 'Mar 15, 2026', desc: 'Logo Design — 50% deposit' },
  { id: 4, client: 'LearnAfrica', initials: 'LA', color: 'from-blue-400 to-blue-600', type: 'payment', amount: 250, status: 'received', date: 'Mar 10, 2026', desc: 'Brand Audit — Final payment' },
  { id: 5, client: 'Kente Digital', initials: 'KD', color: 'from-emerald-400 to-teal-600', type: 'payment', amount: 800, status: 'received', date: 'Feb 22, 2026', desc: 'Monthly Retainer — February' },
  { id: 6, client: 'Nairobi Eats', initials: 'NE', color: 'from-green-400 to-emerald-600', type: 'deposit', amount: 125, status: 'in_escrow', date: 'Feb 20, 2026', desc: 'Brand Audit — 50% deposit' },
  { id: 7, client: 'Afrowave Music', initials: 'AM', color: 'from-rose-400 to-rose-700', type: 'milestone', amount: 600, status: 'received', date: 'Feb 15, 2026', desc: 'Brand Identity — Final milestone' },
]

const statusConfig = {
  received: { label: 'Received', color: 'text-emerald-600 bg-emerald-50', icon: CheckCircle },
  in_escrow: { label: 'In escrow', color: 'text-amber-600 bg-amber-50', icon: Clock },
  pending: { label: 'Pending', color: 'text-ink-500 bg-ink-100', icon: AlertCircle },
}

const earnings = [
  { month: 'Oct', amount: 1200 },
  { month: 'Nov', amount: 2100 },
  { month: 'Dec', amount: 1800 },
  { month: 'Jan', amount: 3200 },
  { month: 'Feb', amount: 3800 },
  { month: 'Mar', amount: 4800 },
]
const maxEarning = Math.max(...earnings.map(e => e.amount))

export default function PaymentsPage() {
  const [withdrawOpen, setWithdrawOpen] = useState(false)

  const totalEarned = transactions.filter(t => t.status === 'received').reduce((s, t) => s + t.amount, 0)
  const inEscrow = transactions.filter(t => t.status === 'in_escrow').reduce((s, t) => s + t.amount, 0)

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold text-ink-900">Payments</h1>
          <p className="text-sm text-ink-500">Your earnings and transaction history</p>
        </div>
        <button onClick={() => setWithdrawOpen(true)}
          className="inline-flex items-center gap-2 px-4 py-2 bg-phos-600 hover:bg-phos-700 text-white text-sm font-semibold rounded-lg transition-colors">
          <ArrowDownLeft size={15} /> Withdraw funds
        </button>
      </div>

      {/* Balance cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-ink-900 text-white rounded-xl p-6">
          <p className="text-ink-400 text-xs mb-2">Available balance</p>
          <p className="text-3xl font-black mb-1">$2,650</p>
          <p className="text-xs text-ink-400">Ready to withdraw</p>
          <button onClick={() => setWithdrawOpen(true)}
            className="mt-4 w-full py-2 bg-phos-600 hover:bg-phos-700 text-white text-sm font-semibold rounded-lg transition-colors">
            Withdraw
          </button>
        </div>
        <div className="bg-white border border-ink-200 rounded-xl p-6">
          <div className="flex items-center gap-2 mb-2">
            <Clock size={14} className="text-amber-500" />
            <p className="text-ink-500 text-xs">In escrow</p>
          </div>
          <p className="text-2xl font-black text-ink-900">${inEscrow.toLocaleString()}</p>
          <p className="text-xs text-ink-400 mt-1">Released on milestone approval</p>
        </div>
        <div className="bg-white border border-ink-200 rounded-xl p-6">
          <div className="flex items-center gap-2 mb-2">
            <TrendingUp size={14} className="text-emerald-500" />
            <p className="text-ink-500 text-xs">Total earned</p>
          </div>
          <p className="text-2xl font-black text-ink-900">${totalEarned.toLocaleString()}</p>
          <p className="text-xs text-emerald-600 mt-1 font-semibold">↑ 26% this month</p>
        </div>
      </div>

      {/* Earnings chart */}
      <div className="bg-white rounded-xl border border-ink-200 p-6">
        <h2 className="font-bold text-ink-900 mb-6">Earnings over time</h2>
        <div className="flex items-end gap-3 h-36">
          {earnings.map(({ month, amount }) => (
            <div key={month} className="flex-1 flex flex-col items-center gap-2">
              <span className="text-xs font-semibold text-ink-600">${(amount / 1000).toFixed(1)}k</span>
              <div className="w-full flex flex-col justify-end" style={{ height: '100px' }}>
                <div className={`w-full rounded-t-lg ${month === 'Mar' ? 'bg-phos-600' : 'bg-ink-200'}`}
                  style={{ height: `${(amount / maxEarning) * 100}%` }} />
              </div>
              <span className="text-xs text-ink-400">{month}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Transaction history */}
      <div className="bg-white rounded-xl border border-ink-200 overflow-hidden">
        <div className="flex items-center justify-between px-6 py-4 border-b border-ink-100">
          <h2 className="font-bold text-ink-900">Transaction history</h2>
          <button className="inline-flex items-center gap-1.5 text-sm text-ink-500 hover:text-ink-900 transition-colors">
            <Download size={14} /> Export CSV
          </button>
        </div>
        <div className="divide-y divide-ink-50">
          {transactions.map(tx => {
            const status = statusConfig[tx.status]
            const StatusIcon = status.icon
            return (
              <div key={tx.id} className="flex items-center gap-4 px-6 py-4 hover:bg-ink-50/50 transition-colors">
                <div className={`w-9 h-9 rounded-xl bg-gradient-to-br ${tx.color} flex items-center justify-center text-white font-bold text-xs shrink-0`}>
                  {tx.initials}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-ink-900">{tx.desc}</p>
                  <p className="text-xs text-ink-500">{tx.client} · {tx.date}</p>
                </div>
                <div className="flex items-center gap-3 shrink-0">
                  <span className={`text-xs px-2 py-0.5 rounded-full font-medium flex items-center gap-1 ${status.color}`}>
                    <StatusIcon size={10} /> {status.label}
                  </span>
                  <span className={`text-sm font-bold ${tx.status === 'received' ? 'text-emerald-600' : 'text-ink-700'}`}>
                    +${tx.amount.toLocaleString()}
                  </span>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Withdraw modal */}
      {withdrawOpen && (
        <div className="fixed inset-0 bg-ink-950/60 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl p-6 w-full max-w-sm">
            <h3 className="font-bold text-ink-900 text-lg mb-1">Withdraw funds</h3>
            <p className="text-sm text-ink-500 mb-6">Available: <span className="font-bold text-ink-900">$2,650</span></p>
            <div className="space-y-4">
              <div>
                <label className="text-xs font-semibold text-ink-700 mb-1.5 block">Amount (USD)</label>
                <input type="number" placeholder="0.00" defaultValue="2650"
                  className="w-full px-3 py-2.5 border border-ink-200 rounded-lg text-sm focus:outline-none focus:border-phos-400" />
              </div>
              <div>
                <label className="text-xs font-semibold text-ink-700 mb-1.5 block">Withdraw to</label>
                <select className="w-full px-3 py-2.5 border border-ink-200 rounded-lg text-sm focus:outline-none focus:border-phos-400">
                  <option>GTBank · ****4521 (NGN)</option>
                  <option>M-Pesa · +254 7XX XXX XXX</option>
                  <option>Add new account</option>
                </select>
              </div>
              <p className="text-xs text-ink-400">Funds arrive within 1–3 business days. Platform fee: 4%.</p>
            </div>
            <div className="flex gap-3 mt-6">
              <button onClick={() => setWithdrawOpen(false)}
                className="flex-1 py-2.5 border border-ink-200 text-sm font-semibold text-ink-700 rounded-lg hover:bg-ink-50 transition-colors">
                Cancel
              </button>
              <button onClick={() => setWithdrawOpen(false)}
                className="flex-1 py-2.5 bg-phos-600 hover:bg-phos-700 text-white text-sm font-semibold rounded-lg transition-colors">
                Confirm withdrawal
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
