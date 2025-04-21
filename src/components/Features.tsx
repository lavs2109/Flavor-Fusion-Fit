
import { Apple, ChefHat, Salad, Users } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <ChefHat className="h-10 w-10 text-primary" />,
      title: "Cultural Food Preferences",
      description:
        "Get recommendations that respect your cultural background and food traditions",
    },
    {
      icon: <Apple className="h-10 w-10 text-primary" />,
      title: "Personalized Nutrition",
      description:
        "Meal plans optimized for your unique health goals and dietary needs",
    },
    {
      icon: <Salad className="h-10 w-10 text-primary" />,
      title: "Smart Meal Planning",
      description:
        "AI-powered suggestions that adapt to your preferences and feedback",
    },
    {
      icon: <Users className="h-10 w-10 text-primary" />,
      title: "Regional Specialties",
      description:
        "Discover healthy versions of traditional recipes from your heritage",
    },
  ];

  return (
    <section className="py-20 bg-white" id="features">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Features Designed For Your Health Journey
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Our platform combines nutritional science with cultural awareness to provide
            you with the most effective and enjoyable diet recommendations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-secondary/30 rounded-xl p-6 hover:shadow-md transition-all hover:-translate-y-1"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
