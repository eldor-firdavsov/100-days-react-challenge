import { useState } from 'react'
import Header from './Header'

function App() {

  return (
    <>
      <Header/>
      <section className='bg-black h-300 flex flex-col  items-center'>
        <h1 className='text-white pt-[250px] text-8xl font-bold w-[90%] text-center '>So this header will change whenever I scroll, right?</h1>
        <h1 className='text-white pt-[350px] text-8xl font-bold w-[90%] text-center '>Damn!</h1>
      </section>
    </>
  )
}

export default App
