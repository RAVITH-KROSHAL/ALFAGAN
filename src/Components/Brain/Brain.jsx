import React, { useState, useEffect } from 'react';
import './Brain.css';
import brainImage from '../Assets/alfagan.png';

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    setMousePosition({ x: event.clientX, y: event.clientY });
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const imageOffset = 20; // Adjust this value to set the distance between the cursor and the image

  return (
    <div className="BrainContainer">
      <img
        className="BrainImage"
        src={brainImage}
        alt="A colorful brain diagram showing neural connections."
        style={{
          top: `${mousePosition.y - imageOffset}px`,
          left: `${mousePosition.x + imageOffset}px`,
        }}
      />
      
    </div>
  );
}

export default App;
