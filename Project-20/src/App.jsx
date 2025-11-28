import { useState } from 'react';

function App() {
  const [password, setPassword] = useState('');
  const [length, setLength] = useState(12);

  const generate = () => {
    const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+';
    let newPassword = '';

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      newPassword += charset[randomIndex];
    }
    setPassword(newPassword);
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-6">
      <div className="text-center space-y-10">
        <h1 className="text-4xl font-semibold text-white tracking-widest">
          Random Password
        </h1>

        <button
          onClick={generate}
          className="px-10 py-4 border text-white font-medium rounded-full transition-all duration-300 shadow-lg hover:shadow-cyan-500/30 transform hover:scale-105"
        >
          Generate password
        </button>

        <p className="text-2xl font-mono text-white tracking-wider break-all max-w-2xl px-8">
          {password || '—'}
        </p>
      </div>
    </div>
  );
}

export default App;