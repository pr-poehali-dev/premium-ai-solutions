import React from "react";
import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";
import { finalCTAData } from "@/data/aiAgentsData";

const FinalCTA = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-ai-purple/30 via-ai-dark to-ai-blue/30"></div>
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-ai-purple/20 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 rounded-full bg-ai-blue/20 blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-montserrat font-bold mb-8 text-white">
            {finalCTAData.title}
          </h2>

          <h3 className="text-2xl lg:text-3xl font-semibold mb-12 text-ai-cyan">
            {finalCTAData.subtitle}
          </h3>

          <div className="space-y-8 mb-16 text-left max-w-3xl mx-auto">
            {finalCTAData.quotes.map((quote, index) => (
              <p key={index} className="text-xl text-gray-300 leading-relaxed">
                "{quote}"
              </p>
            ))}
          </div>

          <div className="text-center">
            <h3 className="text-3xl font-bold text-white mb-6">
              {finalCTAData.cta.title}
            </h3>
            <p className="text-xl text-gray-300 mb-8">
              {finalCTAData.cta.description}
            </p>
            <Button className="px-12 py-6 text-xl font-bold bg-ai-gradient hover:scale-105 transition-all duration-300 shadow-2xl">
              <Icon name="Zap" size={28} className="mr-3" />
              {finalCTAData.cta.buttonText}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
