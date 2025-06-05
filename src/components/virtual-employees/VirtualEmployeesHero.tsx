import React from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const VirtualEmployeesHero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-b from-ai-dark via-gray-900 to-ai-dark flex items-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-ai-blue/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-40 right-20 w-48 h-48 bg-green-500/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-white/5 rounded-full blur-lg animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-black font-montserrat leading-tight">
                Разгрузите Свою Команду.{" "}
                <span className="bg-ai-gradient bg-clip-text text-transparent">
                  Внедрите Бессменных
                </span>{" "}
                Виртуальных Сотрудников
              </h1>

              <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed font-light">
                <span className="text-ai-blue font-semibold">
                  Кастомные цифровые специалисты
                </span>
                , интегрированные в ваши процессы, автономно выполняют рутинные
                и сложные задачи{" "}
                <span className="text-green-400 font-semibold">
                  24/7 с нулевыми ошибками
                </span>
                .
              </p>

              <div className="bg-gradient-to-r from-gray-800/50 to-gray-700/30 border border-gray-600/30 rounded-2xl p-6">
                <p className="text-lg text-gray-200">
                  <span className="text-white font-semibold">
                    Снижайте затраты на FTE, повышайте скорость и качество.
                  </span>{" "}
                  Дорого? Посчитайте стоимость простоя, переработок и ошибок
                  вашего текущего отдела.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-ai-gradient hover:opacity-90 text-white font-bold text-lg px-8 py-6 rounded-xl shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                <Icon name="Calculator" className="mr-3" size={24} />
                Рассчитать Экономию на FTE
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="border-2 border-ai-blue text-ai-blue hover:bg-ai-blue hover:text-white font-semibold text-lg px-8 py-6 rounded-xl transition-all duration-300"
              >
                <Icon name="Play" className="mr-3" size={20} />
                Увидеть в Действии
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-700/50">
              <div className="text-center">
                <div className="text-3xl font-black text-green-400">99.9%</div>
                <div className="text-sm text-gray-400">Точность</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black text-ai-blue">24/7</div>
                <div className="text-sm text-gray-400">Доступность</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black text-white">-60%</div>
                <div className="text-sm text-gray-400">Затраты FTE</div>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-gray-800/40 to-gray-900/60 border border-gray-600/30 rounded-3xl p-8 backdrop-blur-sm">
              {/* Virtual Employee Cores */}
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="bg-ai-gradient/20 border border-ai-blue/30 rounded-2xl p-6 text-center animate-pulse">
                  <Icon
                    name="Bot"
                    size={48}
                    className="text-ai-blue mx-auto mb-3"
                  />
                  <div className="text-sm font-semibold">Оператор 24/7</div>
                </div>
                <div className="bg-green-500/20 border border-green-400/30 rounded-2xl p-6 text-center animate-pulse delay-300">
                  <Icon
                    name="BarChart3"
                    size={48}
                    className="text-green-400 mx-auto mb-3"
                  />
                  <div className="text-sm font-semibold">Аналитик ROI</div>
                </div>
                <div className="bg-purple-500/20 border border-purple-400/30 rounded-2xl p-6 text-center animate-pulse delay-500">
                  <Icon
                    name="Shield"
                    size={48}
                    className="text-purple-400 mx-auto mb-3"
                  />
                  <div className="text-sm font-semibold">Контролер</div>
                </div>
                <div className="bg-orange-500/20 border border-orange-400/30 rounded-2xl p-6 text-center animate-pulse delay-700">
                  <Icon
                    name="Truck"
                    size={48}
                    className="text-orange-400 mx-auto mb-3"
                  />
                  <div className="text-sm font-semibold">Логист</div>
                </div>
              </div>

              {/* Data Flow */}
              <div className="text-center">
                <div className="flex items-center justify-center gap-4 text-gray-400">
                  <Icon name="Database" size={24} />
                  <div className="flex-1 h-px bg-gradient-to-r from-transparent via-ai-blue to-transparent"></div>
                  <Icon name="Cpu" size={24} className="text-ai-blue" />
                  <div className="flex-1 h-px bg-gradient-to-r from-transparent via-green-400 to-transparent"></div>
                  <Icon name="Target" size={24} className="text-green-400" />
                </div>
                <div className="text-xs text-gray-500 mt-2">
                  Данные → Обработка → Результат
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VirtualEmployeesHero;
