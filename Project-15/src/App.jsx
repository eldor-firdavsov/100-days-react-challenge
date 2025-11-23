import { useState } from "react";

export default function App() {
  const [color, setColor] = useState("#ffffff");
  const [copied, setCopied] = useState(false);

  const handleChange = (e) => {
    setColor(e.target.value);
  };

  const copyColor = () => {
    copyToClipboard(color);
  };

  const copyToClipboard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true)
      setTimeout(() =>{
        setCopied(false)
      }, 2000)
    } catch (err) {
      console.error("Copy failed", err);
    }
  };


  return (
    <div className="flex w-screen h-screen flex-col items-center justify-center gap-5">
      <h1 className="text-4xl font-bold">Simple Color Picker</h1>

      <div
        className="w-[100px] h-[100px] border border-black"
        style={{ background: color }}
      ></div>

      <input type="color" value={color} onChange={handleChange} className="" />

      <div className="flex items-center gap-2">
        <input
          value={color}
          readOnly
          className="px-3 py-2 border rounded-md"
        />
        <button
          onClick={copyColor}
          className="px-3 py-2 border rounded-md bg-gray-100 hover:bg-gray-200"
        >
          {copied ? 'Copied' : 'Copy'}
        </button>
      </div>
    </div>
  );
}
