import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface PlayerCardProps {
  name: string;
  position: string;
  power: number;
  speed: number;
  skill: number;
  image: string;
  team: string;
}

const PlayerCard: React.FC<PlayerCardProps> = ({
  name,
  position,
  power,
  speed,
  skill,
  image,
  team,
}) => {
  return (
    <Card className="group relative overflow-hidden bg-gradient-to-br from-purple-100 to-blue-100 border-2 border-purple-200 hover:border-purple-400 transform hover:scale-105 hover:rotate-1 transition-all duration-300 shadow-lg hover:shadow-2xl">
      <CardHeader className="pb-2">
        <div className="relative">
          <img
            src={image}
            alt={name}
            className="w-full h-48 object-cover rounded-lg mb-4 group-hover:scale-110 transition-transform duration-300"
          />
          <div className="absolute top-2 right-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-2 py-1 rounded-full text-sm font-bold">
            {team}
          </div>
        </div>
        <CardTitle className="text-xl font-bold text-purple-800 group-hover:text-purple-600 transition-colors">
          {name}
        </CardTitle>
        <p className="text-purple-600 font-semibold">{position}</p>
      </CardHeader>

      <CardContent className="space-y-3">
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="font-medium text-gray-700">💪 Сила</span>
            <div className="flex items-center gap-2">
              <div className="w-20 h-2 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-red-400 to-red-600 rounded-full transition-all duration-1000"
                  style={{ width: `${power}%` }}
                ></div>
              </div>
              <span className="text-sm font-bold text-red-600">{power}</span>
            </div>
          </div>

          <div className="flex justify-between items-center">
            <span className="font-medium text-gray-700">⚡ Скорость</span>
            <div className="flex items-center gap-2">
              <div className="w-20 h-2 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full transition-all duration-1000"
                  style={{ width: `${speed}%` }}
                ></div>
              </div>
              <span className="text-sm font-bold text-orange-600">{speed}</span>
            </div>
          </div>

          <div className="flex justify-between items-center">
            <span className="font-medium text-gray-700">⭐ Навык</span>
            <div className="flex items-center gap-2">
              <div className="w-20 h-2 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-blue-400 to-purple-600 rounded-full transition-all duration-1000"
                  style={{ width: `${skill}%` }}
                ></div>
              </div>
              <span className="text-sm font-bold text-purple-600">{skill}</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PlayerCard;
