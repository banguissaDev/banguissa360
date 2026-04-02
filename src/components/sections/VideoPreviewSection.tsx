'use client'

import Script from 'next/script'

export default function VideoPreviewSection() {
  return (
    <section className="relative py-24 px-4 overflow-hidden">
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-12 animate-slide-up">
          <div className="section-label mx-auto w-fit">
            <span className="w-2 h-2 rounded-full bg-brand" />
            Showreel
          </div>
          <h2 className="font-heading font-extrabold text-3xl md:text-5xl mb-4">
            Watch the <span className="bg-gradient-to-r from-brand to-yellow-300 bg-clip-text text-transparent">Spin</span>
          </h2>
          <p className="text-slate-400 max-w-md mx-auto text-lg">
            See the 360° magic in action — pure kinetic elegance.
          </p>
        </div>

        <div className="relative max-w-2xl mx-auto">
          {/* Decorative glow behind */}
          <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-r from-brand/15 via-purple-500/10 to-brand/15 blur-3xl opacity-60" />
          
          <div className="relative rounded-[2.5rem] overflow-hidden border-4 border-white/[0.05] shadow-[0_0_50px_rgba(244,202,84,0.1)] group">
            {/* Tenor GIF Embed */}
            <div 
              className="tenor-gif-embed" 
              data-postid="25502622" 
              data-share-method="host" 
              data-aspect-ratio="1" 
              data-width="100%"
            >
              <a href="https://tenor.com/view/360spinners-gif-25502622">360spinners GIF</a>
              from <a href="https://tenor.com/search/360spinners-gifs">360spinners GIFs</a>
            </div>
            
            {/* Script for Tenor */}
            <Script 
              src="https://tenor.com/embed.js" 
              strategy="afterInteractive" 
              async 
            />

            {/* Bottom label overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent z-20">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white font-heading font-bold text-lg">Live Experience</p>
                  <p className="text-slate-400 text-sm">Real-time 360° Momentum</p>
                </div>
                <div className="flex items-center gap-2 text-brand text-sm font-semibold glassmorphism px-3 py-1 rounded-full">
                  <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                  Live View
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
