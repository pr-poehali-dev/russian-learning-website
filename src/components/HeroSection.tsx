import React from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const HeroSection = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-indigo-600/10"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <span className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium mb-4">
              🇷🇺 Изучайте русский язык онлайн
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
            Добро пожаловать!
          </h1>

          <h2 className="text-2xl md:text-3xl text-gray-700 mb-4">
            Welcome to Russian Learning
          </h2>

          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Изучайте русский язык с интерактивными уроками, практическими
            упражнениями и персональным подходом. От алфавита до свободного
            общения.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-lg px-8 py-3"
            >
              <Icon name="Play" size={20} className="mr-2" />
              Начать обучение
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-lg px-8 py-3 border-purple-300 text-purple-700 hover:bg-purple-50"
            >
              <Icon name="Info" size={20} className="mr-2" />
              Узнать больше
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Icon name="Users" size={24} className="text-white" />
              </div>
              <h3 className="font-semibold text-lg mb-2">50,000+ студентов</h3>
              <p className="text-gray-600">
                Присоединяйтесь к нашему сообществу изучающих русский язык
              </p>
            </div>
            <div className="p-6">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Icon name="BookOpen" size={24} className="text-white" />
              </div>
              <h3 className="font-semibold text-lg mb-2">200+ уроков</h3>
              <p className="text-gray-600">
                Структурированная программа от начального до продвинутого уровня
              </p>
            </div>
            <div className="p-6">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Icon name="Award" size={24} className="text-white" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Сертификаты</h3>
              <p className="text-gray-600">
                Получайте официальные сертификаты о прохождении курсов
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
