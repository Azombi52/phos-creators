import { useState } from 'react'
import { Search, Star, Shield, MapPin, Filter, ArrowRight } from 'lucide-react'
import Button from '../components/ui/Button'
import Badge from '../components/ui/Badge'

const categories = ['All', 'Brand Design', 'Web Development', 'Photography', 'Motion Design', 'Illustration', 'Copywriting', 'Video', 'Marketing', 'Music']

const creators = [
  {
    id: 1,
    name: 'Amara Diallo',
    role: 'Brand Designer',
    location: 'Dakar, Senegal',
    initials: 'AD',
    color: 'from-phos-400 to-phos-700',
    rating: 4.9,
    reviews: 84,
    startingAt: 350,
    categories: ['Brand Design'],
    tags: ['Logo', 'Identity', 'Brand Strategy'],
    verified: true,
    available: true,
    bio: 'Crafting distinct brand identities for companies that want to be unforgettable.',
    earnings: '$18,400',
  },
  {
    id: 2,
    name: 'Kofi Mensah',
    role: 'Full-Stack Developer',
    location: 'Accra, Ghana',
    initials: 'KM',
    color: 'from-emerald-400 to-emerald-700',
    rating: 5.0,
    reviews: 61,
    startingAt: 800,
    categories: ['Web Development'],
    tags: ['React', 'Node.js', 'Product'],
    verified: true,
    available: true,
    bio: 'Building scalable web products from idea to production. 7 years, 40+ shipped.',
    earnings: '$31,200',
  },
  {
    id: 3,
    name: 'Zara Okonkwo',
    role: 'Motion Designer',
    location: 'Lagos, Nigeria',
    initials: 'ZO',
    color: 'from-purple-400 to-purple-700',
    rating: 4.8,
    reviews: 47,
    startingAt: 600,
    categories: ['Motion Design'],
    tags: ['After Effects', 'Animation', 'UI Motion'],
    verified: true,
    available: false,
    bio: 'Motion designer specialising in brand films, UI animations, and social content.',
    earnings: '$24,800',
  },
  {
    id: 4,
    name: 'Tendai Chikwanda',
    role: 'Commercial Photographer',
    location: 'Nairobi, Kenya',
    initials: 'TC',
    color: 'from-blue-400 to-blue-700',
    rating: 4.9,
    reviews: 38,
    startingAt: 450,
    categories: ['Photography'],
    tags: ['Commercial', 'Portrait', 'Editorial'],
    verified: true,
    available: true,
    bio: 'Documentary and commercial photographer telling African stories with global impact.',
    earnings: '$15,600',
  },
  {
    id: 5,
    name: 'Fatima Ndiaye',
    role: 'Copywriter & Strategist',
    location: 'Abidjan, Côte d\'Ivoire',
    initials: 'FN',
    color: 'from-rose-400 to-rose-700',
    rating: 4.9,
    reviews: 56,
    startingAt: 200,
    categories: ['Copywriting', 'Marketing'],
    tags: ['Brand Voice', 'Content', 'SEO'],
    verified: true,
    available: true,
    bio: 'I write brands into existence. Strategy-led copy that converts for global audiences.',
    earnings: '$12,900',
  },
  {
    id: 6,
    name: 'Emeka Obi',
    role: 'UI/UX Designer',
    location: 'Port Harcourt, Nigeria',
    initials: 'EO',
    color: 'from-amber-400 to-orange-600',
    rating: 4.7,
    reviews: 29,
    startingAt: 500,
    categories: ['Brand Design'],
    tags: ['Figma', 'UX Research', 'Product Design'],
    verified: true,
    available: true,
    bio: 'Product designer building intuitive, beautiful digital experiences that work.',
    earnings: '$19,200',
  },
]

