
import React, { useState, useRef, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Volume2, VolumeX, Play, Pause } from 'lucide-react';

interface AudioPlayerProps {
  audioUrl: string;
  title: string;
}

export const AudioPlayer: React.FC<AudioPlayerProps> = ({ audioUrl, title }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(0.7);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play().catch(error => {
          console.error("Audio playback error:", error);
          setIsPlaying(false);
        });
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : volume;
    }
  }, [volume, isMuted]);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  return (
    <div className="fixed bottom-4 right-4 bg-white p-3 rounded-xl shadow-lg z-50 flex items-center space-x-2">
      <audio ref={audioRef} src={audioUrl} loop />
      
      <Button 
        onClick={togglePlay} 
        variant="outline" 
        size="icon" 
        className="bg-christmas-red hover:bg-christmas-green text-white"
      >
        {isPlaying ? <Pause size={16} /> : <Play size={16} />}
      </Button>
      
      <div className="text-sm font-medium mr-2 hidden md:block">
        {title}
      </div>

      <Button 
        onClick={toggleMute} 
        variant="outline" 
        size="icon"
        className="bg-transparent hover:bg-gray-100"
      >
        {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
      </Button>
      
      <input
        type="range"
        min="0"
        max="1"
        step="0.01"
        value={volume}
        disabled={isMuted}
        onChange={(e) => setVolume(parseFloat(e.target.value))}
        className="w-20 h-2"
      />
    </div>
  );
};
