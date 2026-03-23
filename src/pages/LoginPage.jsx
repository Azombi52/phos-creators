import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ArrowRight, Eye, EyeOff, Loader2, CheckCircle } from 'lucide-react'
import { useAuth } from '../context/AuthContext'

export default function LoginPage() {
  const navigate = useNavigate()
  const { signIn } = useAuth()
  const [showPass, setShowPass] = useState(false)
  const [loading, setLoading] = useState(false)
  const [serverError, setServerError] = useState('')
  const [form, setForm] = useState({ email: '', password: '' })
  const [errors, setErrors] = useState({})

  const set = (field) => (e) => {
    setForm(prev => ({ ...prev, [field]: e.target.value }))
    if (errors[field]) setErrors(prev => ({ ...prev, [field]: '' }))
    setServerError('')
  }

  function validate() {
    const errs = {}
    if (!form.email.trim()) errs.email = 'Required'
    if (!form.password) errs.password = 'Required'
    return errs
  }

  async function handleSubmit(e) {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) { setErrors(errs); return }
    setLoading(true)
    try {
      await signIn(form)
      navigate('/dashboard')
    } catch (err) {
      setServerError('Invalid email or password. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const inputClass = (field) =>
    `w-full px-3 py-2.5 border rounded-lg text-sm text-ink-900 placeholder-ink-400 focus:outline-none focus:ring-2 transition-colors ${
      errors[field] ? 'border-red-400 focus:border-red-400 focus:ring-red-100' : 'border-ink-200 focus:border-phos-400 focus:ring-phos-100'
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
        <div className="relative space-y-6">
          <h2 className="text-3xl font-black text-white leading-tight">
            Welcome back.<br />
            <span className="gradient-text">Your business awaits.</span>
          </h2>
          <ul className="space-y-3">
            {['Check your active projects','Review new client messages','Track your earnings','Update your storefront'].map(item => (
              <li key={item} className="flex items-center gap-3 text-ink-300 text-sm">
                <CheckCircle size={14} className="text-phos-400 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="relative p-5 bg-ink-900 rounded-xl border border-ink-800">
          <p className="text-ink-300 text-sm italic">"Phos is the only platform that actually feels like it was built for creators, not for the platform's profit."</p>
          <p className="text-phos-400 text-xs font-semibold mt-2">— Zara O., Motion Designer · Nigeria</p>
        </div>
      </div>

      {/* Right panel */}
      <div className="flex-1 flex flex-col justify-center px-6 py-12 lg:px-16">
        <div className="lg:hidden mb-8">
          <Link to="/" className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-phos-500 to-phos-700 flex items-center justify-center">
              <span className="text-white font-bold text-xs">P</span>
            </div>
            <span className="font-bold text-ink-900 tracking-tight">Phos <span className="text-phos-600">Creators</span></span>
          </Link>
        </div>

        <div className="max-w-sm w-full mx-auto lg:mx-0">
          <h1 className="text-2xl font-black text-ink-900 mb-2">Sign in to your account</h1>
          <p className="text-ink-500 text-sm mb-8">
            Don't have an account?{' '}
            <Link to="/signup" className="text-phos-600 font-semibold hover:underline">Create one free</Link>
          </p>

          {serverError && (
            <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-sm text-red-600">
              {serverError}
            </div>
          )}

          <form className="space-y-4" onSubmit={handleSubmit} noValidate>
            <div>
              <label className="text-xs font-semibold text-ink-700 mb-1.5 block">Email address</label>
              <input type="email" placeholder="amara@example.com" value={form.email} onChange={set('email')} className={inputClass('email')} />
              {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
            </div>

            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="text-xs font-semibold text-ink-700">Password</label>
                <Link to="/forgot-password" className="text-xs text-phos-600 hover:underline">Forgot password?</Link>
              </div>
              <div className="relative">
                <input type={showPass ? 'text' : 'password'} placeholder="Your password" value={form.password} onChange={set('password')} className={`${inputClass('password')} pr-10`} />
                <button type="button" onClick={() => setShowPass(!showPass)} className="absolute right-3 top-1/2 -translate-y-1/2 text-ink-400 hover:text-ink-700">
                  {showPass ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
              {errors.password && <p className="text-xs text-red-500 mt-1">{errors.password}</p>}
            </div>

            <button type="submit" disabled={loading}
              className="w-full py-3 bg-phos-600 hover:bg-phos-700 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold rounded-lg transition-colors flex items-center justify-center gap-2 text-sm">
              {loading ? <><Loader2 size={16} className="animate-spin" />Signing in…</> : <>Sign in<ArrowRight size={16} /></>}
            </button>
          </form>

          <div className="flex items-center gap-3 my-6">
            <div className="flex-1 h-px bg-ink-200" />
            <span className="text-xs text-ink-400">or</span>
            <div className="flex-1 h-px bg-ink-200" />
          </div>

          <Link to="/signup" className="block w-full py-3 border-2 border-ink-200 rounded-lg text-sm font-semibold text-ink-700 hover:border-ink-400 hover:bg-ink-50 transition-colors text-center">
            Create a free account
          </Link>
        </div>
      </div>
    </div>
  )
}
