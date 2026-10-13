import React from 'react';
import { Sparkles, Clock, Flame, Users, ChefHat, ArrowRight, Play, CheckCircle2, Award } from 'lucide-react';
import { Recipe } from '../data/recipes';

interface HeroSectionProps {
  heroRecipe: Recipe;
  onOpenRecipe: (recipe: Recipe) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  heroRecipe,
  onOpenRecipe
}) => {
  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center justify-center overflow-hidden py-16 lg:py-24"
      style={{
        background: 'radial-gradient(circle at 75% 42%, #123d2e 0%, #09231a 38%, #04120e 75%, #020906 100%)'
      }}
    >
      {/* Opulent Ambient Radial Spotlights */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Warm saffron spotlight on the right culinary plate */}
        <div className="absolute top-1/4 right-[8%] w-[550px] h-[550px] rounded-full bg-[#dfb76c]/15 blur-[140px]" />
        {/* Rich imperial emerald glow in background */}
        <div className="absolute top-10 left-[5%] w-[480px] h-[480px] rounded-full bg-[#1b533f]/25 blur-[150px]" />
        {/* Subtle warm amber base vignette */}
        <div className="absolute bottom-0 inset-x-0 h-44 bg-gradient-to-t from-[#04120e] via-[#04120e]/60 to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Column: Regal Typography & Culinary Narrative */}
          <div className="lg:col-span-5 space-y-6 text-left">
            
            {/* Kicker with script subtitle & gold line ornament */}
            <div className="space-y-1.5">
              <div className="flex items-center gap-2">
                <span className="w-8 h-px bg-gradient-to-r from-transparent to-[#dfb76c]" />
                <span className="font-luxury text-2xl lg:text-3xl text-[#dfb76c] italic font-medium tracking-wide">
                  Shahi Dastarkhwan
                </span>
              </div>
              <p className="text-[11px] uppercase tracking-[0.28em] text-[#9bb5a7] font-semibold pl-10">
                Karachi & Awadh Imperial Heritage
              </p>
            </div>

            {/* Display Headline with Gold Foil Accent */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-[#fbf7f0] font-semibold leading-[1.08] tracking-tight">
              Shahi Mutton <br />
              <span className="italic font-luxury gold-text-shimmer drop-shadow-[0_4px_15px_rgba(212,163,75,0.25)]">
                Dum Biryani
              </span>
            </h1>

            {/* Editorial prose */}
            <p className="text-sm sm:text-base text-[#d8cfc3] leading-relaxed max-w-lg font-light">
              Slow-cooked in an airtight handi sealed with whole wheat dough over dying embers. Fragrant aged long-grain basmati rice layered with succulent bone-in mutton, steep saffron milk, sweet-tangy dried aloo bukhara, and golden crisp birista onions.
            </p>

            {/* Metadata strip (clean unboxed text with gold separators) */}
            <div className="flex flex-wrap items-center gap-3 text-xs text-[#a8bfb2] font-medium pt-1">
              <span className="flex items-center gap-1.5 text-[#f0d08a]">
                <Clock className="w-3.5 h-3.5 text-[#dfb76c]" /> 65 Min Slow Cook
              </span>
              <span aria-hidden="true" className="text-[#3c6b58]">·</span>
              <span className="flex items-center gap-1.5 text-[#ede5da]">
                <Users className="w-3.5 h-3.5 text-[#dfb76c]" /> 6 Royal Servings
              </span>
              <span aria-hidden="true" className="text-[#3c6b58]">·</span>
              <span className="flex items-center gap-1.5 text-[#f87171]">
                <Flame className="w-3.5 h-3.5 text-[#f87171]" /> Authentic Pak-Spicy
              </span>
              <span aria-hidden="true" className="text-[#3c6b58]">·</span>
              <span className="text-[#d9c7af]">Karachi Tradition</span>
            </div>

            {/* Master Bawarchi Trust Card with Rich Glass & Brushed Gold Border */}
            <div className="flex items-center gap-3.5 py-2.5 px-3.5 rounded-2xl rich-glass-panel max-w-sm">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#1b4b38] to-[#0a261c] border border-[#dfb76c]/60 flex items-center justify-center text-[#f0d08a] shrink-0 shadow-md">
                <ChefHat className="w-5 h-5 text-[#f0d08a]" />
              </div>
              <div className="min-w-0">
                <div className="text-xs font-semibold text-[#fbf7f0] truncate flex items-center gap-1.5">
                  <span>Ustad Ghulam Rasool</span>
                  <Award className="w-3 h-3 text-[#dfb76c]" />
                </div>
                <div className="text-[11px] text-[#9bb5a7] truncate">
                  Master Bawarchi · Gawalmandi Heritage
                </div>
              </div>
              <div className="ml-auto shrink-0 text-[10px] font-semibold text-[#04120e] bg-gradient-to-r from-[#f0d08a] to-[#dfb76c] px-2.5 py-0.5 rounded-full shadow-sm">
                Verified
              </div>
            </div>

            {/* Call to Actions */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => onOpenRecipe(heroRecipe)}
                className="group relative inline-flex items-center gap-2.5 px-7 py-3.5 text-xs font-semibold uppercase tracking-wider text-[#04120e] rounded-full overflow-hidden shadow-2xl shadow-black/70 hover:brightness-110 active:scale-95 transition-all"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#fcebc2] via-[#dfb76c] to-[#b8862f]" />
                <span className="relative z-10 flex items-center gap-2">
                  <span>View Master Recipe</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </span>
              </button>

              <button
                onClick={() => {
                  const elem = document.getElementById('recipes');
                  if (elem) elem.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-[#f0d08a] border border-[#dfb76c]/40 hover:border-[#dfb76c] hover:bg-[#0c2a1f] rounded-full transition-all backdrop-blur-sm"
              >
                <span>Explore All Heirloom Dishes</span>
              </button>
            </div>

          </div>

          {/* Right Column: High-Fidelity Pakistani Dish Photography (matching screenshot) */}
          <div className="lg:col-span-7 flex justify-center lg:justify-end relative">
            <div className="relative max-w-lg lg:max-w-xl w-full">
              
              {/* Outer Opulent Golden & Viridian Halos */}
              <div className="absolute -inset-6 bg-gradient-to-br from-[#dfb76c]/20 via-[#1b533f]/30 to-transparent rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-[#dfb76c]/40 via-transparent to-[#144434]/50 pointer-events-none" />

              {/* Main Circular Plate Container */}
              <div className="relative group rounded-3xl overflow-hidden border border-[#dfb76c]/40 bg-[#081f17] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)]">
                <img
                  src={heroRecipe.image}
                  alt="Authentic Pakistani Shahi Mutton Dum Biryani with saffron rice, fried onions, boiled egg and spices"
                  referrerPolicy="no-referrer"
                  className="w-full h-auto aspect-square object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Elegant overlay card at bottom */}
                <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-[#04120e] via-[#04120e]/85 to-transparent">
                  <div className="flex items-end justify-between gap-4">
                    <div>
                      <div className="text-[11px] font-mono tracking-widest text-[#dfb76c] uppercase font-semibold">
                        The Royal Saffron Dum
                      </div>
                      <div className="text-sm sm:text-base font-semibold text-[#fbf7f0] mt-0.5">
                        Mutton Shank with Aged Basmati
                      </div>
                    </div>

                    <button
                      onClick={() => onOpenRecipe(heroRecipe)}
                      className="px-4 py-2 text-xs font-semibold uppercase tracking-wider bg-gradient-to-r from-[#dfb76c] to-[#b8862f] text-[#04120e] hover:brightness-110 rounded-xl transition-all flex items-center gap-1.5 shrink-0 shadow-lg"
                    >
                      <ChefHat className="w-3.5 h-3.5" />
                      <span>Cook This</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Floating accent notes like screenshot spice crumbs */}
              <div className="hidden sm:block absolute -bottom-5 -left-6 rich-glass-panel rounded-2xl p-3.5 shadow-2xl max-w-[220px]">
                <div className="text-[10px] text-[#dfb76c] uppercase tracking-wider font-semibold flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-[#dfb76c]" />
                  <span>Aromatic Secret</span>
                </div>
                <div className="text-xs text-[#ede5da] font-medium mt-1 leading-snug">
                  Hand-crushed Badiyan (Star Anise) & Kashmiri Zafran
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
