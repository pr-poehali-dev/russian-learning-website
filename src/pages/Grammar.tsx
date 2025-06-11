import React from "react";
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
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Icon from "@/components/ui/icon";

const Grammar = () => {
  const grammarTopics = [
    {
      title: "Падежи в русском языке",
      level: "A2-B1",
      progress: 25,
      description: "Изучение шести падежей и их использования",
      subtopics: [
        {
          title: "Именительный падеж",
          example: "Это студент.",
          difficulty: "легко",
        },
        {
          title: "Родительный падеж",
          example: "У меня нет времени.",
          difficulty: "средне",
        },
        {
          title: "Дательный падеж",
          example: "Я дарю подарок маме.",
          difficulty: "средне",
        },
        {
          title: "Винительный падеж",
          example: "Я читаю книгу.",
          difficulty: "легко",
        },
        {
          title: "Творительный падеж",
          example: "Пишу ручкой.",
          difficulty: "сложно",
        },
        {
          title: "Предложный падеж",
          example: "Думаю о работе.",
          difficulty: "средне",
        },
      ],
    },
    {
      title: "Времена глаголов",
      level: "A1-A2",
      progress: 60,
      description: "Настоящее, прошедшее и будущее время",
      subtopics: [
        {
          title: "Настоящее время",
          example: "Я работаю в офисе.",
          difficulty: "легко",
        },
        {
          title: "Прошедшее время",
          example: "Вчера я читал книгу.",
          difficulty: "средне",
        },
        {
          title: "Будущее время",
          example: "Завтра буду учиться.",
          difficulty: "средне",
        },
      ],
    },
    {
      title: "Виды глаголов",
      level: "B1-B2",
      progress: 10,
      description: "Совершенный и несовершенный вид",
      subtopics: [
        {
          title: "Несовершенный вид",
          example: "Я читаю каждый день.",
          difficulty: "средне",
        },
        {
          title: "Совершенный вид",
          example: "Я прочитал книгу.",
          difficulty: "сложно",
        },
        {
          title: "Пары глаголов",
          example: "делать - сделать",
          difficulty: "сложно",
        },
      ],
    },
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "легко":
        return "bg-green-100 text-green-700";
      case "средне":
        return "bg-yellow-100 text-yellow-700";
      case "сложно":
        return "bg-red-100 text-red-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">Грамматика русского языка</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Изучайте правила и структуру русского языка от простого к сложному
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Icon name="BookOpen" size={24} className="text-purple-600" />
                <span>Темы грамматики</span>
              </CardTitle>
              <CardDescription>Выберите тему для изучения</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {grammarTopics.map((topic, index) => (
                  <Card key={index} className="border-l-4 border-l-purple-500">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <CardTitle className="text-lg mb-2">
                            {topic.title}
                          </CardTitle>
                          <CardDescription>{topic.description}</CardDescription>
                        </div>
                        <Badge variant="outline">{topic.level}</Badge>
                      </div>
                      <div className="mt-4">
                        <div className="flex items-center justify-between text-sm mb-2">
                          <span>Прогресс изучения</span>
                          <span>{topic.progress}%</span>
                        </div>
                        <Progress value={topic.progress} className="h-2" />
                      </div>
                    </CardHeader>
                    <CardContent>
                      <Accordion type="single" collapsible>
                        <AccordionItem value="subtopics">
                          <AccordionTrigger className="text-sm">
                            Подтемы ({topic.subtopics.length})
                          </AccordionTrigger>
                          <AccordionContent>
                            <div className="space-y-3">
                              {topic.subtopics.map((subtopic, subIndex) => (
                                <div
                                  key={subIndex}
                                  className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                                >
                                  <div className="flex-1">
                                    <h4 className="font-medium">
                                      {subtopic.title}
                                    </h4>
                                    <p className="text-sm text-gray-600 italic">
                                      "{subtopic.example}"
                                    </p>
                                  </div>
                                  <Badge
                                    className={getDifficultyColor(
                                      subtopic.difficulty,
                                    )}
                                  >
                                    {subtopic.difficulty}
                                  </Badge>
                                </div>
                              ))}
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                      <div className="mt-4 flex space-x-2">
                        <Button className="flex-1">
                          <Icon name="Play" size={16} className="mr-2" />
                          {topic.progress > 0
                            ? "Продолжить"
                            : "Начать изучение"}
                        </Button>
                        <Button variant="outline">
                          <Icon name="FileText" size={16} className="mr-2" />
                          Теория
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Icon name="Target" size={20} className="text-green-600" />
                  <span>Быстрый тест</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Проверьте свои знания грамматики за 5 минут
                </p>
                <Button className="w-full" variant="outline">
                  <Icon name="Clock" size={16} className="mr-2" />
                  Начать тест
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Icon
                    name="Lightbulb"
                    size={20}
                    className="text-yellow-600"
                  />
                  <span>Совет дня</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <p className="text-sm font-medium mb-2">Падежи и предлоги</p>
                  <p className="text-sm text-gray-600">
                    Запомните: предлог "в" с винительным падежом означает
                    направление, а с предложным — местонахождение.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Icon name="TrendingUp" size={20} className="text-blue-600" />
                  <span>Статистика</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Изучено тем:</span>
                  <span className="font-medium">8/24</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Правильных ответов:</span>
                  <span className="font-medium">82%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Время изучения:</span>
                  <span className="font-medium">12 часов</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Grammar;
