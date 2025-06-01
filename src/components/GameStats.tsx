import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const GameStats = () => {
  const stats = [
    {
      label: "Матчи Сыграны",
      value: "1,247",
      icon: "⚽",
      color: "from-blue-400 to-blue-600",
    },
    {
      label: "Голы Забиты",
      value: "3,891",
      icon: "🥅",
      color: "from-green-400 to-green-600",
    },
    {
      label: "Игроки Онлайн",
      value: "12,543",
      icon: "👥",
      color: "from-purple-400 to-purple-600",
    },
    {
      label: "Турниры",
      value: "89",
      icon: "🏆",
      color: "from-yellow-400 to-orange-500",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          📊 Статистика Игры
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 hover:border-white/40 transition-all duration-300 transform hover:scale-105"
            >
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <div
                    className={`w-12 h-12 rounded-full bg-gradient-to-r ${stat.color} flex items-center justify-center text-xl shadow-lg`}
                  >
                    {stat.icon}
                  </div>
                  <div className="text-right">
                    <CardTitle className="text-2xl font-bold text-white">
                      {stat.value}
                    </CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 font-medium">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Score Display */}
        <div className="max-w-2xl mx-auto">
          <Card className="bg-gradient-to-r from-green-500 to-blue-500 border-0 shadow-2xl">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl font-bold text-white mb-4">
                🏆 Текущий Матч
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between text-white">
                <div className="text-center flex-1">
                  <div className="text-2xl font-bold mb-2">Команда Аниме</div>
                  <div className="text-6xl font-black bg-white text-blue-600 rounded-lg w-20 h-20 flex items-center justify-center mx-auto">
                    3
                  </div>
                </div>

                <div className="text-center px-8">
                  <div className="text-xl font-bold mb-2">VS</div>
                  <div className="animate-bounce">⚽</div>
                  <div className="text-sm mt-2">85:42</div>
                </div>

                <div className="text-center flex-1">
                  <div className="text-2xl font-bold mb-2">Футбол Драконы</div>
                  <div className="text-6xl font-black bg-white text-red-600 rounded-lg w-20 h-20 flex items-center justify-center mx-auto">
                    2
                  </div>
                </div>
              </div>

              <div className="mt-6 text-center">
                <div className="inline-flex items-center gap-2 bg-white/20 rounded-full px-4 py-2">
                  <span className="animate-pulse">🔴</span>
                  <span className="text-white font-bold">ПРЯМОЙ ЭФИР</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default GameStats;
