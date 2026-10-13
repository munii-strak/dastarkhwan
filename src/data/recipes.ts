import biryaniImg from '../assets/images/pakistani_hero_biryani_1791634787881.jpg';
import karahiImg from '../assets/images/pakistani_lahori_karahi_1791634802260.jpg';
import nihariImg from '../assets/images/pakistani_nihari_pot_1791634813254.jpg';
import chapliImg from '../assets/images/pakistani_chapli_kebab_1791634824336.jpg';

export interface Ingredient {
  name: string;
  amount: number;
  unit: string;
  note?: string;
}

export interface RecipeStep {
  stepNumber: number;
  title: string;
  instruction: string;
  durationMinutes?: number;
  proTip?: string;
}

export interface Recipe {
  id: string;
  name: string;
  regionalTitle: string;
  tagline: string;
  region: 'Lahore' | 'Karachi' | 'Peshawar' | 'Balochistan' | 'Kashmir';
  category: 'Slow-Cooked' | 'Karahi & Tawa' | 'Dum Rice' | 'Grills & Kebabs' | 'Desserts & Breads';
  prepTime: number; // minutes
  cookTime: number; // minutes
  defaultServings: number;
  spiceHeat: 'Mild & Aromatic' | 'Medium Spicy' | 'Authentic Pak-Spicy' | 'Tez Teekha (Fiery)';
  heatLevel: 1 | 2 | 3 | 4;
  image: string;
  originStory: string;
  bawarchiSecret: string;
  ingredients: Ingredient[];
  steps: RecipeStep[];
  pairing: string;
  keyAromatics: string[];
}

