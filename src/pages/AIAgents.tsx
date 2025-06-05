import React from "react";
import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";

const AIAgents = () => {
  return (
    <div className="min-h-screen bg-ai-dark text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Animation */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-ai-purple/20 via-ai-dark to-ai-blue/20"></div>
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-ai-purple/30 blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/3 right-1/4 w-48 h-48 rounded-full bg-ai-blue/30 blur-3xl animate-pulse delay-700"></div>
            <div className="absolute top-1/2 right-1/3 w-32 h-32 rounded-full bg-ai-cyan/30 blur-2xl animate-pulse delay-1000"></div>
          </div>
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-5xl lg:text-7xl font-montserrat font-bold mb-8 bg-gradient-to-r from-white via-ai-purple to-ai-blue bg-clip-text text-transparent leading-tight">
              Запустите{" "}
              <span className="text-ai-cyan">Кастомных AI Агентов</span> – Ваших
              Автономных Виртуальных Сотрудников Премиум-Класса
            </h1>

            <p className="text-xl lg:text-2xl text-gray-300 mb-12 leading-relaxed max-w-4xl mx-auto">
              Больше, чем автоматизация.{" "}
              <strong className="text-ai-purple">
                Интеллектуальные, самообучающиеся агенты
              </strong>
              , созданные{" "}
              <strong className="text-ai-blue">
                исключительно под ваш бизнес
              </strong>
              , интегрируются в ваши системы и
              <strong className="text-ai-cyan">
                {" "}
                автономно решают сложные задачи 24/7
              </strong>
              , принося максимальную финансовую отдачу.
            </p>

            <p className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto">
              Дорого? Считайте их высокооплачиваемыми топ-специалистами с
              нулевыми больничными и бесконечной эффективностью.
            </p>

            <Button className="px-12 py-6 text-lg font-semibold bg-ai-gradient hover:scale-105 transition-all duration-300 shadow-2xl">
              <Icon name="Rocket" size={24} className="mr-3" />
              Запустить Своего Агента
            </Button>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-24 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-montserrat font-bold mb-6 text-white">
              Ассистент Автоматизирует, Агент – Действует и Решает
            </h2>
          </div>

          <div className="max-w-6xl mx-auto bg-ai-darker/50 rounded-2xl border border-ai-purple/20 overflow-hidden">
            <div className="grid grid-cols-3 gap-0">
              {/* Headers */}
              <div className="p-6 bg-ai-purple/10 border-r border-ai-purple/20">
                <h3 className="text-xl font-bold text-ai-purple">Задача</h3>
              </div>
              <div className="p-6 bg-gray-800/50 border-r border-gray-600/20">
                <h3 className="text-xl font-bold text-gray-300">
                  Базовый Ассистент
                </h3>
              </div>
              <div className="p-6 bg-ai-blue/10">
                <h3 className="text-xl font-bold text-ai-blue">
                  Наш Кастомный AI Агент
                </h3>
              </div>

              {/* Row 1 */}
              <div className="p-6 border-r border-ai-purple/20 border-t border-gray-600/20">
                <div className="flex items-start gap-3">
                  <Icon
                    name="MessageSquare"
                    size={20}
                    className="text-ai-purple mt-1"
                  />
                  <span className="text-gray-300">
                    Обработка сложного запроса клиента
                  </span>
                </div>
              </div>
              <div className="p-6 border-r border-gray-600/20 border-t border-gray-600/20">
                <span className="text-gray-400">Шаблонный ответ</span>
              </div>
              <div className="p-6 border-t border-gray-600/20">
                <span className="text-ai-blue">
                  Анализирует историю, данные CRM,{" "}
                  <strong>принимает решение</strong> по скидке/возврату,{" "}
                  <strong>интегрирует</strong> результат в систему
                </span>
              </div>

              {/* Row 2 */}
              <div className="p-6 border-r border-ai-purple/20 border-t border-gray-600/20">
                <div className="flex items-start gap-3">
                  <Icon
                    name="TrendingUp"
                    size={20}
                    className="text-ai-purple mt-1"
                  />
                  <span className="text-gray-300">
                    Мониторинг рисков (финансы)
                  </span>
                </div>
              </div>
              <div className="p-6 border-r border-gray-600/20 border-t border-gray-600/20">
                <span className="text-gray-400">Уведомление о пороге</span>
              </div>
              <div className="p-6 border-t border-gray-600/20">
                <span className="text-ai-blue">
                  Анализирует рынок в реальном времени,{" "}
                  <strong>прогнозирует</strong> риск,{" "}
                  <strong>автономно выполняет</strong> хеджирующую сделку в
                  рамках правил
                </span>
              </div>

              {/* Row 3 */}
              <div className="p-6 border-r border-ai-purple/20 border-t border-gray-600/20">
                <div className="flex items-start gap-3">
                  <Icon
                    name="Truck"
                    size={20}
                    className="text-ai-purple mt-1"
                  />
                  <span className="text-gray-300">
                    Управление цепочкой поставок
                  </span>
                </div>
              </div>
              <div className="p-6 border-r border-gray-600/20 border-t border-gray-600/20">
                <span className="text-gray-400">Статус заказа</span>
              </div>
              <div className="p-6 border-t border-gray-600/20">
                <span className="text-ai-blue">
                  <strong>Прогнозирует</strong> сбои,{" "}
                  <strong>автономно перенаправляет</strong> грузы,{" "}
                  <strong>договаривается</strong> через API с альтернативными
                  поставщиками, <strong>оптимизирует</strong> затраты
                </span>
              </div>

              {/* Row 4 */}
              <div className="p-6 border-r border-ai-purple/20 border-t border-gray-600/20">
                <div className="flex items-start gap-3">
                  <Icon
                    name="Target"
                    size={20}
                    className="text-ai-purple mt-1"
                  />
                  <span className="text-gray-300">
                    Персонализация маркетинга
                  </span>
                </div>
              </div>
              <div className="p-6 border-r border-gray-600/20 border-t border-gray-600/20">
                <span className="text-gray-400">Сегментарная рассылка</span>
              </div>
              <div className="p-6 border-t border-gray-600/20">
                <span className="text-ai-blue">
                  <strong>Анализирует</strong> поведение в реальном времени,{" "}
                  <strong>динамически генерирует</strong> оффер,{" "}
                  <strong>автономно запускает</strong> кампанию в нужном канале,{" "}
                  <strong>считает</strong> ROI
                </span>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-xl text-ai-cyan font-semibold">
              Наши агенты – это{" "}
              <strong>стратегический уровень автоматизации</strong>, где ИИ
              действует на основе интеллекта, а не просто отвечает.
            </p>
          </div>
        </div>
      </section>

      {/* Architecture Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, rgba(139, 92, 246, 0.3) 1px, transparent 0)`,
              backgroundSize: "40px 40px",
            }}
          ></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-montserrat font-bold mb-6 text-white">
              Не Магия, а Кастомная Архитектура Премиум-Класса
            </h2>
          </div>

          <div className="max-w-5xl mx-auto">
            {/* Central Brain */}
            <div className="relative">
              <div className="flex justify-center mb-16">
                <div className="relative">
                  <div className="w-64 h-64 rounded-full bg-ai-gradient p-8 shadow-2xl">
                    <div className="w-full h-full rounded-full border-2 border-white/30 flex items-center justify-center">
                      <div className="text-center">
                        <Icon
                          name="Brain"
                          size={48}
                          className="text-white mx-auto mb-3"
                        />
                        <div className="text-sm font-semibold text-white">
                          Мозг Агента
                        </div>
                        <div className="text-xs text-white/70">
                          Кастомная LLM
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute -inset-4 rounded-full border-2 border-ai-purple/30 animate-pulse"></div>
                  <div className="absolute -inset-8 rounded-full border border-ai-blue/20 animate-pulse delay-1000"></div>
                </div>
              </div>

              {/* Connected Elements */}
              <div className="grid lg:grid-cols-4 gap-8 mb-16">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-ai-purple/20 border border-ai-purple/40 flex items-center justify-center mx-auto mb-4">
                    <Icon name="Radar" size={24} className="text-ai-purple" />
                  </div>
                  <h4 className="text-lg font-semibold text-ai-purple mb-2">
                    Восприятие
                  </h4>
                  <p className="text-sm text-gray-400">
                    API, Датчики, Документы
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-ai-blue/20 border border-ai-blue/40 flex items-center justify-center mx-auto mb-4">
                    <Icon name="Zap" size={24} className="text-ai-blue" />
                  </div>
                  <h4 className="text-lg font-semibold text-ai-blue mb-2">
                    Анализ & Решение
                  </h4>
                  <p className="text-sm text-gray-400">
                    ML-модели, Бизнес-правила
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-ai-cyan/20 border border-ai-cyan/40 flex items-center justify-center mx-auto mb-4">
                    <Icon name="Settings" size={24} className="text-ai-cyan" />
                  </div>
                  <h4 className="text-lg font-semibold text-ai-cyan mb-2">
                    Действие
                  </h4>
                  <p className="text-sm text-gray-400">
                    Интеграции с CRM/ERP, Внешние сервисы
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-green-500/20 border border-green-500/40 flex items-center justify-center mx-auto mb-4">
                    <Icon
                      name="BookOpen"
                      size={24}
                      className="text-green-400"
                    />
                  </div>
                  <h4 className="text-lg font-semibold text-green-400 mb-2">
                    Обучение
                  </h4>
                  <p className="text-sm text-gray-400">
                    Обратная связь, Новые данные
                  </p>
                </div>
              </div>

              {/* Key Advantages */}
              <div className="grid lg:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-ai-purple/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <Icon name="Cpu" size={16} className="text-ai-purple" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">
                        Полная Кастомизация "Мышления"
                      </h4>
                      <p className="text-gray-400">
                        Под ваши процессы, лексику, KPI. Не адаптация, а
                        создание.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-ai-blue/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <Icon name="Network" size={16} className="text-ai-blue" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">
                        Глубокая Системная Интеграция
                      </h4>
                      <p className="text-gray-400">
                        Агент – часть вашей IT-экосистемы, а не надстройка.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-ai-cyan/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <Icon name="Clock" size={16} className="text-ai-cyan" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">
                        Автономное Выполнение Цепочек Задач
                      </h4>
                      <p className="text-gray-400">
                        От получения ввода до финального действия и отчетности.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-yellow-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <Icon
                        name="Lightbulb"
                        size={16}
                        className="text-yellow-400"
                      />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">
                        Контекстное Принятие Решений
                      </h4>
                      <p className="text-gray-400">
                        На основе ваших данных, правил и целей.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <Icon
                        name="TrendingUp"
                        size={16}
                        className="text-green-400"
                      />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">
                        Непрерывное Самообучение
                      </h4>
                      <p className="text-gray-400">
                        Улучшается на новых данных и фидбэке под контролем.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <Icon name="Shield" size={16} className="text-red-400" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">
                        Предсказуемая Безопасность
                      </h4>
                      <p className="text-gray-400">
                        Четкие рамки автономии, логирование, контроль.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Cases */}
      <section className="py-24 bg-ai-darker/50 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-montserrat font-bold mb-6 text-white">
              Где Ваш Агент Принесет Миллионы?
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Не теория. Измеримая эффективность в реальных задачах.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Financial Case */}
            <div className="bg-ai-dark/80 rounded-2xl p-8 border border-ai-purple/20 hover:border-ai-purple/40 transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-ai-purple/20 flex items-center justify-center">
                  <Icon
                    name="TrendingUp"
                    size={24}
                    className="text-ai-purple"
                  />
                </div>
                <h3 className="text-2xl font-bold text-ai-purple">
                  Финансы (Трейдинг & Риски)
                </h3>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">
                    Задача:
                  </h4>
                  <p className="text-gray-400">
                    Оперативное хеджирование волатильных рисков
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">
                    Агент:
                  </h4>
                  <p className="text-gray-400">
                    Мониторит рынки 24/7,{" "}
                    <strong className="text-ai-purple">
                      автономно исполняет
                    </strong>{" "}
                    хедж-стратегии в рамках лимитов
                  </p>
                </div>
                <div className="bg-ai-purple/10 rounded-lg p-4">
                  <h4 className="text-lg font-semibold text-ai-purple mb-2">
                    Результат:
                  </h4>
                  <p className="text-white">
                    <strong className="text-ai-cyan">
                      Снижение потерь на 35%
                    </strong>
                    ,{" "}
                    <strong className="text-ai-cyan">
                      высвобождение 5 трейдеров FTE
                    </strong>
                  </p>
                </div>
              </div>
            </div>

            {/* Support Case */}
            <div className="bg-ai-dark/80 rounded-2xl p-8 border border-ai-blue/20 hover:border-ai-blue/40 transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-ai-blue/20 flex items-center justify-center">
                  <Icon name="Headphones" size={24} className="text-ai-blue" />
                </div>
                <h3 className="text-2xl font-bold text-ai-blue">
                  Премиум-Поддержка (B2B SaaS)
                </h3>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">
                    Задача:
                  </h4>
                  <p className="text-gray-400">
                    Решение сложных нестандартных инцидентов клиентов
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">
                    Агент:
                  </h4>
                  <p className="text-gray-400">
                    Анализирует лог-файлы, историю, базу знаний;{" "}
                    <strong className="text-ai-blue">диагностирует</strong>{" "}
                    корень проблемы,{" "}
                    <strong className="text-ai-blue">предлагает</strong> решение
                  </p>
                </div>
                <div className="bg-ai-blue/10 rounded-lg p-4">
                  <h4 className="text-lg font-semibold text-ai-blue mb-2">
                    Результат:
                  </h4>
                  <p className="text-white">
                    <strong className="text-ai-cyan">
                      Сокращение TTR на 50%
                    </strong>
                    , <strong className="text-ai-cyan">NPS +40 пунктов</strong>
                  </p>
                </div>
              </div>
            </div>

            {/* Logistics Case */}
            <div className="bg-ai-dark/80 rounded-2xl p-8 border border-ai-cyan/20 hover:border-ai-cyan/40 transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-ai-cyan/20 flex items-center justify-center">
                  <Icon name="Truck" size={24} className="text-ai-cyan" />
                </div>
                <h3 className="text-2xl font-bold text-ai-cyan">
                  Логистика (Умный Склад)
                </h3>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">
                    Задача:
                  </h4>
                  <p className="text-gray-400">
                    Оптимизация размещения, комплектации, маршрутизации
                    погрузчиков в реальном времени
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">
                    Агент:
                  </h4>
                  <p className="text-gray-400">
                    Анализирует заказы, GPS-метки, загрузку;{" "}
                    <strong className="text-ai-cyan">
                      динамически пересчитывает
                    </strong>{" "}
                    планы,{" "}
                    <strong className="text-ai-cyan">отдает команды</strong>{" "}
                    системам
                  </p>
                </div>
                <div className="bg-ai-cyan/10 rounded-lg p-4">
                  <h4 className="text-lg font-semibold text-ai-cyan mb-2">
                    Результат:
                  </h4>
                  <p className="text-white">
                    <strong className="text-ai-purple">
                      Рост пропускной способности на 25%
                    </strong>
                    ,{" "}
                    <strong className="text-ai-purple">
                      снижение затрат на 18%
                    </strong>
                  </p>
                </div>
              </div>
            </div>

            {/* Marketing Case */}
            <div className="bg-ai-dark/80 rounded-2xl p-8 border border-yellow-500/20 hover:border-yellow-500/40 transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-yellow-500/20 flex items-center justify-center">
                  <Icon name="Target" size={24} className="text-yellow-400" />
                </div>
                <h3 className="text-2xl font-bold text-yellow-400">
                  Персонализированный Маркетинг
                </h3>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">
                    Задача:
                  </h4>
                  <p className="text-gray-400">
                    Гиперперсонализация офферов для VIC (Very Important Clients)
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">
                    Агент:
                  </h4>
                  <p className="text-gray-400">
                    Анализирует покупки, предпочтения, соц. сигналы;{" "}
                    <strong className="text-yellow-400">генерирует</strong>{" "}
                    уникальные предложения,{" "}
                    <strong className="text-yellow-400">
                      автономно запускает
                    </strong>{" "}
                    кампанию
                  </p>
                </div>
                <div className="bg-yellow-500/10 rounded-lg p-4">
                  <h4 className="text-lg font-semibold text-yellow-400 mb-2">
                    Результат:
                  </h4>
                  <p className="text-white">
                    <strong className="text-ai-cyan">
                      Рост конверсии VIC на 70%
                    </strong>
                    ,{" "}
                    <strong className="text-ai-cyan">
                      увеличение среднего чека на 45%
                    </strong>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-xl text-ai-purple font-semibold">
              Ваша задача уникальна?{" "}
              <strong className="text-white">
                Спроектируем агента, который ее решит.
              </strong>{" "}
              Рассчитаем ваш потенциальный ROI.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-ai-purple/30 via-ai-dark to-ai-blue/30"></div>
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-ai-purple/20 blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-72 h-72 rounded-full bg-ai-blue/20 blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-montserrat font-bold mb-8 text-white">
              Почему Кастомный Агент - Ваше Конкурентное Преимущество?
            </h2>

            <h3 className="text-2xl lg:text-3xl font-semibold mb-12 text-ai-cyan">
              Дороже Шаблона? Да. Бесценен в Борьбе за Лидерство? Абсолютно.
            </h3>

            <div className="space-y-8 mb-16 text-left max-w-3xl mx-auto">
              <p className="text-xl text-gray-300 leading-relaxed">
                "В эпоху ИИ побеждает не тот, кто использует технологии, а тот,
                кто{" "}
                <strong className="text-ai-purple">
                  владеет эксклюзивными технологиями
                </strong>
                ."
              </p>
              <p className="text-xl text-gray-300 leading-relaxed">
                "Наши кастомные AI агенты – это не софт, это{" "}
                <strong className="text-ai-blue">
                  ваш секретный стратегический ресурс
                </strong>
                , созданный для решения задач, которые конкуренты даже не могут
                автоматизировать."
              </p>
              <p className="text-xl text-gray-300 leading-relaxed">
                "
                <strong className="text-ai-cyan">
                  Инвестируйте не в автоматизацию рутины, а в интеллектуальную
                  мощь
                </strong>
                , которая работает на вас 24/7 и приносит измеримую
                многомиллионную выгоду."
              </p>
            </div>

            <div className="text-center">
              <h3 className="text-3xl font-bold text-white mb-6">
                Готовы Запустить Своего Первого Виртуального Топ-Сотрудника?
              </h3>
              <p className="text-xl text-gray-300 mb-8">
                Получите эксклюзивную презентацию с расчетом ROI именно под ваши
                бизнес-задачи
              </p>
              <Button className="px-12 py-6 text-xl font-bold bg-ai-gradient hover:scale-105 transition-all duration-300 shadow-2xl">
                <Icon name="Zap" size={28} className="mr-3" />
                Создать Супер-Агента
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIAgents;
