class Client {
  constructor(id, name, numberMoney) {
    this.id = id;
    this.name = name;
    this.numberMoney = numberMoney;
  }
  addMoney(money) {
    this.numberMoney = this.numberMoney + money;
  }
  withdrawal(money) {
    if (money < this.numberMoney) {
      this.numberMoney = this.numberMoney - money;
    } else {
      return 'Не можна перевищувати ліміт.'
    }
  }
  toString() {
    return `На рахунку ${this.name} - ${this.numberMoney} грн.`;
  }
}

const client1 = new Client(1, 'Andrew', 1010);
const client2 = new Client(1, 'Pavlo', 1020);


class GoldenClient extends Client {
  constructor(id, name, numberMoney, limitCreditMoney, procentOfCredit) {
    super(id, name, numberMoney);
    this.limitCreditMoney = limitCreditMoney;
    this.procentOfCredit = procentOfCredit;
  }
  withdrawal(money) {
    if (money <= this.numberMoney + this.limitCreditMoney) {
      this.numberMoney = this.numberMoney - money;
    } else {
      return 'Не достатньо грошей, не можна перевищувати кредитний ліміт.'
    }
  }
  getProcentOfCredit () {
    if(this.numberMoney < 0) {
      return `Пеня за використання кредитних коштів - ${Math.abs(this.numberMoney) * this.procentOfCredit / 100} грн.`;
    }
  }

  toString() {
    return `На рахунку ${this.name} - ${this.numberMoney} грн.<br>
    Пеня за використання кредитних коштів: ${this.getProcentOfCredit(10)}`;
  }
}

const GoldClient1 = new GoldenClient(1, 'Sergii', 1000, 500, 10);
const GoldClient2 = new GoldenClient(1, 'Aleks', 2000, 500, 10);

// console.log(GoldClient1);
// document.write(GoldClient1.withdrawal(1200))
// document.write(GoldClient1.getProcentOfCredit(10));
let arr = [
  {
    id: 1,
    name: "serg",
    numberMoney: 1000,
  },
  {
    id: 2,
    name: "petia",
    numberMoney: 1000,
  },
  {
    id: 3,
    name: "Anna",
    numberMoney: 1000,
    limitCreditMoney: 500,
    procentOfCredit: 10,
  },
]

class Bank {
  constructor(arr) {
    this.arr = arr;
  }
  getClient() {
    let result = []
    arr.filter(item => {
      if(!item.limitCreditMoney) 
      result.push(item.name)
    })
    return result;
  }

  getGoldClient() {
    let result = []
    arr.filter(item => {
      if(item.limitCreditMoney) 
      result.push(item.name)
    })
    return result;
  }

  getSumMoney() {
    let sum = 0;
    this.arr.forEach((el) => {
      sum = sum + el.numberMoney
      
    })
    return `Сума всіх коштів вкладників дорівнює : ${sum}`
  }
  render(selector) {
    const arrB = document.createElement('div');
    arrB.innerText= JSON.stringify(this.arr);
    document.querySelector(selector).append(arrB);
    const client = document.createElement('div');
    client.innerText= this.getClient();
    document.querySelector(selector).append(client);
    const arrc = document.createElement('div');
    arrc.innerText= this.getGoldClient();
    document.querySelector(selector).append(arrc);
    const sum = document.createElement('div');
    sum.innerText= this.getSumMoney();
    document.querySelector(selector).append(sum);

  }
}

const bank = new Bank(arr).render('.result')
