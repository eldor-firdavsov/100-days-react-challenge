import { useState } from "react";
import SiblingA from "./SiblingA";
import SiblingB from "./SiblingB";

function App() {
  const [text, setText] = useState("");

  return (
    <div className="min-h-screen bg-zinc-900 text-zinc-100 flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-zinc-800 border border-zinc-700 rounded-xl p-6 space-y-6">
        <h1 className="text-2xl font-semibold">Sibling Communication</h1>

        <SiblingA value={text} onChange={setText} />
        <SiblingB value={text} />
      </div>
    </div>
  );
}

export default App;
