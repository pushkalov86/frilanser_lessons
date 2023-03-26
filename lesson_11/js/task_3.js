function getField () {
  let field = [];
  for (let row = 0; row < 6; row++) {
    let rows = []
    for (let col = 0; col < 6; col++) {
      rows.push(0);
    }
    field.push(rows);
  }
  return field;
}

const field = getField();

function getShotField () {
  let field = [];
  for (let row = 0; row < 6; row++) {
    let rows = []
    for (let col = 0; col < 6; col++) {
      rows.push(0);
    }
    field.push(rows);
  }
  return field;
}

const shotField = getShotField();

function installShip (field) {
  let min = 0;
  let max = 5;
  let ship = 0;
  while (ship < 5) {
    let randomRow = Math.floor(Math.random()*(max - min + 1));
    let randomCol = Math.floor(Math.random()*(max - min + 1));
    if (field[randomRow][randomCol] === 0) {
      field[randomRow][randomCol] = 1;
      ship++;
    }
  }
  return field;
}

installShip(field);
document.write(`Схема розташування кораблів <br>`);
document.write(`${field[0]}<br>`);
document.write(`${field[1]}<br>`);
document.write(`${field[2]}<br>`);
document.write(`${field[3]}<br>`);
document.write(`${field[4]}<br>`);
document.write(`${field[5]}<br>`);
const curShots = parseInt(prompt(`введіть кількість пострілів`));

function getShots(field) {
  let shotFinish = 0;
  for (let i = 0; i < curShots; i++) {
    if (shotFinish === 5) {
      return 'Ви потопили всі кораблі';
    }
    const shotRow = parseInt(prompt(`введіть значення по горизонталі`));
    const shotCol = parseInt(prompt(`введіть значення по вертикалі`));
    shotField[shotRow][shotCol] = 'X';
    if (field[shotRow][shotCol] === 1) {
      alert(`Ви потопили корабель`);
      shotFinish++;
    } else alert(`Ви промазали`);
  }
  if (shotFinish < 5) {
    document.write(`ви програли`)
  }
}
const playGame = getShots(field);

document.write(`<br>Схема ударів по кораблям <br>`);
document.write(`${shotField[0]}<br>`);
document.write(`${shotField[1]}<br>`);
document.write(`${shotField[2]}<br>`);
document.write(`${shotField[3]}<br>`);
document.write(`${shotField[4]}<br>`);
document.write(`${shotField[5]}<br>`);
