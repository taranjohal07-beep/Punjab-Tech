import { motion } from 'motion/react';
import { 
  Network, 
  Monitor, 
  ShieldCheck, 
  Server, 
  Wrench, 
  CheckCircle2, 
  ArrowRight, 
  Shield, 
  Zap, 
  MapPin, 
  Users,
  Star
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';

const services = [
  {
    title: 'Network Setup & Configuration',
    description: 'Expert LAN/WAN solutions tailored for your business connectivity needs.',
    icon: Network,
    href: '/services#network'
  },
  {
    title: 'Hardware & Software Installation',
    description: 'Seamless integration of the latest tech into your existing workflow.',
    icon: Monitor,
    href: '/services#hardware'
  },
  {
    title: 'IT Troubleshooting',
    description: 'Fast, reliable support to resolve your technical issues and minimize downtime.',
    icon: Wrench,
    href: '/services#troubleshooting'
  },
  {
    title: 'Security & Monitoring',
    description: 'Proactive cybersecurity and 24/7 monitoring to keep your data safe.',
    icon: ShieldCheck,
    href: '/services#security'
  },
  {
    title: 'Server Management',
    description: 'Robust server solutions for scalability, security, and peak performance.',
    icon: Server,
    href: '/services#server'
  }
];

const testimonials = [
  {
    name: 'Robert Miller',
    role: 'Owner, Saskatoon Logistics',
    content: 'Punjab Tech transformed our office network. Their proactive approach saved us from several potential outages. Highly recommended!',
    rating: 5
  },
  {
    name: 'Sarah Jenkins',
    role: 'Manager, Prairie Retail',
    content: 'Fast response times and transparent pricing. They really understand the needs of small businesses in Saskatchewan.',
    rating: 5
  },
  {
    name: 'David Thompson',
    role: 'Director, Bridge City Tech',
    content: 'The most reliable IT partners we’ve worked with. Their server management is top-notch and always secure.',
    rating: 5
  }
];

export function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden min-h-[80vh] flex items-center">
        <div className="absolute inset-0 z-0">
          {/* Background Image with Overlay */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40 grayscale hover:grayscale-0 transition-all duration-1000"
            style={{ 
              backgroundImage: 'url("https://picsum.photos/seed/tech-network/1920/1080")',
              // Note: Replace the URL above with your uploaded image path if available
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/60 to-background" />
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-900/20 rounded-full blur-[120px]" />
        </div>
        
        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center space-y-8 glass p-8 md:p-12 rounded-3xl border-white/5 shadow-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Badge variant="outline" className="px-4 py-1 border-primary/50 text-primary mb-4 bg-primary/5">
                Saskatchewan’s Trusted Technicians
              </Badge>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tighter">
                Reliable IT Support in Saskatchewan — <span className="text-primary">Secure, Scalable, and Always On</span>
              </h1>
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
            >
              Helping Saskatchewan businesses stay connected with expert IT services, network solutions, and proactive support.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Button size="lg" className="w-full sm:w-auto text-lg px-8 shadow-lg shadow-primary/20" asChild>
                <Link to="/contact">Get a Free Consultation</Link>
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto text-lg px-8 glass hover:bg-primary/10" asChild>
                <a href="tel:+16395258844">Call Now</a>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Indicators Bar */}
      <section className="bg-secondary/30 border-y border-white/5 py-10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Shield, text: 'Certified Technicians' },
              { icon: Zap, text: 'Fast Response Times' },
              { icon: MapPin, text: 'Local Saskatchewan Service' },
              { icon: Users, text: 'Business-Focused Solutions' }
            ].map((item, i) => (
              <div key={i} className="flex flex-col md:flex-row items-center justify-center gap-3 text-center md:text-left">
                <item.icon className="w-6 h-6 text-primary" />
                <span className="text-sm font-semibold tracking-wide uppercase">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tighter">Our Core Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We provide comprehensive IT solutions designed to keep your business running smoothly and securely.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <Card className="h-full bg-secondary/20 border-white/5 hover:border-primary/50 transition-all group">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <service.icon className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <CardDescription className="text-base text-muted-foreground">
                      {service.description}
                    </CardDescription>
                    <Button variant="link" className="p-0 h-auto text-primary group-hover:translate-x-1 transition-transform" asChild>
                      <Link to={service.href} className="flex items-center gap-2">
                        Learn More <ArrowRight className="w-4 h-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-secondary/10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-5xl font-bold tracking-tighter">Why Choose Punjab Tech?</h2>
                <p className="text-muted-foreground text-lg">
                  We don’t just fix problems; we prevent them. Our focus is on building reliable, scalable, and secure systems that grow with your business.
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { title: 'Proactive Support', desc: 'We identify and resolve issues before they impact your operations.' },
                  { title: 'Scalable Solutions', desc: 'IT infrastructure that evolves alongside your business growth.' },
                  { title: 'Local Expertise', desc: 'Fast, on-site support from technicians who know Saskatchewan.' },
                  { title: 'Transparent Pricing', desc: 'No hidden fees. Affordable IT services tailored to your budget.' }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="mt-1">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <Button size="lg" asChild>
                <Link to="/about">Learn More About Us</Link>
              </Button>
            </div>
            
            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                <img 
                  src="https://picsum.photos/seed/it-support/800/800" 
                  alt="IT Support Team" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-primary p-8 rounded-2xl shadow-xl hidden md:block">
                <p className="text-3xl font-bold text-white">100%</p>
                <p className="text-white/80 text-sm font-medium">Customer Satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tighter">How It Works</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Getting professional IT support has never been easier. Follow our simple 4-step process.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Contact Us', desc: 'Reach out via phone or our online form to discuss your needs.' },
              { step: '02', title: 'Free Consultation', desc: 'We assess your current systems and identify areas for improvement.' },
              { step: '03', title: 'Setup & Optimization', desc: 'Our team implements tailored solutions to boost your efficiency.' },
              { step: '04', title: 'Ongoing Support', desc: 'We provide 24/7 monitoring and support to ensure reliability.' }
            ].map((item, i) => (
              <div key={i} className="relative p-8 rounded-2xl bg-secondary/20 border border-white/5 space-y-4">
                <span className="text-4xl font-bold text-primary/20">{item.step}</span>
                <h4 className="text-xl font-bold">{item.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-secondary/10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tighter">What Our Clients Say</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Don’t just take our word for it. Here’s what local Saskatchewan businesses have to say about Punjab Tech.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <Card key={i} className="bg-background border-white/5 p-8 space-y-6">
                <div className="flex gap-1">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground italic leading-relaxed">"{t.content}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center font-bold text-primary">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <h5 className="font-bold text-sm">{t.name}</h5>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary">
        <div className="container mx-auto px-4 md:px-6 text-center space-y-8">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-white">
            Ready to Secure Your Business IT?
          </h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Join dozens of Saskatchewan businesses that trust Punjab Tech for their IT needs. 
            Get your free consultation today and experience the difference of proactive support.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" variant="secondary" className="w-full sm:w-auto text-lg px-8" asChild>
              <Link to="/contact">Get Started Today</Link>
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto text-lg px-8 border-white text-white hover:bg-white hover:text-primary" asChild>
              <a href="tel:+16395258844">Call Now</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
