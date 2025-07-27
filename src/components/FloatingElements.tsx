import React from 'react';

export const FloatingElements = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-[1]">
      {/* Floating orbs */}
      <div
        className="floating-orb w-20 h-20 top-[10%] left-[10%]"
        style={{
          background: 'linear-gradient(135deg, hsl(var(--primary-glow)) 0%, hsl(var(--accent-glow)) 100%)',
          animationDelay: '0s'
        }}
      />
      <div
        className="floating-orb w-14 h-14 top-[60%] right-[15%]"
        style={{
          background: 'linear-gradient(135deg, hsl(var(--secondary-glow)) 0%, hsl(var(--primary-glow)) 100%)',
          animationDelay: '2s'
        }}
      />
      <div
        className="floating-orb w-10 h-10 top-[30%] right-[30%]"
        style={{
          background: 'linear-gradient(135deg, hsl(var(--accent-glow)) 0%, hsl(var(--secondary-glow)) 100%)',
          animationDelay: '4s'
        }}
      />
      <div
        className="floating-orb w-8 h-8 bottom-[20%] left-[20%]"
        style={{
          background: 'linear-gradient(135deg, hsl(var(--primary-glow)) 0%, hsl(var(--secondary-glow)) 100%)',
          animationDelay: '1s'
        }}
      />

      {/* Floating rings */}
      <div
        className="floating-ring w-32 h-32 top-[20%] right-[20%]"
        style={{
          borderColor: 'hsl(var(--primary-glow))',
          animationDelay: '0s'
        }}
      />
      <div
        className="floating-ring w-24 h-24 bottom-[30%] left-[25%]"
        style={{
          borderColor: 'hsl(var(--accent-glow))',
          animationDelay: '10s'
        }}
      />
      <div
        className="floating-ring w-16 h-16 top-[50%] left-[5%]"
        style={{
          borderColor: 'hsl(var(--secondary-glow))',
          animationDelay: '5s'
        }}
      />
    </div>
  );
};