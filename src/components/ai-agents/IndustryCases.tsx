import React from "react";
import Icon from "@/components/ui/icon";
import { industryCases } from "@/data/aiAgentsData";

const IndustryCases = () => {
  const getColorClass = (color: string) => {
    switch (color) {
      case "ai-purple":
        return "text-ai-purple";
      case "ai-blue":
        return "text-ai-blue";
      case "ai-cyan":
        return "text-ai-cyan";
      case "yellow-400":
        return "text-yellow-400";
      default:
        return "text-white";
    }
  };

  const getBgColorClass = (color: string) => {
    switch (color) {
      case "ai-purple":
        return "bg-ai-purple/20 border-ai-purple/20 hover:border-ai-purple/40 bg-ai-purple/10";
      case "ai-blue":
        return "bg-ai-blue/20 border-ai-blue/20 hover:border-ai-blue/40 bg-ai-blue/10";
      case "ai-cyan":
        return "bg-ai-cyan/20 border-ai-cyan/20 hover:border-ai-cyan/40 bg-ai-cyan/10";
      case "yellow-400":
        return "bg-yellow-500/20 border-yellow-500/20 hover:border-yellow-500/40 bg-yellow-500/10";
      default:
        return "bg-white/20 border-white/20 hover:border-white/40 bg-white/10";
    }
  };

  return (
    <section className="py-24 bg-ai-darker/50 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-montserrat font-bold mb-6 text-white">
            Где Ваш Агент Принесет Миллионы?
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Не теория. Измеримая эффективность в реальных задачах.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {industryCases.map((caseItem, index) => {
            const bgClasses = getBgColorClass(caseItem.color);
            const colorClass = getColorClass(caseItem.color);

            return (
              <div
                key={index}
                className={`bg-ai-dark/80 rounded-2xl p-8 border transition-all duration-300 ${bgClasses.split(" ")[1]} ${bgClasses.split(" ")[2]}`}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center ${bgClasses.split(" ")[0]}`}
                  >
                    <Icon
                      name={caseItem.icon as any}
                      size={24}
                      className={colorClass}
                    />
                  </div>
                  <h3 className={`text-2xl font-bold ${colorClass}`}>
                    {caseItem.title}
                  </h3>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">
                      Задача:
                    </h4>
                    <p className="text-gray-400">{caseItem.task}</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">
                      Агент:
                    </h4>
                    <p className="text-gray-400">{caseItem.solution}</p>
                  </div>
                  <div className={`rounded-lg p-4 ${bgClasses.split(" ")[3]}`}>
                    <h4 className={`text-lg font-semibold mb-2 ${colorClass}`}>
                      Результат:
                    </h4>
                    <p className="text-white">
                      {caseItem.results.map((result, idx) => (
                        <span key={idx}>
                          <strong className="text-ai-cyan">{result}</strong>
                          {idx < caseItem.results.length - 1 && ", "}
                        </span>
                      ))}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <p className="text-xl text-ai-purple font-semibold">
            Ваша задача уникальна?{" "}
            <strong className="text-white">
              Спроектируем агента, который ее решит.
            </strong>{" "}
            Рассчитаем ваш потенциальный ROI.
          </p>
        </div>
      </div>
    </section>
  );
};

export default IndustryCases;
