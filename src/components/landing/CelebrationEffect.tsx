'use client';

import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface EmojiStyle {
  '--start-x': string;
  '--start-y': string;
  '--end-y': string;
  '--delay': string;
  '--duration': string;
  '--rotation-start': string;
  '--rotation-end': string;
  left: string;
}

export default function CelebrationEffect() {
  const [visible, setVisible] = useState(false);
  const [styles, setStyles] = useState<EmojiStyle[]>([]);

  const emojis = ['🎉', '🎊', '🎈', '🥳', '✨', '🪅', '🎊', '🎉', '🎈', '🥳', '✨', '🪅', '🎉', '🎊', '🎈', '🎉', '🎊', '🎈', '🥳', '✨', '🪅', '🎊', '🎉', '🎈', '🥳', '✨', '🪅', '🎉', '🎊', '🎈', '🎉', '🎊', '🎈', '🥳', '✨', '🪅', '🎊', '🎉', '🎈', '🥳', '✨', '🪅', '🎉', '🎊', '🎈', '🎉', '🎊', '🎈', '🥳', '✨', '🪅', '🎊', '🎉', '🎈', '🥳', '✨', '🪅'];

  useEffect(() => {
    setVisible(true);
    const timer = setTimeout(() => {
      setVisible(false);
    }, 5000); // Disappear after 5 seconds

    // Generate styles only on the client-side
    setStyles(emojis.map(() => ({
      '--start-x': `${Math.random() * 100}vw`,
      '--start-y': `${-20 - Math.random() * 30}vh`,
      '--end-y': '120vh',
      '--delay': `${Math.random() * 4}s`,
      '--duration': `${2 + Math.random() * 3}s`,
      '--rotation-start': `${Math.random() * 540 - 270}deg`,
      '--rotation-end': `${Math.random() * 540 - 270}deg`,
      left: 'var(--start-x)',
    })));
    
    return () => clearTimeout(timer);
  }, []);

  if (styles.length === 0) {
    return null; // Don't render on the server or before styles are generated
  }

  return (
    <div
      className={cn(
        'pointer-events-none fixed inset-0 z-[9999] transition-opacity duration-1000',
        visible ? 'opacity-100' : 'opacity-0'
      )}
      aria-hidden="true"
    >
      {emojis.map((emoji, i) => (
        <span
          key={i}
          className="absolute text-2xl animate-fall"
          style={styles[i] as React.CSSProperties}
        >
          {emoji}
        </span>
      ))}
    </div>
  );
}
