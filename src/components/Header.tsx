import { useState, useEffect } from "react";
import { Menu, Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About us" },
    { href: "#products", label: "Products" },
    { href: "#services", label: "Services" },
    { href: "#export", label: "Export" },
    { href: "#rd", label: "R&D" },
    { href: "#careers", label: "Careers" },
    { href: "#resources", label: "Resources" },
  ];

  useEffect(() => {
    let ticking = false;
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(scrollPosition > 20);

          // Update active section based on scroll position
          const sections = navItems.map((item) => item.href.substring(1));
          const currentSection = sections.find((section) => {
            const element = document.getElementById(section);
            if (element) {
              const rect = element.getBoundingClientRect();
              return rect.top <= 100 && rect.bottom >= 100;
            }
            return false;
          });
          if (currentSection) {
            setActiveSection(currentSection);
          }
          
          lastScrollY = scrollPosition;
          ticking = false;
        });
        
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, [navItems]);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
        isScrolled
          ? "bg-background/70 backdrop-blur-2xl backdrop-saturate-150 shadow-[0_8px_32px_rgba(0,0,0,0.08)] border-b border-border/40"
          : "bg-transparent backdrop-blur-none shadow-none border-b border-transparent"
      }`}
      style={{
        transitionTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        willChange: 'background-color, backdrop-filter, box-shadow',
      }}
    >
      {/* Premium gradient overlay when scrolled */}
      <div 
        className={`absolute inset-0 bg-gradient-to-b from-white/60 via-white/40 to-white/20 pointer-events-none transition-opacity duration-500 ease-out ${
          isScrolled ? "opacity-100" : "opacity-0"
        }`}
        style={{
          transitionTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        }}
      />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo with premium effects */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#home");
            }}
            className="flex items-center group relative"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl" />
              <img
                src="/images/logo.png"
                alt="Laila Nutra"
                className="relative h-10 lg:h-12 w-auto transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:scale-[1.08] group-hover:brightness-110"
                style={{ filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.1))' }}
              />
              {!isScrolled && (
                <div className="absolute inset-0 bg-white/10 backdrop-blur-md rounded-xl -z-10 opacity-0 group-hover:opacity-100 transition-all duration-700 scale-110 blur-sm" />
              )}
              </div>
          </a>

          {/* Desktop Navigation - Ultra Premium */}
          <nav className="hidden lg:flex items-center gap-0.5">
            {navItems.map((item) => {
              const sectionId = item.href.substring(1);
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  className={`relative px-6 py-3 text-[13px] font-[600] tracking-[-0.01em] transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] rounded-2xl group overflow-hidden ${
                    isScrolled
                      ? isActive
                        ? "text-primary"
                        : "text-foreground/65 hover:text-foreground"
                      : isActive
                      ? "text-accent drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]"
                      : "text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.5)] hover:text-white hover:drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]"
                  }`}
                >
                  {/* Premium background layers */}
                  <div className={`absolute inset-0 rounded-2xl transition-all duration-700 ${
                    isScrolled
                      ? isActive
                        ? "bg-primary/8 shadow-[inset_0_1px_0_rgba(0,163,181,0.1)]"
                        : "bg-transparent group-hover:bg-accent/6 group-hover:shadow-[inset_0_1px_0_rgba(168,217,72,0.08)]"
                      : isActive
                      ? "bg-white/12 shadow-[inset_0_1px_0_rgba(255,255,255,0.2)]"
                      : "bg-transparent group-hover:bg-white/12 group-hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.15)]"
                  }`} />
                  
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  
                  {/* Text with premium styling */}
                  <span className={`relative z-20 font-premium block ${
                    !isScrolled ? "text-white" : ""
                  }`}>{item.label}</span>
                  
                  {/* Active indicator - premium underline */}
                  <span
                    className={`absolute bottom-2 left-1/2 h-[2.5px] transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] transform -translate-x-1/2 rounded-full ${
                      isScrolled 
                        ? "bg-gradient-to-r from-primary via-primary to-primary shadow-[0_0_8px_rgba(0,163,181,0.4)]" 
                        : "bg-gradient-to-r from-accent via-accent to-accent shadow-[0_0_8px_rgba(168,217,72,0.4)]"
                    } ${
                      isActive ? "w-[60%] opacity-100 scale-100" : "w-0 opacity-0 scale-95 group-hover:w-[60%] group-hover:opacity-100 group-hover:scale-100"
                    }`}
                  />
                  
                  {/* Subtle glow effect */}
                  <div className={`absolute -inset-1 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-md ${
                    isScrolled ? "bg-primary/10" : "bg-white/10"
                  }`} />
                </a>
              );
            })}
          </nav>

          {/* CTA Button - Ultra Premium */}
          <div className="flex items-center gap-3">
            <Button
              className={`hidden md:flex items-center gap-3 rounded-full px-8 py-3.5 text-[13px] font-[600] tracking-[-0.01em] shadow-2xl transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] font-premium group relative overflow-hidden ${
                isScrolled
                  ? "bg-gradient-to-br from-primary via-primary to-[#008a9a] text-white shadow-[0_8px_24px_rgba(0,163,181,0.35),inset_0_1px_0_rgba(255,255,255,0.2)] hover:shadow-[0_12px_32px_rgba(0,163,181,0.45),inset_0_1px_0_rgba(255,255,255,0.3)] hover:scale-[1.05] hover:-translate-y-[2px]"
                  : "bg-white/20 backdrop-blur-xl text-white border border-white/40 shadow-[0_8px_32px_rgba(255,255,255,0.15),inset_0_1px_0_rgba(255,255,255,0.3)] hover:bg-white/30 hover:border-white/50 hover:shadow-[0_12px_40px_rgba(255,255,255,0.25),inset_0_1px_0_rgba(255,255,255,0.4)] hover:scale-[1.05] hover:-translate-y-[2px]"
              }`}
              onClick={() => handleNavClick("#contact")}
            >
              {/* Shine effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
              
              {/* Inner glow */}
              <div className={`absolute inset-[2px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 ${
                isScrolled ? "bg-primary/20" : "bg-white/10"
              }`} />
              
              <Phone className="relative z-10 w-4 h-4 transition-all duration-700 group-hover:scale-110 group-hover:rotate-12" />
              <span className="relative z-10">Contact</span>
            </Button>

            {/* Mobile Menu - Premium */}
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className={`lg:hidden rounded-2xl transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] group relative overflow-hidden ${
                    isScrolled
                      ? "hover:bg-accent/8 text-foreground/70 hover:text-foreground hover:scale-110 hover:shadow-lg"
                      : "hover:bg-white/15 text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.5)] hover:text-white hover:scale-110 hover:shadow-[0_8px_24px_rgba(255,255,255,0.15)] hover:drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]"
                  }`}
                  aria-label="Toggle menu"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-2xl" />
                  <Menu className="relative z-10 h-6 w-6 transition-transform duration-700 group-hover:rotate-90" />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-[85vw] sm:w-[400px] bg-background/98 backdrop-blur-2xl backdrop-saturate-150 border-l border-border/40 shadow-[0_0_40px_rgba(0,0,0,0.1)]"
              >
                <div className="flex flex-col h-full">
                  {/* Mobile Logo */}
                  <div className="flex items-center justify-between mb-10 pt-4">
                    <img
                      src="/images/logo.png"
                      alt="Laila Nutra"
                      className="h-10 w-auto"
                      style={{ filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.1))' }}
                    />
          </div>

                  {/* Mobile Navigation */}
                  <nav className="flex flex-col gap-2 flex-1">
                    {navItems.map((item) => {
                      const sectionId = item.href.substring(1);
                      const isActive = activeSection === sectionId;
                      return (
                        <a
                          key={item.href}
                          href={item.href}
                          onClick={(e) => {
                            e.preventDefault();
                            handleNavClick(item.href);
                          }}
                          className={`flex items-center justify-between px-5 py-4 rounded-2xl text-[15px] font-[600] tracking-[-0.01em] transition-all duration-500 ease-out group relative overflow-hidden ${
                            isActive
                              ? "bg-primary/12 text-primary shadow-[inset_0_1px_0_rgba(0,163,181,0.1)]"
                              : "text-foreground/70 hover:bg-accent/8 hover:text-foreground hover:shadow-[inset_0_1px_0_rgba(168,217,72,0.08)]"
                          }`}
                        >
                          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                          <span className="relative z-10 font-premium">{item.label}</span>
                          <ArrowRight
                            className={`relative z-10 w-4 h-4 transition-all duration-500 ${
                              isActive ? "translate-x-0 opacity-100" : "-translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
                            }`}
                          />
                        </a>
                      );
                    })}
          </nav>

                  {/* Mobile CTA */}
                  <div className="pt-6 pb-4 border-t border-border/40">
                    <Button
                      className="w-full bg-gradient-to-br from-primary via-primary to-[#008a9a] text-white hover:from-[#00b8cc] hover:via-primary hover:to-[#008a9a] rounded-2xl px-6 py-4 text-[15px] font-[600] tracking-[-0.01em] shadow-[0_8px_24px_rgba(0,163,181,0.35),inset_0_1px_0_rgba(255,255,255,0.2)] hover:shadow-[0_12px_32px_rgba(0,163,181,0.45),inset_0_1px_0_rgba(255,255,255,0.3)] flex items-center justify-center gap-2.5 transition-all duration-700 ease-out hover:scale-[1.02] font-premium group relative overflow-hidden"
                      onClick={() => handleNavClick("#contact")}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out rounded-2xl" />
                      <Phone className="relative z-10 w-5 h-5 transition-transform duration-700 group-hover:scale-110 group-hover:rotate-12" />
                      <span className="relative z-10">Contact Us</span>
            </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
