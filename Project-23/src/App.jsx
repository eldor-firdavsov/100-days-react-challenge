import { useState } from 'react'

function App() {
  const [items, setItems] = useState([
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' }
  ])

  const handleDelete = (id) => {
    const fItems = items.filter(item => item.id !== id)
    setItems(fItems)
  }

  return (
    <div className="min-h-screen bg-black py-12 px-4">
      <div className="max-w-md mx-auto">
        <h1 className="text-4xl font-extrabold text-white mb-10 text-center tracking-tight">
          My Items
        </h1>

        {items.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg">No items left.</p>
            <p className="text-gray-700 mt-2 text-sm">Everything has been deleted.</p>
          </div>
        ) : (
          <ul className="space-y-4">
            {items.map(item => (
              <li
                key={item.id}
                className="flex items-center justify-between bg-gray-900 px-6 py-5 rounded-xl border border-gray-800 "
              >
                <span className="text-lg font-semibold text-white">
                  {item.name}
                </span>
                <button
                  onClick={() => handleDelete(item.id)}
                  className="px-5 py-2.5 bg-red-600 text-white font-medium rounded-lg hover:scale-105 transition-transform duration-250"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

export default App