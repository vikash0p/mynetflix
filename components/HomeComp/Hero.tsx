import React from "react";
import { Button } from "../ui/button";
import { Play, Clock } from "lucide-react";
const Hero: React.FC = () => {
  return (
    <div className="w-full h-screen relative overflow-x-hidden">
      <iframe
        className="aspect-video w-full h-full object-cover object-center"
        src="https://www.youtube.com/embed/fCVm5U2ob8U?si=df3_kzZ4iD3KEroC&autoplay=1&mute=1"
        title="YouTube video player"
        frameBorder={0} // Changed to frameBorder and set as a prop
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin" // Changed to referrerPolicy
        allowFullScreen // Changed to allowFullScreen
      ></iframe>

      <div className=" absolute top-52 left-20  w-full">
        <h2 className="text-2xl w-1/2">Unlock worlds of entertainment.</h2>
        <p className="text-xl w-1/2  ">
          Stream your favorites. Dive into drama,laughter, and more. Netflix:
          Where stories come to life
        </p>
        <div className=" space-x-7 space-y-4">
          <Button variant="default" className="space-x-1">
            <Play /> <span>Play </span>
          </Button>
          <Button variant="default" className="space-x-1">
            <Clock />
            <span>Watch More</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
