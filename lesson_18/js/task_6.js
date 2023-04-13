function createTable () {
  const numberInput = document.getElementById('numberEval').value;
  let newTable = document.createElement('table');
  document.getElementById('result').append(newTable);
  for (let i = 0; i < numberInput; i++) {
    let row = document.createElement('tr');
    let newInput = document.createElement('input');
    newTable.append(row);
    row.innerHTML = `<input name="eval">`
  }
  let newButton = document.createElement('button');
  newButton.innerText = 'Get sum';
  document.getElementById('result').append(newButton);
  newButton.onclick = getSum;
  function getSum() {
    let sum = 0;
    const collectionEval = document.getElementsByName('eval');
    let count = 0;
    let average = 0;
    for (let i of collectionEval) {
      sum = sum + parseInt(i.value)
      count++;
      average = (sum / count).toFixed(2);

    }
    let result = document.createElement('div');
    result.innerText = `Середнє значення оцінок дорівнює: ${average}`;
    newButton.append(result);
  }
}

buttonCreateTable.onclick = createTable;
