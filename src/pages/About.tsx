import { motion } from 'motion/react';
import { Shield, Users, Target, Heart, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export function About() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-secondary/20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">
              About <span className="text-primary">Punjab Tech</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Saskatchewan’s Trusted Technicians — dedicated to providing reliable, 
              scalable, and secure IT systems for local businesses.
            </p>
          </div>
        </div>
      </section>

      {/* Company Introduction */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-5xl font-bold tracking-tighter">Helping Local Saskatchewan Businesses Thrive</h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Based in Saskatoon, Punjab Tech was founded on the principle that small and medium-sized businesses deserve the same level of IT reliability and security as large corporations. 
                  We understand the unique challenges faced by local businesses in Saskatchewan and are committed to being your long-term technology partner.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Our team of certified technicians focuses on proactive support—identifying and resolving potential issues before they can impact your operations. 
                  We believe in building trust through transparency, reliability, and exceptional service.
                </p>
              </div>
              
              <div className="space-y-4">
                <h4 className="font-bold text-xl">Our Core Values:</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {[
                    { icon: Shield, title: 'Reliability', desc: 'Systems you can count on, 24/7.' },
                    { icon: Users, title: 'Trust', desc: 'Transparent partnerships built on honesty.' },
                    { icon: Target, title: 'Precision', desc: 'Expert solutions tailored to your needs.' },
                    { icon: Heart, title: 'Community', desc: 'Dedicated to Saskatchewan’s growth.' }
                  ].map((value, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                        <value.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h5 className="font-bold">{value.title}</h5>
                        <p className="text-sm text-muted-foreground">{value.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                <img 
                  src="https://picsum.photos/seed/it-team/800/1000" 
                  alt="Our Team" 
                  className="w-full h-full object-cover grayscale"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-secondary p-8 rounded-2xl border border-white/10 shadow-xl hidden md:block">
                <p className="text-primary font-bold text-sm uppercase tracking-widest mb-2">Our Mission</p>
                <p className="text-foreground font-medium max-w-[200px]">
                  To empower Saskatchewan businesses with world-class IT infrastructure.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values Focus */}
      <section className="py-24 bg-secondary/10 border-y border-white/5">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center space-y-12">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tighter">Our Commitment to Excellence</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: 'Proactive Approach', desc: 'We monitor your systems 24/7 to catch problems before they happen.' },
                { title: 'Local Support', desc: 'We are part of the Saskatoon community and provide fast, on-site assistance.' },
                { title: 'Scalable Tech', desc: 'We build systems that grow with you, ensuring long-term value.' }
              ].map((item, i) => (
                <div key={i} className="space-y-4 p-6 rounded-2xl bg-background border border-white/5">
                  <h4 className="text-xl font-bold text-primary">{item.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why We Are Different */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="aspect-video rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                <img 
                  src="https://picsum.photos/seed/saskatoon-it/800/450" 
                  alt="Saskatoon Business Environment" 
                  className="w-full h-full object-cover grayscale"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
            
            <div className="space-y-8 order-1 lg:order-2">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tighter">The Punjab Tech Difference</h2>
              <p className="text-muted-foreground text-lg">
                What sets us apart is our deep understanding of the local market and our unwavering commitment to quality. 
                We don't just provide services; we provide peace of mind.
              </p>
              <ul className="space-y-4">
                {[
                  'Certified and experienced technicians',
                  'Fast response times for all support requests',
                  'Affordable and transparent pricing models',
                  'Focus on long-term business partnerships',
                  'Expertise in the latest IT security standards'
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 items-center">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-foreground font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              <Button size="lg" asChild>
                <Link to="/contact">Work With Us Today</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
