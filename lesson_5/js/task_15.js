let result = 0;


for (let i = 1; i <= 12; i++) {
  let temperatureMonth = parseFloat(prompt(`Введіть температуру за ${i} місяць`));
  result += temperatureMonth;
}
averageTemperature = (result / 12).toFixed(2);
 document.write(`Середньорічна температура становить ${averageTemperature} градуси цельсія.`);
