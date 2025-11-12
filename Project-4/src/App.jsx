import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.body.className = dark ? 'dark' : 'light';
  }, [dark]);

  return (
    <div className="min-h-screen flex flex-col gap-5 items-center justify-center">
      <h1 className='text-4xl font-bold text-blue-500'>Firdavsov Eldor</h1>
      <p >Day 4 Dark/Light Mode </p>
      <button onClick={() => setDark(!dark)} 
      className={`p-2 rounded ${ dark ? 'bg-white text-black' : 'bg-black text-white'}`}>{dark ? 'Light Mode' : 'Dark Mode'}</button>
    </div>
  );
}

export default App;
