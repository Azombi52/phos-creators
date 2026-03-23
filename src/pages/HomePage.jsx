import { Link } from 'react-router-dom'
import {
  ArrowRight, Star, Globe, Shield, Zap, BarChart3,
  CreditCard, FileText, Users, CheckCircle, Play,
  Sparkles, TrendingUp, Package, Palette, Code2,
  Camera, PenTool, Music, Video, Megaphone
} from 'lucide-react'
import Button from '../components/ui/Button'
import Badge from '../components/ui/Badge'

const stats = [
  { value: '12,000+', label: 'Creators onboarded' },
  { value: '$4.2M+', label: 'Creator earnings' },
  { value: '80+', label: 'Countries reached' },
  { value: '4.9/5', label: 'Platform rating' },
]

const creatorTypes = [
  { icon: Palette, label: 'Designers' },
  { icon: Code2, label: 'Developers' },
  { icon: Camera, label: 'Photographers' },
  { icon: Video, label: 'Videographers' },
  { icon: PenTool, label: 'Illustrators' },
  { icon: Music, label: 'Musicians' },
  { icon: Megaphone, label: 'Marketers' },
  { icon: FileText, label: 'Writers' },
]

const features = [
  {
    icon: Globe,
    title: 'Your own storefront URL',
    desc: 'A professional business address that\'s 100% yours. Custom branding, packages, and pricing — all in one link.',
    color: 'bg-blue-50 text-blue-600',
  },
  {
    icon: Package,
    title: 'Service packages & retainers',
    desc: 'Bundle your work into fixed-price packages, recurring subscriptions, or long-term retainers. You set the terms.',
    color: 'bg-phos-50 text-phos-600',
  },
  {
    icon: CreditCard,
    title: 'Global payments, zero friction',
    desc: 'Accept USD, EUR, GBP and more. Funds protected with escrow. Instant payouts to your local account.',
    color: 'bg-emerald-50 text-emerald-600',
  },
  {
    icon: FileText,
    title: 'Contracts & milestones',
    desc: 'Professional contracts auto-generated for every project. Milestone tracking keeps everyone aligned.',
    color: 'bg-purple-50 text-purple-600',
  },
  {
    icon: Users,
    title: 'Client management',
    desc: 'Built-in CRM for briefs, communication, file sharing, and revision tracking. No more scattered emails.',
    color: 'bg-rose-50 text-rose-600',
  },
  {
    icon: BarChart3,
    title: 'Analytics that matter',
    desc: 'See who\'s viewing your storefront, what converts, and where your earnings are trending. Real data, real growth.',
    color: 'bg-amber-50 text-amber-600',
  },
]

const howItWorks = [
  {
    step: '01',
    title: 'Build your storefront',
    desc: 'Set up your professional creator page in under 10 minutes. Add your services, packages, portfolio, and pricing.',
  },
  {
    step: '02',
    title: 'Get discovered globally',
    desc: 'Clients from anywhere find you through Phos search, your public URL, or your own social channels.',
  },
  {
    step: '03',
    title: 'Close, deliver, get paid',
    desc: 'Client books and pays upfront. You deliver milestone by milestone. Funds released securely, every time.',
  },
]

const testimonials = [
  {
    name: 'Amara Diallo',
    role: 'Brand Designer · Senegal',
    quote: 'I used to rely on DMs and PayPal to close clients. Now I have a storefront that converts on its own. My revenue tripled in 4 months.',
    avatar: 'AD',
    color: 'bg-phos-100 text-phos-700',
    earnings: '$18,400 earned',
  },
  {
    name: 'Kofi Mensah',
    role: 'Full-Stack Developer · Ghana',
    quote: 'Phos gave me the infrastructure I always wanted but couldn\'t build myself — contracts, invoicing, client portals. I\'m running a real business now.',
    avatar: 'KM',
    color: 'bg-emerald-100 text-emerald-700',
    earnings: '$31,200 earned',
  },
  {
    name: 'Zara Okonkwo',
    role: 'Motion Designer · Nigeria',
    quote: 'I stopped applying for jobs and started getting inbound clients from the US and UK. Phos is the platform I wish existed five years ago.',
    avatar: 'ZO',
    color: 'bg-purple-100 text-purple-700',
    earnings: '$24,800 earned',
  },
]

