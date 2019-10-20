const form = document.getElementById('form');
const display = document.getElementById('display');
let firstVal = 0;
let symbVal = '';

form.addEventListener('click', event => {
    const val = event.target.value;

    switch(val) {
        case '-': onSymbol(val); break;
        case '+': onSymbol(val); break;
        case 'X': onSymbol(val); break;
        case '/': onSymbol(val); break;
        case '%': onSymbol(val); break;
        case 'C': reset(); break;
        case '=': calc(val); break;
        case '1': onNumber(val); break;
        case '2': onNumber(val); break;
        case '3': onNumber(val); break;
        case '4': onNumber(val); break;
        case '5': onNumber(val); break;
        case '6': onNumber(val); break;
        case '7': onNumber(val); break;
        case '8': onNumber(val); break;
        case '9': onNumber(val); break;
        case '0': onNumber(val); break;
        default: break;
    }
}, false);

const onNumber = num => {
    display.focus();
    display.value += num;
}

const onSymbol = sym => {
    firstVal = +display.value;
    display.value = '';
    symbVal = sym;
}

const calc = () => {
    const secondVal = display.value;
    switch(symbVal) {
        case '-': display.value = firstVal - secondVal; break;
        case '+': display.value = firstVal + secondVal; break;
        case 'X': display.value = firstVal * secondVal; break;
        case '/': display.value = firstVal / secondVal; break;
        case '%': display.value = (secondVal/100) * firstVal; break;
        default: break;
    }
}

const reset = () => {
    display.value = '';
}