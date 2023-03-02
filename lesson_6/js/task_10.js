function currentsTemp(randomNumber) {

  let minTemp = -50;
  let maxTemp = 50;
  let current = 0;
  let currentTemp = 0;
  
  for (let i = 1; i <= randomNumber; i++) {
    let randomTemp = minTemp + Math.floor(Math.random() * (maxTemp - minTemp + 1));
    document.write(`${i}. ${randomTemp}.<br>`);
    if (randomTemp > 0) {
      current++;
      currentTemp += randomTemp;
    }
  }
  let averageTemp = (currentTemp / current).toFixed(2);

  return averageTemp;
}
const random = parseInt(prompt(`введіть кількість значень температур`));
const result = currentsTemp(random);
document.write(`Середн значення додатніх значень показників температур дорівнює  ${result}`);
