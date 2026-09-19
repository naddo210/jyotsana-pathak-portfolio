import React from 'react';
import PageTransition from '../components/PageTransition';
import ImageReveal from '../components/ImageReveal';
import { artistInfo } from '../data/artist';

export default function About() {
  return (
    <PageTransition>
      <div className="space-y-20 sm:space-y-28 lg:space-y-36 pt-6 sm:pt-10">
        
        {/* Editorial Masthead & Biographic Portrait */}
        <section>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Column: Portrait & Captions */}
            <div className="lg:col-span-5 space-y-4">
              <ImageReveal>
                <div className="relative overflow-hidden bg-gallery-200 aspect-[3/4]">
                  <img
                    src="/images/artist/portrait.jpg"
                    alt={artistInfo.name}
                    className="w-full h-full object-cover grayscale contrast-105"
                    loading="eager"
                  />
                  <div className="absolute bottom-3 left-3 bg-gallery-100/90 text-gallery-900 text-2xs uppercase tracking-widest px-2.5 py-1">
                    Studio Portrait • Mumbai
                  </div>
                </div>
              </ImageReveal>

              <div className="pt-2 text-2xs uppercase tracking-widest text-gallery-500 flex justify-between">
                <span>Jyotsana Pathak</span>
                <span>Visual Artist</span>
              </div>
            </div>

            {/* Right Column: Editorial Biography */}
            <div className="lg:col-span-7 space-y-8">
              <div className="space-y-3">
                <span className="text-2xs font-mono text-terracotta tracking-archival uppercase block">
                  Artist Profile
                </span>
                <h1 className="font-editorial text-4xl sm:text-6xl text-gallery-900 tracking-tight leading-[0.95]">
                  About Jyotsana Pathak
                </h1>
                <p className="text-xs uppercase tracking-widest-editorial text-gallery-600">
                  Visual Artist based in Mumbai, Maharashtra
                </p>
              </div>

              {/* Statement Callout */}
              <div className="border-l-2 border-terracotta pl-6 py-1">
                <p className="font-editorial text-xl sm:text-2xl text-gallery-900 italic leading-snug">
                  "{artistInfo.statement}"
                </p>
              </div>

              {/* Multi-paragraph Bio */}
              <div className="space-y-5 text-sm sm:text-base text-gallery-700 font-light leading-relaxed">
                {artistInfo.bio.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>

              {/* Languages */}
              <div className="pt-4 border-t border-gallery-300">
                <span className="text-2xs uppercase tracking-widest-editorial text-gallery-500 block mb-2">
                  Languages
                </span>
                <div className="flex space-x-6 text-xs text-gallery-800 uppercase tracking-wider font-medium">
                  {artistInfo.languages.map((lang) => (
                    <span key={lang.name}>
                      {lang.name} <span className="text-gallery-400 font-normal font-mono">({lang.level})</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </section>


        {/* =========================================================
            Academic Formation & Experience (No Resume Clichés)
            ========================================================= */}
        <section className="border-t border-gallery-300 pt-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 sm:gap-16">
            
            {/* Education */}
            <div className="md:col-span-6 space-y-6">
              <div className="space-y-1">
                <span className="text-2xs font-mono text-terracotta tracking-widest uppercase">
                  Formation
                </span>
                <h2 className="font-editorial text-3xl text-gallery-900 tracking-tight">
                  Education
                </h2>
              </div>

              <div className="border-t border-gallery-300 pt-6 space-y-6">
                {artistInfo.education.map((edu, idx) => (
                  <div key={idx} className="space-y-1">
                    <div className="flex justify-between items-baseline">
                      <h3 className="font-editorial text-xl sm:text-2xl text-gallery-900">
                        {edu.degree}
                      </h3>
                      <span className="font-mono text-2xs text-gallery-500">{edu.period}</span>
                    </div>
                    <p className="text-xs uppercase tracking-widest-editorial text-terracotta font-medium">
                      {edu.institution}
                    </p>
                    <p className="text-xs text-gallery-600 font-light pt-1">
                      Academic curriculum focused on fine arts fundamentals, academic drawing, painting techniques, history of art, and structural composition.
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Experience */}
            <div className="md:col-span-6 space-y-6">
              <div className="space-y-1">
                <span className="text-2xs font-mono text-terracotta tracking-widest uppercase">
                  Studio & Pedagogy
                </span>
                <h2 className="font-editorial text-3xl text-gallery-900 tracking-tight">
                  Experience
                </h2>
              </div>

              <div className="border-t border-gallery-300 pt-6 space-y-8">
                {artistInfo.experience.map((exp, idx) => (
                  <div key={idx} className="space-y-1">
                    <div className="flex justify-between items-baseline">
                      <h3 className="font-editorial text-xl sm:text-2xl text-gallery-900">
                        {exp.role}
                      </h3>
                      <span className="font-mono text-2xs text-gallery-500">{exp.period}</span>
                    </div>
                    <p className="text-xs uppercase tracking-widest-editorial text-terracotta font-medium">
                      {exp.organization}
                    </p>
                    <p className="text-xs text-gallery-600 font-light pt-1 leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>


        {/* =========================================================
            18 — RECOGNITION: Minimal Editorial Treatment
            ========================================================= */}
        <section className="border-t border-gallery-300 pt-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-4 space-y-1">
              <span className="text-2xs font-mono text-terracotta tracking-widest uppercase">
                Honors & Juried Selection
              </span>
              <h2 className="font-editorial text-3xl text-gallery-900 tracking-tight">
                Recognition
              </h2>
            </div>

            <div className="md:col-span-8">
              <div className="border border-gallery-300 p-8 sm:p-12 bg-gallery-200/40">
                <div className="flex items-start space-x-6">
                  <span className="font-mono text-3xl sm:text-4xl text-terracotta font-light">
                    02
                  </span>
                  <div className="space-y-2">
                    <span className="text-2xs uppercase tracking-widest-editorial text-gallery-500 block">
                      Award Distinction
                    </span>
                    <h3 className="font-editorial text-2xl sm:text-3xl text-gallery-900">
                      2nd Prize — Art Competition
                    </h3>
                    <p className="text-xs uppercase tracking-widest text-gallery-700 font-medium">
                      Organized by the Income Tax Department
                    </p>
                    <p className="text-xs text-gallery-600 font-light pt-1">
                      Juried competition recognizing creative composition, technical draftsmanship, and aesthetic merit.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* =========================================================
            19 — SKILLS: Editorial Typographic List (No Bars/Ratings)
            ========================================================= */}
        <section className="border-t border-gallery-300 pt-16 pb-8">
          <div className="space-y-8">
            <div className="space-y-1">
              <span className="text-2xs font-mono text-terracotta tracking-widest uppercase">
                Artistic Competencies
              </span>
              <h2 className="font-editorial text-3xl text-gallery-900 tracking-tight">
                Studio Skills & Technical Disciplines
              </h2>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-y-6 gap-x-8 border-t border-b border-gallery-300 py-10">
              {artistInfo.skills.map((skill, index) => (
                <div key={skill} className="space-y-1">
                  <span className="text-2xs font-mono text-gallery-400">
                    [{String(index + 1).padStart(2, '0')}]
                  </span>
                  <p className="font-editorial text-xl sm:text-2xl text-gallery-900 tracking-tight">
                    {skill}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

      </div>
    </PageTransition>
  );
}

