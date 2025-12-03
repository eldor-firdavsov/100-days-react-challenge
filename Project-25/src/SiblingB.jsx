function SiblingB({ value }) {
    return (
      <div className="space-y-2">
        <p className="font-medium">Sibling B (output)</p>
        <div className="px-3 py-2 bg-zinc-700 rounded-lg border border-zinc-600">
          {value || "Nothing yet..."}
        </div>
      </div>
    );
  }
  
  export default SiblingB;
  