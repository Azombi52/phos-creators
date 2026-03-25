import { useState } from 'react'
import { useAuth } from '../../context/AuthContext'

const tabs = ['Profile', 'Notifications', 'Security']

export default function ClientSettingsPage() {
  const { user, profile } = useAuth()
  const [tab, setTab] = useState('Profile')
  const [saved, setSaved] = useState(false)

  const firstName = profile?.first_name || user?.user_metadata?.first_name || ''
  const lastName  = profile?.last_name  || user?.user_metadata?.last_name  || ''

  function handleSave(e) {
    e.preventDefault()
    setSaved(true)
    setTimeout(() => setSaved(false), 2500)
  }

  const inputClass = 'w-full px-3 py-2.5 border border-ink-200 rounded-lg text-sm text-ink-900 focus:outline-none focus:ring-2 focus:ring-phos-300 focus:border-phos-400'

  return (
    <div className="space-y-6 max-w-2xl">
      <h1 className="text-2xl font-bold text-ink-900">Settings</h1>

      <div className="flex gap-1 bg-ink-100 rounded-lg p-1 w-fit">
        {tabs.map(t => (
          <button key={t} onClick={() => setTab(t)}
            className={`px-4 py-2 rounded-md text-sm font-semibold transition-all ${tab === t ? 'bg-white text-ink-900 shadow-sm' : 'text-ink-500 hover:text-ink-700'}`}>
            {t}
          </button>
        ))}
      </div>

      {tab === 'Profile' && (
        <form onSubmit={handleSave} className="bg-white rounded-xl border border-ink-100 p-6 space-y-4">
          <h2 className="text-base font-semibold text-ink-900">Profile Information</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-semibold text-ink-700 mb-1.5 block">First name</label>
              <input defaultValue={firstName} className={inputClass} />
            </div>
            <div>
              <label className="text-xs font-semibold text-ink-700 mb-1.5 block">Last name</label>
              <input defaultValue={lastName} className={inputClass} />
            </div>
          </div>
          <div>
            <label className="text-xs font-semibold text-ink-700 mb-1.5 block">Email address</label>
            <input defaultValue={user?.email} type="email" className={inputClass} />
          </div>
          <div>
            <label className="text-xs font-semibold text-ink-700 mb-1.5 block">Company (optional)</label>
            <input placeholder="Your company name" className={inputClass} />
          </div>
          <div className="flex items-center gap-3 pt-2">
            <button type="submit" className="px-5 py-2.5 bg-phos-500 hover:bg-phos-600 text-ink-950 font-semibold rounded-lg text-sm transition-colors">
              Save changes
            </button>
            {saved && <p className="text-sm text-green-600 font-semibold">Saved!</p>}
          </div>
        </form>
      )}

      {tab === 'Notifications' && (
        <div className="bg-white rounded-xl border border-ink-100 p-6 space-y-4">
          <h2 className="text-base font-semibold text-ink-900">Notification Preferences</h2>
          {[
            { label: 'Project updates', desc: 'When a creator updates your project status' },
            { label: 'New messages', desc: 'When you receive a message from a creator' },
            { label: 'Payment receipts', desc: 'When a payment is processed successfully' },
            { label: 'Milestone completion', desc: 'When a creator completes a milestone' },
          ].map(({ label, desc }) => (
            <div key={label} className="flex items-center justify-between py-3 border-b border-ink-100 last:border-0">
              <div>
                <p className="text-sm font-semibold text-ink-900">{label}</p>
                <p className="text-xs text-ink-400 mt-0.5">{desc}</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" defaultChecked className="sr-only peer" />
                <div className="w-10 h-5 bg-ink-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-5 after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-phos-500" />
              </label>
            </div>
          ))}
        </div>
      )}

      {tab === 'Security' && (
        <div className="bg-white rounded-xl border border-ink-100 p-6 space-y-4">
          <h2 className="text-base font-semibold text-ink-900">Change Password</h2>
          <div>
            <label className="text-xs font-semibold text-ink-700 mb-1.5 block">Current password</label>
            <input type="password" placeholder="••••••••" className={inputClass} />
          </div>
          <div>
            <label className="text-xs font-semibold text-ink-700 mb-1.5 block">New password</label>
            <input type="password" placeholder="Min. 8 characters" className={inputClass} />
          </div>
          <div>
            <label className="text-xs font-semibold text-ink-700 mb-1.5 block">Confirm new password</label>
            <input type="password" placeholder="Repeat new password" className={inputClass} />
          </div>
          <button className="px-5 py-2.5 bg-phos-500 hover:bg-phos-600 text-ink-950 font-semibold rounded-lg text-sm transition-colors">
            Update password
          </button>
        </div>
      )}
    </div>
  )
}
