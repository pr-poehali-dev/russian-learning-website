import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import Icon from "@/components/ui/icon";

const FeatureCards = () => {
  const features = [
    {
      icon: "Type",
      title: "Русский алфавит",
      description: "Изучите все 33 буквы русского алфавита с произношением",
      progress: 0,
      lessons: 10,
      level: "Начинающий",
      color: "bg-green-100 text-green-700",
    },
    {
      icon: "MessageSquare",
      title: "Базовые слова",
      description:
        "Освойте 500+ самых важных русских слов для повседневного общения",
      progress: 0,
      lessons: 25,
      level: "Начинающий",
      color: "bg-blue-100 text-blue-700",
    },
    {
      icon: "FileText",
      title: "Правила грамматики",
      description: "Понимайте падежи, времена глаголов и структуру предложений",
      progress: 0,
      lessons: 40,
      level: "Средний",
      color: "bg-yellow-100 text-yellow-700",
    },
    {
      icon: "Volume2",
      title: "Произношение",
      description: "Научитесь правильно произносить звуки и ударения",
      progress: 0,
      lessons: 15,
      level: "Все уровни",
      color: "bg-purple-100 text-purple-700",
    },
    {
      icon: "MessageCircle",
      title: "Разговорная практика",
      description: "Развивайте навыки общения через диалоги и ролевые игры",
      progress: 0,
      lessons: 30,
      level: "Продвинутый",
      color: "bg-pink-100 text-pink-700",
    },
    {
      icon: "BookOpen",
      title: "Чтение текстов",
      description: "Читайте адаптированные тексты и улучшайте понимание",
      progress: 0,
      lessons: 20,
      level: "Средний",
      color: "bg-orange-100 text-orange-700",
    },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Модули обучения
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Выберите направление, которое вас интересует, и начните изучение
            русского языка уже сегодня
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer group"
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon
                      name={feature.icon as any}
                      size={24}
                      className="text-white"
                    />
                  </div>
                  <Badge className={feature.color}>{feature.level}</Badge>
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
                <CardDescription className="text-gray-600">
                  {feature.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">Прогресс</span>
                    <span className="font-medium">{feature.progress}%</span>
                  </div>
                  <Progress value={feature.progress} className="h-2" />
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center space-x-1">
                      <Icon
                        name="BookOpen"
                        size={14}
                        className="text-gray-400"
                      />
                      <span className="text-gray-500">
                        {feature.lessons} уроков
                      </span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Icon name="Clock" size={14} className="text-gray-400" />
                      <span className="text-gray-500">
                        ~{feature.lessons * 15} мин
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureCards;
