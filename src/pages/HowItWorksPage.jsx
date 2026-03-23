import { ArrowRight, CheckCircle, Users, Globe, Shield, CreditCard, FileText, BarChart3, MessageSquare, Star } from 'lucide-react'
import Button from '../components/ui/Button'
import Badge from '../components/ui/Badge'

const creatorSteps = [
  {
    n: '1',
    title: 'Create your account',
    desc: 'Sign up in 60 seconds. Tell us what you do, where you\'re based, and the services you want to offer.',
    items: ['Free account setup', 'No credit card required', 'Verified creator badge process starts immediately'],
  },
  {
    n: '2',
    title: 'Build your storefront',
    desc: 'Use our guided builder to set up your public storefront. Add your services, packages, portfolio pieces, pricing, and bio.',
    items: ['Custom URL (yourname.phoscreators.com)', 'Drag-and-drop portfolio gallery', 'Service package builder with custom pricing'],
  },
  {
    n: '3',
    title: 'Set your terms',
    desc: 'Configure your availability, response times, revision policy, and project scope. You control every detail of how you work.',
    items: ['Booking calendar with availability windows', 'Auto-generated contracts per service type', 'Milestone and deliverable templates'],
  },
  {
    n: '4',
    title: 'Get discovered and close clients',
    desc: 'Phos lists your storefront in our creator directory. Share your link across social media, email, and proposals.',
    items: ['Search-optimised creator profiles', 'One-click booking and payment flow', 'Automated brief collection from clients'],
  },
  {
    n: '5',
    title: 'Deliver, get paid, grow',
    desc: 'Manage everything inside your Phos dashboard. Track milestones, communicate with clients, release invoices, and receive global payments.',
    items: ['Escrow-backed milestone payments', 'Instant payout to local bank or mobile money', 'Earnings analytics and growth metrics'],
  },
]

const clientSteps = [
  {
    n: '1',
    title: 'Discover the right creator',
    desc: 'Browse our verified directory of African creators by skill, category, price range, and availability.',
  },
  {
    n: '2',
    title: 'Review and compare',
    desc: 'Visit creator storefronts, see their portfolio, read client reviews, and compare packages side by side.',
  },
  {
    n: '3',
    title: 'Book and brief',
    desc: 'Select a package and fill in a structured brief. Phos ensures the creator has everything needed to deliver.',
  },
  {
    n: '4',
    title: 'Pay securely',
    desc: 'Your payment is held in escrow until milestones are hit. Your money is always protected.',
  },
  {
    n: '5',
    title: 'Collaborate and receive',
    desc: 'Communicate through the platform, review deliverables, request revisions, and approve work — all in one place.',
  },
]

const trustPoints = [
  { icon: Shield, title: 'Escrow payments', desc: 'Funds are held securely and only released when you\'re satisfied with the work.' },
  { icon: FileText, title: 'Auto-generated contracts', desc: 'Every project is backed by a legal contract with scope, timelines, and revision terms built in.' },
  { icon: Star, title: 'Verified creators', desc: 'Every creator is reviewed and verified before going live on the platform.' },
  { icon: MessageSquare, title: 'Dispute resolution', desc: 'Our team mediates fairly if anything goes wrong. We protect both sides.' },
]

export default function HowItWorksPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-ink-950 pt-32 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-phos-600/15 rounded-full blur-3xl" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="dark" className="mb-6 border border-phos-700/50">
            <span className="text-phos-300">How Phos works</span>
          </Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight mb-6">
            Built for creators who
            <br />
            <span className="gradient-text">mean business.</span>
          </h1>
          <p className="text-lg text-ink-300 max-w-2xl mx-auto">
            From setting up your storefront to getting paid in your local currency — here's exactly how Phos works for creators and clients.
          </p>
        </div>
      </section>

      {/* Toggle section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-black text-ink-900 tracking-tight mb-4">
              For creators
            </h2>
            <p className="text-ink-500">Your path from signup to scaling your creative business globally.</p>
          </div>

          <div className="space-y-8">
            {creatorSteps.map(({ n, title, desc, items }, i) => (
              <div key={n} className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-phos-600 text-white font-black text-sm flex items-center justify-center shrink-0">
                    {n}
                  </div>
                  {i < creatorSteps.length - 1 && (
                    <div className="w-px flex-1 bg-ink-200 mt-2" />
                  )}
                </div>
                <div className="flex-1 pb-8">
                  <h3 className="text-lg font-bold text-ink-900 mb-2">{title}</h3>
                  <p className="text-ink-500 text-sm mb-4">{desc}</p>
                  <ul className="space-y-2">
                    {items.map(item => (
                      <li key={item} className="flex items-start gap-2 text-sm text-ink-600">
                        <CheckCircle size={14} className="text-phos-500 mt-0.5 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button to="/signup" size="lg">
              Start building your storefront
              <ArrowRight size={16} />
            </Button>
          </div>
        </div>
      </section>

      {/* For clients */}
      <section className="py-24 bg-ink-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-black text-ink-900 tracking-tight mb-4">
              For clients
            </h2>
            <p className="text-ink-500">Hire extraordinary African creative talent with confidence and simplicity.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {clientSteps.map(({ n, title, desc }) => (
              <div key={n} className="bg-white rounded-2xl border border-ink-200 p-6 card-hover">
                <div className="text-3xl font-black gradient-text mb-4">{n.padStart(2, '0')}</div>
                <h3 className="font-bold text-ink-900 mb-2">{title}</h3>
                <p className="text-sm text-ink-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button to="/explore" variant="dark" size="lg">
              Browse creators
              <ArrowRight size={16} />
            </Button>
          </div>
        </div>
      </section>

      {/* Trust & Safety */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-6">Trust & Safety</Badge>
            <h2 className="text-3xl sm:text-4xl font-black text-ink-900 tracking-tight mb-4">
              Your work and money,
              <br />
              <span className="gradient-text-dark">always protected.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {trustPoints.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="text-center p-6">
                <div className="w-12 h-12 rounded-2xl bg-phos-100 flex items-center justify-center mx-auto mb-4">
                  <Icon size={20} className="text-phos-600" />
                </div>
                <h3 className="font-bold text-ink-900 mb-2">{title}</h3>
                <p className="text-sm text-ink-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
