import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { KarahiSpotlight } from './components/KarahiSpotlight';
import { RecipesGrid } from './components/RecipesGrid';
import { SpicePantrySection } from './components/SpicePantrySection';
import { DhungarGuideSection } from './components/DhungarGuideSection';
import { RecipeModal } from './components/RecipeModal';
import { Footer } from './components/Footer';
import { RECIPES_DATA, Recipe } from './data/recipes';

export default function App() {
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);
  const [isCookModeActive, setIsCookModeActive] = useState<boolean>(false);

  // Selected hero and spotlight recipes
  const heroRecipe = RECIPES_DATA.find((r) => r.id === 'shahi-dum-biryani') || RECIPES_DATA[0];
  const karahiRecipe = RECIPES_DATA.find((r) => r.id === 'lahori-chicken-karahi') || RECIPES_DATA[1];

  const handleOpenRecipe = (recipe: Recipe) => {
    setSelectedRecipe(recipe);
  };

  const handleCloseRecipe = () => {
    setSelectedRecipe(null);
  };

  const scrollToRecipes = () => {
    const el = document.getElementById('recipes');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleToggleCookMode = () => {
    setIsCookModeActive((prev) => !prev);
    // If opening cook mode, prompt to select a recipe if none selected
    if (!selectedRecipe) {
      setSelectedRecipe(heroRecipe);
    }
  };

  return (
    <div className="min-h-screen bg-[#04120e] text-[#ede5da] flex flex-col font-sans selection:bg-[#dfb76c] selection:text-[#04120e]">
      
      {/* Top Navigation */}
      <Navbar
        onExploreClick={scrollToRecipes}
        onCookModeClick={handleToggleCookMode}
        isCookModeActive={isCookModeActive}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        
        {/* Hero Section: Exact match to Screenshot Top section */}
        <HeroSection
          heroRecipe={heroRecipe}
          onOpenRecipe={handleOpenRecipe}
        />

        {/* Karahi Spotlight Section: Exact match to Screenshot Middle section */}
        <KarahiSpotlight
          karahiRecipe={karahiRecipe}
          onOpenRecipe={handleOpenRecipe}
        />

        {/* Authentic Pakistani Recipes Catalog: Full recipe collection & filters */}
        <RecipesGrid
          onOpenRecipe={handleOpenRecipe}
        />

        {/* Khara Masala Pantry Compendium */}
        <SpicePantrySection />

        {/* Live Coal Smoke Technique (Dhungar) */}
        <DhungarGuideSection />

      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Recipe Details Modal */}
      <RecipeModal
        recipe={selectedRecipe}
        onClose={handleCloseRecipe}
      />

    </div>
  );
}
