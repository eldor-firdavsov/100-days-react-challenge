import { useState } from "react";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (email === "test@test.com" && password === "12345") {
      alert("Login successful!");
    } else {
      setError("Email yoki parol noto'g'ri");
    }
  };

  return (
    <section className="w-screen h-screen bg-black flex items-center justify-center">
      <div className="w-[400px] text-white">
        <div className="flex flex-col border rounded-xl items-center gap-10 p-5">
          <h1 className="font-bold text-4xl">Log In</h1>
          <input 
            type="text" 
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)} 
            className="placeholder:text-white px-5 p-2 rounded-xl bordernpm install three"
          />
          <input 
            type="password" 
            placeholder="Parol"
            onChange={(e) => setPassword(e.target.value)} 
            className="placeholder:text-white px-5 p-2 rounded-xl border"

          />
          <button className="border rounded-xl px-5 py-2" onClick={handleLogin}>Login</button>
          {error && <p>{error}</p>}
        </div>
      </div>
    </section>
  );
}

export default App;
