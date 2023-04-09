document.write(`<h1>Рішення задачі</h1><br>`)

let companyArray = [
  {
    name: 'Kernel',
    owner: 'Kuchma',
    sponsors: [
      {
        lastName: 'Hmelnitskii',
        firstName: 'Bogdan',
        sumDeposits: 700000,
      },
      {
        lastName: 'Bandera',
        firstName: 'Stepan',
        sumDeposits: 450000,
      },
      {
        lastName: 'Shevchenko',
        firstName: 'Taras',
        sumDeposits: 100000,
      },
    ],
    year: 2001,
    price: 15000,
  },
  {
    name: 'Rais',
    owner: 'Poroshenko',
    sponsors: [
      {
        lastName: 'Hmelnitskii',
        firstName: 'Bogdan',
        sumDeposits: 600000,
      },
      {
        lastName: 'Bandera',
        firstName: 'Stepan',
        sumDeposits: 200000,
      },
      {
        lastName: 'Stus',
        firstName: 'Vasyl',
        sumDeposits: 900000,
      },
    ],
    year: 2023,
    price: 20000,
  },
  {
    name: 'Agrolaif-centr',
    owner: 'Pushkalov',
    sponsors: [
      {
        lastName: 'Tokar',
        firstName: 'Ivan',
        sumDeposits: 500000,
      },
      {
        lastName: 'Molot',
        firstName: 'Stiven',
        sumDeposits: 400000,
      },
      {
        lastName: 'Pushkin',
        firstName: 'Oleksa',
        sumDeposits: 300000,
      },
    ],
    year: 2010,
    price: 100000,
  },
];

function geSumSaits(companyArray) {
  let sum = companyArray.reduce((sum, company) => sum + company.price, 0);
  return sum;
};

let sumSaits = geSumSaits(companyArray);
document.write(`1. Загальна вартість всіх сайтів: ${sumSaits}.<br><br>`);

function getCountSaits (companyArray) {
  let count = companyArray.reduce((count, company) => company.year > 2000 && company.year < 2009 ? count + 1 : count, 0);
  return count;
}

let countSaits = getCountSaits(companyArray);
document.write(`2. Кількість сайтів створених з 2000 до 2009 рр: ${countSaits}.<br><br>`);

function getCountSponsorSaits (companyArray) {
  let count = companyArray.reduce((count, company) => company.sponsors.reduce(
    (sum, deposit) => sum + deposit.sumDeposits, 0) > 100000 ? count + 1: count, 0);
  return count;
}

let countSponsorSaits = getCountSponsorSaits(companyArray);
document.write(`3. кількість сайтів, де сума спонсорських вкладень була більшою за 100000: ${countSponsorSaits}.<br><br>`);

function getSponsors (companyArray) {
  let sponsors = companyArray.map(company => company.sponsors.map(el => `${el.lastName}`));
  return sponsors;
}

let sponsors = getSponsors(companyArray);
document.write(`4. масив спонсорів: ${sponsors}.<br><br>`);

function getYearMaxDeposit (companyArray) {
  let year = companyArray.reduce((prev, next) => {
    if (prev.price > next.price) {
      return prev.year;
    } else return next.year;
  });

  return year;
};

let yearMaxDeposit = getYearMaxDeposit(companyArray);
document.write(`5. Рік коли прибуток був найбільшим: ${yearMaxDeposit}.<br><br>`);

function getArraySortPrice (companyArray) {
const arraySortPrice = companyArray.sort((a, b) => {
  if (a.price < b.price) {
    return 1;
  }
  if (a.price > b.price) {
    return -1;
  }
  return 0;
})
return arraySortPrice;
}

let arraySortPrice = getArraySortPrice(companyArray);
document.write(`6. Упорядкований список по спаданню прибутку:<br> ${JSON.stringify(arraySortPrice)}<br><br>`);

function getTwoListArray (companyArray) {
  const arrayPriceLess20000 = companyArray.filter(site => site.price < 20000);
  const arrayPriceMore20000 = companyArray.filter(site => site.price >= 20000);
  return `7. Список компаній прибуток яких менший за 20000:<br> ${JSON.stringify(arrayPriceLess20000)}<br>
  Список компаній прибуток яких більший за 20000:<br> ${JSON.stringify(arrayPriceMore20000)}<br>
  `
};

const twoListArray = getTwoListArray(companyArray);
document.write(twoListArray);
