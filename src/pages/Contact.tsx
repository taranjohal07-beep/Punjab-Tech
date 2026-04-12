import * as React from 'react';
import { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';

export function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-secondary/20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">
              Contact <span className="text-primary">Punjab Tech</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Have a question or need immediate IT support? Reach out to Saskatchewan’s 
              trusted technicians today. We're here to help your business stay connected.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div className="space-y-12">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">Get In Touch</h2>
                <p className="text-muted-foreground text-lg">
                  Whether you're looking for a free consultation or need urgent troubleshooting, 
                  our team is ready to assist you.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold">Email Us</h4>
                    <a href="mailto:Punjabtechh@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                      Punjabtechh@gmail.com
                    </a>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold">Call Us</h4>
                    <div className="flex flex-col">
                      <a href="tel:+16395258844" className="text-muted-foreground hover:text-primary transition-colors">
                        +1 (639) 525-8844
                      </a>
                      <a href="tel:+19057816859" className="text-muted-foreground hover:text-primary transition-colors">
                        +1 (905) 781-6859
                      </a>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold">Our Location</h4>
                    <p className="text-muted-foreground">
                      Saskatoon, Saskatchewan
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold">Business Hours</h4>
                    <p className="text-muted-foreground text-sm">
                      Mon-Fri: 8:00 AM – 5:30 PM<br />
                      Weekends: By arrangement
                    </p>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="aspect-video rounded-3xl overflow-hidden border border-white/10 grayscale">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d160492.2965369766!2d-106.78241513904624!3d52.13961131976001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5304f6bf47ed992b%3A0x5049e3295772690!2sSaskatoon%2C%20SK!5e0!3m2!1sen!2sca!4v1712954250000!5m2!1sen!2sca" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>

            {/* Contact Form */}
            <div className="relative">
              <div className="absolute inset-0 bg-primary/5 blur-[100px] rounded-full" />
              <Card className="relative glass border-white/10 p-8 md:p-12">
                <div className="space-y-6">
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold">Send a Message</h3>
                    <p className="text-muted-foreground">Fill out the form below and we'll get back to you shortly.</p>
                  </div>

                  {isSubmitted ? (
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="bg-primary/10 border border-primary/20 rounded-2xl p-8 text-center space-y-4"
                    >
                      <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
                        <CheckCircle2 className="w-8 h-8 text-primary" />
                      </div>
                      <h4 className="text-xl font-bold">Message Sent!</h4>
                      <p className="text-muted-foreground">
                        Thank you for reaching out. One of our technicians will contact you shortly.
                      </p>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label className="text-sm font-medium">Full Name</label>
                          <Input placeholder="John Doe" required className="bg-background/50 border-white/10" />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium">Email Address</label>
                          <Input type="email" placeholder="john@example.com" required className="bg-background/50 border-white/10" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Phone Number</label>
                        <Input type="tel" placeholder="+1 (306) 000-0000" required className="bg-background/50 border-white/10" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Message</label>
                        <Textarea 
                          placeholder="How can we help you today?" 
                          className="min-h-[150px] bg-background/50 border-white/10"
                          required 
                        />
                      </div>
                      <Button type="submit" size="lg" className="w-full group">
                        Send Message <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </Button>
                    </form>
                  )}
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-secondary/10 border-t border-white/5">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tighter">Frequently Asked Questions</h2>
            <p className="text-muted-foreground">Quick answers to common questions about our IT services.</p>
          </div>
          
          <div className="max-w-3xl mx-auto grid gap-4">
            {[
              { q: 'Do you provide on-site support in Saskatoon?', a: 'Yes, we provide both on-site and remote support for businesses throughout Saskatoon and the surrounding Saskatchewan area.' },
              { q: 'What are your response times for emergency IT issues?', a: 'We prioritize emergency requests and typically respond within 1-2 hours for critical system failures.' },
              { q: 'Can you help with setting up a new office network?', a: 'Absolutely. We specialize in full network design, hardware procurement, and installation for new office setups.' },
              { q: 'Do you offer managed IT services for a monthly fee?', a: 'Yes, we offer various managed service plans that provide proactive monitoring and unlimited support for a predictable monthly cost.' }
            ].map((faq, i) => (
              <Card key={i} className="bg-background border-white/5">
                <CardContent className="p-6 space-y-2">
                  <h4 className="font-bold text-foreground">{faq.q}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
