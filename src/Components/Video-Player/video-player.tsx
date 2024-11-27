import { useRef, useEffect } from 'react';

type VideoPlayerProps = {
  src: string;
  poster: string;
};

const VideoPlayer = (props: VideoPlayerProps) => {
  const { src, poster } = props;
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (videoRef.current === null) {
      return;
    }

    const handleMouseEnter = () => {
      if (videoRef.current === null) {
        return;
      }
      videoRef.current.play();
    };

    const handleMouseLeave = () => {
      if (videoRef.current === null) {
        return;
      }
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    };

    const videoElement = videoRef.current;
    videoElement.addEventListener('mouseenter', handleMouseEnter);
    videoElement.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      videoElement.removeEventListener('mouseenter', handleMouseEnter);
      videoElement.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <video
      ref={videoRef}
      src={src}
      poster={poster}
      muted
      width="280"
      height="175"
    />
  );
};

export default VideoPlayer;

