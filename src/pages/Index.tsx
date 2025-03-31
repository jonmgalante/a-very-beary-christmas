
import React from 'react';
import { SnowflakeEffect } from '@/components/SnowflakeEffect';
import { AudioPlayer } from '@/components/AudioPlayer';
import { ChristmasLights } from '@/components/ChristmasLights';
import { useToast } from '@/components/ui/use-toast';

const Index = () => {
  const { toast } = useToast();
  
  // URL would be replaced with actual URL from Vercel Blob
  const audioUrl = "/christmas-music.mp3";
  
  React.useEffect(() => {
    // Welcome toast
    toast({
      title: "Welcome to A Beary Christmas!",
      description: "Click the play button for some festive music.",
      duration: 5000,
    });
  }, [toast]);

  return (
    <div className="flex flex-col min-h-screen w-full overflow-x-hidden relative">
      <SnowflakeEffect />
      
      {/* Top lights */}
      <ChristmasLights />
      
      <main className="flex-1 flex flex-col items-center justify-center py-12 px-4">
        <div className="max-w-4xl w-full mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-kaushan text-christmas-red mb-8 christmas-title">
            A Very Beary Christmas
          </h1>
          
          <div className="relative mb-8">
            <img 
              src="/lovable-uploads/532483d9-4299-413c-b2ac-6f0900f04465.png" 
              alt="Christmas Bear" 
              className="mx-auto rounded-lg max-w-full h-auto shadow-xl"
            />
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
            <h2 className="text-3xl font-kaushan text-christmas-green mb-4">
              Happy Holidays!
            </h2>
            
            <p className="text-lg mb-6">
              Welcome to our beary special Christmas celebration! Enjoy the festive music, 
              the beautiful snow, and all the Christmas joy. 
            </p>
            
            <p className="text-lg mb-6">
              From our family to yours, we wish you a Merry Christmas and a Happy New Year!
            </p>
            
            <p className="text-xl font-kaushan text-christmas-red">
              With love, The Bear Family
            </p>
          </div>
        </div>
      </main>
      
      {/* Bottom lights */}
      <ChristmasLights />
      
      <footer className="py-6 text-center bg-christmas-dark text-white">
        <p>© {new Date().getFullYear()} A Very Beary Christmas</p>
        <p className="text-sm mt-1">All Rights Reserved</p>
      </footer>
      
      <AudioPlayer 
        audioUrl={audioUrl} 
        title="Christmas Music"
      />
    </div>
  );
};

export default Index;
