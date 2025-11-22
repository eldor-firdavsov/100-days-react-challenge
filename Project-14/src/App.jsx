import { useState } from 'react';

function App() {
  const [active, setActive] = useState('tab1');

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center text-white p-8">

      <div className="flex space-x-3 mb-12">
        <button className={`relative px-10 py-4 rounded-2xl font-medium text-lg overflow-hidden transition-all duration-500 ${
            active === 'tab1' ? 'text-white' : 'text-zinc-500'
          }`}
          onClick={() => setActive('tab1')}
        >
          {active === 'tab1' && (
            <span className="absolute inset-0 bg-violet-900 rounded-2xl" />
          )}
          <span className="relative z-10">Tab 1</span>
        </button>

        <button
          className={`relative px-10 py-4 rounded-2xl font-medium text-lg overflow-hidden transition-all duration-500 ${
            active === 'tab2' ? 'text-white' : 'text-zinc-500'
          }`}
          onClick={() => setActive('tab2')}
        >
          {active === 'tab2' && (
            <span className="absolute inset-0 bg-violet-900 rounded-2xl" />
          )}
          <span className="relative z-10">Tab 2</span>
        </button>

        <button
          className={`relative px-10 py-4 rounded-2xl font-medium text-lg overflow-hidden transition-all duration-500 ${
            active === 'tab3' ? 'text-white' : 'text-zinc-500'
          }`}
          onClick={() => setActive('tab3')}
        >
          {active === 'tab3' && (
            <span className="absolute inset-0  bg-violet-900  rounded-2xl" />
          )}
          <span className="relative z-10">Tab 3</span>
        </button>
      </div>

      <div className="w-full max-w-2xl relative h-64">
        <div
          className={`absolute inset-0 transition-all duration-700 ease-out ${
            active === 'tab1' 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 -translate-y-10 pointer-events-none'
          }`}
        >
          <div className="h-full bg-zinc-950/80 backdrop-blur-2xl border border-zinc-800 rounded-3xl p-12 shadow-2xl flex items-center justify-center">
            <div className="text-center">
              <h2 className="text-5xl font-bold text-white mb-4">
                Tab 1
              </h2>
              <p className="text-zinc-400 text-lg">Content for Tab 1</p>
            </div>
          </div>
        </div>

        <div
          className={`absolute inset-0 transition-all duration-700 ease-out ${
            active === 'tab2' 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 -translate-y-10 pointer-events-none'
          }`}
        >
          <div className="h-full bg-zinc-950/80 backdrop-blur-2xl border border-zinc-800 rounded-3xl p-12 shadow-2xl flex items-center justify-center">
            <div className="text-center">
              <h2 className="text-5xl font-bold text-white  mb-4">
                Tab 2
              </h2>
              <p className="text-zinc-400 text-lg">Content for Tab 2</p>
            </div>
          </div>
        </div>

        <div
          className={`absolute inset-0 transition-all duration-700 ease-out ${
            active === 'tab3' 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 -translate-y-10 pointer-events-none'
          }`}
        >
          <div className="h-full bg-zinc-950/80 backdrop-blur-2xl border border-zinc-800 rounded-3xl p-12 shadow-2xl flex items-center justify-center">
            <div className="text-center">
              <h2 className="text-5xl font-bold text-white bg-clip-text  mb-4">
                Tab 3
              </h2>
              <p className="text-zinc-400 text-lg">Content for Tab 3</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
