import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-start justify-center overflow-hidden pt-24 sm:pt-32 md:pt-40">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40"></div>
      </div>

      {/* Netflix/Hotstar style gradient overlay for text area */}
      <div className="absolute inset-0 z-[5] bg-gradient-to-r from-black/50 via-black/20 to-transparent pointer-events-none"></div>

      {/* Content */}
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10 text-left">
        <div className="max-w-4xl">
          {/* Premium Subtitle */}
          <div 
            className={`mb-6 transition-all duration-1000 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionDelay: '100ms' }}
          >
            <h1 className="font-premium-script text-accent text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-[0.04em]">
              Laila Nutraceuticals
            </h1>
          </div>

          {/* Main Headline - Part 1 - Smaller and Lighter */}
          <div 
            className={`mb-2 transition-all duration-1000 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            <h2 className="font-hero-subtitle text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extralight text-white/85 leading-[1.12] uppercase">
              YOUR TRUSTED PARTNER IN
            </h2>
          </div>

          {/* Main Headline - Part 2 - Bigger, Bolder, Different Font */}
          <div 
            className={`relative inline-block mb-10 transition-all duration-1000 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
            style={{ transitionDelay: '400ms' }}
          >
            <h2 
              className="font-hero-main text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-medium leading-[1.06] relative z-10 uppercase"
              style={{
                background: 'linear-gradient(180deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0.95) 25%, rgba(245, 245, 247, 0.9) 50%, rgba(235, 235, 240, 0.85) 75%, rgba(220, 220, 225, 0.8) 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                textShadow: '0 1px 2px rgba(0, 0, 0, 0.1), 0 0 40px rgba(255, 255, 255, 0.15)',
              }}
            >
              NUTRACEUTICAL EXCELLENCE
            </h2>
            {/* Subtle text glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-accent/10 via-transparent to-transparent blur-2xl -z-10"></div>
          </div>

          {/* Premium Double-Lined HR Divider */}
          <div 
            className={`mt-6 mb-8 transition-all duration-1000 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionDelay: '500ms' }}
          >
            <div className="relative flex items-center justify-start w-full max-w-xl">
              {/* Double lines with premium design */}
              <div className="relative w-full">
                {/* Top line - fade at right end */}
                <div className="h-[0.5px] bg-gradient-to-r from-white/60 via-white/50 to-transparent mb-1"></div>
                {/* Bottom line - fade at right end */}
                <div className="h-[0.5px] bg-gradient-to-r from-white/60 via-white/50 to-transparent"></div>
                {/* Subtle glow effect */}
                <div className="absolute inset-0 bg-white/5 blur-sm"></div>
              </div>
            </div>
          </div>

          {/* Premium CTA Button */}
          <div 
            className={`transition-all duration-1000 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionDelay: '600ms' }}
          >
            <Button className="group relative overflow-hidden rounded-full px-10 py-4.5 text-[15px] font-medium tracking-[0.01em] bg-white/10 backdrop-blur-2xl text-white border border-white/20 hover:bg-white/20 hover:border-white/30 transition-all duration-500 ease-out hover:scale-[1.02] hover:shadow-[0_8px_32px_rgba(255,255,255,0.15)]">
              {/* Shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
              
              {/* Inner glow */}
              <div className="absolute inset-[1px] rounded-full bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <span className="relative z-10 flex items-center gap-2.5 font-hero">
                CMO & CDMO
                <ArrowRight className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-1" />
              </span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
