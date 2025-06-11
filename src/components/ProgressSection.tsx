import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const ProgressSection = () => {
  const progressData = [
    { category: "Алфавит", progress: 85, total: 33, completed: 28 },
    { category: "Базовая лексика", progress: 45, total: 500, completed: 225 },
    { category: "Грамматика", progress: 25, total: 40, completed: 10 },
    { category: "Произношение", progress: 60, total: 100, completed: 60 },
  ];

  const achievements = [
    {
      title: "Первые шаги",
      description: "Изучено 10 букв алфавита",
      icon: "Star",
      earned: true,
    },
    {
      title: "Знаток слов",
      description: "Выучено 100 новых слов",
      icon: "BookOpen",
      earned: true,
    },
    {
      title: "Говорун",
      description: "Завершено 5 разговорных уроков",
      icon: "MessageCircle",
      earned: false,
    },
    {
      title: "Грамотей",
      description: "Освоено 3 падежа",
      icon: "FileText",
      earned: false,
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ваш прогресс</h2>
          <p className="text-xl text-gray-600">
            Отслеживайте свои достижения и мотивируйтесь двигаться дальше
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Progress Overview */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Icon name="TrendingUp" size={24} className="text-purple-600" />
                <span>Общий прогресс</span>
              </CardTitle>
              <CardDescription>
                Ваши успехи по всем направлениям обучения
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {progressData.map((item, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-medium">{item.category}</span>
                    <span className="text-sm text-gray-500">
                      {item.completed}/{item.total}
                    </span>
                  </div>
                  <Progress value={item.progress} className="h-3" />
                  <p className="text-sm text-gray-600">
                    {item.progress}% завершено
                  </p>
                </div>
              ))}

              <div className="pt-4 border-t">
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600 mb-1">
                    54%
                  </div>
                  <p className="text-gray-600">Общий прогресс курса</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Achievements */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Icon name="Award" size={24} className="text-yellow-600" />
                <span>Достижения</span>
              </CardTitle>
              <CardDescription>
                Ваши награды и заслуженные звания
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className={`flex items-center space-x-3 p-3 rounded-lg transition-all ${
                    achievement.earned
                      ? "bg-green-50 border border-green-200"
                      : "bg-gray-50 border border-gray-200 opacity-60"
                  }`}
                >
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      achievement.earned
                        ? "bg-green-100 text-green-600"
                        : "bg-gray-100 text-gray-400"
                    }`}
                  >
                    <Icon name={achievement.icon as any} size={20} />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium">{achievement.title}</h4>
                    <p className="text-sm text-gray-600">
                      {achievement.description}
                    </p>
                  </div>
                  {achievement.earned && (
                    <Icon
                      name="CheckCircle"
                      size={20}
                      className="text-green-600"
                    />
                  )}
                </div>
              ))}

              <div className="pt-4 text-center">
                <Button variant="outline" className="w-full">
                  <Icon name="Trophy" size={16} className="mr-2" />
                  Посмотреть все достижения
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <Card className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">
                Готовы продолжить обучение?
              </h3>
              <p className="text-purple-100 mb-6 max-w-2xl mx-auto">
                Не останавливайтесь на достигнутом! Продолжайте изучать русский
                язык и открывайте новые возможности.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  variant="secondary"
                  className="bg-white text-purple-600 hover:bg-gray-100"
                >
                  <Icon name="Play" size={20} className="mr-2" />
                  Продолжить урок
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10"
                >
                  <Icon name="Calendar" size={20} className="mr-2" />
                  Запланировать занятие
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProgressSection;
