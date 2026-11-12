import React, { useState } from 'react';
import { X, Search } from 'lucide-react';

export default function SearchModal({ isOpen, onClose }) {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Dark backdrop */}
      <div
        className="absolute inset-0 bg-black/90 backdrop-blur-md"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative z-10 w-full max-w-2xl bg-[#1a1a1a] border border-white/10 p-8 shadow-2xl">
        <button
          onClick={onClose}
          aria-label="Close search"
          className="absolute top-6 right-6 text-neutral-400 hover:text-white transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        <h3 className="text-sm font-mono text-[#b07c5e] uppercase tracking-widest mb-4">
          Search Theratio
        </h3>

        <div className="relative mb-6">
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type keywords (e.g. Loft, Penthouse, Architecture)..."
            className="w-full bg-[#141414] border border-white/15 px-5 py-4 pl-12 text-white placeholder-neutral-500 text-base focus:outline-none focus:border-[#b07c5e]"
          />
          <Search className="w-5 h-5 text-neutral-500 absolute left-4 top-1/2 -translate-y-1/2" />
        </div>

        <div className="text-xs text-neutral-400 flex items-center gap-2">
          <span>Popular searches:</span>
          <button
            onClick={() => setQuery('Modern Villa')}
            className="text-white hover:text-[#b07c5e] underline underline-offset-4"
          >
            Modern Villa
          </button>
          <span>•</span>
          <button
            onClick={() => setQuery('Minimalist Loft')}
            className="text-white hover:text-[#b07c5e] underline underline-offset-4"
          >
            Minimalist Loft
          </button>
          <span>•</span>
          <button
            onClick={() => setQuery('Custom Furniture')}
            className="text-white hover:text-[#b07c5e] underline underline-offset-4"
          >
            Custom Furniture
          </button>
        </div>
      </div>
    </div>
  );
}

