import React from 'react';
import { Link } from 'react-router-dom';
import { practiceCategories } from '../data/practice';
import ImageReveal from './ImageReveal';

export default function PracticeList({ showLink = false }) {
  return (
    <div className="divide-y divide-gallery-300 border-t border-b border-gallery-300">
      {practiceCategories.map((item, index) => (
        <ImageReveal key={item.id} delay={index * 0.08}>
          <div className="py-10 sm:py-14 grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-10 items-start">
            {/* Number */}
            <div className="md:col-span-2">
              <span className="font-mono text-xs sm:text-sm text-terracotta tracking-widest uppercase">
                /{item.number}
              </span>
            </div>

            {/* Title & Philosophy */}
            <div className="md:col-span-4 space-y-2">
              <h3 className="font-editorial text-2xl sm:text-3xl lg:text-4xl text-gallery-900 tracking-tight">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm text-gallery-600 font-light leading-relaxed">
                {item.description}
              </p>
            </div>

            {/* Disciplines Editorial Sublist */}
            <div className="md:col-span-6">
              <span className="text-[10px] uppercase tracking-widest-editorial text-gallery-500 block mb-3">
                Techniques & Modalities
              </span>
              <ul className="grid grid-cols-2 sm:grid-cols-3 gap-y-2 gap-x-4 text-xs tracking-wider uppercase text-gallery-800 font-medium">
                {item.disciplines.map((discipline) => (
                  <li key={discipline} className="flex items-center space-x-2">
                    <span className="w-1 h-1 bg-terracotta/60 rounded-full" />
                    <span>{discipline}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </ImageReveal>
      ))}

      {showLink && (
        <div className="py-8 text-right">
          <Link
            to="/practice"
            className="inline-flex items-center space-x-2 text-xs uppercase tracking-widest-editorial text-gallery-900 hover:text-terracotta font-semibold transition-colors group"
          >
            <span>Read Complete Practice Methodology</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div>
      )}
    </div>
  );
}

