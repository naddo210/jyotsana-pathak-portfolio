import React from 'react';
import PageTransition from '../components/PageTransition';
import SectionHeading from '../components/SectionHeading';
import PracticeList from '../components/PracticeList';
import ImageReveal from '../components/ImageReveal';
import { processHighlights } from '../data/workshops';

export default function Practice() {
  return (
    <PageTransition>
      <div className="space-y-20 sm:space-y-28 lg:space-y-36 pt-6 sm:pt-10">
        
        {/* Editorial Masthead */}
        <div className="space-y-4 max-w-4xl">
          <span className="text-2xs font-mono text-terracotta tracking-archival uppercase block">
            Practice & Materiality
          </span>
          <h1 className="font-editorial text-4xl sm:text-6xl lg:text-7xl text-gallery-900 tracking-tight leading-[0.95]">
            Artistic Practice & Methodology
          </h1>
          <p className="text-sm sm:text-base text-gallery-700 font-light leading-relaxed max-w-2xl pt-2">
            An archival documentation of mediums, structural investigations, surface chemistry, and indigenous Indian traditional crafts practiced within academic and studio contexts in Mumbai.
          </p>
        </div>

        {/* Core Philosophy: 4 Verbs */}
        <div className="border-t border-b border-gallery-300 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-1">
              <span className="text-2xs font-mono text-terracotta">01</span>
              <p className="font-editorial text-2xl sm:text-3xl text-gallery-900">Making</p>
              <p className="text-2xs uppercase tracking-widest text-gallery-500">Tactile Construction</p>
            </div>
            <div className="space-y-1">
              <span className="text-2xs font-mono text-terracotta">02</span>
              <p className="font-editorial text-2xl sm:text-3xl text-gallery-900">Learning</p>
              <p className="text-2xs uppercase tracking-widest text-gallery-500">Academic Rigor</p>
            </div>
            <div className="space-y-1">
              <span className="text-2xs font-mono text-terracotta">03</span>
              <p className="font-editorial text-2xl sm:text-3xl text-gallery-900">Observing</p>
              <p className="text-2xs uppercase tracking-widest text-gallery-500">Plein Air & Life Study</p>
            </div>
            <div className="space-y-1">
              <span className="text-2xs font-mono text-terracotta">04</span>
              <p className="font-editorial text-2xl sm:text-3xl text-gallery-900">Experimenting</p>
              <p className="text-2xs uppercase tracking-widest text-gallery-500">Mineral & Clay Bodies</p>
            </div>
          </div>
        </div>

        {/* 5 Editorial Practice Categories */}
        <section>
          <SectionHeading
            number="01"
            subtitle="Disciplines Catalogue"
            title="Mediums & Techniques"
            description="Organized into five core disciplines encompassing fluid pigments, linear drawing, dimensional sculpture, indigenous heritage arts, and spatial murals."
          />

          <PracticeList showLink={false} />
        </section>

        {/* Material & Chemistry Note (Editorial Essay) */}
        <section className="bg-gallery-200/50 p-8 sm:p-12 lg:p-16 border border-gallery-300">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            <div className="lg:col-span-4 space-y-2">
              <span className="text-2xs font-mono text-terracotta tracking-widest uppercase">
                Studio Notes
              </span>
              <h3 className="font-editorial text-2xl sm:text-3xl text-gallery-900">
                Earth, Water, & Mineral Pigments
              </h3>
            </div>
            <div className="lg:col-span-8 space-y-4 text-xs sm:text-sm text-gallery-700 font-light leading-relaxed">
              <p>
                In the watercolor wash practice, the primary dialogue occurs between the sizing of cold-press archival paper and the gravitational settling of sedimented earth pigments. Transparent washes are layered through gradual dehydrations, allowing underlying light to emerge through successive glazes.
              </p>
              <p>
                In parallel, the sculptural work developed at <em>Hands in Clay</em> and during academic studio hours relies on earthenware and terracotta bodies. Form is built slowly through coil and slab manipulation, respecting the drying shrinkage of unglazed clay before experiencing kiln heat.
              </p>
              <p>
                The traditional idioms—Warli, Lippan, Pattachitra, and Madhubani—are approached not merely as decorative styles, but as disciplined historic technologies. From grinding chalk and mud binders to mixing natural geru earth pigments, the artist preserves the authentic handcraft methods rooted in regional communities.
              </p>
            </div>
          </div>
        </section>

        {/* Workshops & Fieldwork Documentation */}
        <section>
          <SectionHeading
            number="02"
            subtitle="Residencies & Fieldwork"
            title="Workshops & Process Archive"
            description="Field documentation of live painting excursions, pottery residency at Hands in Clay, and museum workshops at the National Gallery of Modern Art (NGMA)."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
            {processHighlights.map((proc, index) => (
              <ImageReveal key={proc.id} delay={index * 0.1}>
                <div className="space-y-4">
                  <div className="relative overflow-hidden bg-gallery-200 aspect-[4/3]">
                    <img
                      src={proc.image}
                      alt={proc.title}
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                    <span className="absolute top-3 left-3 bg-gallery-100/90 text-gallery-900 text-[10px] uppercase tracking-widest-editorial px-2.5 py-0.5 font-medium">
                      {proc.tag}
                    </span>
                  </div>

                  <div className="space-y-1">
                    <h3 className="font-editorial text-xl text-gallery-900 tracking-tight">
                      {proc.title}
                    </h3>
                    <p className="text-2xs uppercase tracking-widest text-terracotta font-medium">
                      {proc.location}
                    </p>
                    <p className="text-2xs uppercase tracking-wider text-gallery-500">
                      Medium: {proc.medium}
                    </p>
                    <p className="text-xs text-gallery-600 font-light leading-relaxed pt-2">
                      {proc.description}
                    </p>
                  </div>
                </div>
              </ImageReveal>
            ))}
          </div>
        </section>

      </div>
    </PageTransition>
  );
}

