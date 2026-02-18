import { observer } from "mobx-react-lite";
import timerStore from "@/store/timer.store.ts";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu.tsx";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group.tsx";
import { useEffect, useState } from "react";
import { Label } from "@/components/ui/label.tsx";
import downArrow from "@/app/assets/images/icon-down-arrow.svg"
import { Button } from "@/components/ui/button.tsx";
import generatorStore from "@/store/typing.store.ts";
import type { Level, TimeOptions } from "@/types";
import typingStore from "@/store/typing.store.ts";
import { useLocalStorageContext } from "@/utils/hooks/useLocalStorageContext.tsx";

const difficulties = ["Easy", "Medium", "Hard"]
const timeOptions = ["Timed (60s)", "Passage"]

export const Settings = observer(() => {
  const {setLocalStorageItem, localStorageItem} = useLocalStorageContext()
  const [difficulty, setDifficulty] = useState<Level>(localStorageItem.difficulty)
  const [timeOption, setTimeOption] = useState<TimeOptions>(localStorageItem.timeOption)
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth)

  const handleSetDifficulty = (difficulty: Level) => {
    setDifficulty(difficulty)
    setLocalStorageItem({ ...localStorageItem, difficulty: difficulty })
  }
  const handleSetTimeOption = (timeOption: TimeOptions) => {
    setTimeOption(timeOption)
    setLocalStorageItem({ ...localStorageItem, timeOption: timeOption })
  }

  const resizeHandler = () => {
    setWindowWidth(window.innerWidth)
  }

  console.log(windowWidth)

  useEffect(() => {
    generatorStore.selectText(difficulty)
    typingStore.resetInput()
  }, [difficulty])

  useEffect(() => {
    window.addEventListener("resize", resizeHandler)
    return () => window.removeEventListener("resize", resizeHandler)
  }, [])

  return (
    <section className='text-white text-center mt-10 lg:flex-row'>
      <div className='lg:flex lg:justify-between'>
        <div className='flex flex-col sm:flex-row sm:justify-center'>
          <div className='flex justify-between items-center h-10 sm:gap-4'>
            <div className='flex flex-col pl-4 gap-1 sm:flex-row sm:items-center sm:gap-3 sm:pl-0'>
              <span className='text-base text-neutral-400 sm:text-lg'>WPM:</span>
              <span className='text-2xl sm:text-3xl'>0</span>
            </div>

            <div className='h-10 w-px bg-neutral-400'></div>

            <div className='flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-3'>
              <span className='text-sm text-neutral-400 sm:text-lg'>Accuracy:</span>
              <span className='text-2xl sm:text-3xl'>100%</span>
            </div>

            <div className='h-10 w-px bg-neutral-400'></div>

            <div className='flex flex-col pr-4 gap-1 sm:flex-row sm:items-center sm:gap-3'>
              <span className='text-sm text-neutral-400 sm:text-lg'>Time:</span>
              <span className='text-2xl sm:text-3xl'>{`0:${timerStore.time}`}</span>
            </div>
          </div>
        </div>
          {
            windowWidth < 700
              ? (
                <div className='flex justify-between mt-4 gap-2 sm:mt-2'>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button className="bg-neutral-900 border-1 border-neutral-500 flex-1 max-w-[300px]">
                        <span className="text-white">{difficulty}</span>
                        <img
                          className=''
                          src={downArrow}
                          alt="down arrow image"
                          width="10"
                          height="10"
                          loading="lazy"
                        />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                      className="w-[var(--radix-dropdown-menu-trigger-width)] bg-neutral-900 border-neutral-700"
                    >
                      <RadioGroup
                        value={difficulty}
                        onValueChange={(value: string) => handleSetDifficulty(value as Level)}
                        className="p-2"
                      >
                        {difficulties.map((item) => (
                          <DropdownMenuItem
                            key={item}
                            className="flex gap-2 p-2 relative items-center hover:bg-neutral-800 rounded-md cursor-pointer"
                          >
                            <RadioGroupItem
                              value={item}
                              id={item}
                              className="border-neutral-500 text-white"
                            />
                            <Label
                              htmlFor={item}
                              className="absolute w-full p-2 pl-6 text-white cursor-pointer rounded"
                            >
                              {item}
                            </Label>
                          </DropdownMenuItem>
                        ))}
                      </RadioGroup>
                    </DropdownMenuContent>
                  </DropdownMenu>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button className="flex-1 bg-neutral-900 border-1 border-neutral-500 max-w-[300px]">
                        <span className="text-white">{timeOption}</span>
                        <img
                          className=''
                          src={downArrow}
                          alt="down arrow image"
                          width="10"
                          height="10"
                          loading="lazy"
                        />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                      className="w-[var(--radix-dropdown-menu-trigger-width)] bg-neutral-900 border-neutral-700"
                    >
                      <RadioGroup
                        value={timeOption}
                        onValueChange={(value: string) => handleSetTimeOption(value as TimeOptions)}
                      >

                        {timeOptions.map((item) => (
                          <DropdownMenuItem
                            key={item}
                            className="flex gap-2 p-2 relative items-center hover:bg-neutral-800 rounded-md cursor-pointer"
                          >
                            <RadioGroupItem
                              value={item}
                              id={item}
                              className="border-neutral-500 text-white"
                            />
                            <Label
                              htmlFor={item}
                              className="absolute w-full p-2 pl-6 text-white cursor-pointer rounded"
                            >
                              {item}
                            </Label>
                          </DropdownMenuItem>
                        ))}
                      </RadioGroup>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              )
              : (
                <div className='flex justify-center mt-4 items-center lg:mt-0 md:gap-2'>
                  <div className='flex gap-2 items-center'>
                    <span className='text-neutral-500'>Difficulty:</span>
                    {difficulties.map((item) => (
                      <Button
                        className={`bg-neutral-900 border-1 border-neutral-500 rounded-md cursor-pointer ${item === difficulty && "text-blue-400 border-blue-400"}`}
                        onClick={() => handleSetDifficulty(item as Level)}
                        key={item}
                      >
                        {item}
                      </Button>
                    ))}
                  </div>
                  <hr className='md:hidden lg:flex mx-5 h-10 w-px bg-neutral-400'/>
                  <div className='flex gap-2 items-center'>
                    <span className='text-neutral-500'>Mode:</span>
                    {timeOptions.map((item) => (
                      <Button
                        className={`bg-neutral-900 border-1 border-neutral-500 rounded-md ${item === timeOption && "text-blue-400 border-blue-400"}`}
                        onClick={() => handleSetTimeOption(item as TimeOptions)}
                        key={item}
                      >
                        {item}
                      </Button>
                    ))}
                  </div>
                </div>
              )
          }
      </div>
      {windowWidth > 700 && (<hr className='border-neutral-400 mt-4'/>)}
    </section>
  )
})