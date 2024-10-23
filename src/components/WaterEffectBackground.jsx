"use client"
import React, { useEffect, useState } from 'react'

// Function to create a new bubble with random properties
const createBubble = () => ({
  id: Math.random(),
  top: `${Math.random() * 100}%`, // Random vertical position
  left: `${Math.random() * 100}%`, // Random horizontal position
  size: `${Math.random() * 10 + 6}px`, // Random size (5px - 20px)
  animationDuration: `${Math.random() * 3 + 10}s`, // Animation duration (10s - 20s)
  opacity: Math.random() * 0.2 + 0.8, // Random opacity (0.8 - 1)
});

const WaterEffectBackground = () => {
  const [bubbles, setBubbles] = useState([]);

  useEffect(() => {
    const addBubblePeriodically = () => {
       // Limit to 10 bubbles at a time
        const newBubble = createBubble();
        setBubbles(currBubbles => [...currBubbles.slice(-5), newBubble]);
      
    }

    const interval = setInterval(addBubblePeriodically, 2000); // Create a new bubble every 2 seconds

    return () => {
      clearInterval(interval);
    }
  }, [bubbles]); // Dependency array includes bubbles to manage count

  return (
    <div className='fixed top-0 left-0 w-full h-full -z-10 overflow-hidden'>
      {bubbles.map((bubble) => (
        <div key={bubble.id}
          className='absolute rounded-full bubble-shiny'
          style={{
            top: bubble.top,
            left: bubble.left,
            width: bubble.size,
            height: bubble.size,
            opacity: bubble.opacity,
            animation: `bubbleMove ${bubble.animationDuration} ease-in infinite`,
          }}>
        </div>
      ))}
    </div>
  )
}

export default WaterEffectBackground;
