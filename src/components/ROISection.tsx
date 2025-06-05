import React from "react";
import Icon from "@/components/ui/icon";

const ROISection = () => {
  const metrics = [
    {
      icon: "TrendingUp",
      value: "+35%",
      label: "Рост Продаж",
      description: "Персонализация и автоматизация процессов продаж",
      color: "ai-success",
    },
    {
      icon: "TrendingDown",
      value: "-40%",
      label: "Операционные Затраты",
      description: "Автоматизация рутинных задач и оптимизация процессов",
      color: "ai-blue",
    },
    {
      icon: "Clock",
      value: "24/7",
      label: "Работа Без Остановок",
      description: "AI-агенты работают круглосуточно без перерывов",
      color: "ai-purple",
    },
    {
      icon: "Users",
      value: "15,000",
      label: "Часов Экономии",
      description:
        "Освобождение человеческих ресурсов для стратегических задач",
      color: "ai-pink",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-ai-dark to-ai-darker relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(139, 92, 246, 0.1) 35px, rgba(139, 92, 246, 0.1) 70px)`,
          }}
        ></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-montserrat font-bold mb-6">
            Дорого? Да.
            <br />
            <span className="text-ai-gradient">
              Но Окупается В Разы Быстрее
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Наши решения — не расход, а{" "}
            <span className="text-ai-purple font-semibold">
              стратегическая инвестиция
            </span>{" "}
            в будущее вашей компании. Фокус на максимальной эффективности
            приводит к быстрой окупаемости
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="ai-card p-6 rounded-xl text-center hover-scale animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4">
                <div
                  className={`inline-flex p-3 rounded-full bg-${metric.color}/20 border border-${metric.color}/30`}
                >
                  <Icon
                    name={metric.icon as any}
                    size={32}
                    className={`text-${metric.color}`}
                  />
                </div>
              </div>
              <div
                className={`text-3xl md:text-4xl font-montserrat font-bold mb-2 text-${metric.color}`}
              >
                {metric.value}
              </div>
              <h3 className="text-lg font-montserrat font-semibold mb-3 text-white">
                {metric.label}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {metric.description}
              </p>
            </div>
          ))}
        </div>

        {/* Investment Value Proposition */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up">
            <h3 className="text-3xl font-montserrat font-bold mb-6 text-white">
              Инвестиция, которая{" "}
              <span className="text-ai-gradient">работает на вас</span>
            </h3>
            <ul className="space-y-4">
              {[
                "Освободите ценные человеческие ресурсы для инноваций и роста",
                "Получайте точный расчет ROI — неотъемлемая часть нашего предложения",
                "Масштабируйте возможности без пропорционального роста затрат",
                "Получайте конкурентные преимущества через эксклюзивные AI-решения",
              ].map((point, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Icon
                    name="CheckCircle"
                    size={20}
                    className="text-ai-success mt-1 flex-shrink-0"
                  />
                  <span className="text-gray-300">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <div
            className="ai-card p-8 rounded-2xl animate-slide-up"
            style={{ animationDelay: "0.3s" }}
          >
            <div className="text-center mb-6">
              <Icon
                name="Calculator"
                size={48}
                className="text-ai-purple mx-auto mb-4"
              />
              <h4 className="text-2xl font-montserrat font-bold text-white mb-2">
                Расчет Окупаемости
              </h4>
              <p className="text-gray-400">Типичный проект окупается за</p>
            </div>

            <div className="text-center">
              <div className="text-5xl font-montserrat font-bold text-ai-gradient mb-2">
                6-12
              </div>
              <div className="text-xl text-white mb-4">месяцев</div>
              <div className="text-sm text-gray-400 leading-relaxed">
                При средней экономии{" "}
                <span className="text-ai-cyan">₽2-5 млн в год</span> на
                автоматизации процессов и увеличении эффективности
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <button className="ai-button px-8 py-4 rounded-lg text-white font-semibold text-lg flex items-center gap-3 mx-auto hover-scale">
            <Icon name="Calculator" size={24} />
            Рассчитать ROI Для Вашего Проекта
          </button>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 right-20 w-40 h-40 border border-ai-success/20 rounded-full animate-pulse-glow"></div>
      <div
        className="absolute bottom-20 left-20 w-24 h-24 border border-ai-blue/20 rounded-full animate-pulse-glow"
        style={{ animationDelay: "1.5s" }}
      ></div>
    </section>
  );
};

export default ROISection;
