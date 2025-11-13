import { useState, useEffect, useRef } from "react";
import formulationImage from "@/assets/formulation.jpg";
import manufacturingImage from "@/assets/manufacturing.jpg";
import qualityImage from "@/assets/quality.jpg";
import { ArrowRight } from "lucide-react";

const capabilities = [
  {
    title: "Advanced Formulation R&D",
    image: formulationImage,
    description: "Innovative research and development for cutting-edge nutraceutical solutions",
  },
  {
    title: "Integrated Manufacturing",
    image: manufacturingImage,
    description: "State-of-the-art production facilities ensuring excellence at every step",
  },
  {
    title: "Quality Assurance",
    image: qualityImage,
    description: "Rigorous testing and validation for uncompromising quality standards",
  },
];

const CapabilityCards = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [mousePositions, setMousePositions] = useState<{ [key: number]: { x: number; y: number; glowX: number; glowY: number; pullX: number; pullY: number } }>({});
  const sectionRef = useRef<HTMLElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, index: number) => {
    const card = cardRefs.current[index];
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Subtle tilt effect
    const rotateX = (y - centerY) / 35;
    const rotateY = (centerX - x) / 35;

    // Magnetic pull effect (very subtle)
    const pullX = (x - centerX) / 25;
    const pullY = (y - centerY) / 25;

    // Glow position (for dynamic glow effect) - percentage from card center
    const glowX = 50 + ((x - centerX) / rect.width) * 50;
    const glowY = 50 + ((y - centerY) / rect.height) * 50;

    setMousePositions((prev) => ({
      ...prev,
      [index]: { 
        x: rotateY, 
        y: rotateX,
        glowX,
        glowY,
        pullX,
        pullY,
      },
    }));
  };

  return (
    <section ref={sectionRef} className="relative py-0 overflow-hidden">
      {/* Premium Gradient Background with Smooth Transition */}
      <div className="absolute inset-0 z-0">
        <div className="h-1/2 bg-gradient-to-b from-accent via-accent/95 to-accent/90"></div>
        <div className="h-1/2 bg-gradient-to-b from-background via-background to-background/98"></div>
        {/* Subtle texture overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.03)_0%,transparent_50%)]"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10 py-24 sm:py-28 md:py-32 lg:py-36">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7 sm:gap-9 lg:gap-11 max-w-7xl mx-auto">
          {capabilities.map((capability, index) => (
            <div
              key={index}
              ref={(el) => (cardRefs.current[index] = el)}
              className="group relative"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => {
                setHoveredIndex(null);
                setMousePositions((prev) => ({
                  ...prev,
                  [index]: { x: 0, y: 0, glowX: 0, glowY: 0, pullX: 0, pullY: 0 },
                }));
              }}
              onMouseMove={(e) => handleMouseMove(e, index)}
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible
                  ? "translateY(0) scale(1)"
                  : "translateY(40px) scale(0.95)",
                transition: `all 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${index * 150}ms`,
              }}
            >
              {/* Premium Card Container */}
              <div 
                className="relative h-full min-h-[420px] sm:min-h-[480px] md:min-h-[520px] lg:min-h-[560px] bg-white/95 backdrop-blur-xl rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.08),0_2px_8px_rgba(0,0,0,0.04)] border border-white/50"
                style={{
                  transform: hoveredIndex === index && mousePositions[index]
                    ? `perspective(1000px) rotateX(${mousePositions[index].y}deg) rotateY(${mousePositions[index].x}deg) translate(${mousePositions[index].pullX || 0}px, ${(mousePositions[index].pullY || 0) - 16}px) scale(1.015)`
                    : hoveredIndex === index
                    ? "perspective(1000px) translateY(-16px) scale(1.015)"
                    : "perspective(1000px)",
                  transition: hoveredIndex === index && mousePositions[index] && (mousePositions[index].x !== 0 || mousePositions[index].y !== 0) 
                    ? "transform 0.12s cubic-bezier(0.23, 1, 0.32, 1), box-shadow 0.7s cubic-bezier(0.16, 1, 0.3, 1)" 
                    : "transform 0.7s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.7s cubic-bezier(0.16, 1, 0.3, 1)",
                  boxShadow: hoveredIndex === index
                    ? "0 36px 88px rgba(0, 0, 0, 0.14), 0 14px 28px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(255, 255, 255, 0.6) inset"
                    : "0 8px 32px rgba(0, 0, 0, 0.08), 0 2px 8px rgba(0, 0, 0, 0.04)",
                }}
              >
                {/* Dynamic Radial Glow that follows mouse */}
                {hoveredIndex === index && mousePositions[index] && (
                  <div 
                    className="absolute pointer-events-none z-0 transition-opacity duration-500"
                    style={{
                      width: '200%',
                      height: '200%',
                      left: `${mousePositions[index].glowX || 50}%`,
                      top: `${mousePositions[index].glowY || 50}%`,
                      transform: 'translate(-50%, -50%)',
                      background: `radial-gradient(circle, rgba(168, 217, 72, 0.15) 0%, rgba(0, 163, 181, 0.1) 30%, transparent 70%)`,
                      opacity: 1,
                      transition: 'left 0.2s cubic-bezier(0.23, 1, 0.32, 1), top 0.2s cubic-bezier(0.23, 1, 0.32, 1)',
                    }}
                  />
                )}

                {/* Refined Premium Inner Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/55 via-white/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-[700ms] ease-[cubic-bezier(0.16,1,0.3,1)] pointer-events-none z-10"></div>
                
                {/* Enhanced Border Glow Effect */}
                <div 
                  className="absolute -inset-[2px] rounded-[2.5rem] opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-[700ms] ease-[cubic-bezier(0.16,1,0.3,1)] -z-10"
                  style={{
                    background: hoveredIndex === index && mousePositions[index]
                      ? `radial-gradient(circle at ${mousePositions[index].glowX || 50}% ${mousePositions[index].glowY || 50}%, rgba(168, 217, 72, 0.28) 0%, rgba(0, 163, 181, 0.22) 50%, transparent 70%)`
                      : 'linear-gradient(135deg, rgba(168, 217, 72, 0.22), rgba(0, 163, 181, 0.22))',
                    transition: hoveredIndex === index ? 'background 0.18s cubic-bezier(0.23, 1, 0.32, 1)' : 'none',
                  }}
                ></div>

                {/* Image Container - Full Height */}
                <div className="relative h-full w-full overflow-hidden bg-gradient-to-br from-muted/50 to-muted/30">
                  {/* Image with Refined Parallax Effect */}
                  <div
                    className="absolute inset-0 transition-transform duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
                    style={{
                      transform:
                        hoveredIndex === index
                          ? "scale(1.1) translateY(-1%)"
                          : "scale(1) translateY(0)",
                    }}
                  >
                    <img
                      src={capability.image}
                      alt={capability.title}
                      className="w-full h-full object-cover"
                      style={{
                        filter: hoveredIndex === index ? "brightness(1.06) saturate(1.1) contrast(1.03)" : "brightness(1) saturate(1) contrast(1)",
                        transition: "filter 0.7s cubic-bezier(0.16, 1, 0.3, 1)",
                      }}
                    />
                  </div>

                  {/* Refined Gradient Overlay on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/40 to-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-[700ms] ease-[cubic-bezier(0.16,1,0.3,1)] z-20"></div>
                  
                  {/* Premium Shine Sweep Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/12 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-[1400ms] ease-[cubic-bezier(0.23,1,0.32,1)] pointer-events-none opacity-0 group-hover:opacity-100 z-30"></div>

                  {/* Refined Premium Badge/Icon */}
                  <div className="absolute top-5 right-5 sm:top-6 sm:right-6 w-11 h-11 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-white/95 backdrop-blur-xl flex items-center justify-center shadow-2xl opacity-0 group-hover:opacity-100 transform translate-y-4 scale-85 group-hover:translate-y-0 group-hover:scale-100 transition-all duration-600 delay-150 ease-[cubic-bezier(0.16,1,0.3,1)] border border-white/70 z-30">
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-primary transform -rotate-45 group-hover:rotate-0 transition-transform duration-600 ease-out" />
                  </div>

                  {/* Premium Text Box Sliding Up from Bottom */}
                  <div className="absolute bottom-0 left-0 right-0 z-30 transform translate-y-full group-hover:translate-y-0 transition-transform duration-[750ms] ease-[cubic-bezier(0.16,1,0.3,1)]">
                    <div className="relative bg-gradient-to-t from-black/70 via-black/60 to-black/50 backdrop-blur-xl border-t border-white/10">
                      {/* Subtle top border glow */}
                      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                      
                      <div className="p-6 sm:p-7 md:p-8 lg:p-10">
                        {/* Title with refined typography */}
                        <h3 className="text-xl sm:text-2xl md:text-2xl lg:text-3xl font-bold text-white mb-3 sm:mb-4 leading-[1.15] tracking-[-0.01em]">
                          {capability.title}
                        </h3>
                        
                        {/* Description with better spacing */}
                        <p className="text-sm sm:text-[15px] md:text-base text-white/85 leading-[1.6] mb-5 sm:mb-6 max-w-[95%]">
                          {capability.description}
                        </p>

                        {/* Premium CTA Link with refined animation */}
                        <div className="flex items-center gap-2.5 text-white font-medium text-sm sm:text-[15px] cursor-pointer hover:gap-3.5 transition-all duration-300">
                          <span className="tracking-[0.02em]">Learn more</span>
                          <ArrowRight className="w-4 h-4 sm:w-[18px] sm:h-[18px] transform group-hover:translate-x-1.5 transition-transform duration-500 ease-out" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

              {/* Floating Particles Effect (Subtle) */}
              <div className="absolute -z-10 inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-accent/30 rounded-full blur-sm animate-pulse"></div>
                <div className="absolute top-3/4 right-1/4 w-1.5 h-1.5 bg-primary/30 rounded-full blur-sm animate-pulse delay-300"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CapabilityCards;
