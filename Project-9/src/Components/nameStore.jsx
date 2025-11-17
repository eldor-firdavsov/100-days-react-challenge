import { create } from "zustand";
import { useState, useEffect } from 'react'

const useNameStore = create((set) => ({
    name: localStorage.getItem('name') || '',
    setName: (newName) => {
      localStorage.setItem('name', newName);
      set({ name: newName });
    },
  }));
  

export default useNameStore