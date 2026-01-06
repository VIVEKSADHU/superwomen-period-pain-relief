
'use client';

import { useEffect, useState, type RefObject } from 'react';

const EMOJIS = ['🎉', '🎊', '🎈', '🥳', '✨', '🪅'];
const PARTICLE_COUNT = 50;
const DURATION = 5000; // 5 seconds

type Particle = {
  id: number;
  emoji: string;
  style: React.CSSProperties;
};

export default function CelebrationEffect({ originRef }: { originRef: RefObject<HTMLElement> }) {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (!originRef.current) return;

    const rect = originRef.current.getBoundingClientRect();
    const originX = rect.left + rect.width / 2;
    const originY = rect.top + rect.height / 2;

    const generatedParticles: Particle[] = Array.from({ length: PARTICLE_COUNT }).map((_, i) => {
      return {
        id: i,
        emoji: EMOJIS[i % EMOJIS.length],
        style: {
          position: 'fixed',
          left: `${originX}px`,
          top: `${originY}px`,
          fontSize: `${14 + Math.random() * 12}px`,
          transform: `translate(-50%, -50%)`,
          opacity: 0,
          transition: `transform 1s cubic-bezier(0.1, 0.9, 0.2, 1.2), opacity 1s ease-out`,
          willChange: 'transform, opacity',
        },
      };
    });
    
    // We need to set the initial particles, then trigger the animation in a separate effect
    setParticles(generatedParticles);

    // This timer will hide and clean up the component after the animation duration
    const mainTimer = setTimeout(() => {
        setIsVisible(false);
    }, DURATION);

    return () => {
      clearTimeout(mainTimer);
    };

  }, [originRef]);

  useEffect(() => {
    if (particles.length === 0) return;

    // This timeout forces a reflow, allowing the initial state to be set before transitioning
    const animationTimer = setTimeout(() => {
      setParticles(currentParticles =>
        currentParticles.map(p => {
          // Calculate end properties for transition
          const angle = Math.random() * Math.PI * 2;
          const velocity = 100 + Math.random() * 250; // Spread radius
          const endX = Math.cos(angle) * velocity;
          const endY = Math.sin(angle) * velocity;
          const scale = 0; // Final scale
          const duration = 0.8 + Math.random() * 0.4;
          const delay = Math.random() * 0.2;

          return {
            ...p,
            style: {
              ...p.style,
              transition: `transform ${duration}s cubic-bezier(0.1, 0.9, 0.2, 1.2), opacity ${duration}s ease-out`,
              transitionDelay: `${delay}s`,
              transform: `translate(-50%, -50%) translate(${endX}px, ${endY}px) scale(${scale})`,
              opacity: 1,
            },
          };
        })
      );
    }, 50); // A small delay is crucial here to allow initial state to render

    return () => clearTimeout(animationTimer);
  }, [particles.length > 0]);


  if (!isVisible) {
    return null;
  }

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[200]"
      aria-hidden="true"
    >
      {particles.map(({ id, emoji, style }) => (
        <span key={id} style={style}>
          {emoji}
        </span>
      ))}
    </div>
  );
}
