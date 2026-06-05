import React, { useEffect, useRef } from 'react';
import './MouseFollower.css';

const MouseFollower = () => {
  const followerRef = useRef(null);
  const positionRef = useRef({ x: 0, y: 0 });
  const targetRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      targetRef.current = {
        x: e.clientX,
        y: e.clientY,
      };
    };

    const animateFollower = () => {
      const follower = followerRef.current;
      if (!follower) return;

      // Smooth interpolation (easing)
      positionRef.current.x += (targetRef.current.x - positionRef.current.x) * 0.15;
      positionRef.current.y += (targetRef.current.y - positionRef.current.y) * 0.15;

      follower.style.left = `${positionRef.current.x}px`;
      follower.style.top = `${positionRef.current.y}px`;

      requestAnimationFrame(animateFollower);
    };

    window.addEventListener('mousemove', handleMouseMove);
    animateFollower();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return <div ref={followerRef} className="mouse-follower" />;
};

export default MouseFollower;
