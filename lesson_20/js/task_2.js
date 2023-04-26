class searchName {
  constructor (arrName) {
    this.arrName = arrName;
  }

  getSearch () {
    if (this.searchInput.value) {
      console.log(this.arrName);
    }
  }

  render(selectorId) {
    let searchBlock = document.createElement('div');
    searchBlock.className = 'searchBlock';
    document.querySelector(selectorId).append(searchBlock);
    let search = document.createElement('div');
    searchBlock.append(search);
    let titleSearch = document.createElement('span');
    titleSearch.innerText = `Ім'я`;
    search.append(titleSearch);
    this.searchInput = document.createElement('input');
    search.append(this.searchInput);
    let titleArr = document.createElement('div');
    titleArr.innerText = 'Працівники:';
    search.append(titleArr);
    this.listName = document.createElement('ol');
    for (const name of this.arrName) {
      let Name = document.createElement('li');
      Name.innerText = name;
      this.listName.append(Name);
    }
    searchBlock.append(this.listName);

    let resultBlock = document.createElement('div');
    resultBlock.className = 'searchBlock';
    document.querySelector(selectorId).append(resultBlock);
    let result = document.createElement('div');
    resultBlock.append(result);
    let titleResult = document.createElement('span');
    titleResult.innerText = `Ім'я`;
    result.append(titleResult);
    this.finishInput = document.createElement('input');
    result.append(this.finishInput);
    let titleArr2 = document.createElement('div');
    titleArr2.innerText = 'Працівники:';
    result.append(titleArr2);
    this.resultArr = [];
    let resultlist = document.createElement('ol');
    for (let name of this.resultArr) {
      let Name = document.createElement('li');
      Name.innerText = name;
      resultlist.append(Name);
    }
  }
}

let arrName = ['Пушкалов', 'Пуля', 'Гребченко', 'Грива', 'Пугало', 'Гребля', 'Шевченко'];
let result = new searchName(arrName).render('.result');
