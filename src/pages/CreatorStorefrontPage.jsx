import { useState } from 'react'
import {
  Star, Shield, MapPin, Globe, Twitter, Instagram,
  CheckCircle, ArrowRight, MessageSquare, Clock, Package,
  TrendingUp, ChevronRight, Play, ExternalLink
} from 'lucide-react'
import Button from '../components/ui/Button'
import Badge from '../components/ui/Badge'

const packages = [
  {
    id: 1,
    name: 'Brand Identity',
    price: 1200,
    timeline: '14 days',
    popular: true,
    desc: 'Complete brand identity system including logo, colour palette, typography, and brand guidelines document.',
    includes: [
      'Logo design (3 concepts + 2 rounds of revisions)',
      'Full colour system and palette',
      'Typography selection and pairing',
      '20-page brand guidelines PDF',
      'All source files (AI, EPS, PNG, SVG)',
    ],
  },
  {
    id: 2,
    name: 'Logo Design',
    price: 350,
    timeline: '5 days',
    popular: false,
    desc: 'A distinctive, versatile logo for your brand. Delivered in all formats.',
    includes: [
      '3 initial concepts',
      '2 rounds of revisions',
      'PNG, SVG, EPS source files',
      'Dark and light variants',
    ],
  },
  {
    id: 3,
    name: 'Brand Audit',
    price: 250,
    timeline: '3 days',
    popular: false,
    desc: 'Deep analysis of your existing brand identity with a strategic improvement roadmap.',
    includes: [
      'Full brand consistency audit',
      'Competitor positioning review',
      '12-page audit report',
      '30-minute debrief call',
    ],
  },
  {
    id: 4,
    name: 'Monthly Retainer',
    price: 800,
    priceLabel: '$800/mo',
    timeline: 'Ongoing',
    popular: false,
    desc: 'Dedicated brand design support every month. Ideal for growing companies.',
    includes: [
      'Up to 20 design hours/month',
      'Unlimited revision requests',
      'Priority 24-hour response',
      'Monthly brand health review',
    ],
  },
]

const portfolioItems = [
  { title: 'Solaris Energy Co.', category: 'Brand Identity', bg: 'from-amber-200 to-orange-300' },
  { title: 'Kente Digital Bank', category: 'Brand System', bg: 'from-emerald-200 to-teal-300' },
  { title: 'Afrowave Music', category: 'Visual Identity', bg: 'from-purple-200 to-indigo-300' },
  { title: 'Nairobi Eats', category: 'Brand + Packaging', bg: 'from-rose-200 to-pink-300' },
  { title: 'LearnAfrica', category: 'EdTech Brand', bg: 'from-blue-200 to-cyan-300' },
  { title: 'Pula Fintech', category: 'Rebrand', bg: 'from-phos-200 to-phos-400' },
]

const reviews = [
  {
    name: 'James Osei',
    company: 'Solaris Energy',
    country: '🇬🇭',
    rating: 5,
    date: '2 weeks ago',
    text: 'Amara completely transformed our brand. The process was structured, communication was excellent, and the final result exceeded every expectation. Will definitely be working with her again.',
  },
  {
    name: 'Sarah Mitchell',
    company: 'Kente Digital',
    country: '🇬🇧',
    rating: 5,
    date: '1 month ago',
    text: 'Best brand designer I\'ve worked with across 10+ years of hiring. She understood our vision immediately and translated it into something truly distinctive. Professional from start to finish.',
  },
  {
    name: 'Ade Williams',
    company: 'LearnAfrica',
    country: '🇺🇸',
    rating: 5,
    date: '6 weeks ago',
    text: 'The retainer model with Amara has been transformative for our marketing team. We always have great brand assets, fast turnaround, and consistent quality.',
  },
]

