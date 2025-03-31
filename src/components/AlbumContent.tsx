import React from "react";
import { Share } from "lucide-react";
import { TrackList } from "@/components/TrackList";

export const AlbumContent: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-[19px] font-sans text-[#495C65] uppercase tracking-wide mb-10">
        A VERY BEARY CHRISTMAS
      </h2>
      
      <div className="flex flex-col md:flex-row gap-6 mb-8">
        {/* Album Cover */}
        <div className="w-full md:w-48 lg:w-56">
          <img 
            src="/lovable-uploads/3265e882-accd-4bbb-936d-b2f7a21dfcf6.png" 
            alt="Christmas Tree" 
            className="w-full h-auto rounded-md shadow-md"
          />
        </div>
        
        {/* Album Info */}
        <div className="flex flex-col">
          <h3 className="text-xl text-gray-600 mb-1">A VERY BEARY CHRISTMAS</h3>
          <p className="text-lg text-gray-500 mb-4">Jon Galante</p>
          
          <button className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors w-fit">
            <Share size={18} />
            <span className="uppercase font-medium">Share</span>
          </button>
          
          <p className="mt-6 text-gray-600">
            A few of our holiday favorites, plus a bonus track! I love you :)
          </p>
        </div>
      </div>
      
      {/* Track List */}
      <div className="mt-8">
        <TrackList />
      </div>
    </div>
  );
};
