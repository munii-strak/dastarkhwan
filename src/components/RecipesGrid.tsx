import React, { useState, useMemo } from 'react';
import { Clock, Flame, Users, ChefHat, Search, Filter, Sparkles, MapPin, ArrowRight } from 'lucide-react';
import { Recipe, RECIPES_DATA } from '../data/recipes';

interface RecipesGridProps {
  onOpenRecipe: (recipe: Recipe) => void;
}

export const RecipesGrid: React.FC<RecipesGridProps> = ({ onOpenRecipe }) => {
  const [selectedRegion, setSelectedRegion] = useState<string>('All');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const regions = ['All', 'Lahore', 'Karachi', 'Peshawar'];
  const categories = ['All', 'Slow-Cooked', 'Karahi & Tawa', 'Dum Rice', 'Grills & Kebabs', 'Desserts & Breads'];

  // Filtered recipes
  const filteredRecipes = useMemo(() => {
    return RECIPES_DATA.filter((recipe) => {
      const matchRegion = selectedRegion === 'All' || recipe.region === selectedRegion;
      const matchCategory = selectedCategory === 'All' || recipe.category === selectedCategory;
      const matchSearch =
        searchQuery.trim() === '' ||
        recipe.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        recipe.regionalTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
        recipe.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
        recipe.ingredients.some((i) => i.name.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchRegion && matchCategory && matchSearch;
    });
  }, [selectedRegion, selectedCategory, searchQuery]);

  return (
    <section
      id="recipes"
      className="py-24 lg:py-32 relative overflow-hidden"
      style={{
        background: 'radial-gradient(ellipse at 50% 20%, #103b2d 0%, #061912 55%, #04120e 100%)'
      }}
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#dfb76c]/6 blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-3 justify-center mb-1">
            <span className="w-10 h-px bg-gradient-to-r from-transparent via-[#dfb76c] to-transparent" />
            <span className="font-luxury text-3xl lg:text-4xl text-[#dfb76c] italic block">
              Dastarkhwan Heirloom Collection
            </span>
            <span className="w-10 h-px bg-gradient-to-r from-transparent via-[#dfb76c] to-transparent" />
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-[#fbf7f0] font-semibold tracking-tight">
            Authentic Pakistani Master Recipes
          </h2>
          <p className="text-sm sm:text-base text-[#b7ccbf] font-light leading-relaxed">
            Every recipe is formulated with exact metric proportions, authentic whole spice blends, traditional clay and iron techniques, and heirloom bawarchi secrets.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="mb-12 space-y-4">
          
          {/* Search Input & Regional Segmented Buttons */}
          <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between">
            
            {/* Search Input */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#dfb76c]" />
              <input
                type="text"
                placeholder="Search dishes or ingredients (e.g. Nihari, Saffron, Bong, Karahi)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-3 rounded-full bg-[#061c14] border border-[#dfb76c]/30 text-xs sm:text-sm text-[#fbf7f0] placeholder-[#79998b] focus:outline-none focus:border-[#dfb76c] focus:ring-1 focus:ring-[#dfb76c]/40 transition-all shadow-inner"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs text-[#9bb5a7] hover:text-[#fbf7f0]"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Regional Filter Tabs */}
            <div className="flex items-center gap-1.5 p-1.5 bg-[#061c14] rounded-full border border-[#dfb76c]/25 overflow-x-auto shadow-md">
              {regions.map((region) => (
                <button
                  key={region}
                  onClick={() => setSelectedRegion(region)}
                  className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-full transition-all whitespace-nowrap shrink-0 ${
                    selectedRegion === region
                      ? 'bg-gradient-to-r from-[#dfb76c] to-[#b8862f] text-[#04120e] shadow-md font-bold'
                      : 'text-[#a8bfb2] hover:text-[#fbf7f0]'
                  }`}
                >
                  {region === 'All' ? 'All Regions' : region}
                </button>
              ))}
            </div>

          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-xl border transition-all whitespace-nowrap shrink-0 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-[#174636] to-[#0c2a1f] border-[#dfb76c] text-[#f0d08a] font-semibold shadow-md'
                    : 'bg-[#061811]/90 border-[#dfb76c]/15 text-[#9bb5a7] hover:text-[#fbf7f0] hover:border-[#dfb76c]/40'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

        </div>

        {/* Recipes Grid */}
        {filteredRecipes.length === 0 ? (
          <div className="text-center py-16 rich-glass-panel rounded-3xl">
            <p className="text-sm text-[#9bb5a7]">No authentic recipes match your search criteria.</p>
            <button
              onClick={() => {
                setSelectedRegion('All');
                setSelectedCategory('All');
                setSearchQuery('');
              }}
              className="mt-3 text-xs text-[#dfb76c] underline underline-offset-4 font-semibold"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredRecipes.map((recipe) => (
              <div
                key={recipe.id}
                className="group rounded-3xl overflow-hidden rich-glass-panel hover:border-[#dfb76c]/70 hover:shadow-[0_20px_45px_-10px_rgba(212,163,75,0.25)] transition-all duration-300 flex flex-col text-left"
              >
                {/* Card Dish Image */}
                <div className="relative aspect-[4/3] overflow-hidden bg-[#04120e]">
                  <img
                    src={recipe.image}
                    alt={recipe.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Gradient Scrim */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#061912] via-transparent to-transparent opacity-95" />

                  {/* Heat badge */}
                  <div className="absolute top-3.5 right-3.5 bg-[#04120e]/90 border border-[#dfb76c]/30 px-3 py-1 rounded-full text-[11px] font-semibold text-[#f87171] flex items-center gap-1 backdrop-blur-md shadow-md">
                    <Flame className="w-3 h-3" />
                    <span>{recipe.spiceHeat.split(' ')[0]}</span>
                  </div>

                  {/* Region badge */}
                  <div className="absolute top-3.5 left-3.5 bg-[#04120e]/90 border border-[#dfb76c]/30 px-3 py-1 rounded-full text-[11px] font-semibold text-[#dfb76c] flex items-center gap-1 backdrop-blur-md shadow-md">
                    <MapPin className="w-3 h-3" />
                    <span>{recipe.region}</span>
                  </div>

                  {/* Card Title Script Overlay */}
                  <div className="absolute bottom-2 left-4">
                    <span className="font-luxury text-lg italic text-[#f0d08a] drop-shadow-md">
                      {recipe.regionalTitle}
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  
                  <div className="space-y-2">
                    <h3 className="font-display text-xl text-[#fbf7f0] font-semibold group-hover:text-[#dfb76c] transition-colors">
                      {recipe.name}
                    </h3>
                    <p className="text-xs text-[#a8bfb2] line-clamp-2 font-light leading-relaxed">
                      {recipe.tagline}
                    </p>
                  </div>

                  {/* Key aromatics tags */}
                  <div className="pt-2 border-t border-[#dfb76c]/15">
                    <div className="text-[10px] text-[#dfb76c] uppercase tracking-wider font-semibold mb-2">
                      Signature Aromatics
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {recipe.keyAromatics.slice(0, 3).map((aromatic, i) => (
                        <span
                          key={i}
                          className="text-[11px] px-2.5 py-1 rounded-lg bg-[#04120e] border border-[#dfb76c]/20 text-[#ede5da]"
                        >
                          {aromatic}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Metadata strip */}
                  <div className="flex items-center justify-between text-xs text-[#9bb5a7] pt-2">
                    <span className="flex items-center gap-1.5 text-[#f0d08a]">
                      <Clock className="w-3.5 h-3.5 text-[#dfb76c]" />
                      <span>{recipe.cookTime} mins</span>
                    </span>
                    <span className="flex items-center gap-1.5 text-[#ede5da]">
                      <Users className="w-3.5 h-3.5 text-[#dfb76c]" />
                      <span>{recipe.defaultServings} Servings</span>
                    </span>
                  </div>

                  {/* Open Recipe CTA */}
                  <button
                    onClick={() => onOpenRecipe(recipe)}
                    className="w-full mt-2 py-3 px-4 text-xs font-semibold tracking-wider uppercase rounded-xl bg-gradient-to-r from-[#174636] to-[#0c2a1f] text-[#fbf7f0] border border-[#dfb76c]/35 group-hover:from-[#dfb76c] group-hover:to-[#b8862f] group-hover:text-[#04120e] group-hover:border-[#dfb76c] transition-all flex items-center justify-center gap-2 shadow-md"
                  >
                    <ChefHat className="w-3.5 h-3.5" />
                    <span>View Master Recipe</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </button>

                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
