let tir = {
  createField: function (lengthField, numberRabbit) {
    let field = new Array(lengthField).fill(0);
    let max = 9
    let count = 0;
    do {
      let randomNumber = Math.floor(Math.random() * (max + 1));
      if (field[randomNumber] === 0) {
        field[randomNumber] = 1;
        count++;
      }
    } while (count < numberRabbit);
    return field;
  },
  shot: function (indexField) {
    indexField = parseInt(prompt(`Зробіть постріл в поле з 10 ячейками`));
    if (fieldWithRabbit[indexField - 1] === 1) {
      return `Ви попали в зайчика`;
    } else return `Ви промазали`;
  }
};

let fieldWithRabbit = tir.createField(10, 3)
document.write(`Поле з зайчиками: ${fieldWithRabbit}<br>`);

let shotting = tir.shot(fieldWithRabbit);
document.write(`${shotting}`);
