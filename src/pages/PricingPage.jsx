import { useState } from 'react'
import { Check, X, ArrowRight, HelpCircle, Zap } from 'lucide-react'
import Button from '../components/ui/Button'
import Badge from '../components/ui/Badge'

const plans = [
  {
    name: 'Starter',
    tagline: 'Launch your storefront',
    price: { monthly: 0, annual: 0 },
    platformFee: '8% per transaction',
    color: 'border-ink-200',
    cta: 'Get started free',
    ctaVariant: 'outline',
    features: [
      { text: 'Public creator storefront', included: true },
      { text: 'Up to 3 service packages', included: true },
      { text: 'Portfolio (up to 6 items)', included: true },
      { text: 'Basic client messaging', included: true },
      { text: 'Phos-hosted payments', included: true },
      { text: 'Auto-generated contracts', included: true },
      { text: 'Basic analytics', included: true },
      { text: 'Custom domain', included: false },
      { text: 'Unlimited packages', included: false },
      { text: 'Advanced analytics', included: false },
      { text: 'Priority support', included: false },
      { text: 'Team seats', included: false },
    ],
  },
  {
    name: 'Pro',
    tagline: 'Serious creators who want the full toolkit',
    price: { monthly: 19, annual: 15 },
    platformFee: '4% per transaction',
    color: 'border-phos-400',
    popular: true,
    cta: 'Start Pro — free for 14 days',
    ctaVariant: 'primary',
    features: [
      { text: 'Public creator storefront', included: true },
      { text: 'Unlimited service packages', included: true },
      { text: 'Unlimited portfolio items', included: true },
      { text: 'Advanced client messaging + files', included: true },
      { text: 'Phos-hosted payments', included: true },
      { text: 'Auto-generated contracts', included: true },
      { text: 'Advanced analytics + conversion data', included: true },
      { text: 'Custom domain', included: true },
      { text: 'Subscription & retainer packages', included: true },
      { text: 'Priority support', included: true },
      { text: 'Client onboarding forms', included: true },
      { text: 'Team seats', included: false },
    ],
  },
  {
    name: 'Studio',
    tagline: 'Teams and agencies at scale',
    price: { monthly: 49, annual: 39 },
    platformFee: '2% per transaction',
    color: 'border-ink-200',
    cta: 'Start Studio trial',
    ctaVariant: 'dark',
    features: [
      { text: 'Everything in Pro', included: true },
      { text: 'Up to 5 team seats', included: true },
      { text: 'Team & agency branded page', included: true },
      { text: 'Shared project workspace', included: true },
      { text: 'Role-based permissions', included: true },
      { text: 'Client portal branding', included: true },
      { text: 'Priority dispute resolution', included: true },
      { text: 'Dedicated account manager', included: true },
      { text: 'Custom invoicing', included: true },
      { text: 'API access', included: true },
      { text: 'Multi-currency payouts', included: true },
      { text: 'White-label option', included: true },
    ],
  },
]

const faqs = [
  {
    q: 'What is the platform fee?',
    a: 'Platform fees are charged as a percentage of each transaction and vary by plan. Starter is 8%, Pro is 4%, and Studio is 2%. There are no monthly fees for Starter. We only win when you win.',
  },
  {
    q: 'When and how do I get paid?',
    a: 'Payments are released when you complete project milestones. You can withdraw to your local bank account, mobile money, or an international account within 1–3 business days.',
  },
  {
    q: 'Can I upgrade or downgrade my plan?',
    a: 'Yes, you can change your plan at any time. If you upgrade mid-cycle, you\'ll be charged a prorated amount. If you downgrade, changes take effect at the start of your next billing cycle.',
  },
  {
    q: 'Is there a contract or minimum commitment?',
    a: 'No. All plans are month-to-month. You can cancel at any time. Annual plans are discounted and billed upfront.',
  },
  {
    q: 'What currencies does Phos support?',
    a: 'Clients can pay in USD, EUR, GBP, CAD, and AUD. Creators can receive payouts in local currencies including NGN, GHS, KES, ZAR, XOF, and more.',
  },
  {
    q: 'Do you offer discounts for students or early-career creators?',
    a: 'Yes. We have a dedicated programme for creators under 26 and recent graduates. Apply through your account settings.',
  },
]

