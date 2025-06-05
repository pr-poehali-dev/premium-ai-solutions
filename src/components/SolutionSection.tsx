import React from "react";
import Icon from "@/components/ui/icon";

const SolutionSection = () => {
  const solutionFeatures = [
    {
      icon: "Search",
      title: "Глубокая Аналитика & Стратегия",
      description:
        "Погружаемся в ваш бизнес, чтобы понять процессы, боли и цели изнутри",
      accent: "ai-purple",
    },
    {
      icon: "Code",
      title: "Полностью Кастомная Разработка",
      description:
        "Никаких шаблонов. Архитектура, функционал, интерфейс — все создается под ваши нужды",
      accent: "ai-blue",
    },
    {
      icon: "Zap",
      title: "Масштабируемая Сила AI",
      description:
        "От базовой автоматизации до сложных AI-агентов, способных самостоятельно решать задачи",
      accent: "ai-pink",
    },
    {
      icon: "Link",
      title: "Бесшовная Интеграция",
      description:
        "Подключаемся к любым вашим системам. Данные работают на вас комплексно",
      accent: "ai-cyan",
    },
    {
      icon: "TrendingUp",
      title: "Фокус на Результат & ROI",
      description:
        "Каждый проект нацелен на конкретные KPI: рост продаж, сокращение затрат, освобождение ресурсов",
      accent: "ai-success",
    },
    {
      icon: "Shield",
      title: "Премиальная Поддержка 24/7",
      description:
        "Полное постпроектное сопровождение, мониторинг и развитие. Ваш AI всегда работает на пике возможностей",
      accent: "ai-emerald",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-ai-darker to-ai-dark relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(14, 165, 233, 0.3) 1px, transparent 0)`,
            backgroundSize: "60px 60px",
          }}
        ></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-montserrat font-bold mb-6">
            <span className="text-ai-gradient">
              AI, Созданный Исключительно Для Вас
            </span>
            <br />
            От Концепции До Внедрения
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Мы не адаптируем готовые решения — мы создаем уникальную экосистему,
            которая становится конкурентным преимуществом вашего бизнеса
          </p>
        </div>

        {/* Solution Features Grid */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
          {solutionFeatures.map((feature, index) => (
            <div
              key={index}
              className="ai-card p-8 rounded-2xl hover-scale group animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-6">
                <div
                  className={`inline-flex p-4 rounded-xl bg-${feature.accent}/20 border border-${feature.accent}/30 group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon
                    name={feature.icon as any}
                    size={32}
                    className={`text-${feature.accent}`}
                  />
                </div>
              </div>
              <h3 className="text-xl font-montserrat font-bold mb-4 text-white group-hover:text-ai-gradient transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Process Timeline */}
        <div className="ai-card p-8 md:p-12 rounded-3xl">
          <h3 className="text-3xl font-montserrat font-bold text-center mb-12 text-ai-gradient">
            Путь к Вашему Эксклюзивному AI
          </h3>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Погружение",
                description: "Анализ ваших задач и данных",
              },
              {
                step: "02",
                title: "Стратегия",
                description: "Проектирование решения и оценка ROI",
              },
              {
                step: "03",
                title: "Создание",
                description: "Разработка, интеграция и тестирование",
              },
              {
                step: "04",
                title: "Запуск",
                description: "Внедрение, обучение и масштабирование",
              },
            ].map((phase, index) => (
              <div
                key={index}
                className="text-center animate-slide-up"
                style={{ animationDelay: `${0.5 + index * 0.1}s` }}
              >
                <div className="mb-4">
                  <div className="w-16 h-16 mx-auto rounded-full bg-ai-gradient flex items-center justify-center text-white font-montserrat font-bold text-lg">
                    {phase.step}
                  </div>
                </div>
                <h4 className="text-lg font-montserrat font-semibold mb-2 text-white">
                  {phase.title}
                </h4>
                <p className="text-gray-400 text-sm">{phase.description}</p>
                {index < 3 && (
                  <div
                    className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-ai-purple to-ai-blue transform -translate-y-1/2"
                    style={{ width: "calc(100% - 4rem)" }}
                  ></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <button className="ai-button px-8 py-4 rounded-lg text-white font-semibold text-lg flex items-center gap-3 mx-auto hover-scale">
            <Icon name="ArrowRight" size={24} />
            Запросить Эксклюзивную Консультацию
          </button>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-32 right-10 animate-float">
        <div className="ai-card p-4 rounded-lg">
          <Icon name="Sparkles" size={28} className="text-ai-purple" />
        </div>
      </div>

      <div
        className="absolute bottom-32 left-10 animate-float"
        style={{ animationDelay: "3s" }}
      >
        <div className="ai-card p-4 rounded-lg">
          <Icon name="Rocket" size={28} className="text-ai-blue" />
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
