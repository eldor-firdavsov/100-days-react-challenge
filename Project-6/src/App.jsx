import { useState } from 'react'

function App() {
  const [input, setInput] = useState('')
  const [count, setCount] = useState(1)
  const [items, setItems] = useState([])

  const addItem = () => {
    if(input.trim() === '') 
      return(
        alert('Please fill in inputs')
      )
      else if(!count)
        return(
          alert('Please fill in inputs')
      )
    setItems([...items, { name: input, count }])
    setInput('')
    setCount(1)
  }

  const deleteItem = (index) => {
    setItems(items.filter((_, i) => i !== index))
  }

  return (
    <section className='bg-black h-screen w-screen text-white flex flex-col items-center '>
      <h1 className='text-4xl font-bold text-center mt-10'>Simple Shopping List</h1>

      <div className='mt-10 flex gap-5'>     
        <input 
          type="text"
          value={input}
          onChange={(e)=> setInput(e.target.value)}
          placeholder='Product name'
          className='border border-white p-2 rounded-lg' 
        />

        <input 
          type="number"
          value={count}
          onChange={(e) =>{
            setCount(parseInt(e.target.value))
          }}
          placeholder='Product count' 
          min={1}
          className='border border-white p-2 rounded-lg'
        />

        <button className='bg-white text-black px-5 py-2 rounded-lg font-bold' onClick={addItem}>Add</button>
      </div>

      <ul className='mt-10 flex flex-col gap-2'>
        {items.map((item, index) =>(
          <li className='text-2xl font-semibold flex gap-10' key={index}>
            {item.name} - {item.count}
            <button className='bg-red-500 text-white py-1 px-2 text-xl rounded-lg' onClick={() => deleteItem(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default App
