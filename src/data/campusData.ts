// Campus data structure for the smart assistant
export interface Schedule {
  id: string;
  title: string;
  time: string;
  location: string;
  type: 'class' | 'event' | 'meeting';
  description?: string;
}

export interface Facility {
  id: string;
  name: string;
  type: 'academic' | 'recreational' | 'administrative' | 'dining' | 'library';
  location: string;
  hours: string;
  contact: string;
  description: string;
  amenities: string[];
}

export interface DiningOption {
  id: string;
  name: string;
  location: string;
  hours: string;
  type: 'cafeteria' | 'restaurant' | 'cafe' | 'food_truck';
  menu?: string[];
  pricing: 'budget' | 'moderate' | 'premium';
}

export interface LibraryService {
  id: string;
  name: string;
  description: string;
  location: string;
  hours: string;
  resources: string[];
  contact: string;
}

export interface AdminProcedure {
  id: string;
  title: string;
  department: string;
  description: string;
  requirements: string[];
  steps: string[];
  timeline: string;
  contact: string;
}

// Mock campus data
export const schedules: Schedule[] = [
  {
    id: '1',
    title: 'Computer Science 101',
    time: '9:00 AM - 10:30 AM',
    location: 'Engineering Building, Room 201',
    type: 'class',
    description: 'Introduction to Programming'
  },
  {
    id: '2',
    title: 'Student Council Meeting',
    time: '2:00 PM - 3:30 PM',
    location: 'Student Union, Conference Room A',
    type: 'meeting'
  },
  {
    id: '3',
    title: 'Campus Job Fair',
    time: '10:00 AM - 4:00 PM',
    location: 'Main Auditorium',
    type: 'event',
    description: 'Meet potential employers and explore career opportunities'
  }
];

export const facilities: Facility[] = [
  {
    id: '1',
    name: 'Central Library',
    type: 'library',
    location: 'Campus Center',
    hours: 'Mon-Thu: 7AM-12AM, Fri: 7AM-9PM, Sat-Sun: 9AM-12AM',
    contact: '(555) 123-4567',
    description: 'Main campus library with extensive collections and study spaces',
    amenities: ['Study rooms', 'Computer lab', 'Printing services', '24/7 study area', 'Research assistance']
  },
  {
    id: '2',
    name: 'Recreation Center',
    type: 'recreational',
    location: 'North Campus',
    hours: 'Mon-Fri: 6AM-11PM, Sat-Sun: 8AM-10PM',
    contact: '(555) 234-5678',
    description: 'State-of-the-art fitness and recreational facility',
    amenities: ['Gym equipment', 'Swimming pool', 'Basketball courts', 'Yoga studio', 'Personal training']
  },
  {
    id: '3',
    name: 'Student Health Center',
    type: 'administrative',
    location: 'South Campus',
    hours: 'Mon-Fri: 8AM-6PM, Emergency: 24/7',
    contact: '(555) 345-6789',
    description: 'Comprehensive healthcare services for students',
    amenities: ['Medical care', 'Mental health services', 'Pharmacy', 'Health education', 'Emergency services']
  }
];

export const diningOptions: DiningOption[] = [
  {
    id: '1',
    name: 'Main Dining Hall',
    location: 'Campus Center, Ground Floor',
    hours: 'Breakfast: 7-10AM, Lunch: 11AM-3PM, Dinner: 5-9PM',
    type: 'cafeteria',
    menu: ['International cuisine', 'Vegetarian options', 'Grill station', 'Salad bar', 'Pizza'],
    pricing: 'budget'
  },
  {
    id: '2',
    name: 'Campus Café',
    location: 'Library Building, First Floor',
    hours: 'Mon-Fri: 7AM-8PM, Sat-Sun: 9AM-6PM',
    type: 'cafe',
    menu: ['Coffee drinks', 'Sandwiches', 'Pastries', 'Light meals', 'Study snacks'],
    pricing: 'moderate'
  },
  {
    id: '3',
    name: 'Food Truck Plaza',
    location: 'Quad Area',
    hours: 'Mon-Fri: 11AM-3PM',
    type: 'food_truck',
    menu: ['Tacos', 'Burgers', 'Asian fusion', 'Healthy bowls', 'Desserts'],
    pricing: 'moderate'
  }
];

