const Time = class {
  constructor(date) {
    this.date = date;
    // this.date = date.toString();
    this.year = date.getFullYear();
    this.nextNewYear = new Date(this.year+1, 0, 1);
    this.thisNewYear = new Date(this.year  , 0, 1);
        
    this.ratio = (date - this.thisNewYear) / (this.nextNewYear - this.thisNewYear);
    this.remain = 1 - this.ratio;

    this.oneDay = new Date(1000*(this.thisNewYear/1000 + 24*60*60*this.ratio))
        
    const d = this.year + 200000.0*(this.ratio-1.0);
    this.humanYear = Math.abs(d);
    if (d >= 0) {
            this.humanString = "西暦 " + Math.ceil(d) + " 年"
        } else {
            this.humanString = "紀元前 " + Math.ceil(-d) + " 年"
        }

    this.getDateString = () => {
      const dt = this.date;
      const y = dt.getFullYear();
      const m = ("00" + (dt.getMonth()+1)).slice(-2);
      const d = ("00" + dt.getDate()).slice(-2);
      return `${y}年${m}月${d}日`;
    };

    this.getTimeString = () => {
      const dt = this.date;
      const h = dt.getHours();
      const m = ("00" + dt.getMinutes()).slice(-2);
      const s = ("00" + dt.getSeconds()).slice(-2);
      const ss = ("000" + dt.getMilliseconds()).slice(-3);
      return `${h}:${m}:${s}.${ss}`;
    };
  }
}

export { Time };
