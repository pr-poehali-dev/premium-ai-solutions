import React from "react";
import Icon from "@/components/ui/icon";
import { architectureData } from "@/data/aiAgentsData";

const ArchitectureSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(139, 92, 246, 0.3) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        ></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-montserrat font-bold mb-6 text-white">
            Не Магия, а Кастомная Архитектура Премиум-Класса
          </h2>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Central Brain */}
          <div className="relative">
            <div className="flex justify-center mb-16">
              <div className="relative">
                <div className="w-64 h-64 rounded-full bg-ai-gradient p-8 shadow-2xl">
                  <div className="w-full h-full rounded-full border-2 border-white/30 flex items-center justify-center">
                    <div className="text-center">
                      <Icon
                        name={architectureData.center.icon as any}
                        size={48}
                        className="text-white mx-auto mb-3"
                      />
                      <div className="text-sm font-semibold text-white">
                        {architectureData.center.title}
                      </div>
                      <div className="text-xs text-white/70">
                        {architectureData.center.subtitle}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute -inset-4 rounded-full border-2 border-ai-purple/30 animate-pulse"></div>
                <div className="absolute -inset-8 rounded-full border border-ai-blue/20 animate-pulse delay-1000"></div>
              </div>
            </div>

            {/* Connected Elements */}
            <div className="grid lg:grid-cols-4 gap-8 mb-16">
              {architectureData.elements.map((element, index) => (
                <div key={index} className="text-center">
                  <div
                    className={`w-16 h-16 rounded-full bg-${element.color}/20 border border-${element.color}/40 flex items-center justify-center mx-auto mb-4`}
                  >
                    <Icon
                      name={element.icon as any}
                      size={24}
                      className={`text-${element.color}`}
                    />
                  </div>
                  <h4
                    className={`text-lg font-semibold text-${element.color} mb-2`}
                  >
                    {element.title}
                  </h4>
                  <p className="text-sm text-gray-400">{element.description}</p>
                </div>
              ))}
            </div>

            {/* Key Advantages */}
            <div className="grid lg:grid-cols-2 gap-8">
              {architectureData.advantages.map((advantage, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div
                    className={`w-8 h-8 rounded-full bg-${advantage.color}/20 flex items-center justify-center flex-shrink-0 mt-1`}
                  >
                    <Icon
                      name={advantage.icon as any}
                      size={16}
                      className={`text-${advantage.color}`}
                    />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">
                      {advantage.title}
                    </h4>
                    <p className="text-gray-400">{advantage.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArchitectureSection;
