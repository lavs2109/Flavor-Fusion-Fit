import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-b from-white to-green-50">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-6 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Personalized <span className="text-primary">Diet Plans</span> For Your Cultural Heritage
            </h1>
            <p className="text-lg text-muted-foreground">
              Discover meal recommendations tailored to your unique cultural background, health goals, and personal preferences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white"
                asChild
              >
                <a href="#get-started">Get Started</a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="#features">Learn More</a>
              </Button>
            </div>
          </div>
          <div className="relative animate-fade-in">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1561043433-aaf687c4cf04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80"
                alt="Diverse healthy foods"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -top-4 -right-4 bg-white p-4 rounded-lg shadow-lg">
              <span className="text-sm font-medium">Culturally-aware nutrition</span>
            </div>
            <div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-lg shadow-lg">
              <span className="text-sm font-medium">AI-powered recommendations</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
