import React from 'react';
import { Link } from 'react-router-dom';
import PageTransition from '../components/PageTransition';
import SectionHeading from '../components/SectionHeading';
import ArtworkGrid from '../components/ArtworkGrid';
import PracticeList from '../components/PracticeList';
import ImageReveal from '../components/ImageReveal';
import { artistInfo } from '../data/artist';
import { artworks } from '../data/artworks';
import { processHighlights } from '../data/workshops';

export default function Home() {
  // Filter curated selection (strongest 10 pieces)
  const curatedArtworks = artworks.filter((art) => art.featured).slice(0, 10);
  const heroArtwork = artworks[0]; // Wash Technique Study

  return (
    <PageTransition>
      <div className="space-y-24 sm:space-y-36 lg:space-y-44">
        
        {/* =========================================================
            08 — HERO: Opening Page of Art Catalogue
            ========================================================= */}
        <section className="pt-8 sm:pt-14 lg:pt-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-end">
            {/* Left Column: Masthead & Archival Metadata */}
            <div className="lg:col-span-6 space-y-8 sm:space-y-12">
              <div className="space-y-3">
                <span className="text-2xs sm:text-xs font-mono tracking-archival text-terracotta uppercase block">
                  Exhibition Catalogue No. 01
                </span>
                <h1 className="font-editorial text-5xl sm:text-7xl lg:text-8xl tracking-tight text-gallery-900 leading-[0.92]">
                  JYOTSANA<br />PATHAK
                </h1>
              </div>

              <div className="space-y-4 max-w-md pt-2 border-t border-gallery-300">
                <div className="flex items-center justify-between text-2xs uppercase tracking-widest-editorial text-gallery-600">
                  <span className="font-medium text-gallery-900">Visual Artist</span>
                  <span>Mumbai, India</span>
                </div>
                <p className="text-xs text-gallery-600 font-light leading-relaxed">
                  B.V.A. SNDT University, Churchgate (2022–2026). Specialized in painting, tactile clay sculpture, academic life drawing, and traditional Indian visual languages.
                </p>
              </div>

              {/* Minimalist Action & Navigation Anchor */}
              <div className="flex items-center space-x-8 pt-2">
                <a
                  href="#selected-work"
                  className="text-xs uppercase tracking-widest-editorial font-medium text-gallery-900 hover:text-terracotta transition-colors flex items-center space-x-2 group"
                >
                  <span>Explore Selected Work</span>
                  <span className="group-hover:translate-y-0.5 transition-transform">↓</span>
                </a>
                <Link
                  to="/about"
                  className="text-xs uppercase tracking-widest-editorial text-gallery-500 hover:text-gallery-900 transition-colors"
                >
                  Artist Bio
                </Link>
              </div>
            </div>

            {/* Right Column: Prominent Hero Specimen */}
            <div className="lg:col-span-6">
              <ImageReveal delay={0.1}>
                <Link
                  to={`/work/${heroArtwork.slug}`}
                  className="group block relative overflow-hidden bg-gallery-200 aspect-[4/3] sm:aspect-[16/11]"
                  aria-label={`Featured artwork: ${heroArtwork.title}`}
                >
                  <img
                    src={heroArtwork.image}
                    alt={heroArtwork.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                    loading="eager"
                  />
                  <div className="absolute bottom-0 inset-x-0 bg-gallery-900/40 p-4 sm:p-6 text-gallery-100 flex items-baseline justify-between backdrop-blur-[2px]">
                    <div>
                      <p className="font-editorial text-lg sm:text-xl">{heroArtwork.title}</p>
                      <p className="text-2xs uppercase tracking-widest text-gallery-300">
                        {heroArtwork.medium}
                      </p>
                    </div>
                    <span className="text-2xs font-mono text-gallery-300">
                      {heroArtwork.year}
                    </span>
                  </div>
                </Link>
              </ImageReveal>
            </div>
          </div>
        </section>


        {/* =========================================================
            09 — ARTIST INTRODUCTION: Editorial Typography & Whitespace
            ========================================================= */}
        <section className="py-12 border-t border-b border-gallery-300">
          <div className="max-w-4xl mx-auto text-center space-y-6 sm:space-y-8">
            <span className="text-2xs uppercase tracking-widest-editorial text-terracotta font-medium">
              Profile & Artistic Ethos
            </span>
            <blockquote className="font-editorial text-2xl sm:text-4xl lg:text-5xl text-gallery-900 leading-snug tracking-tight font-light italic">
              "{artistInfo.statement}"
            </blockquote>
            <p className="text-xs sm:text-sm text-gallery-600 font-light max-w-2xl mx-auto leading-relaxed">
              Grounding her studio methodology in direct observation, tactile earthenware shaping, and classical Indian folk idioms, Pathak's works balance disciplined formal structure with organic material freedom.
            </p>
          </div>
        </section>


        {/* =========================================================
            10 — SELECTED WORK: Curated Asymmetric Gallery
            ========================================================= */}
        <section id="selected-work" className="scroll-mt-28">
          <SectionHeading
            number="01"
            subtitle="Curated Exhibition"
            title="Selected Work"
            description="A curated selection of primary studio outcomes spanning wash painting, clay sculpture, live landscape studies, and traditional heritage forms."
          />

          {/* Rhythmic Asymmetric Layout */}
          <ArtworkGrid artworks={curatedArtworks} isCurated={true} />

          {/* Complete Archive Link */}
          <div className="mt-16 sm:mt-24 pt-8 border-t border-gallery-300 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs uppercase tracking-widest-editorial text-gallery-500">
              Showing {curatedArtworks.length} of {artworks.length} works from the permanent catalogue
            </span>
            <Link
              to="/work"
              className="inline-flex items-center space-x-2 text-xs uppercase tracking-widest-editorial font-semibold text-gallery-900 hover:text-terracotta transition-colors group"
            >
              <span>Explore Full Archive Index</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>
        </section>


        {/* =========================================================
            12 — ARTISTIC PRACTICE: Editorial Typographic List
            ========================================================= */}
        <section>
          <SectionHeading
            number="02"
            subtitle="Methodology & Mediums"
            title="Artistic Practice"
            description="Explorations organized across 5 core discipline areas: painting, structural drawing, clay sculpture, traditional heritage arts, and architectural murals."
          />

          <PracticeList showLink={true} />
        </section>


        {/* =========================================================
            14 — PROCESS / WORKSHOPS: Limited, Authentic Glimpses
            ========================================================= */}
        <section>
          <SectionHeading
            number="03"
            subtitle="Studio & Fieldwork"
            title="Process & Workshops"
            description="Direct engagement through studio residencies, museum masterclasses, and open-air landscape studies."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
            {processHighlights.map((proc, index) => (
              <ImageReveal key={proc.id} delay={index * 0.1}>
                <div className="space-y-4 group">
                  <div className="relative overflow-hidden bg-gallery-200 aspect-[4/3]">
                    <img
                      src={proc.image}
                      alt={proc.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                    />
                    <span className="absolute top-3 left-3 bg-gallery-100/90 text-gallery-900 text-[10px] uppercase tracking-widest-editorial px-2.5 py-0.5 font-medium backdrop-blur-sm">
                      {proc.tag}
                    </span>
                  </div>

                  <div className="space-y-1">
                    <h3 className="font-editorial text-lg text-gallery-900 tracking-tight">
                      {proc.title}
                    </h3>
                    <p className="text-2xs uppercase tracking-widest text-terracotta font-medium">
                      {proc.location}
                    </p>
                    <p className="text-xs text-gallery-600 font-light leading-relaxed pt-1">
                      {proc.description}
                    </p>
                  </div>
                </div>
              </ImageReveal>
            ))}
          </div>
        </section>


        {/* =========================================================
            17 — ABOUT PREVIEW: Editorial Profile Summary
            ========================================================= */}
        <section className="border-t border-gallery-300 pt-16 sm:pt-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5 space-y-4">
              <span className="text-2xs font-mono text-terracotta tracking-widest uppercase">
                [04] Biographic Sketch
              </span>
              <h2 className="font-editorial text-3xl sm:text-4xl text-gallery-900 tracking-tight">
                About the Artist
              </h2>
              <p className="text-xs uppercase tracking-widest-editorial text-gallery-600">
                SNDT Women's University • Churchgate Campus
              </p>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <p className="text-sm text-gallery-700 font-light leading-relaxed">
                Jyotsana Pathak is an emerging visual artist pursuing her Bachelor of Fine Arts (B.V.A., 2022–2026) at SNDT University, Churchgate, Mumbai. Concurrently serving as an Art Teacher at <em>I Am An Artist</em> and having completed studio internships with <em>Hands in Clay</em>, her work brings traditional craftsmanship into intimate contemporary dialogues.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-4 border-t border-gallery-300 text-xs">
                <div>
                  <span className="text-[10px] uppercase tracking-widest-editorial text-gallery-500 block mb-1">
                    Education
                  </span>
                  <p className="font-medium text-gallery-900">B.V.A. Fine Arts</p>
                  <p className="text-2xs text-gallery-600">SNDT Churchgate (2022–2026)</p>
                </div>

                <div>
                  <span className="text-[10px] uppercase tracking-widest-editorial text-gallery-500 block mb-1">
                    Teaching
                  </span>
                  <p className="font-medium text-gallery-900">Art Teacher</p>
                  <p className="text-2xs text-gallery-600">I Am An Artist (2026–Present)</p>
                </div>

                <div>
                  <span className="text-[10px] uppercase tracking-widest-editorial text-gallery-500 block mb-1">
                    Recognition
                  </span>
                  <p className="font-medium text-gallery-900">2nd Prize</p>
                  <p className="text-2xs text-gallery-600">Income Tax Department</p>
                </div>
              </div>

              <div className="pt-4">
                <Link
                  to="/about"
                  className="inline-flex items-center space-x-2 text-xs uppercase tracking-widest-editorial font-semibold text-gallery-900 hover:text-terracotta transition-colors group"
                >
                  <span>Read Full Biography & Background</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              </div>
            </div>
          </div>
        </section>


        {/* =========================================================
            21 — CONTACT: Quiet Closing Section
            ========================================================= */}
        <section className="border-t border-gallery-300 pt-16 sm:pt-20">
          <div className="max-w-3xl space-y-6">
            <span className="text-2xs font-mono text-terracotta tracking-widest uppercase">
              [05] Inquiries & Dialogue
            </span>
            <h2 className="font-editorial text-4xl sm:text-5xl lg:text-6xl text-gallery-900 tracking-tight">
              Contact
            </h2>
            <p className="text-sm text-gallery-600 font-light leading-relaxed">
              For original artwork acquisitions, commissioned sculptures, architectural murals, or educational workshops, inquiries are welcomed directly via email.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row sm:items-baseline gap-6">
              <a
                href={`mailto:${artistInfo.contact.email}`}
                className="font-editorial text-2xl sm:text-3xl text-gallery-900 hover:text-terracotta underline underline-offset-8 transition-colors"
              >
                {artistInfo.contact.email}
              </a>
              <span className="text-xs uppercase tracking-widest-editorial text-gallery-500">
                Mumbai, Maharashtra
              </span>
            </div>
          </div>
        </section>

      </div>
    </PageTransition>
  );
}

