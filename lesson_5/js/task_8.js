let counter = parseInt(prompt(`Загадайте число від 0 до 9`));
document.write(`Ваше число ${counter} <br>`);

for (let i = 1; i < 4; i++) {
  const min = 0;
  const max = 9;
  const randomN = min + Math.floor(Math.random() * (min + max - 1))
  if (window.confirm(`спробувати вгадати компьютеру з ${i} спроби? це число ${randomN}?`)) {

    if (randomN !== counter) {
      document.write(`
        Компютер не вгадав з ${i} спроби, його варіант ${randomN} <br>
      `)
    } else {
      document.write(`Компютер вгадав з ${i} спроби ${randomN} , це число ${counter}<br>`)
      break;
    }
  }
}

// for (let i = 1; i < 4; i++) {
//   if (window.confirm(`спробувати вгадати компьютеру з ${i} спроби?`)) {
//     const min = 0;
//     const max = 9;
//     const randomN = min + Math.floor(Math.random() * (min + max - 1))
//     if (randomN !== counter) {
//       document.write(`
//         Компютер не вгадав з ${i} спроби, його варіант ${randomN} <br>
//       `)
//     } else {
//       document.write(`Компютер вгадав з ${i} спроби <br>`)
//       break;
//     }
//   }
// }
