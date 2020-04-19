import { useState, useEffect } from "react";

export default function usePersistedState(key, initialValue) {
  const [state, setState] = useState(() => {
    const storageTheme = localStorage.getItem(key);

    if (storageTheme) {
      return JSON.parse(storageTheme);
    } else {
      return initialValue;
    }
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
}
