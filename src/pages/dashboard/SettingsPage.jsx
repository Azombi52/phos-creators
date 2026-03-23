import { useState } from 'react'
import { useAuth } from '../../context/AuthContext'
import { Save, Loader2, User, Bell, CreditCard, Shield, Globe } from 'lucide-react'

const tabs = [
  { id: 'profile', label: 'Profile', icon: User },
  { id: 'notifications', label: 'Notifications', icon: Bell },
  { id: 'payments', label: 'Payout settings', icon: CreditCard },
  { id: 'security', label: 'Security', icon: Shield },
]

export default function SettingsPage() {
  const { user, profile } = useAuth()
  const [activeTab, setActiveTab] = useState('profile')
  const [saving, setSaving] = useState(false)
  const [saved, setSaved] = useState(false)

  const firstName = profile?.first_name || user?.user_metadata?.first_name || ''
  const lastName = profile?.last_name || user?.user_metadata?.last_name || ''

  const [form, setForm] = useState({
    firstName,
    lastName,
    email: user?.email || '',
    bio: 'I craft brand identities that make companies impossible to ignore. Working with startups and scale-ups across Africa, Europe, and North America.',
    location: 'Lagos, Nigeria',
    website: '',
    skill: profile?.skill || user?.user_metadata?.skill || '',
  })

  const set = (field) => (e) => setForm(prev => ({ ...prev, [field]: e.target.value }))

  async function handleSave(e) {
    e.preventDefault()
    setSaving(true)
    // TODO: save to Supabase profiles table
    await new Promise(r => setTimeout(r, 800))
    setSaving(false)
    setSaved(true)
    setTimeout(() => setSaved(false), 2500)
  }

  const inputClass = 'w-full px-3 py-2.5 border border-ink-200 rounded-lg text-sm text-ink-900 focus:outline-none focus:border-phos-400 focus:ring-2 focus:ring-phos-100 transition-colors'

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-xl font-bold text-ink-900">Settings</h1>
        <p className="text-sm text-ink-500">Manage your account, notifications, and payout preferences.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Tab sidebar */}
        <div className="lg:col-span-1">
          <nav className="space-y-1">
            {tabs.map(({ id, label, icon: Icon }) => (
              <button key={id} onClick={() => setActiveTab(id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors text-left ${
                  activeTab === id ? 'bg-phos-50 text-phos-700' : 'text-ink-600 hover:bg-ink-100'
                }`}>
                <Icon size={15} />
                {label}
              </button>
            ))}
          </nav>
        </div>

        {/* Tab content */}
        <div className="lg:col-span-3">
          {activeTab === 'profile' && (
            <form onSubmit={handleSave} className="bg-white rounded-xl border border-ink-200 p-6 space-y-5">
              <h2 className="font-bold text-ink-900">Profile information</h2>

              {/* Avatar */}
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-phos-400 to-phos-700 flex items-center justify-center text-white text-2xl font-black">
                  {firstName[0] || 'U'}
                </div>
                <div>
                  <button type="button" className="text-sm font-semibold text-phos-600 hover:underline">Upload photo</button>
                  <p className="text-xs text-ink-400 mt-0.5">JPG, PNG up to 5MB</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-semibold text-ink-700 mb-1.5 block">First name</label>
                  <input type="text" value={form.firstName} onChange={set('firstName')} className={inputClass} />
                </div>
                <div>
                  <label className="text-xs font-semibold text-ink-700 mb-1.5 block">Last name</label>
                  <input type="text" value={form.lastName} onChange={set('lastName')} className={inputClass} />
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-ink-700 mb-1.5 block">Email address</label>
                <input type="email" value={form.email} onChange={set('email')} className={inputClass} />
              </div>

              <div>
                <label className="text-xs font-semibold text-ink-700 mb-1.5 block">Primary skill</label>
                <select value={form.skill} onChange={set('skill')} className={inputClass}>
                  <option value="">Select your skill</option>
                  {['Brand & Graphic Design','Web Development','Mobile Development','Photography','Videography & Film','Motion & Animation','Illustration','Copywriting & Content','Marketing & Strategy','Music & Audio','Other'].map(s => <option key={s}>{s}</option>)}
                </select>
              </div>

              <div>
                <label className="text-xs font-semibold text-ink-700 mb-1.5 block">Bio</label>
                <textarea value={form.bio} onChange={set('bio')} rows={3}
                  className={`${inputClass} resize-none`} placeholder="Tell clients about yourself..." />
                <p className="text-xs text-ink-400 mt-1">{form.bio.length}/300 characters</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-semibold text-ink-700 mb-1.5 block">Location</label>
                  <input type="text" value={form.location} onChange={set('location')} placeholder="City, Country" className={inputClass} />
                </div>
                <div>
                  <label className="text-xs font-semibold text-ink-700 mb-1.5 block">Website</label>
                  <input type="url" value={form.website} onChange={set('website')} placeholder="https://yoursite.com" className={inputClass} />
                </div>
              </div>

              <div className="flex items-center gap-3 pt-2">
                <button type="submit" disabled={saving}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-phos-600 hover:bg-phos-700 disabled:opacity-60 text-white text-sm font-semibold rounded-lg transition-colors">
                  {saving ? <><Loader2 size={14} className="animate-spin" />Saving…</> : <><Save size={14} />Save changes</>}
                </button>
                {saved && <span className="text-sm text-emerald-600 font-semibold">✓ Saved!</span>}
              </div>
            </form>
          )}

          {activeTab === 'notifications' && (
            <div className="bg-white rounded-xl border border-ink-200 p-6 space-y-5">
              <h2 className="font-bold text-ink-900">Notification preferences</h2>
              {[
                { label: 'New booking request', desc: 'When a client books one of your packages', email: true, push: true },
                { label: 'New message', desc: 'When you receive a message from a client', email: true, push: true },
                { label: 'Milestone approved', desc: 'When a client approves a milestone', email: true, push: false },
                { label: 'Payment received', desc: 'When a payment is released to your balance', email: true, push: true },
                { label: 'New review', desc: 'When a client leaves a review on your storefront', email: true, push: false },
                { label: 'Marketing & tips', desc: 'Creator tips, platform news, and growth insights', email: false, push: false },
              ].map(({ label, desc, email: e, push: p }) => (
                <div key={label} className="flex items-start justify-between py-4 border-b border-ink-50 last:border-0">
                  <div>
                    <p className="text-sm font-semibold text-ink-900">{label}</p>
                    <p className="text-xs text-ink-500 mt-0.5">{desc}</p>
                  </div>
                  <div className="flex items-center gap-6 shrink-0 ml-4">
                    <label className="flex flex-col items-center gap-1 cursor-pointer">
                      <input type="checkbox" defaultChecked={e} className="accent-phos-600 w-4 h-4" />
                      <span className="text-xs text-ink-400">Email</span>
                    </label>
                    <label className="flex flex-col items-center gap-1 cursor-pointer">
                      <input type="checkbox" defaultChecked={p} className="accent-phos-600 w-4 h-4" />
                      <span className="text-xs text-ink-400">Push</span>
                    </label>
                  </div>
                </div>
              ))}
              <button className="px-5 py-2.5 bg-phos-600 hover:bg-phos-700 text-white text-sm font-semibold rounded-lg transition-colors inline-flex items-center gap-2">
                <Save size={14} /> Save preferences
              </button>
            </div>
          )}

          {activeTab === 'payments' && (
            <div className="bg-white rounded-xl border border-ink-200 p-6 space-y-6">
              <h2 className="font-bold text-ink-900">Payout settings</h2>
              <div className="p-4 bg-phos-50 border border-phos-200 rounded-xl text-sm text-phos-800">
                Your next payout of <strong>$2,650</strong> is available to withdraw.
              </div>

              <div>
                <h3 className="text-sm font-semibold text-ink-900 mb-4">Payout accounts</h3>
                <div className="space-y-3">
                  {[
                    { label: 'GTBank · ****4521', type: 'Bank transfer', currency: 'NGN', primary: true },
                    { label: 'M-Pesa · +254 7XX XXX', type: 'Mobile money', currency: 'KES', primary: false },
                  ].map(({ label, type, currency, primary }) => (
                    <div key={label} className={`flex items-center justify-between p-4 rounded-xl border ${primary ? 'border-phos-300 bg-phos-50' : 'border-ink-200'}`}>
                      <div>
                        <p className="text-sm font-semibold text-ink-900">{label}</p>
                        <p className="text-xs text-ink-500">{type} · {currency}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        {primary && <span className="text-xs bg-phos-600 text-white px-2 py-0.5 rounded-full font-semibold">Primary</span>}
                        <button className="text-xs text-ink-400 hover:text-ink-700">Edit</button>
                      </div>
                    </div>
                  ))}
                </div>
                <button className="mt-3 text-sm text-phos-600 font-semibold hover:underline">+ Add payout account</button>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-ink-900 mb-3">Payout schedule</h3>
                <select className={`${inputClass} max-w-xs`}>
                  <option>Weekly (every Friday)</option>
                  <option>Bi-weekly</option>
                  <option>Monthly</option>
                  <option>Manual (on request)</option>
                </select>
              </div>
            </div>
          )}

          {activeTab === 'security' && (
            <div className="space-y-4">
              <div className="bg-white rounded-xl border border-ink-200 p-6 space-y-4">
                <h2 className="font-bold text-ink-900">Change password</h2>
                {['Current password', 'New password', 'Confirm new password'].map(label => (
                  <div key={label}>
                    <label className="text-xs font-semibold text-ink-700 mb-1.5 block">{label}</label>
                    <input type="password" placeholder="••••••••" className={inputClass} />
                  </div>
                ))}
                <button className="px-5 py-2.5 bg-phos-600 hover:bg-phos-700 text-white text-sm font-semibold rounded-lg transition-colors">
                  Update password
                </button>
              </div>

              <div className="bg-white rounded-xl border border-ink-200 p-6">
                <h2 className="font-bold text-ink-900 mb-1">Two-factor authentication</h2>
                <p className="text-sm text-ink-500 mb-4">Add an extra layer of security to your account.</p>
                <button className="px-5 py-2.5 border border-ink-200 hover:bg-ink-50 text-ink-700 text-sm font-semibold rounded-lg transition-colors">
                  Enable 2FA
                </button>
              </div>

              <div className="bg-white rounded-xl border border-red-200 p-6">
                <h2 className="font-bold text-red-700 mb-1">Danger zone</h2>
                <p className="text-sm text-ink-500 mb-4">Permanently delete your account and all associated data.</p>
                <button className="px-5 py-2.5 border border-red-300 text-red-600 hover:bg-red-50 text-sm font-semibold rounded-lg transition-colors">
                  Delete account
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
