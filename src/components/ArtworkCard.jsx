import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ArtworkMeta from './ArtworkMeta';

export default function ArtworkCard({
  artwork,
  aspectClass = '',
  priority = false,
  className = ''
}) {
  const [imgLoaded, setImgLoaded] = useState(false);

  // Aspect ratio fallback
  const getAspect = () => {
    if (aspectClass) return aspectClass;
    switch (artwork.aspect) {
      case 'portrait':
        return 'aspect-[4/5]';
      case 'wide':
        return 'aspect-[16/9]';
      case 'square':
        return 'aspect-square';
      default:
        return 'aspect-[16/11]';
    }
  };

  return (
    <Link
      to={`/work/${artwork.slug}`}
      className={`group block focus:outline-none ${className}`}
      aria-label={`View artwork: ${artwork.title}`}
    >
      {/* Editorial Image Frame */}
      <div className={`relative overflow-hidden bg-gallery-200 ${getAspect()}`}>
        <img
          src={artwork.image}
          alt={artwork.title}
          loading={priority ? 'eager' : 'lazy'}
          onLoad={() => setImgLoaded(true)}
          className={`w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-[1.02] ${
            imgLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        />

        {/* Quiet Editorial Overlay Indicator on Hover */}
        <div className="absolute inset-0 bg-gallery-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none flex items-end p-4 sm:p-6">
          <span className="bg-gallery-100 text-gallery-900 text-2xs uppercase tracking-widest-editorial px-3 py-1 font-medium shadow-sm">
            Catalogue Specimen ↗
          </span>
        </div>
      </div>

      {/* Museum Typographic Label */}
      <div className="mt-3 sm:mt-4">
        <ArtworkMeta artwork={artwork} />
      </div>
    </Link>
  );
}

