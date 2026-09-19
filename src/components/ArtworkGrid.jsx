import React from 'react';
import ArtworkCard from './ArtworkCard';
import ImageReveal from './ImageReveal';

export default function ArtworkGrid({ artworks = [], isCurated = false }) {
  if (!artworks || artworks.length === 0) {
    return (
      <div className="py-20 text-center text-gallery-600 font-light">
        <p className="font-editorial text-2xl text-gallery-800">No artwork found in this discipline.</p>
        <p className="text-xs uppercase tracking-widest text-gallery-500 mt-2">
          Select another category from the archive index.
        </p>
      </div>
    );
  }

  // If on the curated Home page, render the rhythmic editorial layout
  if (isCurated) {
    return (
      <div className="space-y-16 sm:space-y-24">
        {/* Row 1: Large Featured Landscape + Elegant Vertical Sculpture */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-end">
          {artworks[0] && (
            <div className="lg:col-span-7">
              <ImageReveal>
                <ArtworkCard artwork={artworks[0]} priority={true} />
              </ImageReveal>
            </div>
          )}
          {artworks[1] && (
            <div className="lg:col-span-5 lg:pb-8">
              <ImageReveal delay={0.15}>
                <ArtworkCard artwork={artworks[1]} />
              </ImageReveal>
            </div>
          )}
        </div>

        {/* Row 2: Two Smaller Studies with Asymmetry (e.g. 4 cols vs 8 cols) */}
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-8 sm:gap-12 items-start">
          {artworks[2] && (
            <div className="sm:col-span-5 lg:col-span-4">
              <ImageReveal>
                <ArtworkCard artwork={artworks[2]} />
              </ImageReveal>
            </div>
          )}
          {artworks[3] && (
            <div className="sm:col-span-7 lg:col-span-8">
              <ImageReveal delay={0.15}>
                <ArtworkCard artwork={artworks[3]} />
              </ImageReveal>
            </div>
          )}
        </div>

        {/* Row 3: Wide Mural Work + Square Lippan Relief */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
          {artworks[4] && (
            <div className="lg:col-span-8">
              <ImageReveal>
                <ArtworkCard artwork={artworks[4]} />
              </ImageReveal>
            </div>
          )}
          {artworks[5] && (
            <div className="lg:col-span-4">
              <ImageReveal delay={0.15}>
                <ArtworkCard artwork={artworks[5]} />
              </ImageReveal>
            </div>
          )}
        </div>

        {/* Row 4: Vertical Pattachitra + Ceramic Plate */}
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-8 sm:gap-12 items-end">
          {artworks[6] && (
            <div className="sm:col-span-6 lg:col-span-5">
              <ImageReveal>
                <ArtworkCard artwork={artworks[6]} />
              </ImageReveal>
            </div>
          )}
          {artworks[7] && (
            <div className="sm:col-span-6 lg:col-span-7">
              <ImageReveal delay={0.15}>
                <ArtworkCard artwork={artworks[7]} />
              </ImageReveal>
            </div>
          )}
        </div>

        {/* Row 5: Studio Still Life + Rapid Sketch */}
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-8 sm:gap-12 items-start">
          {artworks[8] && (
            <div className="sm:col-span-6">
              <ImageReveal>
                <ArtworkCard artwork={artworks[8]} />
              </ImageReveal>
            </div>
          )}
          {artworks[9] && (
            <div className="sm:col-span-6">
              <ImageReveal delay={0.15}>
                <ArtworkCard artwork={artworks[9]} />
              </ImageReveal>
            </div>
          )}
        </div>
      </div>
    );
  }

  // Standard Archive Grid (e.g. for /work page with active filters)
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12">
      {artworks.map((artwork, index) => {
        // Asymmetric column spans across 12-col grid
        const spanClass = artwork.gridSpan || 'col-span-12 sm:col-span-6 lg:col-span-6';
        return (
          <div key={artwork.id} className={spanClass}>
            <ImageReveal delay={(index % 3) * 0.1}>
              <ArtworkCard artwork={artwork} />
            </ImageReveal>
          </div>
        );
      })}
    </div>
  );
}

