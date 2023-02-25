const currentNumber = parseInt(prompt(`Введіть кількість випадкових чисел`));

const minNumber = 1;
const maxNumber = 100;

for (let i = 0; i < currentNumber; i++) {
  const rundomNumber = minNumber + Math.floor(Math.random() * (minNumber + maxNumber - 1));

  document.write(`
    <li>${rundomNumber}</li>
  `)
}