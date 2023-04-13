
function getWish () {
  const wishList = ['Victory!', 'money!', 'mercedes-benz!', 'good work!', 'love!', 'Big house!',];
  count = 0;
  do {
    let randomWishIndex = Math.floor(Math.random() * wishList.length);
    let element = wishList[randomWishIndex];
    
    let newDiw = document.createElement('div');
    newDiw.innerText = element;
    document.getElementById('result').append(newDiw);
    count++;
    wishList.splice(randomWishIndex, 1);
   } while (count < 3)
}

getWish();
