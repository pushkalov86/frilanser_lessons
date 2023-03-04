const payments = [800, 450, 400, 350, 500, 600, 800, 450, 400, 350, 500, 600];

function getSummAll(payments) {
  let summ = 0;
  for (let i = 0; i < payments.length; i++) {
    summ += payments[i];
  }
  return summ;
}

function getSummHalfYear1(payments) {
  let summ = 0;
  for (let i = 0; i < 6; i++) {
    summ += payments[i];
  }
  return summ;
}

function getSummHalfYear2(payments) {
  let summ = 0;
  for (let i = 6; i < 12; i++) {
    summ += payments[i];
  }
  return summ;
}

function getSummSummer(payments) {
  let summ = 0;
  for (let i = 5; i < 8; i++) {
    summ += payments[i];
  }
  return summ;
}

function getSummKvartal2(payments) {
  let summ = 0;
  for (let i = 3; i < 6; i++) {
    summ += payments[i];
  }
  return summ;
}

function getSummEvenMonth(payments) {
  let summ = 0;
  for (let i = 1; i <= 12; i++) {
    if (i % 2 === 0) {
      summ += payments[i - 1];
    }
  }
  return summ;
}

function getSummFirstSeason(payments) {
  let summ = 0;
  for (let i = 1; i <= 12; i++) {
    if (i % 3 === 0) {
      summ += payments[i - 1];
    }
  }
  return summ;
}

document.write(`Показники оплат за рік: ${payments}.`);
document.write(`<br><br>`);
document.write(`Сума платежів за весь рік: ${getSummAll(payments)}.`);
document.write(`<br><br>`);
document.write(`Сума платежів за першу половину року: ${getSummHalfYear1(payments)}.`);
document.write(`<br><br>`);
document.write(`Сума платежів за другу половину року: ${getSummHalfYear2(payments)}.`);
document.write(`<br><br>`);
document.write(`Сума платежів за літо: ${getSummSummer(payments)}.`);
document.write(`<br><br>`);
document.write(`Сума платежів за другий квартал року: ${getSummKvartal2(payments)}.`);
document.write(`<br><br>`);
document.write(`Сума платежів за парних місяців року: ${getSummEvenMonth(payments)}.`);
document.write(`<br><br>`);
document.write(`Сума платежів перших місяців кожної пори року: ${getSummFirstSeason(payments)}.`);
