import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [favorites, setFavorites] = useState<number[]>([]);

  const toggleFavorite = (id: number) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((fav) => fav !== id) : [...prev, id],
    );
  };

  const trendingMovies = [
    {
      id: 1,
      title: "Космическая Одиссея",
      type: "фильм",
      rating: 8.5,
      year: 2024,
      genre: "Фантастика",
      image: "/img/07bf638b-eb40-4ef0-8b17-d212c03127a4.jpg",
      description: "Захватывающее путешествие к далёким звёздам",
    },
    {
      id: 2,
      title: "Тайны Метрополиса",
      type: "сериал",
      rating: 9.1,
      year: 2024,
      genre: "Детектив",
      image: "/img/909d6e0e-3bcf-40c8-9c4b-d7035d5aebc6.jpg",
      description: "Мистический детектив в неоновом городе",
    },
    {
      id: 3,
      title: "Волшебный Лес",
      type: "анимация",
      rating: 8.8,
      year: 2024,
      genre: "Семейный",
      image: "/img/fe3b0fdd-53bf-4ad4-97ac-eb955ae6ed17.jpg",
      description: "Приключения в мире магии и дружбы",
    },
  ];

  const recommendations = [
    {
      id: 4,
      title: "Неоновые Сны",
      type: "фильм",
      rating: 8.2,
      genre: "Триллер",
    },
    {
      id: 5,
      title: "Цифровая Революция",
      type: "сериал",
      rating: 8.7,
      genre: "Драма",
    },
    {
      id: 6,
      title: "Звёздные Воины",
      type: "фильм",
      rating: 8.9,
      genre: "Экшен",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <header className="bg-black/20 backdrop-blur-md border-b border-purple-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-8">
              <h1 className="text-2xl font-bold text-white font-['Montserrat']">
                🎬 CineStream
              </h1>
              <nav className="hidden md:flex space-x-6">
                <Button
                  variant="ghost"
                  className="text-white hover:text-purple-300"
                >
                  Главная
                </Button>
                <Button
                  variant="ghost"
                  className="text-white hover:text-purple-300"
                >
                  Фильмы
                </Button>
                <Button
                  variant="ghost"
                  className="text-white hover:text-purple-300"
                >
                  Сериалы
                </Button>
                <Button
                  variant="ghost"
                  className="text-white hover:text-purple-300"
                >
                  Избранное
                </Button>
              </nav>
            </div>

            <div className="flex items-center space-x-4">
              <div className="relative">
                <Icon
                  name="Search"
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  size={20}
                />
                <Input
                  placeholder="Поиск фильмов и сериалов..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 bg-white/10 border-purple-500/30 text-white placeholder-gray-400 w-64"
                />
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:text-purple-300"
              >
                <Icon name="User" size={20} />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-purple-600 to-pink-600 overflow-hidden">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-white max-w-2xl">
            <h2 className="text-5xl font-bold mb-4 font-['Montserrat']">
              Смотри лучшие фильмы и сериалы
            </h2>
            <p className="text-xl mb-8 text-gray-200">
              Тысячи фильмов, сериалов и аниме в высоком качестве. Персональные
              рекомендации и социальные функции.
            </p>
            <div className="flex space-x-4">
              <Button className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105">
                <Icon name="Play" className="mr-2" size={20} />
                Смотреть сейчас
              </Button>
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-purple-600 font-semibold px-8 py-3 rounded-full transition-all duration-300"
              >
                <Icon name="Info" className="mr-2" size={20} />
                Подробнее
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Trending Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-3xl font-bold text-white font-['Montserrat']">
              🔥 Трендовые сейчас
            </h3>
            <Button
              variant="ghost"
              className="text-purple-300 hover:text-white"
            >
              Смотреть все
              <Icon name="ChevronRight" className="ml-1" size={20} />
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {trendingMovies.map((movie) => (
              <Card
                key={movie.id}
                className="bg-gradient-to-br from-slate-800 to-slate-900 border-purple-500/20 hover:border-purple-400/50 transition-all duration-300 transform hover:scale-105 group"
              >
                <CardContent className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img
                      src={movie.image}
                      alt={movie.title}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300"></div>
                    <div className="absolute top-4 right-4">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => toggleFavorite(movie.id)}
                        className="bg-black/50 hover:bg-black/70 text-white rounded-full"
                      >
                        <Icon
                          name="Heart"
                          className={
                            favorites.includes(movie.id)
                              ? "fill-red-500 text-red-500"
                              : ""
                          }
                          size={20}
                        />
                      </Button>
                    </div>
                    <div className="absolute bottom-4 left-4">
                      <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white">
                        {movie.type}
                      </Badge>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-xl font-bold text-white font-['Montserrat']">
                        {movie.title}
                      </h4>
                      <div className="flex items-center space-x-1">
                        <Icon
                          name="Star"
                          className="text-yellow-400 fill-yellow-400"
                          size={16}
                        />
                        <span className="text-yellow-400 font-semibold">
                          {movie.rating}
                        </span>
                      </div>
                    </div>

                    <p className="text-gray-300 text-sm mb-3">
                      {movie.description}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2 text-sm text-gray-400">
                        <span>{movie.year}</span>
                        <span>•</span>
                        <span>{movie.genre}</span>
                      </div>
                      <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold rounded-full px-6 py-2 transition-all duration-300">
                        <Icon name="Play" className="mr-2" size={16} />
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

      {/* Recommendations Section */}
      <section className="py-12 bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-3xl font-bold text-white font-['Montserrat']">
              💡 Рекомендации для вас
            </h3>
            <Button
              variant="ghost"
              className="text-purple-300 hover:text-white"
            >
              Обновить
              <Icon name="RefreshCw" className="ml-1" size={20} />
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {recommendations.map((item) => (
              <Card
                key={item.id}
                className="bg-gradient-to-br from-slate-800 to-slate-900 border-purple-500/20 hover:border-purple-400/50 transition-all duration-300 transform hover:scale-105"
              >
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <Badge className="bg-gradient-to-r from-blue-500 to-purple-500 text-white">
                      {item.type}
                    </Badge>
                    <div className="flex items-center space-x-1">
                      <Icon
                        name="Star"
                        className="text-yellow-400 fill-yellow-400"
                        size={16}
                      />
                      <span className="text-yellow-400 font-semibold">
                        {item.rating}
                      </span>
                    </div>
                  </div>

                  <h4 className="text-xl font-bold text-white mb-2 font-['Montserrat']">
                    {item.title}
                  </h4>

                  <p className="text-gray-400 text-sm mb-4">{item.genre}</p>

                  <div className="flex items-center justify-between">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => toggleFavorite(item.id)}
                      className="text-gray-400 hover:text-red-500"
                    >
                      <Icon
                        name="Heart"
                        className={
                          favorites.includes(item.id)
                            ? "fill-red-500 text-red-500"
                            : ""
                        }
                        size={20}
                      />
                    </Button>
                    <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold rounded-full px-6 py-2 transition-all duration-300">
                      <Icon name="Play" className="mr-2" size={16} />
                      Смотреть
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2 font-['Montserrat']">
                10K+
              </div>
              <div className="text-gray-400">Фильмов</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2 font-['Montserrat']">
                5K+
              </div>
              <div className="text-gray-400">Сериалов</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2 font-['Montserrat']">
                50K+
              </div>
              <div className="text-gray-400">Пользователей</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2 font-['Montserrat']">
                1M+
              </div>
              <div className="text-gray-400">Просмотров</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/40 border-t border-purple-500/20 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-lg font-bold text-white mb-4 font-['Montserrat']">
                CineStream
              </h4>
              <p className="text-gray-400">
                Лучшая платформа для просмотра фильмов и сериалов
              </p>
            </div>
            <div>
              <h4 className="text-lg font-bold text-white mb-4 font-['Montserrat']">
                Контент
              </h4>
              <div className="space-y-2">
                <div className="text-gray-400 hover:text-white cursor-pointer">
                  Фильмы
                </div>
                <div className="text-gray-400 hover:text-white cursor-pointer">
                  Сериалы
                </div>
                <div className="text-gray-400 hover:text-white cursor-pointer">
                  Аниме
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-bold text-white mb-4 font-['Montserrat']">
                Сообщество
              </h4>
              <div className="space-y-2">
                <div className="text-gray-400 hover:text-white cursor-pointer">
                  Обсуждения
                </div>
                <div className="text-gray-400 hover:text-white cursor-pointer">
                  Рейтинги
                </div>
                <div className="text-gray-400 hover:text-white cursor-pointer">
                  Отзывы
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-bold text-white mb-4 font-['Montserrat']">
                Следите за нами
              </h4>
              <div className="flex space-x-4">
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-gray-400 hover:text-white"
                >
                  <Icon name="Twitter" size={20} />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-gray-400 hover:text-white"
                >
                  <Icon name="Instagram" size={20} />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-gray-400 hover:text-white"
                >
                  <Icon name="Youtube" size={20} />
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t border-purple-500/20 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 CineStream. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
