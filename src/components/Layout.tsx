import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import Icon from "@/components/ui/icon";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-50">
      <header className="bg-white/90 backdrop-blur-sm border-b shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">РУ</span>
              </div>
              <span className="text-xl font-bold text-gray-900">
                РусскийЯзык
              </span>
            </Link>

            <nav className="hidden md:flex items-center space-x-6">
              <Link
                to="/"
                className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition-colors ${
                  isActive("/")
                    ? "bg-purple-100 text-purple-700"
                    : "hover:bg-gray-100"
                }`}
              >
                <Icon name="Home" size={16} />
                <span>Главная</span>
              </Link>
              <Link
                to="/lessons"
                className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition-colors ${
                  isActive("/lessons")
                    ? "bg-purple-100 text-purple-700"
                    : "hover:bg-gray-100"
                }`}
              >
                <Icon name="BookOpen" size={16} />
                <span>Уроки</span>
              </Link>
              <Link
                to="/vocabulary"
                className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition-colors ${
                  isActive("/vocabulary")
                    ? "bg-purple-100 text-purple-700"
                    : "hover:bg-gray-100"
                }`}
              >
                <Icon name="Brain" size={16} />
                <span>Словарь</span>
              </Link>
              <Link
                to="/grammar"
                className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition-colors ${
                  isActive("/grammar")
                    ? "bg-purple-100 text-purple-700"
                    : "hover:bg-gray-100"
                }`}
              >
                <Icon name="FileText" size={16} />
                <span>Грамматика</span>
              </Link>
              <Link
                to="/practice"
                className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition-colors ${
                  isActive("/practice")
                    ? "bg-purple-100 text-purple-700"
                    : "hover:bg-gray-100"
                }`}
              >
                <Icon name="Target" size={16} />
                <span>Практика</span>
              </Link>
            </nav>

            <Button className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700">
              Войти
            </Button>
          </div>
        </div>
      </header>

      <main>{children}</main>

      <footer className="bg-gray-900 text-white py-12 mt-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">РУ</span>
                </div>
                <span className="text-xl font-bold">РусскийЯзык</span>
              </div>
              <p className="text-gray-400">
                Изучайте русский язык легко и эффективно
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Обучение</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link to="/lessons" className="hover:text-white">
                    Уроки
                  </Link>
                </li>
                <li>
                  <Link to="/vocabulary" className="hover:text-white">
                    Словарь
                  </Link>
                </li>
                <li>
                  <Link to="/grammar" className="hover:text-white">
                    Грамматика
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Поддержка</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    Помощь
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Контакты
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Связаться</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <Icon name="Mail" size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <Icon name="MessageCircle" size={20} />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 РусскийЯзык. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
