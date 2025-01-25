import { Link, useParams } from "react-router-dom";
import Sketch from "../../components/sketch/sketch";
import { useAppSelector } from "../../hooks/hooks";
import { AppRoute } from "../../const";
import { useEffect, useRef, useState } from "react";
import formatTimeLeft from "../../components/video-player/format-time-left";


function PlayerPage() {
  const { filmId } = useParams();

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const movies = useAppSelector((state) => state.MOVIES_DATA.movies);
  const film = movies.find((movie) => movie);

  const [isPlaying, setIsPlaying] = useState(false);
  const [timeLeft, setTimeLeft] = useState("00:00");

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      const updateTime = () => {
        if (video.duration && !isNaN(video.duration)) {
          setTimeLeft(formatTimeLeft(video.duration - video.currentTime));
        }
      };
      video.addEventListener("timeupdate", updateTime);
      video.addEventListener("play", () => setIsPlaying(true));
      video.addEventListener("pause", () => setIsPlaying(false));

      return () => {
        video.removeEventListener("timeupdate", updateTime);
      };
    }
  }, []);

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
    }
  };

  const handleFullScreen = () => {
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      }
    }
  };

  const handleExit = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  if (!film) {
    return;
  }
  return (
    <>
      <Sketch />
      <div className="player">
        <video
          className="player__video"
          poster={film.previewImage}
          ref={videoRef}
          src={film.videoLink}
        />

        <Link to={`${AppRoute.Film}/${filmId}`}>
          <button type="button" className="player__exit" onClick={handleExit}>Exit</button>
        </Link>

        <div className="player__controls">
          <div className="player__controls-row">
            <div className="player__time">
              <progress
                className="player__progress"
                value={videoRef.current?.currentTime || 0}
                max={videoRef.current?.duration || 100}
              ></progress>
              <div
                className="player__toggler"
                style={{ left: `${(Number(videoRef.current?.currentTime) / Number(videoRef.current?.duration)) * 100 || 0}%`, }}>
                Toggler
              </div>
            </div>
            <div className="player__time-value">{timeLeft}</div>
          </div>

          <div className="player__controls-row">
            <button type="button" className="player__play" onClick={handlePlayPause}>
              <svg viewBox="0 0 19 19" width="19" height="19">
                <use xlinkHref={isPlaying ? "#pause" : "#play-s"}></use>
              </svg>
              <span>{isPlaying ? "Pause" : "Play"}</span>
            </button>
            <div className="player__name">{film.name}</div>

            <button type="button" className="player__full-screen" onClick={handleFullScreen}>
              <svg viewBox="0 0 27 27" width="27" height="27">
                <use xlinkHref="#full-screen"></use>
              </svg>
              <span>Full screen</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default PlayerPage;