export const RECIPES_DATA: Recipe[] = [
  {
    id: 'shahi-dum-biryani',
    name: 'Karachi Shahi Dum Biryani',
    regionalTitle: 'Karachi Shahi Dum Biryani',
    tagline: 'Fragrant aged basmati layered with succulent mutton, dried plums, saffron milk, and golden birista onions.',
    region: 'Karachi',
    category: 'Dum Rice',
    prepTime: 40,
    cookTime: 65,
    defaultServings: 6,
    spiceHeat: 'Authentic Pak-Spicy',
    heatLevel: 3,
    image: biryaniImg,
    originStory: 'Born from the vibrant coastal culinary heritage of Karachi, blending Mughal court extravagance with aromatic Sindhi dried plums (Aloo Bukhara), green cardamoms, and saffron-infused milk.',
    bawarchiSecret: 'Always seal the handi rim with whole wheat dough (Aata Purdah) during Dum so not a single drop of aromatic vapor escapes. Rest for 15 minutes before unsealing.',
    keyAromatics: ['Kashmiri Saffron', 'Green Cardamom', 'Aloo Bukhara (Dried Plums)', 'Kewra Water', 'Star Anise'],
    pairing: 'Chilled Zeera Raita with diced cucumber and sliced red onion ring salad with fresh lemon.',
    ingredients: [
      { name: 'Mutton (bone-in leg or shoulder cuts)', amount: 1000, unit: 'g', note: 'medium cut with marrow bones' },
      { name: 'Aged Long-Grain Basmati Rice', amount: 750, unit: 'g', note: 'soaked 30 mins' },
      { name: 'Onions (thinly sliced)', amount: 4, unit: 'whole', note: 'fried golden brown into birista' },
      { name: 'Full-fat Yogurt (Dahi)', amount: 250, unit: 'g', note: 'whisked smooth' },
      { name: 'Ginger-Garlic Paste', amount: 3, unit: 'tbsp', note: 'freshly stone-ground' },
      { name: 'Dried Plums (Aloo Bukhara)', amount: 8, unit: 'pieces' },
      { name: 'Pure Desi Ghee', amount: 4, unit: 'tbsp' },
      { name: 'Kashmiri Saffron strands in warm milk', amount: 0.5, unit: 'g', note: 'steeped in 60ml milk' },
      { name: 'Fresh Mint & Coriander leaves', amount: 1, unit: 'cup', note: 'chopped' },
      { name: 'Whole Spices (Cardamom, Cloves, Cinnamon, Star Anise)', amount: 2, unit: 'tbsp' },
      { name: 'Red Chili Powder & Biryani Masala', amount: 2, unit: 'tbsp' },
      { name: 'Hard-Boiled Eggs (halved)', amount: 3, unit: 'whole', note: 'for garnish' },
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Marinate & Sear the Mutton Qorma',
        instruction: 'Mix mutton with yogurt, ginger-garlic paste, red chili, biryani spices, aloo bukhara, and half the fried onions. In a heavy handi, sear in ghee on medium-high until meat browns and releases its rich aromatics.',
        durationMinutes: 20,
        proTip: 'Searing the meat until the ghee separates (bhunai) locks in the succulent juices.'
      },
      {
        stepNumber: 2,
        title: 'Simmer the Rich Yakhni Gravy',
        instruction: 'Add 1.5 cups water, cover, and gently simmer until meat is 85% tender. The gravy should be rich, thick, and glistening with a red roghan surface.',
        durationMinutes: 30,
        proTip: 'Do not overcook the mutton here; it will finish tenderizing in the sealed dum steam.'
      },
      {
        stepNumber: 3,
        title: 'Parboil the Fragrant Basmati',
        instruction: 'Boil water with whole cardamom, star anise, salt, and bay leaf. Cook the soaked basmati rice until exactly 70% done (firm core inside the grain). Drain immediately.',
        durationMinutes: 7,
        proTip: 'Touch a grain: it should snap easily into three pieces between your thumb and fingernail.'
      },
      {
        stepNumber: 4,
        title: 'The Royal Layering (Tah Dena)',
        instruction: 'Spread the mutton gravy at the bottom. Layer the parboiled rice over it. Top with saffron milk, Kewra drops, fresh mint, coriander, remaining birista, and spoonfuls of melted desi ghee.',
        durationMinutes: 5,
        proTip: 'Never compress the rice; keep it feather-light so aromatic steam circulates freely.'
      },
      {
        stepNumber: 5,
        title: 'Dum Cooking under Tight Seal',
        instruction: 'Seal the rim with wheat dough or double aluminum foil with a tight lid. Cook on high for 5 minutes, then place a cast iron tawa underneath and cook on lowest flame for 20 minutes.',
        durationMinutes: 25,
        proTip: 'Let the pot rest undisturbed for 10 minutes off heat before gently fluffing with a flat saucer.'
      }
    ]
  },
  {
    id: 'lahori-chicken-karahi',
    name: 'Authentic Lahori Butt Karahi',
    regionalTitle: 'Lahori Butt Chicken Karahi',
    tagline: 'Blistering high-flame wok curry cooked with zero onions, heaps of sun-ripened tomatoes, fresh ginger batons, and pure butter.',
    region: 'Lahore',
    category: 'Karahi & Tawa',
    prepTime: 15,
    cookTime: 25,
    defaultServings: 4,
    spiceHeat: 'Tez Teekha (Fiery)',
    heatLevel: 4,
    image: karahiImg,
    originStory: 'Famous across Lakshmi Chowk and Gawalmandi, true Lahori Karahi never uses onions or water. It relies on the natural sweetness of reduced tomatoes and intense iron-wok heat (Wok Hei).',
    bawarchiSecret: 'Cook strictly in a heavy black iron karahi. Use whole green chilies slit lengthwise and finish with a generous dollop of pure Makhan (country butter) right before serving.',
    keyAromatics: ['Crushed Roasted Coriander', 'Fresh Ginger Juliennes', 'Dark Roasted Cumin', 'Kashmiri Chili Flakes', 'Country Butter'],
    pairing: 'Piping hot Sesame Tandoori Naan or crisp Khamiri Roti with lemon quarters.',
    ingredients: [
      { name: 'Fresh Bone-in Chicken (small karahi cut)', amount: 1000, unit: 'g' },
      { name: 'Ripe Red Roma Tomatoes (halved)', amount: 6, unit: 'whole', note: 'skin peels naturally during bhunai' },
      { name: 'Desi Ghee or Makhan (Butter)', amount: 100, unit: 'g' },
      { name: 'Fresh Ginger (thinly julienned)', amount: 4, unit: 'tbsp' },
      { name: 'Fresh Garlic Paste', amount: 2, unit: 'tbsp' },
      { name: 'Dark Green Chilies (slit)', amount: 6, unit: 'whole' },
      { name: 'Crushed Coriander Seeds (coarsely pounded)', amount: 1.5, unit: 'tbsp' },
      { name: 'Roasted Cumin Powder (Bhuna Zeera)', amount: 1, unit: 'tbsp' },
      { name: 'Black Pepper (freshly cracked)', amount: 1, unit: 'tsp' },
      { name: 'Fresh Coriander (chopped)', amount: 0.5, unit: 'cup' },
      { name: 'Pink Himalayan Salt', amount: 1.5, unit: 'tsp' },
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Initial Sear in Iron Wok',
        instruction: 'Heat ghee in a black iron wok over blistering flame. Add chicken pieces and garlic paste. Sear vigorously for 5 minutes until chicken skin turns pale golden.',
        durationMinutes: 5,
        proTip: 'High heat creates the iconic smoky karahi aroma and locks the moisture inside.'
      },
      {
        stepNumber: 2,
        title: 'Tomato Steam & Skin Removal',
        instruction: 'Place halved tomatoes face down over the chicken. Cover with a lid for 6 minutes on medium heat. Remove lid and gently peel off all the tomato skins using tongs.',
        durationMinutes: 6,
        proTip: 'Tomato skins peel off effortlessly when steamed; the pulp dissolves into a silky masala.'
      },
      {
        stepNumber: 3,
        title: 'High-Flame Bhunai (Vigorous Stir-Frying)',
        instruction: 'Mash the softened tomatoes into the pan using the back of your spoon. Turn the flame to maximum. Cook furiously while stirring constantly until tomato water evaporates completely and oil shines.',
        durationMinutes: 8,
        proTip: 'Do not add any water! The natural tomato juices cook the chicken to perfection.'
      },
      {
        stepNumber: 4,
        title: 'Aromatic Spice Infusion',
        instruction: 'Add salt, crushed coriander seeds, roasted cumin, and red chili flakes. Stir-fry for 3 minutes until spices release their fragrant oils.',
        durationMinutes: 3,
        proTip: 'Always add crushed spices towards the end so they do not burn or darken the gravy.'
      },
      {
        stepNumber: 5,
        title: 'Garnish with Butter & Ginger Juliennes',
        instruction: 'Toss in fresh green chilies, freshly cracked black pepper, a knob of country butter, and heaps of ginger juliennes and fresh coriander. Serve sizzling.',
        durationMinutes: 2,
        proTip: 'Serve straight in the hot iron karahi onto the dining table for authentic theatrical presentation.'
      }
    ]
  },
  {
    id: 'shahi-beef-nihari',
    name: 'Old Lahore Nalli Beef Nihari',
    regionalTitle: 'Shahi Nalli Beef Nihari',
    tagline: 'Melt-in-mouth beef shanks slow-simmered overnight with bone marrow, velvety flour roux, and fiery spiced roghan.',
    region: 'Lahore',
    category: 'Slow-Cooked',
    prepTime: 30,
    cookTime: 180,
    defaultServings: 6,
    spiceHeat: 'Tez Teekha (Fiery)',
    heatLevel: 4,
    image: nihariImg,
    originStory: 'Originally served to Mughal Nawabs after Fajr morning prayers to sustain them through cold winter days. The word Nihari stems from "Nahar" (daybreak).',
    bawarchiSecret: 'Scoop off the glowing red oil (Roghan / Tari) before adding the toasted atta flour slurry; pour the hot roghan back onto individual bowls right at serving time.',
    keyAromatics: ['Peepli (Long Pepper)', 'Fennel (Saunf)', 'Mace (Javetri)', 'Black Cardamom', 'Ginger Juliennes'],
    pairing: 'Hot Khameeri Roti, extra bone marrow, lemon wedges, and chopped fiery bird-eye chilies.',
    ingredients: [
      { name: 'Beef Shank (Bong) with marrow bones (Nalli)', amount: 1200, unit: 'g' },
      { name: 'Mustard Oil or Desi Ghee', amount: 150, unit: 'ml' },
      { name: 'Whole Wheat Flour (Atta)', amount: 4, unit: 'tbsp', note: 'lightly dry-roasted' },
      { name: 'Ginger Paste & Garlic Paste', amount: 3, unit: 'tbsp' },
      { name: 'Onions (finely sliced)', amount: 2, unit: 'whole' },
      { name: 'Nihari Potli Masala (Fennel, Long Pepper, Mace, Cardamom, Nutmeg)', amount: 3, unit: 'tbsp' },
      { name: 'Kashmiri Degi Mirch (for crimson roghan)', amount: 2, unit: 'tbsp' },
      { name: 'Garnish: Fresh Ginger batons, Lemon wedges, Green chilies', amount: 1, unit: 'platter' },
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Searing the Bong Shanks',
        instruction: 'Heat ghee in a heavy pot, brown sliced onions, add ginger-garlic paste and beef shank pieces. Brown the meat thoroughly until glossy.',
        durationMinutes: 15,
        proTip: 'Using marrow-rich shanks (bong) provides the silky gelatinous consistency unique to authentic Nihari.'
      },
      {
        stepNumber: 2,
        title: 'Aromatic Masala & Roghan Extraction',
        instruction: 'Add the Nihari spice blend, Kashmiri chili, and salt. Sauté on low flame until fragrant crimson oil separates and floats completely on top. Skim off 70% of this oil into a small bowl and set aside.',
        durationMinutes: 10,
        proTip: 'This skimmed oil is called "Roghan" or "Tari"—if you leave it in when adding flour, the flour will absorb all the luster.'
      },
      {
        stepNumber: 3,
        title: 'The Slow Simmer (Dheemi Aanch)',
        instruction: 'Add 6 cups water and bone marrow shanks. Cover tightly and simmer on very low flame for 3 to 4 hours until the meat is spoon-tender.',
        durationMinutes: 140,
        proTip: 'Authentic bawarchis let this simmer on charcoal embers throughout the night.'
      },
      {
        stepNumber: 4,
        title: 'Velvety Atta Slurry Thickening',
        instruction: 'Whisk dry-roasted atta flour with 1 cup cold water until lump-free. Slowly pour into the simmering gravy while stirring continuously. Cook for 15 minutes until velvety.',
        durationMinutes: 15,
        proTip: 'Dry roasting the flour first gives a warm nutty aroma and removes any raw flour flavor.'
      }
    ]
  },
  {
    id: 'peshawari-chapli-kebab',
    name: 'Peshawari Shinwari Chapli Kebab',
    regionalTitle: 'Peshawari Shinwari Chapli Kebab',
    tagline: 'Crisp-edged, melt-in-mouth beef mince patties studded with crushed coriander, pomegranate seeds, and charred tomato slices.',
    region: 'Peshawar',
    category: 'Grills & Kebabs',
    prepTime: 25,
    cookTime: 15,
    defaultServings: 4,
    spiceHeat: 'Medium Spicy',
    heatLevel: 2,
    image: chapliImg,
    originStory: 'Hailing from the historic spice markets of Qissa Khwani Bazaar in Peshawar. "Chapli" derives from the Pashto word "Chaprikh", meaning flat.',
    bawarchiSecret: 'Knead the meat like bread dough with animal fat and cornmeal (Makai ka atta) for at least 10 minutes until proteins bind smoothly. Never make patties thick.',
    keyAromatics: ['Crushed Anardana (Pomegranate Seeds)', 'Roasted Coriander Seeds', 'Crushed Carom (Ajwain)', 'Charred Tomato Slices'],
    pairing: 'Fresh Tandoori Nan, mint raita, and thinly sliced red onions soaked in lemon juice.',
    ingredients: [
      { name: 'Coarsely Ground Beef (with 20% natural fat)', amount: 800, unit: 'g' },
      { name: 'Yellow Cornmeal (Makai ka Atta)', amount: 4, unit: 'tbsp', note: 'toasted' },
      { name: 'Dried Pomegranate Seeds (Anardana)', amount: 2, unit: 'tbsp', note: 'coarsely crushed' },
      { name: 'Whole Coriander Seeds', amount: 2, unit: 'tbsp', note: 'roasted & crushed' },
      { name: 'Onions (finely chopped & squeezed dry)', amount: 2, unit: 'whole' },
      { name: 'Ripe Tomatoes (diced & seeded)', amount: 2, unit: 'whole' },
      { name: 'Tomato Slices (for center pressing)', amount: 8, unit: 'slices' },
      { name: 'Green Chilies (finely minced)', amount: 4, unit: 'whole' },
      { name: 'Egg (lightly scrambled or raw)', amount: 1, unit: 'whole' },
      { name: 'Beef Tallow or Ghee (for shallow frying)', amount: 150, unit: 'g' },
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Kneading the Mince Dough',
        instruction: 'In a wide flat brass platter, combine beef mince, salt, ajwain, crushed coriander, anardana, and green chilies. Knead vigorously with your knuckles for 10 full minutes until sticky.',
        durationMinutes: 10,
        proTip: 'The squeezing and kneading emulsifies meat fat with spices so kebabs will never break during frying.'
      },
      {
        stepNumber: 2,
        title: 'Folding Aromatics & Cornmeal',
        instruction: 'Fold in squeezed dry onions, diced tomatoes, scrambled egg, and toasted cornmeal gently so tomatoes do not bleed moisture into the mix.',
        durationMinutes: 5,
        proTip: 'Squeezing onions in a clean kitchen towel removes excess moisture and keeps kebabs crispy.'
      },
      {
        stepNumber: 3,
        title: 'Shaping the Thin Flat Patties',
        instruction: 'Moisten hands with water. Take a baseball-sized portion of mince and flatten into a wide, thin palm-sized disc. Press a thin slice of fresh tomato right in the center.',
        durationMinutes: 5,
        proTip: 'The thinner the edges, the crispier and crunchier they become in hot fat.'
      },
      {
        stepNumber: 4,
        title: 'Shallow Frying on Cast Iron Tawa',
        instruction: 'Slide patties into hot beef tallow or ghee on a large concave tawa. Fry on medium-high for 3-4 minutes per side until deeply browned and crunchy on the borders.',
        durationMinutes: 8,
        proTip: 'Traditional Peshawari masters shallow-fry on a giant concave tawa where fat pools in the center.'
      }
    ]
  },
  {
    id: 'shahi-mutton-haleem',
    name: 'Karachi Shahi Reshadar Daleem',
    regionalTitle: 'Shahi Reshadar Daleem',
    tagline: 'Slow-simmered medley of seven heirloom lentils, broken wheat, and shredded mutton, finished with sizzling desi ghee tarka.',
    region: 'Karachi',
    category: 'Slow-Cooked',
    prepTime: 45,
    cookTime: 240,
    defaultServings: 8,
    spiceHeat: 'Medium Spicy',
    heatLevel: 2,
    image: nihariImg,
    originStory: 'Brought to the subcontinent centuries ago, Haleem is a tribute to patience. Pounded with wooden ghota until grains and meat dissolve into a unified silky texture.',
    bawarchiSecret: 'Use a heavy wooden pestle (Ghota) to pound the meat fibers against the pot walls until long silken threads (Resha) form.',
    keyAromatics: ['Nutmeg & Mace', 'Black Cumin', 'Golden Fried Onions', 'Crisp Ginger', 'Chaat Masala'],
    pairing: 'Crispy fried birista onions, slivered ginger, chopped mint, lemon wedges, and chaat masala.',
    ingredients: [
      { name: 'Boneless Mutton or Beef stew meat', amount: 1000, unit: 'g' },
      { name: 'Cracked Wheat (Dalia)', amount: 200, unit: 'g', note: 'soaked overnight' },
      { name: 'Barley (Jau)', amount: 50, unit: 'g' },
      { name: 'Chana Daal (Split Bengal Gram)', amount: 100, unit: 'g' },
      { name: 'Moong, Masoor, and Mash Daals', amount: 150, unit: 'g', note: 'mixed equal parts' },
      { name: 'Desi Ghee (for tarka)', amount: 150, unit: 'g' },
      { name: 'Onions (golden fried)', amount: 3, unit: 'whole' },
      { name: 'Haleem Garam Masala Blend', amount: 2, unit: 'tbsp' },
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Lentils & Grain Boiling',
        instruction: 'Simmer soaked wheat, barley, and lentils in 8 cups of water with turmeric until completely soft and creamy.',
        durationMinutes: 60,
        proTip: 'Cook on low heat so lentils become soft enough to mash effortlessly.'
      },
      {
        stepNumber: 2,
        title: 'Mutton Qorma Preparation',
        instruction: 'In a separate pot, cook mutton with ginger, garlic, chili, and whole spices until meat is falling apart tender.',
        durationMinutes: 90,
        proTip: 'Shred the meat using two forks or a wooden spoon along its natural muscle grain.'
      },
      {
        stepNumber: 3,
        title: 'The Pounding Ritual (Ghota Lagana)',
        instruction: 'Combine the grain mash and shredded meat. Pound rhythmically with a wooden ghota for 30 minutes until silky and sticky.',
        durationMinutes: 30,
        proTip: 'This mechanical action develops the iconic elastic stringy texture of true Karachi Daleem.'
      },
      {
        stepNumber: 4,
        title: 'Desi Ghee Tarka',
        instruction: 'Heat desi ghee until smoking, fry sliced onions until golden crisp, and pour the sizzling tarka over the bubbling pot.',
        durationMinutes: 10,
        proTip: 'Pouring the piping hot ghee creates an irresistible roasted onion aroma.'
      }
    ]
  },
  {
    id: 'zafrani-shahi-kheer',
    name: 'Purani Dilli Zafrani Shahi Kheer',
    regionalTitle: 'Zafrani Shahi Kheer Matka',
    tagline: 'Silky slow-reduced whole milk infused with royal saffron, crushed basmati rice, green cardamom, and toasted pistachios in clay matkas.',
    region: 'Lahore',
    category: 'Desserts & Breads',
    prepTime: 20,
    cookTime: 50,
    defaultServings: 6,
    spiceHeat: 'Mild & Aromatic',
    heatLevel: 1,
    image: biryaniImg,
    originStory: 'The crown jewel of traditional Pakistani festive dastarkhwans, prepared in unglazed terracotta clay pots (matkas) that impart a delightful earthy aroma.',
    bawarchiSecret: 'Crush the soaked basmati rice coarsely between your palms (never blend into a powder). Cook in thick buffalo whole milk for natural clotted creaminess.',
    keyAromatics: ['Kashmiri Saffron (Zafran)', 'Green Cardamom Powder', 'Kewra Rose Water', 'Silver Leaf (Chandi ka Warq)'],
    pairing: 'Served chilled in clay pots accompanied by Sheermal or hot Shahi Tukray.',
    ingredients: [
      { name: 'Full-Cream Whole Buffalo Milk', amount: 2000, unit: 'ml' },
      { name: 'Aged Basmati Rice (soaked & hand-crushed)', amount: 100, unit: 'g' },
      { name: 'Cane Sugar or Condensed Milk', amount: 200, unit: 'g' },
      { name: 'Green Cardamom (freshly ground)', amount: 1, unit: 'tsp' },
      { name: 'Pure Saffron Strands', amount: 0.5, unit: 'g', note: 'soaked in warm milk' },
      { name: 'Almonds & Pistachios (slivered)', amount: 60, unit: 'g' },
      { name: 'Kewra Water', amount: 1, unit: 'tsp' },
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Milk Reduction',
        instruction: 'Bring full-cream milk to a rolling boil in a heavy brass kadhai, then reduce flame to low and let it simmer until it reduces by a quarter.',
        durationMinutes: 20,
        proTip: 'Stir scraping the sides of the pan so clotted cream (malai) incorporates back into the milk.'
      },
      {
        stepNumber: 2,
        title: 'Slow Cooking the Crushed Rice',
        instruction: 'Add the hand-crushed rice. Simmer on low flame, stirring every 2 minutes, until grains swell and completely meld with the thickened milk.',
        durationMinutes: 25,
        proTip: 'Continuous slow stirring releases rice starches, creating a velvety pudding texture.'
      },
      {
        stepNumber: 3,
        title: 'Saffron & Sweetening',
        instruction: 'Stir in saffron milk, sugar, and cardamom powder. Cook for another 5 minutes until sugar dissolves and turns a glowing pale golden hue.',
        durationMinutes: 5,
        proTip: 'Always add sugar at the end; adding sugar too early prevents the rice from softening properly.'
      },
      {
        stepNumber: 4,
        title: 'Clay Pot Chilling',
        instruction: 'Stir in Kewra water and slivered nuts. Ladle into earthenware clay bowls. Chill in the refrigerator for at least 4 hours before serving.',
        durationMinutes: 10,
        proTip: 'Clay pots absorb slight excess moisture, giving the kheer an unmistakable thick, custardy bite.'
      }
    ]
  }
];

