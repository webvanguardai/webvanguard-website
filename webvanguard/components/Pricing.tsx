'use client'

import { motion } from 'framer-motion'

const plans = [
  {
    name: 'Starter',
    price: 'AED 1,500',
    includes: [
      '1-page landing site',
      'WhatsApp button',
      'Basic SEO',
      'Mobile responsive',
      'Contact form',
    ],
    highlighted: false,
  },
  {
    name: 'Launch',
    price: 'AED 2,500',
    includes: [
      'Multi-page website',
      'Full SEO setup',
      'Google Analytics 4',
      'WhatsApp integration',
      'Contact form',
      'AI SEO (llms.txt)',
      'OpenGraph / social sharing',
    ],
    highlighted: true,
  },
  {
    name: 'Growth',
    price: 'AED 4,500',
    includes: [
      'Everything in Launch',
      'Blog setup',
      '3 months support',
      'Analytics dashboard',
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
      'We configure WhatsApp Business with auto-reply, business hours, and away message. Customers get an instant response even when you\'re not available.',
  },
  {
    name: 'Arabic/English Bilingual',
    price: 'AED 500',
    period: 'one-time',
    description:
      'Full bilingual website — Arabic RTL + English. Reach both local and expat customers.',
  },
  {
    name: 'Monthly SEO Content',
    price: 'AED 600',
    period: '/month',
    description:
      'One blog article per month targeting high-intent Dubai keywords. Builds organic traffic over time.',
  },
  {
    name: 'Google Ads Setup',
    price: 'AED 800',
    period: 'one-time',
    description:
      'We set up and configure your first Google Ads campaign. Ad spend is separate.',
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
                <h3 className="font-display font-black text-xl uppercase text-text-primary mb-3">
                  {plan.name}
                </h3>
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
