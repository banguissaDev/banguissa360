'use client'

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
        <div className="text-center mb-16 animate-slide-up">
          <div className="section-label mx-auto w-fit">
            <span className="w-2 h-2 rounded-full bg-brand" />
            Pricing
          </div>
          <h2 className="font-heading font-extrabold text-3xl md:text-5xl mb-4">
            Transparent <span className="bg-gradient-to-r from-brand to-yellow-300 bg-clip-text text-transparent">Pricing</span>
          </h2>
          <p className="text-slate-400 max-w-md mx-auto text-lg">
            Simple, straightforward pricing for your 360 photobooth experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {plans.map((plan, idx) => (
            <div
              key={idx}
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

              <a
                href="#contact"
                className={`block text-center w-full py-3.5 rounded-full font-semibold text-sm transition-all duration-300 ${
                  plan.popular
                    ? 'btn-primary'
                    : 'border border-slate-700 text-slate-300 hover:border-brand/40 hover:text-brand hover:bg-brand/5'
                }`}
              >
                {plan.price === 'Custom' ? 'Contact Us' : 'Book Now'}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
