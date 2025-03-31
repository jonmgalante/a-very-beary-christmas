
import React, { useState } from "react";
import { Play, SkipBack, SkipForward } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

export const TrackList: React.FC = () => {
  const [selectedTrack, setSelectedTrack] = useState(0);

  const tracks = [
    { id: 1, title: "It's Beginning To Look A Lot Like Christmas", duration: "3:25" },
    { id: 2, title: "The Christmas Song", duration: "3:22" },
    { id: 3, title: "It's the Most Wonderful Time of the Year", duration: "2:32" },
    { id: 4, title: "Holly Jolly Christmas", duration: "2:00" },
    { id: 5, title: "Jingle Bells", duration: "2:00" },
    { id: 6, title: "Let It Snow! Let It Snow! Let It Snow!", duration: "1:55" },
    { id: 7, title: "All of Me", duration: "4:29" },
  ];

  return (
    <div>
      {/* Player Controls */}
      <div className="flex items-center justify-between mb-4 bg-gray-100 p-3 rounded">
        <Button
          size="icon"
          variant="ghost"
          className="h-8 w-8"
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
