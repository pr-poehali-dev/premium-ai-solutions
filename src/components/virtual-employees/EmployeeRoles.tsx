import React from "react";
import Icon from "@/components/ui/icon";

const EmployeeRoles = () => {
  const roles = [
    {
      title: "Виртуальный Оператор Кол-Центра",
      superpower: "Мультичатинг 24/7",
      icon: "Phone",
      description:
        "Обрабатывает 100% входящих запросов (голос/чат), решает 80% типовых вопросов, передает 20% сложных людям с контекстом.",
      benefit: "Сокращение FTE на 40%, NPS +35",
      color: "blue",
    },
    {
      title: "Виртуальный Менеджер Заказов",
      superpower: "Безупречная Координация",
      icon: "Package",
      description:
        "Автономно принимает/проверяет заказы, оптимизирует маршруты в реальном времени, управляет коммуникацией с клиентом/партнером.",
      benefit: "Сокращение циклов на 50%, ошибки → 0%",
      color: "green",
    },
    {
      title: "Виртуальный Аналитик Отчетности",
      superpower: "Молниеносная Точность",
      icon: "BarChart3",
      description:
        "Автоматически собирает данные из 20+ источников, генерирует кастомизированные отчеты и дашборды, выявляет аномалии.",
      benefit: "Высвобождение 15 чел./часс в день",
      color: "purple",
    },
    {
      title: "Виртуальный Контролер Качества",
      superpower: "Неусыпное Око",
      icon: "Shield",
      description:
        "Анализирует 100% транзакций/звонков/процессов на соответствие стандартам, мгновенно эскалирует риски.",
      benefit: "Снижение потерь от брака на 60%",
      color: "orange",
    },
    {
      title: "Виртуальный HR-Ассистент",
      superpower: "Персонализация в Масштабе",
      icon: "Users",
      description:
        "Автономно проводит собеседования, обрабатывает документы, отвечает на вопросы сотрудников, формирует персонализированные онбординги.",
      benefit: "Сокращение времени найма на 70%",
      color: "teal",
    },
    {
      title: "Виртуальный Финансовый Аудитор",
      superpower: "Непрерывный Контроль",
      icon: "DollarSign",
      description:
        "Анализирует все финансовые операции в режиме реального времени, выявляет мошенничество и несоответствия, формирует отчеты.",
      benefit: "Предотвращение потерь на 80%",
      color: "yellow",
    },
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: "from-blue-500/20 to-ai-blue/20 border-ai-blue/30 text-ai-blue",
      green:
        "from-green-500/20 to-green-400/20 border-green-400/30 text-green-400",
      purple:
        "from-purple-500/20 to-purple-400/20 border-purple-400/30 text-purple-400",
      orange:
        "from-orange-500/20 to-orange-400/20 border-orange-400/30 text-orange-400",
      teal: "from-teal-500/20 to-teal-400/20 border-teal-400/30 text-teal-400",
      yellow:
        "from-yellow-500/20 to-yellow-400/20 border-yellow-400/30 text-yellow-400",
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  return (
    <section className="py-24 bg-gradient-to-b from-ai-dark via-gray-900 to-ai-dark">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-black font-montserrat mb-6">
            Не Боты.{" "}
            <span className="bg-ai-gradient bg-clip-text text-transparent">
              Профессионалы Цифровой Эпохи.
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Каждый виртуальный сотрудник создается с нуля под вашу конкретную
            роль, задачи и системы. Это не универсальный бот — это ваш цифровой
            специалист.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {roles.map((role, index) => (
            <div
              key={index}
              className={`relative bg-gradient-to-br ${getColorClasses(role.color)} border-2 rounded-3xl p-8 group hover:scale-105 transition-all duration-500 hover:shadow-2xl`}
            >
              {/* Superpower Badge */}
              <div className="absolute -top-4 left-6 right-6">
                <div className="bg-gray-900 border border-gray-600 rounded-full px-4 py-2 text-center">
                  <span className="text-sm font-bold text-white">
                    ⚡ {role.superpower}
                  </span>
                </div>
              </div>

              {/* Icon */}
              <div className="flex justify-center mb-6 pt-4">
                <div
                  className={`p-4 rounded-2xl bg-gradient-to-br ${getColorClasses(role.color)}`}
                >
                  <Icon
                    name={role.icon as any}
                    size={48}
                    className={getColorClasses(role.color).split(" ")[2]}
                  />
                </div>
              </div>

              {/* Content */}
              <div className="text-center space-y-4">
                <h3 className="text-xl font-bold text-white">{role.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {role.description}
                </p>

                {/* Benefit */}
                <div className="bg-gray-900/50 border border-gray-700/50 rounded-xl p-4">
                  <div className="text-xs text-gray-400 mb-1">ВЫГОДА:</div>
                  <div className="text-sm font-bold text-green-400">
                    {role.benefit}
                  </div>
                </div>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 translate-x-full group-hover:translate-x-0 transition-transform duration-1000"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center bg-gradient-to-r from-gray-800/50 to-gray-700/30 border border-gray-600/30 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-white mb-4">
            Нужна уникальная роль?{" "}
            <span className="text-ai-blue">
              Создадим виртуального профи с нуля.
            </span>
          </h3>
          <p className="text-gray-300 text-lg">
            Его "трудовой договор" — это гарантия эффективности.
          </p>
        </div>
      </div>
    </section>
  );
};

export default EmployeeRoles;
