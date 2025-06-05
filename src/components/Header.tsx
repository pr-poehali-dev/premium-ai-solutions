import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Icon from "@/components/ui/icon";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Главная", path: "/" },
    { name: "AI Агенты", path: "/ai-agents" },
    { name: "Кейсы", path: "#cases" },
    { name: "Контакты", path: "#contacts" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-ai-darker/95 backdrop-blur-md border-b border-ai-purple/20"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="p-2 rounded-lg bg-ai-gradient group-hover:scale-105 transition-transform duration-300">
              <Icon name="Brain" size={24} className="text-white" />
            </div>
            <span className="text-xl font-montserrat font-bold text-white">
              AI Solutions Architect
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative text-sm font-medium transition-colors duration-300 hover:text-ai-blue ${
                  location.pathname === item.path
                    ? "text-ai-blue"
                    : "text-gray-300"
                }`}
              >
                {item.name}
                {location.pathname === item.path && (
                  <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-ai-gradient rounded-full"></div>
                )}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <button className="px-6 py-3 bg-ai-gradient text-white font-medium rounded-lg hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-ai-purple/25">
              Получить консультацию
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-white hover:text-ai-blue transition-colors duration-300"
          >
            <Icon name={isMobileMenuOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-ai-darker/95 backdrop-blur-md border-b border-ai-purple/20 animate-fade-in">
            <nav className="container mx-auto px-6 py-6">
              <div className="flex flex-col gap-4">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`text-lg font-medium transition-colors duration-300 hover:text-ai-blue ${
                      location.pathname === item.path
                        ? "text-ai-blue"
                        : "text-gray-300"
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
                <button className="mt-4 px-6 py-3 bg-ai-gradient text-white font-medium rounded-lg hover:scale-105 transition-all duration-300 shadow-lg">
                  Получить консультацию
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
