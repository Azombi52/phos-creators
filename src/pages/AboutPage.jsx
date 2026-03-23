import { ArrowRight, Globe, Heart, Zap, TrendingUp, Users } from 'lucide-react'
import Button from '../components/ui/Button'
import Badge from '../components/ui/Badge'

const values = [
  {
    icon: Globe,
    title: 'Global by default',
    desc: 'African creative talent is world-class. We build infrastructure that lets the world know it, access it, and pay for it fairly.',
  },
  {
    icon: Zap,
    title: 'Creator-first, always',
    desc: 'Every feature, every decision starts with one question: does this give creators more power, more autonomy, more money?',
  },
  {
    icon: Heart,
    title: 'Dignity by design',
    desc: 'We build products that treat creators as founders, not gig workers. No bidding wars. No raced-to-the-bottom pricing.',
  },
  {
    icon: TrendingUp,
    title: 'Infrastructure for scale',
    desc: 'The tools that took agencies decades to build — contracts, payments, client management — should be accessible to every independent creator from day one.',
  },
]

const team = [
  { name: 'Adaeze Okafor', role: 'Co-founder & CEO', location: 'Lagos, Nigeria', initials: 'AO', color: 'from-phos-400 to-phos-700' },
  { name: 'Kwame Asante', role: 'Co-founder & CTO', location: 'Accra, Ghana', initials: 'KA', color: 'from-emerald-400 to-teal-600' },
  { name: 'Nadia Berthet', role: 'Head of Product', location: 'Abidjan, Côte d\'Ivoire', initials: 'NB', color: 'from-purple-400 to-purple-700' },
  { name: 'Sipho Dlamini', role: 'Head of Growth', location: 'Johannesburg, South Africa', initials: 'SD', color: 'from-blue-400 to-blue-600' },
  { name: 'Fatou Sow', role: 'Head of Design', location: 'Dakar, Senegal', initials: 'FS', color: 'from-rose-400 to-rose-700' },
  { name: 'Emeka Chibuike', role: 'Head of Payments', location: 'Port Harcourt, Nigeria', initials: 'EC', color: 'from-amber-400 to-orange-600' },
]

