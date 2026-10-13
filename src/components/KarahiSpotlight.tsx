import React, { useState } from 'react';
import { Flame, Clock, Sparkles, ChefHat, Check, ArrowRight, ShieldCheck } from 'lucide-react';
import { Recipe } from '../data/recipes';

interface KarahiSpotlightProps {
  karahiRecipe: Recipe;
  onOpenRecipe: (recipe: Recipe) => void;
}

export const KarahiSpotlight: React.FC<KarahiSpotlightProps> = ({
  karahiRecipe,
  onOpenRecipe
}) => {
  const [activeTab, setActiveTab] = useState<'technique' | 'spices' | 'secret'>('technique');

  return (
    <section
      id="karahi-spotlight"
      className="relative py-24 lg:py-32 overflow-hidden border-t border-b border-[#dfb76c]/20"
      style={{
        background: 'radial-gradient(circle at 30% 50%, #0f392b 0%, #082119 45%, #03110c 100%)'
      }}
    >
      {/* Background radial amber ambient accent */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 rounded-full bg-[#dfb76c]/10 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with cursive/script title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-3 justify-center mb-1">
            <span className="w-10 h-px bg-gradient-to-r from-transparent via-[#dfb76c] to-transparent" />
            <span className="font-luxury text-3xl lg:text-4xl text-[#dfb76c] italic block">
              Lazzat-e-Karahi
            </span>
            <span className="w-10 h-px bg-gradient-to-r from-transparent via-[#dfb76c] to-transparent" />
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-[#fbf7f0] font-semibold tracking-tight">
            The Legend of Lahori Iron Wok Bhunai
          </h2>
          <p className="text-sm sm:text-base text-[#b7ccbf] font-light leading-relaxed">
            Strictly zero onions, zero added water. Authentic Lahori Karahi is an alchemy of high-flame searing, ripe sun-kissed Roma tomatoes, crushed roasted coriander, and pure country butter.
          </p>
          <div className="flex justify-center items-center gap-2 pt-1 text-xs text-[#dfb76c] font-medium">
            <span>Lakshmi Chowk Heritage</span>
            <span aria-hidden="true" className="text-[#3c6b58]">·</span>
            <span>25 Min Rapid Sear</span>
            <span aria-hidden="true" className="text-[#3c6b58]">·</span>
            <span>Wok Hei Smokiness</span>
          </div>
        </div>

        {/* 2-Column Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left: Round Iron Wok Dish Image */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="relative max-w-md lg:max-w-lg w-full group">
              
              {/* Outer Golden Glow Rim */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-[#dfb76c]/30 via-transparent to-[#1a533f]/40 rounded-3xl blur-md pointer-events-none" />

              <div className="relative rounded-3xl overflow-hidden border border-[#dfb76c]/35 bg-[#081f17] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.85)]">
                <img
                  src={karahiRecipe.image}
                  alt="Authentic Lahori Chicken Karahi in iron wok with fresh ginger juliennes and green chilies"
                  referrerPolicy="no-referrer"
                  className="w-full h-auto aspect-square object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Sizzle tag */}
                <div className="absolute top-4 left-4 rich-glass-panel px-3.5 py-1.5 rounded-full flex items-center gap-2 text-xs text-[#f0d08a]">
                  <Flame className="w-3.5 h-3.5 text-[#f87171]" />
                  <span>Sizzling in Iron Wok</span>
                </div>
              </div>

              {/* Floating Chef Note with Rich Glass */}
              <div className="hidden sm:block absolute -bottom-5 -right-5 rich-glass-panel rounded-2xl p-4 max-w-xs text-left shadow-2xl">
                <div className="flex items-center gap-2 text-[#dfb76c] text-xs font-semibold">
                  <ShieldCheck className="w-4 h-4" />
                  <span>No Onion Rule</span>
                </div>
                <p className="text-xs text-[#d8cfc3] mt-1 leading-snug">
                  Adding onions creates a sweet gravy that ruins the tangy, fiery wok-caramelized tomato base of genuine Lahori karahi.
                </p>
              </div>
            </div>
          </div>

          {/* Right: Architectural Culinary Card with Rich Velvet Glass */}
          <div className="lg:col-span-6">
            <div className="rich-glass-panel rounded-3xl p-6 sm:p-9 text-left space-y-6">
              
              {/* Interactive Segmented Control with Brushed Gold Rim */}
              <div className="flex items-center gap-2 p-1.5 bg-[#03110b] rounded-2xl border border-[#dfb76c]/25">
                <button
                  onClick={() => setActiveTab('technique')}
                  className={`flex-1 py-2.5 text-xs font-semibold tracking-wider uppercase rounded-xl transition-all ${
                    activeTab === 'technique'
                      ? 'bg-gradient-to-r from-[#dfb76c] to-[#b8862f] text-[#04120e] shadow-md shadow-black/40'
                      : 'text-[#9bb5a7] hover:text-[#fbf7f0]'
                  }`}
                >
                  The Bhunai Method
                </button>
                <button
                  onClick={() => setActiveTab('spices')}
                  className={`flex-1 py-2.5 text-xs font-semibold tracking-wider uppercase rounded-xl transition-all ${
                    activeTab === 'spices'
                      ? 'bg-gradient-to-r from-[#dfb76c] to-[#b8862f] text-[#04120e] shadow-md shadow-black/40'
                      : 'text-[#9bb5a7] hover:text-[#fbf7f0]'
                  }`}
                >
                  Key Aromatics
                </button>
                <button
                  onClick={() => setActiveTab('secret')}
                  className={`flex-1 py-2.5 text-xs font-semibold tracking-wider uppercase rounded-xl transition-all ${
                    activeTab === 'secret'
                      ? 'bg-gradient-to-r from-[#dfb76c] to-[#b8862f] text-[#04120e] shadow-md shadow-black/40'
                      : 'text-[#9bb5a7] hover:text-[#fbf7f0]'
                  }`}
                >
                  Bawarchi Secret
                </button>
              </div>

              {/* Tab 1: The Bhunai Method */}
              {activeTab === 'technique' && (
                <div className="space-y-4">
                  <h3 className="font-display text-xl text-[#fbf7f0] font-medium">
                    Why High Iron Wok Heat is Non-Negotiable
                  </h3>
                  <p className="text-sm text-[#d8cfc3] leading-relaxed">
                    Unlike standard curries, true Lahori Karahi is an open-pan stir-fry. Searing chicken in pure ghee with halved tomatoes creates steam that naturally loosens tomato skins. Once peeled, aggressive reduction over high heat emulsifies the pulp into a glossy glaze.
                  </p>

                  <div className="grid grid-cols-2 gap-3.5 pt-2">
                    <div className="p-3.5 rounded-2xl bg-[#051610] border border-[#dfb76c]/20">
                      <div className="text-[11px] text-[#9bb5a7] uppercase tracking-wider font-semibold">Cook Time</div>
                      <div className="text-base font-semibold text-[#f0d08a] mt-0.5">25 Minutes Fast</div>
                    </div>
                    <div className="p-3.5 rounded-2xl bg-[#051610] border border-[#dfb76c]/20">
                      <div className="text-[11px] text-[#9bb5a7] uppercase tracking-wider font-semibold">Heat Profile</div>
                      <div className="text-base font-semibold text-[#f87171] mt-0.5">Tez Teekha (L4)</div>
                    </div>
                  </div>
                </div>
              )}

              {/* Tab 2: Key Aromatics */}
              {activeTab === 'spices' && (
                <div className="space-y-3.5">
                  <h3 className="font-display text-xl text-[#fbf7f0] font-medium">
                    The Essential Four Spices
                  </h3>
                  <ul className="space-y-3 text-xs text-[#d8cfc3]">
                    <li className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#dfb76c] mt-1.5 shrink-0" />
                      <span><strong>Crushed Roasted Coriander:</strong> Coarsely pounded on mortar, never powdered, to give bursts of citrus-pine aroma.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#dfb76c] mt-1.5 shrink-0" />
                      <span><strong>Bhuna Zeera (Roasted Cumin):</strong> Dry-toasted in iron tawa until deep bronze before light crushing.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#dfb76c] mt-1.5 shrink-0" />
                      <span><strong>Fresh Ginger Batons:</strong> Added in double dose—half during bhunai and half fresh on top.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#dfb76c] mt-1.5 shrink-0" />
                      <span><strong>Makhan (Country Butter):</strong> Melted into the sizzling sauce in the final 60 seconds off the flame.</span>
                    </li>
                  </ul>
                </div>
              )}

              {/* Tab 3: Bawarchi Secret */}
              {activeTab === 'secret' && (
                <div className="space-y-3">
                  <h3 className="font-display text-xl text-[#fbf7f0] font-medium">
                    The Ustad's Master Directive
                  </h3>
                  <blockquote className="italic text-sm text-[#f0d08a] border-l-2 border-[#dfb76c] pl-3.5 leading-relaxed bg-[#051710]/60 py-2 rounded-r-xl">
                    "{karahiRecipe.bawarchiSecret}"
                  </blockquote>
                  <p className="text-xs text-[#d8cfc3] leading-relaxed pt-2">
                    Pairing Recommendation: {karahiRecipe.pairing}
                  </p>
                </div>
              )}

              {/* Action row */}
              <div className="pt-3 border-t border-[#dfb76c]/20 flex items-center justify-between">
                <span className="text-xs text-[#9bb5a7]">
                  Complete recipe with scalable metric grams
                </span>
                <button
                  onClick={() => onOpenRecipe(karahiRecipe)}
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold tracking-wider uppercase text-[#04120e] bg-gradient-to-r from-[#dfb76c] to-[#b8862f] hover:brightness-110 rounded-full transition-all shadow-lg"
                >
                  <ChefHat className="w-3.5 h-3.5" />
                  <span>Open Karahi Recipe</span>
                </button>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
