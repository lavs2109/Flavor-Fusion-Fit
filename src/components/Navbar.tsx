
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Scroll helper function
  const scrollToSection = (id: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="bg-white/90 backdrop-blur-sm fixed top-0 left-0 right-0 z-50 shadow-sm">
      <div className="container flex items-center justify-between py-4">
        <div className="flex items-center gap-2">
          <span className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-bold">MA</span>
          </span>
          <span className="font-bold text-xl">Meal Advisor</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <button
            onClick={() => scrollToSection("features")}
            className="text-foreground/80 hover:text-primary transition-colors"
          >
            Features
          </button>
          <button
            onClick={() => scrollToSection("how-it-works")}
            className="text-foreground/80 hover:text-primary transition-colors"
          >
            How It Works
          </button>
          <button
            onClick={() => scrollToSection("get-started")}
            className="text-foreground/80 hover:text-primary transition-colors"
          >
            Get Started
          </button>
        </div>

        <div className="hidden md:block">
          <Button
            variant="default"
            className="bg-primary text-white"
            onClick={() => scrollToSection("get-started")}
          >
            Try It Now
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-background py-4 px-4 shadow-md animate-fade-in">
          <div className="flex flex-col gap-4">
            <button
              onClick={() => scrollToSection("features")}
              className="text-foreground/80 hover:text-primary transition-colors py-2 text-left"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection("how-it-works")}
              className="text-foreground/80 hover:text-primary transition-colors py-2 text-left"
            >
              How It Works
            </button>
            <button
              onClick={() => scrollToSection("get-started")}
              className="text-foreground/80 hover:text-primary transition-colors py-2 text-left"
            >
              Get Started
            </button>
            <Button
              variant="default"
              className="bg-primary text-white w-full mt-2"
              onClick={() => scrollToSection("get-started")}
            >
              Try It Now
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

