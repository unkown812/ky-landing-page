'use client'

import Link from 'next/link'
import { useState } from 'react'
import { products } from '@/lib/products'

export default function Home() {
  const sampleProducts = products.slice(0, 3)
  const [uploadedFile, setUploadedFile] = useState<string | null>(null)
  const [quote, setQuote] = useState<{ price: string; delivery: string } | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setIsLoading(true)
      setUploadedFile(file.name)
      
      setTimeout(() => {
        setQuote({
          price: '$249',
          delivery: '5-7 business days'
        })
        setIsLoading(false)
      }, 1500)
    }
  }

  return (
    <div>
      {/* Hero Tile - Light Canvas */}
      <section className="tile-canvas section-padding text-center">
        <h1 className="text-[56px] font-semibold tracking-[-0.28px] mb-4" style={{ fontFamily: 'SF Pro Display, system-ui, sans-serif', lineHeight: '1.07' }}>
          Building the infrastructure for tomorrow.
        </h1>
        <p className="text-[28px] font-normal tracking-[0.196px] text-[#7a7a7a] max-w-2xl mx-auto mb-8" style={{ fontFamily: 'SF Pro Display, system-ui, sans-serif', lineHeight: '1.14' }}>
          From industrial robotics and automation to bespoke software solutions and instant manufacturing, we deliver integrated technology services that power innovation across industries.
        </p>
        <div className="flex gap-4 justify-center">
          <Link href="#robotics" className="btn-pill btn-pill-primary">
            Explore Solutions
          </Link>
          <button className="btn-pill btn-pill-secondary">
            Contact Sales
          </button>
        </div>
      </section>

      {/* Robotics & Automation Tile - Dark */}
      <section id="robotics" className="tile-dark-1 section-padding text-center text-white min-h-[80vh] flex flex-col justify-center">
        <h2 className="text-[40px] font-semibold mb-4" style={{ fontFamily: 'SF Pro Display, system-ui, sans-serif', lineHeight: '1.1' }}>
          Intelligent Automation & Robotic Systems.
        </h2>
        <p className="text-[17px] text-[#cccccc] max-w-xl mx-auto mb-8" style={{ lineHeight: '1.47', letterSpacing: '-0.374px' }}>
          Achieve output at a higher and more consistent level with increased efficiency and speed. We specialize in custom robotic cells and programmable automation to seamlessly integrate into your production processes.
        </p>
        <div className="flex gap-4 justify-center mb-12">
          <button className="btn-pill btn-pill-primary">
            Explore Automation Solutions
          </button>
        </div>
        
        {/* Video/Product Visual */}
        <div className="max-w-3xl mx-auto mt-8">
          <div className="aspect-video bg-[#1a1a1c] rounded-lg flex items-center justify-center shadow-product">
            <div className="text-center">
              <div className="text-6xl mb-4">🤖</div>
              <p className="text-[#7a7a7a]">[Video: Robotic arm operating in factory]</p>
            </div>
          </div>
        </div>
      </section>

      {/* E-Commerce Tile - Parchment */}
      <section id="ecommerce" className="tile-parchment section-padding text-center">
        <h2 className="text-[40px] font-semibold mb-4 text-[#1d1d1f]" style={{ fontFamily: 'SF Pro Display, system-ui, sans-serif', lineHeight: '1.1' }}>
          Industrial Grade Components & Electronics.
        </h2>
        <p className="text-[17px] text-[#7a7a7a] max-w-xl mx-auto mb-8" style={{ lineHeight: '1.47', letterSpacing: '-0.374px' }}>
          Source premium motors, wires, and accessories globally. Whether you are prototyping a single unit or requiring bulk supply chain procurement, access our extensive inventory with tailored pricing.
        </p>
        
        <div className="flex gap-4 justify-center mb-12">
          <Link href="/store" className="btn-pill btn-pill-primary">
            Shop Now →
          </Link>
        </div>

        {/* Product Preview Cards */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {sampleProducts.map((product) => (
            <Link 
              key={product.id} 
              href={`/product/${product.id}`}
              className="store-card text-left block"
            >
              <div className="aspect-square bg-[#f5f5f7] rounded-lg mb-4 overflow-hidden shadow-product">
                <img 
                  src={product.imageUrl} 
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-[17px] font-semibold tracking-[-0.374px] text-[#1d1d1f] mb-1">{product.name}</h3>
              <p className="text-[17px] text-[#1d1d1f]">${product.price_retail.toFixed(2)}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Software Services Tile - Dark 2 */}
      <section id="software" className="tile-dark-2 section-padding text-center text-white min-h-[80vh] flex flex-col justify-center">
        <h2 className="text-[40px] font-semibold mb-4" style={{ fontFamily: 'SF Pro Display, system-ui, sans-serif', lineHeight: '1.1' }}>
          Bespoke Digital Transformation & Architecture.
        </h2>
        <p className="text-[17px] text-[#cccccc] max-w-xl mx-auto mb-8" style={{ lineHeight: '1.47', letterSpacing: '-0.374px' }}>
          We architect scalable software ecosystems. From modern Web and App development to complex Database Designing and intuitive UI/UX, our engineering team builds custom Software as a Service (SaaS) platforms tailored to your operational needs.
        </p>
        <div className="flex gap-4 justify-center mb-8">
          <button className="btn-pill btn-pill-primary">
            View Case Studies
          </button>
        </div>

        {/* Trust Indicators */}
        <div className="flex gap-8 justify-center opacity-60 mt-8">
          <span className="text-[14px] text-[#cccccc]">Fortune 500</span>
          <span className="text-[14px] text-[#cccccc]">Tech Leaders</span>
          <span className="text-[14px] text-[#cccccc]">Innovators</span>
        </div>
      </section>

      {/* Software Products Tile - Light Canvas */}
      <section className="tile-canvas section-padding text-center">
        <h2 className="text-[40px] font-semibold mb-4 text-[#1d1d1f]" style={{ fontFamily: 'SF Pro Display, system-ui, sans-serif', lineHeight: '1.1' }}>
          Deploy Secure Digital Infrastructure in Minutes.
        </h2>
        <p className="text-[17px] text-[#7a7a7a] max-w-xl mx-auto mb-8" style={{ lineHeight: '1.47', letterSpacing: '-0.374px' }}>
          Accelerate your development cycle with our enterprise-ready Software Products. Integrate our robust Auth Systems, pre-configured Databases, and advanced Designing Tools directly into your stack.
        </p>
        <div className="flex gap-4 justify-center mb-12">
          <button className="btn-pill btn-pill-primary">
            View Packages
          </button>
        </div>

        {/* Product Screenshot Visual */}
        <div className="max-w-4xl mx-auto">
          <div className="aspect-video bg-[#1d1d1f] rounded-lg flex items-center justify-center">
            <div className="text-center text-white">
              <div className="text-6xl mb-4">💻</div>
              <p className="text-[#7a7a7a]">[Dashboard/Terminal UI]</p>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="flex gap-8 justify-center mt-12 opacity-60">
          <span className="text-[14px] text-[#7a7a7a] flex items-center gap-2">
            🔒 SOC 2 Certified
          </span>
          <span className="text-[14px] text-[#7a7a7a] flex items-center gap-2">
            ⚡ 99.9% Uptime
          </span>
          <span className="text-[14px] text-[#7a7a7a] flex items-center gap-2">
            🌍 Global CDN
          </span>
        </div>
      </section>

      {/* Makers Lab Tile - Dark 3 */}
      <section id="makers" className="tile-dark-3 section-padding text-center text-white">
        <h2 className="text-[40px] font-semibold mb-4" style={{ fontFamily: 'SF Pro Display, system-ui, sans-serif', lineHeight: '1.1' }}>
          Makers Lab: Instant Manufacturing on Demand.
        </h2>
        <p className="text-[17px] text-[#cccccc] max-w-xl mx-auto mb-8" style={{ lineHeight: '1.47', letterSpacing: '-0.374px' }}>
          Transform your designs into physical reality. Upload your CAD files to receive instant quotes for precision CNC machining, rapid 3D printing, and custom PCB fabrication.
        </p>
        <div className="flex gap-4 justify-center mb-8">
          <button className="btn-pill btn-pill-primary">
            Upload File for Instant Quote
          </button>
        </div>

        {/* Interactive File Upload Zone */}
        <div className="max-w-2xl mx-auto">
          <div className="upload-zone">
            {isLoading ? (
              <div className="py-8">
                <div className="animate-spin w-12 h-12 border-4 border-[#0066cc] border-t-transparent rounded-full mx-auto mb-4"></div>
                <p className="text-[17px] text-[#7a7a7a]">Analyzing your file...</p>
              </div>
            ) : quote ? (
              <div className="py-8">
                <div className="text-6xl mb-4">✅</div>
                <p className="text-[21px] font-semibold mb-2">{quote.price}</p>
                <p className="text-[14px] text-[#cccccc]">Delivery: {quote.delivery}</p>
                <p className="text-[12px] text-[#7a7a7a] mt-2">{uploadedFile}</p>
              </div>
            ) : (
              <>
                <div className="text-6xl mb-4">📁</div>
                <p className="text-[17px] text-[#7a7a7a] mb-2">Drag & drop your files here or click to browse</p>
                <p className="text-[12px] text-[#7a7a7a]">Supports: STEP, STL, Gerber, DXF (up to 50MB)</p>
              </>
            )}
            <input 
              type="file" 
              accept=".stl,.step,.obj,.dxf,.gbr"
              onChange={handleFileUpload}
              className="absolute inset-0 opacity-0 cursor-pointer"
              disabled={isLoading}
            />
          </div>
        </div>
      </section>
    </div>
  )
}