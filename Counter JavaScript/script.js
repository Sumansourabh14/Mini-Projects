const decreaseBtn = document.querySelector('.decrease-btn');
const resetBtn = document.querySelector('.reset-btn');
const increaseBtn = document.querySelector('.increase-btn');
let countNumber = document.querySelector('.count-number');

let counter = 0;

decreaseBtn.addEventListener('click', function decCounter() {
    countNumber.textContent = --counter;
    console.log(counter);
})

resetBtn.addEventListener('click', function resetCounter() {
    countNumber.textContent = counter;
})

increaseBtn.addEventListener('click', function incCounter() {
    countNumber.textContent = ++counter;
    console.log(counter);
})

