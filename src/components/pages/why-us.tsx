import { Shield, Clock, Users, Trophy, CheckCircle, Star, TrendingUp, Zap } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { motion } from 'motion/react';

interface WhyUsProps {
  setCurrentPage: (page: string) => void;
}

export function WhyUsPage({ setCurrentPage }: WhyUsProps) {
  const advantages = [
    {
      icon: <Shield className="h-8 w-8" />,
      title: 'Security First',
      description: 'Enterprise-grade security measures protect your data and ensure compliance with industry standards.',
      stats: '99.9% uptime guaranteed',
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: 'Fast Delivery',
      description: 'Our agile methodology ensures rapid project delivery without compromising on quality.',
      stats: 'Average 30% faster than industry',
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Expert Team',
      description: 'Our certified professionals bring years of experience and cutting-edge expertise to your project.',
      stats: '5+ certifications across the team',
    },
    {
      icon: <Trophy className="h-8 w-8" />,
      title: 'Award-Winning',
      description: 'Recognized by industry leaders for innovation, quality, and customer satisfaction.',
      stats: 'Industry awards',
    },
  ];

  const testimonials = [
    {
      name: 'Sarah Mitchell',
      company: 'StartupCorp',
      role: 'CEO',
      content: 'WhiskerWorks transformed our digital presence completely. The team\'s expertise and dedication exceeded all our expectations.',
      rating: 5,
    },
    {
      name: 'Michael Rodriguez',
      company: 'RetailPlus',
      role: 'CTO',
      content: 'Working with WhiskerWorks was a game-changer. They delivered a robust e-commerce platform that increased our sales by 200%.',
      rating: 5,
    },
    {
      name: 'Emily Chen',
      company: 'HealthTech Solutions',
      role: 'Founder',
      content: 'The AI solutions they implemented streamlined our operations and saved us countless hours. Truly innovative work.',
      rating: 5,
    },
  ];

  const comparisons = [
    { feature: 'Project Delivery Time', us: '30% Faster', others: 'Industry Standard' },
    { feature: 'Client Satisfaction', us: '98% Rating', others: '85% Average' },
    { feature: 'Post-Launch Support', us: '24/7 Available', others: 'Business Hours Only' },
    { feature: 'Technology Stack', us: 'Latest & Modern', others: 'Legacy Systems' },
    { feature: 'Scalability', us: 'Built for Growth', others: 'Limited Scaling' },
    { feature: 'Security Standards', us: 'Enterprise Grade', others: 'Basic Protection' },
  ];

  const achievements = [
    { number: '500+', label: 'Projects Completed', icon: <CheckCircle className="h-6 w-6" /> },
    { number: '98%', label: 'Client Satisfaction', icon: <Star className="h-6 w-6" /> },
    { number: '5+', label: 'Years Experience', icon: <Trophy className="h-6 w-6" /> },
    { number: '24/7', label: 'Support Available', icon: <Clock className="h-6 w-6" /> },
    { number: '15+', label: 'Countries Served', icon: <TrendingUp className="h-6 w-6" /> },
    { number: '99.9%', label: 'Uptime Guarantee', icon: <Zap className="h-6 w-6" /> },
  ];

  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="py-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto space-y-6"
        >
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#1a3254] to-[#d3d4d8] bg-clip-text text-transparent">
            Why Choose WhiskerWorks?
          </h1>
          <p className="text-xl text-muted-foreground">
            Discover what sets us apart from the competition and why hundreds of businesses trust us with their digital transformation.
          </p>
        </motion.div>
      </section>

      {/* Key Advantages */}
      <section className="py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Competitive Advantages</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We don't just deliver solutions – we deliver results that drive your business forward.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {advantages.map((advantage, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-[#1a3254] to-[#d3d4d8] rounded-lg flex items-center justify-center text-white">
                      {advantage.icon}
                    </div>
                    <div>
                      <CardTitle className="text-xl">{advantage.title}</CardTitle>
                      <div className="text-sm text-[#1a3254] dark:text-[#d3d4d8] font-semibold">
                        {advantage.stats}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{advantage.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Achievements Grid */}
      <section className="py-16 bg-gradient-to-r from-[#1a3254]/10 to-[#d3d4d8]/10 rounded-2xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Track Record</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Numbers that speak for themselves – a testament to our commitment to excellence.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-[#1a3254] to-[#d3d4d8] rounded-full flex items-center justify-center text-white mx-auto mb-3">
                {achievement.icon}
              </div>
              <div className="text-2xl font-bold text-[#1a3254] dark:text-[#d3d4d8] mb-1">
                {achievement.number}
              </div>
              <div className="text-sm text-muted-foreground">{achievement.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">WhiskerWorks vs Others</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            See how we stack up against the competition across key performance indicators.
          </p>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Card>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left p-4 font-semibold">Feature</th>
                      <th className="text-center p-4 font-semibold text-[#1a3254] dark:text-[#d3d4d8]">WhiskerWorks</th>
                      <th className="text-center p-4 font-semibold text-muted-foreground">Others</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisons.map((comparison, index) => (
                      <tr key={index} className="border-b border-border last:border-b-0">
                        <td className="p-4 font-medium">{comparison.feature}</td>
                        <td className="p-4 text-center">
                          <div className="inline-flex items-center space-x-2 bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-400 px-3 py-1 rounded-full">
                            <CheckCircle className="h-4 w-4" />
                            <span>{comparison.us}</span>
                          </div>
                        </td>
                        <td className="p-4 text-center text-muted-foreground">{comparison.others}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it – hear from the businesses we've helped transform.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="h-full">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6 italic">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-[#1a3254] to-[#d3d4d8] rounded-full"></div>
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">
                        {testimonial.role}, {testimonial.company}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto space-y-6"
        >
          <h2 className="text-3xl font-bold">Ready to Experience the Difference?</h2>
          <p className="text-xl text-muted-foreground">
            Join hundreds of satisfied clients who have transformed their business with WhiskerWorks.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={() => setCurrentPage('contact')} className="bg-[#1a3254] hover:bg-[#1a3254]/90 text-#d3d4d8">
              Start Your Project
            </Button>
            <Button size="lg" variant="outline" onClick={() => setCurrentPage('services')}>
              View Our Services
            </Button>
          </div>
        </motion.div>
      </section>
    </div>
  );
}