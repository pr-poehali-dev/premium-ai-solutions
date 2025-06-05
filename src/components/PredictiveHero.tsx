import React from "react";
import Icon from "@/components/ui/icon";

const PredictiveHero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-ai-dark-gradient">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-br from-ai-purple/20 to-transparent rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-tl from-ai-blue/15 via-ai-blue/10 to-transparent rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-green-500/10 to-transparent rounded-full blur-3xl animate-float"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      {/* Data Stream Animation */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-ai-purple to-transparent animate-pulse"></div>
        <div
          className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-green-400 to-transparent animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-ai-blue to-transparent animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(34, 197, 94, 0.3) 1px, transparent 0)`,
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        {/* Main Headline */}
        <div className="animate-slide-up">
          <h1 className="md:text-7xl lg:text-8xl font-montserrat font-bold mb-8 leading-tight text-2xl">
            Перестаньте Гадать.
            <br />
            <span className="text-gradient bg-gradient-to-r from-green-400 via-ai-purple to-ai-blue bg-clip-text text-transparent">
              Начните Знать Будущее
            </span>
            <br />
            Вашего Бизнеса
          </h1>
        </div>

        {/* Subtitle */}
        <div className="animate-slide-up" style={{ animationDelay: "0.2s" }}>
          <p className="md:text-2xl text-gray-300 mb-8 max-w-5xl mx-auto leading-relaxed text-base">
            <span className="text-green-400 font-semibold">
              Кастомные Предиктивные Модели Премиум-Класса
            </span>{" "}
            превращают ваши данные в точные прогнозы: от срывов поставок до
            взрывов спроса.
            <br />
            <span className="text-ai-purple font-semibold">
              Предвидим риски, находим скрытые миллионы, даём время действовать.
            </span>
          </p>
          <p className="md:text-xl text-gray-400 mb-12 max-w-3xl mx-auto">
            Дорого? Спросите у конкурентов, сколько они теряют, летя вслепую.
          </p>
        </div>

        {/* CTA */}
        <div className="animate-slide-up" style={{ animationDelay: "0.4s" }}>
          <button className="group bg-gradient-to-r from-green-500 to-ai-purple hover:from-green-400 hover:to-ai-purple/90 text-white px-12 py-4 rounded-full text-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/25">
            <span className="flex items-center gap-3">
              <Icon name="Crystal" size={24} />
              Увидеть Своё Будущее
              <Icon
                name="ArrowRight"
                size={20}
                className="group-hover:translate-x-1 transition-transform"
              />
            </span>
          </button>
        </div>

        {/* Floating Data Elements */}
        <div className="absolute top-20 right-10 animate-float opacity-60">
          <div className="bg-green-500/20 border border-green-500/30 rounded-lg p-4 backdrop-blur-sm">
            <p className="text-green-400 font-mono text-sm">Точность: 94.7%</p>
          </div>
        </div>
        <div
          className="absolute bottom-32 left-10 animate-float opacity-60"
          style={{ animationDelay: "2s" }}
        >
          <div className="bg-ai-purple/20 border border-ai-purple/30 rounded-lg p-4 backdrop-blur-sm">
            <p className="text-ai-purple font-mono text-sm">ROI: +340%</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PredictiveHero;
