import React from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import IndustrySection from "@/components/IndustrySection";
import ROISection from "@/components/ROISection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-ai-dark text-white">
      <Header />
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <IndustrySection />
      <ROISection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
