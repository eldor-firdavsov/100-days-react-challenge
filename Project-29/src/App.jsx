import React from 'react';
import useToggle from './useToggle'; 

function App() {
  const [isOn, toggleIsOn] = useToggle(true); 

  return (
    <div style={{backgroundColor: isOn? 'white' : 'black', color: isOn ? 'black': 'white'}} className='w-screen h-screen flex flex-col gap-4 items-center justify-center bg-black text-white text-2xl font-semibold'>
      <p>Current state: {isOn ? 'On' : 'Off'}</p>
      <button onClick={toggleIsOn} className='border-2 p-2 rounded-2xl' style={{backgroundColor: isOn? 'black' : 'white', color: isOn ? 'white': 'black'}}>Toggle</button>
    </div>
  );
}

export default App;