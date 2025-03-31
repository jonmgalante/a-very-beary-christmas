
import React from "react";
import { ChristmasLights } from "@/components/ChristmasLights";
import { SnowflakeEffect } from "@/components/SnowflakeEffect";
import { Sidebar } from "@/components/Sidebar";
import { MusicPlayer } from "@/components/MusicPlayer";
import { AlbumContent } from "@/components/AlbumContent";
import { BlobService } from "@/lib/blob-service";
 
const Index: React.FC = () => {
  return (
    <div className="min-h-screen">
      <ChristmasLights />
      <SnowflakeEffect />
      
      <div className="relative flex flex-col md:flex-row">
        {/* Left Sidebar - Christmas Tree Image and Navigation */}
        <Sidebar />
        
        {/* Main Content */}
        <main className="flex-1 p-6 md:p-10 bg-white min-h-screen">
          <AlbumContent />
        </main>
      </div>
      
      {/* Audio Player */}
      <MusicPlayer 
        audioUrl={BlobService.getAssetUrl("christmas-music.mp3")}
        title="Christmas Music"
      />
    </div>
  );
};

export default Index;
