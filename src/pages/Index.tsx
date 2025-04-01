
import React from "react";
import { SnowflakeEffect } from "@/components/SnowflakeEffect";
import { Sidebar } from "@/components/Sidebar";
import { AlbumContent } from "@/components/AlbumContent";
import { PhotoAlbum } from "@/components/PhotoAlbum";
 
const Index: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <SnowflakeEffect />
      
      {/* Left Sidebar - Christmas Tree Image and Navigation */}
      <Sidebar />
      
      {/* Main Content - Scrollable independently */}
      <main className="flex-1 bg-white h-screen overflow-y-auto">
        <div className="p-6 md:p-10">
          <AlbumContent />
        </div>
        <PhotoAlbum />
      </main>
    </div>
  );
};

export default Index;
