import { Link } from 'react-router-dom'
import { Eye, ExternalLink, Star, Shield, Edit2, Plus, BarChart3, Package, CheckCircle } from 'lucide-react'
import { useAuth } from '../../context/AuthContext'

export default function StorefrontPage() {
  const { user, profile } = useAuth()
  const firstName = profile?.first_name || user?.user_metadata?.first_name || 'Creator'
  const lastName = profile?.last_name || user?.user_metadata?.last_name || ''
  const slug = `${firstName}${lastName}`.toLowerCase().replace(/\s/g, '')

  const stats = [
    { label: 'Views this month', value: '1,243', icon: Eye, change: '+34%' },
    { label: 'Bookings', value: '9', icon: Package, change: '+3' },
    { label: 'Conversion rate', value: '12.3%', icon: BarChart3, change: '+2.1%' },
  ]

  const services = [
    { name: 'Brand Identity Package', price: '$1,200', timeline: '14 days', active: true },
    { name: 'Logo Design', price: '$350', timeline: '5 days', active: true },
    { name: 'Brand Audit', price: '$250', timeline: '3 days', active: true },
    { name: 'Monthly Retainer', price: '$800/mo', timeline: 'Ongoing', active: false },
  ]

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-xl font-bold text-ink-900">My storefront</h1>
          <a href={`https://${slug}.phoscreators.com`} target="_blank" rel="noreferrer"
            className="text-sm text-phos-600 hover:underline flex items-center gap-1 mt-0.5">
            {slug}.phoscreators.com <ExternalLink size={12} />
          </a>
        </div>
        <div className="flex items-center gap-3">
          <Link to="/storefront"
            className="inline-flex items-center gap-1.5 px-4 py-2 border border-ink-200 hover:bg-ink-50 text-sm font-semibold text-ink-700 rounded-lg transition-colors">
            <Eye size={14} /> Preview
          </Link>
          <button className="inline-flex items-center gap-1.5 px-4 py-2 bg-phos-600 hover:bg-phos-700 text-white text-sm font-semibold rounded-lg transition-colors">
            <Edit2 size={14} /> Edit storefront
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4">
        {stats.map(({ label, value, icon: Icon, change }) => (
          <div key={label} className="bg-white rounded-xl border border-ink-200 p-5">
            <div className="flex items-center justify-between mb-3">
              <Icon size={16} className="text-ink-400" />
              <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">{change}</span>
            </div>
            <div className="text-2xl font-black text-ink-900">{value}</div>
            <div className="text-xs text-ink-500 mt-1">{label}</div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Storefront preview */}
        <div className="bg-white rounded-xl border border-ink-200 overflow-hidden">
          <div className="px-5 py-4 border-b border-ink-100 flex items-center justify-between">
            <h2 className="font-bold text-ink-900 text-sm">Live preview</h2>
            <Link to="/storefront" className="text-xs text-phos-600 font-semibold hover:underline flex items-center gap-1">
              Open full page <ExternalLink size={10} />
            </Link>
          </div>
          <div className="p-5">
            {/* Mini storefront */}
            <div className="flex items-center gap-4 mb-5">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-phos-400 to-phos-700 flex items-center justify-center text-white text-2xl font-black shrink-0">
                {firstName[0]}
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-bold text-ink-900">{firstName} {lastName}</span>
                  <Shield size={12} className="text-phos-500" />
                </div>
                <p className="text-xs text-ink-500">
                  {profile?.skill || user?.user_metadata?.skill || 'Brand Designer'} · Verified creator
                </p>
                <div className="flex items-center gap-1 mt-1">
                  {[1,2,3,4,5].map(i => <Star key={i} size={10} className="text-phos-400 fill-phos-400" />)}
                  <span className="text-xs text-ink-500 ml-1">4.9 (84 reviews)</span>
                </div>
              </div>
            </div>
            <div className="space-y-2">
              {services.filter(s => s.active).map(s => (
                <div key={s.name} className="flex items-center justify-between p-3 bg-ink-50 rounded-lg">
                  <div>
                    <span className="text-xs font-semibold text-ink-900">{s.name}</span>
                    <div className="text-xs text-ink-400">{s.timeline}</div>
                  </div>
                  <span className="text-xs font-bold text-ink-900">{s.price}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Services management */}
        <div className="bg-white rounded-xl border border-ink-200 overflow-hidden">
          <div className="px-5 py-4 border-b border-ink-100 flex items-center justify-between">
            <h2 className="font-bold text-ink-900 text-sm">Service packages</h2>
            <button className="inline-flex items-center gap-1 text-xs text-phos-600 font-semibold hover:underline">
              <Plus size={12} /> Add package
            </button>
          </div>
          <div className="divide-y divide-ink-50">
            {services.map(s => (
              <div key={s.name} className="flex items-center gap-4 px-5 py-4">
                <div className={`w-2 h-2 rounded-full shrink-0 ${s.active ? 'bg-emerald-400' : 'bg-ink-300'}`} />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-ink-900">{s.name}</p>
                  <p className="text-xs text-ink-500">{s.timeline}</p>
                </div>
                <span className="text-sm font-bold text-ink-900 shrink-0">{s.price}</span>
                <button className="p-1.5 text-ink-400 hover:text-ink-700 hover:bg-ink-100 rounded-lg transition-colors">
                  <Edit2 size={13} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Checklist */}
      <div className="bg-white rounded-xl border border-ink-200 p-6">
        <h2 className="font-bold text-ink-900 mb-1">Storefront optimisation</h2>
        <p className="text-sm text-ink-500 mb-5">Complete these to maximise your visibility and conversions.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            { label: 'Add a profile photo', done: false },
            { label: 'Upload 6+ portfolio items', done: true },
            { label: 'Write a compelling bio', done: true },
            { label: 'Add at least 3 service packages', done: true },
            { label: 'Connect your custom domain', done: false },
            { label: 'Request your first review', done: true },
          ].map(({ label, done }) => (
            <div key={label} className={`flex items-center gap-3 p-3 rounded-lg ${done ? 'bg-emerald-50' : 'bg-ink-50'}`}>
              <CheckCircle size={15} className={done ? 'text-emerald-500' : 'text-ink-300'} />
              <span className={`text-sm ${done ? 'text-emerald-700 line-through' : 'text-ink-700'}`}>{label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
