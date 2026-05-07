import type { Metadata } from 'next'
import './globals.css'
import GlobalNav from '@/components/Navbar'
import Footer from '@/components/Footer'
import CartDrawer from '@/components/CartDrawer'

export const metadata: Metadata = {
  title: 'KY System Solutions - Robotics, Electronics, Software, Manufacturing',
  description: 'From industrial robotics and automation to bespoke software solutions and instant manufacturing, we deliver integrated technology services that power innovation across industries.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <GlobalNav />
        <main className="pt-[44px]">
          {children}
        </main>
        <Footer />
        <CartDrawer />
      </body>
    </html>
  )
}