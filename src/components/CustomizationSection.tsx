import React from "react";
import Icon from "@/components/ui/icon";

const CustomizationSection = () => {
  return (
    <section className="py-24 bg-ai-dark relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-montserrat font-bold mb-6">
            Шаблонная Аналитика Предсказывает
            <br />
            <span className="text-gray-400">
              Среднюю Температуру по Больнице
            </span>
            <br />
            <span className="text-green-400">
              Наша – Вашу Лихорадку Прибыли
            </span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Generic Solution */}
          <div className="relative">
            <div className="bg-gray-800/30 border border-gray-600/50 rounded-2xl p-8 h-full">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-full bg-gray-600/30">
                  <Icon name="Package" size={24} className="text-gray-400" />
                </div>
                <h3 className="text-2xl font-bold text-gray-300">
                  Типовое Решение
                </h3>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-3">
                  <Icon name="X" size={20} className="text-red-400 mt-1" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">
                      Размытый силуэт
                    </h4>
                    <p className="text-gray-400 text-sm">
                      Общие показатели для всех
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Icon name="X" size={20} className="text-red-400 mt-1" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">
                      Низкая точность
                    </h4>
                    <p className="text-gray-400 text-sm">
                      60-70% точности прогнозов
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Icon name="X" size={20} className="text-red-400 mt-1" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">
                      Интеграция "на соплях"
                    </h4>
                    <p className="text-gray-400 text-sm">
                      Плохо работает с вашими системами
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Icon name="X" size={20} className="text-red-400 mt-1" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">
                      Неизмеримый ROI
                    </h4>
                    <p className="text-gray-400 text-sm">
                      Сложно доказать эффективность
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Custom Premium Solution */}
          <div className="relative">
            <div className="bg-gradient-to-br from-green-500/10 to-ai-purple/10 border border-green-500/30 rounded-2xl p-8 h-full relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/20 rounded-full blur-3xl"></div>

              <div className="flex items-center gap-4 mb-6 relative z-10">
                <div className="p-3 rounded-full bg-green-500/20 border border-green-500/30">
                  <Icon name="Crown" size={24} className="text-green-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">
                  Наш Кастомный Премиум
                </h3>
              </div>

              <div className="space-y-6 relative z-10">
                <div className="flex items-start gap-3">
                  <Icon
                    name="Check"
                    size={20}
                    className="text-green-400 mt-1"
                  />
                  <div>
                    <h4 className="text-white font-semibold mb-1">
                      Чёткий профиль бизнеса
                    </h4>
                    <p className="text-gray-300 text-sm">
                      Заточено под ваши уникальные процессы
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Icon
                    name="Check"
                    size={20}
                    className="text-green-400 mt-1"
                  />
                  <div>
                    <h4 className="text-white font-semibold mb-1">
                      Высокая точность
                    </h4>
                    <p className="text-gray-300 text-sm">
                      85-95% точности прогнозов
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Icon
                    name="Check"
                    size={20}
                    className="text-green-400 mt-1"
                  />
                  <div>
                    <h4 className="text-white font-semibold mb-1">
                      Глубокая интеграция
                    </h4>
                    <p className="text-gray-300 text-sm">
                      Бесшовная работа с вашей экосистемой
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Icon
                    name="Check"
                    size={20}
                    className="text-green-400 mt-1"
                  />
                  <div>
                    <h4 className="text-white font-semibold mb-1">
                      Измеримый ROI
                    </h4>
                    <p className="text-gray-300 text-sm">
                      Конкретные цифры экономии и роста
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Messages */}
        <div className="mt-16 space-y-8 max-w-4xl mx-auto">
          <div className="bg-ai-darker/80 border border-ai-purple/20 rounded-2xl p-8">
            <Icon
              name="AlertCircle"
              size={32}
              className="text-ai-purple mb-4"
            />
            <p className="text-xl text-gray-300 leading-relaxed">
              "Ваши данные уникальны. Ваши процессы уникальны. Ваши риски и
              возможности – уникальны.
              <span className="text-ai-purple font-semibold">
                {" "}
                Универсальная модель – как прогноз погоды для другой планеты.
              </span>
              "
            </p>
          </div>

          <div className="bg-green-500/10 border border-green-500/20 rounded-2xl p-8">
            <Icon name="Crown" size={32} className="text-green-400 mb-4" />
            <p className="text-xl text-gray-300 leading-relaxed">
              "
              <span className="text-green-400 font-semibold">
                Кастомизация – это не роскошь, это необходимость
              </span>
              для прогноза, который ударит в десятку ваших ключевых метрик и
              принесёт реальные деньги."
            </p>
          </div>

          <div className="bg-ai-blue/10 border border-ai-blue/20 rounded-2xl p-8">
            <Icon name="DollarSign" size={32} className="text-ai-blue mb-4" />
            <p className="text-xl text-gray-300 leading-relaxed">
              "Дорого?{" "}
              <span className="text-ai-blue font-semibold">
                Заплатите один раз за точность, которая будет приносить прибыль
                годами.
              </span>
              Или платите вечно за упущенные возможности и предотвратимые
              потери."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomizationSection;
