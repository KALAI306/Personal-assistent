import React, { useState, useEffect } from 'react';

export const WelcomeMessage = () => {
  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWelcome(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (!showWelcome) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/20 backdrop-blur-sm">
      <div className="glass-container rounded-3xl p-8 text-center animate-fade-in-scale">
        <div className="text-6xl mb-4">👋</div>
        <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Hello Kalai
        </h1>
        <p className="text-muted-foreground mt-2">MOMO is ready to assist you</p>
      </div>
    </div>
  );
};