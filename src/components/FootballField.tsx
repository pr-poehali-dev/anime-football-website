import React from "react";

const FootballField = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-green-400 to-green-600 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-white mb-12 text-shadow-lg">
          🏟️ Арена Чемпионов
        </h2>

        {/* Football Field */}
        <div className="relative max-w-4xl mx-auto">
          <div className="bg-green-500 rounded-lg p-8 border-4 border-white shadow-2xl">
            {/* Field Lines */}
            <div className="relative h-64 bg-gradient-to-r from-green-400 via-green-500 to-green-400 rounded border-2 border-white">
              {/* Center Line */}
              <div className="absolute top-0 left-1/2 w-0.5 h-full bg-white transform -translate-x-0.5"></div>

              {/* Center Circle */}
              <div className="absolute top-1/2 left-1/2 w-20 h-20 border-2 border-white rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>

              {/* Goal Areas */}
              <div className="absolute top-1/2 left-0 w-12 h-16 border-2 border-white border-l-0 transform -translate-y-1/2"></div>
              <div className="absolute top-1/2 right-0 w-12 h-16 border-2 border-white border-r-0 transform -translate-y-1/2"></div>

              {/* Penalty Areas */}
              <div className="absolute top-1/2 left-0 w-20 h-24 border-2 border-white border-l-0 transform -translate-y-1/2"></div>
              <div className="absolute top-1/2 right-0 w-20 h-24 border-2 border-white border-r-0 transform -translate-y-1/2"></div>

              {/* Animated Balls */}
              <div className="absolute top-4 left-8 w-4 h-4 bg-white rounded-full animate-bounce shadow-lg">
                ⚽
              </div>
              <div className="absolute bottom-8 right-12 w-4 h-4 bg-white rounded-full animate-pulse shadow-lg">
                ⚽
              </div>
              <div className="absolute top-1/3 left-1/3 w-4 h-4 bg-white rounded-full animate-bounce delay-500 shadow-lg">
                ⚽
              </div>
            </div>

            {/* Goals */}
            <div className="flex justify-between items-center mt-6">
              <div className="bg-white rounded-lg p-4 shadow-lg transform hover:scale-105 transition-transform">
                <div className="text-center">
                  <div className="text-3xl mb-2">🥅</div>
                  <p className="font-bold text-blue-600">Левые Ворота</p>
                </div>
              </div>

              <div className="text-center">
                <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center shadow-lg animate-spin-slow">
                  <span className="text-2xl">⚽</span>
                </div>
                <p className="text-white font-bold mt-2">Игровой Мяч</p>
              </div>

              <div className="bg-white rounded-lg p-4 shadow-lg transform hover:scale-105 transition-transform">
                <div className="text-center">
                  <div className="text-3xl mb-2">🥅</div>
                  <p className="font-bold text-red-600">Правые Ворота</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-10 left-10 w-6 h-6 bg-white rounded-full opacity-20 animate-float"></div>
      <div className="absolute bottom-20 right-20 w-8 h-8 bg-yellow-300 rounded-full opacity-30 animate-bounce"></div>
      <div className="absolute top-1/3 right-10 w-4 h-4 bg-orange-400 rounded-full opacity-40 animate-pulse"></div>
    </section>
  );
};

export default FootballField;
