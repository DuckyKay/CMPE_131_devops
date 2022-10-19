const countButton = document.querySelector('.counterButton button');
const resetButton = document.querySelector('.resetButton button');
let countNum = document.querySelector('.countNum h1');

countButton.addEventListener('click', increase);
resetButton.addEventListener('click', reset);

function increase() {
    countNum.innerHTML++;
}

function reset() {
    countNum.innerHTML = 0;
}