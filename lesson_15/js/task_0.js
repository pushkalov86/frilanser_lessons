let obj1 = {
  arr: [1, 3, 5, 7, 9],
  getSum:  function () {
    let sum = this.arr.reduce((prev, next) => prev + next, 0);
    return sum;
  }
};

let obj2 = {
  arr: [2, 4, 6, 8],
  getMult: function (min, max) {
    let mult = this.arr.filter(el => el >= min && el <= max).reduce((prev, next) => prev * next, 1);
    return mult;
  },
};

document.write(`Масив першого об'єкту: ${obj1.arr}<br>`);
document.write(`Масив другого об'єкту: ${obj2.arr}<br>`);


const sum1 = obj1.getSum();
document.write(`сума елементів масиву першого об'єкту: ${sum1}<br>`);

const sum2 = obj1.getSum.call(obj2);
document.write(`сума елементів масиву другого об'єкту: ${sum2}<br>`);

const mult1 = obj2.getMult.call(obj1, 3, 9);
document.write(`добуток елементів масиву першого об'єкту: ${mult1}.<br>`);

const mult2 = obj2.getMult(3, 7);
document.write(`добуток елементів масиву другого об'єкту: ${mult2}`);
