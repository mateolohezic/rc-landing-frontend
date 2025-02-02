'use client'

import { useRef, useState } from "react";
import { SoundOnIcon, SoundOffIcon } from "@/icons";

export const VideoIntro = () => {

    const videoRef = useRef<HTMLVideoElement>(null);
    const [isMuted, setIsMuted] = useState(true);
  
    const toggleMute = () => {
      if (videoRef.current) {
        videoRef.current.muted = !videoRef.current.muted;
        setIsMuted(videoRef.current.muted);
      }
    };

    return (
        <div className="size-full absolute top-0 left-0 z-0">
            <div className="size-full relative">
                <button
                    type="button"
                    onClick={toggleMute}
                    className="text-white/50 hover:text-white text-4xl lg:text-7xl absolute top-8 lg:top-16 right-8 lg:right-16 pointer-events-auto cursor-pointer z-50 transition-150"
                >
                    {
                        isMuted ? <SoundOffIcon/> : <SoundOnIcon/>
                    }
                </button>
                <div className="size-full bg-gradient-to-bl from-background/75 to-75% to-background absolute top-0 left-0"></div>
                <video
                    ref={videoRef}
                    controls={false}
                    playsInline
                    autoPlay
                    muted
                    loop
                    className="size-full object-cover pointer-events-none select-none"
                >
                    <source src="/assets/background_video.mp4" type="video/mp4" />
                    Tu navegador no soporta este video.
                </video>
            </div>
        </div>
    )
}
