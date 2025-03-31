
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
          
          {/* Navigation - positioned at the bottom with more space */}
          <nav className="p-8 pb-28 md:pb-40 mt-auto flex justify-center">
            <ul className="flex flex-col items-center space-y-8">
              <li>
                <Link to="/" className="text-white text-5xl font-kaushan hover:text-christmas-gold transition-colors drop-shadow-md">
                  HOME
                </Link>
              </li>
              <li>
                <Link to="/" className="text-white text-5xl font-kaushan hover:text-christmas-gold transition-colors drop-shadow-md">
                  ALBUM
                </Link>
              </li>
              <li>
                <Link to="/" className="text-white text-5xl font-kaushan hover:text-christmas-gold transition-colors drop-shadow-md">
                  PHOTOS
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};
