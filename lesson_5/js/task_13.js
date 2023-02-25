const widthfield = parseInt(prompt(`Пограємо в морський бій, введіть ширину поля бою`,''));
const heightfield = parseInt(prompt(`Введіть висоту поля бою, відлік починається зверху`,''));
const curShots = parseInt(prompt(`Введіть кількість пострілів`,''));
let shipX = 1 + Math.floor(Math.random() * (widthfield));
let shipY = 1 + Math.floor(Math.random() * (heightfield));

for (let i = 0; i < curShots; i++) {
  let widthShots = parseInt(prompt(`Введіть координату пострілу по горизонталі`));
  let heightShots = parseInt(prompt(`Введіть координату пострілу по вертикалі`));
  if (widthShots === shipX && heightShots ===shipY) {
    document.write(`Вітаємо, ви потопили корабель!`);
    break;
  } else window.confirm(`Вибачте ви промазали, спробуйте ще`);
}


