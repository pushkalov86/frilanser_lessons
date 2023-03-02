const deposit = parseFloat(prompt(`Вкажіть суму в грн, яку вклав інвестор`));
// const year = parseFloat(prompt(`Вкажіть на скільки років покладений депозит`));
let year = 20;
let Summ = deposit;
let rate = 0.2;

for (let i = 0; i < year; i++) {
  Summ = Summ + Summ * rate;
};

year = 17;
rate = 0.27

for (let i = 0; i < year; i++) {
  Summ = Summ + Summ * rate;
};

document.write(`Якщо інвестор вклав ${deposit} грн на депозит, то на 20 років під 20% річних, а потім за 17 років під 27% річних він отримає ${Summ.toFixed(2)} грн`);
