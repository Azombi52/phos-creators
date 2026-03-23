import {
  TrendingUp, DollarSign, Eye, Users, Star, Package,
  Clock, CheckCircle, AlertCircle, ArrowUpRight, ArrowRight,
  Bell, Settings, Plus, MessageSquare, FileText, BarChart3,
  CreditCard, Zap
} from 'lucide-react'
import Button from '../components/ui/Button'
import Badge from '../components/ui/Badge'

const stats = [
  { label: 'Total earned', value: '$4,800', change: '+18%', icon: DollarSign, color: 'text-emerald-600 bg-emerald-50' },
  { label: 'Storefront views', value: '1,243', change: '+34%', icon: Eye, color: 'text-blue-600 bg-blue-50' },
  { label: 'Active clients', value: '6', change: '+2', icon: Users, color: 'text-purple-600 bg-purple-50' },
  { label: 'Avg. rating', value: '4.9', change: '↑0.1', icon: Star, color: 'text-phos-600 bg-phos-50' },
]

const projects = [
  {
    client: 'Solaris Energy',
    initials: 'SE',
    color: 'from-amber-400 to-orange-500',
    package: 'Brand Identity Package',
    amount: 1200,
    status: 'in_progress',
    milestone: 'Milestone 2 of 4',
    due: 'Due Apr 2',
  },
  {
    client: 'Kente Digital',
    initials: 'KD',
    color: 'from-emerald-400 to-teal-600',
    package: 'Monthly Retainer',
    amount: 800,
    status: 'awaiting_review',
    milestone: 'Deliverable submitted',
    due: 'Awaiting approval',
  },
  {
    client: 'LearnAfrica',
    initials: 'LA',
    color: 'from-blue-400 to-blue-600',
    package: 'Brand Audit',
    amount: 250,
    status: 'completed',
    milestone: 'All milestones complete',
    due: 'Paid Mar 15',
  },
  {
    client: 'Pula Fintech',
    initials: 'PF',
    color: 'from-purple-400 to-purple-700',
    package: 'Logo Design',
    amount: 350,
    status: 'new',
    milestone: 'Brief received',
    due: 'Start by Apr 5',
  },
]

const statusConfig = {
  in_progress: { label: 'In progress', color: 'bg-blue-100 text-blue-700' },
  awaiting_review: { label: 'Awaiting review', color: 'bg-amber-100 text-amber-700' },
  completed: { label: 'Completed', color: 'bg-emerald-100 text-emerald-700' },
  new: { label: 'New', color: 'bg-phos-100 text-phos-700' },
}

const navItems = [
  { icon: BarChart3, label: 'Overview', active: true },
  { icon: Package, label: 'Projects' },
  { icon: Users, label: 'Clients' },
  { icon: MessageSquare, label: 'Messages', badge: '3' },
  { icon: FileText, label: 'Contracts' },
  { icon: CreditCard, label: 'Payments' },
  { icon: Eye, label: 'My storefront' },
  { icon: Settings, label: 'Settings' },
]

const earnings = [
  { month: 'Oct', amount: 1200 },
  { month: 'Nov', amount: 2100 },
  { month: 'Dec', amount: 1800 },
  { month: 'Jan', amount: 3200 },
  { month: 'Feb', amount: 3800 },
  { month: 'Mar', amount: 4800 },
]

const maxEarning = Math.max(...earnings.map(e => e.amount))

