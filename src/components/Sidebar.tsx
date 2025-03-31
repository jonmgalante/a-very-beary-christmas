
import React from "react";
import { Link } from "react-router-dom";

export const Sidebar: React.FC = () => {
  return (
    <div className="relative w-full md:w-[470px] h-screen sticky top-0">
      <div 
        className="w-full h-full bg-cover bg-center" 
        style={{ 
          backgroundImage: "url('/lovable-uploads/33ba8f56-6684-4014-a8b6-d6cfe526ba05.png')" 
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-10 flex flex-col justify-between h-full">
          {/* Title - now centered with exact font size from screenshot */}
          <div className="p-6 md:p-12 text-center">
            <h1 className="text-[40px] font-kaushan text-white drop-shadow-lg leading-tight inline-block">
              A Very Beary Christmas
            </h1>
          </div>
          
          {/* Navigation - at the bottom, updated to match the screenshot with Source Sans Pro font */}
          <nav className="pb-12">
            <ul className="flex flex-col items-center space-y-4">
              <li>
                <Link to="/" className="text-white text-[18px] font-sans hover:text-christmas-gold transition-colors uppercase tracking-wider drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                  HOME
                </Link>
              </li>
              <li>
                <Link to="/" className="text-white text-[18px] font-sans hover:text-christmas-gold transition-colors uppercase tracking-wider drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                  ALBUM
                </Link>
              </li>
              <li>
                <Link to="/" className="text-white text-[18px] font-sans hover:text-christmas-gold transition-colors uppercase tracking-wider drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
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
