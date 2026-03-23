import { useState } from 'react'
import { Search, MapPin, Mail, Globe, Star, Plus, ArrowUpRight } from 'lucide-react'

const clients = [
  { id: 1, name: 'James Osei', company: 'Solaris Energy', country: 'Ghana', flag: '🇬🇭', email: 'james@solarisgh.com', website: 'solarisgh.com', spent: 1200, projects: 1, rating: 5, status: 'active', initials: 'JO', color: 'from-amber-400 to-orange-500', lastProject: 'Brand Identity Package', since: 'Jan 2026' },
  { id: 2, name: 'Sarah Mitchell', company: 'Kente Digital', country: 'United Kingdom', flag: '🇬🇧', email: 'sarah@kentedigital.co.uk', website: 'kentedigital.co.uk', spent: 3200, projects: 4, rating: 5, status: 'active', initials: 'SM', color: 'from-emerald-400 to-teal-600', lastProject: 'Monthly Retainer', since: 'Sep 2025' },
  { id: 3, name: 'Ade Williams', company: 'LearnAfrica', country: 'United States', flag: '🇺🇸', email: 'ade@learnafrica.io', website: 'learnafrica.io', spent: 500, projects: 2, rating: 5, status: 'inactive', initials: 'AW', color: 'from-blue-400 to-blue-600', lastProject: 'Brand Audit', since: 'Nov 2025' },
  { id: 4, name: 'Chidi Okafor', company: 'Pula Fintech', country: 'Nigeria', flag: '🇳🇬', email: 'chidi@pulafintech.ng', website: 'pulafintech.ng', spent: 350, projects: 1, rating: null, status: 'new', initials: 'CO', color: 'from-purple-400 to-purple-700', lastProject: 'Logo Design', since: 'Mar 2026' },
  { id: 5, name: 'Lena Müller', company: 'Afrowave Music', country: 'Germany', flag: '🇩🇪', email: 'lena@afrowave.de', website: 'afrowave.de', spent: 1200, projects: 1, rating: 4, status: 'inactive', initials: 'LM', color: 'from-rose-400 to-rose-700', lastProject: 'Brand Identity Package', since: 'Dec 2025' },
  { id: 6, name: 'Amina Hassan', company: 'Nairobi Eats', country: 'Kenya', flag: '🇰🇪', email: 'amina@nairobieats.co.ke', website: 'nairobieats.co.ke', spent: 250, projects: 1, rating: null, status: 'active', initials: 'AH', color: 'from-green-400 to-emerald-600', lastProject: 'Brand Audit', since: 'Feb 2026' },
]

const statusStyle = {
  active: 'bg-emerald-100 text-emerald-700',
  inactive: 'bg-ink-100 text-ink-500',
  new: 'bg-phos-100 text-phos-700',
}

