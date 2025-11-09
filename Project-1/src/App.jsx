import { useState } from 'react'
import plusIcon from './assets/plus-icon.svg'
import minusIcon from './assets/minus-icon.svg'
import resetIcon from './assets/reset-icon.svg'

function App() {
  const [count, setCount] = useState(0)

  const handlePlus = () =>{
    setCount(count + 1)
  }
  const handleMinus = () =>{
    setCount(count - 1)
  }
  const handleReset = () =>{
    setCount(0)
  }

  if(count == 0){
    console.log('ochir nx')
  }

  return (
    <>
      <div className='bg-black w-full h-screen text-white'>
        <p className='font-semibold text-[350px] my-auto  text-center pt-15'>{count}</p>
        <button className=" px-5 py-5 border border-white rounded-full text-7xl font-bold  absolute top-80 left-10" onClick={handlePlus}><img className='w-10' src={plusIcon} alt="" /></button>
        <button className=" px-5 py-5 border border-white rounded-full text-7xl font-bold  absolute top-80 right-10" onClick={handleMinus}><img className='w-10' src={minusIcon} alt="" /></button>
        <button className=" px-5 py-5 border border-white rounded-full text-7xl font-bold  absolute top-0 right-[47%] mt-10" onClick={handleReset}><img className='w-10' src={resetIcon} alt="" /></button>
      </div>
    </>
  )
}

export default App
