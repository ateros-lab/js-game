//ПЕРЕМЕННЫЕ
let heroImg = window.document.querySelector('#hero-img');
let imgBlock = window.document.querySelector('#img-block');
let rightPosition = 0;
let imgBlockPosition = 0;
//ФУНКЦИИ
const rightHandler = () => {
  rightPosition = rightPosition + 1;
  imgBlockPosition = imgBlockPosition + 1;
  if(rightPosition > 5) {
    rightPosition = 0;
  }
  heroImg.style.left = `-${rightPosition*288}px`;
  imgBlock.style.left = `${imgBlockPosition*20}px`;
}
// ОБРАБОТЧИКИ СОБЫТИЙ
let timer = null;
let onTouchStart = (event) => {
  timer = setInterval(()=>{
    rightHandler();
  },130);
}
let onTouchEnd = (event) => {
  clearInterval(timer);
}

window.onmousedown = onTouchStart;
window.ontouchstart = onTouchStart;

window.onmouseup = onTouchEnd;
window.ontouchend = onTouchEnd;