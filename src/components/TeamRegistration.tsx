import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const TeamRegistration = () => {
  const [telegram, setTelegram] = useState("");
  const [email, setEmail] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (telegram && email) {
      console.log("Registration data:", { telegram, email });
      // Здесь будет обработка регистрации
      setIsOpen(false);
      setTelegram("");
      setEmail("");
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button
          size="lg"
          className="bg-gradient-to-r from-orange-400 to-red-500 hover:from-orange-500 hover:to-red-600 text-white font-bold py-4 px-8 rounded-full text-xl transform hover:scale-105 transition-all duration-300 shadow-lg"
        >
          ⚡ Регистрация Команды
        </Button>
      </DialogTrigger>

      <DialogContent className="bg-gradient-to-br from-purple-600 via-blue-600 to-pink-600 border-none text-white max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent">
            ⚽ Регистрация Команды ⚽
          </DialogTitle>
          <DialogDescription className="text-center text-gray-200">
            Присоединяйся к футбольной саге! Заполни данные для участия.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6 mt-4">
          <div className="space-y-2">
            <Label htmlFor="telegram" className="text-white font-semibold">
              📱 Telegram (без @)
            </Label>
            <Input
              id="telegram"
              type="text"
              placeholder="username"
              value={telegram}
              onChange={(e) => setTelegram(e.target.value)}
              className="bg-white/10 border-white/20 text-white placeholder:text-gray-300 focus:ring-2 focus:ring-yellow-400"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-white font-semibold">
              ✉️ Email
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-white/10 border-white/20 text-white placeholder:text-gray-300 focus:ring-2 focus:ring-yellow-400"
              required
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 text-white font-bold py-3 rounded-full text-lg transform hover:scale-105 transition-all duration-300 shadow-lg"
          >
            🚀 Зарегистрировать Команду
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default TeamRegistration;
