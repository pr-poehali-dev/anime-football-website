import React from "react";
import { Button } from "@/components/ui/button";
import TeamRegistration from "@/components/TeamRegistration";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-4 h-4 bg-white rounded-full animate-bounce opacity-60"></div>
        <div className="absolute top-40 right-20 w-6 h-6 bg-yellow-300 rounded-full animate-pulse"></div>
        <div className="absolute bottom-32 left-1/4 w-8 h-8 bg-green-400 rounded-full animate-bounce delay-1000"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 pt-20 pb-16">
        <div className="text-center text-white">
          <div className="mb-6 flex justify-center">
            <img
              src="https://cdn.poehali.dev/files/9e0519dc-849e-40d5-885f-67be5be9fc5b.png"
              alt="REMATCH Logo"
              className="w-72 h-48 object-contain animate-pulse"
            />
          </div>
          <h2 className="text-2xl md:text-4xl font-bold mb-8 text-shadow-lg">
            ⚽ Аниме Футбольная Битва ⚽
          </h2>
          <p className="text-xl md:text-2xl mb-12 max-w-2xl mx-auto leading-relaxed">
            Присоединяйся к эпической футбольной саге! Собери команду
            легендарных игроков и покори поле!
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <TeamRegistration />
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-purple-600 font-bold py-4 px-8 rounded-full text-xl transform hover:scale-105 transition-all duration-300"
            >
              👥 Команды
            </Button>
          </div>
        </div>

        {/* Football Field Elements */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-green-500 to-transparent opacity-30"></div>
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-white rounded-full shadow-lg animate-bounce">
          <div className="w-full h-full bg-gradient-to-br from-white to-gray-200 rounded-full flex items-center justify-center text-2xl">
            ⚽
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
