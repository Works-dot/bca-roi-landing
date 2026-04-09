import Navigation from "@/components/sections/Navigation";
import Hero from "@/components/sections/Hero";
import ServiceExplanation from "@/components/sections/ServiceExplanation";
import ValuePillars from "@/components/sections/ValuePillars";
import Calculator from "@/components/sections/Calculator";
import ExampleROI from "@/components/sections/ExampleROI";
import ProcessComplexity from "@/components/sections/ProcessComplexity";
import Pricing from "@/components/sections/Pricing";
import FinalCTA from "@/components/sections/FinalCTA";
import Footer from "@/components/sections/Footer";
import SeoHead from "@/components/SeoHead";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen font-sans bg-[#130707] text-white">
      <SeoHead />
      <Navigation />
      <main className="flex-1">
        <Hero />
        <ServiceExplanation />
        <ValuePillars />
        <ProcessComplexity />
        <Calculator />
        <ExampleROI />
        {/* <Pricing /> */}
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
