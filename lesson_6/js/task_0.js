function getSeason(numberDayMonth) {
  if ( numberDayMonth <= 2 || numberDayMonth === 12)
  document.write(`Пора року - зима`);
else if (numberDayMonth <= 5)
  document.write(`Пора року - весна`);
else if (numberDayMonth <= 8)
  document.write(`Пора року - літо`);
else if (numberDayMonth <= 11)
  document.write(`Пора року - осінь`);
else document.write(`Некоректне значення`);
}

const numberDayMonth = parseInt(prompt('Введіть номер місяця', ''));
const season = getSeason(numberDayMonth);
