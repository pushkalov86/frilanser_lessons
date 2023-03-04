function getRaiting(current) {
  let min = 1;
  let max = 5;
  let raitings = [];

  for (let i = 0; i < current; i++) {
    let randomRaiting = min + Math.floor(Math.random() * (max - min + 1));
    raitings.push(randomRaiting);
  }

  return raitings;
}

const current = parseInt(prompt(`Введіть кількість оцінок`));
const raitings = getRaiting(current);
document.write(raitings);

function getAverageRaiting(raitings) {
  let summRaiting = 0;
  for (let j = 0; j < raitings.length; j++) {
    summRaiting += raitings[j];
  }
  let averageRaiting = summRaiting / raitings.length;

  return averageRaiting.toFixed(2);
}

const averageRaiting = getAverageRaiting(raitings);
document.write(`<br>Середній бал становить - ${averageRaiting}<br>`);

function getLevelKnowledge(raitings) {
  let level = raitings[0];
  for (let i = 0; i < raitings.length; i++) {
    
    if (level > raitings[i]) {
      level = raitings[i];
    }
  }
  let levelKnowledge = '';
  switch (level) {
    case 1:
    case 2:
      levelKnowledge = 'Рівень знань - двійочник';
      break;
    case 3:
      levelKnowledge = 'Рівень знань - трійочник';
      break;
      case 4:
      levelKnowledge = 'Рівень знань - хорошист';
      break;
    case 5:
      levelKnowledge = 'Рівень знань - відмінник';
      break;
  }

  return levelKnowledge;
}

const level = getLevelKnowledge(raitings);
document.write(level);
