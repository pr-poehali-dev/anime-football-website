import React from "react";
import HeroSection from "@/components/HeroSection";
import PlayerCard from "@/components/PlayerCard";
import FootballField from "@/components/FootballField";
import GameStats from "@/components/GameStats";

const Index = () => {
  const players = [
    {
      name: "Хироки Мацуока",
      position: "Нападающий",
      power: 95,
      speed: 88,
      skill: 92,
      image:
        "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=400&h=300&fit=crop",
      team: "⚡ Молния",
    },
    {
      name: "Сакура Танака",
      position: "Полузащитник",
      power: 78,
      speed: 94,
      skill: 89,
      image:
        "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=300&fit=crop",
      team: "🌸 Сакура",
    },
    {
      name: "Рюта Кагава",
      position: "Защитник",
      power: 91,
      speed: 72,
      skill: 85,
      image:
        "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&h=300&fit=crop",
      team: "🔥 Феникс",
    },
  ];

  return (
    <div className="min-h-screen font-open-sans">
      <HeroSection />

      {/* Players Section */}
      <section className="py-16 bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 font-montserrat bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            ⭐ Легендарные Игроки
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {players.map((player, index) => (
              <PlayerCard key={index} {...player} />
            ))}
          </div>
        </div>
      </section>

      <FootballField />
      <GameStats />

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-2xl font-bold mb-4 font-montserrat">
            ⚽ REMATCH
          </h3>
          <p className="text-gray-400">Аниме футбольная игра будущего</p>
          <div className="mt-4 flex justify-center gap-4">
            <span className="animate-bounce">⚽</span>
            <span className="animate-pulse">🏆</span>
            <span className="animate-bounce delay-500">🎮</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
