import { useState } from "react"

function App() {
  const [savedInp, setSavedInp] = useState('')

  const handleText = (e)=>{
    setSavedInp(e.target.value)
  }
  console.log(savedInp)

  return (
    <>
      <div className="bg-black w-full h-screen text-white flex flex-col items-center">
        <div className="text-white flex flex-col items-center my-auto gap-10">
          <input className="p-3 border-white border rounded-2xl" onChange={handleText} value={savedInp}  type="text" placeholder="Type here"/>
          <p className="opacity-75">{savedInp ? savedInp : 'Type something on input...'}</p>
        </div>
      </div>
    </>
  )
}

export default App
