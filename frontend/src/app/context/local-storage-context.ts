import { createContext, type Dispatch, type SetStateAction } from "react";
import type { TLocalStorageItem } from "@/types";

export type TLocalStorageContext = {
  localStorageItem: TLocalStorageItem;
  setLocalStorageItem: Dispatch<SetStateAction<TLocalStorageItem>>;
}

export const LocalStorageContext = createContext<TLocalStorageContext | undefined>(undefined);