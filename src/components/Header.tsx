import { Building2, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background shadow-sm">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex flex-col items-center">
              <div className="flex gap-1 mb-1">
                <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
              </div>
              <div className="flex items-baseline gap-1">
                <span className="text-2xl font-bold text-primary">Laila</span>
                <span className="text-2xl font-bold text-muted-foreground">Nutra</span>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <a href="#home" className="flex items-center gap-2 text-foreground hover:text-primary transition-smooth">
              <Check className="w-4 h-4 text-accent" />
              <span className="font-medium">Home</span>
            </a>
            <a href="#about" className="text-foreground hover:text-primary transition-smooth font-medium">
              About us
            </a>
            <a href="#products" className="text-foreground hover:text-primary transition-smooth font-medium">
              Products
            </a>
            <a href="#services" className="text-foreground hover:text-primary transition-smooth font-medium">
              Services
            </a>
            <a href="#export" className="text-foreground hover:text-primary transition-smooth font-medium">
              Export
            </a>
            <a href="#rd" className="text-foreground hover:text-primary transition-smooth font-medium">
              R&D
            </a>
            <a href="#careers" className="text-foreground hover:text-primary transition-smooth font-medium">
              Careers
            </a>
            <a href="#resources" className="text-foreground hover:text-primary transition-smooth font-medium">
              Resources
            </a>
          </nav>

          {/* CTA Buttons */}
          <div className="flex items-center gap-4">
            <Button className="btn-hero hidden md:flex">
              Contact
            </Button>
            <Button size="icon" className="rounded-full bg-primary text-primary-foreground hover:opacity-90">
              <Building2 className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
