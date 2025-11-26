import { useState } from "react";
import { FaStar } from "react-icons/fa";

export default function StarRate() {
  const [rating, setRating] = useState(0);

  return (
    <section className="flex items-center justify-center min-h-screen bg-gray-900 gap-4">
      {[...Array(5)].map((_, index) => {
        const currentRate = index + 1;
        return (
          <FaStar
            key={index}
            size={50}
            color={currentRate <= rating ? "#fcd34d" : "#4b5563"}
            onClick={() => setRating(currentRate)}
            className="cursor-pointer transition-all duration-300 hover:scale-110 hover:text-yellow-400 drop-shadow-lg"
          />
        );
      })}
    </section>
  );
}