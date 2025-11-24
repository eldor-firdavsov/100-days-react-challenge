import { useState } from 'react'
import Prop from './Prop'


function App() {

  return (
    <section className='flex items-center justify-center'>
      <Prop pfp={'https://upload.wikimedia.org/wikipedia/commons/f/f5/Poster-sized_portrait_of_Barack_Obama.jpg'} name={'Obama'} description={'Good at coding and gaming'} theme={'#151c74'}>
        
      </Prop>
    </section>
  )
}

export default App
