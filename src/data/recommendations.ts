
export interface Meal {
  id: string;
  name: string;
  description: string;
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  imageUrl: string;
}

export interface DietRecommendation {
  id: string;
  nationality: string;
  goal: string;
  breakfast: Meal[];
  lunch: Meal[];
  dinner: Meal[];
  snacks: Meal[];
}

export const sampleRecommendations: DietRecommendation[] = [
  {
    id: "american-weight-loss",
    nationality: "american",
    goal: "weight-loss",
    breakfast: [
      {
        id: "b1",
        name: "Avocado Toast with Egg",
        description: "Whole grain toast topped with mashed avocado and a poached egg",
        calories: 320,
        protein: 14,
        carbs: 30,
        fat: 16,
        imageUrl: "https://images.unsplash.com/photo-1525351484163-7529414344d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80"
      },
      {
        id: "b2",
        name: "Greek Yogurt Parfait",
        description: "Greek yogurt layered with fresh berries and a sprinkle of granola",
        calories: 280,
        protein: 18,
        carbs: 26,
        fat: 10,
        imageUrl: "https://images.unsplash.com/photo-1488477181946-6428a0bfdf82?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80"
      }
    ],
    lunch: [
      {
        id: "l1",
        name: "Southwest Salad",
        description: "Mixed greens with grilled chicken, black beans, corn, and avocado",
        calories: 380,
        protein: 28,
        carbs: 32,
        fat: 14,
        imageUrl: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80"
      }
    ],
    dinner: [
      {
        id: "d1",
        name: "Baked Salmon with Roasted Vegetables",
        description: "Wild-caught salmon with a side of roasted brussels sprouts and sweet potatoes",
        calories: 420,
        protein: 32,
        carbs: 25,
        fat: 18,
        imageUrl: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80"
      }
    ],
    snacks: [
      {
        id: "s1",
        name: "Apple with Almond Butter",
        description: "Sliced apple with a tablespoon of natural almond butter",
        calories: 180,
        protein: 5,
        carbs: 22,
        fat: 9,
        imageUrl: "https://images.unsplash.com/photo-1479894720049-e239d8c0f9ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80"
      }
    ]
  },
  {
    id: "american-muscle-gain",
    nationality: "american",
    goal: "muscle-gain",
    breakfast: [
      {
        id: "b3",
        name: "Protein Pancakes",
        description: "Protein-packed pancakes topped with banana slices and natural maple syrup",
        calories: 450,
        protein: 30,
        carbs: 45,
        fat: 12,
        imageUrl: "https://images.unsplash.com/photo-1506084868230-bb9d95c24759?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80"
      }
    ],
    lunch: [
      {
        id: "l3",
        name: "Chicken & Quinoa Bowl",
        description: "Grilled chicken breast with quinoa, roasted vegetables, and avocado",
        calories: 550,
        protein: 40,
        carbs: 45,
        fat: 18,
        imageUrl: "https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80"
      }
    ],
    dinner: [
      {
        id: "d3",
        name: "Steak with Sweet Potato",
        description: "Grass-fed steak with baked sweet potato and steamed broccoli",
        calories: 620,
        protein: 45,
        carbs: 40,
        fat: 22,
        imageUrl: "https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80"
      }
    ],
    snacks: [
      {
        id: "s3",
        name: "Protein Smoothie",
        description: "Whey protein with banana, peanut butter, and almond milk",
        calories: 320,
        protein: 25,
        carbs: 30,
        fat: 10,
        imageUrl: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80"
      }
    ]
  },
  {
    id: "indian-heart-health",
    nationality: "indian",
    goal: "heart-health",
    breakfast: [
      {
        id: "b4",
        name: "Vegetable Upma",
        description: "Semolina cooked with mixed vegetables and mild spices",
        calories: 240,
        protein: 7,
        carbs: 45,
        fat: 6,
        imageUrl: "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80"
      }
    ],
    lunch: [
      {
        id: "l4",
        name: "Dal and Brown Rice",
        description: "Lentil soup with turmeric and ginger, served with brown rice",
        calories: 340,
        protein: 16,
        carbs: 58,
        fat: 5,
        imageUrl: "https://images.unsplash.com/photo-1574484284002-952d92456975?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80"
      }
    ],
    dinner: [
      {
        id: "d4",
        name: "Tandoori Chicken with Vegetable Curry",
        description: "Marinated and baked chicken with a side of mixed vegetable curry",
        calories: 380,
        protein: 30,
        carbs: 18,
        fat: 12,
        imageUrl: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80"
      }
    ],
    snacks: [
      {
        id: "s4",
        name: "Chana Chaat",
        description: "Spiced chickpeas with diced tomatoes, onions, and cilantro",
        calories: 150,
        protein: 8,
        carbs: 24,
        fat: 3,
        imageUrl: "https://images.unsplash.com/photo-1625944227411-ea51a0182cab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80"
      }
    ]
  },
  {
    id: "indian-weight-loss",
    nationality: "indian",
    goal: "weight-loss",
    breakfast: [
      {
        id: "b5",
        name: "Moong Dal Dosa",
        description: "Thin protein-rich pancake made from sprouted mung beans",
        calories: 180,
        protein: 10,
        carbs: 30,
        fat: 4,
        imageUrl: "https://images.unsplash.com/photo-1559847844-5315695dadae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80"
      }
    ],
    lunch: [
      {
        id: "l5",
        name: "Vegetable Khichdi",
        description: "Rice and lentil porridge with seasonal vegetables and light spices",
        calories: 260,
        protein: 12,
        carbs: 42,
        fat: 6,
        imageUrl: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80"
      }
    ],
    dinner: [
      {
        id: "d5",
        name: "Paneer Tikka with Salad",
        description: "Grilled paneer cheese with bell peppers, onions and a fresh side salad",
        calories: 320,
        protein: 22,
        carbs: 15,
        fat: 18,
        imageUrl: "https://images.unsplash.com/photo-1601050690597-df0568f70950?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80"
      }
    ],
    snacks: [
      {
        id: "s5",
        name: "Roasted Makhana",
        description: "Lightly roasted lotus seeds with a sprinkle of spices",
        calories: 120,
        protein: 4,
        carbs: 18,
        fat: 2,
        imageUrl: "https://images.unsplash.com/photo-1653383668413-8084c82bb1f0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80"
      }
    ]
  },
  {
    id: "mediterranean-energy-boost",
    nationality: "mediterranean",
    goal: "energy-boost",
    breakfast: [
      {
        id: "b6",
        name: "Mediterranean Breakfast Bowl",
        description: "Greek yogurt with honey, figs, nuts, and a drizzle of olive oil",
        calories: 320,
        protein: 15,
        carbs: 40,
        fat: 12,
        imageUrl: "https://images.unsplash.com/photo-1637157212625-ecc6d1658259?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80"
      }
    ],
    lunch: [
      {
        id: "l6",
        name: "Quinoa Tabbouleh",
        description: "Quinoa with chopped parsley, mint, tomatoes, and a lemon-olive oil dressing",
        calories: 340,
        protein: 12,
        carbs: 52,
        fat: 10,
        imageUrl: "https://images.unsplash.com/photo-1556386734-7fa1702b4ec3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80"
      }
    ],
    dinner: [
      {
        id: "d6",
        name: "Grilled Sea Bass with Vegetables",
        description: "Grilled sea bass with a side of roasted eggplant, zucchini, and bell peppers",
        calories: 360,
        protein: 30,
        carbs: 15,
        fat: 20,
        imageUrl: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80"
      }
    ],
    snacks: [
      {
        id: "s6",
        name: "Hummus with Vegetable Sticks",
        description: "Homemade hummus with carrot, cucumber, and bell pepper sticks",
        calories: 160,
        protein: 6,
        carbs: 18,
        fat: 7,
        imageUrl: "https://images.unsplash.com/photo-1680731225498-0a46a48d3e7f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80"
      }
    ]
  },
  {
    id: "chinese-diabetes-friendly",
    nationality: "chinese",
    goal: "diabetes-friendly",
    breakfast: [
      {
        id: "b7",
        name: "Congee with Lean Protein",
        description: "Rice porridge with poached chicken, ginger, and scallions",
        calories: 280,
        protein: 18,
        carbs: 35,
        fat: 6,
        imageUrl: "https://images.unsplash.com/photo-1607330289024-1535c6b4e1c1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80"
      }
    ],
    lunch: [
      {
        id: "l7",
        name: "Steamed Fish with Bok Choy",
        description: "Steamed white fish with ginger, scallions and a side of bok choy",
        calories: 320,
        protein: 28,
        carbs: 18,
        fat: 10,
        imageUrl: "https://images.unsplash.com/photo-1611143669185-af224c5e3252?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80"
      }
    ],
    dinner: [
      {
        id: "d7",
        name: "Tofu and Vegetable Stir Fry",
        description: "Tofu with mixed vegetables in a light garlic sauce, served with a small portion of brown rice",
        calories: 350,
        protein: 20,
        carbs: 40,
        fat: 12,
        imageUrl: "https://images.unsplash.com/photo-1512003867696-6d5ce6835040?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80"
      }
    ],
    snacks: [
      {
        id: "s7",
        name: "Edamame",
        description: "Steamed young soybeans lightly seasoned with sea salt",
        calories: 120,
        protein: 10,
        carbs: 10,
        fat: 5,
        imageUrl: "https://images.unsplash.com/photo-1563699182-64f87b3f3158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80"
      }
    ]
  },
  {
    id: "mexican-heart-health",
    nationality: "mexican",
    goal: "heart-health",
    breakfast: [
      {
        id: "b8",
        name: "Avocado Tostada",
        description: "Whole grain tostada with mashed avocado, pico de gallo, and a sprinkle of queso fresco",
        calories: 310,
        protein: 10,
        carbs: 32,
        fat: 16,
        imageUrl: "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80"
      }
    ],
    lunch: [
      {
        id: "l8",
        name: "Fish Tacos with Cabbage Slaw",
        description: "Grilled fish in corn tortillas with red cabbage slaw and lime crema",
        calories: 380,
        protein: 25,
        carbs: 40,
        fat: 12,
        imageUrl: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80"
      }
    ],
    dinner: [
      {
        id: "d8",
        name: "Bean and Vegetable Enchiladas",
        description: "Whole wheat tortillas filled with black beans and vegetables, topped with red sauce",
        calories: 400,
        protein: 18,
        carbs: 52,
        fat: 14,
        imageUrl: "https://images.unsplash.com/photo-1534352956036-cd81e27dd615?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80"
      }
    ],
    snacks: [
      {
        id: "s8",
        name: "Jicama Sticks with Chili and Lime",
        description: "Fresh jicama batons seasoned with chili powder and fresh lime juice",
        calories: 80,
        protein: 2,
        carbs: 18,
        fat: 0,
        imageUrl: "https://images.unsplash.com/photo-1583736902935-4525902ae773?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80"
      }
    ]
  }
];
