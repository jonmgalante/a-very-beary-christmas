
import React, { useState, useRef, useEffect } from "react";
import { Play, Pause, SkipBack, SkipForward } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

export const TrackList: React.FC = () => {
  const [selectedTrack, setSelectedTrack] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  const tracks = [
    { id: 1, title: "It's Beginning To Look A Lot Like Christmas", duration: "3:25", url: "https://firebasestorage.googleapis.com/v0/b/a-very-beary-christmas-d4a4c.firebasestorage.app/o/audio%2FIt's%20Beginning%20To%20Look%20A%20Lot%20Like%20Christmas.wav?alt=media&token=7c260197-4edb-4978-b7a2-144092613bb5"},
    { id: 2, title: "The Christmas Song", duration: "3:22", url: "https://firebasestorage.googleapis.com/v0/b/a-very-beary-christmas-d4a4c.firebasestorage.app/o/audio%2FThe%20Christmas%20Song.wav?alt=media&token=a27623cf-c2c5-47c7-9c5b-664068bb788d"},
    { id: 3, title: "It's the Most Wonderful Time of the Year", duration: "2:32", url: "https://firebasestorage.googleapis.com/v0/b/a-very-beary-christmas-d4a4c.firebasestorage.app/o/audio%2FIt's%20the%20Most%20Wonderful%20Time%20of%20the%20Year.wav?alt=media&token=88106209-b11f-449c-aebc-d6b0440201ef"},
    { id: 4, title: "Holly Jolly Christmas", duration: "2:00", url: "https://firebasestorage.googleapis.com/v0/b/a-very-beary-christmas-d4a4c.firebasestorage.app/o/audio%2FHolly%20Jolly%20Christmas.wav?alt=media&token=bcfeaa9e-07ab-4631-a754-641d79e29f02"},
    { id: 5, title: "Jingle Bells", duration: "2:00", url: "https://firebasestorage.googleapis.com/v0/b/a-very-beary-christmas-d4a4c.firebasestorage.app/o/audio%2FJingle%20Bells.wav?alt=media&token=3038356f-54a6-4fcd-b05d-35f67c42a335"},
    { id: 6, title: "Let It Snow! Let It Snow! Let It Snow!", duration: "1:55", url: "https://firebasestorage.googleapis.com/v0/b/a-very-beary-christmas-d4a4c.firebasestorage.app/o/audio%2FLet%20It%20Snow!%20Let%20It%20Snow!%20Let%20It%20Snow!.wav?alt=media&token=bcaa56f3-6b50-4cc8-9356-04f9277700b8"},
    { id: 7, title: "All of Me", duration: "4:29", url: "https://firebasestorage.googleapis.com/v0/b/a-very-beary-christmas-d4a4c.firebasestorage.app/o/audio%2FAll%20of%20Me.wav?alt=media&token=6fadca2f-3a4e-4b49-a4a0-7499414bc64d"},
  ];

  // Format time (mm:ss)
  const formatTime = (time: number) => {
    const mins = Math.floor(time / 60);
    const secs = Math.floor(time % 60);
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  const handlePlayPause = () => {
    const audio = audioRef.current;
    if (!audio) return;
  
    if (!isPlaying) {
      audio.play().catch((err) => console.error("Playback error:", err));
      setIsPlaying(true);
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  };

  const handleSkipBack = () => {
    setSelectedTrack((prev) => Math.max(prev - 1, 0));
    setIsPlaying(true);
  };

  const handleSkipForward = () => {
    setSelectedTrack((prev) => Math.min(prev + 1, tracks.length - 1));
    setIsPlaying(true);
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);

    audio.addEventListener("play", handlePlay);
    audio.addEventListener("pause", handlePause);

    return () => {
      audio.removeEventListener("play", handlePlay);
      audio.removeEventListener("pause", handlePause);
    };
  }, []);
  
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => {
      setCurrentTime(audio.currentTime);
      setDuration(audio.duration);
    };

    const handleEnded = () => {
      handleSkipForward();
    };

    audio.addEventListener("timeupdate", updateTime);
    audio.addEventListener("ended", handleEnded);
    audio.load();
    if (isPlaying) {
      audio.play();
    }

    return () => {
      audio.removeEventListener("timeupdate", updateTime);
      audio.removeEventListener("ended", handleEnded);
    };
  }, [selectedTrack]);

  return (
    <div>
      {/* Hidden audio element */}
      <audio ref={audioRef} src={tracks[selectedTrack].url} autoPlay style={{ display: "none" }} />

      {/* Custom Styled Player */}
      <div className="flex items-center justify-between mb-4 bg-gray-100 p-3 rounded">
        <Button size="icon" variant="ghost" className="h-8 w-8" onClick={handlePlayPause}>
          {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
        </Button>
        <div className="uppercase font-medium text-gray-700 text-center truncate max-w-[60%]">
          {tracks[selectedTrack].title}
        </div>
        <div className="flex items-center gap-1">
          <Button variant="ghost" size="icon" className="h-8 w-8" onClick={handleSkipBack}>
            <SkipBack className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="h-8 w-8" onClick={handleSkipForward}>
            <SkipForward className="h-4 w-4" />
          </Button>
          <span className="text-sm text-gray-500">
            {formatTime(currentTime)} / {formatTime(duration || 0)}
          </span>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="w-full h-1 bg-gray-200 mb-6">
        <div
          className="h-full bg-gray-400"
          style={{ width: `${(currentTime / (duration || 1)) * 100}%` }}
        ></div>
      </div>

      {/* Track Listing */}
      <div className="space-y-2">
        {tracks.map((track, index) => (
          <div key={track.id}>
            <div
              className="flex items-center justify-between py-3 px-2 hover:bg-gray-50 cursor-pointer"
              onClick={() => {
                setSelectedTrack(index);
                setIsPlaying(true);
              }}
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
