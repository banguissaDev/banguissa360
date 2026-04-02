'use client'

import { motion } from 'framer-motion'

export default function ProcessSection() {
  const steps = [
    {
      number: '01',
      title: 'Step on the Stage',
      description: 'Position yourself on our premium platform and get ready for your moment.',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"/><path d="m8 12 3 3 5-5"/>
        </svg>
      ),
    },
    {
      number: '02',
      title: 'Strike a Pose',
      description: 'Let the 360-degree arm spin around you, capturing every angle in cinematic detail.',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/><circle cx="12" cy="13" r="3"/>
        </svg>
      ),
    },
    {
      number: '03',
      title: 'Share Instantly',
      description: 'Get your video directly to your phone via QR code and share with the world.',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><polyline points="16 6 12 2 8 6"/><line x1="12" x2="12" y1="2" y2="15"/>
        </svg>
      ),
    },
  ]

  return (
    <section className="relative py-24 px-4 overflow-hidden">
      {/* Background glow */}
      <div className="mesh-gradient purple-glow top-0 right-0 opacity-10" />
      
      <div className="container mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="section-label mx-auto w-fit">
            <span className="w-2 h-2 rounded-full bg-brand" />
            How It Works
          </div>
          <h2 className="font-heading font-black text-4xl md:text-5xl lg:text-6xl text-slate-50 mb-6">
            Our <span className="bg-gradient-to-r from-brand to-yellow-300 bg-clip-text text-transparent">Simple</span> Process
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
            We've streamlined everything so you can focus on the party while 
            we handle the 360° magic.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto relative">
          {/* Connector line (desktop) */}
          <div className="hidden md:block absolute top-24 left-[16.67%] right-[16.67%] h-px bg-gradient-to-r from-transparent via-brand/20 to-transparent" />
          
          {steps.map((step, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              className="relative group"
            >
              <div className="card-dark p-8 text-center relative overflow-hidden">
                {/* Hover gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-brand/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Step number watermark */}
                <div className="absolute -top-4 -right-2 text-8xl font-heading font-black text-brand/[0.04] select-none">
                  {step.number}
                </div>

                {/* Icon circle */}
                <div className="relative mx-auto w-16 h-16 rounded-2xl bg-gradient-to-br from-brand/15 to-brand/5 border border-brand/10 flex items-center justify-center text-brand mb-6 group-hover:scale-110 group-hover:border-brand/30 transition-all duration-500">
                  {step.icon}
                </div>

                {/* Step indicator */}
                <div className="text-xs font-bold text-brand/40 uppercase tracking-widest mb-3">
                  Step {step.number}
                </div>

                <h3 className="font-heading font-bold text-xl mb-3 text-slate-100">
                  {step.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
