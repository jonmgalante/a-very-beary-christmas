
import React from "react";
import { AudioPlayer } from "@/components/AudioPlayer";

interface MusicPlayerProps {
  audioUrl: string;
  title: string;
}

export const MusicPlayer: React.FC<MusicPlayerProps> = ({ audioUrl, title }) => {
  return (
    <AudioPlayer audioUrl={audioUrl} title={title} />
  );
};
