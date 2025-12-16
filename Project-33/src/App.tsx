import { useState } from 'react'
import plusIcon from './assets/plus-icon.svg'
import minusIcon from './assets/minus-icon.svg'
import resetIcon from './assets/reset-icon.svg'

function App(): JSX.Element {
  const [count, setCount] = useState<number>(0)

  const increment = () => setCount(prev => prev + 1)
  const decrement = () => setCount(prev => prev - 1)
  const reset = () => setCount(0)

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center relative overflow-hidden">
      <div className="text-center mb-20">
        <h1 className="text-9xl md:text-[220px] lg:text-[280px] font-semibold tracking-tight">
          {count.toString().padStart(2, '')}
        </h1>
        {count !== 0 && (
          <p className="text-zinc-600 text-lg mt-4 opacity-0 animate-fadeIn">
            Keep going
          </p>
        )}
      </div>

      <div className="flex items-center gap-8">
        <button
          onClick={decrement}
          className="group relative p-8 rounded-full border border-zinc-800 hover:border-zinc-600 transition-all duration-300"
          aria-label="Decrement"
        >
          <img
            src={minusIcon}
            alt=""
            className="w-8 h-8 opacity-70 group-hover:opacity-100 transition-opacity"
          />
        </button>

        <button
          onClick={reset}
          className={`p-6 rounded-full transition-all duration-300 ${
            count === 0
              ? 'opacity-0 pointer-events-none'
              : 'opacity-100 border border-zinc-800 hover:border-zinc-500'
          }`}
          aria-label="Reset"
        >
          <img
            src={resetIcon}
            alt=""
            className="w-6 h-6 opacity-60 hover:opacity-90 transition-opacity"
          />
        </button>

        <button
          onClick={increment}
          className="group relative p-8 rounded-full border border-zinc-800 hover:border-zinc-600 transition-all duration-300"
          aria-label="Increment"
        >
          <img
            src={plusIcon}
            alt=""
            className="w-8 h-8 opacity-70 group-hover:opacity-100 transition-opacity"
          />
        </button>
      </div>

      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-zinc-900 rounded-full blur-3xl opacity-20" />
      </div>
    </div>
  )
}

export default App