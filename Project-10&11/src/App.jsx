import { useState } from "react";
import LaserFlow from "./LaserFlow"; 

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if(!email){
      setError("Emailni to'ldiring")
    } else if(!password){
      setError("Parolni to'ldiring")
    }
    else  if (email === "test@test.com" && password === "12345") {
      alert("Login successful!");
      
    } else {
      setError("Email yoki parol noto'g'ri");
    }
  };

  return (
    <section className="w-screen h-screen bg-[#0a0614] relative flex items-center justify-center">

      <div className="absolute top-0 left-185 -translate-x-1/2 h-[60%] w-full z-0 pointer-events-none flex justify-center">
        <div className="w-full max-w-5xl h-full overflow-hidden">
          <LaserFlow
            color="#d6a8ff"      
            intensity={1.3}
            blur={0.55}
          />
        </div>
      </div>

      <div className="relative top-4 z-10 w-[90%] max-w-[520px] rounded-3xl border border-[#d6a8ff] bg-[#0b0517]/60 backdrop-blur-xl overflow-hidden p-0.5">

        <div
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(#ffffff20 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }}
        />

        <div className="relative p-8 flex flex-col gap-6 text-white">

          <h1 className="text-4xl font-bold text-center">Log In</h1>

          <input
            type="text"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            className="placeholder:text-white bg-white/10 border border-white/20 p-3 rounded-xl outline-none"
          />

          <input
            type="password"
            placeholder="Parol"
            onChange={(e) => setPassword(e.target.value)}
            className="placeholder:text-white bg-white/10 border border-white/20 p-3 rounded-xl outline-none"
          />

          <button
            className="bg-white/10 border border-white/20 rounded-xl py-3 font-semibold hover:bg-white/20 transition"
            onClick={handleLogin}
          >
            Login
          </button>

          {error && <p className="text-red-400 text-center">{error}</p>}
        </div>
      </div>
    </section>
  );
}

export default App;
