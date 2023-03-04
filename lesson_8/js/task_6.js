let productsPrices = [1000, 20, 31];
let productsTitles = ["cheese", "juice", "bread"];

const money = parseFloat(prompt(`Введіть наявну кількість грошей`));

function getAvailabilityMoney(money) {
  let result = [];
  for (let i = 0; i < productsPrices.length; i++) {
    if (productsPrices[i] <= money) {
      result.push(productsTitles[i]);
    };
  };

  return result;
};

const availabilityMoney = getAvailabilityMoney(money);
document.write(`За ваші гроші ви можете купити такі товари, як: ${availabilityMoney}.`)
