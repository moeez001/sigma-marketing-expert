import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Twitter, Instagram, Linkedin, Send } from "lucide-react"
import SigmaLogo from "./sigma-logo"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: <Facebook className="h-5 w-5" />, href: "#", label: "Facebook" },
    { icon: <Twitter className="h-5 w-5" />, href: "#", label: "Twitter" },
    { icon: <Instagram className="h-5 w-5" />, href: "#", label: "Instagram" },
    { icon: <Linkedin className="h-5 w-5" />, href: "#", label: "LinkedIn" },
  ]

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Consulting", href: "/consulting" },
    { name: "Contact", href: "/contact" },
    { name: "About Us", href: "/about" },
    { name: "Blog", href: "/blog" },
    { name: "Careers", href: "/careers" },
    { name: "Privacy Policy", href: "/privacy" },
  ]

  return (
    <footer className="bg-black border-t border-purple-900/30 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <SigmaLogo size={30} />
              <span className="ml-2 text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">
                Sigma Marketing
              </span>
            </div>
            <p className="text-gray-400 mb-6">
              Elevating brands through data-driven marketing strategies and innovative digital solutions.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  aria-label={link.label}
                  className="bg-white/5 hover:bg-white/10 p-2 rounded-full transition-colors"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <div className="grid grid-cols-2 gap-2">
              {quickLinks.map((link, index) => (
                <Link key={index} href={link.href} className="text-gray-400 hover:text-white transition-colors">
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3 text-gray-400">
              <p>123 Marketing St, Digital City, CA 94103</p>
              <p>
                <a href="mailto:info@sigmamarketing.com" className="hover:text-white transition-colors">
                  info@sigmamarketing.com
                </a>
              </p>
              <p>
                <a href="tel:+15551234567" className="hover:text-white transition-colors">
                  +1 (555) 123-4567
                </a>
              </p>
              <p>Monday - Friday: 9AM - 5PM</p>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Subscribe to Our Newsletter</h3>
            <p className="text-gray-400 mb-4">Stay updated with the latest marketing trends and insights.</p>
            <div className="flex">
              <Input
                type="email"
                placeholder="Your email address"
                className="bg-white/5 border-purple-900/30 focus:border-purple-500 text-white"
              />
              <Button size="icon" className="ml-2 bg-gradient-to-r from-purple-600 to-blue-600">
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-purple-900/30 mt-12 pt-8 text-center text-gray-500">
          <p>© {currentYear} Sigma Marketing Expert. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
