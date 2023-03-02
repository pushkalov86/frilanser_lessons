let summ = parseFloat(prompt(`Введіть ціну товару`));

while (summ) {
  let realSumm = parseFloat(prompt(`За цей товар Вам необхідно ще сплатити ${summ} грн, скільки ви можете заплатити?`));
  if (realSumm >= summ) {
    document.write(`Дякуюмо за придбаний товар!`);
    break;
  } else if(realSumm < summ) {
    summ = summ - realSumm;
  } else if (realSumm >= summ) {
    document.write(`Дякуюмо за придбаний товар!`);
    break;
  }
}


