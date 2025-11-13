import { useState } from 'react'

const array = [
  "If you get tired, learn to rest – not to quit!",
  "Life is 10% what happens to you and 90% how you react to it. – Charles R. Swindoll",
  "Never measure your progress by using someone else’s ruler.",
  "Prove yourself to yourself, not others.",
  "Life is a constant exchange of beauty and wisdom.",
  "At some point, the pain of not doing it becomes greater than the pain of doing it. – Steven Pressfield",
  "Don’t let yesterday take up too much of today. – Will Rogers",
  "You’ll never change your life until you change something you do daily. – John C. Maxwell",
  "Not all storms come to disrupt your life. Some come to clear your path.",
  "Stop being afraid of what could go wrong and start being positive about what could go right. – Tony Robbins",
  "If the plan doesn’t work, change the plan but never the goal.",
  "Action breeds confidence and courage. Inaction breeds doubt and fear. – Dale Carnegie",
  "Optimism is the faith that leads to achievement. Nothing can be done without hope and confidence. – Helen Keller",
  "It is better to fail in originality than to succeed in imitation. – Herman Melville",
  "The way to get started is to quit talking and begin doing. – Walt Disney",
  "When you have a million dollar vision … don’t surround yourself with 1 cent minds!",
  "Success is knowing your purpose in life, growing to reach your maximum potential, and sowing seeds that benefit others. – John C. Maxwell",
  "We must believe that we are gifted for something and that this thing must be attained. – Marie Curie",
  "Work hard, be kind, and amazing things will happen. – Conan O’Brien",
  "Never give up because great things take time.",
  "If it is important to you, you will find a way. If not, you will find an excuse.",
  "Never be a prisoner of your past. It was just a lesson, not a life sentence.",
  "You are what you do, not what you say you’ll do."
]

function App() {
  const [selected, setSelected] = useState('')
  const [isVisible, setIsVisible] = useState(false)

  const pickRandom = () => {
    const randomIndex = Math.floor(Math.random() * array.length)
    setSelected(array[randomIndex])
  }
  const hideItem = () =>{
    setIsVisible(!isVisible)
  }

  return (
    <section className="w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-10 p-5">
      <button 
        className="text-xl border px-6 py-3 rounded hover:bg-white hover:text-black transition-all absolute top-60"
        onClick={() =>{pickRandom(); hideItem()}}
      >
        {isVisible ? 'Hide motivation' : 'Show motivation'}
      </button>
      {isVisible ? <p className="text-center max-w-2xl text-lg italic">{selected}</p> : ''}
    </section>
  )
}

export default App
