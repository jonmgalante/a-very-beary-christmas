
import React, { useState, useEffect } from "react";

interface SidebarProps {
  minimal?: boolean; // optional, still allows mobile-specific behavior
}

export const Sidebar: React.FC<SidebarProps> = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageUrl] = useState("https://firebasestorage.googleapis.com/v0/b/a-very-beary-christmas-d4a4c.firebasestorage.app/o/images%2FHome_Album%20Cover.jpg?alt=media&token=c0783e05-8973-4ad1-8bd3-f0329441ce88");

  useEffect(() => {
    const img = new Image();
    img.onload = () => setImageLoaded(true);
    img.onerror = () => {
      console.error("Failed to load sidebar image:", imageUrl);
      setImageLoaded(false);
    };
    img.src = imageUrl;
  }, [imageUrl]);

  return (
    <div className="relative w-full md:w-[470px] h-screen md:sticky top-0">
      {imageLoaded ? (
        <div 
          className="w-full h-full bg-center bg-cover bg-no-repeat" 
          style={{ backgroundImage: `url(${imageUrl})` }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-start justify-center p-6 md:p-12">
            <h1 className="text-[40px] font-kaushan text-white drop-shadow-lg leading-tight text-center">
              A Very Beary Christmas
            </h1>
          </div>
        </div>
      ) : (
        <div className="w-full h-full bg-gradient-to-b from-[#0f2027] via-[#203a43] to-[#2c5364] flex items-start justify-center p-6 md:p-12">
          <h1 className="text-[40px] font-kaushan text-white drop-shadow-lg leading-tight text-center">
            A Very Beary Christmas
          </h1>
        </div>
      )}
    </div>
  );
};