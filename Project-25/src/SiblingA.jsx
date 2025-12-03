function SiblingA({ value, onChange }) {
    return (
      <div className="space-y-2">
        <p className="font-medium">Sibling A (input)</p>
        <input
          className="w-full px-3 py-2 bg-zinc-700 text-zinc-100 placeholder-zinc-400
                     rounded-lg border border-zinc-600 "
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Type something..."
        />
      </div>
    );
  }
  
  export default SiblingA;
  