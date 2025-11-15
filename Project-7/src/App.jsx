import { useState, useEffect } from 'react'


function App() {
  const [products, setProducts] = useState([])
  const [search, setSearch] = useState('')

  useEffect(()=>{
    fetch('https://fakestoreapi.com/products')  
    .then(r => r.json())
    .then(setProducts)
  }, [])

  const displayedProducts = products.filter(product=> product.title.toLowerCase().includes(search.toLowerCase()))

  function handleChange(e){
    setSearch(e.target.value)
  }
  


  return (
    <>
    <div className='w-full flex justify-center mt-10'>
      <input type="text" placeholder='Search...'  className='border border-grey-400 px-5 py-2 rounded-lg' value={search}  onChange={handleChange}/>
    </div>
      <div className="w-full flex justify-center py-10 bg-gray-50">
        <ul className="flex flex-wrap gap-8 justify-center max-w-[1200px]">
          {displayedProducts.map((product, index) => (
            <li
              key={index}
              className="w-[250px] flex flex-col items-center bg-white rounded-lg shadow-sm p-4"
            >
              <img
                src={product.image}
                className="w-full h-[200px] object-contain mb-4"
              />
              <p className="text-center text-gray-800 font-medium text-lg">{product.title}</p>
            </li>
          ))}
        </ul>
      </div>

    </>
  )
}

export default App
