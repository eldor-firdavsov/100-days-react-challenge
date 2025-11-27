import { useState } from 'react'
import { Dice1, Dice2, Dice3, Dice4, Dice5, Dice6 } from 'lucide-react'

function App() {
  const [diceValues, setDiceValues] = useState([1, 1])

  const rollDice = () => {
    const newValues = diceValues.map(() => Math.floor(Math.random() * 6) + 1)
    setDiceValues(newValues)
  }

  const diceIcons = {
    1: <Dice1 size={64} strokeWidth={1.5} />,
    2: <Dice2 size={64} strokeWidth={1.5} />,
    3: <Dice3 size={64} strokeWidth={1.5} />,
    4: <Dice4 size={64} strokeWidth={1.5} />,
    5: <Dice5 size={64} strokeWidth={1.5} />,
    6: <Dice6 size={64} strokeWidth={1.5} />
  }

  return (
    <>
      <div className="min-h-screen bg-black flex flex-col items-center justify-center gap-12 px-4">
        <h1 className="text-5xl md:text-6xl font-bold text-white tracking-tight">
          Roll the Dice
        </h1>

        <div className="flex gap-8 md:gap-12">
          {diceValues.map((value, index) => (
            <div
              key={index}
              className="w-32 h-32 md:w-40 md:h-40 bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl shadow-2xl flex items-center justify-center "
            >
              <div className="text-white">
                {diceIcons[value]}
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={rollDice}
          className="cursor-pointer border-2 hover:bg-[#2d2f30] px-12 py-5 bg-black text-white font-semibold text-xl rounded-full shadow-lg transform transition-all duration-300"
        >
          Roll Dice
        </button>
      </div>
    </>
  )
}

export default App