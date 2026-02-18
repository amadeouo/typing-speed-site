import { makeAutoObservable } from "mobx";
import type { Level, TextData } from "@/types";
import data from './data.json'

class TypingStore {
  text: string = ""
  textLength: number = 0
  data: TextData = data

  userInput: string = "";

  constructor() {
    makeAutoObservable(this)
  }

  selectText(level: Level) {
    const levelKey = level.toLowerCase() as keyof TextData;
    const levelData = this.data[levelKey];
    
    const randomIndex = Math.floor(Math.random() * 10);
    const selectedItem = levelData[randomIndex];
    
    this.text = selectedItem.text;
    this.textLength = this.text.length;
  }

  get currentCharIndex() {
    return this.userInput.length;
  }

  handleInput(value: string): void {
    if (value.length <= this.text.length) {
      this.userInput = value;
    }
  }

  getCharStatus(index: number) {
    if (index >= this.userInput.length) return 'pending';
    return this.userInput[index] === this.text[index] ? 'correct' : 'incorrect';
  }

  resetInput() {
    this.userInput = "";
  }
}

export default new TypingStore()