function getSum() {
  const firstEl = parseFloat(document.getElementById('first').value);
  const secondEl = parseFloat(document.getElementById('second').value);
  const sum = firstEl + secondEl;

  document.getElementById('result').value = sum;
}

function getAway() {
  const firstEl = parseFloat(document.getElementById('first').value);
  const secondEl = parseFloat(document.getElementById('second').value);
  const away = firstEl - secondEl;
  
  document.getElementById('result').value = away;
}

function getMult() {
  const firstEl = parseFloat(document.getElementById('first').value);
  const secondEl = parseFloat(document.getElementById('second').value);
  const mult = firstEl * secondEl;
  
  document.getElementById('result').value = mult;
}

function getDiv() {
  const firstEl = parseFloat(document.getElementById('first').value);
  const secondEl = parseFloat(document.getElementById('second').value);
  const div = firstEl / secondEl;
  
  document.getElementById('result').value = div;
}
