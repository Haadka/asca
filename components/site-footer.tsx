import Link from "next/link"
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react"
import { ASCALogo } from "./asca-logo"

export function SiteFooter() {
  return (
    <footer className="bg-primary text-white">
      <div className="container py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <div className="mb-4">
              <ASCALogo className="text-white" />
            </div>
            <p className="text-primary-foreground/80 mb-4">
              The Association of Somaliland Community in Australia - Bridging Cultures, Building Community.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-serif text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/events" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Events
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/resources" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Resources
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-lg font-bold mb-4">Community</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/membership" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Membership
                </Link>
              </li>
              <li>
                <Link href="/volunteer" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Volunteer
                </Link>
              </li>
              <li>
                <Link href="/donate" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Donate
                </Link>
              </li>
              <li>
                <Link href="/culture" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Somaliland Culture
                </Link>
              </li>
              <li>
                <Link href="/news" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  News & Updates
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 text-accent shrink-0 mt-0.5" />
                <span className="text-primary-foreground/80">123 Community Street, Melbourne, VIC 3000, Australia</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-accent shrink-0" />
                <span className="text-primary-foreground/80">+61 3 1234 5678</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-accent shrink-0" />
                <span className="text-primary-foreground/80">info@ascaustralia.org</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-primary-foreground/10 text-center text-primary-foreground/60 text-sm">
          <p>© {new Date().getFullYear()} Association of Somaliland Community in Australia. All rights reserved.</p>
          <div className="mt-2 flex justify-center space-x-4">
            <Link href="/privacy" className="hover:text-accent transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-accent transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

