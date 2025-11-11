import './App.css'
import React, { useState, useEffect } from "react";

function App() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const hours = time.getHours().toString().padStart(2, "0");
  const minutes = time.getMinutes().toString().padStart(2, "0");
  const seconds = time.getSeconds().toString().padStart(2, "0");

  return (
    <div className="bg-black h-screen w-screen text-white text-[200px] font-bold text-center " style={{fontFamily: "orbitron, san serif" }}>
      <p className="pt-50">
        {hours}:{minutes}:{seconds}
      </p>
    </div>
  );
}

export default App;
