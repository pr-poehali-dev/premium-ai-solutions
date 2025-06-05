import React from "react";
import Icon from "@/components/ui/icon";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-ai-dark-gradient">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-ai-purple opacity-20 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute bottom-20 right-20 w-96 h-96 bg-ai-blue opacity-15 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-ai-pink opacity-10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(139, 92, 246, 0.3) 1px, transparent 0)`,
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        {/* Main Headline */}
        <div className="animate-slide-up">
          <h1 className="md:text-7xl lg:text-8xl font-montserrat font-bold mb-8 leading-tight text-2xl">
            Превратите Ваши Уникальные Задачи
            <br />
            <span className="text-ai-gradient">
              в Мощь Искусственного Интеллекта
            </span>
          </h1>
        </div>

        {/* Subtitle */}
        <div className="animate-slide-up" style={{ animationDelay: "0.2s" }}>
          <p className="md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed text-base">
            Забудьте о шаблонах. Мы проектируем и внедряем{" "}
            <span className="text-ai-purple font-semibold">
              эксклюзивные AI-системы
            </span>{" "}
            — от интеллектуальных помощников до{" "}
            <span className="text-ai-blue font-semibold">
              виртуальных сотрудников
            </span>{" "}
            — которые идеально встраиваются в ваши процессы и приносят измеримую
            прибыль.
          </p>
        </div>

        {/* Value Proposition */}
        <div className="animate-slide-up" style={{ animationDelay: "0.4s" }}>
          <p className="text-lg text-ai-cyan mb-16 font-medium">
            Дорого? Это инвестиция с гарантированной окупаемостью.
          </p>
        </div>

        {/* CTA Buttons */}
        <div
          className="animate-slide-up flex flex-col sm:flex-row gap-6 justify-center items-center"
          style={{ animationDelay: "0.6s" }}
        >
          <button className="ai-button px-8 py-4 rounded-lg text-white font-semibold text-lg flex items-center gap-3 hover-scale">
            <Icon name="Zap" size={24} />
            Рассчитать Ваш AI-Потенциал
          </button>
          <button className="border border-ai-purple text-ai-purple px-8 py-4 rounded-lg font-semibold text-lg hover:bg-ai-purple hover:text-white transition-all duration-300 flex items-center gap-3">
            <Icon name="Play" size={20} />
            Смотреть Демо
          </button>
        </div>

        {/* Floating AI Elements */}
        <div className="absolute top-1/4 left-10 animate-float">
          <div className="ai-card p-4 rounded-lg bg-transparent">
            <Icon name="Brain" size={32} className="text-ai-purple" />
          </div>
        </div>

        <div
          className="absolute top-1/3 right-10 animate-float"
          style={{ animationDelay: "2s" }}
        >
          <div className="ai-card p-4 rounded-lg">
            <Icon name="Cpu" size={32} className="text-ai-blue" />
          </div>
        </div>

        <div
          className="absolute bottom-1/4 left-1/4 animate-float"
          style={{ animationDelay: "4s" }}
        >
          <div className="ai-card p-4 rounded-lg">
            <Icon name="Network" size={32} className="text-ai-pink" />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Icon name="ChevronDown" size={32} className="text-gray-400" />
      </div>
    </section>
  );
};

export default HeroSection;
