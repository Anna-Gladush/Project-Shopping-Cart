import { useState } from "react";

function useLocalStorage<T> (key: string, initialValue: T) {
  const [storedValue, setStoreValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.log(error);
      return initialValue;
    }
  })

  const setValue = (value: unknown) => {
    try {
      setStoreValue(value);
      window.localStorage.setItem(key, JSON.stringify(value))
    } catch (error) {
      console.log(error);
    }
  }

  return { storedValue, setValue }
}

export { useLocalStorage };