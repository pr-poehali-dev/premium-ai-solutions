import React from "react";
import Icon from "@/components/ui/icon";

const ComparisonSection = () => {
  return (
    <section className="py-24 bg-ai-darker relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-montserrat font-bold mb-6">
            Описательная Аналитика: Что{" "}
            <span className="text-gray-400">БЫЛО</span>
            <br />
            Предиктивная Аналитика: Что{" "}
            <span className="text-green-400">БУДЕТ</span>
            <br />
            <span className="text-ai-purple">(и Как На Этом Заработать)</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Past Analytics */}
          <div className="relative">
            <div className="bg-gray-800/50 border border-gray-600/50 rounded-2xl p-8 h-full">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-full bg-gray-600/30">
                  <Icon name="BarChart" size={24} className="text-gray-400" />
                </div>
                <h3 className="text-2xl font-bold text-gray-300">
                  Классическая Аналитика
                </h3>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <Icon
                    name="AlertTriangle"
                    size={20}
                    className="text-red-400"
                  />
                  <span className="text-gray-300">
                    Реагирование на проблемы
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon
                    name="TrendingDown"
                    size={20}
                    className="text-red-400"
                  />
                  <span className="text-gray-300">Потери уже произошли</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Clock" size={20} className="text-red-400" />
                  <span className="text-gray-300">Упущенные возможности</span>
                </div>
              </div>

              <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
                <p className="text-red-400 font-semibold mb-2">
                  Типичный сценарий:
                </p>
                <p className="text-gray-300 text-sm">
                  "Отчёты показывают дыру в бюджете <strong>после</strong> того,
                  как вы в неё упали."
                </p>
              </div>
            </div>
          </div>

          {/* Predictive Analytics */}
          <div className="relative">
            <div className="bg-gradient-to-br from-green-500/10 to-ai-purple/10 border border-green-500/30 rounded-2xl p-8 h-full relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/20 rounded-full blur-3xl"></div>

              <div className="flex items-center gap-4 mb-6 relative z-10">
                <div className="p-3 rounded-full bg-green-500/20 border border-green-500/30">
                  <Icon name="Zap" size={24} className="text-green-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">
                  Предиктивная Мощь
                </h3>
              </div>

              <div className="space-y-4 mb-8 relative z-10">
                <div className="flex items-center gap-3">
                  <Icon name="Shield" size={20} className="text-green-400" />
                  <span className="text-white">Проактивная защита</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon
                    name="TrendingUp"
                    size={20}
                    className="text-green-400"
                  />
                  <span className="text-white">Экономия и рост</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Target" size={20} className="text-green-400" />
                  <span className="text-white">Захват возможностей</span>
                </div>
              </div>

              <div className="bg-green-500/20 border border-green-500/30 rounded-lg p-4 relative z-10">
                <p className="text-green-400 font-semibold mb-2">Наш подход:</p>
                <p className="text-white text-sm">
                  "Ставим <strong>предупреждающий знак</strong> за километр и
                  прокладываем объезд к прибыли."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
