import { useState } from 'react'
import Button from './Components/Button'


function App() {

  const [color, setColor] = useState('white')
  const [bgColor, setbgColor] = useState('#02006C')

  const toggle = ()=>{
    setbgColor(prev => prev  === '#02006C' ? 'white' : '#02006C')
    setColor(prev => prev  === 'white' ? 'black' : 'white')
  }

  

  return (
    <>
      <section className="bg-[#010048] h-screen flex items-center justify-center ">
        <Button style={{backgroundColor: bgColor, color: color}} onClick={toggle} text={'Made with Props'}></Button>
      </section>

    </>
  )
}

export default App
