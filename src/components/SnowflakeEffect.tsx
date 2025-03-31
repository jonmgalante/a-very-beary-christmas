
import React, { useEffect, useState } from 'react';

interface Snowflake {
  id: number;
  left: string;
  animationDuration: string;
  opacity: string;
  fontSize: string;
}

export const SnowflakeEffect: React.FC = () => {
  const [snowflakes, setSnowflakes] = useState<Snowflake[]>([]);
  
  useEffect(() => {
    const generateSnowflakes = () => {
      const flakes: Snowflake[] = [];
      const snowflakeCharacters = ['❄', '❅', '❆', '✻', '✼', '❋', '*'];
      
      for (let i = 0; i < 50; i++) {
        flakes.push({
          id: i,
          left: `${Math.random() * 100}%`,
          animationDuration: `${Math.random() * 10 + 5}s`,
          opacity: `${Math.random() * 0.7 + 0.3}`,
          fontSize: `${Math.random() * 15 + 10}px`
        });
      }
      
      setSnowflakes(flakes);
    };
    
    generateSnowflakes();
  }, []);
  
  return (
    <>
      {snowflakes.map((flake) => (
        <div
          key={flake.id}
          className="snowflake animate-snow-fall"
          style={{
            left: flake.left,
            animationDuration: flake.animationDuration,
            opacity: flake.opacity,
            fontSize: flake.fontSize
          }}
        >
          ❄
        </div>
      ))}
    </>
  );
};
