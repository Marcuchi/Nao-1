import React, { useRef, useState, useEffect } from 'react';
import { Play, ChevronLeft, ChevronRight, X } from 'lucide-react';
import { Interview } from '../types';

const interviewData: Interview[] = [
  {
    id: '1',
    name: 'Mestre Cesar Carceglia',
    role: 'Líder Carceglia Team',
    quote: "Con disciplina y un poco de trabajo todo se puede",
    imageUrl: 'https://picsum.photos/id/338/800/600',
    videoDuration: '12:45',
    videoUrl: 'https://youtu.be/XekW6jv3X7g'
  },
  {
    id: '4',
    name: 'Prof. Roy Wilhuber',
    role: 'Filial de Esquel',
    quote: "Quería ver como el mas chico le ganaba al mas grande, ver la disciplina y eficiencia del arte marcial",
    imageUrl: 'https://picsum.photos/id/342/800/600',
    videoDuration: '06:30',
    videoUrl: 'https://youtu.be/Rr3wt5yX_eU'
  },
  {
    id: '2',
    name: 'Salvador Domínguez',
    role: 'Faixa preta, Salta',
    quote: "El jiujitsu es un arte de la flexibilidad que se puede aplicar a la vida",
    imageUrl: 'https://picsum.photos/id/334/800/600',
    videoDuration: '08:20',
    videoUrl: 'https://youtu.be/JTJECCjfKQM'
  },
  {
    id: '3',
    name: 'Rocio Medina',
    role: '1ra faixa Marrón mujer-(faixa preta actualmente) de Salta',
    quote: "La mejor faixa para mi siempre fue la blanca y hay que disfrutar el proceso",
    imageUrl: 'https://picsum.photos/id/433/800/600',
    videoDuration: '05:15',
    videoUrl: 'https://youtu.be/0KB5LmEXgZw'
  },
  {
    id: '5',
    name: 'Prof. Pablo Pereira',
    role: 'Faixa Preta-Salta',
    quote: "El Jiu-jitsu es el arte del eterno aprendizaje",
    imageUrl: 'https://picsum.photos/id/349/800/600',
    videoDuration: '09:10',
    videoUrl: 'https://youtu.be/zxD0fT5F2yk'
  }
];

// Helper to extract YouTube ID
const getYoutubeId = (url: string) => {
  try {
    const cleanUrl = url.trim();
    if (cleanUrl.includes('youtube.com') || cleanUrl.includes('youtu.be')) {
      const urlObj = new URL(cleanUrl);
      if (cleanUrl.includes('youtu.be')) {
        return urlObj.pathname.substring(1);
      } else {
        return urlObj.searchParams.get('v');
      }
    }
  } catch (e) {
    return null;
  }
  return null;
};

