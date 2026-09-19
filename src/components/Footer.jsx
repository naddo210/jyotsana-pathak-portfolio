import React from 'react';
import { Link } from 'react-router-dom';
import { artistInfo } from '../data/artist';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gallery-300 bg-gallery-100 mt-24 sm:mt-32">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 sm:gap-16 items-start">
          {/* Colophon Masthead */}
          <div className="md:col-span-6 space-y-3">
            <h3 className="font-editorial text-2xl sm:text-3xl text-gallery-900 tracking-tight">
              {artistInfo.name}
            </h3>
            <p className="text-xs uppercase tracking-widest-editorial text-gallery-600">
              {artistInfo.title} — {artistInfo.location}
            </p>
            <p className="text-sm text-gallery-600 max-w-md pt-2 font-light leading-relaxed">
              Fine art practice, traditional Indian visual mediums, structural clay sculpture, and academic drawing archive.
            </p>
          </div>

          {/* Quick Index */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-[11px] uppercase tracking-widest-editorial text-gallery-500 block">
              Index
            </span>
            <ul className="space-y-2 text-xs tracking-widest-editorial uppercase">
              <li>
                <Link to="/work" className="text-gallery-700 hover:text-terracotta transition-colors">
                  Selected Work
                </Link>
              </li>
              <li>
                <Link to="/practice" className="text-gallery-700 hover:text-terracotta transition-colors">
                  Artistic Practice
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gallery-700 hover:text-terracotta transition-colors">
                  About the Artist
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gallery-700 hover:text-terracotta transition-colors">
                  Contact & Inquiries
                </Link>
              </li>
            </ul>
          </div>

          {/* Direct Communication */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-[11px] uppercase tracking-widest-editorial text-gallery-500 block">
              Inquiries
            </span>
            <p className="text-xs text-gallery-700 tracking-wider">
              <a
                href={`mailto:${artistInfo.contact.email}`}
                className="hover:text-terracotta transition-colors underline underline-offset-4"
              >
                {artistInfo.contact.email}
              </a>
            </p>
            <p className="text-xs text-gallery-600 tracking-wide pt-1">
              Instagram: {artistInfo.contact.instagram}
            </p>
            <p className="text-2xs text-gallery-500 uppercase tracking-widest pt-2">
              Churchgate • SNDT B.V.A.
            </p>
          </div>
        </div>

        {/* Hairline Bottom Bar with Designer Credit */}
        <div className="mt-16 pt-8 border-t border-gallery-300 flex flex-col sm:flex-row items-center justify-between gap-3 text-2xs uppercase tracking-widest text-gallery-500">
          <p>© {currentYear} {artistInfo.name}. All rights reserved.</p>
          <p className="tracking-widest-editorial font-medium text-gallery-600">
            Designed by <span className="text-gallery-900 font-semibold">Nadeem Salmani</span>
          </p>
          <p className="font-mono text-[10px]">Digital Exhibition Catalogue & Archive</p>
        </div>
      </div>
    </footer>
  );
}
