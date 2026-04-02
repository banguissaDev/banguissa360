'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function HeroSection() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    
    // Load Tenor script if not already present
    if (!document.getElementById('tenor-script')) {
      const script = document.createElement('script')
      script.id = 'tenor-script'
      script.src = 'https://tenor.com/embed.js'
      script.async = true
      document.body.appendChild(script)
    }
  }, [])

  return (
    <section id="hero" className="relative min-h-[auto] lg:min-h-screen flex items-center pt-32 pb-16 lg:pt-20 lg:pb-16 px-4 overflow-hidden">
      {/* Background mesh gradients */}
      <div className="mesh-gradient gold-glow -top-40 -right-40 animate-float" />
      <div className="mesh-gradient purple-glow -bottom-60 -left-40" style={{ animationDelay: '3s' }} />
      
      {/* Background Image Layer (Subtle) */}
      <div className="absolute inset-0 z-0 opacity-[0.08] pointer-events-none">
        <Image 
          src="/hero-photobooth.png"
          alt="Background Texture"
          fill
          className="object-cover grayscale"
          priority
        />
      </div>

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.03] z-0" style={{
        backgroundImage: 'linear-gradient(rgba(244,202,84,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(244,202,84,0.3) 1px, transparent 1px)',
        backgroundSize: '60px 60px'
      }} />

      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="section-label">
              <span className="w-2 h-2 rounded-full bg-brand animate-pulse-glow" />
              360° Photobooth Rentals
            </div>
            
            <h1 className="font-heading font-extrabold text-4xl md:text-5xl lg:text-7xl text-slate-50 mb-6 leading-[1.1] tracking-tight">
              Your Event,<br />
              <span className="bg-gradient-to-r from-brand via-yellow-300 to-brand bg-clip-text text-transparent animate-gradient-shift">
                Our 360 Spin
              </span>
            </h1>
            
            <motion.p 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-slate-400 text-lg md:text-xl mb-10 max-w-lg leading-relaxed"
            >
              Capture the immersive magic of 360-degree videos. 
              Experience <span className="text-slate-200 font-medium">kinetic elegance</span> at every moment.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex gap-4 flex-wrap"
            >
              <a href="/#pricing" className="btn-primary flex items-center gap-3">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                Get Started
              </a>
              <a href="#events" className="btn-secondary flex items-center gap-2">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3"/></svg>
                View Showreel
              </a>
            </motion.div>

            {/* Trust indicators */}
            <div className="mt-12 flex items-center gap-6 text-sm text-slate-500">
              <div className="flex items-center gap-1.5">
                <div className="flex gap-0.5 text-brand">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                    </svg>
                  ))}
                </div>
                <span>5.0 Rating</span>
              </div>
              <div className="w-px h-4 bg-slate-700" />
              <div>100+ Events</div>
              <div className="w-px h-4 bg-slate-700" />
              <div>Kigali, Rwanda</div>
            </div>
          </motion.div>
          
          {/* Hero GIF visual */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative"
          >
            {/* Decorative ring */}
            <div className="absolute -inset-4 rounded-[2.5rem] border border-brand/15 animate-pulse-glow" />
            
            <div className="relative rounded-[2rem] overflow-hidden aspect-square shadow-2xl border border-white/10 group">
              {/* Logo Background with low opacity */}
              <div className="absolute inset-0 z-0 opacity-20 group-hover:opacity-30 transition-opacity duration-700">
                <Image 
                  src="/banguissa-logo.jpg" 
                  alt="Background Texture" 
                  fill 
                  className="object-cover scale-150 rotate-12 blur-[2px]"
                />
              </div>
              
              {/* The GIF provided by user */}
              <div className="absolute inset-0 z-10 flex items-center justify-center p-4">
                <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(244,202,84,0.15)]">
                  {isMounted ? (
                    <div 
                      className="w-full h-full"
                      dangerouslySetInnerHTML={{ __html: `
                        <div class="tenor-gif-embed" data-postid="21460316" data-share-method="host" data-aspect-ratio="1" data-width="100%">
                          <a href="https://tenor.com/view/ponste55-gif-21460316"></a>
                        </div>
                      `}}
                    />
                  ) : (
                    <div className="w-full h-full bg-slate-900/50 animate-pulse" />
                  )}
                </div>
              </div>

              {/* Bottom Glow */}
              <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-brand/20 via-transparent to-transparent z-20 pointer-events-none" />
            </div>

            {/* Float Badge */}
            <div className="absolute -bottom-6 -right-6 bg-brand text-dark p-6 rounded-3xl shadow-2xl shadow-brand/20 hidden md:block animate-float">
              <div className="font-heading font-black text-2xl leading-tight">#1</div>
              <div className="text-[10px] font-bold uppercase tracking-wider opacity-80">Choice in Kigali</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
