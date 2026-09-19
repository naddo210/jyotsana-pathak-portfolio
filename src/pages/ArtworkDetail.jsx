import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import PageTransition from '../components/PageTransition';
import ImageReveal from '../components/ImageReveal';
import { artworks } from '../data/artworks';
import { artistInfo } from '../data/artist';

export default function ArtworkDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();

  // Find artwork index
  const currentIndex = artworks.findIndex((art) => art.slug === slug);
  const artwork = artworks[currentIndex];

  // Scroll to top on slug change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!artwork) {
    return (
      <PageTransition>
        <div className="py-24 text-center space-y-6">
          <h2 className="font-editorial text-4xl text-gallery-900">Artwork Not Found</h2>
          <p className="text-xs uppercase tracking-widest text-gallery-600">
            The requested artwork catalogue entry could not be located.
          </p>
          <Link
            to="/work"
            className="inline-block text-xs uppercase tracking-widest-editorial font-semibold text-terracotta underline underline-offset-4"
          >
            ← Return to Artwork Archive
          </Link>
        </div>
      </PageTransition>
    );
  }

  // Previous and Next artworks
  const prevArtwork = artworks[(currentIndex - 1 + artworks.length) % artworks.length];
  const nextArtwork = artworks[(currentIndex + 1) % artworks.length];

  return (
    <PageTransition>
      <div className="space-y-12 sm:space-y-16 pt-4 sm:pt-8">
        
        {/* Top Bar: Return Link & Specimen Identifier */}
        <div className="flex items-center justify-between border-b border-gallery-300 pb-4 text-xs uppercase tracking-widest-editorial">
          <Link
            to="/work"
            className="text-gallery-600 hover:text-gallery-900 transition-colors flex items-center space-x-2 group font-medium"
          >
            <span className="group-hover:-translate-x-1 transition-transform">←</span>
            <span>Back to Work Archive</span>
          </Link>

          <span className="font-mono text-gallery-500 text-2xs">
            Specimen [{String(currentIndex + 1).padStart(2, '0')} / {String(artworks.length).padStart(2, '0')}]
          </span>
        </div>

        {/* Specimen Presentation & Wall Label */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Main Large Artwork Image Frame */}
          <div className="lg:col-span-8 space-y-4">
            <ImageReveal>
              <div className="relative overflow-hidden bg-gallery-200 border border-gallery-300/40">
                <img
                  src={artwork.image}
                  alt={artwork.title}
                  className="w-full h-auto max-h-[80vh] object-contain mx-auto"
                  loading="eager"
                />
              </div>
            </ImageReveal>

            <div className="flex items-center justify-between text-2xs uppercase tracking-widest text-gallery-500 pt-1">
              <span>Jyotsana Pathak Studio Archive</span>
              <span>{artwork.category}</span>
            </div>
          </div>

          {/* Museum Wall Label (Editorial Information) */}
          <div className="lg:col-span-4 space-y-8 lg:sticky lg:top-32">
            <div className="space-y-4 border-b border-gallery-300 pb-8">
              <span className="text-2xs font-mono text-terracotta tracking-archival uppercase block">
                Catalogue Entry
              </span>
              <h1 className="font-editorial text-3xl sm:text-4xl lg:text-5xl text-gallery-900 tracking-tight leading-[1.05]">
                {artwork.title}
              </h1>

              {/* Curatorial Metadata Block */}
              <div className="space-y-2 pt-2 text-xs text-gallery-700">
                {artwork.medium && (
                  <div className="flex justify-between py-1.5 border-b border-gallery-200">
                    <span className="text-gallery-500 uppercase text-2xs tracking-widest">Medium</span>
                    <span className="font-medium text-right">{artwork.medium}</span>
                  </div>
                )}
                {artwork.year && (
                  <div className="flex justify-between py-1.5 border-b border-gallery-200">
                    <span className="text-gallery-500 uppercase text-2xs tracking-widest">Year</span>
                    <span className="font-mono">{artwork.year}</span>
                  </div>
                )}
                {artwork.category && (
                  <div className="flex justify-between py-1.5 border-b border-gallery-200">
                    <span className="text-gallery-500 uppercase text-2xs tracking-widest">Discipline</span>
                    <span className="uppercase tracking-wider">{artwork.category}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Description & Curatorial Notes */}
            {artwork.description && (
              <div className="space-y-2">
                <span className="text-2xs uppercase tracking-widest text-gallery-500 block">
                  Curatorial Note
                </span>
                <p className="text-xs sm:text-sm text-gallery-700 font-light leading-relaxed">
                  {artwork.description}
                </p>
              </div>
            )}

          </div>

        </div>

        {/* Catalogue Sequence: Previous / Next Artwork */}
        <div className="pt-12 sm:pt-16 border-t border-gallery-300">
          <div className="grid grid-cols-2 gap-6 sm:gap-12">
            {/* Previous */}
            <Link
              to={`/work/${prevArtwork.slug}`}
              className="group block text-left space-y-1"
            >
              <span className="text-2xs uppercase tracking-widest text-gallery-500 flex items-center space-x-1 group-hover:text-terracotta transition-colors">
                <span>←</span>
                <span>Previous Work</span>
              </span>
              <p className="font-editorial text-lg sm:text-xl text-gallery-900 group-hover:text-terracotta transition-colors truncate">
                {prevArtwork.title}
              </p>
              <p className="text-2xs uppercase tracking-wider text-gallery-500 truncate">
                {prevArtwork.medium}
              </p>
            </Link>

            {/* Next */}
            <Link
              to={`/work/${nextArtwork.slug}`}
              className="group block text-right space-y-1"
            >
              <span className="text-2xs uppercase tracking-widest text-gallery-500 flex items-center justify-end space-x-1 group-hover:text-terracotta transition-colors">
                <span>Next Work</span>
                <span>→</span>
              </span>
              <p className="font-editorial text-lg sm:text-xl text-gallery-900 group-hover:text-terracotta transition-colors truncate">
                {nextArtwork.title}
              </p>
              <p className="text-2xs uppercase tracking-wider text-gallery-500 truncate">
                {nextArtwork.medium}
              </p>
            </Link>
          </div>
        </div>

      </div>
    </PageTransition>
  );
}

