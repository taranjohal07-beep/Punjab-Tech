import { Link } from 'react-router-dom';
import { Cpu, Mail, Phone, MapPin, Clock, Facebook, Linkedin, Twitter } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

export function Footer() {
  return (
    <footer className="bg-secondary/50 border-t border-white/10 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand & Mission */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2">
              <div className="bg-primary p-1.5 rounded-lg">
                <Cpu className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold tracking-tighter">
                PUNJAB <span className="text-primary">TECH</span>
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Saskatchewan’s Trusted Technicians — Reliable Systems, Built to Last. 
              Providing expert IT support and managed services for small and medium-sized businesses in Saskatoon.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-6 text-foreground">Quick Links</h4>
            <ul className="space-y-4">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors text-sm">Home</Link>
              </li>
              <li>
                <Link to="/services" className="text-muted-foreground hover:text-primary transition-colors text-sm">Our Services</Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors text-sm">About Us</Link>
              </li>
              <li>
                <Link to="/blog" className="text-muted-foreground hover:text-primary transition-colors text-sm">IT Blog</Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors text-sm">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold mb-6 text-foreground">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <a href="mailto:Punjabtechh@gmail.com" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Punjabtechh@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <div className="flex flex-col gap-1">
                  <a href="tel:+16395258844" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    +1 (639) 525-8844
                  </a>
                  <a href="tel:+19057816859" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    +1 (905) 781-6859
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0" />
                <span className="text-muted-foreground text-sm">
                  Saskatoon, Saskatchewan
                </span>
              </li>
            </ul>
          </div>

          {/* Business Hours */}
          <div>
            <h4 className="font-bold mb-6 text-foreground">Office Hours</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-primary shrink-0" />
                <div className="flex flex-col gap-1">
                  <span className="text-foreground text-sm font-medium">Monday – Friday</span>
                  <span className="text-muted-foreground text-sm">8:00 AM – 5:30 PM</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-primary shrink-0" />
                <div className="flex flex-col gap-1">
                  <span className="text-foreground text-sm font-medium">Weekends</span>
                  <span className="text-muted-foreground text-sm">By prior arrangement</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="bg-white/10 mb-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-xs">
            © {new Date().getFullYear()} Punjab Tech. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="#" className="text-muted-foreground hover:text-primary text-xs transition-colors">Privacy Policy</Link>
            <Link to="#" className="text-muted-foreground hover:text-primary text-xs transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
