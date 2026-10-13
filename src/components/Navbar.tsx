import React, { useState } from 'react';
import { ChefHat, BookOpen, Sparkles, Menu, X, Flame } from 'lucide-react';

interface NavbarProps {
  onExploreClick: () => void;
  onCookModeClick: () => void;
  isCookModeActive: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({
  onExploreClick,
  onCookModeClick,
  isCookModeActive
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full bg-[#04140f]/90 backdrop-blur-xl border-b border-[#d4a34b]/20 shadow-[0_10px_35px_rgba(0,0,0,0.6)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark with luxury script style */}
        <a href="#" className="flex items-center gap-3.5 group shrink-0">
          <div className="relative">
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-[#e8c374] to-[#b8862f] blur-xs opacity-70 group-hover:opacity-100 transition-opacity" />
            <div className="relative w-10 h-10 rounded-full bg-gradient-to-br from-[#123b2c] to-[#04120e] border border-[#d4a34b]/60 flex items-center justify-center text-[#e8c374] shadow-lg shadow-black/60">
              <Flame className="w-5 h-5 text-[#f0d08a]" />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-display text-2xl font-semibold tracking-wide gold-text-shimmer group-hover:brightness-110 transition-all">
              Dastarkhwan
            </span>
            <span className="font-luxury text-xs text-[#c5ab80] tracking-widest italic -mt-1 font-medium">
              The Royal Pakistani Culinary Heritage
            </span>
          </div>
        </a>

        {/* Zone 2: Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#e0d6c8]">
          <a
            href="#hero"
            className="hover:text-[#f0d08a] transition-colors whitespace-nowrap shrink-0 relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-0.5 after:bg-[#d4a34b] after:transition-all"
          >
            Dum Biryani
          </a>
          <a
            href="#karahi-spotlight"
            className="hover:text-[#f0d08a] transition-colors whitespace-nowrap shrink-0 relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-0.5 after:bg-[#d4a34b] after:transition-all"
          >
            The Iron Karahi
          </a>
          <a
            href="#recipes"
            className="hover:text-[#f0d08a] transition-colors whitespace-nowrap shrink-0 relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-0.5 after:bg-[#d4a34b] after:transition-all"
          >
            Master Recipes
          </a>
          <a
            href="#spices"
            className="hover:text-[#f0d08a] transition-colors whitespace-nowrap shrink-0 relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-0.5 after:bg-[#d4a34b] after:transition-all"
          >
            Khara Masala
          </a>
          <a
            href="#dhungar"
            className="hover:text-[#f0d08a] transition-colors whitespace-nowrap shrink-0 relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-0.5 after:bg-[#d4a34b] after:transition-all"
          >
            Coal Smoke Art
          </a>
        </nav>

        {/* Zone 3: Primary Action CTA */}
        <div className="flex items-center gap-3.5 shrink-0">
          <button
            onClick={onCookModeClick}
            className={`hidden sm:flex items-center gap-2 px-4 py-2 text-xs font-semibold tracking-wider uppercase rounded-full transition-all duration-200 border ${
              isCookModeActive
                ? 'bg-gradient-to-r from-[#dfb76c] to-[#b8862f] text-[#04120e] border-[#fcebc2] shadow-lg shadow-[#d4a34b]/30'
                : 'bg-[#0a231a] text-[#f0d08a] border-[#d4a34b]/30 hover:border-[#d4a34b] hover:bg-[#113527]'
            }`}
          >
            <ChefHat className="w-4 h-4" />
            <span>{isCookModeActive ? 'Cook Mode Active' : 'Enter Kitchen Mode'}</span>
          </button>

          <button
            onClick={onExploreClick}
            className="relative group px-5 py-2.5 text-xs font-semibold tracking-wider uppercase text-[#04120e] rounded-full overflow-hidden shadow-xl shadow-black/50 transition-all active:scale-95 whitespace-nowrap"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#f7e2a9] via-[#dfb76c] to-[#b8862f] group-hover:brightness-110 transition-all" />
            <span className="relative z-10 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Explore Recipes</span>
            </span>
          </button>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#e0d6c8] hover:text-[#f0d08a]"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#061912] border-b border-[#d4a34b]/20 px-6 py-5 space-y-3 shadow-2xl">
          <a
            href="#hero"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm text-[#ede5da] hover:text-[#f0d08a]"
          >
            Dum Biryani
          </a>
          <a
            href="#karahi-spotlight"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm text-[#ede5da] hover:text-[#f0d08a]"
          >
            The Iron Karahi
          </a>
          <a
            href="#recipes"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm text-[#ede5da] hover:text-[#f0d08a]"
          >
            Master Recipes
          </a>
          <a
            href="#spices"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm text-[#ede5da] hover:text-[#f0d08a]"
          >
            Khara Masala Pantry
          </a>
          <a
            href="#dhungar"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm text-[#ede5da] hover:text-[#f0d08a]"
          >
            Dhungar (Smoke Technique)
          </a>
          <button
            onClick={() => {
              onCookModeClick();
              setMobileMenuOpen(false);
            }}
            className="w-full mt-2 py-2.5 text-xs font-semibold uppercase tracking-wider rounded-lg bg-[#0e2f23] text-[#f0d08a] border border-[#d4a34b]/40"
          >
            {isCookModeActive ? 'Cook Mode Active' : 'Enable Kitchen Mode'}
          </button>
        </div>
      )}
    </header>
  );
};
