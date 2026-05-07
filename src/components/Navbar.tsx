'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useStore } from '@/store/useStore'
import { useEffect, useState } from 'react'

export default function GlobalNav() {
  const pathname = usePathname()
  const { toggleCart, getCartCount } = useStore()
  const [cartCount, setCartCount] = useState(0)
  
  useEffect(() => {
    setCartCount(getCartCount())
  }, [getCartCount])

  const isStorePage = pathname?.startsWith('/store') || pathname?.startsWith('/product')

  return (
    <>
      <nav className="global-nav">
        <div className="max-w-[1440px] mx-auto h-full px-6 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <Link 
              href="/" 
              className="text-white text-[12px] font-normal tracking-[-0.12px]"
              style={{ fontFamily: 'SF Pro Text, system-ui, sans-serif' }}
            >
              KY System Solutions
            </Link>
            <div className="global-nav-links hidden md:flex items-center gap-6">
              <Link 
                href="/#robotics" 
                className="text-[#cccccc] text-[12px] font-normal tracking-[-0.12px] hover:text-white transition-colors"
              >
                Robotics
              </Link>
              <Link 
                href="/store" 
                className="text-[#cccccc] text-[12px] font-normal tracking-[-0.12px] hover:text-white transition-colors"
              >
                Store
              </Link>
              <Link 
                href="/#software" 
                className="text-[#cccccc] text-[12px] font-normal tracking-[-0.12px] hover:text-white transition-colors"
              >
                Software
              </Link>
              <Link 
                href="/#makers" 
                className="text-[#cccccc] text-[12px] font-normal tracking-[-0.12px] hover:text-white transition-colors"
              >
                Makers Lab
              </Link>
              <Link 
                href="/" 
                className="text-[#cccccc] text-[12px] font-normal tracking-[-0.12px] hover:text-white transition-colors"
              >
                Support
              </Link>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button 
              className="text-[#cccccc] hover:text-white transition-colors"
              aria-label="Search"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8"/>
                <path d="m21 21-4.35-4.35"/>
              </svg>
            </button>
            <button 
              onClick={toggleCart}
              className="text-[#cccccc] hover:text-white transition-colors relative"
              aria-label="Cart"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
                <line x1="3" y1="6" x2="21" y2="6"/>
                <path d="M16 10a4 4 0 0 1-8 0"/>
              </svg>
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-[#0066cc] text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Sub Navigation - only on store pages */}
      {isStorePage && (
        <div className="sub-nav-frosted">
          <div className="max-w-[1440px] mx-auto h-full px-6 flex items-center justify-between">
            <div className="flex items-center gap-6">
              <Link 
                href="/store" 
                className="text-[21px] font-semibold tracking-[0.231px]"
                style={{ fontFamily: 'SF Pro Display, system-ui, sans-serif' }}
              >
                Store
              </Link>
            </div>
            <Link 
              href="/store" 
              className="btn-pill btn-pill-primary text-[17px]"
            >
              Buy
            </Link>
          </div>
        </div>
      )}
    </>
  )
}