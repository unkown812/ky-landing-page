'use client'

import { useState } from 'react'
import Link from 'next/link'
import { products, getProductsByCategory, searchProducts } from '@/lib/products'
import { useStore } from '@/store/useStore'

const categories = ['All', 'Motors', 'Wires', 'Accessories', 'Sensors']

export default function StorePage() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')
  const { pricingMode, setPricingMode, addToCart, addQuoteRequest, quoteRequests } = useStore()
  const [showQuoteNotification, setShowQuoteNotification] = useState(false)

  let filteredProducts = selectedCategory === 'All' 
    ? products 
    : getProductsByCategory(selectedCategory)
  
  if (searchQuery) {
    filteredProducts = searchProducts(searchQuery).filter(
      p => selectedCategory === 'All' || p.category === selectedCategory
    )
  }

  const handleAddToCart = (product: typeof products[0]) => {
    addToCart(product, 1)
  }

  const handleRequestQuote = (product: typeof products[0]) => {
    addQuoteRequest(product, 1)
    setShowQuoteNotification(true)
    setTimeout(() => setShowQuoteNotification(false), 3000)
  }

  return (
    <div className="min-h-screen bg-[#f5f5f7] pt-[96px]">
      {/* Quote Notification */}
      {showQuoteNotification && (
        <div className="fixed top-20 right-6 bg-[#0066cc] text-white px-6 py-3 rounded-full shadow-lg z-[1000] animate-fade-in">
          Quote request added. Our team will contact you.
        </div>
      )}

      {/* Search and Filters */}
      <div className="bg-white border-b border-[#e0e0e0] sticky top-[96px] z-50">
        <div className="max-w-[1440px] mx-auto px-6 py-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Category Chips */}
            <div className="flex gap-2 flex-wrap">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full text-[14px] transition-colors ${
                    selectedCategory === cat
                      ? 'bg-[#0066cc] text-white'
                      : 'bg-[#f5f5f7] text-[#1d1d1f] hover:bg-[#e8e8ed]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="w-full md:w-64">
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-input"
              />
            </div>
          </div>

          {/* Retail/Bulk Toggle */}
          <div className="flex gap-2 mt-4">
            <button
              onClick={() => setPricingMode('retail')}
              className={`toggle-btn ${pricingMode === 'retail' ? 'active' : ''}`}
            >
              Singular (Retail)
            </button>
            <button
              onClick={() => setPricingMode('bulk')}
              className={`toggle-btn ${pricingMode === 'bulk' ? 'active' : ''}`}
            >
              Bulk (Custom)
            </button>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="max-w-[1440px] mx-auto px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div key={product.id} className="store-card">
              <Link href={`/product/${product.id}`}>
                <div className="aspect-square bg-[#f5f5f7] rounded-lg mb-4 overflow-hidden shadow-product">
                  <img 
                    src={product.imageUrl} 
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform"
                  />
                </div>
              </Link>
              <Link href={`/product/${product.id}`}>
                <h3 className="text-[17px] font-semibold tracking-[-0.374px] text-[#1d1d1f] mb-1">
                  {product.name}
                </h3>
              </Link>
              <p className="text-[14px] text-[#7a7a7a] mb-2">{product.category}</p>
              
              <div className="mb-4">
                {pricingMode === 'retail' ? (
                  <span className="text-[17px] font-semibold">${product.price_retail.toFixed(2)}</span>
                ) : (
                  <span className="text-[14px] text-[#0066cc]">Bulk pricing available</span>
                )}
              </div>

              {pricingMode === 'retail' ? (
                <button
                  onClick={() => handleAddToCart(product)}
                  className="btn-pill btn-pill-primary w-full"
                >
                  Add to Cart
                </button>
              ) : (
                <button
                  onClick={() => handleRequestQuote(product)}
                  className="btn-pill btn-pill-secondary w-full"
                >
                  Request Quote
                </button>
              )}
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-[17px] text-[#7a7a7a]">No products found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  )
}