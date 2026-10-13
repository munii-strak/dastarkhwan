import React, { useState } from 'react';
import { Sparkles, Utensils, Info, Check } from 'lucide-react';
import { SPICE_PANTRY, SpiceInfo } from '../data/recipes';

export const SpicePantrySection: React.FC = () => {
  const [selectedSpice, setSelectedSpice] = useState<SpiceInfo>(SPICE_PANTRY[0]);

  return (
    <section
      id="spices"
      className="py-24 lg:py-32 border-t border-[#dfb76c]/20 relative overflow-hidden"
      style={{
        background: 'radial-gradient(ellipse at 50% 50%, #0e372a 0%, #061912 60%, #03100b 100%)'
      }}
    >
      {/* Background ambient spotlight */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[600px] h-[600px] bg-[#dfb76c]/8 blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-3 justify-center mb-1">
            <span className="w-10 h-px bg-gradient-to-r from-transparent via-[#dfb76c] to-transparent" />
            <span className="font-luxury text-3xl lg:text-4xl text-[#dfb76c] italic block">
              Khara Masala · Whole Spices Heritage
            </span>
            <span className="w-10 h-px bg-gradient-to-r from-transparent via-[#dfb76c] to-transparent" />
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-[#fbf7f0] font-semibold tracking-tight">
            The Essential Pakistani Spice Compendium
          </h2>
          <p className="text-sm sm:text-base text-[#b7ccbf] font-light leading-relaxed">
            Pakistani culinary mastery relies on whole spices roasted in desi ghee rather than raw powdered fillers. Explore the core botanicals that define authentic regional character.
          </p>
        </div>

        {/* Interactive Explorer Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Spice Selection List */}
          <div className="lg:col-span-5 space-y-3">
            {SPICE_PANTRY.map((spice) => {
              const isSelected = selectedSpice.name === spice.name;
              return (
                <button
                  key={spice.name}
                  onClick={() => setSelectedSpice(spice)}
                  className={`w-full text-left p-4.5 rounded-2xl transition-all flex items-center justify-between gap-4 cursor-pointer ${
                    isSelected
                      ? 'bg-gradient-to-r from-[#174636] to-[#0c2a1f] border border-[#dfb76c] shadow-[0_10px_25px_-5px_rgba(212,163,75,0.25)]'
                      : 'bg-[#061811]/90 border border-[#dfb76c]/15 hover:border-[#dfb76c]/40 hover:bg-[#0c261d]'
                  }`}
                >
                  <div className="space-y-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className={`text-sm font-semibold ${isSelected ? 'text-[#f0d08a]' : 'text-[#fbf7f0]'}`}>
                        {spice.name}
                      </span>
                    </div>
                    <div className="text-xs text-[#9bb5a7] italic font-luxury">
                      {spice.scientific}
                    </div>
                  </div>

                  <span className="text-xs text-[#f0d08a] shrink-0 font-semibold bg-[#04120e] px-3 py-1.5 rounded-lg border border-[#dfb76c]/30 shadow-inner">
                    {spice.regionalName}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right: Detailed Spice Spotlight Card */}
          <div className="lg:col-span-7">
            <div className="rich-glass-panel rounded-3xl p-6 sm:p-9 space-y-6 text-left shadow-2xl">
              
              <div className="flex flex-wrap items-start justify-between gap-4 pb-5 border-b border-[#dfb76c]/20">
                <div>
                  <div className="text-xs uppercase tracking-widest text-[#dfb76c] font-semibold flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-[#dfb76c]" />
                    <span>Cornerstone Botanical</span>
                  </div>
                  <h3 className="font-display text-2xl sm:text-3xl text-[#fbf7f0] font-semibold mt-1">
                    {selectedSpice.name}
                  </h3>
                  <div className="font-luxury text-lg text-[#f0d08a] mt-0.5">
                    {selectedSpice.regionalName} · <span className="text-sm font-sans italic text-[#9bb5a7]">{selectedSpice.scientific}</span>
                  </div>
                </div>

                <div className="px-3.5 py-1.5 rounded-full bg-gradient-to-r from-[#dfb76c] to-[#b8862f] text-xs font-semibold uppercase tracking-wider text-[#04120e] shadow-md">
                  Stone-Ground Tradition
                </div>
              </div>

              {/* Culinary Role */}
              <div className="space-y-2">
                <div className="text-xs text-[#dfb76c] uppercase tracking-wider font-semibold">
                  Culinary Purpose in Pakistani Kitchens
                </div>
                <p className="text-sm sm:text-base text-[#ede5da] leading-relaxed">
                  {selectedSpice.role}
                </p>
              </div>

              {/* Flavor Profile */}
              <div className="p-4.5 rounded-2xl bg-[#04120e] border border-[#dfb76c]/25 space-y-1.5">
                <div className="text-xs text-[#f0d08a] font-semibold uppercase tracking-wider">
                  Sensory & Aroma Profile
                </div>
                <p className="text-xs sm:text-sm text-[#d8cfc3] italic">
                  "{selectedSpice.flavorNotes}"
                </p>
              </div>

              {/* Dishes that use it */}
              <div className="space-y-2.5">
                <div className="text-xs text-[#dfb76c] uppercase tracking-wider font-semibold">
                  Signature Pakistani Dishes
                </div>
                <div className="flex flex-wrap gap-2">
                  {selectedSpice.dishes.map((dish, i) => (
                    <span
                      key={i}
                      className="px-3.5 py-1.5 text-xs font-medium rounded-lg bg-[#061c14] text-[#f0d08a] border border-[#dfb76c]/30 shadow-sm"
                    >
                      {dish}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
