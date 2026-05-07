'use client'

import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import { getProductById, products } from '@/lib/products'
import { useStore } from '@/store/useStore'

export default function ProductPage() {
  const params = useParams()
  const product = getProductById(params.id as string)
  const { pricingMode, addToCart, addQuoteRequest, getCartTotal } = useStore()
  const [quantity, setQuantity] = useState(1)
  const [showStickyBar, setShowStickyBar] = useState(false)
  const [selectedImage, setSelectedImage] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setShowStickyBar(window.scrollY > 300)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!product) {
    return (
      <div className="min-h-screen pt-[96px] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-[34px] font-semibold mb-4">Product not found</h1>
          <Link href="/store" className="btn-pill btn-pill-primary">
            Back to Store
          </Link>
        </div>
      </div>
    )
  }

  const handleAddToCart = () => {
    addToCart(product, quantity)
  }

  const handleRequestQuote = () => {
    addQuoteRequest(product, quantity)
    alert('Quote request added. Our team will contact you.')
  }

  const getPrice = () => {
    if (pricingMode === 'bulk' && product.tiers.length > 0) {
      const tier = product.tiers.find(t => quantity >= t.minQty && (!t.maxQty || quantity <= t.maxQty))
      return tier ? tier.price : product.tiers[0].price
    }
    return product.price_retail
  }

  const relatedProducts = products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4)

  return (
    <div className="min-h-screen bg-[#f5f5f7] pt-[96px] pb-24">
      <div className="max-w-[1440px] mx-auto px-6 py-12">
        {/* Breadcrumb */}
        <div className="mb-8">
          <Link href="/store" className="text-[14px] text-[#0066cc] hover:underline">
            ← Back to Store
          </Link>
        </div>

        {/* Product Detail - Two Column */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Left - Image Gallery */}
          <div>
            <div className="aspect-square bg-[#f5f5f7] rounded-lg mb-4 overflow-hidden shadow-product">
              <img 
                src={product.imageUrl} 
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Thumbnail placeholder */}
            <div className="flex gap-2">
              {[0, 1, 2, 3].map((i) => (
                <button
                  key={i}
                  onClick={() => setSelectedImage(i)}
                  className={`w-16 h-16 rounded-lg overflow-hidden border-2 ${
                    selectedImage === i ? 'border-[#0066cc]' : 'border-transparent'
                  }`}
                >
                  <img 
                    src={product.imageUrl} 
                    alt={`${product.name} ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Right - Product Info */}
          <div>
            <p className="text-[14px] text-[#7a7a7a] mb-2">{product.sku}</p>
            <h1 className="text-[40px] font-semibold mb-4" style={{ fontFamily: 'SF Pro Display, system-ui, sans-serif', lineHeight: '1.1' }}>
              {product.name}
            </h1>
            <p className="text-[17px] text-[#7a7a7a] mb-6" style={{ lineHeight: '1.47', letterSpacing: '-0.374px' }}>
              {product.description}
            </p>

            {/* Price Display */}
            <div className="mb-6">
              {pricingMode === 'retail' ? (
                <span className="text-[34px] font-semibold">${product.price_retail.toFixed(2)}</span>
              ) : (
                <div>
                  <span className="text-[21px] font-semibold">Bulk Pricing</span>
                  <div className="mt-2 border border-[#e0e0e0] rounded-lg overflow-hidden">
                    {product.tiers.map((tier, index) => (
                      <div key={index} className="flex justify-between px-4 py-2 bg-white border-b border-[#e0e0e0] last:border-b-0">
                        <span className="text-[14px] text-[#7a7a7a]">
                          {tier.maxQty ? `${tier.minQty}-${tier.maxQty}` : `${tier.minQty}+`} units
                        </span>
                        <span className="text-[14px] font-semibold">${tier.price.toFixed(2)} each</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Quantity Selector */}
            <div className="mb-6">
              <label className="text-[14px] font-semibold block mb-2">Quantity</label>
              <div className="flex items-center gap-4">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 rounded-full border border-[#e0e0e0] flex items-center justify-center text-[#1d1d1f] hover:border-[#0066cc]"
                >
                  -
                </button>
                <span className="text-[21px] font-semibold w-12 text-center">{quantity}</span>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 rounded-full border border-[#e0e0e0] flex items-center justify-center text-[#1d1d1f] hover:border-[#0066cc]"
                >
                  +
                </button>
              </div>
            </div>

            {/* CTA Button */}
            {pricingMode === 'retail' ? (
              <button onClick={handleAddToCart} className="btn-pill btn-pill-primary w-full mb-4">
                Add to Cart - ${(getPrice() * quantity).toFixed(2)}
              </button>
            ) : (
              <button onClick={handleRequestQuote} className="btn-pill btn-pill-secondary w-full mb-4">
                Request Quote
              </button>
            )}

            {/* Stock Status */}
            <div className="flex items-center gap-2 text-[14px] text-[#34c759]">
              <span className="w-2 h-2 bg-[#34c759] rounded-full"></span>
              {product.inStock ? 'In Stock' : 'Out of Stock'}
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="border-t border-[#e0e0e0] pt-12">
            <h2 className="text-[28px] font-semibold mb-8" style={{ fontFamily: 'SF Pro Display, system-ui, sans-serif' }}>
              Related Products
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((p) => (
                <Link key={p.id} href={`/product/${p.id}`} className="store-card">
                  <div className="aspect-square bg-[#f5f5f7] rounded-lg mb-4 overflow-hidden shadow-product">
                    <img 
                      src={p.imageUrl} 
                      alt={p.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-[17px] font-semibold tracking-[-0.374px] mb-1">{p.name}</h3>
                  <p className="text-[17px]">${p.price_retail.toFixed(2)}</p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Floating Sticky Bar */}
      {showStickyBar && (
        <div className="sticky-bar">
          <div className="max-w-[1440px] mx-auto h-full px-6 flex items-center justify-between">
            <div>
              <span className="text-[17px]">{product.name}</span>
              <span className="text-[17px] font-semibold ml-4">
                ${(getPrice() * quantity).toFixed(2)}
              </span>
            </div>
            {pricingMode === 'retail' ? (
              <button onClick={handleAddToCart} className="btn-pill btn-pill-primary">
                Add to Bag
              </button>
            ) : (
              <button onClick={handleRequestQuote} className="btn-pill btn-pill-primary">
                Request Quote
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  )
}