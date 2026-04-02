'use client'

import { useState } from 'react'

export default function BottomNavBar() {
  const [active, setActive] = useState('home')

  const navItems = [
    {
      id: 'home',
      label: 'Home',
      href: '#hero',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
        </svg>
      ),
    },
    {
      id: 'pricing',
      label: 'Pricing',
      href: '#pricing',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="12" x2="12" y1="2" y2="22"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
        </svg>
      ),
    },
    {
      id: 'events',
      label: 'Events',
      href: '#events',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/>
        </svg>
      ),
    },
    {
      id: 'contact',
      label: 'Contact',
      href: '#contact',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
        </svg>
      ),
    },
  ]

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 sm:hidden">
      {/* Safe area background */}
      <div className="glassmorphism border-t border-white/[0.04] px-2 pb-[env(safe-area-inset-bottom)]">
        <div className="flex justify-around items-center py-2">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              onClick={() => setActive(item.id)}
              className={`flex flex-col items-center gap-1 py-2 px-4 rounded-2xl transition-all duration-300 ${
                active === item.id
                  ? 'text-brand bg-brand/10'
                  : 'text-slate-500 hover:text-slate-300'
              }`}
            >
              <div className={`transition-transform duration-300 ${active === item.id ? 'scale-110' : ''}`}>
                {item.icon}
              </div>
              <span className={`text-[10px] font-semibold ${active === item.id ? 'text-brand' : ''}`}>
                {item.label}
              </span>
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}
