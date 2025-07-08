import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [favorites, setFavorites] = useState<number[]>([]);

  const toggleFavorite = (id: number) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((fav) => fav !== id) : [...prev, id],
    );
  };

  const movies = [
    {
      id: 1,
      title: "Космическая Одиссея",
      type: "фильм",
      rating: 8.5,
      year: 2024,
      image: "/img/07bf638b-eb40-4ef0-8b17-d212c03127a4.jpg",
    },
    {
      id: 2,
      title: "Тайны Метрополиса",
      type: "сериал",
      rating: 9.1,
      year: 2024,
      image: "/img/909d6e0e-3bcf-40c8-9c4b-d7035d5aebc6.jpg",
    },
    {
      id: 3,
      title: "Волшебный Лес",
      type: "анимация",
      rating: 8.8,
      year: 2024,
      image: "/img/fe3b0fdd-53bf-4ad4-97ac-eb955ae6ed17.jpg",
    },
    {
      id: 4,
      title: "Неоновые Сны",
      type: "фильм",
      rating: 8.2,
      year: 2024,
      image: "/img/07bf638b-eb40-4ef0-8b17-d212c03127a4.jpg",
    },
    {
      id: 5,
      title: "Цифровая Революция",
      type: "сериал",
      rating: 8.7,
      year: 2024,
      image: "/img/909d6e0e-3bcf-40c8-9c4b-d7035d5aebc6.jpg",
    },
    {
      id: 6,
      title: "Звёздные Воины",
      type: "фильм",
      rating: 8.9,
      year: 2024,
      image: "/img/fe3b0fdd-53bf-4ad4-97ac-eb955ae6ed17.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <h1 className="text-xl font-semibold text-gray-900">CineStream</h1>

            <div className="flex items-center space-x-6">
              <nav className="hidden md:flex space-x-6">
                <button className="text-gray-600 hover:text-gray-900">
                  Главная
                </button>
                <button className="text-gray-600 hover:text-gray-900">
                  Фильмы
                </button>
                <button className="text-gray-600 hover:text-gray-900">
                  Сериалы
                </button>
                <button className="text-gray-600 hover:text-gray-900">
                  Избранное
                </button>
              </nav>

              <div className="relative">
                <Icon
                  name="Search"
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  size={18}
                />
                <Input
                  placeholder="Поиск..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 w-64 border-gray-300 focus:border-green-500 focus:ring-green-500"
                />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Смотри лучшие фильмы и сериалы
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Тысячи фильмов и сериалов в высоком качестве
          </p>
          <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3">
            <Icon name="Play" className="mr-2" size={20} />
            Начать просмотр
          </Button>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
            {movies.map((movie) => (
              <Card
                key={movie.id}
                className="border border-gray-200 hover:shadow-lg transition-shadow duration-200 bg-white"
              >
                <CardContent className="p-0">
                  <div className="relative">
                    <img
                      src={movie.image}
                      alt={movie.title}
                      className="w-full h-64 object-cover rounded-t-lg"
                    />
                    <button
                      onClick={() => toggleFavorite(movie.id)}
                      className="absolute top-3 right-3 p-2 bg-white/90 hover:bg-white rounded-full shadow-sm"
                    >
                      <Icon
                        name="Heart"
                        className={
                          favorites.includes(movie.id)
                            ? "fill-red-500 text-red-500"
                            : "text-gray-600"
                        }
                        size={18}
                      />
                    </button>
                  </div>

                  <div className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-gray-900 text-lg">
                        {movie.title}
                      </h4>
                      <div className="flex items-center space-x-1">
                        <Icon
                          name="Star"
                          className="text-yellow-500 fill-yellow-500"
                          size={16}
                        />
                        <span className="text-sm text-gray-600">
                          {movie.rating}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2 text-sm text-gray-500">
                        <span>{movie.year}</span>
                        <span>•</span>
                        <span className="capitalize">{movie.type}</span>
                      </div>
                      <Button
                        size="sm"
                        className="bg-green-600 hover:bg-green-700 text-white"
                      >
                        <Icon name="Play" className="mr-1" size={14} />
                        Смотреть
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-200 py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-gray-600 text-sm">
            &copy; 2024 CineStream. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