export const libraryServices: LibraryService[] = [
  {
    id: '1',
    name: 'Research Assistance',
    description: 'Get help with academic research and finding resources',
    location: 'Central Library, Reference Desk',
    hours: 'Mon-Fri: 9AM-6PM',
    resources: ['Database access', 'Citation help', 'Research consultations', 'Subject guides'],
    contact: 'research@university.edu'
  },
  {
    id: '2',
    name: 'Study Spaces',
    description: 'Various study environments for different learning needs',
    location: 'Central Library, All Floors',
    hours: '24/7 (with student ID)',
    resources: ['Individual study carrels', 'Group study rooms', 'Silent study areas', 'Collaborative spaces'],
    contact: 'circulation@university.edu'
  },
  {
    id: '3',
    name: 'Technology Services',
    description: 'Access to computers, printing, and digital resources',
    location: 'Central Library, Computer Lab',
    hours: 'Mon-Thu: 7AM-12AM, Fri: 7AM-9PM, Sat-Sun: 9AM-12AM',
    resources: ['Computer access', 'Printing/scanning', 'Software tutorials', 'Tech support'],
    contact: 'tech@university.edu'
  }
];

export const adminProcedures: AdminProcedure[] = [
  {
    id: '1',
    title: 'Course Registration',
    department: 'Registrar',
    description: 'Register for classes for the upcoming semester',
    requirements: ['Student ID', 'Academic standing in good order', 'Advisor approval (if required)'],
    steps: [
      'Log into student portal',
      'Navigate to registration section',
      'Search for available courses',
      'Add courses to your schedule',
      'Confirm registration and pay fees'
    ],
    timeline: '2-3 weeks before semester start',
    contact: 'registrar@university.edu'
  },
  {
    id: '2',
    title: 'Transcript Request',
    department: 'Registrar',
    description: 'Request official academic transcripts',
    requirements: ['Student ID', 'Photo identification', 'Transcript request form'],
    steps: [
      'Complete transcript request form',
      'Provide recipient information',
      'Pay processing fee',
      'Submit form to Registrar Office',
      'Wait for processing (3-5 business days)'
    ],
    timeline: '3-5 business days',
    contact: 'transcripts@university.edu'
  },
  {
    id: '3',
    title: 'Financial Aid Application',
    department: 'Financial Aid',
    description: 'Apply for financial assistance programs',
    requirements: ['FAFSA completion', 'Tax documents', 'Bank statements', 'Student ID'],
    steps: [
      'Complete FAFSA online',
      'Gather required documents',
      'Submit application to Financial Aid Office',
      'Attend financial aid interview (if required)',
      'Review and accept aid package'
    ],
    timeline: '4-6 weeks',
    contact: 'finaid@university.edu'
  }
];

// AI Response templates for common queries
export const aiResponses = {
  greeting: [
    "Hello! I'm your campus assistant. How can I help you today?",
    "Hi there! What campus information can I help you find?",
    "Welcome! I'm here to help with schedules, facilities, dining, and more. What do you need?"
  ],
  
  schedules: [
    "I can help you find information about class schedules, campus events, and meetings. What specific schedule are you looking for?",
    "Here are some upcoming events and schedules on campus:"
  ],
  
  facilities: [
    "Our campus has many facilities including the library, recreation center, and health services. Which facility would you like to know more about?",
    "I can provide information about campus facilities, their hours, and amenities. What are you looking for?"
  ],
  
  dining: [
    "We have several dining options on campus including the main dining hall, campus café, and food trucks. Would you like to see the menus or hours?",
    "Here are our current dining options and their hours:"
  ],
  
  library: [
    "The library offers research assistance, study spaces, and technology services. What library service do you need help with?",
    "Our library has extensive resources and services available. Here's what I can help you find:"
  ],
  
  admin: [
    "I can help with administrative procedures like registration, transcripts, and financial aid. What process do you need help with?",
    "Here are some common administrative procedures and how to complete them:"
  ],
  
  fallback: [
    "I'm not sure about that specific question, but I can help with schedules, facilities, dining, library services, and administrative procedures. Could you rephrase your question?",
    "Let me help you find the right information. I can assist with campus schedules, facilities, dining options, library services, and administrative procedures."
  ]
};