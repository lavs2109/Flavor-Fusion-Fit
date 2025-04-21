
export interface Goal {
  id: string;
  name: string;
  description: string;
}

export const goals: Goal[] = [
  {
    id: "weight-loss",
    name: "Weight Loss",
    description: "Balanced nutrition with calorie deficit to help you lose weight healthily"
  },
  {
    id: "muscle-gain",
    name: "Muscle Gain",
    description: "Protein-rich diet to support muscle growth and recovery"
  },
  {
    id: "maintenance",
    name: "Weight Maintenance",
    description: "Balanced nutrition to maintain your current weight and overall health"
  },
  {
    id: "heart-health",
    name: "Heart Health",
    description: "Low sodium, heart-healthy fats, and nutrient-rich foods"
  },
  {
    id: "energy-boost",
    name: "Energy Boost",
    description: "Nutrient-dense foods with complex carbs for sustainable energy"
  },
  {
    id: "diabetes-friendly",
    name: "Diabetes-Friendly",
    description: "Low glycemic index foods with balanced macronutrients"
  }
];
