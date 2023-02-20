const message = parseInt(prompt('Каталог емодзі: \n1. Веселий \n2. Сумний \n3. Обурений \n Введіть номер емодзі:', ''));
let emodzi;

switch (message) {
  case 1: emodzi = '&#128515;';
    break;
  case 2: emodzi = '&#128543;';
    break;
  case 3: emodzi = '&#128544;';
    break;
  default: emodzi = '';
    break;
};

document.write(`
  <h2>${emodzi}</h2>
`);


