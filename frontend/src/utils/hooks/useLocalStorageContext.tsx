import { useContext } from "react";
import { LocalStorageContext } from "@/app/context/local-storage-context.ts";

export const useLocalStorageContext = () => {
  const context = useContext(LocalStorageContext)

  if (!context) {
    throw new Error('useCounterContext must be used within CounterContext')
  }

  return context
}