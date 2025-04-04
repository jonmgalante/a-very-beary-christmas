
import React from "react";
import { SnowflakeEffect } from "@/components/SnowflakeEffect";
import { Sidebar } from "@/components/Sidebar";
import { AlbumContent } from "@/components/AlbumContent";
import { PhotoAlbum } from "@/components/PhotoAlbum";
 
const Index: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <SnowflakeEffect />

      {/* Mobile Layout */}
      <div className="flex flex-col md:hidden">
        {/* Tree image only (no nav) */}
        <Sidebar minimal />

        {/* Stacked content */}
        <main className="p-4 space-y-10">
          <AlbumContent />
          <PhotoAlbum />
        </main>
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:flex md:flex-row min-h-screen">
        <Sidebar /> {/* Full sidebar with nav */}
        <main className="flex-1 h-screen overflow-y-auto p-10">
          <AlbumContent />
          <PhotoAlbum />
        </main>
      </div>
    </div>
  );
};

export default Index;
