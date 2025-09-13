import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { 
  GraduationCap, 
  Menu, 
  MessageCircle, 
  MapPin, 
  Calendar, 
  Utensils, 
  BookOpen,
  Settings,
  Phone,
  Clock,
  Users,
  FileText
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface NavigationProps {
  onSectionClick: (section: string) => void;
  onChatToggle: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({ onSectionClick, onChatToggle }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navigationItems = [
    {
      title: 'Services',
      items: [
        { title: 'Class Schedules', href: '#schedules', icon: Clock, description: 'View class schedules and academic calendar' },
        { title: 'Campus Facilities', href: '#facilities', icon: MapPin, description: 'Explore campus buildings and amenities' },
        { title: 'Dining Services', href: '#dining', icon: Utensils, description: 'Find dining halls and food options' },
        { title: 'Library Services', href: '#library', icon: BookOpen, description: 'Research help and study spaces' },
      ]
    },
    {
      title: 'Student Life',
      items: [
        { title: 'Events Calendar', href: '#events', icon: Calendar, description: 'Campus events and activities' },
        { title: 'Student Organizations', href: '#organizations', icon: Users, description: 'Join clubs and organizations' },
        { title: 'Recreation Center', href: '#recreation', icon: MapPin, description: 'Fitness and wellness facilities' },
        { title: 'Student Support', href: '#support', icon: Phone, description: 'Counseling and support services' },
      ]
    },
    {
      title: 'Administrative',
      items: [
        { title: 'Registration', href: '#registration', icon: FileText, description: 'Course registration and enrollment' },
        { title: 'Transcripts', href: '#transcripts', icon: FileText, description: 'Request official transcripts' },
        { title: 'Financial Aid', href: '#financial', icon: Settings, description: 'Financial assistance and scholarships' },
        { title: 'Student Records', href: '#records', icon: FileText, description: 'Academic records and grades' },
      ]
    }
  ];

  const handleItemClick = (href: string) => {
    const section = href.replace('#', '');
    onSectionClick(section);
    setIsOpen(false);
  };

  const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a"> & { icon?: React.ComponentType<{ className?: string }> }
  >(({ className, title, children, icon: Icon, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className
            )}
            {...props}
          >
            <div className="flex items-center gap-2">
              {Icon && <Icon className="h-4 w-4" />}
              <div className="text-sm font-medium leading-none">{title}</div>
            </div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
              {children}
            </p>
          </a>
        </NavigationMenuLink>
      </li>
    )
  });

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <GraduationCap className="h-8 w-8 text-primary" />
            <span className="font-bold text-xl">Campus Assistant</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <NavigationMenu>
              <NavigationMenuList>
                {navigationItems.map((section) => (
                  <NavigationMenuItem key={section.title}>
                    <NavigationMenuTrigger className="text-sm font-medium">
                      {section.title}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                        {section.items.map((item) => (
                          <ListItem
                            key={item.title}
                            title={item.title}
                            icon={item.icon}
                            onClick={() => handleItemClick(item.href)}
                            className="cursor-pointer"
                          >
                            {item.description}
                          </ListItem>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>

            <Button
              onClick={onChatToggle}
              className="bg-primary hover:bg-primary-dark"
            >
              <MessageCircle className="mr-2 h-4 w-4" />
              AI Chat
            </Button>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center gap-2">
            <Button
              onClick={onChatToggle}
              size="sm"
              className="bg-primary hover:bg-primary-dark"
            >
              <MessageCircle className="h-4 w-4" />
            </Button>
            
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu className="h-4 w-4" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex items-center gap-2 mb-6">
                  <GraduationCap className="h-6 w-6 text-primary" />
                  <span className="font-bold">Campus Assistant</span>
                </div>
                
                <div className="space-y-6">
                  {navigationItems.map((section) => (
                    <div key={section.title}>
                      <h3 className="font-semibold text-sm text-muted-foreground uppercase tracking-wider mb-3">
                        {section.title}
                      </h3>
                      <div className="space-y-1">
                        {section.items.map((item) => (
                          <Button
                            key={item.title}
                            variant="ghost"
                            className="w-full justify-start h-auto p-3"
                            onClick={() => handleItemClick(item.href)}
                          >
                            <item.icon className="mr-3 h-4 w-4" />
                            <div className="text-left">
                              <div className="font-medium">{item.title}</div>
                              <div className="text-xs text-muted-foreground">{item.description}</div>
                            </div>
                          </Button>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};