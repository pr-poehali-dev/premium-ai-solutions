import React from "react";
import Icon from "@/components/ui/icon";

const ComparisonChart = () => {
  const comparisons = [
    {
      parameter: "Доступность",
      virtual: "24/7/365",
      human: "8ч/5дн + больничные",
      virtualIcon: "Clock",
      humanIcon: "Calendar",
    },
    {
      parameter: "Скорость",
      virtual: "Обработка за секунды",
      human: "Задержки, перерывы",
      virtualIcon: "Zap",
      humanIcon: "Coffee",
    },
    {
      parameter: "Точность",
      virtual: ">99.9%",
      human: "Риск ошибки (5-15%)",
      virtualIcon: "Target",
      humanIcon: "AlertTriangle",
    },
    {
      parameter: "Масштабируемость",
      virtual: "Развертывание за часы",
      human: "Найм за месяцы",
      virtualIcon: "Rocket",
      humanIcon: "Clock",
    },
    {
      parameter: "Стоимость Владения",
      virtual: "$50,000/год",
      human: "$120,000/год + соцпакет",
      virtualIcon: "DollarSign",
      humanIcon: "CreditCard",
    },
    {
      parameter: "Консистентность",
      virtual: "Всегда по стандарту",
      human: "Зависит от настроения",
      virtualIcon: "CheckCircle",
      humanIcon: "Shuffle",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-900 via-ai-dark to-gray-900">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-black font-montserrat mb-6">
            <span className="text-green-400">Бесперебойность</span> vs Burnout.{" "}
            <span className="text-ai-blue">Точность</span> vs Человеческий
            Фактор.
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Виртуальные сотрудники не заменяют людей — они заменяют рутину и
            ошибки, высвобождая ваш человеческий капитал для стратегии и роста.
          </p>
        </div>

        {/* Comparison Grid */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {/* Headers */}
            <div className="hidden lg:block"></div>
            <div className="text-center">
              <div className="bg-ai-gradient rounded-2xl p-6 mb-4">
                <Icon
                  name="Bot"
                  size={48}
                  className="text-white mx-auto mb-2"
                />
                <h3 className="text-xl font-bold text-white">
                  Виртуальный Сотрудник
                </h3>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-br from-gray-700 to-gray-600 rounded-2xl p-6 mb-4">
                <Icon
                  name="User"
                  size={48}
                  className="text-gray-300 mx-auto mb-2"
                />
                <h3 className="text-xl font-bold text-gray-300">Человек</h3>
              </div>
            </div>
          </div>

          {/* Comparison Items */}
          <div className="space-y-6">
            {comparisons.map((item, index) => (
              <div
                key={index}
                className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center"
              >
                {/* Parameter */}
                <div className="text-center lg:text-right">
                  <h4 className="text-lg font-bold text-white">
                    {item.parameter}
                  </h4>
                </div>

                {/* Virtual */}
                <div className="bg-gradient-to-r from-green-500/20 to-ai-blue/20 border border-ai-blue/30 rounded-xl p-6 transform hover:scale-105 transition-all duration-300">
                  <div className="flex items-center justify-center gap-4">
                    <Icon
                      name={item.virtualIcon as any}
                      size={24}
                      className="text-green-400"
                    />
                    <div className="text-center">
                      <div className="text-lg font-bold text-white">
                        {item.virtual}
                      </div>
                      <Icon
                        name="TrendingUp"
                        size={16}
                        className="text-green-400 mx-auto mt-1"
                      />
                    </div>
                  </div>
                </div>

                {/* Human */}
                <div className="bg-gradient-to-r from-gray-700/30 to-gray-600/30 border border-gray-600/30 rounded-xl p-6">
                  <div className="flex items-center justify-center gap-4">
                    <Icon
                      name={item.humanIcon as any}
                      size={24}
                      className="text-orange-400"
                    />
                    <div className="text-center">
                      <div className="text-lg font-semibold text-gray-300">
                        {item.human}
                      </div>
                      <Icon
                        name="TrendingDown"
                        size={16}
                        className="text-orange-400 mx-auto mt-1"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Message */}
        <div className="mt-16 text-center bg-gradient-to-r from-gray-800/50 to-gray-700/30 border border-gray-600/30 rounded-2xl p-8">
          <Icon
            name="Lightbulb"
            size={48}
            className="text-yellow-400 mx-auto mb-4"
          />
          <h3 className="text-2xl font-bold text-white mb-4">
            Виртуальные сотрудники — не замена{" "}
            <span className="text-ai-blue">людям</span>, а замена{" "}
            <span className="text-orange-400">рутине и ошибкам</span>
          </h3>
          <p className="text-xl text-gray-300">
            Высвобождайте человеческий капитал для стратегии, творчества и
            роста.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ComparisonChart;