export default function DashboardPage() {
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
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-phos-400 to-phos-700 flex items-center justify-center text-white font-bold text-sm">A</div>
            <div className="min-w-0">
              <div className="text-sm font-semibold text-ink-900 truncate">Amara Diallo</div>
              <div className="text-xs text-ink-500 truncate">amara.phoscreators.com</div>
            </div>
          </div>
        </div>

        {/* Nav */}
        <nav className="flex-1 px-3 py-4 space-y-0.5">
          {navItems.map(({ icon: Icon, label, active, badge }) => (
            <button
              key={label}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                active ? 'bg-phos-50 text-phos-700' : 'text-ink-600 hover:bg-ink-50 hover:text-ink-900'
              }`}
            >
              <Icon size={16} />
              <span className="flex-1 text-left">{label}</span>
              {badge && (
                <span className="w-5 h-5 bg-phos-600 text-white text-xs rounded-full flex items-center justify-center font-bold">{badge}</span>
              )}
            </button>
          ))}
        </nav>

        {/* Upgrade nudge */}
        <div className="m-3 p-4 bg-phos-50 rounded-xl border border-phos-100">
          <div className="flex items-center gap-2 mb-2">
            <Zap size={14} className="text-phos-600" />
            <span className="text-xs font-bold text-phos-700">Upgrade to Pro</span>
          </div>
          <p className="text-xs text-ink-500 mb-3">Unlock custom domain, advanced analytics, and lower fees.</p>
          <button className="w-full py-1.5 bg-phos-600 text-white text-xs font-semibold rounded-lg hover:bg-phos-700 transition-colors">
            See plans
          </button>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 lg:ml-60 min-h-screen">
        {/* Top bar */}
        <div className="bg-white border-b border-ink-100 px-6 py-4 flex items-center justify-between sticky top-0 z-30">
          <div>
            <h1 className="text-lg font-bold text-ink-900">Overview</h1>
            <p className="text-xs text-ink-500">March 2026</p>
          </div>
          <div className="flex items-center gap-3">
            <button className="relative p-2 text-ink-500 hover:text-ink-900 hover:bg-ink-100 rounded-lg transition-colors">
              <Bell size={18} />
              <span className="absolute top-1 right-1 w-2 h-2 bg-phos-500 rounded-full" />
            </button>
            <Button to="/storefront" size="sm" variant="outline">
              <Eye size={14} />
              View storefront
            </Button>
            <Button size="sm" variant="primary">
              <Plus size={14} />
              New project
            </Button>
          </div>
        </div>

        <div className="p-6 space-y-6">
          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map(({ label, value, change, icon: Icon, color }) => (
              <div key={label} className="bg-white rounded-xl border border-ink-200 p-5">
                <div className="flex items-start justify-between mb-3">
                  <div className={`w-9 h-9 rounded-lg ${color} flex items-center justify-center`}>
                    <Icon size={16} />
                  </div>
                  <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">{change}</span>
                </div>
                <div className="text-2xl font-black text-ink-900">{value}</div>
                <div className="text-xs text-ink-500 mt-1">{label}</div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Earnings chart */}
            <div className="lg:col-span-2 bg-white rounded-xl border border-ink-200 p-6">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="font-bold text-ink-900">Earnings</h2>
                  <p className="text-xs text-ink-500">Last 6 months</p>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-black text-ink-900">$4,800</div>
                  <div className="text-xs text-emerald-600 font-semibold">↑ 26% vs last month</div>
                </div>
              </div>

              {/* Bar chart */}
              <div className="flex items-end gap-2 h-32">
                {earnings.map(({ month, amount }) => (
                  <div key={month} className="flex-1 flex flex-col items-center gap-1.5">
                    <div
                      className={`w-full rounded-t-md transition-all ${month === 'Mar' ? 'bg-phos-600' : 'bg-ink-200'}`}
                      style={{ height: `${(amount / maxEarning) * 100}%` }}
                    />
                    <span className="text-xs text-ink-400">{month}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick stats */}
            <div className="bg-white rounded-xl border border-ink-200 p-6">
              <h2 className="font-bold text-ink-900 mb-4">This month</h2>
              <div className="space-y-4">
                {[
                  { label: 'Conversion rate', value: '12.3%', sub: 'Views → bookings' },
                  { label: 'Avg. project value', value: '$650', sub: 'Across all packages' },
                  { label: 'Response time', value: '1.8 hrs', sub: 'Average to first reply' },
                  { label: 'Repeat client rate', value: '68%', sub: 'Returning clients' },
                ].map(({ label, value, sub }) => (
                  <div key={label} className="flex items-center justify-between py-3 border-b border-ink-50 last:border-0">
                    <div>
                      <div className="text-xs font-medium text-ink-700">{label}</div>
                      <div className="text-xs text-ink-400">{sub}</div>
                    </div>
                    <div className="text-sm font-black text-ink-900">{value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Active projects */}
          <div className="bg-white rounded-xl border border-ink-200 overflow-hidden">
            <div className="flex items-center justify-between px-6 py-4 border-b border-ink-100">
              <h2 className="font-bold text-ink-900">Active projects</h2>
              <button className="text-sm text-phos-600 font-semibold hover:underline flex items-center gap-1">
                View all <ArrowRight size={14} />
              </button>
            </div>
            <div className="divide-y divide-ink-100">
              {projects.map(project => {
                const status = statusConfig[project.status]
                return (
                  <div key={project.client} className="flex items-center gap-4 px-6 py-4 hover:bg-ink-50/50 transition-colors">
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${project.color} flex items-center justify-center text-white font-bold text-sm shrink-0`}>
                      {project.initials}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-ink-900 text-sm">{project.client}</span>
                        <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${status.color}`}>{status.label}</span>
                      </div>
                      <div className="text-xs text-ink-500">{project.package} · {project.milestone}</div>
                    </div>
                    <div className="text-right shrink-0">
                      <div className="text-sm font-bold text-ink-900">${project.amount.toLocaleString()}</div>
                      <div className="text-xs text-ink-400">{project.due}</div>
                    </div>
                    <button className="p-2 text-ink-400 hover:text-ink-700 transition-colors">
                      <ArrowUpRight size={16} />
                    </button>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Recent activity */}
          <div className="bg-white rounded-xl border border-ink-200 p-6">
            <h2 className="font-bold text-ink-900 mb-4">Recent activity</h2>
            <div className="space-y-3">
              {[
                { icon: DollarSign, color: 'bg-emerald-100 text-emerald-600', text: 'Payment of $800 received from Kente Digital', time: '2 hours ago' },
                { icon: MessageSquare, color: 'bg-blue-100 text-blue-600', text: 'New message from Pula Fintech regarding brief', time: '5 hours ago' },
                { icon: Eye, color: 'bg-purple-100 text-purple-600', text: 'Your storefront was viewed 47 times today', time: 'Today' },
                { icon: Star, color: 'bg-phos-100 text-phos-600', text: 'New 5-star review from LearnAfrica', time: 'Yesterday' },
                { icon: CheckCircle, color: 'bg-emerald-100 text-emerald-600', text: 'Milestone 1 approved by Solaris Energy', time: 'Mar 20' },
              ].map(({ icon: Icon, color, text, time }, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className={`w-8 h-8 rounded-lg ${color} flex items-center justify-center shrink-0`}>
                    <Icon size={14} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-ink-700">{text}</p>
                    <p className="text-xs text-ink-400 mt-0.5">{time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
