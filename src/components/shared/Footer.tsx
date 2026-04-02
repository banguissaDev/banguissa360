import Image from 'next/image'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = [
    {
      title: 'Company',
      links: [
        { label: 'About Us', href: '#hero' },
        { label: 'Our Story', href: '#hero' },
        { label: 'Careers', href: '#contact' },
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
        { label: 'Apply for 0-Cost Event', href: '#contact' },
        { label: 'Contact Us', href: '#contact' },
        { label: 'FAQ', href: '#pricing' },
      ],
    },
  ]

  const socials = [
    {
      label: 'Instagram',
      href: '#',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
        </svg>
      ),
    },
    {
      label: 'Twitter',
      href: '#',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
        </svg>
      ),
    },
    {
      label: 'TikTok',
      href: '#',
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
