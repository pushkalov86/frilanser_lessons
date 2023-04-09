class auto {
  constructor (brand, tankSize, numbersLiters, numbersSeat, numbersPass) {
    this.brand = brand;
    this.tankSize = tankSize;
    this.numbersLiters = numbersLiters;
    this.numbersSeat = numbersSeat;
    this.numbersPass = numbersPass;
  };

  RefLiters(val) {
    if (val <= this.tankSize - this.numbersLiters) {
      this.numbersLiters = this.numbersLiters + val;
    } else {
      this.numbersLiters = this.tankSize;
    }
    return this.numbersLiters;
  }
  NumbersPass () {
    return `${this.numbersPass}`;
  }
  AddPassangers(pass) {
    if (pass > this.numbersSeat - this.numbersPass) {
      throw new Error ('Цей автомобіль не може вмістити стільки пасажирів.<br>');
    } else {
      return this.numbersPass = this.numbersPass + pass;
    };
  };
  DeletePassangers(pass) {
    if (pass > this.numbersPass) {
      throw new Error ('Некоректне значення');
    } return this.numbersPass = this.numbersPass - pass;

  }
}

let auto1 = new auto('audi', 60, 20, 5, 2);
document.write(`Кількість палива в баці: ${auto1.RefLiters(30)}<br>`);
document.write(`Кількість пасажирів в авто ${auto1.NumbersPass()}<br>`);
document.write(`Нова кількість пасажирів: ${auto1.AddPassangers(3)}<br>`);
document.write(`Нова кількість пасажирів після висадки: ${auto1.DeletePassangers(4)}`);



