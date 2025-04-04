
import React from "react";
import { Share } from "lucide-react";
import { TrackList } from "@/components/TrackList";

export const AlbumContent: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-[40px] font-kaushan text-[#495C65] mb-10">Album</h2>
      
      <div className="flex flex-col md:flex-row gap-6 mb-8 items-center md:items-start">
  {/* Album Cover */}
  <div className="w-full max-w-xs md:max-w-[16rem] md:w-56 lg:w-64">
    <img 
      src="https://firebasestorage.googleapis.com/v0/b/a-very-beary-christmas-d4a4c.firebasestorage.app/o/images%2FHome_Album%20Cover.jpg?alt=media&token=c0783e05-8973-4ad1-8bd3-f0329441ce88" 
      alt="Christmas Tree" 
      className="w-full h-auto rounded-md shadow-md"
    />
  </div>
  
  {/* Album Info */}
  <div className="text-center md:text-left md:ml-4">
    <h3 className="text-[19px] font-sans text-[#495C65] mb-1 uppercase tracking-wide">
      A VERY BEARY CHRISTMAS
    </h3>
    <p className="text-lg text-gray-500 mb-4">Jon Galante</p>
    <p className="mt-2 text-gray-600">
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
