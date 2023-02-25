const numberMin = parseInt(prompt(`Введіть перше число`));//3
const numberMax = parseInt(prompt(`Введіть друге число`));//17
let summ = 0;
let counter = 0;
//4 5 6 7 8 9 10 11 12 13
if (numberMin > numberMax) {
  let temp = numberMax;
  numberMax = numberMin;
  numberMin = temp;
}

for (let i = numberMin + 1; i < numberMax && counter < 5; i++) {
  if (i % 2 !== 0) {
    summ += i;
    ++counter;
  }
}
document.write(`Сумма дорівнює ${summ}`);
