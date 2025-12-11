import { useState, useEffect, useRef } from "react";
import { Trash2, CheckCircle } from "lucide-react";

function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  }, [value]);
  return ref.current;
}

export default function App() {
  const [todos, setTodos] = useState(["Buy milk", "Walk dog"]);
  const prevTodos = usePrevious(todos);

  const removed = prevTodos
    ? prevTodos.find((todo) => !todos.includes(todo))
    : null;

  const [showRemoved, setShowRemoved] = useState(false);
  useEffect(() => {
    if (removed) {
      setShowRemoved(true);
      const timer = setTimeout(() => setShowRemoved(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [removed]);

  const removeTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div className="min-h-screen bg-black text-gray-100 flex items-center justify-center p-6">
      <div className="w-full max-w-lg">
        <div className="backdrop-blur-xl bg-white/10 rounded-3xl shadow-2xl border border-white/20 p-8">
          <div className="flex items-center gap-3 mb-8">
            <CheckCircle className="w-10 h-10 text-white" />
            <h1 className="text-4xl font-bold ">
              My Todos
            </h1>
          </div>

          <ul className="space-y-3">
            {todos.length === 0 ? (
              <li className="text-center py-12 text-gray-400 text-lg">
                <span className="block text-5xl mb-4">🎉</span>
                No todos left! You're all caught up.
              </li>
            ) : (
              todos.map((todo, i) => (
                <li
                  key={i}
                  className="group flex items-center justify-between bg-white/5 hover:bg-white/10 backdrop-blur-md rounded-xl px-5 py-4 transition-all duration-300 border border-white/10 hover:border-purple-500/50 shadow-lg hover:shadow-purple-500/20"
                >
                  <span className="text-lg font-medium text-gray-100">
                    {todo}
                  </span>
                  <button
                    onClick={() => removeTodo(i)}
                    className="opacity-0 group-hover:opacity-100 transition-all duration-300 bg-red-500/20 hover:bg-red-500/40 text-red-400 hover:text-red-300 px-4 py-2 rounded-lg border border-red-500/30 hover:border-red-400 flex items-center gap-2"
                  >
                    <Trash2 className="w-4 h-4" />
                    <span className="text-sm font-medium">Remove</span>
                  </button>
                </li>
              ))
            )}
          </ul>
        </div>

        <div className={`fixed bottom-8 left-1/2 -translate-x-1/2 transition-all duration-500 transform ${showRemoved ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0 pointer-events-none'}`}>
          <div className="bg-red-600/90 backdrop-blur-lg text-white px-6 py-4 rounded-2xl shadow-2xl border border-red-400/50 flex items-center gap-3">
            <Trash2 className="w-6 h-6" />
            <span className="font-semibold">"{removed}" removed</span>
            <span className="text-2xl ml-2">❌</span>
          </div>
        </div>
      </div>
    </div>
  );
}