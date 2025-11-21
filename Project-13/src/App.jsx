import { useState } from 'react';
import { X, ShoppingCart } from 'lucide-react';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="min-h-screen bg-black flex items-center justify-center p-8">
        <div className="bg-[#393939] rounded-xl p-8 text-center space-y-6 max-w-xs w-full border border-gray-800 shadow-2xl">
          <img
            src="https://atlas-content-cdn.pixelsquid.com/stock-images/rtx-5090-graphics-card-2Jzm6r7-600.jpg"
            alt="RTX 5090"
            className="w-full h-64 object-cover rounded-lg shadow-lg"
          />
          <h3 className="text-2xl font-bold text-white">RTX 5090</h3>
          <p className="text-4xl font-extrabold text-cyan-400">$1,999</p>
          <button
            onClick={() => setIsModalOpen(true)}
            className="w-full py-4 bg-cyan-500 hover:bg-cyan-400 text-black font-bold text-lg rounded-lg flex items-center justify-center gap-3 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/50 transform hover:-translate-y-1"
          >
            <ShoppingCart className="w-5 h-5" />
            Buy Now
          </button>
        </div>
      </div>

      {isModalOpen && (
        <>
          <div
            className="fixed inset-0 bg-black bg-opacity-80 z-40"
            onClick={() => setIsModalOpen(false)}
          />

          <div className="fixed inset-0 z-50 flex items-center justify-center p-6">
            <div
              className="bg-gray-900 rounded-2xl shadow-2xl max-w-md w-full border border-gray-800 p-8 space-y-6 animate-in fade-in zoom-in duration-300"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-end">
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="p-2 hover:bg-gray-800 rounded-lg transition"
                >
                  <X className="w-6 h-6 text-gray-400" />
                </button>
              </div>

              <div className="text-center space-y-4 -mt-4">
                <div className="w-24 h-24 mx-auto bg-cyan-500/20 rounded-full flex items-center justify-center">
                  <ShoppingCart className="w-12 h-12 text-cyan-400" />
                </div>
                <h2 className="text-3xl font-bold text-white">Confirm Purchase</h2>
                <p className="text-gray-400 text-lg">
                  You're about to buy:
                </p>
                <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
                  <p className="text-xl font-bold text-white">NVIDIA RTX 5090</p>
                  <p className="text-3xl font-bold text-cyan-400 mt-2">$1,999</p>
                </div>
              </div>

              <div className="flex gap-4">
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="flex-1 py-3 border border-gray-700 text-white font-semibold rounded-lg hover:bg-gray-800 transition"
                >
                  Cancel
                </button>
                <button
                  onClick={() => {
                    alert("Purchase confirmed!");
                    setIsModalOpen(false);
                  }}
                  className="flex-1 py-3 bg-cyan-500 hover:bg-cyan-400 text-black font-bold rounded-lg transition transform hover:scale-105"
                >
                  Confirm & Pay
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default App;