export default function ExploreCreatorsPage() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [search, setSearch] = useState('')

  const filtered = creators.filter(c => {
    const matchCat = activeCategory === 'All' || c.categories.includes(activeCategory)
    const matchSearch = !search || c.name.toLowerCase().includes(search.toLowerCase()) || c.role.toLowerCase().includes(search.toLowerCase())
    return matchCat && matchSearch
  })

  return (
    <div>
      {/* Hero */}
      <section className="bg-ink-950 pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-phos-600/15 rounded-full blur-3xl" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="dark" className="mb-6 border border-phos-700/50">
            <span className="text-phos-300">12,000+ verified creators</span>
          </Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight mb-6">
            Find the creative talent
            <br />
            <span className="gradient-text">the world hasn't discovered yet.</span>
          </h1>
          <p className="text-ink-300 mb-10 max-w-xl mx-auto">
            Browse Africa's most talented creators. Every profile is verified, every payment is protected.
          </p>

          {/* Search bar */}
          <div className="max-w-xl mx-auto relative">
            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-ink-400" />
            <input
              type="text"
              placeholder="Search by name, skill, or category..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-white/10 border border-ink-700 rounded-xl text-white placeholder-ink-400 focus:outline-none focus:border-phos-500 focus:bg-white/15 transition-colors"
            />
          </div>
        </div>
      </section>

      {/* Filters + Grid */}
      <section className="py-16 bg-ink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category filters */}
          <div className="flex gap-2 flex-wrap mb-10">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === cat
                    ? 'bg-ink-900 text-white'
                    : 'bg-white text-ink-600 border border-ink-200 hover:border-ink-400'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Results count */}
          <p className="text-sm text-ink-500 mb-6">{filtered.length} creators found</p>

          {/* Creator grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map(creator => (
              <CreatorCard key={creator.id} creator={creator} />
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20">
              <p className="text-ink-400 mb-4">No creators found matching your search.</p>
              <Button onClick={() => { setSearch(''); setActiveCategory('All') }} variant="outline" size="sm">
                Clear filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl font-black text-ink-900 mb-4">
            Are you a creator?
          </h2>
          <p className="text-ink-500 mb-8">Join 12,000+ African creators already building their businesses on Phos.</p>
          <Button to="/signup" size="lg">
            Build your storefront — it's free
            <ArrowRight size={16} />
          </Button>
        </div>
      </section>
    </div>
  )
}

function CreatorCard({ creator }) {
  return (
    <div className="bg-white rounded-2xl border border-ink-200 overflow-hidden card-hover group">
      {/* Card header */}
      <div className={`h-24 bg-gradient-to-br ${creator.color} opacity-20`} />

      <div className="px-6 pb-6">
        {/* Avatar */}
        <div className="-mt-10 mb-4 flex items-end justify-between">
          <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${creator.color} border-4 border-white flex items-center justify-center text-white font-black text-lg shadow-sm`}>
            {creator.initials}
          </div>
          <Badge variant={creator.available ? 'green' : 'ink'} className="mb-1">
            {creator.available ? 'Available' : 'Busy'}
          </Badge>
        </div>

        {/* Name & role */}
        <div className="mb-3">
          <div className="flex items-center gap-2">
            <h3 className="font-bold text-ink-900">{creator.name}</h3>
            {creator.verified && <Shield size={14} className="text-phos-500" />}
          </div>
          <div className="text-sm text-ink-500">{creator.role}</div>
          <div className="flex items-center gap-1.5 mt-1">
            <MapPin size={12} className="text-ink-400" />
            <span className="text-xs text-ink-400">{creator.location}</span>
          </div>
        </div>

        {/* Bio */}
        <p className="text-xs text-ink-500 leading-relaxed mb-4 line-clamp-2">{creator.bio}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {creator.tags.map(tag => (
            <span key={tag} className="px-2 py-0.5 bg-ink-100 rounded text-xs text-ink-600 font-medium">
              {tag}
            </span>
          ))}
        </div>

        {/* Rating + price */}
        <div className="flex items-center justify-between pt-4 border-t border-ink-100">
          <div className="flex items-center gap-1.5">
            <Star size={12} className="text-phos-400 fill-phos-400" />
            <span className="text-sm font-semibold text-ink-900">{creator.rating}</span>
            <span className="text-xs text-ink-400">({creator.reviews})</span>
          </div>
          <div className="text-right">
            <div className="text-xs text-ink-400">Starting at</div>
            <div className="text-sm font-bold text-ink-900">${creator.startingAt}</div>
          </div>
        </div>
      </div>

      {/* View storefront */}
      <div className="px-6 pb-6">
        <Button to={`/storefront`} variant="outline" size="sm" className="w-full group-hover:bg-ink-900 group-hover:text-white group-hover:border-ink-900 transition-all">
          View storefront
        </Button>
      </div>
    </div>
  )
}
