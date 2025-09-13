import React, { useState } from 'react';
import { Navigation } from '@/components/Navigation';
import { HeroSection } from '@/components/HeroSection';
import { ServiceCards } from '@/components/ServiceCards';
import { ChatBot } from '@/components/ChatBot';
import { Footer } from '@/components/Footer';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const { toast } = useToast();

  const handleSectionClick = (section: string) => {
    // Scroll to section or handle navigation
    console.log('Navigate to section:', section);
    toast({
      title: "Navigation",
      description: `Navigating to ${section} section`,
    });
  };

  const handleSearch = (query: string) => {
    console.log('Search query:', query);
    // Open chat with the search query
    setIsChatOpen(true);
    toast({
      title: "Search",
      description: `Searching for: ${query}`,
    });
  };

  const handleServiceClick = (service: string) => {
    console.log('Service clicked:', service);
    setIsChatOpen(true);
    toast({
      title: "Service Selected",
      description: `Opening ${service} information`,
    });
  };

  const handleChatToggle = () => {
    setIsChatOpen(!isChatOpen);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <Navigation 
        onSectionClick={handleSectionClick} 
        onChatToggle={handleChatToggle}
      />

      {/* Hero Section */}
      <HeroSection 
        onStartChat={handleChatToggle}
        onSearch={handleSearch}
      />

      {/* Service Cards */}
      <ServiceCards onServiceClick={handleServiceClick} />

      {/* Footer */}
      <Footer onChatToggle={handleChatToggle} />

      {/* Chat Dialog */}
      <Dialog open={isChatOpen} onOpenChange={setIsChatOpen}>
        <DialogContent className="max-w-5xl w-full h-[80vh] p-0 overflow-hidden">
          <div className="flex justify-end p-2 bg-muted/30 border-b">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsChatOpen(false)}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
          <div className="p-4 h-full overflow-hidden">
            <ChatBot />
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Index;
