import { TestTubes } from "lucide-react";

const services = [
  {
    title: "Advanced Product Formulation & Development",
    description: "Science-backed, nutraceutical formulations innovative",
  },
  {
    title: "Contract Manufacturing (CDMO Services)",
    description: "cGMP-aligned (21 CFR 111/117), FSSAI-licensed",
  },
  {
    title: "Global Regulatory & Compliance Support",
    description: "Regulatory dossier preparation for global markets",
  },
  {
    title: "Clinical Study Design & Technical Support",
    description: "Assistance in designing preclinical and clinical trials",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gradient-to-b from-background to-light-bg">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="font-handwritten text-accent text-2xl md:text-3xl mb-4">
            What Is Our Expertise?
          </h2>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            We Providing The Best Services
          </h3>
          <p className="text-lg text-muted-foreground leading-relaxed">
            As a premium Contract Development and Manufacturing Organization (CDMO), Laila Nutra offers end-to-end, customizable services to meet the dynamic needs of nutraceutical brands globally — from ideation to global distribution.
          </p>
          
          {/* Carousel Dots */}
          <div className="flex items-center justify-center gap-2 mt-8">
            <div className="w-3 h-3 rounded-full bg-primary"></div>
            <div className="w-2 h-2 rounded-full bg-muted"></div>
            <div className="w-2 h-2 rounded-full bg-muted"></div>
          </div>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-secondary rounded-3xl p-8 text-center space-y-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
            >
              {/* Icon Circle */}
              <div className="mx-auto w-32 h-32 rounded-full bg-accent flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <div className="w-20 h-20 rounded-full bg-dark-brown flex items-center justify-center">
                  <TestTubes className="w-10 h-10 text-accent" />
                </div>
              </div>

              {/* Title with Underline */}
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-secondary-foreground leading-tight min-h-[4rem] flex items-center justify-center">
                  {service.title}
                </h4>
                <div className="w-16 h-1 bg-accent mx-auto"></div>
              </div>

              {/* Description */}
              <p className="text-secondary-foreground/90 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
