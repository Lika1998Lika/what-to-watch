import { useEffect, useRef, useState } from "react";

type VideoPlayerProps = {
  src: string;
  poster: string;
  autoPlay: boolean;
}

function VideoPlayer(props: VideoPlayerProps) {
  const { src, poster, autoPlay } = props;

  const [isLoading, setIsLoading] = useState(true);
  const [isPlaying, setIsPlaying] = useState(autoPlay);

  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (videoRef.current === null) {
      return;
    }

    videoRef.current.addEventListener('loadeddata', () => setIsLoading(false));

    if (isPlaying) {
      videoRef.current.play();
      return;
    }

    videoRef.current.pause();
  }, [isLoading]);

  return (
    <>
      <video width="280" controls poster={poster} onMouseEnter={() => setIsPlaying(true)}>
        <source src={src} type="video/mp4" />
      </video>
    </>
  )
}

export default VideoPlayer;
