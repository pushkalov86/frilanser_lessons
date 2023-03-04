function getVisitors() {
  let min = 1;
  let max = 30;
  let visitors = [];
  let week = 7;

  for (let i = 1; i <= week; i++) {
    let randomNumberVisitors = min + Math.floor(Math.random() * (max - min + 1));
    visitors.push(randomNumberVisitors);
    document.write(`В ${i} день тижня було ${randomNumberVisitors} відвідувачів.<br>`)
  }

  return visitors;
}

const visitors = getVisitors();

function getNumberDayLess20(visitors) {
  let visitorsLess20 = [];
  for (let i = 0; i <= visitors.length - 1; i++) {
    if (visitors[i] < 20) {
      visitorsLess20.push(i + 1);
    }
  }

  return `<br> В ${visitorsLess20} дні тижня кількість відвідувачів була менше 20. <br>`
}

function getNumberDayMin(visitors) {
  let visitorsMinDays = [];
  let minNumberVisitor = visitors[0];
  let result = [];
  for (let i = 1; i < visitors.length; i++) {
    if (minNumberVisitor > visitors[i]) {
      minNumberVisitor = visitors[i]
    }
  }
  for (let j = 0; j < visitors.length; j++) {
    if (minNumberVisitor === visitors[j]) {
      visitorsMinDays.push(j + 1);
    }
  }

  return `<br> В ${visitorsMinDays} день тижня кількість відвідувачів була мінімальна. <br>`
}

function getNumberDayMax(visitors) {
  let visitorsMaxDays = [];
  let maxNumberVisitor = visitors[0];
  let result = [];
  for (let i = 1; i < visitors.length; i++) {
    if (maxNumberVisitor < visitors[i]) {
      maxNumberVisitor = visitors[i]
    }
  }
  for (let j = 0; j < visitors.length; j++) {
    if (maxNumberVisitor === visitors[j]) {
      visitorsMaxDays.push(j + 1);
    }
  }

  return `<br> В ${visitorsMaxDays} день тижня кількість відвідувачів була максимальна. <br><br>`
}

function getSumVisitors(visitors) {
  let sumVisitorsWork = 0;
  let sumVisitorsOff = 0;
  for (let i = 0; i < visitors.length; i++) {
    if (i < 5) {
      sumVisitorsWork += visitors[i];
    } else {
      sumVisitorsOff += visitors[i];
    }
  }

  return `Кількість клієнтів в робочі дні ддорівнює ${sumVisitorsWork}, кількість клієнтів в вихідні дні дорівнює ${sumVisitorsOff}.`
}

const numberDayLess20 = getNumberDayLess20(visitors);
document.write(numberDayLess20);

const numberDayMin = getNumberDayMin(visitors);
document.write(numberDayMin);

const numberDayMax = getNumberDayMax(visitors);
document.write(numberDayMax);

document.write(getSumVisitors(visitors));
