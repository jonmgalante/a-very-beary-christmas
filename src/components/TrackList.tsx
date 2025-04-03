
import React, { useState } from "react";
import { Play, SkipBack, SkipForward } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

export const TrackList: React.FC = () => {
  const [selectedTrack, setSelectedTrack] = useState(0);

  const tracks = [
    { id: 1, title: "It's Beginning To Look A Lot Like Christmas", duration: "3:25", url: "https://firebasestorage.googleapis.com/v0/b/a-very-beary-christmas-d4a4c.firebasestorage.app/o/audio%2FIt's%20Beginning%20To%20Look%20A%20Lot%20Like%20Christmas.wav?alt=media&token=7c260197-4edb-4978-b7a2-144092613bb5"},
    { id: 2, title: "The Christmas Song", duration: "3:22", url: "https://firebasestorage.googleapis.com/v0/b/a-very-beary-christmas-d4a4c.firebasestorage.app/o/audio%2FThe%20Christmas%20Song.wav?alt=media&token=a27623cf-c2c5-47c7-9c5b-664068bb788d"},
    { id: 3, title: "It's the Most Wonderful Time of the Year", duration: "2:32", url: "https://firebasestorage.googleapis.com/v0/b/a-very-beary-christmas-d4a4c.firebasestorage.app/o/audio%2FIt's%20the%20Most%20Wonderful%20Time%20of%20the%20Year.wav?alt=media&token=88106209-b11f-449c-aebc-d6b0440201ef"},
    { id: 4, title: "Holly Jolly Christmas", duration: "2:00", url: "https://firebasestorage.googleapis.com/v0/b/a-very-beary-christmas-d4a4c.firebasestorage.app/o/audio%2FHolly%20Jolly%20Christmas.wav?alt=media&token=bcfeaa9e-07ab-4631-a754-641d79e29f02"},
    { id: 5, title: "Jingle Bells", duration: "2:00", url: "https://firebasestorage.googleapis.com/v0/b/a-very-beary-christmas-d4a4c.firebasestorage.app/o/audio%2FJingle%20Bells.wav?alt=media&token=3038356f-54a6-4fcd-b05d-35f67c42a335"},
    { id: 6, title: "Let It Snow! Let It Snow! Let It Snow!", duration: "1:55", url: "https://firebasestorage.googleapis.com/v0/b/a-very-beary-christmas-d4a4c.firebasestorage.app/o/audio%2FLet%20It%20Snow!%20Let%20It%20Snow!%20Let%20It%20Snow!.wav?alt=media&token=bcaa56f3-6b50-4cc8-9356-04f9277700b8"},
    { id: 7, title: "All of Me", duration: "4:29", url: "https://firebasestorage.googleapis.com/v0/b/a-very-beary-christmas-d4a4c.firebasestorage.app/o/audio%2FAll%20of%20Me.wav?alt=media&token=6fadca2f-3a4e-4b49-a4a0-7499414bc64d"},
  ];

  return (
    <div>
      {/* Audio Element (native controls temporarily styled to match page) */}
      <audio
        id="audio-player"
        src={tracks[selectedTrack].url}
        controls
        autoPlay
        className="w-full mb-4 rounded shadow border border-gray-200 bg-gray-50"
      />
      
      {/* Player Controls */}
      <div className="flex items-center justify-between mb-4 bg-gray-100 p-3 rounded">
      <Button
       size="icon"
       variant="ghost"
       className="h-8 w-8"
       onClick={() => {
             const audio = document.getElementById("audio-player") as HTMLAudioElement;
             audio?.play();
                 }}
                >
       <Play className="h-5 w-5" />
       </Button>
        <div className="uppercase font-medium text-gray-700">
          IT'S BEGINNING TO LOOK A LOT LIKE CHRISTMAS
        </div>
        <div className="flex items-center gap-1">
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <SkipBack className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <SkipForward className="h-4 w-4" />
          </Button>
          <span className="text-sm text-gray-500">0:00/3:25</span>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="w-full h-1 bg-gray-200 mb-6">
        <div className="h-full bg-gray-400" style={{ width: "0%" }}></div>
      </div>

      {/* Track Listing */}
      <div className="space-y-2">
        {tracks.map((track, index) => (
          <div key={track.id}>
            <div 
              className="flex items-center justify-between py-3 px-2 hover:bg-gray-50 cursor-pointer"
              onClick={() => setSelectedTrack(index)}
            >
              <div className="flex items-center gap-4">
                <span className="text-gray-400 w-4">{track.id}</span>
                <span className="text-gray-700">{track.title}</span>
              </div>
              <span className="text-gray-400">{track.duration}</span>
            </div>
            {index < tracks.length - 1 && <Separator />}
          </div>
        ))}
      </div>
    </div>
  );
};
