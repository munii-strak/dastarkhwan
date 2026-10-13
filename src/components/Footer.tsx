import React from 'react';
import { Flame, Heart, Sparkles } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer
      className="border-t border-[#dfb76c]/20 py-16 text-left relative overflow-hidden"
      style={{
        background: 'radial-gradient(ellipse at 50% 0%, #0a291f 0%, #04120e 70%, #020806 100%)'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
          
          {/* Brand info */}
          <div className="md:col-span-5 space-y-3.5">
            <div className="flex items-center gap-3.5">
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#dfb76c] to-[#b8862f] flex items-center justify-center text-[#04120e] shadow-lg shadow-black/50">
                <Flame className="w-5 h-5 text-[#04120e]" />
              </div>
              <span className="font-display text-2xl font-semibold gold-text-shimmer">
                Dastarkhwan
              </span>
            </div>
            <p className="font-luxury text-sm italic text-[#dfb76c] font-medium">
              Traditional Pakistani Culinary Heritage & Royal Flavors
            </p>
            <p className="text-xs text-[#a8bfb2] leading-relaxed max-w-sm">
              Dedicated to celebrating the rich culinary heritage of Pakistan, slow-cooked royal dum biryanis, iron-wok karahis, and authentic roadside traditions passed down through generations of master bawarchis.
            </p>
          </div>

          {/* Regional Culinary Hubs */}
          <div className="md:col-span-4 space-y-2.5">
            <div className="text-xs font-semibold uppercase tracking-wider text-[#dfb76c] flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#dfb76c]" />
              <span>Regional Culinary Food Hubs</span>
            </div>
            <ul className="text-xs text-[#ede5da] space-y-2">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#dfb76c]" />
                <span><strong className="text-[#f0d08a]">Lahore:</strong> Gawalmandi, Lakshmi Chowk, Old Anarkali</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#dfb76c]" />
                <span><strong className="text-[#f0d08a]">Karachi:</strong> Burns Road, Saddar, Boat Basin, Hussainabad</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#dfb76c]" />
                <span><strong className="text-[#f0d08a]">Peshawar:</strong> Namak Mandi, Qissa Khwani Bazaar</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#dfb76c]" />
                <span><strong className="text-[#f0d08a]">Rawalpindi:</strong> Kartarpura & Banni Chowk</span>
              </li>
            </ul>
          </div>

          {/* Cooking Principles */}
          <div className="md:col-span-3 space-y-2.5">
            <div className="text-xs font-semibold uppercase tracking-wider text-[#dfb76c]">
              Heirloom Kitchen Axioms
            </div>
            <p className="text-xs text-[#a8bfb2] leading-relaxed bg-[#04120e] p-3.5 rounded-2xl border border-[#dfb76c]/15">
              Always dry-roast whole spices. Never skip the 15-minute resting time on dum rice. Pure desi ghee and bone marrow shanks make the roghan shine.
            </p>
          </div>

        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 border-t border-[#dfb76c]/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#9bb5a7]">
          <div>
            © {new Date().getFullYear()} Dastarkhwan Pakistani Culinary Archive. All heirloom recipes preserved.
          </div>
          <div className="flex items-center gap-1.5 text-[#dfb76c]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Crafted with reverence for royal Pakistani culinary arts</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
