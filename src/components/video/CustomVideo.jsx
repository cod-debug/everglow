import React, { useEffect, useRef } from 'react';

const CustomVideo = ({...props}) => {
  const videoRef = useRef(null);

  const preventFullscreen = (event) => {
    event.preventDefault();
  };

  const handlePause = (event) => {
    // Handle pause event here
  };

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      const events = [
        'fullscreenchange',
        'webkitfullscreenchange',
        'mozfullscreenchange',
        'msfullscreenchange',
        'pause',
      ];

      events.forEach((event) => {
        video.addEventListener(event, event === 'pause' ? handlePause : preventFullscreen);
      });

      return () => {
        events.forEach((event) => {
          video.removeEventListener(event, event === 'pause' ? handlePause : preventFullscreen);
        });
      };
    }
  }, []);

  return (
    <video
      {...props}
      ref={videoRef}
      controls={false}
      autoPlay
      playsInline
      preload="auto"
      muted
    ></video>
  );
};

export default CustomVideo;