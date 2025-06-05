import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PredictiveHero from "@/components/PredictiveHero";
import ComparisonSection from "@/components/ComparisonSection";
import ROIExamples from "@/components/ROIExamples";
import ProcessSection from "@/components/ProcessSection";
import CustomizationSection from "@/components/CustomizationSection";
import PredictiveCTA from "@/components/PredictiveCTA";

const PredictiveAnalytics = () => {
  return (
    <div className="min-h-screen bg-ai-dark text-white">
      <Header />
      <PredictiveHero />
      <ComparisonSection />
      <ROIExamples />
      <ProcessSection />
      <CustomizationSection />
      <PredictiveCTA />
      <Footer />
    </div>
  );
};

export default PredictiveAnalytics;
