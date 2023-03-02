const deposit = parseFloat(prompt(`Вкажіть суму в грн, яку вклав інвестор`));
const year = parseFloat(prompt(`Вкажіть на скільки років покладений депозит`));
let Summ = deposit;
const rate = 0.2;
const tax = 0.05;

for (let i = 0; i < year; i++) {
  Summ = Summ + Summ * rate - Summ * rate * tax;
}
document.write(`Якщо інвестор вклав ${deposit} грн під ${rate * 100}% річних, то за ${year} років він отримає ${Summ.toFixed(2)} грн`);
