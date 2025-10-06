import { Play, CheckCircle, TrendingUp, Zap, Target } from 'lucide-react';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { EffectivenessCharts } from '../effectiveness-charts';
import { motion } from 'motion/react';

interface HomeProps {
  setCurrentPage: (page: string) => void;
}

export function HomePage({ setCurrentPage }: HomeProps) {
  const values = [
    {
      icon: <Zap className="h-8 w-8" />,
      title: 'Simplicity',
      description: 'We believe in clean, straightforward solutions that deliver maximum impact with minimal complexity.',
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: 'Efficiency',
      description: 'Our streamlined processes and cutting-edge tools ensure rapid delivery without compromising quality.',
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: 'Growth',
      description: 'We partner with you for long-term success, focusing on scalable solutions that grow with your business.',
    },
  ];

  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '98%', label: 'Client Satisfaction' },
    { number: '24/7', label: 'Support Available' },
    { number: '5+', label: 'Years Experience' },
  ];

  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="relative py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto space-y-8"
        >
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-[#1a3254] to-[#d3d4d8] bg-clip-text text-transparent">
            Innovative IT Solutions for Modern Businesses
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Transform your digital presence with our comprehensive suite of web development, hosting, marketing, and AI solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={() => setCurrentPage('contact')} className="bg-[#1a3254] hover:bg-[#1a3254]/90">
              Get Started Today
            </Button>
            <Button size="lg" variant="outline" onClick={() => setCurrentPage('services')}>
              Explore Services
            </Button>
          </div>
        </motion.div>
      </section>

      {/* Video Section */}
      <section className="py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Why Choose TechSolutions?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover how our innovative approach and dedicated team can transform your business.
          </p>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative max-w-4xl mx-auto"
        >
          <div className="relative bg-gradient-to-r from-[#1a3254] to-[#d3d4d8] rounded-2xl p-1">
            <div className="bg-background rounded-xl p-8 text-center">
              <div className="w-24 h-24 bg-gradient-to-r from-[#1a3254] to-[#d3d4d8] rounded-full flex items-center justify-center mx-auto mb-6">
                <Play className="h-12 w-12 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Experience the Difference</h3>
              <p className="text-muted-foreground mb-6">
                Watch how we've helped businesses like yours achieve remarkable growth through our tailored IT solutions.
              </p>
              <Button className="bg-[#1a3254] hover:bg-[#1a3254]/90">
                <Play className="h-4 w-4 mr-2" />
                Watch Our Story
              </Button>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Values Section */}
      <section className="py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            The principles that drive everything we do and every solution we create.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-[#1a3254] to-[#d3d4d8] rounded-full flex items-center justify-center mx-auto mb-6 text-white">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-[#1a3254]/10 to-[#d3d4d8]/10 rounded-2xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="text-3xl md:text-4xl font-bold text-[#1a3254] dark:text-[#d3d4d8] mb-2">
                {stat.number}
              </div>
              <div className="text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Effectiveness Charts */}
      <section className="py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Track Record</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Data-driven results that speak for themselves. See how we've consistently delivered value to our clients.
          </p>
        </div>
        <EffectivenessCharts />
      </section>

      {/* CTA Section */}
      <section className="py-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto space-y-6"
        >
          <h2 className="text-3xl font-bold">Ready to Transform Your Business?</h2>
          <p className="text-xl text-muted-foreground">
            Join hundreds of satisfied clients who have accelerated their growth with our innovative solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={() => setCurrentPage('contact')} className="bg-[#1a3254] hover:bg-[#1a3254]/90">
              Start Your Project
            </Button>
            <Button size="lg" variant="outline" onClick={() => setCurrentPage('why-us')}>
              Learn More
            </Button>
          </div>
        </motion.div>
      </section>
    </div>
  );
}