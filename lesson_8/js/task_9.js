const indexArray = parseInt(prompt(`Введіть кількість клітинок`));
const shipNumber = parseInt(prompt(`Введіть кількість кораблів`));

let ArrayPlay = [];

function getArrayPlay(ArrayPlay) {
  let shipNumberPlay = shipNumber;

  for (let i = 0; i < indexArray; i++) {
    ArrayPlay[i] = 0;
  };

  for (let j = 0; j < shipNumberPlay; j++) {
    let randomIndex = Math.floor(Math.random() * indexArray);
    if (ArrayPlay[randomIndex] === 0) {
      ArrayPlay[randomIndex] = 1;
    } else {
      shipNumberPlay++;
    };
  };

  return ArrayPlay;
};

function getShotClient(ArrayPlay) {
  let hit = 0;
  for (let i = 0; i < Infinity; i++) {
    const shot = parseInt(prompt(`Введіть номер клітинки в якій ймовірно є корабель`));
    if (ArrayPlay[shot - 1] === 1) {
      hit++;
      if (hit === shipNumber) {
        return `Поздоровляємо, Ви збили всі кораблі!`
      };
    };
  };
};

const ArrayPlayFinish = getArrayPlay(ArrayPlay);
document.write(`Комп'ютер розмістив кораблі в такому порядку: ${ArrayPlayFinish}`);
document.write(`<br><br>`);
const shotClient = getShotClient(ArrayPlay);
document.write(shotClient);