export default function CreatorStorefrontPage() {
  const [selectedPkg, setSelectedPkg] = useState(null)
  const [activeTab, setActiveTab] = useState('packages')

  return (
    <div className="bg-white">
      {/* Header bar */}
      <div className="bg-ink-950 text-ink-400 text-xs py-2 text-center border-b border-ink-800">
        <span className="text-phos-400 font-semibold">✦ This is an example Phos creator storefront.</span>
        {' '}
        <a href="/signup" className="underline hover:text-white">Build yours for free →</a>
      </div>

      {/* Creator profile header */}
      <div className="bg-gradient-to-b from-ink-50 to-white pt-24 pb-0 border-b border-ink-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8 items-start pb-8">
            {/* Avatar */}
            <div className="shrink-0">
              <div className="w-24 h-24 lg:w-28 lg:h-28 rounded-3xl bg-gradient-to-br from-phos-400 to-phos-700 flex items-center justify-center text-white text-4xl font-black shadow-lg">
                A
              </div>
            </div>

            {/* Info */}
            <div className="flex-1">
              <div className="flex flex-wrap items-start gap-3 mb-2">
                <h1 className="text-2xl lg:text-3xl font-black text-ink-900">Amara Diallo</h1>
                <div className="flex items-center gap-1.5">
                  <Shield size={16} className="text-phos-500" />
                  <span className="text-xs font-semibold text-phos-600 bg-phos-50 px-2 py-0.5 rounded-full">Verified Creator</span>
                </div>
                <Badge variant="green">Available for hire</Badge>
              </div>
              <p className="text-ink-600 font-medium mb-1">Brand Designer & Visual Strategist</p>
              <div className="flex items-center gap-4 text-sm text-ink-500 mb-4">
                <span className="flex items-center gap-1.5"><MapPin size={13} /> Dakar, Senegal</span>
                <span className="flex items-center gap-1.5"><Globe size={13} /> English, French</span>
                <span className="flex items-center gap-1.5"><Clock size={13} /> Usually responds in 2 hours</span>
              </div>
              <div className="flex items-center gap-4 mb-5">
                <div className="flex items-center gap-1">
                  {[1,2,3,4,5].map(i => <Star key={i} size={14} className="text-phos-400 fill-phos-400" />)}
                  <span className="text-sm font-bold text-ink-900 ml-1">4.9</span>
                  <span className="text-sm text-ink-400">(84 reviews)</span>
                </div>
                <span className="text-ink-300">·</span>
                <span className="text-sm text-ink-500">112 projects completed</span>
                <span className="text-ink-300">·</span>
                <span className="text-sm text-ink-500">Member since 2023</span>
              </div>
              <p className="text-ink-600 max-w-2xl leading-relaxed">
                I craft brand identities that make companies impossible to ignore. Working with startups and scale-ups across Africa, Europe, and North America — I bring strategic thinking and exceptional craft to every project. Your brand should be an asset. Let me build it.
              </p>
            </div>

            {/* Quick actions */}
            <div className="shrink-0 flex flex-col gap-3 lg:pt-2">
              <Button to="/signup" size="md" variant="primary">
                Book a project
              </Button>
              <Button size="md" variant="outline">
                <MessageSquare size={15} />
                Message
              </Button>
              <div className="flex items-center justify-center gap-3 pt-1">
                <a href="#" className="text-ink-400 hover:text-ink-700 transition-colors"><Twitter size={16} /></a>
                <a href="#" className="text-ink-400 hover:text-ink-700 transition-colors"><Instagram size={16} /></a>
                <a href="#" className="text-ink-400 hover:text-ink-700 transition-colors"><Globe size={16} /></a>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex gap-0 border-b border-transparent -mb-px">
            {['packages', 'portfolio', 'reviews', 'about'].map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-3 text-sm font-semibold border-b-2 capitalize transition-colors ${
                  activeTab === tab
                    ? 'border-phos-600 text-phos-600'
                    : 'border-transparent text-ink-500 hover:text-ink-900'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Tab content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* Packages */}
        {activeTab === 'packages' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {packages.map(pkg => (
              <div
                key={pkg.id}
                className={`rounded-2xl border-2 p-6 cursor-pointer transition-all ${
                  selectedPkg === pkg.id
                    ? 'border-phos-500 bg-phos-50'
                    : pkg.popular
                    ? 'border-phos-300 bg-phos-50/50 hover:border-phos-400'
                    : 'border-ink-200 hover:border-ink-300'
                }`}
                onClick={() => setSelectedPkg(pkg.id)}
              >
                {pkg.popular && <Badge className="mb-3 text-xs">Most popular</Badge>}
                <h3 className="font-bold text-ink-900 mb-1">{pkg.name}</h3>
                <div className="text-2xl font-black text-ink-900 mb-1">
                  {pkg.priceLabel || `$${pkg.price}`}
                </div>
                <div className="flex items-center gap-1.5 text-xs text-ink-500 mb-4">
                  <Clock size={12} />
                  {pkg.timeline}
                </div>
                <p className="text-xs text-ink-500 leading-relaxed mb-5">{pkg.desc}</p>
                <ul className="space-y-2 mb-6">
                  {pkg.includes.map(item => (
                    <li key={item} className="flex items-start gap-2 text-xs text-ink-600">
                      <CheckCircle size={12} className="text-phos-500 mt-0.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Button
                  to="/signup"
                  variant={selectedPkg === pkg.id || pkg.popular ? 'primary' : 'outline'}
                  size="sm"
                  className="w-full"
                >
                  Book this package
                </Button>
              </div>
            ))}
          </div>
        )}

        {/* Portfolio */}
        {activeTab === 'portfolio' && (
          <div>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
              {portfolioItems.map(({ title, category, bg }) => (
                <div key={title} className="group cursor-pointer">
                  <div className={`aspect-video rounded-xl bg-gradient-to-br ${bg} mb-3 flex items-center justify-center relative overflow-hidden`}>
                    <span className="text-white/50 font-black text-3xl">{title[0]}</span>
                    <div className="absolute inset-0 bg-ink-900/0 group-hover:bg-ink-900/30 transition-colors flex items-center justify-center">
                      <ExternalLink size={20} className="text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </div>
                  <div className="text-sm font-semibold text-ink-900">{title}</div>
                  <div className="text-xs text-ink-500">{category}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Reviews */}
        {activeTab === 'reviews' && (
          <div className="space-y-6 max-w-3xl">
            <div className="flex items-center gap-6 p-6 bg-ink-50 rounded-2xl mb-8">
              <div className="text-center">
                <div className="text-5xl font-black text-ink-900">4.9</div>
                <div className="flex items-center gap-0.5 justify-center my-1">
                  {[1,2,3,4,5].map(i => <Star key={i} size={14} className="text-phos-400 fill-phos-400" />)}
                </div>
                <div className="text-xs text-ink-500">84 reviews</div>
              </div>
              <div className="flex-1 space-y-2">
                {[5,4,3,2,1].map(n => (
                  <div key={n} className="flex items-center gap-3">
                    <span className="text-xs text-ink-500 w-3">{n}</span>
                    <div className="flex-1 bg-ink-200 rounded-full h-2">
                      <div
                        className="bg-phos-500 h-2 rounded-full"
                        style={{ width: n === 5 ? '88%' : n === 4 ? '10%' : '2%' }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {reviews.map(({ name, company, country, rating, date, text }) => (
              <div key={name} className="border border-ink-200 rounded-2xl p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-ink-200 flex items-center justify-center font-bold text-sm text-ink-700">
                      {name[0]}
                    </div>
                    <div>
                      <div className="font-semibold text-ink-900">{name} {country}</div>
                      <div className="text-xs text-ink-500">{company}</div>
                    </div>
                  </div>
                  <span className="text-xs text-ink-400">{date}</span>
                </div>
                <div className="flex items-center gap-0.5 mb-3">
                  {[...Array(rating)].map((_, i) => <Star key={i} size={12} className="text-phos-400 fill-phos-400" />)}
                </div>
                <p className="text-sm text-ink-600 leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        )}

        {/* About */}
        {activeTab === 'about' && (
          <div className="max-w-3xl space-y-8">
            <div>
              <h2 className="text-xl font-bold text-ink-900 mb-4">About Amara</h2>
              <div className="space-y-4 text-ink-600 leading-relaxed">
                <p>I've been designing brands for over 8 years, working with companies across fintech, consumer goods, healthcare, and education — from early-stage startups to Series B companies.</p>
                <p>My work is rooted in strategy. Before I open Figma, I spend time understanding your business, your customers, and where you want to go. The best design decisions aren't just aesthetic — they're business decisions.</p>
                <p>I'm based in Dakar, Senegal, and work with clients globally. I'm fluent in English and French, and I'm used to navigating different time zones.</p>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-ink-900 mb-4">Skills & Tools</h3>
              <div className="flex flex-wrap gap-2">
                {['Brand Strategy', 'Logo Design', 'Brand Systems', 'Typography', 'Figma', 'Adobe Illustrator', 'InDesign', 'Framer', 'Miro', 'Notion'].map(s => (
                  <span key={s} className="px-3 py-1.5 bg-ink-100 rounded-lg text-sm text-ink-700 font-medium">{s}</span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-bold text-ink-900 mb-4">Achievements</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: 'Projects completed', value: '112' },
                  { label: 'Repeat client rate', value: '78%' },
                  { label: 'On-time delivery', value: '99%' },
                  { label: 'Total earned on Phos', value: '$18,400' },
                ].map(({ label, value }) => (
                  <div key={label} className="p-4 bg-ink-50 rounded-xl">
                    <div className="text-2xl font-black text-phos-600">{value}</div>
                    <div className="text-xs text-ink-500 mt-1">{label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
