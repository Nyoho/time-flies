export class Time {
  date: Date
  year: number
  nextNewYear: Date
  thisNewYear: Date
  ratio: number
  remain: number
  oneDay: Date
  humanYear: number
  humanString: string

  constructor(date: Date)
  static getDateString(dt: Date): string
  static getTimeString(dt: Date, lang?: string): string
}
