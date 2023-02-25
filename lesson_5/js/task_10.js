const numberMin = parseInt(prompt(`Введіть перше число`));//3
const numberMax = parseInt(prompt(`Введіть друге число`));//10
let summ = 0;
//4 5 6 7 8 9
if (numberMin > numberMax) {
  let temp = numberMax;
  numberMax = numberMin;
  numberMin = temp;
}

for (let i = numberMin + 1; i < numberMax; i++) {
  if (i % 2 !== 0) {
    summ += i;
  }
}
document.write(`Сумма дорівнює ${summ}`);
