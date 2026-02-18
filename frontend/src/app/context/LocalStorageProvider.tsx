import { LocalStorageContext } from "@/app/context/local-storage-context.ts";
import type { ReactNode } from "react";
import { useLocalStorage } from "usehooks-ts";
import type { TLocalStorageItem } from "@/types";

type LocalStorageProviderProps = {
  children: ReactNode;
}

export const LocalStorageProvider = ({ children }: LocalStorageProviderProps) => {
  const [localStorageItem, setLocalStorageItem] = useLocalStorage<TLocalStorageItem>("typing-text", {
    wpm: 0,
    difficulty: "Easy",
    timeOption: "Timed (60s)",
  });

  return (
    <LocalStorageContext.Provider value={{ localStorageItem, setLocalStorageItem }}>
      {children}
    </LocalStorageContext.Provider>
  )
}