export default function ClientsPage() {
  const [search, setSearch] = useState('')
  const [selected, setSelected] = useState(null)

  const filtered = clients.filter(c =>
    !search || c.name.toLowerCase().includes(search.toLowerCase()) || c.company.toLowerCase().includes(search.toLowerCase())
  )

  const client = selected ? clients.find(c => c.id === selected) : null
  const totalSpent = clients.reduce((s, c) => s + c.spent, 0)

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-xl font-bold text-ink-900">Clients</h1>
          <p className="text-sm text-ink-500">{clients.length} total · ${totalSpent.toLocaleString()} lifetime value</p>
        </div>
        <button className="inline-flex items-center gap-2 px-4 py-2 bg-phos-600 hover:bg-phos-700 text-white text-sm font-semibold rounded-lg transition-colors">
          <Plus size={15} /> Add client
        </button>
      </div>

      {/* Summary cards */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        {[
          { label: 'Active clients', value: clients.filter(c => c.status === 'active').length },
          { label: 'Total projects', value: clients.reduce((s, c) => s + c.projects, 0) },
          { label: 'Repeat rate', value: '68%' },
        ].map(({ label, value }) => (
          <div key={label} className="bg-white rounded-xl border border-ink-200 p-4 text-center">
            <div className="text-2xl font-black text-ink-900">{value}</div>
            <div className="text-xs text-ink-500 mt-1">{label}</div>
          </div>
        ))}
      </div>

      {/* Search */}
      <div className="relative mb-4 max-w-xs">
        <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-ink-400" />
        <input type="text" placeholder="Search clients..." value={search} onChange={e => setSearch(e.target.value)}
          className="pl-8 pr-3 py-2 border border-ink-200 rounded-lg text-sm text-ink-700 focus:outline-none focus:border-phos-400 w-full" />
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {/* Client list */}
        <div className="xl:col-span-2 bg-white rounded-xl border border-ink-200 overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="border-b border-ink-100">
                <th className="text-left px-5 py-3 text-xs font-semibold text-ink-500">Client</th>
                <th className="text-left px-5 py-3 text-xs font-semibold text-ink-500 hidden sm:table-cell">Location</th>
                <th className="text-left px-5 py-3 text-xs font-semibold text-ink-500 hidden md:table-cell">Spent</th>
                <th className="text-left px-5 py-3 text-xs font-semibold text-ink-500">Status</th>
                <th className="px-3 py-3" />
              </tr>
            </thead>
            <tbody className="divide-y divide-ink-50">
              {filtered.map(c => (
                <tr key={c.id} onClick={() => setSelected(selected === c.id ? null : c.id)}
                  className={`cursor-pointer transition-colors ${selected === c.id ? 'bg-phos-50' : 'hover:bg-ink-50/50'}`}>
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-3">
                      <div className={`w-9 h-9 rounded-xl bg-gradient-to-br ${c.color} flex items-center justify-center text-white font-bold text-xs shrink-0`}>
                        {c.initials}
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-ink-900">{c.name}</div>
                        <div className="text-xs text-ink-500">{c.company}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-5 py-4 hidden sm:table-cell">
                    <span className="text-sm text-ink-600">{c.flag} {c.country}</span>
                  </td>
                  <td className="px-5 py-4 hidden md:table-cell">
                    <span className="text-sm font-semibold text-ink-900">${c.spent.toLocaleString()}</span>
                  </td>
                  <td className="px-5 py-4">
                    <span className={`text-xs px-2 py-0.5 rounded-full font-medium capitalize ${statusStyle[c.status]}`}>{c.status}</span>
                  </td>
                  <td className="px-3 py-4">
                    <button className="p-1.5 text-ink-400 hover:text-ink-700 transition-colors"><ArrowUpRight size={14} /></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Client detail */}
        {client ? (
          <div className="bg-white rounded-xl border border-ink-200 p-6 h-fit sticky top-24 space-y-5">
            <div className="flex items-center gap-3">
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${client.color} flex items-center justify-center text-white font-bold`}>
                {client.initials}
              </div>
              <div>
                <h3 className="font-bold text-ink-900">{client.name}</h3>
                <p className="text-xs text-ink-500">{client.company}</p>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm text-ink-600"><MapPin size={13} className="text-ink-400" /> {client.flag} {client.country}</div>
              <div className="flex items-center gap-2 text-sm text-ink-600"><Mail size={13} className="text-ink-400" /> {client.email}</div>
              <div className="flex items-center gap-2 text-sm text-ink-600"><Globe size={13} className="text-ink-400" /> {client.website}</div>
            </div>

            <div className="grid grid-cols-2 gap-3 pt-4 border-t border-ink-100">
              {[
                { label: 'Total spent', value: `$${client.spent.toLocaleString()}` },
                { label: 'Projects', value: client.projects },
                { label: 'Client since', value: client.since },
                { label: 'Rating', value: client.rating ? `${client.rating}/5 ⭐` : 'N/A' },
              ].map(({ label, value }) => (
                <div key={label} className="bg-ink-50 rounded-lg p-3">
                  <div className="text-xs text-ink-400">{label}</div>
                  <div className="text-sm font-bold text-ink-900 mt-0.5">{value}</div>
                </div>
              ))}
            </div>

            <div className="space-y-2 pt-2">
              <button className="w-full py-2 bg-phos-600 hover:bg-phos-700 text-white text-sm font-semibold rounded-lg transition-colors">Message client</button>
              <button className="w-full py-2 border border-ink-200 hover:bg-ink-50 text-ink-700 text-sm font-semibold rounded-lg transition-colors">View projects</button>
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-xl border border-dashed border-ink-200 p-6 flex items-center justify-center h-48 sticky top-24">
            <p className="text-sm text-ink-400">Click a client to see details</p>
          </div>
        )}
      </div>
    </div>
  )
}
