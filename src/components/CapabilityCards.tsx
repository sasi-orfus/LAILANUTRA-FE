import formulationImage from "@/assets/formulation.jpg";
import manufacturingImage from "@/assets/manufacturing.jpg";
import qualityImage from "@/assets/quality.jpg";

const capabilities = [
  {
    title: "Advanced Formulation R&D",
    image: formulationImage,
  },
  {
    title: "Integrated Manufacturing",
    image: manufacturingImage,
  },
  {
    title: "Quality Assurance",
    image: qualityImage,
  },
];

const CapabilityCards = () => {
  return (
    <section className="relative py-0">
      {/* Two-tone Background */}
      <div className="absolute inset-0 z-0">
        <div className="h-1/2 bg-accent"></div>
        <div className="h-1/2 bg-background"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {capabilities.map((capability, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={capability.image}
                  alt={capability.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-foreground">{capability.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CapabilityCards;
