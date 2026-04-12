import { motion } from 'motion/react';
import { Calendar, User, ArrowRight, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';

const blogPosts = [
  {
    title: 'Best IT Support Services in Saskatoon',
    excerpt: 'Discover why local businesses are choosing Punjab Tech for their managed IT needs in Saskatoon and across Saskatchewan.',
    date: 'April 10, 2024',
    author: 'Punjab Tech Team',
    category: 'Local IT',
    image: 'https://picsum.photos/seed/saskatoon-it/800/500'
  },
  {
    title: 'How to Secure Your Business Network',
    excerpt: 'Cybersecurity is more important than ever. Learn the essential steps to protect your business data from modern threats.',
    date: 'April 5, 2024',
    author: 'Security Expert',
    category: 'Cybersecurity',
    image: 'https://picsum.photos/seed/network-security/800/500'
  },
  {
    title: 'Common IT Problems for Small Businesses',
    excerpt: 'From slow Wi-Fi to software glitches, we identify the most frequent IT challenges and how to solve them effectively.',
    date: 'March 28, 2024',
    author: 'Support Lead',
    category: 'Troubleshooting',
    image: 'https://picsum.photos/seed/it-problems/800/500'
  },
  {
    title: 'Why Businesses Need Managed IT Services',
    excerpt: 'Explore the benefits of proactive IT management and how it can save your business time and money in the long run.',
    date: 'March 20, 2024',
    author: 'Punjab Tech Team',
    category: 'Managed Services',
    image: 'https://picsum.photos/seed/managed-it/800/500'
  }
];

export function Blog() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-secondary/20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">
              IT <span className="text-primary">Insights</span> & News
            </h1>
            <p className="text-lg text-muted-foreground">
              Stay informed with the latest trends in business technology, 
              cybersecurity, and IT support in Saskatchewan.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Feed */}
            <div className="lg:col-span-2 space-y-12">
              <div className="grid grid-cols-1 gap-12">
                {blogPosts.map((post, i) => (
                  <motion.article 
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="group"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                      <div className="aspect-video rounded-2xl overflow-hidden border border-white/10">
                        <img 
                          src={post.image} 
                          alt={post.title} 
                          className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <div className="space-y-4">
                        <div className="flex items-center gap-3">
                          <Badge variant="secondary" className="bg-primary/10 text-primary border-none">
                            {post.category}
                          </Badge>
                          <span className="text-xs text-muted-foreground flex items-center gap-1">
                            <Calendar className="w-3 h-3" /> {post.date}
                          </span>
                        </div>
                        <h2 className="text-2xl font-bold tracking-tight group-hover:text-primary transition-colors">
                          {post.title}
                        </h2>
                        <p className="text-muted-foreground line-clamp-2">
                          {post.excerpt}
                        </p>
                        <Button variant="link" className="p-0 h-auto text-primary group-hover:translate-x-1 transition-transform" asChild>
                          <Link to="#" className="flex items-center gap-2">
                            Read More <ArrowRight className="w-4 h-4" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
              
              <div className="flex justify-center pt-12">
                <Button variant="outline" size="lg">Load More Articles</Button>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="space-y-12">
              {/* Search */}
              <div className="space-y-4">
                <h4 className="font-bold text-lg">Search Blog</h4>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input placeholder="Search articles..." className="pl-10 bg-secondary/20 border-white/10" />
                </div>
              </div>

              {/* Categories */}
              <div className="space-y-4">
                <h4 className="font-bold text-lg">Categories</h4>
                <div className="flex flex-wrap gap-2">
                  {['Cybersecurity', 'Local IT', 'Managed Services', 'Troubleshooting', 'Cloud Solutions', 'Hardware'].map((cat) => (
                    <Badge key={cat} variant="outline" className="cursor-pointer hover:bg-primary hover:text-white transition-colors">
                      {cat}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Newsletter */}
              <Card className="bg-primary/5 border-primary/20 p-8 space-y-4">
                <h4 className="font-bold text-xl">Stay Updated</h4>
                <p className="text-sm text-muted-foreground">
                  Get the latest IT tips and news delivered straight to your inbox.
                </p>
                <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
                  <Input placeholder="Email Address" className="bg-background border-white/10" />
                  <Button className="w-full">Subscribe</Button>
                </form>
              </Card>

              {/* Featured Services */}
              <div className="space-y-4">
                <h4 className="font-bold text-lg">Our Services</h4>
                <div className="grid gap-3">
                  {[
                    'Network Setup Saskatoon',
                    'IT Support Saskatchewan',
                    'Managed IT Services Saskatoon',
                    'Cybersecurity Services Saskatoon'
                  ].map((service) => (
                    <Link 
                      key={service} 
                      to="/services" 
                      className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
                    >
                      <ArrowRight className="w-3 h-3" /> {service}
                    </Link>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* SEO Footer Content */}
      <section className="py-24 bg-secondary/10 border-t border-white/5">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto space-y-8 text-center">
            <h2 className="text-2xl font-bold tracking-tight">Best IT Company in Saskatoon Saskatchewan</h2>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Punjab Tech is committed to being the best IT company in Saskatoon Saskatchewan by providing 
              unparalleled service and expertise. Our blog is part of our mission to educate and empower 
              local business owners with the knowledge they need to succeed in a digital world. 
              Whether you need network setup and configuration services near me or comprehensive 
              managed IT services Saskatoon, we are here to help.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
