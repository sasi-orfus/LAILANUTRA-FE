import { ArrowRight, Check, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import labFacility from "@/assets/lab-facility.jpg";

const CompanyDescription = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 max-w-7xl mx-auto">
          {/* Left Column - 60% */}
          <div className="lg:col-span-3 space-y-8">
            <div className="space-y-4">
              <h2 className="font-handwritten text-accent text-2xl md:text-3xl">
                Laila Nutra - A Leading CDMO in Nutraceutical Innovation
              </h2>
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                A premium Contract Development and Manufacturing Organization (CDMO).
              </h3>
            </div>

            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
              <p>
                Our R&D division specializes in cutting-edge formulation science, leveraging clinically proven and patented ingredients to develop highly efficacious nutraceutical products. Our science-backed innovation platform fuels product differentiation and therapeutic efficacy.
              </p>
              <p>
                With state-of-the-art manufacturing infrastructure, we ensure end-to-end production capabilities under stringent quality standards. From raw material sourcing to final product packaging, our operations are built for scalability, consistency, and compliance.
              </p>
            </div>

            <Button className="btn-hero group mt-6">
              More About Us
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>

            <div className="mt-12 rounded-2xl overflow-hidden shadow-xl">
              <img
                src={labFacility}
                alt="Laboratory Facility"
                className="w-full h-80 object-cover"
              />
            </div>
          </div>

          {/* Right Column - 40% */}
          <div className="lg:col-span-2 space-y-6">
            {/* Trust Box */}
            <div className="bg-accent rounded-3xl p-8 text-center relative overflow-hidden">
              <div className="relative z-10">
                <p className="text-lg font-semibold text-accent-foreground mb-2">
                  Trusted By Clients
                </p>
                <div className="flex items-center justify-center gap-2">
                  <p className="text-6xl font-bold text-dark-brown">1,000+</p>
                  <div className="w-12 h-12 rounded-full bg-dark-brown flex items-center justify-center">
                    <ArrowUpRight className="w-6 h-6 text-accent" />
                  </div>
                </div>
              </div>
            </div>

            {/* Features Box */}
            <div className="bg-secondary rounded-3xl p-8 text-secondary-foreground space-y-6">
              <div className="flex items-start gap-3">
                <Check className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <p className="text-lg font-medium">Global Regulatory Expertise</p>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <p className="text-lg font-medium">Integrated Manufacturing Excellence</p>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <p className="text-lg font-medium">Advanced Formulation R&D</p>
              </div>

              <div className="grid grid-cols-1 gap-4 pt-6">
                <div className="flex items-center justify-center gap-3 bg-dark-brown rounded-full py-4 px-6">
                  <div className="w-3 h-3 rounded-full bg-accent"></div>
                  <p className="text-sm font-semibold text-white uppercase tracking-wide">
                    Export-Ready Infrastructure
                  </p>
                </div>
                <div className="flex items-center justify-center gap-3 bg-dark-brown rounded-full py-4 px-6">
                  <div className="w-3 h-3 rounded-full bg-accent"></div>
                  <p className="text-sm font-semibold text-white uppercase tracking-wide text-center">
                    White-Label & Innovation Platform
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyDescription;
