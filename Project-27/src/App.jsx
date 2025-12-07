import React from "react";
import useResizer from "./useResizer";
import { useState } from "react";

export default function App() {
  const { width, height } = useResizer();

  return (
    <div className="p-5 bg-black w-screen h-screen text-white flex flex-col gap-5 items-center justify-center">
      <h1 className="text-6xl font-bold">Window Size</h1>
      <p>Width: {width}px</p>
      <p>Height: {height}px</p>
    </div>
  );
}
