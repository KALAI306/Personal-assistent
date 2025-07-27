import React, { useState, useRef, useEffect } from 'react';
import { ChatMessage } from './ChatMessage';
import { ChatInput } from './ChatInput';
import { TypingIndicator } from './TypingIndicator';
import { toast } from 'sonner';

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

export const ChatInterface = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const sendMessage = async (messageText: string) => {
    const userMessage: Message = {
      id: Date.now().toString(),
      text: messageText,
      isUser: true,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setIsTyping(true);

    try {
      const response = await fetch('https://kalais.app.n8n.cloud/webhook/3116ae93-98c5-401d-a23c-c33c3f818536', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: messageText,
          timestamp: new Date().toISOString(),
          user: 'Kalai',
        }),
      });

      if (!response.ok) {
        throw new Error('Webhook failed');
      }

      const data = await response.json();

      setTimeout(() => {
        const assistantMessage: Message = {
          id: (Date.now() + 1).toString(),
          text: data.response || data.message || "MOMO responded, but check your webhook format.",
          isUser: false,
          timestamp: new Date(),
        };

        setMessages(prev => [...prev, assistantMessage]);
        setIsTyping(false);
      }, 1000 + Math.random() * 1000);

    } catch (error) {
      console.error('Error sending message:', error);
      setTimeout(() => {
        const errorMessage: Message = {
          id: (Date.now() + 1).toString(),
          text: "⚠️ MOMO is having trouble connecting. Please check your webhook URL.",
          isUser: false,
          timestamp: new Date(),
        };

        setMessages(prev => [...prev, errorMessage]);
        setIsTyping(false);
        toast.error('MOMO failed to respond. See console.');
      }, 1000);
    }
  };

  return (
    <div className="glass-container w-full max-w-4xl mx-auto h-[80vh] flex flex-col relative z-10">
      {/* Header */}
      <div className="p-6 border-b border-glass-border">
        <div className="text-center">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            👋 Hi, I'm MOMO — Kalai's Personal Assistant
          </h1>
          <p className="text-muted-foreground mt-1">Ask me anything, I'm here to help!</p>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-6 space-y-4">
        {messages.length === 0 && (
          <div className="flex items-center justify-center h-full text-center">
            <div>
              <div className="text-6xl mb-4">🤖</div>
              <h3 className="text-xl font-semibold text-muted-foreground mb-2">
                Ready to chat!
              </h3>
              <p className="text-muted-foreground">Send me a message to get started</p>
            </div>
          </div>
        )}

        {messages.map((msg) => (
          <ChatMessage
            key={msg.id}
            message={msg.text}
            isUser={msg.isUser}
            timestamp={msg.timestamp}
          />
        ))}

        {isTyping && <TypingIndicator />}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="p-6 border-t border-glass-border">
        <ChatInput 
          onSendMessage={sendMessage}
          disabled={isTyping}
        />
      </div>
    </div>
  );
};
