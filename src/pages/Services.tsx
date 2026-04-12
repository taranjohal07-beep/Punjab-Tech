import { motion } from 'motion/react';
import { 
  Network, 
  Monitor, 
  ShieldCheck, 
  Server, 
  Wrench, 
  CheckCircle2,
  ArrowRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const servicesDetail = [
  {
    id: 'network',
    title: 'Network Setup & Configuration (LAN/WAN)',
    description: 'A robust network is the backbone of any modern business. We design and implement high-performance LAN and WAN solutions that ensure seamless connectivity across your entire organization.',
    benefits: [
      'High-speed data transfer and low latency',
      'Secure remote access for hybrid teams',
      'Scalable architecture for future growth',
      'Optimized Wi-Fi coverage for large spaces'
    ],
    whoItIsFor: 'Small to medium businesses in Saskatoon needing reliable, high-speed office connectivity.',
    icon: Network,
    image: 'https://picsum.photos/seed/network-setup/800/600'
  },
  {
    id: 'hardware',
    title: 'Hardware & Software Installation',
    description: 'From workstations and servers to specialized business software, we handle the entire deployment process. We ensure your new technology is configured correctly and integrated perfectly with your existing systems.',
    benefits: [
      'Expert hardware selection and procurement',
      'Automated software deployment and updates',
      'Minimized downtime during transitions',
      'Comprehensive user training and onboarding'
    ],
    whoItIsFor: 'Growing companies looking to upgrade their tech stack without the headache of manual setup.',
    icon: Monitor,
    image: 'https://picsum.photos/seed/hardware-install/800/600'
  },
  {
    id: 'troubleshooting',
    title: 'IT Troubleshooting',
    description: 'Technical issues can bring your business to a halt. Our rapid-response troubleshooting team is dedicated to identifying and resolving problems quickly, whether they are hardware, software, or network-related.',
    benefits: [
      'On-site and remote support options',
      'Root cause analysis to prevent recurrence',
      '24/7 emergency support available',
      'Clear communication and status updates'
    ],
    whoItIsFor: 'Businesses needing a dependable "IT department on call" for daily technical challenges.',
    icon: Wrench,
    image: 'https://picsum.photos/seed/it-troubleshooting/800/600'
  },
  {
    id: 'security',
    title: 'Security & Monitoring',
    description: 'In an era of increasing cyber threats, proactive security is non-negotiable. We provide multi-layered defense strategies and 24/7 monitoring to protect your sensitive business data from breaches and malware.',
    benefits: [
      'Advanced firewall and antivirus management',
      'Regular security audits and vulnerability scans',
      'Employee cybersecurity awareness training',
      'Real-time threat detection and response'
    ],
    whoItIsFor: 'Any Saskatchewan business handling sensitive client data or financial information.',
    icon: ShieldCheck,
    image: 'https://picsum.photos/seed/cybersecurity/800/600'
  },
  {
    id: 'server',
    title: 'Server Management',
    description: 'Your servers are the heart of your data operations. We provide comprehensive management services, including setup, maintenance, backups, and optimization to ensure your data is always accessible and secure.',
    benefits: [
      'Cloud, on-premise, and hybrid server solutions',
      'Automated daily backups and disaster recovery',
      'Performance tuning and resource optimization',
      'Regular security patching and OS updates'
    ],
    whoItIsFor: 'Businesses with centralized data storage needs requiring 99.9% uptime and security.',
    icon: Server,
    image: 'https://picsum.photos/seed/server-management/800/600'
  }
];

export function Services() {
  return (
    <div className="flex flex-col w-full">
      {/* Page Header */}
      <section className="pt-32 pb-16 bg-secondary/20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">
              Expert IT Services in <span className="text-primary">Saskatoon</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Comprehensive business IT services Saskatoon businesses trust. 
              From network setup to cybersecurity, we provide the technical foundation for your success.
            </p>
          </div>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="py-24 space-y-32">
        {servicesDetail.map((service, i) => (
          <div key={service.id} id={service.id} className="container mx-auto px-4 md:px-6">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              <motion.div 
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={`space-y-8 ${i % 2 === 1 ? 'lg:order-2' : ''}`}
              >
                <div className="space-y-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                    <service.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">{service.title}</h2>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="space-y-4">
                  <h4 className="font-bold text-lg">Key Benefits:</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {service.benefits.map((benefit, j) => (
                      <li key={j} className="flex gap-3 items-start">
                        <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Card className="bg-secondary/20 border-white/5">
                  <CardContent className="p-6 space-y-2">
                    <h4 className="font-bold text-sm uppercase tracking-wider text-primary">Who it's for:</h4>
                    <p className="text-muted-foreground text-sm">{service.whoItIsFor}</p>
                  </CardContent>
                </Card>

                <Button size="lg" asChild>
                  <Link to="/contact">Request IT Support <ArrowRight className="ml-2 w-5 h-5" /></Link>
                </Button>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className={`relative ${i % 2 === 1 ? 'lg:order-1' : ''}`}
              >
                <div className="aspect-[4/3] rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/20 blur-[100px] rounded-full" />
              </motion.div>
            </div>
          </div>
        ))}
      </section>

      {/* SEO Content Section */}
      <section className="py-24 bg-secondary/10 border-y border-white/5">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tighter">Small Business IT Support Saskatchewan</h2>
              <p className="text-muted-foreground">
                We specialize in providing high-quality, affordable IT support for small business Saskatoon owners. 
                Our mission is to level the playing field by giving local businesses access to enterprise-grade IT solutions.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-xl font-bold">Network Setup Saskatchewan</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Whether you're setting up a new office in Regina or upgrading your current network in Saskatoon, 
                  Punjab Tech provides the best network setup and configuration services near me. 
                  We ensure your business IT services Saskatoon are optimized for maximum performance.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-bold">Cybersecurity Services Saskatoon</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Protecting your business from digital threats is our top priority. 
                  Our managed IT services Saskatoon include comprehensive security audits and real-time monitoring 
                  to ensure your business stays safe in an increasingly complex digital landscape.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6 text-center space-y-8">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter">Ready to Optimize Your IT?</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Contact Saskatchewan’s trusted technicians today for a free consultation. 
            Let us build the reliable systems your business deserves.
          </p>
          <Button size="lg" className="px-12 py-6 text-lg" asChild>
            <Link to="/contact">Get Started Today</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
