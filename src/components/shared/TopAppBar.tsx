'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

export default function TopAppBar() {
  const [scrolled, setScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { label: 'Events', href: '#events' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-500 ${
        scrolled || isMenuOpen
          ? 'glassmorphism shadow-[0_4px_30px_rgba(0,0,0,0.3)]'
          : 'bg-transparent'
      }`}>
        <nav className="container mx-auto px-4 py-3.5 flex justify-between items-center">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-3 group z-[70]">
            <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-xl overflow-hidden shadow-lg transition-transform duration-300 group-hover:scale-110">
              <Image 
                src="/banguissa-logo.jpg" 
                alt="Banguissa Store Logo" 
                fill 
                className="object-cover"
              />
            </div>
            <div>
              <span className="font-heading font-black text-base sm:text-lg text-slate-50 tracking-tight">
                Banguissa 360
              </span>
              <div className="font-heading font-medium text-[8px] sm:text-[10px] text-brand uppercase tracking-widest opacity-80 -mt-1">
                by banguissa store
              </div>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-slate-400 hover:text-brand transition-colors duration-300 font-medium relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-brand after:rounded-full after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            {/* CTA Button (Desktop) */}
            <a href="#pricing" className="hidden sm:flex btn-primary text-sm py-2.5 px-6">
              Book Now
            </a>

            {/* Mobile Menu Toggle */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-slate-50 transition-all active:scale-95"
            >
              {isMenuOpen ? (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
              ) : (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="12" y1="18" x2="21" y2="18"/>
                </svg>
              )}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-50 md:hidden transition-all duration-500 ${
        isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}>
        <div className="absolute inset-0 bg-[#050508]/90 backdrop-blur-xl" />
        <div className="relative h-full flex flex-col items-center justify-center gap-8 px-6">
          {navLinks.map((link, idx) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="text-3xl font-heading font-black text-slate-200 hover:text-brand transition-all duration-300"
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              {link.label}
            </a>
          ))}
          <a 
            href="#pricing"
            onClick={() => setIsMenuOpen(false)}
            className="btn-primary w-full max-w-[200px] text-center mt-4"
          >
            Book Now
          </a>
        </div>
      </div>
    </>
  )
}
