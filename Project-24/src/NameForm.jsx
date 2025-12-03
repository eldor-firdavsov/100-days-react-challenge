import { useState } from "react";

function NameForm({ onSubmit }) {
  const [text, setText] = useState("");

  const send = () => {
    if (!text.trim()) return;
    onSubmit(text.trim());
    setText("");
  };

  return (
    <div className="flex gap-2">
      <input
        className="flex-1 px-3 py-2 bg-zinc-700 text-zinc-100 placeholder-zinc-400 
                   rounded-lg border border-zinc-600 focus:outline-none
                   focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type your name..."
      />

      <button
        onClick={send}
        className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 
                   rounded-lg font-medium transition"
      >
        Send
      </button>
    </div>
  );
}

export default NameForm;
