import { MessageCircle, Phone, Mail, Clock, Search, Book, Users, Headphones } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion';
import { Badge } from '../ui/badge';
import { motion } from 'motion/react';
import { useState } from 'react';

interface SupportProps {
  setCurrentPage: (page: string) => void;
}

export function SupportPage({ setCurrentPage }: SupportProps) {
  const [searchQuery, setSearchQuery] = useState('');

  const supportChannels = [
    {
      icon: <MessageCircle className="h-8 w-8" />,
      title: 'Live Chat',
      description: 'Get instant help from our support team',
      availability: '24/7 Available',
      action: 'Start Chat',
      popular: true,
    },
    {
      icon: <Phone className="h-8 w-8" />,
      title: 'Phone Support',
      description: 'Speak directly with our experts',
      availability: 'Mon-Fri 9AM-6PM EST',
      action: 'Call Now',
      phone: '+1 (555) 123-4567',
    },
    {
      icon: <Mail className="h-8 w-8" />,
      title: 'Email Support',
      description: 'Send us your questions anytime',
      availability: 'Response within 4 hours',
      action: 'Send Email',
      email: 'support@techsolutions.com',
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Community Forum',
      description: 'Connect with other users and experts',
      availability: 'Always Active',
      action: 'Join Forum',
    },
  ];

  const faqs = [
    {
      question: 'How long does it take to build a website?',
      answer: 'The timeline depends on the complexity of your project. A basic website typically takes 2-4 weeks, while more complex projects with custom features can take 6-12 weeks. We provide detailed timelines during our initial consultation.',
    },
    {
      question: 'What is included in your hosting packages?',
      answer: 'Our hosting packages include SSD storage, SSL certificates, daily backups, 24/7 monitoring, 99.9% uptime guarantee, email accounts, and free domain registration for the first year.',
    },
    {
      question: 'Do you provide ongoing maintenance?',
      answer: 'Yes, we offer comprehensive maintenance packages that include security updates, performance optimization, content updates, bug fixes, and regular backups. Plans start from $99/month.',
    },
    {
      question: 'Can you help with SEO and digital marketing?',
      answer: 'Absolutely! We offer complete digital marketing services including SEO optimization, social media management, PPC campaigns, content marketing, and detailed analytics reporting.',
    },
    {
      question: 'What AI solutions do you offer?',
      answer: 'We provide chatbots, process automation, data analysis tools, machine learning implementations, and custom AI solutions tailored to your business needs.',
    },
    {
      question: 'Do you work with small businesses?',
      answer: 'Yes, we work with businesses of all sizes, from startups to enterprise companies. We have packages specifically designed for small businesses starting from $2,999.',
    },
    {
      question: 'What technologies do you use?',
      answer: 'We use modern technologies including React, Node.js, Python, cloud services (AWS, Google Cloud), and the latest AI/ML frameworks to ensure your solutions are cutting-edge and scalable.',
    },
    {
      question: 'Do you provide training?',
      answer: 'Yes, we provide comprehensive training for all our solutions, including video tutorials, documentation, and hands-on training sessions for your team.',
    },
  ];

  const resources = [
    {
      icon: <Book className="h-6 w-6" />,
      title: 'Documentation',
      description: 'Comprehensive guides and tutorials',
      link: '#',
    },
    {
      icon: <MessageCircle className="h-6 w-6" />,
      title: 'Video Tutorials',
      description: 'Step-by-step video instructions',
      link: '#',
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: 'Community Forum',
      description: 'Connect with other users',
      link: '#',
    },
    {
      icon: <Headphones className="h-6 w-6" />,
      title: 'Webinars',
      description: 'Live training sessions',
      link: '#',
    },
  ];

  const serviceStatus = [
    { service: 'Website Hosting', status: 'Operational', uptime: '99.98%' },
    { service: 'Email Services', status: 'Operational', uptime: '99.95%' },
    { service: 'Support Portal', status: 'Operational', uptime: '99.99%' },
    { service: 'API Services', status: 'Operational', uptime: '99.97%' },
  ];

  const filteredFaqs = faqs.filter(faq =>
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
            Support Center
          </h1>
          <p className="text-xl text-muted-foreground">
            Get the help you need, when you need it. Our support team is here to ensure your success.
          </p>
        </motion.div>
      </section>

      {/* Support Channels */}
      <section className="py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Get Help Your Way</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Choose from multiple support channels designed to get you the assistance you need quickly.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {supportChannels.map((channel, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300 relative">
                {channel.popular && (
                  <Badge className="absolute -top-2 -right-2 bg-[#1a3254] text-white">
                    Popular
                  </Badge>
                )}
                <CardHeader className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#1a3254] to-[#d3d4d8] rounded-lg flex items-center justify-center text-white mx-auto mb-4">
                    {channel.icon}
                  </div>
                  <CardTitle className="text-lg">{channel.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center space-y-4">
                  <p className="text-muted-foreground text-sm">{channel.description}</p>
                  <div className="space-y-2">
                    <div className="flex items-center justify-center space-x-2">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">{channel.availability}</span>
                    </div>
                    {channel.phone && (
                      <div className="text-sm text-[#1a3254] dark:text-[#d3d4d8]">{channel.phone}</div>
                    )}
                    {channel.email && (
                      <div className="text-sm text-[#1a3254] dark:text-[#d3d4d8]">{channel.email}</div>
                    )}
                  </div>
                  <Button 
                    className="w-full"
                    variant={channel.popular ? 'default' : 'outline'}
                    onClick={() => setCurrentPage('contact')}
                  >
                    {channel.action}
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Service Status */}
      <section className="py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Service Status</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Real-time status of all our services and systems.
          </p>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Card>
            <CardContent className="p-6">
              <div className="space-y-4">
                {serviceStatus.map((service, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className="font-medium">{service.service}</span>
                    </div>
                    <div className="flex items-center space-x-4">
                      <Badge variant="secondary" className="bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400">
                        {service.status}
                      </Badge>
                      <span className="text-sm text-muted-foreground">{service.uptime}</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </section>

      {/* FAQs */}
      <section className="py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Find quick answers to common questions about our services and solutions.
          </p>
        </div>
        
        {/* Search */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-md mx-auto mb-8"
        >
          <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search FAQs..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {filteredFaqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border border-border rounded-lg px-6">
                <AccordionTrigger className="text-left hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </section>

      {/* Resources */}
      <section className="py-16 bg-gradient-to-r from-[#1a3254]/10 to-[#d3d4d8]/10 rounded-2xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Help Resources</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Additional resources to help you get the most out of our services.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {resources.map((resource, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300 cursor-pointer">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#1a3254] to-[#d3d4d8] rounded-lg flex items-center justify-center text-white mx-auto mb-4">
                    {resource.icon}
                  </div>
                  <h3 className="font-semibold mb-2">{resource.title}</h3>
                  <p className="text-sm text-muted-foreground">{resource.description}</p>
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
          <h2 className="text-3xl font-bold">Still Need Help?</h2>
          <p className="text-xl text-muted-foreground">
            Can't find what you're looking for? Our support team is ready to assist you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={() => setCurrentPage('contact')} className="bg-[#1a3254] hover:bg-[#1a3254]/90">
              Contact Support
            </Button>
            <Button size="lg" variant="outline">
              Schedule a Call
            </Button>
          </div>
        </motion.div>
      </section>
    </div>
  );
}