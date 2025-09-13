import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, MessageCircle, Map, Calendar, BookOpen, Phone } from 'lucide-react';

interface HeroSectionProps {
  onStartChat: () => void;
  onSearch: (query: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onStartChat, onSearch }) => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      onSearch(searchQuery);
    }
  };

  return (
    <div className="relative bg-gradient-to-br from-primary via-primary-light to-campus-purple text-white py-20 px-4">
      <div className="container mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Smart Campus Assistant
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-white/90">
          Your AI-powered guide to campus life, schedules, and services
        </p>
        
        {/* Search Bar */}
        <form onSubmit={handleSearch} className="max-w-2xl mx-auto mb-8">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for schedules, facilities, dining options, library services..."
              className="pl-12 pr-4 py-4 text-lg bg-white/95 border-0 text-foreground placeholder:text-muted-foreground"
            />
            <Button 
              type="submit"
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-primary hover:bg-primary-dark"
              disabled={!searchQuery.trim()}
            >
              Search
            </Button>
          </div>
        </form>

        {/* Quick Access Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            onClick={onStartChat}
            size="lg" 
            className="bg-white/20 hover:bg-white/30 border border-white/30 text-white backdrop-blur-sm"
          >
            <MessageCircle className="mr-2 h-5 w-5" />
            Start AI Chat
          </Button>
          
          <div className="flex gap-2">
            <Button variant="outline" size="sm" className="border-white/30 text-white hover:bg-white/10">
              <Map className="mr-1 h-4 w-4" />
              Campus Map
            </Button>
            <Button variant="outline" size="sm" className="border-white/30 text-white hover:bg-white/10">
              <Calendar className="mr-1 h-4 w-4" />
              Events
            </Button>
            <Button variant="outline" size="sm" className="border-white/30 text-white hover:bg-white/10">
              <BookOpen className="mr-1 h-4 w-4" />
              Library
            </Button>
            <Button variant="outline" size="sm" className="border-white/30 text-white hover:bg-white/10">
              <Phone className="mr-1 h-4 w-4" />
              Emergency
            </Button>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 right-20 w-32 h-32 bg-secondary/20 rounded-full blur-2xl"></div>
        <div className="absolute bottom-10 left-1/3 w-24 h-24 bg-accent/20 rounded-full blur-xl"></div>
      </div>
    </div>
  );
};