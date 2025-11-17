import { useState, useEffect } from 'react'
import useNameStore from './Components/nameStore'
import bg from './assets/bg2.jpg'




function App() {
  const {name, setName} = useNameStore()
  const [input, setInput] = useState('')

  useEffect(() =>{
      if(name) setInput(name)
  }, [name])

  const handleClick = () =>{
      if(input.trim() !== ''){
          setName(input.trim())
      }
  }

  return (
    <>
      <section style={{ 
        backgroundImage: `url(${bg})`, 
        backgroundSize: 'cover',       
        backgroundPosition: 'center',  
        backgroundRepeat: 'no-repeat'  
      }}  className='w-screen h-screen text-white flex items-center justify-center'>
        {!name ? <div className='flex gap-10'>
            <input className='placeholder:text-white placeholder:font-bold  placeholder:text-4xl font-bold text-4xl border-b-3 border-white outline-none px-10 py-3  ' type="text" placeholder="Ismingizni kiriting" value={input} onChange={(e)=>{setInput(e.target.value)}}/>
            <button className='border-3 rounded-3xl text-2xl bg-transparent font-semibold p-3' onClick={handleClick}>Submit</button>
        </div> :  <h1 className='text-white font-bold text-5xl'>Salom {name}</h1>
        }
      </section>
    </>
  )
}

export default App

// export default function nameStore(){
//   const [name, setName] = useState()
//   const [input, setInput] = useState('')

//   useEffect(() =>{
//       if(name) setInput(name)
//   }, [name])

//   const handleClick = () =>{
//       if(input.trim() !== ''){
//           setName(input.trim())
//       }
//   }

//   return(
//       <div>
//           <input type="text" placeholder="Ism" value={name} onChange={(e)=>{setInput(e.target.value)}}/>
//           <button onClick={handleClick}>Submit</button>
//       </div>
//   )
// }