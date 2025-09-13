import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Clock, 
  MapPin, 
  Utensils, 
  BookOpen, 
  Dumbbell, 
  Heart, 
  Calendar,
  FileText,
  GraduationCap,
  Users,
  Coffee,
  Truck
} from 'lucide-react';

interface ServiceCardsProps {
  onServiceClick: (service: string) => void;
}

export const ServiceCards: React.FC<ServiceCardsProps> = ({ onServiceClick }) => {
  const services = [
    {
      id: 'schedules',
      title: 'Class Schedules & Events',
      description: 'View your class schedule, campus events, and important dates',
      icon: Clock,
      color: 'from-primary to-primary-light',
      items: ['Course schedules', 'Campus events', 'Academic calendar', 'Meeting rooms']
    },
    {
      id: 'facilities',
      title: 'Campus Facilities',
      description: 'Explore libraries, recreation centers, and campus buildings',
      icon: MapPin,
      color: 'from-accent to-campus-green',
      items: ['Central Library', 'Recreation Center', 'Health Center', 'Student Union']
    },
    {
      id: 'dining',
      title: 'Dining Services',
      description: 'Find dining halls, cafes, and food options across campus',
      icon: Utensils,
      color: 'from-secondary to-campus-gold',
      items: ['Main Dining Hall', 'Campus Café', 'Food Trucks', 'Meal Plans']
    },
    {
      id: 'library',
      title: 'Library Services',
      description: 'Access research help, study spaces, and digital resources',
      icon: BookOpen,
      color: 'from-campus-green to-accent',
      items: ['Research Assistance', 'Study Rooms', 'Computer Lab', '24/7 Access']
    },
    {
      id: 'admin',
      title: 'Administrative Services',
      description: 'Get help with registration, transcripts, and student services',
      icon: FileText,
      color: 'from-campus-purple to-primary',
      items: ['Course Registration', 'Transcripts', 'Financial Aid', 'Student Records']
    },
    {
      id: 'emergency',
      title: 'Emergency & Safety',
      description: 'Emergency contacts, safety information, and campus security',
      icon: Heart,
      color: 'from-destructive to-campus-red',
      items: ['Emergency Contacts', 'Campus Security', 'Health Services', 'Safety Escorts']
    }
  ];

  const quickStats = [
    { label: 'Students Served', value: '15,000+', icon: Users },
    { label: 'Campus Buildings', value: '42', icon: MapPin },
    { label: 'Dining Locations', value: '12', icon: Coffee },
    { label: 'Study Spaces', value: '500+', icon: BookOpen }
  ];

  return (
    <div className="py-16 bg-background">
      <div className="container mx-auto px-4">
        {/* Stats Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Campus by the Numbers</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {quickStats.map((stat) => (
              <Card key={stat.label} className="text-center border-2 hover:border-primary/20 transition-colors">
                <CardContent className="p-4">
                  <stat.icon className="h-8 w-8 mx-auto mb-2 text-primary" />
                  <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Campus Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Access all campus information and services through our AI-powered assistant
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={service.id} 
                className="group hover:shadow-lg transition-all duration-300 cursor-pointer border-2 hover:border-primary/20"
                onClick={() => onServiceClick(service.id)}
              >
                <CardHeader className="pb-3">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center mb-3`}>
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">
                    {service.title}
                  </CardTitle>
                  <p className="text-sm text-muted-foreground">
                    {service.description}
                  </p>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-2 mb-4">
                    {service.items.map((item, index) => (
                      <Badge 
                        key={index} 
                        variant="secondary" 
                        className="text-xs mr-2 mb-2"
                      >
                        {item}
                      </Badge>
                    ))}
                  </div>
                  <Button 
                    variant="outline" 
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                    onClick={(e) => {
                      e.stopPropagation();
                      onServiceClick(service.id);
                    }}
                  >
                    Get Help
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Featured Services */}
        <div className="mt-16 bg-gradient-to-r from-muted/50 to-accent/10 rounded-xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2">Popular Services</h3>
            <p className="text-muted-foreground">Most frequently requested campus information</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="text-center border-2">
              <CardContent className="p-6">
                <GraduationCap className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h4 className="font-semibold mb-2">Course Registration</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Get step-by-step help with class registration and schedule planning
                </p>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => onServiceClick('admin')}
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center border-2">
              <CardContent className="p-6">
                <Dumbbell className="h-12 w-12 mx-auto mb-4 text-accent" />
                <h4 className="font-semibold mb-2">Recreation Center</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Hours, facilities, and amenities at our state-of-the-art rec center
                </p>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => onServiceClick('facilities')}
                >
                  View Details
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center border-2">
              <CardContent className="p-6">
                <Truck className="h-12 w-12 mx-auto mb-4 text-secondary" />
                <h4 className="font-semibold mb-2">Food Truck Schedule</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Daily food truck locations and menus around campus
                </p>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => onServiceClick('dining')}
                >
                  See Schedule
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};