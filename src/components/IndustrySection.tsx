import React from "react";
import Icon from "@/components/ui/icon";

const IndustrySection = () => {
  const industries = [
    {
      icon: "Building2",
      title: "Финансы",
      description:
        "AI для скоринга, мошенничества, персональных финансовых советов",
      benefit: "Снижение рисков, увеличение конверсии",
      color: "ai-purple",
    },
    {
      icon: "Factory",
      title: "Производство",
      description:
        "AI для прогноза спроса, оптимизации цепочек поставок, предиктивного обслуживания",
      benefit: "Снижение простоев, оптимизация запасов",
      color: "ai-blue",
    },
    {
      icon: "ShoppingCart",
      title: "Ритейл",
      description:
        "Персональные рекомендации, управление запасами в реальном времени",
      benefit: "Рост среднего чека, лояльность",
      color: "ai-pink",
    },
    {
      icon: "Truck",
      title: "Логистика",
      description:
        "Оптимизация маршрутов, прогноз сроков доставки, автономное управление складами",
      benefit: "Сокращение расходов, повышение точности",
      color: "ai-cyan",
    },
    {
      icon: "Heart",
      title: "Здравоохранение",
      description:
        "AI-ассистенты врачей, анализ медицинских изображений, персонализированные планы",
      benefit: "Ускорение диагностики, качество услуг",
      color: "ai-success",
    },
    {
      icon: "Users",
      title: "Услуги",
      description:
        "Виртуальные сотрудники для поддержки, продаж, документооборота",
      benefit: "Круглосуточная работа, снижение нагрузки",
      color: "ai-purple",
    },
  ];

  return (
    <section className="py-24 bg-ai-dark relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-ai-purple opacity-5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-ai-blue opacity-5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-montserrat font-bold mb-6">
            Наш Кастомный AI Работает
            <br />
            <span className="text-ai-gradient">В Любой Отрасли</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Уникальные решения для уникальных задач. Независимо от сферы
            деятельности, мы находим способ максимизировать эффективность через
            AI
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="ai-card p-6 rounded-xl hover-scale group animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4">
                <div
                  className={`inline-flex p-3 rounded-lg bg-${industry.color}/20 border border-${industry.color}/30 group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon
                    name={industry.icon as any}
                    size={28}
                    className={`text-${industry.color}`}
                  />
                </div>
              </div>

              <h3 className="text-xl font-montserrat font-bold mb-3 text-white group-hover:text-ai-gradient transition-colors duration-300">
                {industry.title}
              </h3>

              <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                {industry.description}
              </p>

              <div className="pt-3 border-t border-gray-700">
                <p className="text-xs text-ai-cyan font-medium">
                  💡 {industry.benefit}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="ai-card p-8 rounded-2xl text-center">
          <Icon
            name="Search"
            size={48}
            className="text-ai-purple mx-auto mb-6"
          />
          <h3 className="text-2xl md:text-3xl font-montserrat font-bold mb-4 text-white">
            Не нашли свою отрасль?
          </h3>
          <p className="text-lg text-gray-300 mb-6">
            <span className="text-ai-gradient font-semibold">
              Найдем подход!
            </span>{" "}
            Наша экспертиза адаптируется к любому бизнесу
          </p>
          <button className="ai-button px-6 py-3 rounded-lg text-white font-semibold flex items-center gap-3 mx-auto hover-scale">
            <Icon name="MessageCircle" size={20} />
            Обсудить Вашу Специфику
          </button>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-5 w-24 h-24 border border-ai-blue/20 rounded-full animate-pulse-glow"></div>
      <div
        className="absolute bottom-1/4 right-5 w-32 h-32 border border-ai-pink/20 rounded-full animate-pulse-glow"
        style={{ animationDelay: "2s" }}
      ></div>
    </section>
  );
};

export default IndustrySection;
