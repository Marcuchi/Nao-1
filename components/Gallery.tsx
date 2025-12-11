import React, { useState } from 'react';
import { Play, X, Image as ImageIcon, Film, Maximize2 } from 'lucide-react';

type MediaType = 'image' | 'video';

interface GalleryItem {
  id: string;
  type: MediaType;
  src: string; // URL de la imagen o thumbnail del video
  videoUrl?: string; // URL del video (YouTube/Drive)
  category: string;
}

const galleryItems: GalleryItem[] = [
  // Video 1
  {
    id: '3',
    type: 'video',
    src: 'https://drive.google.com/thumbnail?id=1GtJz-0KN5qqTAgK66hp8Ixzer_I7J9lQ&sz=w1000',
    videoUrl: 'https://drive.google.com/file/d/1GtJz-0KN5qqTAgK66hp8Ixzer_I7J9lQ/preview',
    category: 'Clases'
  },
  // Foto 1
  {
    id: '1',
    type: 'image',
    src: 'https://drive.google.com/thumbnail?id=16BXSb6dvt6xig0aCXlEnMiWBHadIo4CL&sz=w1000',
    category: 'Eventos'
  },
  // Foto 2
  {
    id: '2',
    type: 'image',
    src: 'https://drive.google.com/thumbnail?id=16is3HOxgVKdGRGpfeufR46m5tcH1qqPw&sz=w1000',
    category: 'Graduaciones'
  },
  // Foto 3
  {
    id: '4',
    type: 'image',
    src: 'https://drive.google.com/thumbnail?id=1fN9WCSl6jlTwrrFjWavEAnXv0aZiNuqF&sz=w1000',
    category: 'Clases'
  },
  // Foto 4
  {
    id: '5',
    type: 'image',
    src: 'https://drive.google.com/thumbnail?id=1-40jvWVkRvcKN_qvaWHrGtCysRGdhv0F&sz=w1000',
    category: 'Entrenamiento'
  },
  // Video 2
  {
    id: '6',
    type: 'video',
    src: 'https://drive.google.com/thumbnail?id=1I93P6w0RXTl7s8kjJOuULJoCj8C4-vTd&sz=w1000',
    videoUrl: 'https://drive.google.com/file/d/1I93P6w0RXTl7s8kjJOuULJoCj8C4-vTd/preview',
    category: 'Entrenamiento'
  },
  // Foto 5
  {
    id: '7',
    type: 'image',
    src: 'https://drive.google.com/thumbnail?id=1IALBywUDTigfl7YoXVIwuCNnHkUu-MIP&sz=w1000',
    category: 'Comunidad'
  },
  // Foto 6
  {
    id: '8',
    type: 'image',
    src: 'https://scontent.fcor10-3.fna.fbcdn.net/v/t51.82787-15/588986738_18542660293062517_4988684779670039708_n.jpg?stp=dst-jpegr_tt6&_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeG_ZD7Mg-JOR2g-NG2J7AN3HcZYtMyh6gAdxli0zKHqAN7dOJAO14v71H8TqO2NrGneJyDJfmbtF9xn8D3qgBtf&_nc_ohc=Tx56FV3txdgQ7kNvwHAc76H&_nc_oc=AdlxCtDakLccmsCd8Ue8-c3MVi4-sBM71E3MkREKwH_J-Q6O9rWtgbQX-i6nRH8KmOc&_nc_zt=23&se=-1&_nc_ht=scontent.fcor10-3.fna&_nc_gid=U9zHJBFrO7epXoVIDLNcKg&oh=00_AfktrENQC4f-1peMPMVIN4HOiGw8tctM9TKQHgbJxIm5ig&oe=693D2FB7',
    category: 'Arte'
  },
  // Video 3
  {
    id: '9',
    type: 'video',
    src: 'https://drive.google.com/thumbnail?id=1vefFvt3__JfXPXh1YD9l5xfomzEOE1py&sz=w1000',
    videoUrl: 'https://drive.google.com/file/d/1vefFvt3__JfXPXh1YD9l5xfomzEOE1py/preview',
    category: 'Lucha'
  },
  // Foto 7
  {
    id: '10',
    type: 'image',
    src: 'https://drive.google.com/thumbnail?id=1u6KfQjvNDnBzt6czwTXDv08HkNfk1XIo&sz=w1000',
    category: 'Equipo'
  },
  // Video 4
  {
    id: '11',
    type: 'video',
    src: 'https://drive.google.com/thumbnail?id=1FtH2CEZlRQo3CYEIrSkcM-KF55yf5_tj&sz=w1000',
    videoUrl: 'https://drive.google.com/file/d/1FtH2CEZlRQo3CYEIrSkcM-KF55yf5_tj/preview',
    category: 'Competición'
  },
  // Foto 8
  {
    id: '12',
    type: 'image',
    src: 'https://drive.google.com/thumbnail?id=1sr1_DyJ7_VM1ehCzpr7Mq3BIqRYGlTsw&sz=w1000',
    category: 'Eventos'
  },
  // Foto 9
  {
    id: '13',
    type: 'image',
    src: 'https://drive.google.com/thumbnail?id=1VLb_UUssac_C_RIjGXXeo0lTtrMjjcTh&sz=w1000',
    category: 'Seminarios'
  },
  // Foto 10
  {
    id: '14',
    type: 'image',
    src: 'https://drive.google.com/thumbnail?id=1i3Efv3ngiTO1faiCTqK1HGD1XQ5uo-95&sz=w1000',
    category: 'Técnica'
  }
];

