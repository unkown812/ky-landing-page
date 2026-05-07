import { create } from 'zustand'

export interface Product {
  id: string
  name: string
  description: string
  price_retail: number
  tiers: { minQty: number; maxQty: number | null; price: number }[]
  category: string
  imageUrl: string
  inStock: boolean
  sku: string
}

export interface CartItem {
  product: Product
  quantity: number
}

interface StoreState {
  cart: CartItem[]
  quoteRequests: CartItem[]
  pricingMode: 'retail' | 'bulk'
  isCartOpen: boolean
  
  addToCart: (product: Product, quantity: number) => void
  removeFromCart: (productId: string) => void
  updateQuantity: (productId: string, quantity: number) => void
  addQuoteRequest: (product: Product, quantity: number) => void
  clearQuoteRequests: () => void
  setPricingMode: (mode: 'retail' | 'bulk') => void
  toggleCart: () => void
  closeCart: () => void
  getCartTotal: () => number
  getCartCount: () => number
}

export const useStore = create<StoreState>((set, get) => ({
  cart: [],
  quoteRequests: [],
  pricingMode: 'retail',
  isCartOpen: false,

  addToCart: (product, quantity) => {
    const existing = get().cart.find(item => item.product.id === product.id)
    if (existing) {
      set({
        cart: get().cart.map(item =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      })
    } else {
      set({ cart: [...get().cart, { product, quantity }] })
    }
  },

  removeFromCart: (productId) => {
    set({ cart: get().cart.filter(item => item.product.id !== productId) })
  },

  updateQuantity: (productId, quantity) => {
    if (quantity <= 0) {
      get().removeFromCart(productId)
    } else {
      set({
        cart: get().cart.map(item =>
          item.product.id === productId ? { ...item, quantity } : item
        )
      })
    }
  },

  addQuoteRequest: (product, quantity) => {
    const existing = get().quoteRequests.find(item => item.product.id === product.id)
    if (!existing) {
      set({ quoteRequests: [...get().quoteRequests, { product, quantity }] })
    }
  },

  clearQuoteRequests: () => set({ quoteRequests: [] }),

  setPricingMode: (mode) => set({ pricingMode: mode }),

  toggleCart: () => set({ isCartOpen: !get().isCartOpen }),
  
  closeCart: () => set({ isCartOpen: false }),

  getCartTotal: () => {
    return get().cart.reduce((total, item) => {
      const price = get().pricingMode === 'bulk' && item.product.tiers.length > 0
        ? item.product.tiers[0].price
        : item.product.price_retail
      return total + (price * item.quantity)
    }, 0)
  },

  getCartCount: () => {
    return get().cart.reduce((count, item) => count + item.quantity, 0)
  }
}))