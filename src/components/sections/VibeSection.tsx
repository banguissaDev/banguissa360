'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export default function VibeSection() {
  const vibes = [
    {
      title: 'Weddings',
      subtitle: 'Capture every magical moment',
      image: '/weddingphoto.webp',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
        </svg>
      ),
      gradient: 'from-rose-500/40 via-brand/20 to-transparent',
      size: 'md:col-span-2 h-80',
    },
    {
      title: 'Corporate',
      subtitle: 'Brand activations that wow',
      image: '/corporate.jpg',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="16" height="20" x="4" y="2" rx="2" ry="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01"/><path d="M16 6h.01"/><path d="M8 10h.01"/><path d="M16 10h.01"/><path d="M8 14h.01"/><path d="M16 14h.01"/>
        </svg>
      ),
      gradient: 'from-blue-500/40 via-brand/10 to-transparent',
      size: 'h-80',
    },
    {
      title: 'Birthdays',
      subtitle: 'Unforgettable celebrations',
      image: '/360°-Photo-Booth-7.jpg',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="20 12 20 22 4 22 4 12"/><rect width="20" height="5" x="2" y="7"/><line x1="12" x2="12" y1="22" y2="7"/><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7Z"/><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7Z"/>
        </svg>
      ),
      gradient: 'from-purple-500/40 via-brand/10 to-transparent',
      size: 'h-80',
    },
    {
      title: 'Concerts',
      subtitle: 'Feel the energy in every frame',
      image: '/hero-photobooth.png',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/>
        </svg>
      ),
      gradient: 'from-emerald-500/40 via-brand/20 to-transparent',
      size: 'md:col-span-2 h-80',
    },
  ]

  return (
    <section id="events" className="relative py-24 px-4 overflow-hidden">
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
            Events
          </div>
          <h2 className="font-heading font-black text-4xl md:text-5xl lg:text-6xl text-slate-50 mb-6">
            Find Your <span className="bg-gradient-to-r from-brand to-yellow-300 bg-clip-text text-transparent">Vibe</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
            From intimate gatherings to massive festivals, we bring the energy and 
            the tech to make every moment unforgettable.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {vibes.map((vibe, idx) => (
            <motion.a
              key={idx}
              href="#pricing"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`group relative rounded-[2rem] overflow-hidden transition-all duration-500 hover:scale-[1.02] ${vibe.size}`}
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <Image
                  src={vibe.image}
                  alt={vibe.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${vibe.gradient} mix-blend-overlay`} />
                <div className="absolute inset-0 bg-slate-950/40 transition-opacity duration-500 group-hover:opacity-20" />
              </div>

              {/* Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 z-10">
                <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white mb-5 transform transition-all duration-500 group-hover:scale-110 group-hover:bg-brand group-hover:text-dark group-hover:border-brand">
                  {vibe.icon}
                </div>
                <h3 className="font-heading font-bold text-3xl text-white mb-2 drop-shadow-lg">
                  {vibe.title}
                </h3>
                <p className="text-white/80 text-sm font-medium opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 max-w-[200px] drop-shadow-md">
                  {vibe.subtitle}
                </p>
              </div>

              {/* Hover glow ring */}
              <div className="absolute inset-0 rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 border-2 border-brand/50" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