// Component defined OUTSIDE to prevent re-creation on every render
const InterviewCard = ({ interview }: { interview: Interview }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [imgError, setImgError] = useState(false);
  const pauseTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  
  if (!interview || !interview.videoUrl) return null;

  const youtubeId = getYoutubeId(interview.videoUrl);
  const isYoutube = !!youtubeId;
  const isDrive = interview.videoUrl.includes('drive.google.com');
  const useIframe = isDrive || isYoutube;

  // Clear timeout when unmounting or stopping play
  useEffect(() => {
    return () => {
      if (pauseTimeoutRef.current) clearTimeout(pauseTimeoutRef.current);
    };
  }, []);

  // Listen for YouTube Iframe API messages
  useEffect(() => {
    if (!isPlaying || !isYoutube) return;

    const handleMessage = (event: MessageEvent) => {
      // Basic check to ensure it's likely from YouTube
      if (!event.origin.includes('youtube.com')) return;

      try {
        const data = JSON.parse(event.data);
        // YouTube API sends 'onStateChange' events
        // 1 = Playing, 2 = Paused, 0 = Ended
        if (data.event === 'onStateChange') {
          if (data.info === 2) { // PAUSED
             startPauseTimer();
          } else if (data.info === 1) { // PLAYING
             clearPauseTimer();
          } else if (data.info === 0) { // ENDED
             setIsPlaying(false);
          }
        }
      } catch (e) {
        // Ignore parsing errors from other sources
      }
    };

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, [isPlaying, isYoutube]);

  const startPauseTimer = () => {
    if (pauseTimeoutRef.current) clearTimeout(pauseTimeoutRef.current);
    // Revert to initial state (thumbnail/B&W) after 20 seconds
    pauseTimeoutRef.current = setTimeout(() => {
      setIsPlaying(false);
    }, 20000);
  };

  const clearPauseTimer = () => {
    if (pauseTimeoutRef.current) clearTimeout(pauseTimeoutRef.current);
  };

  // Use YouTube thumbnail if available and not errored, otherwise fallback to interview.imageUrl
  const thumbnailUrl = (isYoutube && youtubeId && !imgError)
    ? `https://img.youtube.com/vi/${youtubeId}/sddefault.jpg`
    : interview.imageUrl;

  const getEmbedUrl = () => {
     if (isYoutube && youtubeId) {
       // Added origin parameter to avoid configuration errors (Error 153)
       const origin = typeof window !== 'undefined' ? window.location.origin : '';
       // Include origin only if it exists to avoid malformed URL. Safely encode it.
       const originParam = origin ? `&origin=${encodeURIComponent(origin)}` : '';
       // enablejsapi=1 is required to listen for pause/play events
       return `https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0&modestbranding=1&enablejsapi=1${originParam}`;
     }
     
     if (isDrive) {
        const idMatch = interview.videoUrl.match(/\/d\/([a-zA-Z0-9_-]+)/);
        if (idMatch && idMatch[1]) {
          return `https://drive.google.com/file/d/${idMatch[1]}/preview`;
        }
     }
     
     return interview.videoUrl;
  };

  const embedUrl = useIframe ? getEmbedUrl() : interview.videoUrl;

  return (
    <div className="group relative bg-slate-900 rounded-xl overflow-hidden cursor-pointer border border-slate-800 hover:border-yellow-500/30 transition-all h-full flex flex-col">
      {/* Video/Image Container */}
      <div className={`relative h-64 overflow-hidden shrink-0 bg-black transition-all duration-500 ${!isPlaying ? 'grayscale group-hover:grayscale-0' : ''}`}>
        {isPlaying ? (
          useIframe ? (
            <iframe 
              src={embedUrl} 
              className="w-full h-full border-0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              title={`Video de ${interview.name}`}
            />
          ) : (
            <video
              src={interview.videoUrl}
              controls
              autoPlay
              className="w-full h-full object-cover"
              onEnded={() => setIsPlaying(false)}
              onPause={startPauseTimer}
              onPlay={clearPauseTimer}
            >
              Tu navegador no soporta el elemento de video.
            </video>
          )
        ) : (
          <div 
            className="w-full h-full relative"
            onClick={() => setIsPlaying(true)}
          >
            <img 
              src={thumbnailUrl} 
              alt={interview.name} 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              onError={() => {
                if (!imgError) {
                  setImgError(true);
                }
              }}
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
              <div className="w-14 h-14 bg-sky-500 rounded-full flex items-center justify-center pl-1 transform group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(14,165,233,0.5)]">
                <Play fill="black" size={24} className="text-black" />
              </div>
            </div>
            <div className="absolute bottom-3 right-3 bg-black/80 text-white text-xs font-bold px-2 py-1 rounded border border-slate-700">
              {interview.videoDuration}
            </div>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col grow" onClick={() => !isPlaying && setIsPlaying(true)}>
        <div className="mb-4">
          <h3 className="text-xl font-bold text-white">{interview.name}</h3>
          <p className="text-yellow-500 text-sm font-medium uppercase tracking-wide">{interview.role}</p>
        </div>
        <blockquote className="text-slate-400 italic text-sm border-l-2 border-sky-500 pl-4 mt-auto">
          "{interview.quote}"
        </blockquote>
      </div>
    </div>
  );
};

export const Interviews: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 350; // Ancho aproximado de una tarjeta + gap
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="entrevistas" className="py-24 bg-slate-950 scroll-mt-24 relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Entrevistas Exclusivas</h2>
            <p className="text-slate-400">Escucha a los referentes del <span className="text-yellow-500 font-semibold">Carceglia Team</span>.</p>
          </div>
          
          <div className="hidden md:flex items-center gap-4">
            <div className="flex gap-2">
              <button 
                onClick={() => scroll('left')}
                className="w-10 h-10 rounded-full border border-slate-700 bg-slate-900 text-white flex items-center justify-center hover:bg-sky-500 hover:border-sky-500 hover:text-black transition-all"
              >
                <ChevronLeft size={20} />
              </button>
              <button 
                onClick={() => scroll('right')}
                className="w-10 h-10 rounded-full border border-slate-700 bg-slate-900 text-white flex items-center justify-center hover:bg-sky-500 hover:border-sky-500 hover:text-black transition-all"
              >
                <ChevronRight size={20} />
              </button>
            </div>
            <button 
              onClick={() => setIsModalOpen(true)}
              className="text-sky-500 font-semibold hover:text-white transition-colors ml-4"
            >
              Ver todas las entrevistas &rarr;
            </button>
          </div>
        </div>

        {/* Carousel Container */}
        <div 
          ref={scrollContainerRef}
          className="flex overflow-x-auto gap-6 snap-x snap-mandatory hide-scrollbar pb-8 -mx-4 px-4 md:mx-0 md:px-0"
        >
          {interviewData.map((interview) => (
            <div key={interview.id} className="min-w-[85%] md:min-w-[calc(50%-12px)] lg:min-w-[calc(33.333%-16px)] snap-center">
              <InterviewCard interview={interview} />
            </div>
          ))}
        </div>
        
        {/* Mobile View All Button */}
        <div className="mt-4 text-center md:hidden">
            <button 
              onClick={() => setIsModalOpen(true)}
              className="text-sky-500 font-semibold hover:text-white transition-colors py-2 px-4 border border-sky-500/30 rounded-full"
            >
            Ver todas las entrevistas &rarr;
          </button>
        </div>
      </div>

      {/* Modal View All */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-slate-950/90 backdrop-blur-sm"
            onClick={() => setIsModalOpen(false)}
          />
          <div className="relative w-full max-w-6xl h-[90vh] bg-slate-900 rounded-2xl shadow-2xl border border-slate-800 flex flex-col overflow-hidden animate-in fade-in zoom-in duration-300">
            {/* Modal Header */}
            <div className="flex justify-between items-center p-6 border-b border-slate-800 bg-slate-900 z-10">
              <div>
                 <h3 className="text-2xl font-bold text-white">Todas las Entrevistas</h3>
                 <p className="text-sm text-slate-400">Archivo completo 2024</p>
              </div>
              <button 
                onClick={() => setIsModalOpen(false)}
                className="w-10 h-10 rounded-full bg-slate-800 text-white flex items-center justify-center hover:bg-red-500 transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Modal Grid */}
            <div className="overflow-y-auto p-6 bg-slate-950">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {interviewData.map((interview) => (
                  <div key={interview.id} className="h-full">
                    <InterviewCard interview={interview} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};