import { Users, Award, Globe, Clock } from 'lucide-react';
import { Card, CardContent } from '../ui/card';
import { motion } from 'motion/react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export function AboutPage() {
  const milestones = [
    { year: '2019', event: 'Company Founded', description: 'Started with a vision to democratize technology' },
    { year: '2020', event: 'First 100 Clients', description: 'Reached our first major milestone during the pandemic' },
    { year: '2022', event: 'AI Division Launch', description: 'Expanded into artificial intelligence solutions' },
    { year: '2024', event: 'Global Expansion', description: 'Serving clients across 15 countries worldwide' },
  ];

  const team = [
    { name: 'Sarah Johnson', role: 'CEO & Founder', experience: '15+ years in tech leadership' },
    { name: 'Michael Chen', role: 'CTO', experience: 'Former Google engineer, AI specialist' },
    { name: 'Emily Rodriguez', role: 'Head of Design', experience: 'Award-winning UX/UI designer' },
    { name: 'David Kim', role: 'Lead Developer', experience: 'Full-stack expert, 10+ years' },
  ];

  const values = [
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Client-Centric Approach',
      description: 'Every decision we make is guided by what\'s best for our clients\' success.',
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: 'Excellence in Delivery',
      description: 'We set high standards and consistently exceed expectations in every project.',
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: 'Global Perspective',
      description: 'Our solutions are designed to work across cultures and markets worldwide.',
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: 'Timely Execution',
      description: 'We respect deadlines and deliver projects on time, every time.',
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
            About TechSolutions
          </h1>
          <p className="text-xl text-muted-foreground">
            We're passionate about creating technology solutions that empower businesses to reach their full potential.
          </p>
        </motion.div>
      </section>

      {/* Story Section */}
      <section className="py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold">Our Story</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Founded in 2019, TechSolutions emerged from a simple yet powerful idea: that every business, 
                regardless of size, deserves access to cutting-edge technology solutions that drive growth and innovation.
              </p>
              <p>
                Our journey began when our founders, frustrated by the complexity and high costs of traditional 
                IT services, decided to create a company that would make technology accessible, affordable, and effective.
              </p>
              <p>
                Today, we're proud to serve hundreds of clients worldwide, from startups to enterprise companies, 
                helping them navigate the digital landscape with confidence and success.
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative bg-gradient-to-r from-[#1a3254] to-[#d3d4d8] rounded-2xl p-1">
              <div className="bg-background rounded-xl overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1623715537851-8bc15aa8c145?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB0ZWNobm9sb2d5JTIwb2ZmaWNlJTIwd29ya3NwYWNlfGVufDF8fHx8MTc1OTY2MTA5NXww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Modern office workspace"
                  className="w-full h-80 object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Journey</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Key milestones that have shaped our company and defined our commitment to excellence.
          </p>
        </div>
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-[#1a3254] to-[#d3d4d8]"></div>
          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                  <Card>
                    <CardContent className="p-6">
                      <div className="text-2xl font-bold text-[#1a3254] dark:text-[#d3d4d8] mb-2">
                        {milestone.year}
                      </div>
                      <h3 className="text-lg font-semibold mb-2">{milestone.event}</h3>
                      <p className="text-muted-foreground">{milestone.description}</p>
                    </CardContent>
                  </Card>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#1a3254] rounded-full border-4 border-background"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">What Drives Us</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our core values shape every interaction, every project, and every solution we deliver.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-[#1a3254] to-[#d3d4d8] rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                    {value.icon}
                  </div>
                  <h3 className="font-semibold mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            The talented individuals behind our success, each bringing unique expertise and passion to every project.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="w-20 h-20 bg-gradient-to-r from-[#1a3254] to-[#d3d4d8] rounded-full mx-auto mb-4"></div>
                  <h3 className="font-semibold mb-1">{member.name}</h3>
                  <div className="text-[#1a3254] dark:text-[#d3d4d8] mb-2">{member.role}</div>
                  <p className="text-sm text-muted-foreground">{member.experience}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}