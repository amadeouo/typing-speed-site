import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { HashRouter } from "react-router";
import { LocalStorageProvider } from "@/app/context/LocalStorageProvider.tsx";
import { spy } from "mobx";

spy((event) => {
  if (event.type === "action") return
})

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LocalStorageProvider>
      <HashRouter>
        <App />
      </HashRouter>
    </LocalStorageProvider>
  </StrictMode>,
)
