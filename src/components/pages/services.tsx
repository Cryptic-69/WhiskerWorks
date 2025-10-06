import { Globe, Server, TrendingUp, Bot, Search, ShoppingCart, Code, Headphones } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { motion } from 'motion/react';

interface ServicesProps {
  setCurrentPage: (page: string) => void;
}

export function ServicesPage({ setCurrentPage }: ServicesProps) {
  const services = [
    {
      icon: <Globe className="h-8 w-8" />,
      title: 'Website Development',
      description: 'Custom websites built with modern technologies for optimal performance and user experience.',
      features: ['Responsive Design', 'SEO Optimized', 'Fast Loading', 'Mobile-First'],
      price: 'Starting from $2,999',
      popular: true,
    },
    {
      icon: <Server className="h-8 w-8" />,
      title: 'Web Hosting',
      description: 'Reliable, secure, and scalable hosting solutions with 99.9% uptime guarantee.',
      features: ['SSD Storage', 'SSL Certificates', 'Daily Backups', '24/7 Monitoring'],
      price: 'Starting from $19/month',
      popular: false,
    },
    {
      icon: <Code className="h-8 w-8" />,
      title: 'Website Maintenance',
      description: 'Keep your website running smoothly with our comprehensive maintenance packages.',
      features: ['Security Updates', 'Performance Optimization', 'Content Updates', 'Bug Fixes'],
      price: 'Starting from $99/month',
      popular: false,
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: 'Digital Marketing',
      description: 'Comprehensive digital marketing strategies to grow your online presence and reach.',
      features: ['Social Media Management', 'PPC Campaigns', 'Content Marketing', 'Analytics'],
      price: 'Starting from $799/month',
      popular: true,
    },
    {
      icon: <Bot className="h-8 w-8" />,
      title: 'AI Solutions',
      description: 'Cutting-edge artificial intelligence implementations to automate and optimize your business.',
      features: ['Chatbots', 'Process Automation', 'Data Analysis', 'Machine Learning'],
      price: 'Custom Pricing',
      popular: false,
    },
    {
      icon: <Search className="h-8 w-8" />,
      title: 'SEO Optimization',
      description: 'Improve your search engine rankings and drive organic traffic to your website.',
      features: ['Keyword Research', 'On-Page SEO', 'Link Building', 'Local SEO'],
      price: 'Starting from $499/month',
      popular: false,
    },
    {
      icon: <ShoppingCart className="h-8 w-8" />,
      title: 'E-commerce Solutions',
      description: 'Complete online store development with payment integration and inventory management.',
      features: ['Shopping Cart', 'Payment Gateway', 'Inventory System', 'Order Management'],
      price: 'Starting from $4,999',
      popular: false,
    },
    {
      icon: <Headphones className="h-8 w-8" />,
      title: 'Custom Software',
      description: 'Bespoke software solutions tailored to your specific business requirements.',
      features: ['Custom Development', 'API Integration', 'Database Design', 'Cloud Deployment'],
      price: 'Custom Pricing',
      popular: false,
    },
  ];

  const packages = [
    {
      name: 'Starter',
      price: '$2,999',
      description: 'Perfect for small businesses getting started online',
      features: [
        'Basic Website (5 pages)',
        'Responsive Design',
        'SEO Setup',
        '1 Year Hosting',
        'SSL Certificate',
        '3 Months Support',
      ],
      cta: 'Get Started',
    },
    {
      name: 'Professional',
      price: '$5,999',
      description: 'Ideal for growing businesses with advanced needs',
      features: [
        'Advanced Website (15 pages)',
        'Custom Design',
        'SEO Optimization',
        '2 Years Hosting',
        'E-commerce Ready',
        '6 Months Support',
        'Analytics Setup',
      ],
      cta: 'Choose Professional',
      popular: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'Comprehensive solution for large organizations',
      features: [
        'Unlimited Pages',
        'Custom Development',
        'Advanced SEO',
        'Dedicated Hosting',
        'AI Integration',
        '1 Year Support',
        'Priority Support',
        'Training Included',
      ],
      cta: 'Contact Sales',
    },
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
            Our Services
          </h1>
          <p className="text-xl text-muted-foreground">
            Comprehensive IT solutions designed to accelerate your business growth and digital transformation.
          </p>
        </motion.div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300 relative">
                {service.popular && (
                  <Badge className="absolute -top-2 -right-2 bg-[#1a3254] text-white">
                    Popular
                  </Badge>
                )}
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-r from-[#1a3254] to-[#d3d4d8] rounded-lg flex items-center justify-center text-white mb-4">
                    {service.icon}
                  </div>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-sm">{service.description}</p>
                  <ul className="space-y-1">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-sm flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-[#1a3254] rounded-full"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="pt-4">
                    <div className="text-lg font-semibold text-[#1a3254] dark:text-[#d3d4d8] mb-3">
                      {service.price}
                    </div>
                    <Button 
                      variant="outline" 
                      className="w-full"
                      onClick={() => setCurrentPage('contact')}
                    >
                      Learn More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Package Comparison */}
      <section className="py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Service Packages</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Choose the perfect package that fits your business needs and budget.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className={`h-full relative ${pkg.popular ? 'border-[#1a3254] border-2' : ''}`}>
                {pkg.popular && (
                  <Badge className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-[#1a3254] text-white">
                    Most Popular
                  </Badge>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{pkg.name}</CardTitle>
                  <div className="text-3xl font-bold text-[#1a3254] dark:text-[#d3d4d8]">
                    {pkg.price}
                  </div>
                  <p className="text-muted-foreground">{pkg.description}</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-[#1a3254] rounded-full"></div>
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className={`w-full mt-6 ${
                      pkg.popular
                        ? 'bg-[#1a3254] hover:bg-[#1a3254]/90 text-white'
                        : ''
                    }`}
                    variant={pkg.popular ? 'default' : 'outline'}
                    onClick={() => setCurrentPage('contact')}
                  >
                    {pkg.cta}
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gradient-to-r from-[#1a3254]/10 to-[#d3d4d8]/10 rounded-2xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Process</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A streamlined approach that ensures quality delivery and client satisfaction.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            { step: '01', title: 'Discovery', description: 'We understand your needs and goals' },
            { step: '02', title: 'Planning', description: 'Strategic roadmap and timeline creation' },
            { step: '03', title: 'Development', description: 'Building your solution with precision' },
            { step: '04', title: 'Launch', description: 'Deployment and ongoing support' },
          ].map((process, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-[#1a3254] to-[#d3d4d8] rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">
                {process.step}
              </div>
              <h3 className="text-lg font-semibold mb-2">{process.title}</h3>
              <p className="text-muted-foreground">{process.description}</p>
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
          <h2 className="text-3xl font-bold">Ready to Get Started?</h2>
          <p className="text-xl text-muted-foreground">
            Let's discuss your project and find the perfect solution for your business needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={() => setCurrentPage('contact')} className="bg-[#1a3254] hover:bg-[#1a3254]/90 text-#d3d4d8">
              Start Your Project
            </Button>
            <Button size="lg" variant="outline" onClick={() => setCurrentPage('why-us')}>
              Why Choose Us?
            </Button>
          </div>
        </motion.div>
      </section>
    </div>
  );
}