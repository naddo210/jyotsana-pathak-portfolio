import React from 'react';

export default function ArtworkMeta({ artwork, compact = false }) {
  if (!artwork) return null;

  return (
    <div className={`space-y-1 ${compact ? 'text-xs' : 'text-sm'}`}>
      <div className="flex items-baseline justify-between gap-4">
        <h3 className="font-editorial text-lg sm:text-xl text-gallery-900 tracking-tight group-hover:text-terracotta transition-colors">
          {artwork.title}
        </h3>
        {artwork.year && (
          <span className="text-2xs font-mono text-gallery-500 uppercase tracking-widest flex-shrink-0">
            {artwork.year}
          </span>
        )}
      </div>

      <div className="flex items-center flex-wrap gap-x-3 text-2xs uppercase tracking-widest-editorial text-gallery-600 font-medium">
        {artwork.medium && <span>{artwork.medium}</span>}
        {artwork.medium && artwork.category && <span className="text-gallery-400">•</span>}
        {artwork.category && <span>{artwork.category}</span>}
      </div>
    </div>
  );
}

