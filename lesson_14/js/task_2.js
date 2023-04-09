const dateNow = new Date();
const now = dateNow.toLocaleDateString('en-US')
let date = now.split('/').map(el => parseInt(el));
let dateObj = {
  day: date[0],
  month: date[1],
  year: date[2],
}
console.log(dateObj);

const currentMonth = parseInt(prompt(`Вкажіть кількість місяців для вирахування року`));

function getCurrentYear (dateObj, currentMonth) {
  let result = Math.floor((dateObj.month + currentMonth) / 12);
  dateObj.year += result; 
  return dateObj.year;
}

const currentYear = getCurrentYear(dateObj, currentMonth);
document.write(`Сьогодняшня дата: ${date}, через ${currentMonth} місяці(в) буде ${currentYear} рік.`);
