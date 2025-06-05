import React from "react";
import Icon from "@/components/ui/icon";

const ProblemSection = () => {
  const problemPoints = [
    {
      icon: "AlertTriangle",
      title: "Готовые решения не понимают специфику",
      description:
        "Шаблонные AI-продукты игнорируют уникальные процессы вашего бизнеса",
    },
    {
      icon: "Unplug",
      title: "Интеграции — головная боль",
      description:
        'Существующие системы не "дружат" между собой, данные разрознены',
    },
    {
      icon: "TrendingDown",
      title: "Автоматизация поверхностна",
      description:
        "Простые боты не решают сложные задачи, требующие понимания контекста",
    },
    {
      icon: "DollarSign",
      title: "Результаты неочевидны",
      description: "Отсутствие измеримых KPI и понимания ROI от внедрения AI",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-ai-dark to-ai-darker relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `linear-gradient(45deg, transparent 40%, rgba(139, 92, 246, 0.1) 50%, transparent 60%)`,
            backgroundSize: "100px 100px",
          }}
        ></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-montserrat font-bold mb-6">
            Ваш бизнес уникален.
            <br />
            <span className="text-ai-gradient">Почему ваш AI — нет?</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Большинство компаний застревает в ловушке универсальных решений,
            теряя время, деньги и конкурентные преимущества
          </p>
        </div>

        {/* Problem Visualization */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {problemPoints.map((point, index) => (
            <div
              key={index}
              className="ai-card p-6 rounded-xl hover-scale text-center animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4 flex justify-center">
                <div className="p-3 rounded-full bg-red-500/20 border border-red-500/30">
                  <Icon
                    name={point.icon as any}
                    size={32}
                    className="text-red-400"
                  />
                </div>
              </div>
              <h3 className="text-lg font-montserrat font-semibold mb-3 text-white">
                {point.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {point.description}
              </p>
            </div>
          ))}
        </div>

        {/* Central Message */}
        <div className="text-center">
          <div className="ai-card p-8 rounded-2xl max-w-4xl mx-auto">
            <Icon
              name="Target"
              size={48}
              className="text-ai-purple mx-auto mb-6"
            />
            <h3 className="text-2xl md:text-3xl font-montserrat font-bold mb-4 text-white">
              Пора на уровень выше
            </h3>
            <p className="text-lg text-gray-300 leading-relaxed">
              Вместо попыток "подогнать" готовые решения под ваши задачи, мы
              создаем AI, который изначально спроектирован для вашего успеха
            </p>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 border border-red-500/20 rounded-full animate-pulse-glow"></div>
      <div
        className="absolute bottom-20 right-10 w-48 h-48 border border-red-500/10 rounded-full animate-pulse-glow"
        style={{ animationDelay: "1s" }}
      ></div>
    </section>
  );
};

export default ProblemSection;
