import React from "react";
import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";
import { heroData } from "@/data/aiAgentsData";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-ai-purple/20 via-ai-dark to-ai-blue/20"></div>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-ai-purple/30 blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/3 right-1/4 w-48 h-48 rounded-full bg-ai-blue/30 blur-3xl animate-pulse delay-700"></div>
          <div className="absolute top-1/2 right-1/3 w-32 h-32 rounded-full bg-ai-cyan/30 blur-2xl animate-pulse delay-1000"></div>
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-5xl lg:text-7xl font-montserrat font-bold mb-8 bg-gradient-to-r from-white via-ai-purple to-ai-blue bg-clip-text text-transparent leading-tight">
            {heroData.title}{" "}
            <span className="text-ai-cyan">{heroData.highlight}</span>{" "}
            {heroData.subtitle}
          </h1>

          <p className="text-xl lg:text-2xl text-gray-300 mb-12 leading-relaxed max-w-4xl mx-auto">
            {heroData.description[0]}{" "}
            <strong className="text-ai-purple">
              {heroData.description[1]}
            </strong>
            , созданные{" "}
            <strong className="text-ai-blue">{heroData.description[2]}</strong>,
            интегрируются в ваши системы и
            <strong className="text-ai-cyan"> {heroData.description[3]}</strong>
            , принося максимальную финансовую отдачу.
          </p>

          <p className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto">
            {heroData.note}
          </p>

          <Button className="px-12 py-6 text-lg font-semibold bg-ai-gradient hover:scale-105 transition-all duration-300 shadow-2xl">
            <Icon name="Rocket" size={24} className="mr-3" />
            {heroData.ctaText}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
