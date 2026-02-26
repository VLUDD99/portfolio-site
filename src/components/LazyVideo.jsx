import { useState, useRef, useEffect, useCallback } from 'react';
import { Play, Pause, Maximize, Minimize } from 'lucide-react';

export default function LazyVideo({ videoUrl, thumbnail }) {
  const [loaded, setLoaded]               = useState(false);
  const [playing, setPlaying]             = useState(false);
  const [progress, setProgress]           = useState(0);
  const [currentTime, setCurrentTime]     = useState(0);
  const [duration, setDuration]           = useState(0);
  const [showControls, setShowControls]   = useState(true);
  const [isFullscreen, setIsFullscreen]   = useState(false);

  const videoRef     = useRef(null);
  const containerRef = useRef(null);
  const hideTimer    = useRef(null);

  const fmt = (s) => {
    const m = Math.floor(s / 60);
    return `${m}:${Math.floor(s % 60).toString().padStart(2, '0')}`;
  };

  // Show controls; auto-hide only when playing
  const showAndScheduleHide = useCallback((isPlaying) => {
    clearTimeout(hideTimer.current);
    setShowControls(true);
    if (isPlaying) {
      hideTimer.current = setTimeout(() => setShowControls(false), 3000);
    }
  }, []);

  useEffect(() => () => clearTimeout(hideTimer.current), []);

  // Track fullscreen state changes (user can also exit via Esc)
  useEffect(() => {
    const onChange = () => {
      const fs = !!(document.fullscreenElement || document.webkitFullscreenElement);
      setIsFullscreen(fs);
      if (!fs) setShowControls(true);
    };
    document.addEventListener('fullscreenchange', onChange);
    document.addEventListener('webkitfullscreenchange', onChange);
    return () => {
      document.removeEventListener('fullscreenchange', onChange);
      document.removeEventListener('webkitfullscreenchange', onChange);
    };
  }, []);

  // Spacebar to toggle play/pause (only when this player is loaded)
  useEffect(() => {
    if (!loaded) return;
    const onKey = (e) => {
      if (e.code === 'Space' && e.target.tagName !== 'INPUT' && e.target.tagName !== 'TEXTAREA') {
        e.preventDefault();
        handleContainerClick();
      }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loaded]);

  /* ── video events ─────────────────────────────── */
  const onLoadedMetadata = () => {
    setDuration(videoRef.current?.duration || 0);
    videoRef.current.play()
      .then(() => { setPlaying(true); showAndScheduleHide(true); })
      .catch(() => {});
  };

  const onTimeUpdate = () => {
    const v = videoRef.current;
    if (!v) return;
    setCurrentTime(v.currentTime);
    setProgress(v.duration ? v.currentTime / v.duration : 0);
  };

  const onEnded = () => {
    setPlaying(false);
    setShowControls(true); // keep controls visible when ended
  };

  /* ── controls ────────────────────────────────── */
  // Click on the video area (outer container) — toggle play/pause
  // Controls buttons stop propagation themselves, so this only fires
  // when the user clicks the actual video / gradient area.
  const handleContainerClick = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      v.play();
      setPlaying(true);
      showAndScheduleHide(true);
    } else {
      v.pause();
      setPlaying(false);
      showAndScheduleHide(false); // stay visible while paused
    }
  };

  const seek = (e) => {
    e.stopPropagation();
    const rect = e.currentTarget.getBoundingClientRect();
    const ratio = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
    const v = videoRef.current;
    if (v?.duration) {
      v.currentTime = ratio * v.duration;
      setProgress(ratio);
    }
    showAndScheduleHide(!v?.paused);
  };

  const togglePlayBtn = (e) => {
    e.stopPropagation();
    handleContainerClick();
  };

  // Toggle fullscreen: enter if not fullscreen, exit if already fullscreen.
  // CSS .lv-container:fullscreen in index.css centers the video 9:16 with black bars.
  const toggleFullscreen = (e) => {
    e.stopPropagation();
    if (isFullscreen || document.fullscreenElement || document.webkitFullscreenElement) {
      // Exit fullscreen
      if (document.exitFullscreen)             document.exitFullscreen();
      else if (document.webkitExitFullscreen)  document.webkitExitFullscreen();
    } else {
      // Enter fullscreen on the container div
      const el = containerRef.current;
      if (!el) return;
      if (el.requestFullscreen)             el.requestFullscreen();
      else if (el.webkitRequestFullscreen)  el.webkitRequestFullscreen();
      else if (videoRef.current?.webkitEnterFullscreen) {
        // iOS Safari fallback — native fullscreen on video element
        videoRef.current.webkitEnterFullscreen();
      }
    }
    showAndScheduleHide(!videoRef.current?.paused);
  };

  /* ── thumbnail / preview ─────────────────────── */
  if (!loaded) {
    return (
      <div
        onClick={() => setLoaded(true)}
        className="cursor-pointer relative w-full rounded-xl overflow-hidden"
        style={{ aspectRatio: '9/16', backgroundColor: '#111' }}>

        {thumbnail && (
          <img src={thumbnail} alt=""
               className="absolute inset-0 w-full h-full object-cover" />
        )}

        <div className="absolute inset-0"
             style={{ background: thumbnail
               ? 'rgba(0,0,0,0.35)'
               : 'linear-gradient(145deg,#1D1D1F 0%,#2C2C2E 50%,#1D1D1F 100%)' }} />

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center
                          hover:bg-white/30 hover:scale-110 transition-all duration-300">
            <Play size={22} fill="white" className="text-white ml-0.5" />
          </div>
        </div>
      </div>
    );
  }

  /* ── player ──────────────────────────────────── */
  return (
    <div
      ref={containerRef}
      className="lv-container relative w-full bg-black cursor-pointer"
      style={isFullscreen
        ? { borderRadius: 0, aspectRatio: 'unset', display: 'flex', alignItems: 'center', justifyContent: 'center' }
        : { aspectRatio: '9/16', borderRadius: '0.75rem', overflow: 'hidden' }
      }
      onClick={handleContainerClick}>

      <video
        ref={videoRef}
        src={videoUrl}
        className="lv-video"
        style={isFullscreen
          ? { width: 'auto', height: '100%', maxWidth: 'calc(100vh * 9 / 16)', objectFit: 'contain', display: 'block', borderRadius: 0 }
          : { width: '100%', height: '100%', objectFit: 'cover' }
        }
        playsInline
        onLoadedMetadata={onLoadedMetadata}
        onTimeUpdate={onTimeUpdate}
        onEnded={onEnded}
      />

      {/* Controls overlay — no stopPropagation on the container itself */}
      <div
        className="absolute inset-x-0 bottom-0 px-3 pb-3 pt-8 transition-opacity duration-300"
        style={{
          opacity: showControls ? 1 : 0,
          background: 'linear-gradient(to top, rgba(0,0,0,0.75) 0%, transparent 100%)',
          pointerEvents: showControls ? 'auto' : 'none',
        }}>

        {/* Timeline */}
        <div
          className="w-full h-[3px] rounded-full mb-3 cursor-pointer relative"
          style={{ background: 'rgba(255,255,255,0.3)' }}
          onClick={seek}>
          <div
            className="h-full rounded-full"
            style={{ width: `${progress * 100}%`, background: 'var(--notes-accent)' }} />
          <div
            className="absolute top-1/2 w-3 h-3 rounded-full"
            style={{
              left: `${progress * 100}%`,
              transform: 'translate(-50%,-50%)',
              background: 'var(--notes-accent)'
            }} />
        </div>

        {/* Buttons row — NO onClick stopPropagation on the wrapper */}
        <div className="flex items-center gap-2">
          <button
            onClick={togglePlayBtn}
            className="w-7 h-7 flex items-center justify-center rounded-full flex-shrink-0"
            style={{ background: 'rgba(255,255,255,0.15)' }}>
            {playing
              ? <Pause size={13} fill="white" className="text-white" />
              : <Play  size={13} fill="white" className="text-white ml-0.5" />}
          </button>

          <span className="text-white text-[11px] font-medium flex-1 tabular-nums select-none">
            {fmt(currentTime)} / {fmt(duration)}
          </span>

          <button
            onClick={toggleFullscreen}
            className="w-7 h-7 flex items-center justify-center rounded-full flex-shrink-0"
            style={{ background: 'rgba(255,255,255,0.15)' }}>
            {isFullscreen
              ? <Minimize size={13} className="text-white" />
              : <Maximize size={13} className="text-white" />}
          </button>
        </div>
      </div>

      {/* Centre pause icon when paused */}
      {!playing && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-14 h-14 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center">
            <Play size={22} fill="white" className="text-white ml-0.5" />
          </div>
        </div>
      )}
    </div>
  );
}
