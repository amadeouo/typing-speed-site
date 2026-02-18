import { observer } from "mobx-react-lite";
import timerStore from "@/store/timer.store.ts";

export const Timer = observer(() => {

  return (
    <div className='text-white'>
      <div>
        {timerStore.time}
      </div>
      <div className='flex'>
        <button onClick={() => timerStore.startTime()}>
          Старт
        </button>
        <button onClick={() => timerStore.stopTime()}>
          Стоп
        </button>
        <button onClick={() => timerStore.resetTime()}>
          Ресет
        </button>
      </div>
    </div>
  )
})