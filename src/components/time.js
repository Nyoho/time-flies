const Time = class {
  constructor(date) {
    this.date = date;
    this.year = date.getFullYear();
    this.nextNewYear = new Date(this.year+1, 0, 1);
    this.thisNewYear = new Date(this.year  , 0, 1);
        
    this.ratio = (date - this.thisNewYear) / (this.nextNewYear - this.thisNewYear);
    this.remain = 1 - this.ratio;

    this.oneDay = new Date(1000*(this.thisNewYear/1000 + 24*60*60*this.ratio))
        
    const d = this.year + 200000.0*(this.ratio-1.0);
    this.humanYear = Math.abs(d);
    if (this.human >= 0) {
            this.humanString = "西暦 " + parseInt(d) + " 年"
        } else {
            this.humanString = "紀元前 " + parseInt(-d) + " 年"
        }
  }
}

export { Time };
