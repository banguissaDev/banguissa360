'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function VideoPreviewSection() {
  return (
    <section className="relative py-24 px-4 overflow-hidden bg-[#050508]/50">
      <div className="container mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="section-label mx-auto w-fit">
            <span className="w-2 h-2 rounded-full bg-brand" />
            Showreel
          </div>
          <h2 className="font-heading font-black text-4xl md:text-5xl lg:text-6xl text-slate-50 mb-6">
            Watch the <span className="bg-gradient-to-r from-brand to-yellow-300 bg-clip-text text-transparent">Spin</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
            See the 360° magic in action — pure kinetic elegance at every second.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative max-w-5xl mx-auto"
        >
          {/* Decorative glow behind */}
          <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-r from-brand/10 via-purple-500/5 to-brand/10 blur-3xl opacity-60" />
          
          <div className="relative rounded-[2.5rem] overflow-hidden border border-white/[0.08] shadow-2xl aspect-video group">
            <Image 
              src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=2600&auto=format&fit=crop" 
              alt="Video Preview"
              fill
              className="object-cover opacity-60 group-hover:scale-105 transition-transform duration-1000"
            />
            
            {/* Glass Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#050508] via-transparent to-transparent flex flex-col items-center justify-center text-center p-8">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="w-20 h-20 rounded-full bg-brand flex items-center justify-center text-dark shadow-2xl animate-pulse-glow cursor-pointer mb-8 group-hover:scale-110 transition-transform"
              >
                <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                  <polygon points="5 3 19 12 5 21 5 3"/>
                </svg>
              </motion.div>
              
              <motion.h3 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: 0.5 }}
                className="font-heading font-black text-2xl md:text-4xl text-slate-50 mb-4 max-w-lg"
              >
                See the 360° Pulse In Action
              </motion.h3>
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: 0.7 }}
                className="text-slate-300 text-sm md:text-base tracking-widest uppercase font-medium"
              >
                Real Events • Real Moments • 360° Revolution
              </motion.p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
