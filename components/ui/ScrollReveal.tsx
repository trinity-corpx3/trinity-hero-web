import React, { useEffect, useRef, useState } from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  enableZoom?: boolean;
}

const isMobile = () => typeof window !== 'undefined' && window.innerWidth < 768;

const ScrollReveal: React.FC<ScrollRevealProps> = ({ children, className = '', delay = 0, enableZoom = false }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mobile = isMobile();
    const effectiveDelay = mobile ? Math.min(delay, 100) : delay;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), effectiveDelay);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
        rootMargin: mobile ? '0px 0px 0px 0px' : '0px 0px -50px 0px',
      }
    );

    if (ref.current) observer.observe(ref.current);
    return () => { if (ref.current) observer.unobserve(ref.current); };
  }, [delay]);

  const hiddenClasses = `opacity-0 translate-y-6 ${enableZoom ? 'scale-[0.97]' : ''}`;
  const visibleClasses = `opacity-100 translate-y-0 blur-0 ${enableZoom ? 'scale-100' : ''}`;

  return (
    <div
      ref={ref}
      className={`transition-all duration-[1000ms] ease-[cubic-bezier(0.16,1,0.3,1)] transform ${
        isVisible ? visibleClasses : `${hiddenClasses} blur-[2px]`
      } ${className}`}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;
