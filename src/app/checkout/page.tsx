'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useStore } from '@/store/useStore'

export default function CheckoutPage() {
  const { cart, getCartTotal, pricingMode } = useStore()
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    country: 'United States',
  })

  const total = getCartTotal()

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (step === 1) {
      setStep(2)
    } else {
      console.log('Processing order:', {
        customer: formData,
        items: cart,
        total,
        pricingMode
      })
      alert('Order placed successfully! (Demo)')
    }
  }

  if (cart.length === 0) {
    return (
      <div className="min-h-screen pt-[96px] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-[34px] font-semibold mb-4">Your cart is empty</h1>
          <Link href="/store" className="btn-pill btn-pill-primary">
            Continue Shopping
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#f5f5f7] pt-[96px] pb-24">
      <div className="max-w-[1200px] mx-auto px-6 py-12">
        <h1 className="text-[40px] font-semibold mb-8" style={{ fontFamily: 'SF Pro Display, system-ui, sans-serif' }}>
          Checkout
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left - Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit}>
              {/* Step 1: Shipping */}
              {step === 1 && (
                <div className="bg-white rounded-lg p-6 border border-[#e0e0e0]">
                  <h2 className="text-[21px] font-semibold mb-6">Shipping Information</h2>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="text-[14px] font-semibold block mb-2">Email</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg border border-[#e0e0e0] text-[17px]"
                        required
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="text-[14px] font-semibold block mb-2">First Name</label>
                        <input
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-lg border border-[#e0e0e0] text-[17px]"
                          required
                        />
                      </div>
                      <div>
                        <label className="text-[14px] font-semibold block mb-2">Last Name</label>
                        <input
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-lg border border-[#e0e0e0] text-[17px]"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-[14px] font-semibold block mb-2">Address</label>
                      <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg border border-[#e0e0e0] text-[17px]"
                        required
                      />
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      <div>
                        <label className="text-[14px] font-semibold block mb-2">City</label>
                        <input
                          type="text"
                          name="city"
                          value={formData.city}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-lg border border-[#e0e0e0] text-[17px]"
                          required
                        />
                      </div>
                      <div>
                        <label className="text-[14px] font-semibold block mb-2">State</label>
                        <input
                          type="text"
                          name="state"
                          value={formData.state}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-lg border border-[#e0e0e0] text-[17px]"
                          required
                        />
                      </div>
                      <div>
                        <label className="text-[14px] font-semibold block mb-2">ZIP</label>
                        <input
                          type="text"
                          name="zip"
                          value={formData.zip}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-lg border border-[#e0e0e0] text-[17px]"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <button type="submit" className="btn-pill btn-pill-primary w-full mt-6">
                    Continue to Payment
                  </button>
                </div>
              )}

              {/* Step 2: Payment (Mock) */}
              {step === 2 && (
                <div className="bg-white rounded-lg p-6 border border-[#e0e0e0]">
                  <h2 className="text-[21px] font-semibold mb-6">Payment Method</h2>
                  <p className="text-[14px] text-[#7a7a7a] mb-6">
                    Demo mode - no actual payment processing
                  </p>
                  
                  <div className="p-4 bg-[#f5f5f7] rounded-lg mb-6">
                    <p className="text-[14px] text-[#7a7a7a]">Card number</p>
                    <p className="text-[17px]">•••• •••• •••• 4242</p>
                  </div>

                  <div className="flex gap-4 mb-6">
                    <div className="flex-1">
                      <p className="text-[14px] text-[#7a7a7a]">Expiry</p>
                      <p className="text-[17px]">12/28</p>
                    </div>
                    <div className="flex-1">
                      <p className="text-[14px] text-[#7a7a7a]">CVC</p>
                      <p className="text-[17px]">•••</p>
                    </div>
                  </div>

                  <button type="submit" className="btn-pill btn-pill-primary w-full">
                    Place Order - ${total.toFixed(2)}
                  </button>
                  
                  <button 
                    type="button" 
                    onClick={() => setStep(1)}
                    className="w-full mt-4 text-[14px] text-[#0066cc] hover:underline"
                  >
                    ← Back to Shipping
                  </button>
                </div>
              )}
            </form>
          </div>

          {/* Right - Order Summary */}
          <div>
            <div className="bg-white rounded-lg p-6 border border-[#e0e0e0] sticky top-24">
              <h2 className="text-[21px] font-semibold mb-4">Order Summary</h2>
              
              <div className="space-y-4 mb-6">
                {cart.map((item) => (
                  <div key={item.product.id} className="flex gap-4">
                    <div className="w-16 h-16 bg-[#f5f5f7] rounded-lg overflow-hidden flex-shrink-0">
                      <img 
                        src={item.product.imageUrl} 
                        alt={item.product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <p className="text-[14px] font-semibold">{item.product.name}</p>
                      <p className="text-[14px] text-[#7a7a7a]">Qty: {item.quantity}</p>
                    </div>
                    <p className="text-[14px] font-semibold">
                      ${(item.product.price_retail * item.quantity).toFixed(2)}
                    </p>
                  </div>
                ))}
              </div>

              <div className="border-t border-[#e0e0e0] pt-4">
                <div className="flex justify-between mb-2">
                  <span className="text-[14px] text-[#7a7a7a]">Subtotal</span>
                  <span className="text-[14px]">${total.toFixed(2)}</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span className="text-[14px] text-[#7a7a7a]">Shipping</span>
                  <span className="text-[14px]">Free</span>
                </div>
                <div className="flex justify-between pt-4 border-t border-[#e0e0e0]">
                  <span className="text-[17px] font-semibold">Total</span>
                  <span className="text-[17px] font-semibold">${total.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}