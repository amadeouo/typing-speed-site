import logoSmallImage from '@/app/assets/images/logo-small.svg'
import logoLargeImage from '@/app/assets/images/logo-large.svg'
import trophyImage from '@/app/assets/images/icon-personal-best.svg'
import { useEffect, useState } from "react";
import { useLocalStorageContext } from "@/utils/hooks/useLocalStorageContext.tsx";

export const Header = () => {
  const [windowWidthSize, setWindowWidthSize] = useState<number>(window.innerWidth)
  const { localStorageItem } = useLocalStorageContext()

  const handleResize = () => {
    setWindowWidthSize(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <header className='flex justify-between items-center'>
      <div>
        <img
          className=''
          src={
            windowWidthSize > 700
              ? logoLargeImage
              : logoSmallImage
          }
          alt="logo image"
          width={
            windowWidthSize > 700
              ? "300"
              : "60"
          }
          height={
            windowWidthSize < 700
              ? "300"
              : "60"
          }
          loading="lazy"
        />
      </div>
      <div className='flex justify-center gap-2'>
        <img
          className=''
          src={trophyImage}
          alt="trophy image"
          width="30"
          height="30"
          loading="lazy"
        />
        <p className='text-white text-center'>
          {
            localStorageItem.wpm === 0
              ? "No records for now"
              : windowWidthSize > 700
                ? `Personal best: $ WPM`
                : `Best: $ WPM`
          }
        </p>
      </div>
    </header>
  )
}