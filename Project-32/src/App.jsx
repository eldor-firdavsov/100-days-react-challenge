import { useState, useEffect } from 'react'


function App() {
  const [key, setKey] = useState('')
   useEffect(() =>{
    const handleKey = (event) =>{
      setKey(event.key == '' ? 'Space' : event.key)
      console.log(key)
    }
    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("keydown", handleKey);
    };
   })

  return (
    <section className='w-screen h-screen flex flex-col justify-center items-center bg-black text-white text-center gap-10'>
      <h1 className='text-6xl font-bold'>Press Key Detector</h1>
      <p className='text-xl'>You just pressed <span className=' text-2xl font-semibold'>"{key}"</span> </p>
    </section>
  )
}

export default App
