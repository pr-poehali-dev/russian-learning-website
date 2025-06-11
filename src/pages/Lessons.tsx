import React from "react";
import Layout from "@/components/Layout";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";

const Lessons = () => {
  const lessonCategories = [
    {
      level: "beginner",
      title: "Начинающий",
      description: "Основы русского языка",
      lessons: [
        {
          title: "Русский алфавит",
          description: "Изучение букв и звуков",
          duration: "15 мин",
          progress: 100,
          completed: true,
        },
        {
          title: "Приветствие и знакомство",
          description: "Как поздороваться и представиться",
          duration: "20 мин",
          progress: 75,
          completed: false,
        },
        {
          title: "Числа 1-10",
          description: "Учимся считать по-русски",
          duration: "12 мин",
          progress: 50,
          completed: false,
        },
        {
          title: "Семья и родственники",
          description: "Названия членов семьи",
          duration: "18 мин",
          progress: 0,
          completed: false,
        },
      ],
    },
    {
      level: "intermediate",
      title: "Средний",
      description: "Развитие навыков общения",
      lessons: [
        {
          title: "Падежи: именительный и винительный",
          description: "Основы склонения существительных",
          duration: "25 мин",
          progress: 30,
          completed: false,
        },
        {
          title: "Глаголы движения",
          description: "Идти, ехать, лететь и другие",
          duration: "22 мин",
          progress: 0,
          completed: false,
        },
        {
          title: "В магазине",
          description: "Покупки и общение с продавцом",
          duration: "20 мин",
          progress: 0,
          completed: false,
        },
        {
          title: "Время и дни недели",
          description: "Как говорить время и планировать",
          duration: "15 мин",
          progress: 0,
          completed: false,
        },
      ],
    },
    {
      level: "advanced",
      title: "Продвинутый",
      description: "Свободное владение языком",
      lessons: [
        {
          title: "Сложные времена глаголов",
          description: "Совершенный и несовершенный вид",
          duration: "30 мин",
          progress: 0,
          completed: false,
        },
        {
          title: "Деловое общение",
          description: "Русский язык в бизнесе",
          duration: "28 мин",
          progress: 0,
          completed: false,
        },
        {
          title: "Литература и поэзия",
          description: "Чтение классических произведений",
          duration: "35 мин",
          progress: 0,
          completed: false,
        },
        {
          title: "Идиомы и поговорки",
          description: "Фразеологизмы русского языка",
          duration: "25 мин",
          progress: 0,
          completed: false,
        },
      ],
    },
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">Уроки русского языка</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Структурированная программа обучения от алфавита до свободного
            общения
          </p>
        </div>

        <Tabs defaultValue="beginner" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="beginner">Начинающий</TabsTrigger>
            <TabsTrigger value="intermediate">Средний</TabsTrigger>
            <TabsTrigger value="advanced">Продвинутый</TabsTrigger>
          </TabsList>

          {lessonCategories.map((category) => (
            <TabsContent key={category.level} value={category.level}>
              <div className="mb-6">
                <h2 className="text-2xl font-bold mb-2">{category.title}</h2>
                <p className="text-gray-600">{category.description}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {category.lessons.map((lesson, index) => (
                  <Card
                    key={index}
                    className="hover:shadow-lg transition-shadow"
                  >
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <CardTitle className="flex items-center space-x-2">
                            <span>{lesson.title}</span>
                            {lesson.completed && (
                              <Icon
                                name="CheckCircle"
                                size={20}
                                className="text-green-600"
                              />
                            )}
                          </CardTitle>
                          <CardDescription className="mt-2">
                            {lesson.description}
                          </CardDescription>
                        </div>
                        <Badge
                          variant={lesson.completed ? "default" : "secondary"}
                        >
                          {lesson.completed ? "Завершено" : "В процессе"}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between text-sm text-gray-500">
                          <div className="flex items-center space-x-1">
                            <Icon name="Clock" size={16} />
                            <span>{lesson.duration}</span>
                          </div>
                          <span>{lesson.progress}% завершено</span>
                        </div>

                        <Progress value={lesson.progress} className="h-2" />

                        <Button
                          className="w-full"
                          variant={lesson.completed ? "outline" : "default"}
                        >
                          <Icon
                            name={lesson.completed ? "RotateCcw" : "Play"}
                            size={16}
                            className="mr-2"
                          />
                          {lesson.completed
                            ? "Повторить"
                            : lesson.progress > 0
                              ? "Продолжить"
                              : "Начать"}
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </Layout>
  );
};

export default Lessons;
