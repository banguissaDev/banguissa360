'use client'

import { motion } from 'framer-motion'

export default function ContactPage() {
  const contactInfo = [
    {
      title: 'Phone',
      value: '0792402359',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
        </svg>
      ),
      href: 'tel:0792402359',
    },
    {
      title: 'Email',
      value: 'banguissastore@gmail.com',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
        </svg>
      ),
      href: 'mailto:banguissastore@gmail.com',
    },
    {
      title: 'Location',
      value: 'Gikondo Magerwa, Kigali',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>
        </svg>
      ),
      href: '#',
    },
  ]

  return (
    <div className="pt-32 pb-24 px-4 overflow-hidden relative">
      {/* Background elements */}
      <div className="mesh-gradient gold-glow -top-20 -right-20 opacity-10" />
      <div className="mesh-gradient purple-glow -bottom-40 -left-20 opacity-5" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="section-label mx-auto w-fit">
            <span className="w-2 h-2 rounded-full bg-brand animate-pulse" />
            Contact Us
          </div>
          <h1 className="font-heading font-extrabold text-4xl md:text-6xl mb-6 text-white">
            Let's Start Your <br/>
            <span className="bg-gradient-to-r from-brand to-yellow-300 bg-clip-text text-transparent">360° Story</span>
          </h1>
          <p className="text-slate-400 max-w-xl mx-auto text-lg">
            Have questions about your upcoming event? We're here to help you bring kinetic elegance to your celebrations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {contactInfo.map((info, idx) => (
            <motion.a
              key={idx}
              href={info.href}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative p-8 card-dark text-center flex flex-col items-center justify-center transition-all duration-500 hover:scale-[1.05]"
            >
              <div className="w-16 h-16 rounded-2xl bg-brand/10 border border-brand/20 flex items-center justify-center text-brand mb-6 transition-all duration-500 group-hover:bg-brand group-hover:text-dark">
                {info.icon}
              </div>
              <h3 className="font-heading font-bold text-xl text-slate-100 mb-2">{info.title}</h3>
              <p className="text-slate-400 group-hover:text-brand transition-colors duration-300">{info.value}</p>
              
              {/* Decorative corner glow */}
              <div className="absolute top-0 right-0 w-12 h-12 bg-brand/5 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.a>
          ))}
        </div>

        {/* Contact Form Section */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-4xl mx-auto"
        >
          <div className="card-dark p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand/50 to-transparent" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h2 className="font-heading font-bold text-3xl mb-6 text-white">Send us a message</h2>
                <p className="text-slate-400 mb-8">
                  Fill out the form and our team will get back to you within 24 hours to discuss your event.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-center gap-4 text-sm text-slate-300">
                    <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-brand">✓</div>
                    Instant QR Code Delivery
                  </div>
                  <div className="flex items-center gap-4 text-sm text-slate-300">
                    <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-brand">✓</div>
                    Professional On-site Attendants
                  </div>
                  <div className="flex items-center gap-4 text-sm text-slate-300">
                    <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-brand">✓</div>
                    Customized Video Overlays
                  </div>
                </div>

                <div className="mt-12 pt-8 border-t border-white/5">
                  <p className="text-sm font-heading font-bold text-brand uppercase tracking-widest mb-6">Follow our journey</p>
                  <div className="flex gap-4">
                    <a href="https://www.instagram.com/banguissastore" className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-brand hover:border-brand/30 hover:bg-brand/5 transition-all">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                    </a>
                    <a href="https://www.facebook.com/profile.php?id=61576577405576" className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-brand hover:border-brand/30 hover:bg-brand/5 transition-all">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                    </a>
                    <a href="https://www.tiktok.com/@banguissa.store" className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-brand hover:border-brand/30 hover:bg-brand/5 transition-all">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/></svg>
                    </a>
                  </div>
                </div>
              </div>

              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input 
                    type="text" 
                    placeholder="Full Name" 
                    className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand/50 transition-colors"
                  />
                  <input 
                    type="email" 
                    placeholder="Email Address" 
                    className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand/50 transition-colors"
                  />
                </div>
                <input 
                  type="text" 
                  placeholder="Event Type (e.g. Wedding)" 
                  className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand/50 transition-colors"
                />
                <textarea 
                  rows={4} 
                  placeholder="Tell us about your event..." 
                  className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand/50 transition-colors resize-none"
                />
                <button className="btn-primary w-full py-4 tracking-wider">
                  SEND INQUIRY
                </button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
