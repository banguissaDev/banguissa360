'use client'

import { motion } from 'framer-motion'

export default function ImpactSection() {
  return (
    <section className="relative py-24 px-4 overflow-hidden">
      <div className="container mx-auto relative z-10">
        <div className="relative overflow-hidden rounded-[2rem] p-8 md:p-12 lg:p-16" style={{
          background: 'linear-gradient(135deg, #f4ca54 0%, #e8b230 40%, #d4a020 100%)'
        }}>
          {/* Decorative circles */}
          <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-white/10 blur-sm" />
          <div className="absolute -bottom-32 -left-20 w-60 h-60 rounded-full bg-black/10 blur-sm" />
          
          {/* Subtle pattern */}
          <div className="absolute inset-0 opacity-[0.04]" style={{
            backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)',
            backgroundSize: '24px 24px'
          }} />

          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/10 text-dark text-xs font-bold uppercase tracking-wider mb-6">
                <span className="w-2 h-2 rounded-full bg-dark" />
                Community Impact
              </div>
              
              <h2 className="font-heading font-extrabold text-3xl md:text-4xl lg:text-5xl text-slate-950 mb-5 leading-tight">
                Zero-Cost <br/>Events
              </h2>
              <p className="text-slate-800/80 text-lg mb-6 leading-relaxed">
                For zero-cost events, we handle everything. We bring our equipment, manage operations, and serve your guests directly. In this model, each guest becomes our client and pays a <span className="font-bold text-slate-950">small access fee</span>, as agreed upon in advance—making it completely risk-free for you while you enjoy your event.
              </p>
              <p className="text-slate-800/70 text-sm mb-8 italic">
                If you prefer to offer free access to your guests, you can choose one of our packages tailored to your needs.
              </p>

              {/* Stats */}
              <div className="flex flex-wrap gap-8 mb-8">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
                  <div className="text-3xl font-heading font-extrabold text-dark">15+</div>
                  <div className="text-sm text-slate-800/60">Free Events</div>
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
                  <div className="text-3xl font-heading font-extrabold text-dark">2,000+</div>
                  <div className="text-sm text-slate-800/60">People Reached</div>
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }}>
                  <div className="text-3xl font-heading font-extrabold text-dark">100%</div>
                  <div className="text-sm text-slate-800/60">Community Love</div>
                </motion.div>
              </div>
              <p className="text-slate-950 font-semibold">Apply for your 0-cost event now.</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex justify-center lg:justify-end"
            >
              <a href="#contact" className="group relative w-full max-w-sm py-5 px-8 bg-slate-950 text-brand rounded-2xl font-heading font-bold text-lg text-center transition-all duration-300 hover:bg-slate-900 hover:shadow-[0_0_40px_rgba(0,0,0,0.3)] hover:scale-105 overflow-hidden">
                <span className="relative z-10 flex items-center justify-center gap-3">
                  Apply for 0-Cost Event
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
                  </svg>
                </span>
                {/* Button shine effect */}
                <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-brand/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
