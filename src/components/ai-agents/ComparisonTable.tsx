import React from "react";
import Icon from "@/components/ui/icon";
import { comparisonData } from "@/data/aiAgentsData";

const ComparisonTable = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-montserrat font-bold mb-6 text-white">
            Ассистент Автоматизирует, Агент – Действует и Решает
          </h2>
        </div>

        <div className="max-w-6xl mx-auto bg-ai-darker/50 rounded-2xl border border-ai-purple/20 overflow-hidden">
          <div className="grid grid-cols-3 gap-0">
            {/* Headers */}
            <div className="p-6 bg-ai-purple/10 border-r border-ai-purple/20">
              <h3 className="text-xl font-bold text-ai-purple">Задача</h3>
            </div>
            <div className="p-6 bg-gray-800/50 border-r border-gray-600/20">
              <h3 className="text-xl font-bold text-gray-300">
                Базовый Ассистент
              </h3>
            </div>
            <div className="p-6 bg-ai-blue/10">
              <h3 className="text-xl font-bold text-ai-blue">
                Наш Кастомный AI Агент
              </h3>
            </div>

            {/* Rows */}
            {comparisonData.map((row, index) => (
              <React.Fragment key={index}>
                <div className="p-6 border-r border-ai-purple/20 border-t border-gray-600/20">
                  <div className="flex items-start gap-3">
                    <Icon
                      name={row.icon as any}
                      size={20}
                      className="text-ai-purple mt-1"
                    />
                    <span className="text-gray-300">{row.task}</span>
                  </div>
                </div>
                <div className="p-6 border-r border-gray-600/20 border-t border-gray-600/20">
                  <span className="text-gray-400">{row.basic}</span>
                </div>
                <div className="p-6 border-t border-gray-600/20">
                  <span className="text-ai-blue">{row.agent}</span>
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-xl text-ai-cyan font-semibold">
            Наши агенты – это{" "}
            <strong>стратегический уровень автоматизации</strong>, где ИИ
            действует на основе интеллекта, а не просто отвечает.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ComparisonTable;
