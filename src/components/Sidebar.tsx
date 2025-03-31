
import React from "react";
import { Link } from "react-router-dom";

export const Sidebar: React.FC = () => {
  return (
    <div className="relative w-full md:w-[470px] h-screen sticky top-0">
      <div 
        className="w-full h-full bg-cover bg-center" 
        style={{ 
          backgroundImage: "url('/lovable-uploads/3265e882-accd-4bbb-936d-b2f7a21dfcf6.png')" 
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-10 flex flex-col justify-between h-full">
          {/* Title */}
          <div className="p-6 md:p-12">
            <h1 className="text-4xl md:text-6xl font-kaushan text-white drop-shadow-lg leading-tight">
              A Very Beary Christmas
            </h1>
          </div>
          
          {/* Navigation - centered vertically and horizontally */}
          <nav className="flex-1 flex items-center justify-center">
            <ul className="flex flex-col items-center space-y-14">
              <li>
                <Link to="/" className="text-white text-6xl font-kaushan hover:text-christmas-gold transition-colors uppercase tracking-wider drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] relative">
                  HOME
                  <div className="absolute w-full h-[3px] bg-white bottom-0 left-0"></div>
                </Link>
              </li>
              <li>
                <Link to="/" className="text-white text-6xl font-kaushan hover:text-christmas-gold transition-colors uppercase tracking-wider drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                  ALBUM
                </Link>
              </li>
              <li>
                <Link to="/" className="text-white text-6xl font-kaushan hover:text-christmas-gold transition-colors uppercase tracking-wider drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                  PHOTOS
                </Link>
              </li>
            </ul>
          </nav>
          
          {/* Empty space at bottom to match the layout */}
          <div className="h-32"></div>
        </div>
      </div>
    </div>
  );
};
