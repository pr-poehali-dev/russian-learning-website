import React, { useState } from "react";
import Layout from "@/components/Layout";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import Icon from "@/components/ui/icon";

const Practice = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [score, setScore] = useState(0);

  const practiceTypes = [
    {
      type: "quiz",
      title: "Тесты и викторины",
      description: "Проверьте знания в интерактивном формате",
      icon: "HelpCircle",
      count: 25,
      difficulty: "Все уровни",
    },
    {
      type: "listening",
      title: "Аудирование",
      description: "Развивайте навыки восприятия речи на слух",
      icon: "Headphones",
      count: 15,
      difficulty: "A2-B2",
    },
    {
      type: "speaking",
      title: "Говорение",
      description: "Практикуйте произношение и речь",
      icon: "Mic",
      count: 12,
      difficulty: "B1-C1",
    },
    {
      type: "writing",
      title: "Письмо",
      description: "Изучайте письменную речь и орфографию",
      icon: "PenTool",
      count: 18,
      difficulty: "A1-B2",
    },
  ];

  const sampleQuiz = {
    question: "Выберите правильный вариант перевода слова 'дом':",
    options: ["House", "Car", "Tree", "Book"],
    correct: 0,
    explanation: "Слово 'дом' на английском языке означает 'house'",
  };

  const exercises = [
    {
      title: "Падежи: винительный падеж",
      type: "Грамматика",
      difficulty: "A2",
      questions: 10,
      timeLimit: "15 мин",
      completed: false,
      score: null,
    },
    {
      title: "Словарь: семья и родственники",
      type: "Лексика",
      difficulty: "A1",
      questions: 15,
      timeLimit: "10 мин",
      completed: true,
      score: 87,
    },
    {
      title: "Аудирование: в магазине",
      type: "Аудирование",
      difficulty: "A2",
      questions: 8,
      timeLimit: "20 мин",
      completed: false,
      score: null,
    },
    {
      title: "Произношение: сложные звуки",
      type: "Говорение",
      difficulty: "B1",
      questions: 12,
      timeLimit: "25 мин",
      completed: true,
      score: 92,
    },
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">Практика и тесты</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Закрепляйте знания через разнообразные упражнения и проверочные
            задания
          </p>
        </div>

        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="overview">Обзор</TabsTrigger>
            <TabsTrigger value="exercises">Упражнения</TabsTrigger>
            <TabsTrigger value="quiz">Быстрый тест</TabsTrigger>
          </TabsList>

          <TabsContent value="overview">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {practiceTypes.map((type, index) => (
                <Card
                  key={index}
                  className="hover:shadow-lg transition-shadow cursor-pointer group"
                >
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <Icon
                        name={type.icon as any}
                        size={32}
                        className="text-white"
                      />
                    </div>
                    <CardTitle className="text-lg">{type.title}</CardTitle>
                    <CardDescription>{type.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Упражнений:</span>
                        <span className="font-medium">{type.count}</span>
                      </div>
                      <Badge variant="outline" className="w-full">
                        {type.difficulty}
                      </Badge>
                      <Button className="w-full mt-4">
                        <Icon name="Play" size={16} className="mr-2" />
                        Начать
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <Card className="lg:col-span-2">
                <CardHeader>
                  <CardTitle>Рекомендуемые упражнения</CardTitle>
                  <CardDescription>
                    Подобранные специально для вашего уровня
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {exercises.map((exercise, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50"
                      >
                        <div className="flex-1">
                          <h4 className="font-medium">{exercise.title}</h4>
                          <div className="flex items-center space-x-4 mt-2 text-sm text-gray-600">
                            <span>{exercise.type}</span>
                            <Badge variant="secondary">
                              {exercise.difficulty}
                            </Badge>
                            <span>{exercise.questions} вопросов</span>
                            <span>{exercise.timeLimit}</span>
                          </div>
                        </div>
                        <div className="flex items-center space-x-4">
                          {exercise.completed ? (
                            <div className="text-center">
                              <div className="text-green-600 font-bold">
                                {exercise.score}%
                              </div>
                              <div className="text-xs text-gray-500">
                                Завершено
                              </div>
                            </div>
                          ) : (
                            <Button>Начать</Button>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Icon
                        name="BarChart3"
                        size={20}
                        className="text-purple-600"
                      />
                      <span>Ваша статистика</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex justify-between">
                      <span>Пройдено тестов:</span>
                      <span className="font-medium">24</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Средний балл:</span>
                      <span className="font-medium text-green-600">87%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Лучший результат:</span>
                      <span className="font-medium text-purple-600">98%</span>
                    </div>
                    <div className="pt-4">
                      <div className="text-sm text-gray-600 mb-2">
                        Прогресс недели
                      </div>
                      <Progress value={75} className="h-2" />
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Icon
                        name="Trophy"
                        size={20}
                        className="text-yellow-600"
                      />
                      <span>Достижения</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center">
                          <Icon
                            name="Star"
                            size={16}
                            className="text-yellow-600"
                          />
                        </div>
                        <span className="text-sm">Первый тест пройден</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                          <Icon
                            name="Award"
                            size={16}
                            className="text-green-600"
                          />
                        </div>
                        <span className="text-sm">10 тестов подряд</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                          <Icon
                            name="Target"
                            size={16}
                            className="text-purple-600"
                          />
                        </div>
                        <span className="text-sm">90% правильных ответов</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="exercises">
            <div className="text-center py-12">
              <Icon
                name="Construction"
                size={64}
                className="mx-auto text-gray-400 mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">
                Упражнения в разработке
              </h3>
              <p className="text-gray-600">
                Интерактивные упражнения будут доступны в ближайшее время
              </p>
            </div>
          </TabsContent>

          <TabsContent value="quiz">
            <Card className="max-w-2xl mx-auto">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Быстрый тест: Базовая лексика</CardTitle>
                  <Badge>Вопрос 1/5</Badge>
                </div>
                <Progress value={20} className="h-2" />
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium mb-4">
                    {sampleQuiz.question}
                  </h3>
                  <RadioGroup
                    value={selectedAnswer}
                    onValueChange={setSelectedAnswer}
                  >
                    {sampleQuiz.options.map((option, index) => (
                      <div
                        key={index}
                        className="flex items-center space-x-2 p-3 border rounded-lg hover:bg-gray-50"
                      >
                        <RadioGroupItem
                          value={index.toString()}
                          id={`option-${index}`}
                        />
                        <Label
                          htmlFor={`option-${index}`}
                          className="flex-1 cursor-pointer"
                        >
                          {option}
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>
                <div className="flex justify-between">
                  <Button variant="outline">
                    <Icon name="ChevronLeft" size={16} className="mr-2" />
                    Назад
                  </Button>
                  <Button disabled={!selectedAnswer}>
                    Далее
                    <Icon name="ChevronRight" size={16} className="ml-2" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default Practice;
