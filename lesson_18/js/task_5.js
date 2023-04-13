
function getTable () {
  let newTable = document.createElement('table');
  document.getElementById('result').append(newTable);
  newTable.style.width = '200px';
  newTable.style.border = '2px solid black';
  for (let i = 0; i < 3; i++) {
    let row = document.createElement('tr');
    newTable.append(row);
    for (let j = 0; j < 4; j++) {
      let randomNumber = Math.floor(Math.random() * 9);
      let col = document.createElement('th');
      col.innerText = randomNumber;
      row.append(col);
      col.style.border = '2px solid';
    };
  };
};

getTable();
