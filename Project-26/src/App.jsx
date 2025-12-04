import React, { useState, useEffect } from "react";
import tickSound from './assets/tick2.mp3';

function App() {
  const [time, setTime] = useState(new Date());
  const [tick] = useState(new Audio(tickSound));

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
      tick.currentTime = 0;
      tick.play();
    }, 1000);

    return () => clearInterval(timer);
  }, [tick]);

  const hours = time.getHours().toString().padStart(2, "0");
  const minutes = time.getMinutes().toString().padStart(2, "0");
  const seconds = time.getSeconds().toString().padStart(2, "0");

  return (
    <div
      className="flex items-center justify-center h-screen w-screen bg-black"
      style={{ fontFamily: "Orbitron, sans-serif" }}
    >
      <p className="text-white text-[180px] font-extrabold tracking-wide transition-all duration-300 hover:text-cyan-400">
        {hours}:{minutes}:{seconds}
      </p>
    </div>
  );
}

export default App;
