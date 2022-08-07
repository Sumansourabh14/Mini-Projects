<<<<<<< HEAD
const amount = document.querySelector('.input-value');
const currencies = document.querySelector('.from-currency');
const convertBtn = document.querySelector('.convert-btn');

const output = document.querySelector('.output');

convertBtn.addEventListener('click', function convert() {
    output.innerHTML = "";

    let singleOutput = document.createElement('div');
    singleOutput.innerHTML = convertFromCurrency();
    output.appendChild(singleOutput);
});

function convertFromCurrency() {
    switch (currencies.selectedIndex) {
        case 0:
            return convertUSD();
        case 1:
            return convertEUR();
        default:
            break;
    }
}

function convertUSD() {
    return amount.value * 0.013;
}

function convertEUR() {
    return amount.value * 0.012;
=======
const amount = document.querySelector('.input-value');
const currencies = document.querySelector('.from-currency');
const convertBtn = document.querySelector('.convert-btn');

const output = document.querySelector('.output');

convertBtn.addEventListener('click', function convert() {
    output.innerHTML = "";

    let singleOutput = document.createElement('div');
    singleOutput.innerHTML = convertFromCurrency();
    output.appendChild(singleOutput);
});

function convertFromCurrency() {
    switch (currencies.selectedIndex) {
        case 0:
            return convertUSD();
        case 1:
            return convertEUR();
        default:
            break;
    }
}

function convertUSD() {
    return amount.value * 0.013;
}

function convertEUR() {
    return amount.value * 0.012;
>>>>>>> bf0aea17a42bc28f0afcd8475aa4446b917ffa6a
}