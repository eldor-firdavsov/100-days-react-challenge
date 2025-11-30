import { useState } from 'react'

function App() {
  const [value, setValue] = useState('')
  const [mode, setMode] = useState('CtoF')

  const result = () => {
    if (value === '') return ''

    if (mode === 'CtoF') {
      return ((value * 9 / 5) + 32).toFixed(2)
    } else {
      return (((value - 32) * 5) / 9).toFixed(2)
    }
  }

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="bg-gray-900 rounded-2xl shadow-2xl p-8 border border-gray-800">
          <h1 className="text-3xl font-semibold text-white text-center mb-8 tracking-tight">
            {mode === 'CtoF' ? 'Celsius → Fahrenheit' : 'Fahrenheit → Celsius'}
          </h1>

          <div className="space-y-6">
            <select
              value={mode}
              onChange={(e) => setMode(e.target.value)}
              className="w-full px-5 py-4 bg-gray-800 border border-gray-700 rounded-xl text-white text-lg focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all"
            >
              <option value="CtoF">Celsius to Fahrenheit</option>
              <option value="FtoC">Fahrenheit to Celsius</option>
            </select>

            <input
              type="number"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder="Enter temperature..."
              className="w-full px-5 py-4 bg-gray-800 border border-gray-700 rounded-xl text-white text-2xl font-medium placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
            />

            <div className="text-center pt-6">
              <h2 className="text-cyan-400 text-5xl font-bold tracking-tighter">
                {result() || '—'}
              </h2>
              
            </div>
          </div>
        </div>

        
      </div>
    </div>
  )
}

export default App