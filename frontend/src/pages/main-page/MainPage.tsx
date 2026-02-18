import { Header } from "@/layouts/header/Header.tsx";
import { Settings } from "@/components/Settings.tsx";
import { TypingArea } from "@/components/TypingArea.tsx";

export const MainPage = () => {
  return (
    <div className='px-4 pt-2 sm:px-10 sm:pt-8'>
      <Header />
      <Settings />
      <TypingArea />
    </div>
  )
}