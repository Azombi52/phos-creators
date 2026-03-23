import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ArrowRight, Eye, EyeOff, CheckCircle, Loader2 } from 'lucide-react'
import { useAuth } from '../context/AuthContext'

const perks = [
  'Free creator storefront — live in minutes',
  'First $1,000 earned, zero platform fees',
  'Global payments in 80+ countries',
  'Contracts and client tools built in',
]

export default function SignupPage() {
  const navigate = useNavigate()
  const { signUp } = useAuth()
  const [role, setRole] = useState('creator')
  const [showPass, setShowPass] = useState(false)
  const [loading, setLoading] = useState(false)
  const [serverError, setServerError] = useState('')
  const [errors, setErrors] = useState({})

  const [form, setForm] = useState({
    firstName: '', lastName: '', email: '', skill: '', password: '',
  })

  const set = (field) => (e) => {
    setForm(prev => ({ ...prev, [field]: e.target.value }))
    if (errors[field]) setErrors(prev => ({ ...prev, [field]: '' }))
    setServerError('')
  }

  function validate() {
    const errs = {}
    if (!form.firstName.trim()) errs.firstName = 'Required'
    if (!form.lastName.trim()) errs.lastName = 'Required'
    if (!form.email.trim()) errs.email = 'Required'
    else if (!/\S+@\S+\.\S+/.test(form.email)) errs.email = 'Enter a valid email'
    if (role === 'creator' && !form.skill) errs.skill = 'Please select your primary skill'
    if (!form.password) errs.password = 'Required'
    else if (form.password.length < 8) errs.password = 'Must be at least 8 characters'
    return errs
  }

  async function handleSubmit(e) {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) { setErrors(errs); return }

    setLoading(true)
    setServerError('')
    try {
      await signUp({ ...form, role })
      navigate('/dashboard')
    } catch (err) {
      setServerError(err.message || 'Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const inputClass = (field) =>
    `w-full px-3 py-2.5 border rounded-lg text-sm text-ink-900 placeholder-ink-400 focus:outline-none focus:ring-2 transition-colors ${
      errors[field]
        ? 'border-red-400 focus:border-red-400 focus:ring-red-100'
        : 'border-ink-200 focus:border-phos-400 focus:ring-phos-100'
    }`

  return (
    <div className="min-h-screen bg-white flex">
      {/* Left panel */}
      <div className="hidden lg:flex flex-col justify-between w-1/2 bg-ink-950 p-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-phos-600/20 rounded-full blur-3xl" />
        <div className="relative">
          <Link to="/" className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-phos-500 to-phos-700 flex items-center justify-center">
              <span className="text-white font-bold text-sm">P</span>
            </div>
            <span className="font-bold text-white text-lg tracking-tight">Phos Creators</span>
          </Link>
        </div>
        <div className="relative">
          <h2 className="text-3xl font-black text-white mb-6 leading-tight">
            Your skills are already good enough.
            <br /><span className="gradient-text">Now build the business.</span>
          </h2>
          <ul className="space-y-4">
            {perks.map(perk => (
              <li key={perk} className="flex items-start gap-3">
                <CheckCircle size={16} className="text-phos-400 mt-0.5 shrink-0" />
                <span className="text-ink-300 text-sm">{perk}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="relative">
          <div className="flex items-center gap-4 p-5 bg-ink-900 rounded-xl border border-ink-800">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-phos-400 to-phos-700 flex items-center justify-center text-white font-bold shrink-0">K</div>
            <div>
              <p className="text-white text-sm font-semibold">"I was making $800/month on Upwork."</p>
              <p className="text-ink-400 text-xs mt-1">"Now I earn $5,200/month from my Phos storefront." — Kofi M., Developer · Ghana</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right panel */}
      <div className="flex-1 flex flex-col justify-center px-6 py-12 lg:px-16 overflow-y-auto">
        <div className="lg:hidden mb-8">
          <Link to="/" className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-phos-500 to-phos-700 flex items-center justify-center">
              <span className="text-white font-bold text-xs">P</span>
            </div>
            <span className="font-bold text-ink-900 tracking-tight">Phos <span className="text-phos-600">Creators</span></span>
          </Link>
        </div>

        <div className="max-w-sm w-full mx-auto lg:mx-0">
          <h1 className="text-2xl font-black text-ink-900 mb-2">Create your account</h1>
          <p className="text-ink-500 text-sm mb-8">
            Already have an account?{' '}
            <Link to="/login" className="text-phos-600 font-semibold hover:underline">Sign in</Link>
          </p>

          <div className="flex bg-ink-100 rounded-lg p-1 mb-6">
            {['creator', 'client'].map(r => (
              <button key={r} type="button" onClick={() => { setRole(r); setErrors({}) }}
                className={`flex-1 py-2 rounded-md text-sm font-semibold capitalize transition-all ${role === r ? 'bg-white text-ink-900 shadow-sm' : 'text-ink-500 hover:text-ink-700'}`}>
                I'm a {r}
              </button>
            ))}
          </div>

          {serverError && (
            <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-sm text-red-600">
              {serverError}
            </div>
          )}

          <form className="space-y-4" onSubmit={handleSubmit} noValidate>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-semibold text-ink-700 mb-1.5 block">First name</label>
                <input type="text" placeholder="Amara" value={form.firstName} onChange={set('firstName')} className={inputClass('firstName')} />
                {errors.firstName && <p className="text-xs text-red-500 mt-1">{errors.firstName}</p>}
              </div>
              <div>
                <label className="text-xs font-semibold text-ink-700 mb-1.5 block">Last name</label>
                <input type="text" placeholder="Diallo" value={form.lastName} onChange={set('lastName')} className={inputClass('lastName')} />
                {errors.lastName && <p className="text-xs text-red-500 mt-1">{errors.lastName}</p>}
              </div>
            </div>

            <div>
              <label className="text-xs font-semibold text-ink-700 mb-1.5 block">Email address</label>
              <input type="email" placeholder="amara@example.com" value={form.email} onChange={set('email')} className={inputClass('email')} />
              {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
            </div>

            {role === 'creator' && (
              <div>
                <label className="text-xs font-semibold text-ink-700 mb-1.5 block">What do you create?</label>
                <select value={form.skill} onChange={set('skill')} className={inputClass('skill')}>
                  <option value="">Select your primary skill</option>
                  {['Brand & Graphic Design','Web Development','Mobile Development','Photography','Videography & Film','Motion & Animation','Illustration','Copywriting & Content','Marketing & Strategy','Music & Audio','Other'].map(s => <option key={s}>{s}</option>)}
                </select>
                {errors.skill && <p className="text-xs text-red-500 mt-1">{errors.skill}</p>}
              </div>
            )}

            <div>
              <label className="text-xs font-semibold text-ink-700 mb-1.5 block">Password</label>
              <div className="relative">
                <input type={showPass ? 'text' : 'password'} placeholder="Min. 8 characters" value={form.password} onChange={set('password')} className={`${inputClass('password')} pr-10`} />
                <button type="button" onClick={() => setShowPass(!showPass)} className="absolute right-3 top-1/2 -translate-y-1/2 text-ink-400 hover:text-ink-700">
                  {showPass ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
              {errors.password && <p className="text-xs text-red-500 mt-1">{errors.password}</p>}
            </div>

            <button type="submit" disabled={loading}
              className="w-full py-3 bg-phos-600 hover:bg-phos-700 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold rounded-lg transition-colors flex items-center justify-center gap-2 text-sm">
              {loading ? <><Loader2 size={16} className="animate-spin" />Creating your account…</> : <>Create {role === 'creator' ? 'creator ' : ''}account<ArrowRight size={16} /></>}
            </button>
          </form>

          <p className="text-xs text-ink-400 text-center mt-6 leading-relaxed">
            By creating an account, you agree to our{' '}
            <Link to="/terms" className="underline hover:text-ink-700">Terms of Service</Link> and{' '}
            <Link to="/privacy" className="underline hover:text-ink-700">Privacy Policy</Link>.
          </p>
        </div>
      </div>
    </div>
  )
}
