// App.jsx
import React from "react";

const images = [
  "https://images.pexels.com/photos/1525041/pexels-photo-1525041.jpeg",
  "https://t3.ftcdn.net/jpg/15/42/32/32/360_F_1542323292_vpxI2BypeFHgSZUvuSRlJLACFn0yzp6d.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_U85omYQhhV3gBPSVlLd52e3IIIyU5NHyJA&s",
  "https://cdn.wallpapersafari.com/0/42/6EK9OD.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQb3JhNGvAIhAebS1h-lK8VEpK-2yXjmAiHVg&s"
];

export default function App() {
  return (
    <div className="p-4 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {images.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`Gallery ${index}`}
          className="w-full h-48 object-cover rounded"
        />
      ))}
    </div>
  );
}
