
import React from "react";
import { Link } from "react-router-dom";

export const Sidebar: React.FC = () => {
  return (
    <div className="relative w-full md:w-[470px] h-screen overflow-hidden">
      <div 
        className="w-full h-full bg-cover bg-center" 
        style={{ 
          backgroundImage: "url('/lovable-uploads/3265e882-accd-4bbb-936d-b2f7a21dfcf6.png')" 
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-10 flex flex-col justify-between">
          {/* Title */}
          <div className="p-6 md:p-12">
            <h1 className="text-4xl md:text-6xl font-kaushan text-white drop-shadow-lg leading-tight">
              A Very Beary Christmas
            </h1>
          </div>
          
          {/* Navigation */}
          <nav className="p-8 md:p-12 mt-auto">
            <ul className="flex flex-col space-y-4">
              <li>
                <Link to="/" className="text-white text-xl md:text-2xl font-semibold hover:text-christmas-gold transition-colors">
                  HOME
                </Link>
              </li>
              <li>
                <Link to="/" className="text-white text-xl md:text-2xl font-semibold hover:text-christmas-gold transition-colors">
                  ALBUM
                </Link>
              </li>
              <li>
                <Link to="/" className="text-white text-xl md:text-2xl font-semibold hover:text-christmas-gold transition-colors">
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
