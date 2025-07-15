'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

// Global Custom Cursor Component
export const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isHoveringButton, setIsHoveringButton] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      // Check if hovering over the "Go to Portfolio" button on landing page
      const target = e.target as Element;
      if (pathname === '/' && target?.closest('a[href="/portfolio"]')) {
        setIsHoveringButton(true);
      } else {
        setIsHoveringButton(false);
      }
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    // Set cursor to none on document body for global effect
    document.body.style.cursor = 'none';
    
    document.addEventListener('mousemove', updateMousePosition);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);

    // Show cursor immediately on mount
    setIsVisible(true);

    return () => {
      document.removeEventListener('mousemove', updateMousePosition);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      // Reset cursor when component unmounts
      document.body.style.cursor = 'auto';
    };
  }, [pathname]);

  // Determine cursor color based on page and hover state
  const getCursorColor = () => {
    if (pathname === '/') {
      return isHoveringButton ? 'white' : '#000000'; // Dark black for landing page
    }
    return 'white'; // Portfolio page uses white
  };

  return (
    <div
      className={`fixed top-0 left-0 pointer-events-none z-50 transition-opacity duration-100 ${
        isVisible ? 'opacity-60' : 'opacity-0'
      }`}
      style={{
        transform: `translate(${mousePosition.x - 8}px, ${mousePosition.y - 8}px)`
      }}
    >
      {/* Thin ring */}
      <div 
        className="w-4 h-4 rounded-full border transition-colors duration-150"
        style={{
          borderWidth: '2px',
          borderColor: getCursorColor(),
          mixBlendMode: pathname === '/' ? 'normal' : 'difference'
        }}
      />
    </div>
  );
};