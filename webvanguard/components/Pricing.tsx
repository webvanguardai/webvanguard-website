'use client'

import { motion } from 'framer-motion'

const plans = [
  {
    name: 'Starter',
    price: 'AED 2,000',
    tagline: 'Get found. Get contacted.',
    includes: [
      'Your business shows up on Google',
      'Customers reach you via WhatsApp in one tap',
      'Works perfectly on any phone',
      'Contact form — leads go straight to your email',
      'Looks professional from day one',
    ],
    highlighted: false,
  },
  {
    name: 'Launch',
    price: 'AED 3,000',
    tagline: 'The complete package.',
    includes: [
      'Everything in Starter',
      'Multiple pages — services, about, contact',
      'Customers find you when they search Google',
      'You see exactly how many people visit your site',
      'Looks great when shared on WhatsApp or Instagram',
      'Works for both humans and AI search (ChatGPT, Perplexity)',
    ],
    highlighted: true,
  },
  {
    name: 'Growth',
    price: 'AED 4,500',
    tagline: 'Built to grow over time.',
    includes: [
      'Everything in Launch',
      'Blog — new content keeps you ranking higher every month',
      '3 months of support — we fix anything that needs fixing',
      'Monthly report: who visited, where they came from, what they did',
    ],
    highlighted: false,
  },
]

const addons = [
  {
    name: 'WhatsApp Business Setup',
    price: 'AED 300',
    period: 'one-time',
    description:
      'Customers who message you get an instant reply — even at 2am. We set up your auto-response, business hours, and away message so no lead goes cold.',
  },
  {
    name: 'Arabic + English Website',
    price: 'AED 500',
    period: 'one-time',
    description:
      'Your full website in both Arabic and English. Reach Emirati and Arab customers who prefer browsing in Arabic — a market most businesses completely ignore.',
  },
  {
    name: 'Monthly Blog Article',
    price: 'AED 600',
    period: '/month',
    description:
      'We write one article per month targeting what your customers actually search for on Google. More articles = more people finding you without paying for ads.',
  },
  {
    name: 'Google Ads Setup',
    price: 'AED 800',
    period: 'one-time',
    description:
      'We build your first Google Ads campaign so your business appears at the top when someone searches for exactly what you offer. You control the daily budget.',
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-section">
      <div className="max-w-[90rem] mx-auto px-6 md:px-12">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="section-label mb-4">Pricing</p>
          <h2 className="font-display font-black text-heading text-text-primary uppercase max-w-3xl">
            Clear prices.{' '}
            <span className="font-serif italic text-accent normal-case">No surprises.</span>
          </h2>
        </motion.div>

        {/* Plans grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative flex flex-col p-8 border ${
                plan.highlighted
                  ? 'border-accent bg-accent/5'
                  : 'border-border bg-transparent'
              }`}
            >
              {plan.highlighted && (
                <span className="absolute -top-3 left-8 bg-accent text-bg-primary text-xs font-display font-black uppercase tracking-widest px-3 py-1">
                  Most popular
                </span>
              )}

              <div className="mb-6">
                <h3 className="font-display font-black text-xl uppercase text-text-primary mb-1">
                  {plan.name}
                </h3>
                <p className="text-xs text-text-muted font-body mb-3">{plan.tagline}</p>
                <p className="font-display font-black text-4xl text-text-primary">
                  {plan.price}
                </p>
              </div>

              <ul className="flex-1 space-y-3 mb-8 border-t border-border pt-6">
                {plan.includes.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-text-secondary">
                    <span className="text-accent mt-0.5 shrink-0">→</span>
                    {item}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`inline-block text-center font-display font-black uppercase text-sm tracking-wider py-3 px-6 transition-all duration-300 ${
                  plan.highlighted
                    ? 'bg-accent text-bg-primary hover:bg-accent/90'
                    : 'border border-border text-text-primary hover:border-accent hover:text-accent'
                }`}
              >
                Get started →
              </a>
            </motion.div>
          ))}
        </div>

        {/* Payment note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center text-text-muted text-sm mb-20 tracking-wide"
        >
          50% on approval · 50% on delivery. You own the code.
        </motion.p>

        {/* Add-ons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <p className="section-label mb-4">Add-ons</p>
          <h3 className="font-display font-black text-2xl md:text-3xl text-text-primary uppercase">
            Extras that{' '}
            <span className="font-serif italic text-accent normal-case">actually matter.</span>
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {addons.map((addon, i) => (
            <motion.div
              key={addon.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="border border-border p-8 group hover:border-accent transition-colors duration-300"
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <h4 className="font-display font-black text-lg uppercase text-text-primary group-hover:text-accent transition-colors duration-300">
                  {addon.name}
                </h4>
                <div className="text-right shrink-0">
                  <span className="font-display font-black text-xl text-accent">{addon.price}</span>
                  <span className="block text-xs text-text-muted">{addon.period}</span>
                </div>
              </div>
              <p className="text-text-secondary text-sm leading-relaxed">{addon.description}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
