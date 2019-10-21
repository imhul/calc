// Created by Kostya Tkachuk at 20.10.2019
window.onload = function(){
    (function() {

        const form = document.getElementById('form');
        const display = document.getElementById('display');
        const result = document.getElementById('result');
        const switcher = document.getElementById('on_off');
        const led = document.getElementById('led');
        const status = document.getElementById('status');

        let firstVal = 0;
        let symbVal = '';
        let isCalculated = false;
        let isInit = false;
        status.innerHTML = 'off';

        switcher.addEventListener('click', event => {
            isInit = event.target.checked;
            led.innerHTML = isInit ? 'o' : '';
            status.innerHTML = isInit ? 'on' : 'off';
        }, false);

        form.addEventListener('click', event => {
            if (isInit) {
                const val = event.target.value;
                display.focus();
                switch(val) {
                    case '-': onSymbol(val); break;
                    case '+': onSymbol(val); break;
                    case '*': onSymbol(val); break;
                    case '/': onSymbol(val); break;
                    case '%': onSymbol(val); break;
                    case 'C': reset(); break;
                    case '=': calc(val); break;
                    case '.': onNumber(val); break;
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
            } else {
                reset();
            }
        }, false);


        const onNumber = num => {
            isCalculated = false;
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
            if (isCalculated) {
                reset();
            } else {
                switch(symbVal) {
                    case '-': currentResult = display.value = firstVal - secondVal; break;
                    case '+': currentResult = display.value = firstVal + secondVal; break;
                    case '*': currentResult = display.value = firstVal * secondVal; break;
                    case '/': currentResult = display.value = firstVal / secondVal; break;
                    case '%': currentResult = display.value = (secondVal/100) * firstVal; break;
                    default: break;
                }
                result.innerHTML += ' =';
                isCalculated = true;
            }

            
        }

        const reset = () => {
            firstVal = 0;
            symbVal = '';
            display.value = '';
            result.innerHTML = '';
            display.blur();
        }

    })();
};
