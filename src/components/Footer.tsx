import React from "react";
import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="py-16 bg-ai-darker relative overflow-hidden">
      {/* Background Pattern */}
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
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-3 gap-12 mb-12">
          {/* Brand Section */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-ai-gradient">
                <Icon name="Brain" size={24} className="text-white" />
              </div>
              <h3 className="text-2xl font-montserrat font-bold text-white">
                AI Solutions Architect
              </h3>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">
              Кастомный AI. Максимальная эффективность. Интеграции без границ.
              Создаем эксклюзивные решения, которые становятся вашим
              конкурентным преимуществом.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="p-2 rounded-lg bg-ai-purple/20 border border-ai-purple/30 hover:bg-ai-purple/30 transition-colors duration-300"
              >
                <Icon name="Mail" size={20} className="text-ai-purple" />
              </a>
              <a
                href="#"
                className="p-2 rounded-lg bg-ai-blue/20 border border-ai-blue/30 hover:bg-ai-blue/30 transition-colors duration-300"
              >
                <Icon name="Phone" size={20} className="text-ai-blue" />
              </a>
              <a
                href="#"
                className="p-2 rounded-lg bg-ai-pink/20 border border-ai-pink/30 hover:bg-ai-pink/30 transition-colors duration-300"
              >
                <Icon name="MessageCircle" size={20} className="text-ai-pink" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-montserrat font-semibold text-white mb-6">
              Наши Решения
            </h4>
            <ul className="space-y-3">
              <li key={0}>
                <a
                  href="/ai-agents"
                  className="text-gray-400 hover:text-ai-purple transition-colors duration-300"
                >
                  Кастомные AI-агенты
                </a>
              </li>
              {[
                "Интеллектуальная автоматизация",
                "Предиктивная аналитика",
                "AI-интеграции",
                "Виртуальные сотрудники",
                "Оптимизация процессов",
              ].map((service, index) => (
                <li key={index + 1}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-ai-purple transition-colors duration-300 flex items-center gap-2"
                  >
                    <Icon name="ChevronRight" size={14} />
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-montserrat font-semibold text-white mb-6">
              Контакты
            </h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Icon name="Mail" size={20} className="text-ai-purple" />
                <span className="text-gray-400">ai@solutions-architect.ru</span>
              </div>
              <div className="flex items-center gap-3">
                <Icon name="Phone" size={20} className="text-ai-blue" />
                <span className="text-gray-400">+7 (495) 123-45-67</span>
              </div>
              <div className="flex items-center gap-3">
                <Icon name="MapPin" size={20} className="text-ai-pink" />
                <span className="text-gray-400">Москва, Россия</span>
              </div>
            </div>

            {/* CTA Button */}
            <div className="mt-8">
              <button className="ai-button px-6 py-3 rounded-lg text-white font-semibold text-sm flex items-center gap-2 hover-scale">
                <Icon name="Zap" size={16} />
                Начать Проект
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © 2024 AI Solutions Architect. Все права защищены.
            </p>
            <div className="flex gap-6 text-sm">
              <a
                href="#"
                className="text-gray-500 hover:text-ai-purple transition-colors duration-300"
              >
                Политика конфиденциальности
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-ai-purple transition-colors duration-300"
              >
                Условия использования
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-10 left-10 w-20 h-20 border border-ai-purple/20 rounded-full animate-pulse-glow"></div>
      <div
        className="absolute top-10 right-10 w-16 h-16 border border-ai-blue/20 rounded-full animate-pulse-glow"
        style={{ animationDelay: "1s" }}
      ></div>
    </footer>
  );
};

export default Footer;
