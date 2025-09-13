import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { 
  GraduationCap, 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  MessageCircle
} from 'lucide-react';

interface FooterProps {
  onChatToggle: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onChatToggle }) => {
  const [email, setEmail] = React.useState('');

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    console.log('Newsletter signup:', email);
    setEmail('');
  };

  const contactInfo = [
    {
      icon: Phone,
      label: 'Emergency',
      value: '(555) 911-HELP',
      description: '24/7 Emergency Line'
    },
    {
      icon: Phone,
      label: 'Main Office',
      value: '(555) 123-4567',
      description: 'Mon-Fri, 8AM-6PM'
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'info@university.edu',
      description: 'General Inquiries'
    },
    {
      icon: MapPin,
      label: 'Address',
      value: '123 University Ave',
      description: 'Campus City, ST 12345'
    }
  ];

  const quickLinks = [
    { title: 'Academic Calendar', href: '#calendar' },
    { title: 'Course Catalog', href: '#catalog' },
    { title: 'Student Portal', href: '#portal' },
    { title: 'Campus Map', href: '#map' },
    { title: 'Parking Info', href: '#parking' },
    { title: 'IT Help Desk', href: '#tech' }
  ];

  const studentServices = [
    { title: 'Registration', href: '#registration' },
    { title: 'Financial Aid', href: '#financial' },
    { title: 'Career Services', href: '#careers' },
    { title: 'Counseling', href: '#counseling' },
    { title: 'Disability Services', href: '#accessibility' },
    { title: 'International Students', href: '#international' }
  ];

  const campusLife = [
    { title: 'Dining Services', href: '#dining' },
    { title: 'Housing', href: '#housing' },
    { title: 'Recreation Center', href: '#recreation' },
    { title: 'Student Organizations', href: '#organizations' },
    { title: 'Events Calendar', href: '#events' },
    { title: 'Campus Store', href: '#store' }
  ];

  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* University Info & AI Chat */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <GraduationCap className="h-8 w-8 text-primary" />
              <span className="font-bold text-xl">Campus Assistant</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Your intelligent guide to campus life. Get instant answers to questions about 
              schedules, facilities, dining, library services, and administrative procedures.
            </p>
            <Button 
              onClick={onChatToggle}
              className="w-full bg-primary hover:bg-primary-dark"
            >
              <MessageCircle className="mr-2 h-4 w-4" />
              Start AI Chat
            </Button>
            
            {/* Social Media */}
            <div className="flex gap-2 pt-4">
              <Button variant="outline" size="icon" className="h-8 w-8">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="h-8 w-8">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="h-8 w-8">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="h-8 w-8">
                <Linkedin className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              {quickLinks.map((link) => (
                <a
                  key={link.title}
                  href={link.href}
                  className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.title}
                </a>
              ))}
            </div>
          </div>

          {/* Student Services */}
          <div>
            <h3 className="font-semibold mb-4">Student Services</h3>
            <div className="space-y-2">
              {studentServices.map((service) => (
                <a
                  key={service.title}
                  href={service.href}
                  className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {service.title}
                </a>
              ))}
            </div>
          </div>

          {/* Campus Life */}
          <div>
            <h3 className="font-semibold mb-4">Campus Life</h3>
            <div className="space-y-2">
              {campusLife.map((item) => (
                <a
                  key={item.title}
                  href={item.href}
                  className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {item.title}
                </a>
              ))}
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Contact Information */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {contactInfo.map((info) => (
            <div key={info.label} className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <info.icon className="h-5 w-5 text-primary" />
              </div>
              <div>
                <div className="font-medium text-sm">{info.label}</div>
                <div className="text-sm text-foreground">{info.value}</div>
                <div className="text-xs text-muted-foreground">{info.description}</div>
              </div>
            </div>
          ))}
        </div>

        <Separator className="my-8" />

        {/* Newsletter Signup */}
        <div className="bg-muted/30 rounded-lg p-6 mb-8">
          <div className="max-w-md mx-auto text-center">
            <h3 className="font-semibold mb-2">Stay Updated</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Get the latest campus news and important announcements
            </p>
            <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1"
                required
              />
              <Button type="submit" className="bg-primary hover:bg-primary-dark">
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-4">
            <span>© 2024 University Campus Assistant. All rights reserved.</span>
            <Separator orientation="vertical" className="h-4" />
            <div className="flex items-center gap-1">
              <Clock className="h-3 w-3" />
              <span>Last updated: {new Date().toLocaleDateString()}</span>
            </div>
          </div>
          
          <div className="flex gap-4">
            <a href="#privacy" className="hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#terms" className="hover:text-primary transition-colors">
              Terms of Service
            </a>
            <a href="#accessibility" className="hover:text-primary transition-colors">
              Accessibility
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};