export const Gallery: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'image' | 'video'>('all');
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const filteredItems = galleryItems.filter(
    item => filter === 'all' || item.type === filter
  );

  return (
    <section id="galeria" className="py-24 bg-slate-950 scroll-mt-24 relative border-b border-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Galería <span className="text-sky-500">Multimedia</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto mb-8">
            Revive los mejores momentos dentro y fuera del tatami. Nuestra historia en imágenes.
          </p>

          {/* Filters */}
          <div className="flex justify-center gap-4 flex-wrap">
            <button
              onClick={() => setFilter('all')}
              className={`px-6 py-2 rounded-full font-semibold transition-all ${
                filter === 'all' 
                  ? 'bg-yellow-500 text-black shadow-[0_0_15px_rgba(234,179,8,0.4)]' 
                  : 'bg-slate-900 text-slate-400 border border-slate-800 hover:border-yellow-500 hover:text-white'
              }`}
            >
              Todos
            </button>
            <button
              onClick={() => setFilter('image')}
              className={`flex items-center gap-2 px-6 py-2 rounded-full font-semibold transition-all ${
                filter === 'image' 
                  ? 'bg-sky-500 text-white shadow-[0_0_15px_rgba(14,165,233,0.4)]' 
                  : 'bg-slate-900 text-slate-400 border border-slate-800 hover:border-sky-500 hover:text-white'
              }`}
            >
              <ImageIcon size={18} /> Fotos
            </button>
            <button
              onClick={() => setFilter('video')}
              className={`flex items-center gap-2 px-6 py-2 rounded-full font-semibold transition-all ${
                filter === 'video' 
                  ? 'bg-red-600 text-white shadow-[0_0_15px_rgba(220,38,38,0.4)]' 
                  : 'bg-slate-900 text-slate-400 border border-slate-800 hover:border-red-500 hover:text-white'
              }`}
            >
              <Film size={18} /> Videos
            </button>
          </div>
        </div>

        {/* Grid Layout - Masonry / Bento Style */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[250px] grid-flow-dense">
          {filteredItems.map((item) => (
            <div 
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className={`group relative rounded-xl overflow-hidden cursor-pointer border border-slate-800 hover:border-yellow-500/50 transition-all duration-300 ${
                // Videos ocupan 2x2 en pantallas medianas y grandes, pero 1x1 en móviles para no deformar el layout
                (item.type === 'video' && filter === 'all') 
                  ? 'col-span-1 row-span-1 sm:col-span-2 sm:row-span-2' 
                  : 'col-span-1 row-span-1'
              }`}
            >
              <img 
                src={item.src} 
                alt={`Galería Carceglia Team - ${item.category}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              
              {/* Overlay - Text removed as requested */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                 <div className="bg-black/50 p-3 rounded-full backdrop-blur-sm border border-white/20">
                    {item.type === 'video' ? <Play size={24} className="text-white fill-white" /> : <Maximize2 size={24} className="text-white" />}
                 </div>
              </div>

              {/* Video Indicator (Big Play Button for videos in initial view) */}
              {item.type === 'video' && (
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 sm:w-20 sm:h-20 bg-red-600/90 rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform z-10">
                  <Play size={32} className="text-white fill-white ml-2 sm:w-10 sm:h-10" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedItem && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/95 backdrop-blur-md animate-in fade-in duration-200">
          <button 
            onClick={() => setSelectedItem(null)}
            className="absolute top-6 right-6 text-slate-400 hover:text-white transition-colors z-[110]"
          >
            <X size={40} />
          </button>

          <div className="relative w-full max-w-6xl max-h-[90vh] flex flex-col items-center justify-center">
            {selectedItem.type === 'video' && selectedItem.videoUrl ? (
              <div className="w-full aspect-video rounded-xl overflow-hidden shadow-2xl border border-slate-800 bg-black">
                <iframe 
                  src={selectedItem.videoUrl}
                  className="w-full h-full"
                  allow="autoplay; fullscreen"
                  title="Video"
                />
              </div>
            ) : (
              <img 
                src={selectedItem.src} 
                alt="Imagen de galería"
                className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
              />
            )}
            
            {/* Title/Category Removed from Lightbox */}
          </div>
        </div>
      )}
    </section>
  );
};