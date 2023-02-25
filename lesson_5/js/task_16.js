let day = 1;
const week = parseInt(prompt(`Введіть кількість тижнів`));
let weekNumber = 0;
let summ = 0;
let summWeek = 0;



for (let i = 0; i < week * 7; i++) {
  let profit = parseFloat(prompt(`Введіть величину прибутку в грн за ${day} день`));
  summ += profit;
  summWeek += profit;

  if (day % 7 === 0) {
    weekNumber++;
    document.write(`Виручка за ${weekNumber}-ий тиждень становить ${summWeek}грн<br><br>`)
    summWeek = 0;
  }
  day++;
}
document.write(`Загальна виручка за ${week} тижня становить ${summ}грн`)
