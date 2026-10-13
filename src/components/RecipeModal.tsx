import React, { useState, useEffect } from 'react';
import {
  X,
  Clock,
  Users,
  Flame,
  ChefHat,
  Check,
  Play,
  Pause,
  RotateCcw,
  Sparkles,
  BookOpen,
  Volume2,
  Copy,
  Printer,
  ChevronRight
} from 'lucide-react';
import { Recipe } from '../data/recipes';

interface RecipeModalProps {
  recipe: Recipe | null;
  onClose: () => void;
}

export const RecipeModal: React.FC<RecipeModalProps> = ({ recipe, onClose }) => {
  if (!recipe) return null;

  // Servings state
  const [servings, setServings] = useState(recipe.defaultServings);
  
  // Checked ingredients state
  const [checkedIngredients, setCheckedIngredients] = useState<Record<string, boolean>>({});

  // Active step state
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);
  const [completedSteps, setCompletedSteps] = useState<Record<number, boolean>>({});

  // Kitchen Timer state
  const [timerSeconds, setTimerSeconds] = useState<number>(
    (recipe.steps[0]?.durationMinutes || 10) * 60
  );
  const [isTimerRunning, setIsTimerRunning] = useState<boolean>(false);
  const [timerFinished, setTimerFinished] = useState<boolean>(false);

  // Copy notification state
  const [copySuccess, setCopySuccess] = useState<boolean>(false);

  // Reset ingredients & servings when recipe changes
  useEffect(() => {
    setServings(recipe.defaultServings);
    setCheckedIngredients({});
    setActiveStepIndex(0);
    setCompletedSteps({});
    setTimerSeconds((recipe.steps[0]?.durationMinutes || 10) * 60);
    setIsTimerRunning(false);
    setTimerFinished(false);
  }, [recipe]);

  // Timer countdown hook
  useEffect(() => {
    let interval: any = null;
    if (isTimerRunning && timerSeconds > 0) {
      interval = setInterval(() => {
        setTimerSeconds((prev) => prev - 1);
      }, 1000);
    } else if (timerSeconds === 0 && isTimerRunning) {
      setIsTimerRunning(false);
      setTimerFinished(true);
      // Play soft web audio beep chime
      try {
        const audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.type = 'sine';
        osc.frequency.setValueAtTime(587.33, audioCtx.currentTime); // D5
        osc.frequency.setValueAtTime(880, audioCtx.currentTime + 0.15); // A5
        gain.gain.setValueAtTime(0.3, audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.6);
        osc.start();
        osc.stop(audioCtx.currentTime + 0.6);
      } catch (e) {
        // Audio fallback
      }
    }
    return () => clearInterval(interval);
  }, [isTimerRunning, timerSeconds]);

  // Scaler multiplier
  const multiplier = servings / recipe.defaultServings;

  const toggleIngredient = (name: string) => {
    setCheckedIngredients((prev) => ({
      ...prev,
      [name]: !prev[name]
    }));
  };

  const toggleStep = (stepNumber: number) => {
    setCompletedSteps((prev) => ({
      ...prev,
      [stepNumber]: !prev[stepNumber]
    }));
  };

  const handleSetTimerForStep = (minutes?: number) => {
    const mins = minutes || 5;
    setTimerSeconds(mins * 60);
    setIsTimerRunning(false);
    setTimerFinished(false);
  };

  const formatTimer = (totalSeconds: number) => {
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  const handleCopyRecipe = () => {
    const ingredientsList = recipe.ingredients
      .map(
        (ing) =>
          `• ${(ing.amount * multiplier).toLocaleString(undefined, {
            maximumFractionDigits: 1
          })} ${ing.unit} ${ing.name} ${ing.note ? `(${ing.note})` : ''}`
      )
      .join('\n');

    const stepsList = recipe.steps
      .map((st) => `${st.stepNumber}. ${st.title}\n${st.instruction}`)
      .join('\n\n');

    const fullText = `${recipe.name} (${recipe.regionalTitle})\n${recipe.tagline}\n\nRegion: ${recipe.region} | Servings: ${servings} | Cook Time: ${recipe.cookTime} mins\n\nINGREDIENTS:\n${ingredientsList}\n\nMETHOD:\n${stepsList}\n\nBAWARCHI SECRET:\n${recipe.bawarchiSecret}`;

    navigator.clipboard.writeText(fullText);
    setCopySuccess(true);
    setTimeout(() => setCopySuccess(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200">
      
      {/* Modal Dialog Card */}
      <div className="relative w-full max-w-4xl bg-[#04140f] border border-[#dfb76c]/40 rounded-3xl shadow-[0_30px_90px_rgba(0,0,0,0.95)] overflow-hidden my-auto text-left max-h-[92vh] flex flex-col">
        
        {/* Modal Header with Rich Gradient and Gold Hairline */}
        <div className="relative p-6 sm:p-8 bg-gradient-to-r from-[#0d2e22] via-[#081e16] to-[#04140f] border-b border-[#dfb76c]/25 shrink-0">
          
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2.5 rounded-full bg-[#04120e] text-[#9bb5a7] hover:text-[#fbf7f0] hover:bg-[#123829] border border-[#dfb76c]/30 transition-colors"
            aria-label="Close recipe details"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="pr-12 space-y-2">
            <div className="flex flex-wrap items-center gap-2 text-xs text-[#dfb76c]">
              <span className="font-luxury text-base italic text-[#f0d08a]">{recipe.regionalTitle}</span>
              <span aria-hidden="true" className="text-[#3c6b58]">·</span>
              <span className="bg-[#051a12] px-3 py-0.5 rounded-full text-[11px] font-semibold text-[#f0d08a] border border-[#dfb76c]/30">
                {recipe.region} Heritage
              </span>
              <span aria-hidden="true" className="text-[#3c6b58]">·</span>
              <span className="text-[#ede5da]">{recipe.category}</span>
            </div>

            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl text-[#fbf7f0] font-semibold">
              {recipe.name}
            </h2>

            <p className="text-xs sm:text-sm text-[#b7ccbf] font-light max-w-2xl leading-relaxed">
              {recipe.tagline}
            </p>
          </div>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4 mt-6 pt-4 border-t border-[#dfb76c]/20">
            <div className="flex items-center gap-2 text-xs text-[#d8cfc3]">
              <Clock className="w-4 h-4 text-[#dfb76c] shrink-0" />
              <div>
                <span className="block text-[10px] text-[#9bb5a7] uppercase font-semibold">Prep & Cook</span>
                <span className="font-semibold text-[#fbf7f0]">{recipe.prepTime + recipe.cookTime} Mins</span>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs text-[#d8cfc3]">
              <Flame className="w-4 h-4 text-[#f87171] shrink-0" />
              <div>
                <span className="block text-[10px] text-[#9bb5a7] uppercase font-semibold">Spice Profile</span>
                <span className="font-semibold text-[#fbf7f0]">{recipe.spiceHeat}</span>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs text-[#d8cfc3]">
              <ChefHat className="w-4 h-4 text-[#dfb76c] shrink-0" />
              <div>
                <span className="block text-[10px] text-[#9bb5a7] uppercase font-semibold">Technique</span>
                <span className="font-semibold text-[#fbf7f0]">Traditional Dum/Sear</span>
              </div>
            </div>

            <div className="flex items-center gap-2 justify-end">
              <button
                onClick={handleCopyRecipe}
                className="px-3.5 py-1.5 rounded-xl bg-[#061c14] text-xs font-semibold text-[#dfb76c] border border-[#dfb76c]/30 hover:bg-[#0d2a1f] flex items-center gap-1.5 transition-colors shadow-sm"
              >
                <Copy className="w-3.5 h-3.5" />
                <span>{copySuccess ? 'Copied!' : 'Copy'}</span>
              </button>
            </div>
          </div>

        </div>

        {/* Modal Scrollable Body with Rich Velvet Background */}
        <div className="p-6 sm:p-8 space-y-8 overflow-y-auto flex-1 bg-[#04120e]">
          
          {/* Servings Scaler & Ingredients Section */}
          <div className="space-y-4">
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-2 border-b border-[#dfb76c]/20">
              <div>
                <h3 className="font-display text-xl text-[#fbf7f0] font-medium flex items-center gap-2">
                  <span>Ingredients & Measurements</span>
                  <span className="text-xs font-sans text-[#dfb76c] font-semibold">
                    ({Object.values(checkedIngredients).filter(Boolean).length}/{recipe.ingredients.length} prepared)
                  </span>
                </h3>
                <p className="text-xs text-[#9bb5a7]">
                  Click items to mark them as prepped in your kitchen
                </p>
              </div>

              {/* Dynamic Servings Adjuster */}
              <div className="flex items-center gap-3 bg-[#061c14] px-4 py-2 rounded-2xl border border-[#dfb76c]/30 shadow-inner">
                <Users className="w-4 h-4 text-[#dfb76c]" />
                <span className="text-xs text-[#b7ccbf] font-medium">Servings:</span>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setServings(Math.max(1, servings - 1))}
                    className="w-6 h-6 rounded-lg bg-[#0e2c20] text-[#fbf7f0] hover:bg-[#184634] flex items-center justify-center font-bold text-sm transition-colors cursor-pointer"
                  >
                    -
                  </button>
                  <span className="font-mono font-bold text-[#f0d08a] w-6 text-center text-sm">
                    {servings}
                  </span>
                  <button
                    onClick={() => setServings(Math.min(24, servings + 1))}
                    className="w-6 h-6 rounded-lg bg-[#0e2c20] text-[#fbf7f0] hover:bg-[#184634] flex items-center justify-center font-bold text-sm transition-colors cursor-pointer"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            {/* Ingredients Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {recipe.ingredients.map((ing) => {
                const isChecked = !!checkedIngredients[ing.name];
                const scaledAmount = (ing.amount * multiplier).toLocaleString(undefined, {
                  maximumFractionDigits: 1
                });

                return (
                  <div
                    key={ing.name}
                    onClick={() => toggleIngredient(ing.name)}
                    className={`flex items-start gap-3 p-3.5 rounded-2xl border cursor-pointer transition-all select-none ${
                      isChecked
                        ? 'bg-[#030e0b]/80 border-[#143d2c] opacity-60 text-[#718b7e]'
                        : 'bg-[#071c14]/90 border-[#dfb76c]/20 hover:border-[#dfb76c]/60 text-[#ede5da] shadow-sm'
                    }`}
                  >
                    <div
                      className={`w-5 h-5 rounded-md flex items-center justify-center shrink-0 mt-0.5 transition-colors border ${
                        isChecked
                          ? 'bg-gradient-to-r from-[#dfb76c] to-[#b8862f] border-[#dfb76c] text-[#04120e]'
                          : 'border-[#dfb76c]/40 bg-[#04120e]'
                      }`}
                    >
                      {isChecked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="text-xs sm:text-sm font-medium leading-snug">
                        <span className={`font-mono text-[#f0d08a] font-semibold mr-1.5 ${isChecked ? 'line-through text-[#718b7e]' : ''}`}>
                          {scaledAmount} {ing.unit}
                        </span>
                        <span className={isChecked ? 'line-through' : ''}>
                          {ing.name}
                        </span>
                      </div>
                      {ing.note && (
                        <div className="text-[11px] text-[#9bb5a7] italic mt-0.5">
                          {ing.note}
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

          </div>

          {/* Interactive Cooking Assistant: Timer + Step by Step Guide */}
          <div className="space-y-5">
            
            {/* Step Section Heading */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2 border-b border-[#dfb76c]/20">
              <div>
                <h3 className="font-display text-xl text-[#fbf7f0] font-medium">
                  Step-by-Step Culinary Method
                </h3>
                <p className="text-xs text-[#9bb5a7]">
                  Master execution sequence with timed intervals
                </p>
              </div>

              {/* Interactive Kitchen Timer Widget */}
              <div className="flex items-center gap-3 bg-[#061c14] p-2 sm:px-4 sm:py-2.5 rounded-2xl border border-[#dfb76c]/30 shadow-inner">
                <div className="flex items-center gap-2">
                  <Clock className={`w-4 h-4 ${timerFinished ? 'text-[#f87171] animate-pulse' : 'text-[#dfb76c]'}`} />
                  <span className="font-mono text-base font-bold text-[#f0d08a] tabular-nums">
                    {formatTimer(timerSeconds)}
                  </span>
                </div>

                <div className="flex items-center gap-1.5">
                  <button
                    onClick={() => {
                      if (timerFinished) setTimerFinished(false);
                      setIsTimerRunning(!isTimerRunning);
                    }}
                    className="p-1.5 rounded-lg bg-gradient-to-r from-[#dfb76c] to-[#b8862f] text-[#04120e] hover:brightness-110 transition-all font-bold cursor-pointer"
                    title={isTimerRunning ? 'Pause timer' : 'Start timer'}
                  >
                    {isTimerRunning ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                  </button>

                  <button
                    onClick={() => {
                      setIsTimerRunning(false);
                      setTimerSeconds((recipe.steps[activeStepIndex]?.durationMinutes || 10) * 60);
                      setTimerFinished(false);
                    }}
                    className="p-1.5 rounded-lg bg-[#0a2319] text-[#9bb5a7] hover:text-[#fbf7f0] hover:bg-[#123829] border border-[#dfb76c]/20 transition-colors cursor-pointer"
                    title="Reset timer"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                  </button>
                </div>

                {timerFinished && (
                  <span className="text-[11px] text-[#f87171] font-semibold animate-pulse">
                    Step Done!
                  </span>
                )}
              </div>
            </div>

            {/* Steps Timeline List */}
            <div className="space-y-4">
              {recipe.steps.map((step, idx) => {
                const isStepDone = !!completedSteps[step.stepNumber];
                const isActive = activeStepIndex === idx;

                return (
                  <div
                    key={step.stepNumber}
                    className={`rounded-2xl p-5 border transition-all ${
                      isStepDone
                        ? 'bg-[#030e0b]/80 border-[#143d2c]'
                        : isActive
                        ? 'bg-[#0a261c] border-[#dfb76c] shadow-[0_10px_25px_-5px_rgba(212,163,75,0.2)]'
                        : 'bg-[#061811]/90 border-[#dfb76c]/20'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => toggleStep(step.stepNumber)}
                          className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-all border cursor-pointer ${
                            isStepDone
                              ? 'bg-gradient-to-r from-[#dfb76c] to-[#b8862f] border-[#dfb76c] text-[#04120e]'
                              : 'bg-[#04120e] border-[#dfb76c]/40 text-[#f0d08a]'
                          }`}
                        >
                          {isStepDone ? <Check className="w-4 h-4 stroke-[3]" /> : step.stepNumber}
                        </button>
                        <h4 className={`text-sm sm:text-base font-semibold ${isStepDone ? 'line-through text-[#718b7e]' : 'text-[#fbf7f0]'}`}>
                          {step.title}
                        </h4>
                      </div>

                      {step.durationMinutes && (
                        <button
                          onClick={() => {
                            setActiveStepIndex(idx);
                            handleSetTimerForStep(step.durationMinutes);
                          }}
                          className="px-2.5 py-1 rounded-lg bg-[#04120e] text-[11px] font-mono text-[#f0d08a] border border-[#dfb76c]/30 hover:border-[#dfb76c] flex items-center gap-1.5 shrink-0 transition-colors cursor-pointer"
                        >
                          <Clock className="w-3 h-3 text-[#dfb76c]" />
                          <span>{step.durationMinutes} min</span>
                        </button>
                      )}
                    </div>

                    <p className={`text-xs sm:text-sm leading-relaxed pl-10 ${isStepDone ? 'text-[#718b7e]' : 'text-[#d8cfc3]'}`}>
                      {step.instruction}
                    </p>

                    {step.proTip && (
                      <div className="mt-3 ml-10 p-3 rounded-xl bg-[#04120e] border border-[#dfb76c]/25 text-xs text-[#f0d08a] flex items-start gap-2 shadow-inner">
                        <Sparkles className="w-4 h-4 text-[#dfb76c] shrink-0 mt-0.5" />
                        <div>
                          <strong className="text-[#fbf7f0]">Pro Tip: </strong>
                          <span>{step.proTip}</span>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

          </div>

          {/* Bawarchi Secret Box with Rich Velvet Panel */}
          <div className="p-6 rounded-2xl rich-glass-panel text-left space-y-2 border border-[#dfb76c]/40">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#dfb76c]">
              <ChefHat className="w-4 h-4" />
              <span>The Bawarchi's Heirloom Secret</span>
            </div>
            <p className="text-xs sm:text-sm text-[#fbf7f0] font-light leading-relaxed italic">
              "{recipe.bawarchiSecret}"
            </p>
            <div className="text-[11px] text-[#a8bfb2] pt-1">
              <strong className="text-[#dfb76c]">Pairing Note: </strong> {recipe.pairing}
            </div>
          </div>

        </div>

        {/* Modal Sticky Footer */}
        <div className="p-4 sm:p-6 bg-[#04120e] border-t border-[#dfb76c]/25 flex items-center justify-between gap-4 shrink-0">
          <div className="text-xs text-[#9bb5a7] hidden sm:block">
            {recipe.region} Cuisine · Handcrafted with Authentic Pakistani Spices
          </div>

          <div className="flex items-center gap-3 ml-auto">
            <button
              onClick={onClose}
              className="px-5 py-2.5 text-xs font-semibold text-[#b7ccbf] hover:text-[#fbf7f0] rounded-full border border-[#dfb76c]/30 hover:bg-[#0c261d] transition-colors cursor-pointer"
            >
              Close
            </button>
            <button
              onClick={() => window.print()}
              className="px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#04120e] bg-gradient-to-r from-[#dfb76c] to-[#b8862f] hover:brightness-110 rounded-full transition-all flex items-center gap-2 shadow-md cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print Master Guide</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
