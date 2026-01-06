'use client';

import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

export default function CelebrationEffect() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 5000); // Disappear after 5 seconds

    return () => clearTimeout(timer);
  }, []);

  // More emojis for a fuller effect
  const emojis = ['🎉', '🎊', '🎈', '🥳', '✨', '🪅', '🎊', '🎉', '🎈', '🥳', '✨', '🪅', '🎉', '🎊', '🎈'];

  return (
    <div
      className={cn(
        'pointer-events-none fixed inset-0 z-[200] transition-opacity duration-1000',
        visible ? 'opacity-100' : 'opacity-0'
      )}
      aria-hidden="true"
    >
      {emojis.map((emoji, i) => (
        <span
          key={i}
          className="absolute text-2xl animate-fall"
          style={
            {
              '--start-x': `${Math.random() * 100}vw`,
              '--start-y': `${-20 - Math.random() * 30}vh`,
              '--end-y': '120vh',
              '--delay': `${Math.random() * 4}s`,
              '--duration': `${2 + Math.random() * 3}s`,
              '--rotation-start': `${Math.random() * 540 - 270}deg`,
              '--rotation-end': `${Math.random() * 540 - 270}deg`,
              left: 'var(--start-x)',
            } as React.CSSProperties
          }
        >
          {emoji}
        </span>
      ))}
    </div>
  );
}
