const arrYear = [
  1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,//30
  1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,//58
  1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,//89
  1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,//119
  1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,//150
  1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,//180
  1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,//211
  1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,//242
  1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,//272
  1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,//303
  1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,//333
  1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,//364
]

class TDate {
  constructor (day, month, year) {
    this.day = day;
    this.month = month;
    this.year = year;
    this.startDate = `${day}/${month}/${year}`;
  }

  getIndexDate () {
    let indexDate = 0;
    if (this.month === 1) {
      indexDate = this.day - 1;
    } else if (this.month === 2) {
      indexDate = this.day + 30;
    } else if (this.month === 3) {
      indexDate = this.day + 58;
    } else if (this.month === 4) {
      indexDate = this.day + 89;
    } else if (this.month === 5) {
      indexDate = this.day + 119;
    } else if (this.month === 6) {
      indexDate = this.day + 150;
    } else if (this.month === 7) {
      indexDate = this.day + 180;
    } else if (this.month === 8) {
      indexDate = this.day + 211;
    } else if (this.month === 9) {
      indexDate = this.day + 242;
    } else if (this.month === 10) {
      indexDate = this.day + 272;
    } else if (this.month === 11) {
      indexDate = this.day + 303;
    } else if (this.month === 12) {
      indexDate = this.day + 333;
    }
    return indexDate;
  }

  increaseDay (value) {
    value = parseInt(prompt(`введіть кількість днів, яку треба додати але не більше 365`));
    if (value > 365) {
      throw new Error (`забагато днів`)
    }
    this.increaseDayValue = value;
    let newIndex = this.getIndexDate() + value;
    if (newIndex > 365) {
      ++this.year;
      newIndex = newIndex - 365;
    }
    if (newIndex <= 30) {
      this.month = 1;
      this.day = arrYear[newIndex];
    } else if (newIndex <= 58) {
      this.month = 2;
      this.day = arrYear[newIndex];
    } else if (newIndex <= 89) {
      this.month = 3;
      this.day = arrYear[newIndex];
    } else if (newIndex <= 119) {
      this.month = 4;
      this.day = arrYear[newIndex];
    } else if (newIndex <= 150) {
      this.month = 5;
      this.day = arrYear[newIndex];
    } else if (newIndex <= 180) {
      this.month = 6;
      this.day = arrYear[newIndex];
    } else if (newIndex <= 211) {
      this.month = 7;
      this.day = arrYear[newIndex];
    } else if (newIndex <= 242) {
      this.month = 8;
      this.day = arrYear[newIndex];
    } else if (newIndex <= 272) {
      this.month = 9;
      this.day = arrYear[newIndex];
    } else if (newIndex <= 303) {
      this.month = 10;
      this.day = arrYear[newIndex];
    } else if (newIndex <= 333) {
      this.month = 11;
      this.day = arrYear[newIndex];
    } else if (newIndex <= 365) {
      this.month = 12;
      this.day = arrYear[newIndex];
    } else {
      ++this.year;
    }
  };
  decreaseDay(value) {
    value = parseInt(prompt(`введіть кількість днів для віднімання, але не більше 365`));
    if (value > 365) {
      throw new Error (`забагато днів, віднімайте роки`)
    }
    this.decreaseDayValue = value;
    let newIndex = this.getIndexDate() - value;
    if (newIndex > 365) {
      --this.year;
      newIndex = 365 - (newIndex - 365);
    }
    if (newIndex <= 30) {
      this.month = 1;
      this.day = arrYear[newIndex];
    } else if (newIndex <= 58) {
      this.month = 2;
      this.day = arrYear[newIndex];
    } else if (newIndex <= 89) {
      this.month = 3;
      this.day = arrYear[newIndex];
    } else if (newIndex <= 119) {
      this.month = 4;
      this.day = arrYear[newIndex];
    } else if (newIndex <= 150) {
      this.month = 5;
      this.day = arrYear[newIndex];
    } else if (newIndex <= 180) {
      this.month = 6;
      this.day = arrYear[newIndex];
    } else if (newIndex <= 211) {
      this.month = 7;
      this.day = arrYear[newIndex];
    } else if (newIndex <= 242) {
      this.month = 8;
      this.day = arrYear[newIndex];
    } else if (newIndex <= 272) {
      this.month = 9;
      this.day = arrYear[newIndex];
    } else if (newIndex <= 303) {
      this.month = 10;
      this.day = arrYear[newIndex];
    } else if (newIndex <= 333) {
      this.month = 11;
      this.day = arrYear[newIndex];
    } else if (newIndex <= 365) {
      this.month = 12;
      this.day = arrYear[newIndex];
    } else {
      ++this.year;
    }
  }

  increaseMonth(value) {
    value = parseInt(prompt(`Введіть кількість місяць, які треба додати`));
    this.increaseMonthValue = value;
    this.month = this.month + value
    if (this.month > 12) {
      this.year += Math.floor(this.month / 12);
      this.month = Math.floor(this.month % 12)
    }
  }

  decreaseMonth(value) {
    value = parseInt(prompt(`Введіть кількість місяць, які треба відняти`));
    if (value > 12) {
      throw new Error (`Забагато місяців, віднімайте роки!`);
    }
    this.decreaseMonthValue = value;
    if (this.month === value) {
      this.month = 12;
      this.year = this.year - 1;
    } else if (this.month < value) {
      this.year = this.year - 1;
      this.month = 12 - (value - this.month);
    } else {
      this.month = this.month - value;
    }
  }

  increaseYear(value) {
    value = parseInt(prompt(`Введіть кількість років, які треба додати`));
    this.increaseYearValue = value;
    this.year += value;
  }

  decreaseYear(value) {
    value = parseInt(prompt(`Введіть кількість років, які треба відняти`));
    this.decreaseYearValue = value;
    this.year -= value;
    if (value > this.year) {
      throw new Error (`Забагато років!`);
    }
  }

  toString() {
    return `
      Змінена дата: ${this.day}/${this.month}/${this.year}.`
  }
}

let tDate = new TDate(10, 1, 1986);

document.write(`<br><br>Початкова дата: ${tDate.startDate}`);
tDate.increaseDay();
document.write(`<br>Кількість доданих днів ${tDate.increaseDayValue}<br>`);
document.write(tDate);
tDate.decreaseDay();
document.write(`<br>Кількість віднятих днів ${tDate.decreaseDayValue}<br>`);
document.write(tDate);
tDate.increaseMonth();
document.write(`<br>Кількість доданих місяців ${tDate.increaseMonthValue}<br>`);
document.write(tDate);
tDate.decreaseMonth();
document.write(`<br>Кількість віднятих місяців ${tDate.decreaseMonthValue}<br>`);
document.write(tDate);
tDate.increaseYear();
document.write(`<br>Кількість доданих років ${tDate.increaseYearValue}<br>`);
document.write(tDate);
tDate.decreaseYear();
document.write(`<br>Кількість віднятих років ${tDate.decreaseYearValue}<br>`);
document.write(tDate);
