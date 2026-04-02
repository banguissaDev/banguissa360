import Image from 'next/image'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = [
    {
      title: 'Company',
      links: [
        { label: 'About Us', href: '#hero' },
        { label: 'Our Story', href: '#hero' },
        { label: 'Careers', href: '/contact' },
      ],
    },
    {
      title: 'Services',
      links: [
        { label: 'Pricing', href: '#pricing' },
        { label: 'Events', href: '#events' },
        { label: 'Gallery', href: '#events' },
      ],
    },
    {
      title: 'Community',
      links: [
        { label: 'Apply for 0-Cost Event', href: '/contact' },
        { label: 'Contact Us', href: '/contact' },
        { label: 'FAQ', href: '#pricing' },
      ],
    },
  ]

  const socials = [
    {
      label: 'Instagram',
      href: 'https://www.instagram.com/banguissastore',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
        </svg>
      ),
    },
    {
      label: 'Facebook',
      href: 'https://www.facebook.com/profile.php?id=61576577405576',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
        </svg>
      ),
    },
    {
      label: 'TikTok',
      href: 'https://www.tiktok.com/@banguissa.store',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/>
        </svg>
      ),
    },
  ]

  return (
    <footer id="contact" className="relative bg-[#050508] border-t border-white/[0.04] mt-10 pt-20 pb-28 sm:pb-16">
      {/* Top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-px bg-gradient-to-r from-transparent via-brand/30 to-transparent" />

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="relative w-12 h-12 rounded-xl overflow-hidden shadow-lg">
                <Image 
                  src="/banguissa-logo.jpg" 
                  alt="Banguissa Store Logo" 
                  fill 
                  className="object-cover"
                />
              </div>
              <div>
                <span className="font-heading font-black text-lg text-slate-50 tracking-tight">
                  Banguissa 360
                </span>
                <div className="font-heading font-medium text-[10px] text-brand uppercase tracking-widest opacity-80 -mt-1">
                  by banguissa store
                </div>
              </div>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed max-w-xs mb-6">
              360° Photobooth Rentals in Kigali, Rwanda. 
              Bringing kinetic elegance to your celebrations.
            </p>

            {/* Contact Info Quick View */}
            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-3 text-slate-400 hover:text-brand transition-colors">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                <span className="text-sm">0792402359</span>
              </div>
              <div className="flex items-center gap-3 text-slate-400 hover:text-brand transition-colors">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>
                <span className="text-sm">banguissastore@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 text-slate-400">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                <span className="text-sm">Gikondo Magerwa, Kigali</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-9 h-9 rounded-xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center text-slate-500 hover:text-brand hover:border-brand/30 hover:bg-brand/5 transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {footerLinks.map((column) => (
            <div key={column.title}>
              <h4 className="font-heading font-bold text-sm text-slate-200 mb-4 uppercase tracking-wider">
                {column.title}
              </h4>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-slate-500 text-sm hover:text-brand transition-colors duration-300"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/[0.04] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-600 text-xs">
            © {currentYear} Banguissa 360 by banguissa store. All rights reserved.
          </p>
          <p className="text-slate-700 text-xs">
            Kinetic Elegance • Kigali, Rwanda 🇷🇼
          </p>
        </div>
      </div>
    </footer>
  )
}
