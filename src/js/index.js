// Created by Kostya Tkachuk at 20.10.2019
const form = document.getElementById('form');
const display = document.getElementById('display');
const result = document.getElementById('result');
let firstVal = 0;
let symbVal = '';

form.addEventListener('click', event => {
    const val = event.target.value;

    switch(val) {
        case '-': onSymbol(val); break;
        case '+': onSymbol(val); break;
        case '*': onSymbol(val); break;
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
        case '00': onNumber('00'); break;
        case '000': onNumber('000'); break;
        default: break;
    }
}, false);

const onNumber = num => {
    display.focus();
    display.value += num;
    if (symbVal && firstVal) {
        result.innerHTML = `${firstVal} ${symbVal} ${display.value}`;
    } else {
        result.innerHTML = display.value;
    }
}

const onSymbol = sym => {
    firstVal = +display.value;
    display.value = '';
    symbVal = sym;
    result.innerHTML = `${firstVal} ${sym}`;
}

const calc = () => {
    const secondVal = +display.value;
    switch(symbVal) {
        case '-': display.value = firstVal - secondVal; break;
        case '+': display.value = firstVal + secondVal; break;
        case '*': display.value = firstVal * secondVal; break;
        case '/': display.value = firstVal / secondVal; break;
        case '%': display.value = (secondVal/100) * firstVal; break;
        default: break;
    }
    result.innerHTML += ' =';
    display.focus();
}

const reset = () => {
    display.value = '';
    result.innerHTML = '';
    display.blur();
}