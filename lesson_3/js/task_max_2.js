const randomNumber = parseInt(prompt('введіть число від 1 до 100', '1'));

const min = 1;
const max = 100;
const random_1 = min + Math.floor(Math.random()*(max - min + 1));
const random_2 = min + Math.floor(Math.random()*(max - min + 1));

let minNumber, maxNumber;

if (random_1 < random_2) {
  minNumber = random_1;
  maxNumber = random_2;
}
else if (random_1 === random_2) {
  minNumber = random_1;
  maxNumber = random_2 + 1;
} else {
  minNumber = random_2;
  maxNumber = random_1;
}

 if (randomNumber >= minNumber - 10 && randomNumber <= maxNumber + 10) {
  document.write(`
    <p>Ви виграли, ваше число ${randomNumber} знаходиться в заданому проміжку від ${minNumber} до ${maxNumber},а бо розташоване від нього на допустиму величину</p>
  `)
} else {
  document.write(`
  <p>Ви програли, ваше число ${randomNumber}  не знаходиться в заданому проміжку від ${minNumber} до ${maxNumber}, і не розташоване від нього на допустиму величину</p>
`)
}
