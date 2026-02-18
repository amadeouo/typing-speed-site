import { makeAutoObservable } from "mobx";

class CountersStore {
  wpm = 0
  accuracy = 100

  constructor() {
    makeAutoObservable(this)
  }
}

export default new CountersStore();