import React from "react";
import Icon from "@/components/ui/icon";

const PredictiveCTA = () => {
  return (
    <section className="py-24 bg-ai-dark-gradient relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-green-500/20 to-transparent rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute bottom-20 right-20 w-72 h-72 bg-gradient-to-tl from-ai-purple/20 to-transparent rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      {/* Data Visualization */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 border border-green-500/30 rounded-full"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 border border-ai-purple/30 rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-ai-blue/30 rounded-full"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Headline */}
          <div className="mb-8">
            <h2 className="text-6xl font-montserrat font-bold mb-6 leading-tight">
              Готовы Перевести Ваш Бизнес
              <br />
              <span className="text-gradient bg-gradient-to-r from-green-400 via-ai-purple to-ai-blue bg-clip-text text-transparent">
                в Режим Предвидения?
              </span>
            </h2>
            <p className="text-2xl text-gray-300 leading-relaxed">
              Узнайте, какие{" "}
              <span className="text-green-400 font-semibold">
                скрытые миллионы
              </span>{" "}
              спят в ваших данных, и как наши кастомные модели разбудят их
            </p>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-ai-darker/60 border border-green-500/20 rounded-2xl p-6 backdrop-blur-sm">
              <div className="text-4xl font-bold text-green-400 mb-2">
                85-95%
              </div>
              <p className="text-gray-300">Точность прогнозов</p>
            </div>
            <div className="bg-ai-darker/60 border border-ai-purple/20 rounded-2xl p-6 backdrop-blur-sm">
              <div className="text-4xl font-bold text-ai-purple mb-2">340%</div>
              <p className="text-gray-300">Средний ROI</p>
            </div>
            <div className="bg-ai-darker/60 border border-ai-blue/20 rounded-2xl p-6 backdrop-blur-sm">
              <div className="text-4xl font-bold text-ai-blue mb-2">
                30 дней
              </div>
              <p className="text-gray-300">До первых результатов</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="group bg-gradient-to-r from-green-500 to-ai-purple hover:from-green-400 hover:to-ai-purple/90 text-white px-12 py-5 rounded-full text-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/25">
              <span className="flex items-center gap-3">
                <Icon name="Search" size={24} />
                Раскопать Мой Золотой KPI
                <Icon
                  name="ArrowRight"
                  size={20}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </span>
            </button>

            <button className="group bg-ai-darker/80 hover:bg-ai-darker border border-ai-purple/30 hover:border-ai-purple text-white px-10 py-5 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 backdrop-blur-sm">
              <span className="flex items-center gap-3">
                <Icon name="FileText" size={20} />
                Скачать Кейс: Экономия $2.3M
              </span>
            </button>
          </div>

          {/* Trust Elements */}
          <div className="mt-12 pt-8 border-t border-ai-purple/20">
            <p className="text-gray-400 mb-4">
              Первый аудит данных – бесплатно
            </p>
            <div className="flex justify-center items-center gap-8 text-gray-500">
              <div className="flex items-center gap-2">
                <Icon name="Shield" size={16} />
                <span className="text-sm">NDA & Безопасность</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Clock" size={16} />
                <span className="text-sm">Результат за 30 дней</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Award" size={16} />
                <span className="text-sm">Гарантия качества</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PredictiveCTA;