export interface SpiceInfo {
  name: string;
  regionalName: string;
  scientific: string;
  role: string;
  flavorNotes: string;
  dishes: string[];
}

export const SPICE_PANTRY: SpiceInfo[] = [
  {
    name: 'Kala Zeera (Black Royal Cumin)',
    regionalName: 'Kala Zeera',
    scientific: 'Bunium persicum',
    role: 'The signature finishing touch of authentic Pakistani Biryani and slow-cooked yakhnis.',
    flavorNotes: 'Earthier, more intensely floral and piney than standard cumin.',
    dishes: ['Shahi Dum Biryani', 'Lahori Karahi', 'Yakhni Pulao']
  },
  {
    name: 'Anardana (Wild Pomegranate Seeds)',
    regionalName: 'Anardana',
    scientific: 'Punica granatum',
    role: 'Provides natural fruity tartness and signature chew in Pashtun grills.',
    flavorNotes: 'Sweet-sour, tangy, molasses-rich note with a delightful rustic crunch.',
    dishes: ['Peshawari Chapli Kebab', 'Namak Mandi Tikka', 'Tawa Gosht']
  },
  {
    name: 'Javetri & Jaiphal (Mace & Nutmeg)',
    regionalName: 'Javetri & Jaiphal',
    scientific: 'Myristica fragrans',
    role: 'The secret royal court aromatics found in Shahi Nihari and Karachi Biryani.',
    flavorNotes: 'Warm, delicately sweet, penetrating royal fragrance.',
    dishes: ['Beef Nihari', 'Dum Biryani', 'Shahi Haleem']
  },
  {
    name: 'Peepli (Long Pepper)',
    regionalName: 'Peepli',
    scientific: 'Piper retrofractum',
    role: 'The ancient soul of authentic Old City Nihari potli masala.',
    flavorNotes: 'Sweet earthiness followed by a warm, tongue-numbing heat.',
    dishes: ['Authentic Lahori Nihari', 'Paye (Trotters)', 'Siri Paye']
  },
  {
    name: 'Kasuri Methi (Sundried Fenugreek)',
    regionalName: 'Kasuri Methi',
    scientific: 'Trigonella foenum-graecum',
    role: 'Rubbed between palms at the exact moment of turning off the flame.',
    flavorNotes: 'Nutty, bittersweet, maple-herbal fragrance grown in Kasur, Punjab.',
    dishes: ['Chicken Karahi', 'Palak Gosht', 'Makai Roti']
  },
  {
    name: 'Zafran (Kashmiri Saffron)',
    regionalName: 'Zafran',
    scientific: 'Crocus sativus',
    role: 'Precious golden stigmas steeped in warm milk for imperial biryanis and kheer.',
    flavorNotes: 'Honeyed hay, metallic sweetness, royal golden color.',
    dishes: ['Karachi Dum Biryani', 'Zafrani Kheer', 'Shahi Tukray']
  }
];
