const buttonPrice = document.getElementById('buttonPrice');
buttonPrice.onclick = totalPrice;
function totalPrice () {

  const transport = parseInt(document.getElementById('transport').value);
  console.log(transport);
  const food = parseInt(document.getElementById('food').value);
  const gid = document.getElementsByName('gid');
  console.log(gid);
  let gidPrice = 0;
  for (let radio of gid) {
    if (radio.checked) {
      gidPrice = parseInt(radio.value);
    }
  }
    let price = transport + food + gidPrice;
    const totalPriceSum = document.getElementById('totalPrice');
    totalPriceSum.innerText = `Загальна вартість подорожі коштуватиме: ${price} грн.`;
}
