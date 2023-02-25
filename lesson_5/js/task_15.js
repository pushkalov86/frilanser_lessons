let Month = 1;
let result = 0;


for (let i = 0; i < 12; i++) {
  let temperatureMonth = parseFloat(prompt(`Введіть температуру за ${Month} місяць`));
  Month++;
  result += temperatureMonth;
}
result = result / 12;
 document.write(`Середньорічна температура становить ${result.toFixed(2)} градуси цельсія.`);
