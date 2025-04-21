
import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary/30 py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <span className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold">MA</span>
              </span>
              <span className="font-bold text-xl">Meal Advisor</span>
            </div>
            <p className="text-muted-foreground mb-4 max-w-md">
              Combining cultural food traditions with modern nutritional science
              to provide personalized diet recommendations for a healthier you.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#features" className="text-muted-foreground hover:text-primary transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="text-muted-foreground hover:text-primary transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#get-started" className="text-muted-foreground hover:text-primary transition-colors">
                  Get Started
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-muted-foreground">
                support@flavorfusionfit.com
              </li>
              <li className="text-muted-foreground">
                1234 Nutrition Ave.
              </li>
              <li className="text-muted-foreground">
                Healthy City, HC 12345
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground flex items-center justify-center gap-1">
            Made with <Heart size={16} className="text-red-500" /> by Meal Advisor Team © {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

