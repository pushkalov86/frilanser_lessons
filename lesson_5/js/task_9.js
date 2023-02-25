let counter = parseInt(prompt(`Загадайте число від 0 до 9`));
document.write(`Ваше число ${counter} <br>`);
const min = 0;
const max = 9;

for (let i = 0; i < Infinity; i++) {
  let randomN = min + Math.floor(Math.random() * (min + max));
  let confirmQuest = confirm(`Компьютер вважає, що ваше число ${randomN}, спробуємо?`);
   if (confirmQuest === true && randomN === counter) {
    document.write(`Компьютер вгадав, ваше число ${randomN}`);
    break;
   }
   if (confirmQuest === false) {
    document.write(`компютеру треба бути наполегливішим..`);
    break;
   }
}
