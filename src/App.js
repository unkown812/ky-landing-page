import { useState } from 'react';
import './App.css';

function App() {
  const [ecommerceMode, setEcommerceMode] = useState('retail');

  return (
    <div className="App">
      {/* Global Navigation */}
      <nav className="global-nav">
        <ul className="global-nav-links">
          <li><a href="#home">KY System Solutions</a></li>
          <li><a href="#robotics">Robotics</a></li>
          <li><a href="#ecommerce">Electronics</a></li>
          <li><a href="#software">Software</a></li>
          <li><a href="#products">Products</a></li>
          <li><a href="#makers">Makers Lab</a></li>
        </ul>
        <div className="global-nav-actions">
          <button className="btn-dark-utility">Contact</button>
        </div>
      </nav>

      {/* Sub Navigation */}
      <div className="sub-nav">
        <span className="sub-nav-category">KY System Solutions</span>
        <ul className="sub-nav-links">
          <li><a href="#robotics">Automation</a></li>
          <li><a href="#ecommerce">Components</a></li>
          <li><a href="#software">Services</a></li>
          <li><a href="#products">Products</a></li>
          <li><a href="#makers">Manufacturing</a></li>
        </ul>
      </div>

      {/* Homepage - Bento Grid Hub */}
      <section id="home" className="bento-grid">
        <div className="bento-card bento-card-large">
          <div>
            <h3>Robotics & Automation</h3>
            <p>Intelligent automation systems for next-generation manufacturing.</p>
          </div>
          <a href="#robotics" className="btn-primary">Explore</a>
        </div>
        
        <div className="bento-card bento-card-robotics">
          <div>
            <h3>E-Commerce</h3>
            <p>Industrial components & electronics.</p>
          </div>
          <a href="#ecommerce" className="btn-primary">Shop Now</a>
        </div>
        
        <div className="bento-card bento-card-ecommerce">
          <div>
            <h3>Software Services</h3>
            <p>Digital transformation & architecture.</p>
          </div>
          <a href="#software" className="btn-primary">View Cases</a>
        </div>
        
        <div className="bento-card bento-card-products">
          <div>
            <h3>Software Products</h3>
            <p>Deploy secure digital infrastructure.</p>
          </div>
          <a href="#products" className="btn-primary">View Packages</a>
        </div>
        
        <div className="bento-card bento-card-makers">
          <div>
            <h3>Makers Lab</h3>
            <p>CNC, 3D printing, PCB fabrication.</p>
          </div>
          <a href="#makers" className="btn-primary">Upload File</a>
        </div>
      </section>

      {/* Hero Section */}
      <section className="hero">
        <h1>Building the infrastructure for tomorrow.</h1>
        <p>From industrial robotics and automation to bespoke software solutions and instant manufacturing, we deliver integrated technology services that power innovation across industries.</p>
        <div className="hero-buttons">
          <a href="#robotics" className="btn-primary">Explore Automation Solutions</a>
          <a href="#makers" className="btn-secondary">Get Instant Quote</a>
        </div>
      </section>

      {/* Robotics & Automation Section */}
      <section id="robotics" className="section-alternating">
        <div className="content section-content dark">
          <h2>Intelligent Automation & Robotic Systems.</h2>
          <p>Achieve output at a higher and more consistent level with increased efficiency and speed. We specialize in custom robotic cells and programmable automation to seamlessly integrate into your production processes.</p>
          <div className="cta-buttons">
            <a href="#" className="btn-primary">Explore Automation Solutions</a>
            <a href="#" className="btn-secondary">Book an Engineering Consultation</a>
          </div>
        </div>
        <div className="visual">
          <div style={{ color: '#fff', opacity: 0.5 }}>[Video: Robotic arm operating in factory]</div>
        </div>
      </section>

      {/* E-Commerce for Electronics Section */}
      <section id="ecommerce" className="product-tile product-tile-light">
        <h2>Industrial Grade Components & Electronics.</h2>
        <p className="tagline">Source premium motors, wires, and accessories globally. Whether you are prototyping a single unit or requiring bulk supply chain procurement, access our extensive inventory with tailored pricing.</p>
        
        <div className="ecommerce-toggle">
          <button 
            className={`toggle-btn ${ecommerceMode === 'retail' ? 'active' : ''}`}
            onClick={() => setEcommerceMode('retail')}
          >
            Shop Retail
          </button>
          <button 
            className={`toggle-btn ${ecommerceMode === 'bulk' ? 'active' : ''}`}
            onClick={() => setEcommerceMode('bulk')}
          >
            Request Wholesale Quote
          </button>
        </div>

        {ecommerceMode === 'retail' ? (
          <a href="#" className="btn-primary">Add to Cart</a>
        ) : (
          <div className="pricing-table">
            <div className="pricing-tier">
              <span>10-49 units</span>
              <span>15% off</span>
            </div>
            <div className="pricing-tier">
              <span>50-99 units</span>
              <span>25% off</span>
            </div>
            <div className="pricing-tier">
              <span>100+ units</span>
              <span>35% off</span>
            </div>
          </div>
        )}
      </section>

      {/* Software Services Section */}
      <section id="software" className="section-alternating">
        <div className="content section-content">
          <h2>Bespoke Digital Transformation & Architecture.</h2>
          <p>We architect scalable software ecosystems. From modern Web and App development to complex Database Designing and intuitive UI/UX, our engineering team builds custom Software as a Service (SaaS) platforms tailored to your operational needs.</p>
          <div className="cta-buttons">
            <a href="#" className="btn-primary">View Case Studies</a>
            <a href="#" className="btn-secondary">Book a Discovery Call</a>
          </div>
        </div>
        <div className="visual" style={{ background: 'var(--color-surface-tile-2)' }}>
          <div style={{ color: '#fff', opacity: 0.5 }}>[Portfolio/Case Studies]</div>
        </div>
      </section>

      {/* Software Products Section */}
      <section id="products" className="saas-hero">
        <h1>Deploy Secure Digital Infrastructure in Minutes.</h1>
        <p>Accelerate your development cycle with our enterprise-ready Software Products. Integrate our robust Auth Systems, pre-configured Databases, and advanced Designing Tools directly into your stack.</p>
        <div className="hero-buttons">
          <a href="#" className="btn-primary">View Packages</a>
          <a href="#" className="btn-secondary">Start Free Trial</a>
        </div>
        
        <div className="trust-indicators">
          <span className="trust-badge">SOC 2 Certified</span>
          <span className="trust-badge">99.9% Uptime</span>
          <span className="trust-badge">Global CDN</span>
        </div>

        <div className="utility-cards">
          <div className="utility-card">
            <h4>Auth Systems</h4>
            <p>Enterprise-grade authentication with SSO, MFA, and role-based access control.</p>
            <a href="#" className="text-link">Learn more</a>
          </div>
          <div className="utility-card">
            <h4>Pre-configured Databases</h4>
            <p>Production-ready PostgreSQL, MySQL, and MongoDB instances with auto-scaling.</p>
            <a href="#" className="text-link">Learn more</a>
          </div>
          <div className="utility-card">
            <h4>Designing Tools</h4>
            <p>API-first design system components for rapid UI development.</p>
            <a href="#" className="text-link">Learn more</a>
          </div>
        </div>
      </section>

      {/* Makers Lab Section */}
      <section id="makers" className="product-tile product-tile-parchment">
        <h2>Makers Lab: Instant Manufacturing on Demand.</h2>
        <p className="tagline">Transform your designs into physical reality. Upload your CAD files to receive instant quotes for precision CNC machining, rapid 3D printing, and custom PCB fabrication.</p>
        
        <div className="upload-zone">
          <div className="upload-zone-icon">📁</div>
          <p>Drag & drop your files here or click to browse</p>
          <p style={{ fontSize: '12px', marginTop: '8px', color: '#7a7a7a' }}>Supports: STEP, STL, Gerber, DXF</p>
        </div>

        <a href="#" className="btn-primary">Upload File for Instant Quote</a>

        <div className="makers-config" style={{ display: 'none' }}>
          <div className="config-panel">
            <div className="config-option">
              <label>Manufacturing Method</label>
              <select>
                <option>CNC Machining</option>
                <option>3D Printing</option>
                <option>PCB Fabrication</option>
              </select>
            </div>
            <div className="config-option">
              <label>Material</label>
              <select>
                <option>Aluminum 6061</option>
                <option>Stainless Steel</option>
                <option>ABS Plastic</option>
              </select>
            </div>
          </div>
          <div className="config-panel">
            <h4>Instant Quote</h4>
            <p style={{ fontSize: '24px', fontWeight: '600' }}>$149.00</p>
            <p style={{ fontSize: '14px', color: '#7a7a7a' }}>Delivery: 5-7 business days</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-links">
            <div className="footer-column">
              <h5>Services</h5>
              <ul>
                <li><a href="#robotics">Robotics & Automation</a></li>
                <li><a href="#ecommerce">Electronics</a></li>
                <li><a href="#software">Software Development</a></li>
                <li><a href="#makers">Manufacturing</a></li>
              </ul>
            </div>
            <div className="footer-column">
              <h5>Products</h5>
              <ul>
                <li><a href="#products">Auth Systems</a></li>
                <li><a href="#products">Databases</a></li>
                <li><a href="#products">Design Tools</a></li>
                <li><a href="#products">Packages</a></li>
              </ul>
            </div>
            <div className="footer-column">
              <h5>Company</h5>
              <ul>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">Press</a></li>
              </ul>
            </div>
            <div className="footer-column">
              <h5>Support</h5>
              <ul>
                <li><a href="#">Documentation</a></li>
                <li><a href="#">API Reference</a></li>
                <li><a href="#">Status</a></li>
                <li><a href="#">Privacy</a></li>
              </ul>
            </div>
            <div className="footer-column">
              <h5>Connect</h5>
              <ul>
                <li><a href="#">Twitter</a></li>
                <li><a href="#">LinkedIn</a></li>
                <li><a href="#">GitHub</a></li>
                <li><a href="#">Discord</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-legal">
            Copyright © 2026 KY System Solutions. All rights reserved. | Privacy Policy | Terms of Service
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;