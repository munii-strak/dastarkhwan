import React, { useState } from 'react';
import { Flame, Sparkles, Wind, CheckCircle2, AlertCircle } from 'lucide-react';

export const DhungarGuideSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(1);

  const steps = [
    {
      num: 1,
      title: 'Ignite Hardwood Lump Charcoal',
      detail: 'Hold a piece of natural hardwood coal with tongs directly over an open gas flame for 5 minutes until glowing bright red and white-ash edged.'
    },
    {
      num: 2,
      title: 'The Foil Cup Nest',
      detail: 'Place a small heatproof bowl or folded piece of aluminum foil directly in the center of your cooked curry or biryani handi.'
    },
    {
      num: 3,
      title: 'The Ghee Drop & Immediate Plume',
      detail: 'Carefully transfer the red-hot coal onto the foil cup. Immediately spoon 1/2 teaspoon of desi ghee or mustard oil onto the coal. A dense aromatic white plume erupts.'
    },
    {
      num: 4,
      title: 'Tight Trap for Exactly 4 Minutes',
      detail: 'Slam the heavy lid shut immediately. Trap the smoke for no more than 3 to 5 minutes so it imparts sweet oak-fire aroma without turning bitter.'
    }
  ];

  return (
    <section
      id="dhungar"
      className="py-24 lg:py-28 border-t border-[#dfb76c]/20 relative overflow-hidden"
      style={{
        background: 'radial-gradient(circle at 70% 45%, #153c2b 0%, #061912 55%, #020a07 100%)'
      }}
    >
      {/* Fiery amber ambient glow for charcoal theme */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-[#f97316]/10 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Banner Card with Rich Glass Panel */}
        <div className="rich-glass-panel rounded-3xl p-8 sm:p-14 shadow-2xl relative">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7 space-y-4 text-left">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#dfb76c]">
                <Flame className="w-4 h-4 text-[#f87171]" />
                <span>Heirloom Culinary Technique</span>
              </div>

              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-[#fbf7f0] font-semibold leading-tight">
                The Art of Dhungar <br />
                <span className="font-luxury text-[#f0d08a] italic font-normal text-2xl sm:text-3xl">
                  (Charcoal Smoke Infusion)
                </span>
              </h2>

              <p className="text-sm sm:text-base text-[#b7ccbf] font-light leading-relaxed">
                Ever wonder why Pakistani roadside Nihari and Seekh Kebabs carry that intoxicating open-woodfire smokiness? In Pakistani homes, bawarchis infuse dishes with real red-hot charcoal steam before unsealing the pot.
              </p>

              {/* Step selector */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-4">
                {steps.map((st) => (
                  <button
                    key={st.num}
                    onClick={() => setActiveStep(st.num)}
                    className={`p-4 rounded-2xl border text-left transition-all cursor-pointer ${
                      activeStep === st.num
                        ? 'bg-gradient-to-r from-[#174636] to-[#0c2a1f] border-[#dfb76c] text-[#fbf7f0] shadow-md'
                        : 'bg-[#04120e] border-[#dfb76c]/15 text-[#9bb5a7] hover:text-[#ede5da] hover:border-[#dfb76c]/40'
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                        activeStep === st.num ? 'bg-gradient-to-r from-[#dfb76c] to-[#b8862f] text-[#04120e]' : 'bg-[#0a261c] text-[#dfb76c]'
                      }`}>
                        {st.num}
                      </span>
                      <span className="text-xs font-semibold text-[#fbf7f0]">
                        {st.title}
                      </span>
                    </div>
                    <p className="text-[11px] text-[#a8bfb2] line-clamp-2 leading-relaxed">
                      {st.detail}
                    </p>
                  </button>
                ))}
              </div>
            </div>

            {/* Right: Charcoal visual simulation card with Rich Amber/Gold Glow */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-sm rounded-3xl p-7 bg-[#04120e] border border-[#dfb76c]/30 text-center space-y-4 shadow-2xl relative overflow-hidden">
                
                {/* Glow ring */}
                <div className="absolute inset-0 bg-radial from-[#dfb76c]/10 via-transparent to-transparent pointer-events-none" />

                <div className="relative w-24 h-24 mx-auto rounded-full bg-gradient-to-tr from-[#ef4444] via-[#f97316] to-[#dfb76c] p-1 flex items-center justify-center shadow-[0_0_40px_rgba(249,115,22,0.4)]">
                  <div className="w-full h-full rounded-full bg-[#120502] flex items-center justify-center">
                    <Flame className="w-10 h-10 text-[#fba754] animate-pulse" />
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-[#fbf7f0]">
                    Step {activeStep}: {steps[activeStep - 1].title}
                  </h4>
                  <p className="text-xs text-[#a8bfb2] mt-2 leading-relaxed">
                    {steps[activeStep - 1].detail}
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-[#081e16] border border-[#dfb76c]/20 text-[11px] text-[#f0d08a] font-medium flex items-center justify-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-[#dfb76c] shrink-0" />
                  <span>Works with Biryani, Karahi, Haleem & Dal</span>
                </div>

              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