const plans = [
  { name: 'Starter', price: 'Free', desc: 'Launch your storefront and start selling.' },
  { name: 'Pro', price: '$19/mo', desc: 'Serious creators who want the full toolkit.', popular: true },
  { name: 'Studio', price: '$49/mo', desc: 'Teams and agencies running at scale.' },
]

export default function HomePage() {
  return (
    <div className="overflow-x-hidden">
      {/* ─── HERO ─── */}
      <section className="relative min-h-screen flex items-center bg-ink-950 overflow-hidden">
        {/* Background texture */}
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink-950 via-ink-900/80 to-ink-950" />

        {/* Glow orbs */}
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-phos-600/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-phos-400/10 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
          <div className="animate-fade-up">
            <Badge variant="dark" className="mb-8 border border-phos-700/50">
              <Sparkles size={12} className="text-phos-400" />
              <span className="text-phos-300">Now open to all African creators</span>
            </Badge>
          </div>

          <h1 className="animate-fade-up animate-delay-100 text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black text-white leading-[1.05] tracking-tight mb-8">
            Your creative skills
            <br />
            deserve a{' '}
            <span className="gradient-text">real business</span>
            <br />
            behind them.
          </h1>

          <p className="animate-fade-up animate-delay-200 max-w-2xl mx-auto text-lg sm:text-xl text-ink-300 leading-relaxed mb-10">
            Phos Creators is the platform that gives African creators a professional storefront,
            global payments, contracts, and client tools — everything to stop freelancing and
            start running a business.
          </p>

          <div className="animate-fade-up animate-delay-300 flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button to="/signup" size="xl" variant="primary" className="w-full sm:w-auto text-base">
              Build your storefront — it's free
              <ArrowRight size={18} />
            </Button>
            <Button to="/explore" size="xl" variant="ghost" className="w-full sm:w-auto text-white hover:bg-ink-800 text-base">
              <Play size={16} className="text-phos-400" />
              See how it works
            </Button>
          </div>

          {/* Social proof bar */}
          <div className="animate-fade-up animate-delay-400 flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
            <div className="flex items-center gap-2">
              <div className="flex">
                {['AD', 'KM', 'ZO', 'FN', 'TW'].map((init, i) => (
                  <div
                    key={init}
                    className="w-8 h-8 rounded-full bg-gradient-to-br from-phos-400 to-phos-700 border-2 border-ink-900 flex items-center justify-center text-white text-xs font-bold"
                    style={{ marginLeft: i > 0 ? '-8px' : 0 }}
                  >
                    {init[0]}
                  </div>
                ))}
              </div>
              <span className="text-sm text-ink-400">12,000+ creators already building</span>
            </div>
            <div className="flex items-center gap-1.5">
              {[1,2,3,4,5].map(i => <Star key={i} size={14} className="text-phos-400 fill-phos-400" />)}
              <span className="text-sm text-ink-400">4.9 rating · 2,400+ reviews</span>
            </div>
          </div>
        </div>

        {/* Storefront preview mockup */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl px-4 opacity-20 pointer-events-none">
          <div className="h-px bg-gradient-to-r from-transparent via-phos-500 to-transparent" />
        </div>
      </section>

      {/* ─── STATS ─── */}
      <section className="bg-white border-b border-ink-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map(({ value, label }) => (
              <div key={label} className="text-center">
                <div className="text-3xl lg:text-4xl font-black text-ink-900 mb-1">{value}</div>
                <div className="text-sm text-ink-500">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHO IT'S FOR ─── */}
      <section className="py-24 bg-ink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-6">Built for every creative discipline</Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-ink-900 tracking-tight mb-4">
            Whatever you create,
            <br />
            <span className="gradient-text-dark">Phos has your back.</span>
          </h2>
          <p className="max-w-xl mx-auto text-ink-500 mb-12">
            From brand designers to developers, videographers to writers — Phos is built for any creator who sells services.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {creatorTypes.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-2.5 px-5 py-3 bg-white rounded-full border border-ink-200 text-sm font-medium text-ink-700 shadow-sm hover:border-phos-300 hover:text-phos-700 transition-colors card-hover cursor-default"
              >
                <Icon size={16} className="text-phos-500" />
                {label}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FEATURES ─── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-6">Platform features</Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-ink-900 tracking-tight mb-4">
              Everything you need to run
              <br />
              <span className="gradient-text-dark">a serious creative business.</span>
            </h2>
            <p className="max-w-xl mx-auto text-ink-500">
              Stop stitching together 6 different tools. Phos gives you a fully integrated platform — storefront, payments, contracts, and client management — in one place.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map(({ icon: Icon, title, desc, color }) => (
              <div key={title} className="p-6 rounded-2xl border border-ink-100 bg-white hover:border-phos-200 transition-colors card-hover group">
                <div className={`w-11 h-11 rounded-xl ${color} flex items-center justify-center mb-5`}>
                  <Icon size={20} />
                </div>
                <h3 className="text-base font-bold text-ink-900 mb-2">{title}</h3>
                <p className="text-sm text-ink-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── HOW IT WORKS ─── */}
      <section className="py-24 bg-ink-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-phos-600/10 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="dark" className="mb-6 border border-phos-700/50">
              <span className="text-phos-300">Simple by design</span>
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-4">
              From setup to first client
              <br />
              <span className="gradient-text">in one afternoon.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {howItWorks.map(({ step, title, desc }, i) => (
              <div key={step} className="relative">
                {i < 2 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-px bg-gradient-to-r from-phos-700/50 to-transparent z-0" style={{ width: 'calc(100% - 2rem)', left: 'calc(100% + 1rem)' }} />
                )}
                <div className="p-8 rounded-2xl bg-ink-900 border border-ink-800 hover:border-phos-700/50 transition-colors group">
                  <div className="text-5xl font-black gradient-text mb-4">{step}</div>
                  <h3 className="text-lg font-bold text-white mb-3">{title}</h3>
                  <p className="text-sm text-ink-400 leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button to="/how-it-works" size="lg" variant="primary">
              See the full walkthrough
              <ArrowRight size={16} />
            </Button>
          </div>
        </div>
      </section>

      {/* ─── STOREFRONT PREVIEW ─── */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge className="mb-6">Creator storefront</Badge>
              <h2 className="text-3xl sm:text-4xl font-black text-ink-900 tracking-tight mb-6">
                A storefront that
                <br />
                <span className="gradient-text-dark">works while you sleep.</span>
              </h2>
              <p className="text-ink-500 leading-relaxed mb-8">
                Your Phos storefront is a professional business page that showcases your work, lists your packages, and converts visitors into paying clients — automatically. No code, no designer needed.
              </p>
              <ul className="space-y-4 mb-10">
                {[
                  'Custom URL: yourname.phoscreators.com',
                  'Service packages with instant booking',
                  'Portfolio with case studies',
                  'Built-in reviews and trust badges',
                  'One-click client onboarding',
                ].map(item => (
                  <li key={item} className="flex items-start gap-3 text-sm text-ink-700">
                    <CheckCircle size={16} className="text-phos-500 mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Button to="/storefront" size="lg">
                See an example storefront
                <ArrowRight size={16} />
              </Button>
            </div>

            {/* Storefront mockup */}
            <div className="relative">
              <div className="bg-ink-50 rounded-2xl border border-ink-200 overflow-hidden shadow-2xl">
                {/* Browser chrome */}
                <div className="bg-ink-100 px-4 py-3 flex items-center gap-2 border-b border-ink-200">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                    <div className="w-3 h-3 rounded-full bg-green-400" />
                  </div>
                  <div className="flex-1 mx-4 bg-white rounded-md px-3 py-1 text-xs text-ink-400 text-center">
                    amara.phoscreators.com
                  </div>
                </div>

                {/* Storefront content */}
                <div className="p-6">
                  {/* Creator header */}
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-phos-400 to-phos-700 flex items-center justify-center text-white text-xl font-black shrink-0">
                      A
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-bold text-ink-900">Amara Diallo</h3>
                        <Shield size={14} className="text-phos-500" />
                      </div>
                      <p className="text-xs text-ink-500 mb-2">Brand Designer & Visual Strategist · Dakar, Senegal</p>
                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-1">
                          {[1,2,3,4,5].map(i => <Star key={i} size={10} className="text-phos-400 fill-phos-400" />)}
                          <span className="text-xs text-ink-500">4.9 (84)</span>
                        </div>
                        <Badge variant="green" className="text-xs py-0.5">Available</Badge>
                      </div>
                    </div>
                  </div>

                  {/* Service packages */}
                  <div className="space-y-3">
                    {[
                      { name: 'Brand Identity Package', price: '$1,200', timeline: '14 days', popular: true },
                      { name: 'Logo Design', price: '$350', timeline: '5 days', popular: false },
                      { name: 'Monthly Brand Retainer', price: '$800/mo', timeline: 'Ongoing', popular: false },
                    ].map(pkg => (
                      <div key={pkg.name} className={`p-4 rounded-xl border ${pkg.popular ? 'border-phos-300 bg-phos-50' : 'border-ink-200 bg-white'} flex items-center justify-between`}>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-sm font-semibold text-ink-900">{pkg.name}</span>
                            {pkg.popular && <Badge className="text-xs py-0">Popular</Badge>}
                          </div>
                          <span className="text-xs text-ink-400">{pkg.timeline}</span>
                        </div>
                        <div className="text-right">
                          <div className="text-sm font-bold text-ink-900">{pkg.price}</div>
                          <button className="text-xs text-phos-600 font-semibold hover:underline">Book →</button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating earnings card */}
              <div className="absolute -bottom-4 -right-4 bg-white rounded-xl border border-ink-200 shadow-lg p-4 flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center">
                  <TrendingUp size={16} className="text-emerald-600" />
                </div>
                <div>
                  <div className="text-xs text-ink-500">This month</div>
                  <div className="text-sm font-bold text-ink-900">$4,800 earned</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─── */}
      <section className="py-24 bg-ink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-6">Creator stories</Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-ink-900 tracking-tight mb-4">
              Creators who chose to
              <br />
              <span className="gradient-text-dark">build instead of apply.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {testimonials.map(({ name, role, quote, avatar, color, earnings }) => (
              <div key={name} className="bg-white rounded-2xl border border-ink-200 p-8 card-hover">
                <div className="flex items-center gap-1 mb-6">
                  {[1,2,3,4,5].map(i => <Star key={i} size={14} className="text-phos-400 fill-phos-400" />)}
                </div>
                <p className="text-ink-700 text-sm leading-relaxed mb-8">"{quote}"</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-full ${color} flex items-center justify-center font-bold text-sm`}>
                      {avatar}
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-ink-900">{name}</div>
                      <div className="text-xs text-ink-500">{role}</div>
                    </div>
                  </div>
                  <Badge variant="green" className="text-xs">{earnings}</Badge>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PRICING TEASER ─── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-6">Simple pricing</Badge>
            <h2 className="text-3xl sm:text-4xl font-black text-ink-900 tracking-tight mb-4">
              Start free. Scale as you grow.
            </h2>
            <p className="max-w-md mx-auto text-ink-500">
              No platform fees on your first $1,000. After that, a small percentage — because we only win when you win.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto mb-10">
            {plans.map(({ name, price, desc, popular }) => (
              <div key={name} className={`p-6 rounded-2xl border-2 ${popular ? 'border-phos-400 bg-phos-50' : 'border-ink-200 bg-white'} text-center card-hover`}>
                {popular && <Badge className="mb-3">Most popular</Badge>}
                <div className="text-sm font-semibold text-ink-600 mb-1">{name}</div>
                <div className="text-2xl font-black text-ink-900 mb-2">{price}</div>
                <p className="text-xs text-ink-500">{desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button to="/pricing" variant="outline" size="lg">
              See full pricing breakdown
              <ArrowRight size={16} />
            </Button>
          </div>
        </div>
      </section>

      {/* ─── FINAL CTA ─── */}
      <section className="py-32 bg-ink-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-phos-600/20 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="dark" className="mb-8 border border-phos-700/50">
            <Sparkles size={12} className="text-phos-400" />
            <span className="text-phos-300">Join 12,000+ creators already building</span>
          </Badge>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight mb-6">
            You didn't choose a career.
            <br />
            <span className="gradient-text">You built a skill.</span>
            <br />
            Now build a business.
          </h2>
          <p className="text-lg text-ink-300 mb-10 max-w-xl mx-auto">
            Stop waiting for clients to find you on someone else's platform. Build your own, on your terms, with Phos.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button to="/signup" size="xl" variant="primary">
              Build your storefront for free
              <ArrowRight size={18} />
            </Button>
            <Button to="/explore" size="xl" className="text-white border-2 border-ink-700 hover:border-ink-600 hover:bg-ink-800 bg-transparent font-semibold">
              Browse creators
            </Button>
          </div>
          <p className="mt-6 text-sm text-ink-500">No credit card required · Free forever on Starter</p>
        </div>
      </section>
    </div>
  )
}
