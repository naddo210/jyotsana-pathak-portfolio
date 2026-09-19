import React, { useState, useMemo } from 'react';
import PageTransition from '../components/PageTransition';
import SectionHeading from '../components/SectionHeading';
import ArchiveFilter from '../components/ArchiveFilter';
import ArtworkGrid from '../components/ArtworkGrid';
import { artworks, artworkCategories } from '../data/artworks';

export default function Work() {
  const [activeCategory, setActiveCategory] = useState('ALL');

  // Compute item counts per category
  const categoryCounts = useMemo(() => {
    const counts = { ALL: artworks.length };
    artworkCategories.forEach((cat) => {
      if (cat !== 'ALL') {
        counts[cat] = artworks.filter((item) => item.category === cat).length;
      }
    });
    return counts;
  }, []);

  // Filtered artworks
  const filteredArtworks = useMemo(() => {
    if (activeCategory === 'ALL') return artworks;
    return artworks.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  return (
    <PageTransition>
      <div className="space-y-12 sm:space-y-16 pt-6 sm:pt-10">
        
        {/* Archive Title & Editorial Header */}
        <div className="space-y-3">
          <span className="text-2xs font-mono text-terracotta tracking-archival uppercase block">
            Catalogue Specimen Index
          </span>
          <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-4 border-b border-gallery-300 pb-8">
            <h1 className="font-editorial text-4xl sm:text-6xl text-gallery-900 tracking-tight">
              Artwork Archive
            </h1>
            <p className="text-xs uppercase tracking-widest-editorial text-gallery-600 max-w-md">
              A comprehensive index of studio studies, sculptural objects, and traditional Indian heritage compositions.
            </p>
          </div>
        </div>

        {/* Minimalist Archive Filter */}
        <ArchiveFilter
          categories={artworkCategories}
          activeCategory={activeCategory}
          onSelectCategory={setActiveCategory}
          counts={categoryCounts}
        />

        {/* Active Filter State Summary */}
        <div className="flex items-center justify-between text-2xs uppercase tracking-widest text-gallery-500 pb-2">
          <span>
            Displaying {filteredArtworks.length} {filteredArtworks.length === 1 ? 'Specimen' : 'Specimens'} in {activeCategory}
          </span>
          <span className="font-mono">Mumbai Archive • SNDT Churchgate</span>
        </div>

        {/* Artwork Grid with Asymmetric Spans */}
        <ArtworkGrid artworks={filteredArtworks} isCurated={false} />

      </div>
    </PageTransition>
  );
}

