import { useState } from "react";
import NameForm from "./NameForm";

function App() {
  const [name, setName] = useState("");

  return (
    <div className="min-h-screen bg-zinc-900 text-zinc-100 flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-zinc-800 border border-zinc-700 rounded-xl p-6 shadow-lg">
        <h1 className="text-2xl font-semibold mb-4">
          {name ? `Your name: ${name}` : "Enter your name"}
        </h1>

        <NameForm onSubmit={setName} />
      </div>
    </div>
  );
}

export default App;
