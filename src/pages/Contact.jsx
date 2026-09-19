import React, { useState } from 'react';
import PageTransition from '../components/PageTransition';
import { artistInfo } from '../data/artist';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Artwork Acquisition / Loan',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate quiet submission confirmation
    setSubmitted(true);
  };

  return (
    <PageTransition>
      <div className="space-y-16 sm:space-y-24 pt-6 sm:pt-10 max-w-5xl">
        
        {/* Editorial Header */}
        <div className="space-y-4">
          <span className="text-2xs font-mono text-terracotta tracking-archival uppercase block">
            Studio Inquiries & Correspondence
          </span>
          <h1 className="font-editorial text-5xl sm:text-7xl text-gallery-900 tracking-tight leading-[0.92]">
            Contact
          </h1>
          <p className="text-sm sm:text-base text-gallery-700 font-light max-w-xl pt-2 leading-relaxed">
            Inquiries regarding original artwork acquisitions, commissioned sculptures, architectural murals, institutional workshops, or studio visits in Mumbai.
          </p>
        </div>

        {/* Contact Information & Inquiry Form Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 border-t border-gallery-300 pt-12 items-start">
          
          {/* Left Column: Direct Studio Details */}
          <div className="lg:col-span-5 space-y-10">
            <div className="space-y-2">
              <span className="text-2xs uppercase tracking-widest-editorial text-gallery-500 block">
                Direct Email
              </span>
              <a
                href={`mailto:${artistInfo.contact.email}`}
                className="font-editorial text-2xl text-gallery-900 hover:text-terracotta transition-colors underline underline-offset-4"
              >
                {artistInfo.contact.email}
              </a>
            </div>

            <div className="space-y-2">
              <span className="text-2xs uppercase tracking-widest-editorial text-gallery-500 block">
                Studio Location
              </span>
              <p className="font-editorial text-2xl text-gallery-900">
                {artistInfo.location}
              </p>
              <p className="text-xs text-gallery-600 font-light">
                Churchgate & Suburban Studio Spaces • Mumbai, India
              </p>
            </div>

            <div className="space-y-2">
              <span className="text-2xs uppercase tracking-widest-editorial text-gallery-500 block">
                Social Archive
              </span>
              <p className="font-editorial text-xl text-gallery-900">
                {artistInfo.contact.instagram}
              </p>
            </div>

            <div className="pt-6 border-t border-gallery-300">
              <p className="text-2xs uppercase tracking-widest text-gallery-500 font-mono">
                {artistInfo.contact.note}
              </p>
            </div>
          </div>

          {/* Right Column: Refined Editorial Form */}
          <div className="lg:col-span-7">
            {submitted ? (
              <div className="bg-gallery-200/50 p-8 sm:p-12 border border-gallery-300 text-center space-y-4">
                <span className="text-2xs font-mono text-terracotta uppercase tracking-widest block">
                  Message Dispatched
                </span>
                <h3 className="font-editorial text-3xl text-gallery-900">
                  Thank You for Your Inquiry
                </h3>
                <p className="text-xs sm:text-sm text-gallery-600 font-light max-w-md mx-auto leading-relaxed">
                  Your communication has been recorded. The studio will respond directly to your email address shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="pt-4 text-xs uppercase tracking-widest-editorial font-medium text-terracotta underline underline-offset-4"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-2xs uppercase tracking-widest-editorial text-gallery-600 mb-2 font-medium">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Collector or Curator Name"
                    className="w-full bg-gallery-50 border border-gallery-300 px-4 py-3 text-sm text-gallery-900 placeholder:text-gallery-400 focus:outline-none focus:border-terracotta transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-2xs uppercase tracking-widest-editorial text-gallery-600 mb-2 font-medium">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="yourname@domain.com"
                    className="w-full bg-gallery-50 border border-gallery-300 px-4 py-3 text-sm text-gallery-900 placeholder:text-gallery-400 focus:outline-none focus:border-terracotta transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-2xs uppercase tracking-widest-editorial text-gallery-600 mb-2 font-medium">
                    Nature of Inquiry
                  </label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full bg-gallery-50 border border-gallery-300 px-4 py-3 text-sm text-gallery-900 focus:outline-none focus:border-terracotta transition-colors"
                  >
                    <option>Artwork Acquisition / Loan</option>
                    <option>Sculpture / Ganpati Commission</option>
                    <option>Mural or Wall Installation</option>
                    <option>Workshop or Teaching Engagement</option>
                    <option>General Gallery Dialogue</option>
                  </select>
                </div>

                <div>
                  <label className="block text-2xs uppercase tracking-widest-editorial text-gallery-600 mb-2 font-medium">
                    Message *
                  </label>
                  <textarea
                    rows={5}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Provide details regarding the piece of interest, dimensions, or collaboration concept..."
                    className="w-full bg-gallery-50 border border-gallery-300 px-4 py-3 text-sm text-gallery-900 placeholder:text-gallery-400 focus:outline-none focus:border-terracotta transition-colors resize-y"
                  />
                </div>

                <div>
                  <button
                    type="submit"
                    className="w-full sm:w-auto px-8 py-3.5 bg-gallery-900 text-gallery-100 hover:bg-terracotta text-xs uppercase tracking-widest-editorial font-medium transition-colors"
                  >
                    Transmit Inquiry
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>

      </div>
    </PageTransition>
  );
}

