import React from "react";
import HeroSection from "@/components/ai-agents/HeroSection";
import ComparisonTable from "@/components/ai-agents/ComparisonTable";
import ArchitectureSection from "@/components/ai-agents/ArchitectureSection";
import IndustryCases from "@/components/ai-agents/IndustryCases";
import FinalCTA from "@/components/ai-agents/FinalCTA";

const AIAgents = () => {
  return (
    <div className="min-h-screen bg-ai-dark text-white">
      <HeroSection />
      <ComparisonTable />
      <ArchitectureSection />
      <IndustryCases />
      <FinalCTA />
    </div>
  );
};

export default AIAgents;
