import React from 'react';

export default function SectionHeading({
  number,
  title,
  subtitle,
  description,
  align = 'left',
  className = ''
}) {
  return (
    <div className={`mb-12 sm:mb-16 ${className}`}>
      <div className="flex items-center space-x-3 mb-3">
        {number && (
          <span className="text-2xs font-mono text-terracotta tracking-widest uppercase">
            [{number}]
          </span>
        )}
        {subtitle && (
          <span className="text-2xs uppercase tracking-widest-editorial text-gallery-600 font-medium">
            {subtitle}
          </span>
        )}
      </div>

      <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-4 border-b border-gallery-300 pb-6">
        <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl text-gallery-900 tracking-tight">
          {title}
        </h2>
        {description && (
          <p className="text-sm text-gallery-600 max-w-lg font-light leading-relaxed">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}

