let summ = parseFloat(prompt(`Введіть ціну товару`));
let realSumm = parseFloat(prompt(`За цей товар Вам необхідно ще сплатити ${summ} грн, скільки ви можете заплатити?`));

if (realSumm >= summ) {
  document.write(`Дякуюмо за придбаний товар!`)
}

while (realSumm < summ) {
  summ = summ - realSumm;
  realSumm = parseFloat(prompt(`За цей товар Вам необхідно ще сплатити ${summ} грн, скільки ви можете заплатити?`));
  if (realSumm >= summ) {
    document.write(`Дякуюмо за придбаний товар!`)
  }
}
