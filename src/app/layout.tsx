import type { Metadata } from 'next'
import '@/styles/globals.css'
import TopAppBar from '@/components/shared/TopAppBar'
import BottomNavBar from '@/components/shared/BottomNavBar'
import Footer from '@/components/shared/Footer'

export const metadata: Metadata = {
  title: 'Banguissa 360 - Premium Photobooth Rentals',
  description: 'Banguissa 360 by banguissa store: Experience immersive 360-degree photobooth rentals for your events. Your Event, Our 360 Spin!',
  keywords: ['360 photobooth', 'photobooth rental', 'event service', 'Rwanda', 'Banguissa Store'],
  openGraph: {
    title: 'Banguissa 360 - Premium Photobooth Rentals',
    description: 'Experience immersive 360-degree photobooth rentals for your events by Banguissa Store.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className="bg-slate-950 text-slate-50">
        <TopAppBar />
        <main className="min-h-screen bg-[#050508] overflow-x-hidden">
          {children}
        </main>
        <Footer />
        <BottomNavBar />
      </body>
    </html>
  )
}
