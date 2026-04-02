'use client'

import { motion } from 'framer-motion'

export default function PricingSection() {
  const plans = [
    {
      name: 'Standard',
      price: '89,000',
      unit: 'RWF / Hour',
      description: 'Perfect for intimate celebrations',
      features: [
        'Unlimited 360 Videos',
        'Instant Social Sharing',
        'Professional Attendant',
        'Custom Overlay Design',
      ],
      popular: false,
    },
    {
      name: 'Premium',
      price: '149,000',
      unit: 'RWF / 2 Hours',
      description: 'The ultimate event experience',
      features: [
        'Everything in Standard',
        'Slow-Motion Capture',
        'LED Ring Lighting',
        'Custom Props Package',
        'Red Carpet Setup',
        'Priority Booking',
      ],
      popular: true,
    },
    {
      name: 'Corporate',
      price: 'Custom',
      unit: 'Get a Quote',
      description: 'Tailored for brand activations',
      features: [
        'Everything in Premium',
        'Branded Overlays & Logos',
        'Multi-Booth Setup',
        'Data & Analytics',
        'Dedicated Team',
      ],
      popular: false,
    },
  ]

  return (
    <section id="pricing" className="relative py-24 px-4 overflow-hidden">
      {/* Background accent */}
      <div className="mesh-gradient gold-glow top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10" />
      
      <div className="container mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="section-label mx-auto w-fit">
            <span className="w-2 h-2 rounded-full bg-brand" />
            Pricing
          </div>
          <h2 className="font-heading font-black text-4xl md:text-5xl lg:text-6xl text-slate-50 mb-6">
            Choose Your <span className="bg-gradient-to-r from-brand to-yellow-300 bg-clip-text text-transparent">Spin</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Transparent pricing for unforgettable moments. Choose the package 
            that fits your celebration.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {plans.map((plan, idx) => (
            <motion.div
              key={idx}
              initial={{ 
                opacity: 0, 
                x: idx === 0 ? -50 : idx === 2 ? 50 : 0,
                y: plan.popular ? 50 : 0 
              }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              className={`relative rounded-[1.5rem] p-8 transition-all duration-500 ${
                plan.popular
                  ? 'bg-gradient-to-b from-brand/10 via-brand/5 to-transparent border-2 border-brand/30 scale-[1.03] shadow-[0_0_60px_rgba(244,202,84,0.1)]'
                  : 'card-dark'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-gradient-to-r from-brand to-yellow-400 text-dark text-xs font-bold rounded-full uppercase tracking-wider">
                  Most Popular
                </div>
              )}

              <div className="mb-6">
                <h3 className="font-heading font-bold text-xl mb-1">{plan.name}</h3>
                <p className="text-slate-500 text-sm">{plan.description}</p>
              </div>

              <div className="flex items-baseline gap-2 mb-8">
                <span className={`text-4xl font-heading font-extrabold ${plan.popular ? 'text-brand' : 'text-slate-100'}`}>
                  {plan.price}
                </span>
                <span className="text-slate-500 text-sm">{plan.unit}</span>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-center gap-3 text-sm">
                    <span className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${
                      plan.popular
                        ? 'bg-brand/20 text-brand'
                        : 'bg-slate-800 text-slate-400'
                    }`}>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                    </span>
                    <span className="text-slate-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <a href="#contact" className={`w-full py-4 rounded-xl font-bold transition-all duration-300 block text-center ${
                plan.popular 
                  ? 'bg-brand text-dark hover:bg-yellow-400' 
                  : 'bg-white/5 text-white hover:bg-white/10 border border-white/10'
              }`}>
                {plan.price === 'Custom' ? 'Contact Us' : 'Book Now'}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
