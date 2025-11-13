import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CapabilityCards from "@/components/CapabilityCards";
import CompanyDescription from "@/components/CompanyDescription";
import Services from "@/components/Services";
import ScrollToTop from "@/components/ScrollToTop";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <CapabilityCards />
        <CompanyDescription />
        <Services />
      </main>
      <ScrollToTop />
    </div>
  );
};

export default Index;