const milestones = [
  { year: '2022', event: 'Founded in Lagos with a clear conviction: African creators deserve better infrastructure.' },
  { year: '2023', event: 'Launched closed beta with 500 creators. Processed first $100K in creative services.' },
  { year: '2024', event: 'Raised seed round. Expanded to 20 African countries. Launched global payments.' },
  { year: '2025', event: '12,000+ creators onboarded. $4.2M+ in earnings processed. 80+ countries reached.' },
  { year: '2026', event: 'Launched Studio plan for agencies. Creator subscription tools. Series A underway.' },
]

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-ink-950 pt-32 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-phos-600/15 rounded-full blur-3xl" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="dark" className="mb-6 border border-phos-700/50">
            <span className="text-phos-300">Our mission</span>
          </Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight mb-8">
            Africa's creative output
            <br />
            is a{' '}
            <span className="gradient-text">global resource.</span>
            <br />
            We're building the pipes.
          </h1>
          <p className="text-lg text-ink-300 max-w-2xl mx-auto leading-relaxed">
            Phos Creators exists because the gap between Africa's creative talent and the world's demand for that talent was never about quality — it was about infrastructure. We're building that infrastructure.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Badge className="mb-6">The story</Badge>
          <h2 className="text-3xl font-black text-ink-900 tracking-tight mb-8">
            We started because we were tired of watching brilliant creators apply for work on platforms that treated them as a commodity.
          </h2>
          <div className="space-y-6 text-ink-600 leading-relaxed">
            <p>
              The founders of Phos started as creators themselves — designers, developers, photographers building their careers in Lagos, Accra, and Dakar. They were good at what they did. But the platforms available to them were built for a different kind of worker in a different context.
            </p>
            <p>
              Upwork's bidding system positioned them against the cheapest possible price. Fiverr commoditised their work. Traditional agencies took 60%+ of every client fee. There was no option that said: <em>"You're a professional. Run your business like one."</em>
            </p>
            <p>
              Shopify solved this for product sellers. Square solved it for merchants. Phos is solving it for African creators. We're giving creators the tools to be independent, professional, and global — without needing an agent, an agency, or a platform that undervalues their work.
            </p>
            <p className="font-semibold text-ink-900">
              Creators aren't applying for work. They're building businesses. Phos is the infrastructure those businesses deserve.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-ink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-6">What we believe</Badge>
            <h2 className="text-3xl sm:text-4xl font-black text-ink-900 tracking-tight">
              Principles that drive
              <br />
              every product decision.
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-white rounded-2xl border border-ink-200 p-8">
                <div className="w-11 h-11 rounded-xl bg-phos-100 flex items-center justify-center mb-5">
                  <Icon size={20} className="text-phos-600" />
                </div>
                <h3 className="text-lg font-bold text-ink-900 mb-3">{title}</h3>
                <p className="text-ink-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-6">Our journey</Badge>
            <h2 className="text-3xl font-black text-ink-900 tracking-tight">From idea to infrastructure.</h2>
          </div>
          <div className="space-y-8">
            {milestones.map(({ year, event }, i) => (
              <div key={year} className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-ink-900 text-white font-black text-xs flex items-center justify-center shrink-0">
                    {year}
                  </div>
                  {i < milestones.length - 1 && <div className="w-px flex-1 bg-ink-200 mt-2" />}
                </div>
                <div className="flex-1 pb-8 pt-3">
                  <p className="text-ink-600 leading-relaxed">{event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-ink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-6">The team</Badge>
            <h2 className="text-3xl font-black text-ink-900 tracking-tight mb-4">
              Built by Africans,
              <br />
              <span className="gradient-text-dark">built for the world.</span>
            </h2>
            <p className="text-ink-500 max-w-xl mx-auto">
              Our team spans 6 countries across the continent. Every person on this team has lived the creator experience we're solving for.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
            {team.map(({ name, role, location, initials, color }) => (
              <div key={name} className="text-center">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${color} flex items-center justify-center text-white font-black text-xl mx-auto mb-3`}>
                  {initials}
                </div>
                <div className="font-semibold text-ink-900 text-sm">{name}</div>
                <div className="text-xs text-phos-600 font-medium">{role}</div>
                <div className="text-xs text-ink-400 mt-0.5">{location}</div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-ink-500 mb-4">We're hiring across engineering, design, and growth.</p>
            <Button to="/careers" variant="outline" size="md">
              View open roles
              <ArrowRight size={15} />
            </Button>
          </div>
        </div>
      </section>

      {/* Investors / press */}
      <section className="py-20 bg-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-sm text-ink-400 uppercase tracking-widest mb-8">Backed by</p>
          <div className="flex flex-wrap justify-center gap-8 items-center mb-16">
            {['Ventures Platform', 'Partech Africa', 'Y Combinator', 'Ingressive Capital', 'Flat6Labs'].map(investor => (
              <span key={investor} className="text-ink-400 font-semibold text-sm">{investor}</span>
            ))}
          </div>
          <div className="max-w-2xl mx-auto p-8 bg-ink-50 rounded-2xl border border-ink-200">
            <p className="text-xl font-bold text-ink-900 mb-6 leading-relaxed">
              "Phos is building the infrastructure layer for a generation of African creative entrepreneurs. The market opportunity is massive, and the team is exceptional."
            </p>
            <div className="text-sm font-semibold text-ink-700">Ventures Platform · Lead Investor</div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-ink-950 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-phos-600/15 rounded-full blur-3xl" />
        <div className="relative max-w-xl mx-auto px-4">
          <h2 className="text-3xl font-black text-white mb-4">Join the movement.</h2>
          <p className="text-ink-400 mb-8">Whether you're a creator ready to build, or an investor who believes in Africa's creative future.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button to="/signup" size="lg" variant="primary">
              Start building
              <ArrowRight size={16} />
            </Button>
            <Button to="/press" size="lg" className="text-white border-2 border-ink-700 hover:border-ink-600 hover:bg-ink-800 bg-transparent font-semibold">
              Press & media
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
