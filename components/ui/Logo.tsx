import React from 'react';

export const Logo: React.FC<{ className?: string }> = ({ className = "w-8 h-8" }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <defs>
      <linearGradient id="trinityGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#3b82f6" /> {/* Electric Blue */}
        <stop offset="100%" stopColor="#06b6d4" /> {/* Cyan */}
      </linearGradient>
      {/* Mask to create transparent gaps between segments */}
      <mask id="gapMask">
        <rect width="100" height="100" fill="white" />
        <g stroke="black" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none">
           <path d="M50 5 L16 65 L36 65 L50 40 L67 35 Z" />
           <path d="M67 35 L95 85 L75 85 L64 65 L50 40 Z" />
           <path d="M75 85 L5 85 L16 65 L64 65 Z" />
        </g>
      </mask>
    </defs>
    
    <g mask="url(#gapMask)">
        {/* Segment 1: Left-Up Leg */}
        <path 
            d="M50 5 L16 65 L36 65 L50 40 L67 35 Z" 
            fill="url(#trinityGradient)" 
        />
        
        {/* Segment 2: Right-Down Leg */}
        <path 
            d="M67 35 L95 85 L75 85 L64 65 L50 40 Z" 
            fill="url(#trinityGradient)" 
        />
        
        {/* Segment 3: Bottom Leg */}
        <path 
            d="M75 85 L5 85 L16 65 L64 65 Z" 
            fill="url(#trinityGradient)" 
        />
    </g>
  </svg>
);