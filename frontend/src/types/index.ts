export type Level = "Hard" | "Medium" | "Easy"

export type TimeOptions = "Timed (60s)" | "Passage"

export type TLocalStorageItem = {
  wpm: number,
  difficulty: Level,
  timeOption: TimeOptions,
}

export interface TextData {
  easy: {
    id: string
    text: string
  }[]
  medium: {
    id: string
    text: string
  }[]
  hard: {
    id: string
    text: string
  }[]

}