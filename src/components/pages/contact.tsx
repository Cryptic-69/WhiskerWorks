import { Mail, Phone, Clock, Send, MessageSquare, Search } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Label } from '../ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion';
import { motion } from 'motion/react';
import { useState } from 'react';
import { toast } from 'sonner@2.0.3';

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: '',
  });
  const [searchQuery, setSearchQuery] = useState('');

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: 'Email Us',
      details: 'whiskerworksitsolution@gmail.com',
      description: 'Send us an email anytime',
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: 'Call Us',
      details: '+1 (555) 123-4567',
      description: 'Mon-Fri 9AM-6PM EST',
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: 'Business Hours',
      details: 'Mon-Fri: 9AM-6PM EST',
      description: 'Weekend support available',
    },
  ];

  const services = [
    'Website Development',
    'Web Hosting',
    'Website Maintenance',
    'Digital Marketing',
    'AI Solutions',
    'SEO Optimization',
    'Custom Software',
    'Other',
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    toast('Thank you for your message! We\'ll get back to you within 24 hours.', {
      duration: 5000,
    });
    setFormData({
      name: '',
      email: '',
      company: '',
      service: '',
      message: '',
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

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
            Contact Us
          </h1>
          <p className="text-xl text-muted-foreground">
            Ready to start your project? Get in touch with our team of experts and let's discuss how we can help transform your business.
          </p>
        </motion.div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <MessageSquare className="h-5 w-5" />
                  <span>Send Us a Message</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        required
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        required
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="company">Company Name</Label>
                    <Input
                      id="company"
                      value={formData.company}
                      onChange={(e) => handleInputChange('company', e.target.value)}
                      placeholder="Your Company"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="service">Service Interested In</Label>
                    <Select onValueChange={(value) => handleInputChange('service', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        {services.map((service, index) => (
                          <SelectItem key={index} value={service}>
                            {service}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      required
                      placeholder="Tell us about your project requirements..."
                      rows={5}
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full bg-[#1a3254] hover:bg-[#1a3254]/90 text-#d3d4d8">
                    <Send className="h-4 w-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div>
              <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
              <p className="text-muted-foreground mb-8">
                We're here to help and answer any question you might have. We look forward to hearing from you.
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-gradient-to-r from-[#1a3254] to-[#d3d4d8] rounded-lg flex items-center justify-center text-white flex-shrink-0">
                        {info.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">{info.title}</h3>
                        <p className="text-[#1a3254] dark:text-[#d3d4d8] mb-1">{info.details}</p>
                        <p className="text-sm text-muted-foreground">{info.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Quick Contact */}
            <Card className="bg-gradient-to-r from-[#1a3254]/10 to-[#d3d4d8]/10">
              <CardContent className="p-6 text-center">
                <h3 className="font-semibold mb-2">Need Immediate Assistance?</h3>
                <p className="text-muted-foreground mb-4">
                  For urgent matters, call us directly or start a live chat.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button variant="outline" className="flex-1">
                    <Phone className="h-4 w-4 mr-2" />
                    Call Now
                  </Button>
                  <Button className="flex-1 bg-[#1a3254] hover:bg-[#1a3254]/90 text-#d3d4d8">
                    <MessageSquare className="h-4 w-4 mr-2" />
                    Live Chat
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>



      {/* Response Time */}
      <section className="py-16 bg-gradient-to-r from-[#1a3254]/10 to-[#d3d4d8]/10 rounded-2xl">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto space-y-6"
          >
            <h2 className="text-3xl font-bold">We Value Your Time</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-[#1a3254] dark:text-[#d3d4d8] mb-2">
                  &lt; 4 Hours
                </div>
                <div className="text-muted-foreground">Email Response</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#1a3254] dark:text-[#d3d4d8] mb-2">
                  &lt; 2 Minutes
                </div>
                <div className="text-muted-foreground">Live Chat Response</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#1a3254] dark:text-[#d3d4d8] mb-2">
                  24/7
                </div>
                <div className="text-muted-foreground">Support Available</div>
              </div>
            </div>
          </motion.div>
        </div>
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

      {/* Company Email */}
      <section className="py-8 text-center border-t border-border">
        <p className="text-muted-foreground">
          For general inquiries: <span className="text-[#1a3254] dark:text-[#d3d4d8] font-medium">whiskerworksitsolution@gmail.com</span>
        </p>
      </section>
    </div>
  );
}