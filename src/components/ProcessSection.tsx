import React from "react";
import Icon from "@/components/ui/icon";

const ProcessSection = () => {
  const steps = [
    {
      number: "01",
      title: "Глубокая Диагностика & Цель",
      description:
        "Погружение в ваш бизнес, выбор КОРОЛЕВСКОГО KPI для прогноза",
      detail: "Что реально принесёт миллион?",
      icon: "Search",
      color: "from-ai-purple to-ai-blue",
    },
    {
      number: "02",
      title: "Сбор & Очистка Данных",
      description: "Поиск всех релевантных источников данных",
      detail: "Превращение хаоса в чистый 'датасет мечты'",
      icon: "Database",
      color: "from-ai-blue to-green-500",
    },
    {
      number: "03",
      title: "Кастомное Моделирование",
      description: "Создание уникального ML-алгоритма под ваши данные",
      detail: "Тестирование на исторических данных с доказательством точности",
      icon: "Brain",
      color: "from-green-500 to-ai-purple",
    },
    {
      number: "04",
      title: "Интеграция & Автоматизация",
      description: "Встраивание в ваши системы (ERP, CRM, BI)",
      detail: "Генерация прогнозов и триггеров автоматических решений",
      icon: "Zap",
      color: "from-ai-purple to-ai-pink",
    },
    {
      number: "05",
      title: "Мониторинг & Обучение",
      description: "Постоянная калибровка модели на новых данных",
      detail: "Рост точности со временем + отчётность по влиянию на KPI",
      icon: "TrendingUp",
      color: "from-ai-pink to-ai-purple",
    },
  ];

  return (
    <section className="py-24 bg-ai-darker relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(139, 92, 246, 0.3) 1px, transparent 0)`,
            backgroundSize: "60px 60px",
          }}
        ></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-montserrat font-bold mb-6">
            Алхимия Данных:
            <br />
            <span className="text-green-400">
              От Хаоса к Точностному Золоту
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Мы не продаём 'чёрный ящик'. Мы создаём{" "}
            <span className="text-ai-purple font-semibold">
              прозрачный, кастомизированный двигатель прогнозирования
            </span>
            , который вы понимаете и контролируете.
          </p>
        </div>

        <div className="space-y-8 max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={index}
              className="group hover:scale-105 transition-all duration-300"
            >
              <div className="bg-ai-dark border border-ai-purple/20 rounded-2xl p-8 hover:border-ai-purple/40 transition-all duration-300">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-4`}
                    >
                      <Icon
                        name={step.icon as any}
                        size={28}
                        className="text-white"
                      />
                    </div>
                    <div className="text-center">
                      <span
                        className={`text-2xl font-bold bg-gradient-to-r ${step.color} bg-clip-text text-transparent`}
                      >
                        {step.number}
                      </span>
                    </div>
                  </div>

                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-300 text-lg mb-3">
                      {step.description}
                    </p>
                    <p className="text-ai-purple font-semibold">
                      {step.detail}
                    </p>
                  </div>
                </div>
              </div>

              {/* Connecting Line */}
              {index < steps.length - 1 && (
                <div className="flex justify-center py-4">
                  <div className="w-px h-8 bg-gradient-to-b from-ai-purple to-transparent"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
