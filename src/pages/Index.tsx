import React from 'react';
import { ChatInterface } from '../components/ChatInterface';
import { FloatingElements } from '../components/FloatingElements';
import { WelcomeMessage } from '../components/WelcomeMessage';

const Index = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Floating background elements */}
      <FloatingElements />
      
      {/* Welcome animation */}
      <WelcomeMessage />
      
      {/* Main chat interface */}
      <div className="relative z-10 min-h-screen flex items-center justify-center p-4">
        <ChatInterface />
      </div>
    </div>
  );
};

export default Index;
