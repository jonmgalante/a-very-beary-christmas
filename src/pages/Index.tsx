
import React from "react";
import { SnowflakeEffect } from "@/components/SnowflakeEffect";
import { Sidebar } from "@/components/Sidebar";
import { AlbumContent } from "@/components/AlbumContent";
import { PhotoAlbum } from "@/components/PhotoAlbum";
 
const Index: React.FC = () => {
  return (
    <div className="min-h-screen">
      <SnowflakeEffect />
      
      <div className="relative flex flex-col md:flex-row">
        {/* Left Sidebar - Christmas Tree Image and Navigation */}
        <Sidebar />
        
        {/* Main Content */}
        <main className="flex-1 p-6 md:p-10 bg-white min-h-screen">
          <AlbumContent />
          <PhotoAlbum />
        </main>
      </div>
    </div>
  );
};

export default Index;
