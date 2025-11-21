import { useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react"; // Recommended: use lucide-react icons instead of SVG imports

export default function Accordion({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full max-w-2xl mx-auto my-30">
      <div className="bg-[#494949]  rounded-xl shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md">
        
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full px-6 py-5 flex items-center justify-between text-left transition-all duration-200 "
          aria-expanded={isOpen}
          aria-controls="accordion-content"
        >
          <h3 className="text-xl font-semibold text-white">
            {title}
          </h3>
          
          {/* Animated Chevron */}
          <span className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          <ChevronDown className="w-6 h-6 text-white" />

          </span>
        </button>

        {/* Content with smooth height animation */}
        <div
          className={`transition-all duration-500 ease-in-out overflow-hidden ${
            isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="px-6 pb-6 pt-2">
            <div className="text-white leading-relaxed text-xl font-semibold">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}