import { useState } from 'react';
import { Play } from 'lucide-react';

export default function LazyVideo({ videoUrl, thumbnail }) {
  const [loaded, setLoaded] = useState(false);

  // On click: swap autoplay=0 → autoplay=1
  const autoplayUrl = videoUrl.replace('autoplay=0', 'autoplay=1');

  if (loaded) {
    return (
      <iframe
        src={autoplayUrl}
        className="w-full rounded-xl block"
        style={{ aspectRatio: '9/16', backgroundColor: '#000' }}
        allow="autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;"
        frameBorder="0"
        allowFullScreen
      />
    );
  }

  return (
    <div
      onClick={() => setLoaded(true)}
      className="cursor-pointer relative w-full rounded-xl overflow-hidden"
      style={{ aspectRatio: '9/16', backgroundColor: '#111' }}>

      {/* Thumbnail if provided */}
      {thumbnail && (
        <img
          src={thumbnail}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
      )}

      {/* Dark overlay for contrast */}
      <div className="absolute inset-0"
           style={{ background: thumbnail ? 'rgba(0,0,0,0.35)' : 'linear-gradient(145deg, #1D1D1F 0%, #2C2C2E 50%, #1D1D1F 100%)' }} />

      {/* Play button */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center
                        hover:bg-white/30 hover:scale-110 transition-all duration-300">
          <Play size={22} fill="white" className="text-white ml-0.5" />
        </div>
      </div>
    </div>
  );
}
