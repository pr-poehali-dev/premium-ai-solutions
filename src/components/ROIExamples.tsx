import React from "react";
import Icon from "@/components/ui/icon";

const ROIExamples = () => {
  const examples = [
    {
      icon: "Package",
      title: "Предотвращение срыва поставок",
      prediction: "Срыв критической поставки через 14 дней",
      accuracy: "92%",
      action: "Авто-заказ у альтернативного поставщика по лучшей цене",
      result: "$500K+",
      resultText: "Предотвращён простой производства",
      color: "from-red-500 to-orange-500",
    },
    {
      icon: "Users",
      title: "Удержание ключевых клиентов",
      prediction: "Отток B2B-клиента в следующем квартале",
      accuracy: "85%",
      action: "Персональное спец. предложение через CRM",
      result: "$1.2M",
      resultText: "Удержан клиент с LTV + экономия $200K на привлечении",
      color: "from-blue-500 to-purple-500",
    },
    {
      icon: "TrendingUp",
      title: "Захват всплеска спроса",
      prediction: "Рост спроса на 40% выше сезонного через 30 дней",
      accuracy: "88%",
      action: "Корректировка производства + таргетированная промо-кампания",
      result: "$750K",
      resultText: "Дополнительная выручка без дефицита/излишков",
      color: "from-green-500 to-teal-500",
    },
    {
      icon: "Shield",
      title: "Блокировка мошенничества",
      prediction: "Риск мошеннической транзакции в реальном времени",
      accuracy: "95%+",
      action: "Автоматическая блокировка + уведомление безопасности",
      result: "$2M+",
      resultText: "Предотвращённые потери в год",
      color: "from-purple-500 to-pink-500",
    },
  ];

  return (
    <section className="py-24 bg-ai-dark relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-montserrat font-bold mb-6">
            Не Просто Точный Прогноз.
            <br />
            <span className="text-green-400">Автоматизированная Прибыль.</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Наши модели не рисуют будущее –{" "}
            <strong className="text-ai-purple">
              они строят под него прибыльные мосты из ваших данных
            </strong>
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {examples.map((example, index) => (
            <div
              key={index}
              className="bg-ai-darker/80 border border-ai-purple/20 rounded-2xl p-8 hover:border-ai-purple/40 transition-all duration-300 group"
            >
              <div className="flex items-start gap-6">
                <div
                  className={`p-4 rounded-2xl bg-gradient-to-br ${example.color} flex-shrink-0`}
                >
                  <Icon
                    name={example.icon as any}
                    size={32}
                    className="text-white"
                  />
                </div>

                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {example.title}
                  </h3>

                  <div className="space-y-4">
                    <div className="bg-ai-purple/10 border border-ai-purple/20 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-ai-purple font-semibold">
                          Прогноз:
                        </span>
                        <span className="text-green-400 font-mono">
                          {example.accuracy}
                        </span>
                      </div>
                      <p className="text-gray-300">{example.prediction}</p>
                    </div>

                    <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
                      <span className="text-blue-400 font-semibold block mb-2">
                        Действие:
                      </span>
                      <p className="text-gray-300">{example.action}</p>
                    </div>

                    <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="text-green-400 font-semibold block mb-1">
                            Результат:
                          </span>
                          <p className="text-gray-300 text-sm">
                            {example.resultText}
                          </p>
                        </div>
                        <div className="text-right">
                          <div className="text-3xl font-bold text-green-400">
                            {example.result}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ROIExamples;
