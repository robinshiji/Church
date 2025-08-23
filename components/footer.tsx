import Link from "next/link"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Church Info */}
          <div>
            <h3 className="font-serif text-xl font-semibold mb-4">St John Baptist Church</h3>
            <p className="text-sm text-primary-foreground/80 mb-4">
              A place of faith, fellowship, and community service. Join us in worship and grow in your spiritual
              journey.
            </p>
            <div className="flex items-center gap-2 text-sm mb-2">
              <MapPin className="h-4 w-4" />
              <span> Kaloor-paingottor Road, Thodupuzha-perumakandam- Kaloor rd,kerala 686668</span>
            </div>
            <div className="flex items-center gap-2 text-sm mb-2">
              <Phone className="h-4 w-4" />
              <span>(555) 123-4567</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Mail className="h-4 w-4" />
              <span>info@stjohnbaptist.org</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-primary-foreground/80 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-primary-foreground/80 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary-foreground/80 transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/#mass-timings" className="hover:text-primary-foreground/80 transition-colors">
                  Mass Timings
                </Link>
              </li>
            </ul>
          </div>

          {/* Ministries */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4">Ministries</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/youth-ministry" className="hover:text-primary-foreground/80 transition-colors">
                  Youth Ministry
                </Link>
              </li>
              <li>
                <Link href="/choir" className="hover:text-primary-foreground/80 transition-colors">
                  Choir
                </Link>
              </li>
              <li>
                <Link href="/sunday-school" className="hover:text-primary-foreground/80 transition-colors">
                  Sunday School
                </Link>
              </li>
              <li>
                <Link href="/charity-works" className="hover:text-primary-foreground/80 transition-colors">
                  Charity Works
                </Link>
              </li>
            </ul>
          </div>

          {/* Service Times */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4">Service Times</h4>
            <div className="space-y-3 text-sm">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <Clock className="h-4 w-4" />
                  <span className="font-medium">Sunday Services</span>
                </div>
                <p className="text-primary-foreground/80 ml-6">8:00 AM & 10:30 AM</p>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <Clock className="h-4 w-4" />
                  <span className="font-medium">Wednesday Prayer</span>
                </div>
                <p className="text-primary-foreground/80 ml-6">7:00 PM</p>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <Clock className="h-4 w-4" />
                  <span className="font-medium">Saturday Youth</span>
                </div>
                <p className="text-primary-foreground/80 ml-6">6:00 PM</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-primary-foreground/20 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-primary-foreground/80">© 2025 St John Baptist Church. All Rights Reserved.</p>
            <div className="flex gap-6 text-sm">
              <Link href="/privacy" className="hover:text-primary-foreground/80 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-primary-foreground/80 transition-colors">
                Terms of Service
              </Link>
              <Link href="/sitemap" className="hover:text-primary-foreground/80 transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
