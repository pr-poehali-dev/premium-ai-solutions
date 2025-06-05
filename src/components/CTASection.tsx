import React from "react";
import Icon from "@/components/ui/icon";

const CTASection = () => {
  return (
    <section className="py-24 bg-ai-gradient relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-20"></div>
        <div className="absolute top-20 left-20 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute bottom-20 right-20 w-80 h-80 bg-white opacity-5 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "3s" }}
        ></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="animate-slide-up">
          <h2 className="text-4xl md:text-6xl font-montserrat font-bold mb-6 text-white">
            Готовы Перевести Ваш Бизнес
            <br />
            на Уровень AI?
          </h2>
        </div>

        <div className="animate-slide-up" style={{ animationDelay: "0.2s" }}>
          <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto mb-12 leading-relaxed">
            Обсудите, как индивидуальный AI решит{" "}
            <span className="font-semibold">ваши</span> уникальные задачи и
            принесет <span className="font-semibold">вашей</span> компании
            миллионы
          </p>
        </div>

        <div
          className="animate-slide-up flex flex-col sm:flex-row gap-6 justify-center items-center mb-12"
          style={{ animationDelay: "0.4s" }}
        >
          <button className="bg-white text-ai-purple px-8 py-4 rounded-lg font-semibold text-lg flex items-center gap-3 hover:bg-gray-100 hover:scale-105 transition-all duration-300 shadow-lg">
            <Icon name="Rocket" size={24} />
            Стартовать Ваш AI-Проект
          </button>
          <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-ai-purple transition-all duration-300 flex items-center gap-3">
            <Icon name="Calendar" size={20} />
            Запросить Демо и Расчет ROI
          </button>
        </div>

        <div className="animate-slide-up" style={{ animationDelay: "0.6s" }}>
          <p className="text-white/70 text-sm">
            ⚡ Бесплатная консультация • 🔒 Полная конфиденциальность • 📈
            Гарантированный результат
          </p>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-10 animate-float">
        <div className="p-4 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20">
          <Icon name="Sparkles" size={32} className="text-white" />
        </div>
      </div>

      <div
        className="absolute bottom-1/4 right-10 animate-float"
        style={{ animationDelay: "2s" }}
      >
        <div className="p-4 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20">
          <Icon name="Target" size={32} className="text-white" />
        </div>
      </div>
    </section>
  );
};

export default CTASection;
