import React, { useState, useRef, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Badge } from '@/components/ui/badge';
import { Send, Bot, User, MessageCircle, Clock, MapPin, Utensils, BookOpen, Settings } from 'lucide-react';
import { 
  schedules, 
  facilities, 
  diningOptions, 
  libraryServices, 
  adminProcedures, 
  aiResponses,
  type Schedule,
  type Facility,
  type DiningOption,
  type LibraryService,
  type AdminProcedure
} from '@/data/campusData';

interface Message {
  id: string;
  type: 'user' | 'assistant';
  content: string;
  timestamp: Date;
  data?: any;
}

export const ChatBot: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'assistant',
      content: aiResponses.greeting[0],
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const processUserQuery = (query: string): { content: string; data?: any } => {
    const lowerQuery = query.toLowerCase();
    
    // Schedule queries
    if (lowerQuery.includes('schedule') || lowerQuery.includes('class') || lowerQuery.includes('event')) {
      return {
        content: "Here are the upcoming schedules and events:",
        data: { type: 'schedules', items: schedules }
      };
    }
    
    // Facility queries
    if (lowerQuery.includes('facility') || lowerQuery.includes('building') || lowerQuery.includes('recreation') || lowerQuery.includes('health')) {
      return {
        content: "Here are our campus facilities:",
        data: { type: 'facilities', items: facilities }
      };
    }
    
    // Dining queries
    if (lowerQuery.includes('dining') || lowerQuery.includes('food') || lowerQuery.includes('eat') || lowerQuery.includes('restaurant') || lowerQuery.includes('cafe')) {
      return {
        content: "Here are our dining options:",
        data: { type: 'dining', items: diningOptions }
      };
    }
    
    // Library queries
    if (lowerQuery.includes('library') || lowerQuery.includes('book') || lowerQuery.includes('study') || lowerQuery.includes('research')) {
      return {
        content: "Here are our library services:",
        data: { type: 'library', items: libraryServices }
      };
    }
    
    // Admin queries
    if (lowerQuery.includes('registration') || lowerQuery.includes('transcript') || lowerQuery.includes('financial aid') || lowerQuery.includes('admin')) {
      return {
        content: "Here are common administrative procedures:",
        data: { type: 'admin', items: adminProcedures }
      };
    }
    
    // Greeting responses
    if (lowerQuery.includes('hello') || lowerQuery.includes('hi') || lowerQuery.includes('help')) {
      return {
        content: aiResponses.greeting[Math.floor(Math.random() * aiResponses.greeting.length)]
      };
    }
    
    // Fallback
    return {
      content: aiResponses.fallback[Math.floor(Math.random() * aiResponses.fallback.length)]
    };
  };

  const handleSendMessage = async () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: input,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    // Simulate AI processing time
    setTimeout(() => {
      const response = processUserQuery(input);
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: 'assistant',
        content: response.content,
        timestamp: new Date(),
        data: response.data
      };

      setMessages(prev => [...prev, assistantMessage]);
      setIsLoading(false);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const renderDataCards = (data: any) => {
    if (!data) return null;

    switch (data.type) {
      case 'schedules':
        return (
          <div className="grid gap-3 mt-3">
            {data.items.map((item: Schedule) => (
              <Card key={item.id} className="border-l-4 border-l-primary">
                <CardContent className="p-3">
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="font-semibold text-sm">{item.title}</h4>
                      <p className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
                        <Clock className="h-3 w-3" />
                        {item.time}
                      </p>
                      <p className="text-xs text-muted-foreground flex items-center gap-1">
                        <MapPin className="h-3 w-3" />
                        {item.location}
                      </p>
                      {item.description && (
                        <p className="text-xs text-muted-foreground mt-1">{item.description}</p>
                      )}
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {item.type}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        );

      case 'facilities':
        return (
          <div className="grid gap-3 mt-3">
            {data.items.map((item: Facility) => (
              <Card key={item.id} className="border-l-4 border-l-accent">
                <CardContent className="p-3">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h4 className="font-semibold text-sm">{item.name}</h4>
                      <p className="text-xs text-muted-foreground mt-1">{item.description}</p>
                      <p className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
                        <MapPin className="h-3 w-3" />
                        {item.location}
                      </p>
                      <p className="text-xs text-muted-foreground flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {item.hours}
                      </p>
                      <div className="flex flex-wrap gap-1 mt-2">
                        {item.amenities.slice(0, 3).map((amenity, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {amenity}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {item.type}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        );

      case 'dining':
        return (
          <div className="grid gap-3 mt-3">
            {data.items.map((item: DiningOption) => (
              <Card key={item.id} className="border-l-4 border-l-secondary">
                <CardContent className="p-3">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h4 className="font-semibold text-sm">{item.name}</h4>
                      <p className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
                        <MapPin className="h-3 w-3" />
                        {item.location}
                      </p>
                      <p className="text-xs text-muted-foreground flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {item.hours}
                      </p>
                      {item.menu && (
                        <div className="flex flex-wrap gap-1 mt-2">
                          {item.menu.slice(0, 3).map((menuItem, idx) => (
                            <Badge key={idx} variant="outline" className="text-xs">
                              {menuItem}
                            </Badge>
                          ))}
                        </div>
                      )}
                    </div>
                    <div className="text-right">
                      <Badge variant="secondary" className="text-xs">
                        {item.type}
                      </Badge>
                      <p className="text-xs text-muted-foreground mt-1 capitalize">
                        {item.pricing}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        );

      case 'library':
        return (
          <div className="grid gap-3 mt-3">
            {data.items.map((item: LibraryService) => (
              <Card key={item.id} className="border-l-4 border-l-campus-green">
                <CardContent className="p-3">
                  <h4 className="font-semibold text-sm">{item.name}</h4>
                  <p className="text-xs text-muted-foreground mt-1">{item.description}</p>
                  <p className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
                    <MapPin className="h-3 w-3" />
                    {item.location}
                  </p>
                  <p className="text-xs text-muted-foreground flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {item.hours}
                  </p>
                  <div className="flex flex-wrap gap-1 mt-2">
                    {item.resources.slice(0, 3).map((resource, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {resource}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        );

      case 'admin':
        return (
          <div className="grid gap-3 mt-3">
            {data.items.map((item: AdminProcedure) => (
              <Card key={item.id} className="border-l-4 border-l-campus-purple">
                <CardContent className="p-3">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h4 className="font-semibold text-sm">{item.title}</h4>
                      <p className="text-xs text-muted-foreground mt-1">{item.description}</p>
                      <p className="text-xs text-muted-foreground mt-1">
                        <strong>Timeline:</strong> {item.timeline}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        <strong>Contact:</strong> {item.contact}
                      </p>
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {item.department}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        );

      default:
        return null;
    }
  };

  const quickActions = [
    { label: 'Schedules', icon: Clock, query: 'Show me class schedules' },
    { label: 'Dining', icon: Utensils, query: 'Where can I eat on campus?' },
    { label: 'Library', icon: BookOpen, query: 'What library services are available?' },
    { label: 'Facilities', icon: MapPin, query: 'Show me campus facilities' },
    { label: 'Admin Help', icon: Settings, query: 'Help with administrative procedures' }
  ];

  return (
    <Card className="w-full max-w-4xl mx-auto h-[600px] flex flex-col">
      <CardHeader className="bg-gradient-to-r from-primary to-primary-light text-white rounded-t-lg">
        <CardTitle className="flex items-center gap-2">
          <MessageCircle className="h-5 w-5" />
          Campus Assistant
        </CardTitle>
      </CardHeader>
      
      <CardContent className="flex-1 flex flex-col p-0">
        <ScrollArea className="flex-1 p-4">
          <div className="space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex items-start gap-3 ${
                  message.type === 'user' ? 'flex-row-reverse' : 'flex-row'
                }`}
              >
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    message.type === 'user' 
                      ? 'bg-primary text-primary-foreground' 
                      : 'bg-secondary text-secondary-foreground'
                  }`}
                >
                  {message.type === 'user' ? (
                    <User className="h-4 w-4" />
                  ) : (
                    <Bot className="h-4 w-4" />
                  )}
                </div>
                
                <div
                  className={`max-w-[70%] rounded-lg p-3 ${
                    message.type === 'user'
                      ? 'bg-primary text-primary-foreground ml-auto'
                      : 'bg-muted'
                  }`}
                >
                  <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                  {message.data && renderDataCards(message.data)}
                  <p className="text-xs opacity-70 mt-2">
                    {message.timestamp.toLocaleTimeString()}
                  </p>
                </div>
              </div>
            ))}
            
            {isLoading && (
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center">
                  <Bot className="h-4 w-4" />
                </div>
                <div className="bg-muted rounded-lg p-3">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                    <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div ref={messagesEndRef} />
        </ScrollArea>

        {/* Quick Actions */}
        <div className="p-3 border-t bg-muted/30">
          <p className="text-xs text-muted-foreground mb-2">Quick Actions:</p>
          <div className="flex flex-wrap gap-2">
            {quickActions.map((action) => (
              <Button
                key={action.label}
                variant="outline"
                size="sm"
                className="text-xs h-8"
                onClick={() => setInput(action.query)}
              >
                <action.icon className="h-3 w-3 mr-1" />
                {action.label}
              </Button>
            ))}
          </div>
        </div>

        {/* Input Area */}
        <div className="p-4 border-t">
          <div className="flex gap-2">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask me about schedules, facilities, dining, library, or admin procedures..."
              disabled={isLoading}
              className="flex-1"
            />
            <Button 
              onClick={handleSendMessage} 
              disabled={!input.trim() || isLoading}
              className="bg-primary hover:bg-primary-dark"
            >
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};