import React from 'react';

export default function ArchiveFilter({
  categories = [],
  activeCategory = 'ALL',
  onSelectCategory,
  counts = {}
}) {
  return (
    <nav 
      aria-label="Archive Filter" 
      className="border-b border-gallery-300 pb-4 mb-12 sm:mb-16 overflow-x-auto no-scrollbar"
    >
      <div className="flex items-center space-x-8 sm:space-x-12 min-w-max py-1">
        {categories.map((category) => {
          const isActive = activeCategory === category;
          const count = counts[category];

          return (
            <button
              key={category}
              onClick={() => onSelectCategory(category)}
              className={`group flex items-baseline space-x-1.5 text-xs uppercase tracking-widest-editorial transition-colors relative py-1 focus:outline-none ${
                isActive ? 'text-gallery-900 font-bold' : 'text-gallery-600 hover:text-gallery-900'
              }`}
            >
              <span>{category}</span>
              {typeof count === 'number' && (
                <span className="text-[10px] font-mono text-gallery-400 group-hover:text-gallery-600 transition-colors">
                  ({count})
                </span>
              )}
              {isActive && (
                <span className="absolute -bottom-[17px] left-0 right-0 h-[1.5px] bg-terracotta" />
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
}

