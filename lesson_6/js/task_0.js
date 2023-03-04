function getSeason(numberDayMonth) {
  let season ='';
  if ( numberDayMonth <= 2 || numberDayMonth === 12)
  season = 'зима';
else if (numberDayMonth <= 5)
  season = 'весна';
else if (numberDayMonth <= 8)
  season = 'літо';
else if (numberDayMonth <= 11)
  season = 'осінь';
else document.write(`Некоректне значення`);

return `${numberDayMonth} місяць року  - ${season}`;
}

const numberDayMonth = parseInt(prompt('Введіть номер місяця', ''));
const isSeason = getSeason(numberDayMonth);
document.write(isSeason);
