import { useState } from 'react';
import { Shuffle } from 'lucide-react';

function App() {
  const [min, setMin] = useState('');
  const [max, setMax] = useState('');
  const [result, setResult] = useState(null);

  const randomizer = () => {
    const minNum = Number(min);
    const maxNum = Number(max);
    if (!isNaN(minNum) && !isNaN(maxNum) && minNum < maxNum) {
      const random = Math.floor(Math.random() * (maxNum - minNum + 1) + minNum);
      setResult(random);
    } else {
      setResult('Invalid input');
    }
  };

  return (
    <div className="min-h-screen bg-[#0f172a] flex items-center justify-center p-5">
      <div className="w-full max-w-md">
        <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-8 shadow-2xl">
          <h1 className="text-4xl font-semibold text-slate-100 text-center mb-8 tracking-wide">
            Random Number
          </h1>

          <div className="space-y-5">
            <input
              type="number"
              placeholder="Min"
              value={min}
              onChange={(e) => setMin(e.target.value)}
              className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-slate-100 placeholder-slate-500 focus:outline-none focus:border-slate-500 transition-colors text-lg"
            />

            <input
              type="number"
              placeholder="Max"
              value={max}
              onChange={(e) => setMax(e.target.value)}
              className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-slate-100 placeholder-slate-500 focus:outline-none focus:border-slate-500 transition-colors text-lg"
            />

            <button
              onClick={randomizer}
              className="w-full py-3.5 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg text-slate-100 font-medium flex items-center justify-center gap-2 transition-all duration-200 active:scale-98"
            >
              <Shuffle className="w-4 h-4" />
              Generate
            </button>
          </div>

          {result !== null && (
            <div className="mt-8 text-center">
              <p className="text-slate-500 text-sm tracking-wider uppercase mb-2">Result</p>
              <p className="text-6xl font-bold text-slate-100 tracking-tight">
                {result}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;