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
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";

const Vocabulary = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const vocabularyCategories = [
    {
      category: "basic",
      title: "Базовые слова",
      words: [
        {
          russian: "Привет",
          english: "Hello",
          transcription: "[привет]",
          level: "A1",
        },
        {
          russian: "Спасибо",
          english: "Thank you",
          transcription: "[спасибо]",
          level: "A1",
        },
        { russian: "Да", english: "Yes", transcription: "[да]", level: "A1" },
        { russian: "Нет", english: "No", transcription: "[нет]", level: "A1" },
        {
          russian: "Пожалуйста",
          english: "Please",
          transcription: "[пожалуйста]",
          level: "A1",
        },
        {
          russian: "Извините",
          english: "Excuse me",
          transcription: "[извините]",
          level: "A1",
        },
      ],
    },
    {
      category: "family",
      title: "Семья",
      words: [
        {
          russian: "Мама",
          english: "Mother",
          transcription: "[мама]",
          level: "A1",
        },
        {
          russian: "Папа",
          english: "Father",
          transcription: "[папа]",
          level: "A1",
        },
        { russian: "Сын", english: "Son", transcription: "[сын]", level: "A1" },
        {
          russian: "Дочь",
          english: "Daughter",
          transcription: "[дочь]",
          level: "A1",
        },
        {
          russian: "Брат",
          english: "Brother",
          transcription: "[брат]",
          level: "A1",
        },
        {
          russian: "Сестра",
          english: "Sister",
          transcription: "[сестра]",
          level: "A1",
        },
      ],
    },
    {
      category: "food",
      title: "Еда",
      words: [
        {
          russian: "Хлеб",
          english: "Bread",
          transcription: "[хлеб]",
          level: "A1",
        },
        {
          russian: "Молоко",
          english: "Milk",
          transcription: "[молоко]",
          level: "A1",
        },
        {
          russian: "Мясо",
          english: "Meat",
          transcription: "[мясо]",
          level: "A2",
        },
        {
          russian: "Овощи",
          english: "Vegetables",
          transcription: "[овощи]",
          level: "A2",
        },
        {
          russian: "Фрукты",
          english: "Fruits",
          transcription: "[фрукты]",
          level: "A2",
        },
        {
          russian: "Вода",
          english: "Water",
          transcription: "[вода]",
          level: "A1",
        },
      ],
    },
  ];

  const filteredWords = vocabularyCategories.map((category) => ({
    ...category,
    words: category.words.filter(
      (word) =>
        word.russian.toLowerCase().includes(searchTerm.toLowerCase()) ||
        word.english.toLowerCase().includes(searchTerm.toLowerCase()),
    ),
  }));

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">Словарь русского языка</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Изучайте новые слова с переводом, транскрипцией и примерами
            использования
          </p>
        </div>

        <div className="max-w-md mx-auto mb-8">
          <div className="relative">
            <Icon
              name="Search"
              size={20}
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            />
            <Input
              placeholder="Поиск слов..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        <Tabs defaultValue="basic" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="basic">Базовые</TabsTrigger>
            <TabsTrigger value="family">Семья</TabsTrigger>
            <TabsTrigger value="food">Еда</TabsTrigger>
          </TabsList>

          {filteredWords.map((category) => (
            <TabsContent key={category.category} value={category.category}>
              <div className="mb-6">
                <h2 className="text-2xl font-bold mb-2">{category.title}</h2>
                <p className="text-gray-600">
                  Основные слова по теме "{category.title}"
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {category.words.map((word, index) => (
                  <Card
                    key={index}
                    className="hover:shadow-lg transition-shadow group"
                  >
                    <CardHeader className="pb-3">
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle className="text-2xl text-purple-600 mb-1">
                            {word.russian}
                          </CardTitle>
                          <p className="text-sm text-gray-500">
                            {word.transcription}
                          </p>
                        </div>
                        <Badge variant="secondary">{word.level}</Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-lg mb-4">
                        {word.english}
                      </CardDescription>
                      <div className="flex space-x-2">
                        <Button size="sm" variant="outline" className="flex-1">
                          <Icon name="Volume2" size={16} className="mr-1" />
                          Прослушать
                        </Button>
                        <Button size="sm" variant="outline">
                          <Icon name="Plus" size={16} />
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

export default Vocabulary;
