import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="max-w-[980px] mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          <div className="footer-column">
            <h5 className="text-[14px] font-semibold tracking-[-0.224px] mb-3 text-[#333333]">Services</h5>
            <ul className="space-y-2">
              <li><Link href="/#robotics" className="text-[17px] text-[#7a7a7a] hover:text-[#333333]">Robotics & Automation</Link></li>
              <li><Link href="/store" className="text-[17px] text-[#7a7a7a] hover:text-[#333333]">Electronics</Link></li>
              <li><Link href="/#software" className="text-[17px] text-[#7a7a7a] hover:text-[#333333]">Software Development</Link></li>
              <li><Link href="/#makers" className="text-[17px] text-[#7a7a7a] hover:text-[#333333]">Manufacturing</Link></li>
            </ul>
          </div>
          <div className="footer-column">
            <h5 className="text-[14px] font-semibold tracking-[-0.224px] mb-3 text-[#333333]">Products</h5>
            <ul className="space-y-2">
              <li><Link href="/" className="text-[17px] text-[#7a7a7a] hover:text-[#333333]">Auth Systems</Link></li>
              <li><Link href="/" className="text-[17px] text-[#7a7a7a] hover:text-[#333333]">Databases</Link></li>
              <li><Link href="/" className="text-[17px] text-[#7a7a7a] hover:text-[#333333]">Design Tools</Link></li>
              <li><Link href="/" className="text-[17px] text-[#7a7a7a] hover:text-[#333333]">Packages</Link></li>
            </ul>
          </div>
          <div className="footer-column">
            <h5 className="text-[14px] font-semibold tracking-[-0.224px] mb-3 text-[#333333]">Company</h5>
            <ul className="space-y-2">
              <li><Link href="/" className="text-[17px] text-[#7a7a7a] hover:text-[#333333]">About Us</Link></li>
              <li><Link href="/" className="text-[17px] text-[#7a7a7a] hover:text-[#333333]">Careers</Link></li>
              <li><Link href="/" className="text-[17px] text-[#7a7a7a] hover:text-[#333333]">Contact</Link></li>
              <li><Link href="/" className="text-[17px] text-[#7a7a7a] hover:text-[#333333]">Press</Link></li>
            </ul>
          </div>
          <div className="footer-column">
            <h5 className="text-[14px] font-semibold tracking-[-0.224px] mb-3 text-[#333333]">Support</h5>
            <ul className="space-y-2">
              <li><Link href="/" className="text-[17px] text-[#7a7a7a] hover:text-[#333333]">Documentation</Link></li>
              <li><Link href="/" className="text-[17px] text-[#7a7a7a] hover:text-[#333333]">API Reference</Link></li>
              <li><Link href="/" className="text-[17px] text-[#7a7a7a] hover:text-[#333333]">Status</Link></li>
              <li><Link href="/" className="text-[17px] text-[#7a7a7a] hover:text-[#333333]">Privacy</Link></li>
            </ul>
          </div>
          <div className="footer-column">
            <h5 className="text-[14px] font-semibold tracking-[-0.224px] mb-3 text-[#333333]">Connect</h5>
            <ul className="space-y-2">
              <li><Link href="/" className="text-[17px] text-[#7a7a7a] hover:text-[#333333]">Twitter</Link></li>
              <li><Link href="/" className="text-[17px] text-[#7a7a7a] hover:text-[#333333]">LinkedIn</Link></li>
              <li><Link href="/" className="text-[17px] text-[#7a7a7a] hover:text-[#333333]">GitHub</Link></li>
              <li><Link href="/" className="text-[17px] text-[#7a7a7a] hover:text-[#333333]">Discord</Link></li>
            </ul>
          </div>
        </div>
        <div className="text-[12px] text-[#7a7a7a] pt-6 border-t border-[#e0e0e0]">
          Copyright © 2026 KY System Solutions. All rights reserved. | Privacy Policy | Terms of Service
        </div>
      </div>
    </footer>
  )
}