export default function PricingPage() {
  const [annual, setAnnual] = useState(false)
  const [openFaq, setOpenFaq] = useState(null)

  return (
    <div>
      {/* Hero */}
      <section className="bg-ink-950 pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="absolute top-1/2 right-1/4 w-72 h-72 bg-phos-600/15 rounded-full blur-3xl" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="dark" className="mb-6 border border-phos-700/50">
            <span className="text-phos-300">Simple, fair pricing</span>
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight mb-6">
            Start free.
            <br />
            <span className="gradient-text">Pay as you scale.</span>
          </h1>
          <p className="text-ink-300 mb-8">
            No platform fees on your first $1,000 earned. After that, a small percentage — because we're invested in your success.
          </p>

          {/* Toggle */}
          <div className="inline-flex items-center gap-3 bg-ink-800 rounded-full p-1">
            <button
              onClick={() => setAnnual(false)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-colors ${!annual ? 'bg-white text-ink-900' : 'text-ink-400 hover:text-white'}`}
            >
              Monthly
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-colors ${annual ? 'bg-white text-ink-900' : 'text-ink-400 hover:text-white'}`}
            >
              Annual
              <span className="ml-2 text-xs bg-phos-600 text-white px-2 py-0.5 rounded-full">Save 20%</span>
            </button>
          </div>
        </div>
      </section>

      {/* Plans */}
      <section className="py-16 bg-ink-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {plans.map(plan => (
              <div
                key={plan.name}
                className={`bg-white rounded-2xl border-2 ${plan.color} p-8 flex flex-col ${plan.popular ? 'shadow-xl scale-[1.02]' : ''}`}
              >
                {plan.popular && <Badge className="mb-4 self-start">Most popular</Badge>}
                <div className="mb-6">
                  <h3 className="text-lg font-bold text-ink-900 mb-1">{plan.name}</h3>
                  <p className="text-sm text-ink-500">{plan.tagline}</p>
                </div>
                <div className="mb-2">
                  <span className="text-4xl font-black text-ink-900">
                    {plan.price.monthly === 0 ? 'Free' : `$${annual ? plan.price.annual : plan.price.monthly}`}
                  </span>
                  {plan.price.monthly > 0 && <span className="text-ink-500 text-sm ml-1">/month</span>}
                </div>
                <div className="text-xs text-phos-600 font-semibold mb-6 pb-6 border-b border-ink-100">
                  + {plan.platformFee}
                </div>

                <ul className="space-y-3 flex-1 mb-8">
                  {plan.features.map(({ text, included }) => (
                    <li key={text} className="flex items-start gap-2.5">
                      {included ? (
                        <Check size={15} className="text-phos-500 mt-0.5 shrink-0" />
                      ) : (
                        <X size={15} className="text-ink-300 mt-0.5 shrink-0" />
                      )}
                      <span className={`text-sm ${included ? 'text-ink-700' : 'text-ink-400'}`}>{text}</span>
                    </li>
                  ))}
                </ul>

                <Button to="/signup" variant={plan.ctaVariant} size="md" className="w-full">
                  {plan.cta}
                  <ArrowRight size={15} />
                </Button>
              </div>
            ))}
          </div>

          <p className="text-center text-sm text-ink-500 mt-8">
            All plans include a 14-day free trial of Pro features. No credit card required to start.
          </p>
        </div>
      </section>

      {/* Fee comparison */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-6">Compare the numbers</Badge>
          <h2 className="text-3xl font-black text-ink-900 tracking-tight mb-6">
            We take less so you keep more.
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-ink-200">
                  <th className="text-left py-3 text-ink-500 font-medium">Platform</th>
                  <th className="py-3 text-ink-500 font-medium">Creator fee</th>
                  <th className="py-3 text-ink-500 font-medium">Client fee</th>
                  <th className="py-3 text-ink-500 font-medium">Total cut</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { name: 'Phos Creators (Pro)', creator: '4%', client: '0%', total: '4%', phos: true },
                  { name: 'Upwork', creator: '10–20%', client: '5%', total: '15–25%' },
                  { name: 'Fiverr', creator: '20%', client: '5.5%', total: '25.5%' },
                  { name: 'Toptal', creator: '~40%', client: 'Variable', total: '40%+' },
                ].map(row => (
                  <tr key={row.name} className={`border-b border-ink-100 ${row.phos ? 'bg-phos-50' : ''}`}>
                    <td className={`py-3 text-left font-semibold ${row.phos ? 'text-phos-700' : 'text-ink-700'}`}>
                      {row.name} {row.phos && '✦'}
                    </td>
                    <td className="py-3 text-center text-ink-600">{row.creator}</td>
                    <td className="py-3 text-center text-ink-600">{row.client}</td>
                    <td className={`py-3 text-center font-bold ${row.phos ? 'text-phos-600' : 'text-ink-900'}`}>{row.total}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-ink-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black text-ink-900 text-center tracking-tight mb-12">
            Frequently asked questions
          </h2>
          <div className="space-y-3">
            {faqs.map(({ q, a }, i) => (
              <div key={q} className="bg-white rounded-xl border border-ink-200 overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full px-6 py-5 text-left flex items-start justify-between gap-4"
                >
                  <span className="font-semibold text-ink-900 text-sm">{q}</span>
                  <HelpCircle size={16} className={`shrink-0 mt-0.5 transition-colors ${openFaq === i ? 'text-phos-500' : 'text-ink-400'}`} />
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-5 text-sm text-ink-500 leading-relaxed border-t border-ink-100 pt-4">
                    {a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-ink-950 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-phos-600/15 rounded-full blur-3xl" />
        <div className="relative max-w-xl mx-auto px-4">
          <h2 className="text-3xl font-black text-white mb-4">Ready to start building?</h2>
          <p className="text-ink-400 mb-8">No credit card. No catch. Your first storefront is free.</p>
          <Button to="/signup" size="lg" variant="primary">
            Start for free
            <ArrowRight size={16} />
          </Button>
        </div>
      </section>
    </div>
  )
}
