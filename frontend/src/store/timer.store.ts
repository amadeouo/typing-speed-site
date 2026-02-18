import { makeAutoObservable, runInAction, when } from "mobx";

class TimerStore {
  time: number = 60
  isStarted: boolean = false
  private intervalId: number | null = null

  constructor() {
    makeAutoObservable(this)
  }

  startTime() {
    if (this.isStarted) return

    this.isStarted = true

    this.time--

    this.intervalId = setInterval(() => {
      runInAction(() => {
        this.time--
      })
    }, 1000)
    when(
      () => this.time === 0,
      () => this.stopTime()
    )
  }

  stopTime() {
    if (this.intervalId) {
      clearInterval(this.intervalId)
      this.intervalId = null
    }
    this.isStarted = false
  }

  resetTime() {
    this.stopTime()
    this.time = 60
  }
}

export default new TimerStore()