import Link from "next/link"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8"></div>
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

        

          
          

        {/* Bottom Section */}
        <div className="border-t border-primary-foreground/20 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-primary-foreground/80">© 2025 St John Baptist Church. All Rights Reserved.</p>
            <div className="flex gap-6 text-sm">
              
              <Link href="/sitemap" className="hover:text-primary-foreground/80 transition-colors">
                Developed By Robin shiji
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
