import React, { useState, useEffect } from "react";

const Index = () => {
  const [isVideoVisible, setIsVideoVisible] = useState(false);

  useEffect(() => {
    const handleMessage = (event) => {
      if (event.data === "toggleVideo") {
        setIsVideoVisible((prev) => !prev);
      }
    };

    window.addEventListener("message", handleMessage);

    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, []);

  return (
    <div className="h-screen w-screen flex items-center justify-center">
      {isVideoVisible && (
        <div className="fixed top-0 left-0 w-1/4 h-1/4">
          <video
            src="path/to/your/video.mp4"
            autoPlay
            loop
            className="w-full h-full"
          />
        </div>
      )}
      <div>
        <h1 className="text-3xl text-center">Chromium Extension Frontend</h1>
        <p className="text-center">
          This extension opens a video in a small window in the top left of the
          screen when triggered.
        </p>
      </div>
    </div>
  );
};

export default Index;