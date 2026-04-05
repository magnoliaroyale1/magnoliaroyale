export interface User {
    uid: string;
    email: string;
    displayName: string;
    type: 'client' | 'clinic';
    photoURL?: string;
    createdAt: Date;
  }
  
  export interface Clinic {
    id: string;
    name: string;
    cnpj: string;
    email: string;
    phone: string;
    status: 'pending' | 'approved' | 'rejected';
    address: Address;
    procedures: string[];
    description: string;
    rating: number;
    reviewCount: number;
    verified: boolean;
    score: number;
    images: string[];
    plan: 'basic' | 'professional' | 'premium';
    userId: string;
  }
  
  export interface Address {
    street: string;
    number: string;
    city: string;
    state: string;
    zipCode: string;
    neighborhood: string;
  }
  
  export interface Review {
    id: string;
    clinicId: string;
    clientId: string;
    clientName: string;
    rating: number;
    comment: string;
    createdAt: Date;
    helpful: number;
  }
  
  export interface Appointment {
    id: string;
    clinicId: string;
    clientId: string;
    clientName: string;
    procedure: string;
    date: Date;
    time: string;
    status: 'pending' | 'confirmed' | 'cancelled' | 'completed';
    notes?: string;
  }
  
  export interface BlogPost {
    id: string;
    title: string;
    excerpt: string;
    content: string;
    image: string;
    author: string;
    category: string;
    createdAt: Date;
    readTime: number;
  }
  
  export interface Message {
    id: string;
    chatId: string;
    senderId: string;
    text: string;
    createdAt: Date;
    read: boolean;
  }
  
  export interface Chat {
    id: string;
    clientId: string;
    clinicId: string;
    clientName: string;
    clinicName: string;
    lastMessage?: string;
    lastMessageAt?: Date;
    unreadCount: number;
  }
  
  export interface Report {
    id: string;
    clinicId: string;
    reporterId: string;
    reason: string;
    description: string;
    createdAt: Date;
    status: 'open' | 'investigating' | 'resolved';
  }