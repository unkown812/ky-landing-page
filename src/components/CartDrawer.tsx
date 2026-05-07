'use client'

import { useStore } from '@/store/useStore'
import Link from 'next/link'

export default function CartDrawer() {
  const { isCartOpen, closeCart, cart, updateQuantity, removeFromCart, pricingMode, getCartTotal } = useStore()

  if (!isCartOpen) return null

  const total = getCartTotal()

  return (
    <>
      <div 
        className="fixed inset-0 bg-black/30 z-[1001]"
        onClick={closeCart}
      />
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-white z-[1002] shadow-xl flex flex-col">
        <div className="flex items-center justify-between p-6 border-b border-[#e0e0e0]">
          <h2 className="text-[21px] font-semibold tracking-[0.231px]" style={{ fontFamily: 'SF Pro Display, system-ui, sans-serif' }}>
            Shopping Bag
          </h2>
          <button 
            onClick={closeCart}
            className="text-[#7a7a7a] hover:text-[#1d1d1f]"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18"/>
              <line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          {cart.length === 0 ? (
            <div className="text-center text-[#7a7a7a] py-12">
              Your bag is empty
            </div>
          ) : (
            <div className="space-y-6">
              {cart.map((item) => (
                <div key={item.product.id} className="flex gap-4">
                  <div className="w-20 h-20 bg-[#f5f5f7] rounded-lg overflow-hidden flex-shrink-0">
                    <img 
                      src={item.product.imageUrl} 
                      alt={item.product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-[17px] font-semibold tracking-[-0.374px]">{item.product.name}</h3>
                    <p className="text-[14px] text-[#7a7a7a] mt-1">
                      {pricingMode === 'bulk' && item.product.tiers.length > 0
                        ? `$${item.product.tiers[0].price.toFixed(2)} each`
                        : `$${item.product.price_retail.toFixed(2)} each`
                      }
                    </p>
                    <div className="flex items-center gap-3 mt-3">
                      <button 
                        onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                        className="w-8 h-8 rounded-full border border-[#e0e0e0] flex items-center justify-center text-[#7a7a7a] hover:border-[#0066cc]"
                      >
                        -
                      </button>
                      <span className="text-[17px]">{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                        className="w-8 h-8 rounded-full border border-[#e0e0e0] flex items-center justify-center text-[#7a7a7a] hover:border-[#0066cc]"
                      >
                        +
                      </button>
                      <button 
                        onClick={() => removeFromCart(item.product.id)}
                        className="ml-auto text-[#0066cc] text-[14px]"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {cart.length > 0 && (
          <div className="p-6 border-t border-[#e0e0e0]">
            <div className="flex justify-between items-center mb-4">
              <span className="text-[17px] text-[#7a7a7a]">Subtotal</span>
              <span className="text-[21px] font-semibold tracking-[0.231px]">${total.toFixed(2)}</span>
            </div>
            <Link 
              href="/checkout"
              onClick={closeCart}
              className="btn-pill btn-pill-primary w-full justify-center"
            >
              Checkout
            </Link>
          </div>
        )}
      </div>
    </>
  )
}