
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import ProfileForm, { ProfileData } from "@/components/ProfileForm";
import RecommendationCard from "@/components/RecommendationCard";
import Footer from "@/components/Footer";
import { sampleRecommendations, DietRecommendation } from "@/data/recommendations";
import { useToast } from "@/components/ui/use-toast";

const Index = () => {
  const [showRecommendations, setShowRecommendations] = useState(false);
  const [recommendation, setRecommendation] = useState<DietRecommendation | null>(null);
  const { toast } = useToast();

  const handleProfileSubmit = (data: ProfileData) => {
    console.log("Profile data submitted:", data);
    
    // Find recommendation based on nationality and goal
    const matchedRecommendation = sampleRecommendations.find(
      (rec) => rec.nationality === data.nationality && rec.goal === data.goal
    );
    
    if (matchedRecommendation) {
      setRecommendation(matchedRecommendation);
      setShowRecommendations(true);
      
      // Scroll to the recommendations section
      setTimeout(() => {
        const element = document.getElementById("recommendations");
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      // Find a recommendation that at least matches the nationality
      const nationalityMatch = sampleRecommendations.find(
        (rec) => rec.nationality === data.nationality
      );
      
      // Or find one that matches the goal
      const goalMatch = sampleRecommendations.find(
        (rec) => rec.goal === data.goal
      );
      
      // Use the best available match or fallback to the first recommendation
      const bestMatch = nationalityMatch || goalMatch || sampleRecommendations[0];
      
      setRecommendation(bestMatch);
      setShowRecommendations(true);
      
      // Show a toast notification
      toast({
        title: "Custom recommendation not found",
        description: `We've provided our best match based on your ${nationalityMatch ? 'nationality' : goalMatch ? 'health goal' : 'profile'}.`,
        duration: 5000,
      });
      
      // Scroll to the recommendations section
      setTimeout(() => {
        const element = document.getElementById("recommendations");
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <Hero />
        <Features />
        
        <section className="py-20 bg-green-50" id="how-it-works">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                How It Works
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Getting personalized diet recommendations is easy and takes just a few steps
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="bg-white rounded-xl p-6 shadow-md text-center">
                <div className="bg-primary/10 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary font-bold text-2xl">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Create Profile</h3>
                <p className="text-muted-foreground">
                  Enter your personal details, cultural background, and health goals
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-md text-center">
                <div className="bg-primary/10 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary font-bold text-2xl">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Get Recommendations</h3>
                <p className="text-muted-foreground">
                  Our AI analyzes your profile and creates personalized meal plans
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-md text-center">
                <div className="bg-primary/10 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary font-bold text-2xl">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Enjoy & Improve</h3>
                <p className="text-muted-foreground">
                  Follow your plan and provide feedback to refine recommendations
                </p>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-20 bg-white">
          <div className="container">
            <ProfileForm onSubmit={handleProfileSubmit} />
          </div>
        </section>
        
        {showRecommendations && recommendation && (
          <section className="py-20 bg-green-50" id="recommendations">
            <div className="container">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Your Personalized Recommendations
                </h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                  Based on your {recommendation.nationality} background and {recommendation.goal.replace('-', ' ')} goal, here are meal suggestions tailored for you
                </p>
              </div>
              
              <RecommendationCard recommendation={recommendation} />
            </div>
          </section>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Index;
