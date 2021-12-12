// ДЗ.  написать калькулятора (+ , -, *, /)
const btns = document.querySelector('.calc_wrap');
console.log(btns)
const rezWindow = document.querySelector('.nums_wndow');
console.log(rezWindow)
const allAct = document.querySelectorAll('.action_item');
console.log(allAct)
const allItems = document.querySelectorAll('.num_item');
console.log(allItems)
const equals = document.querySelector('.equals_wrap')
console.log(equals)
const cClear = document.querySelector('.action_item[data-value="c"]')
console.log(cClear)

let firstFilling = '';
let secondFilling = '';
let simbool = '';



cClear.addEventListener('click', clear);

function clear() {
    rezWindow.innerHTML = '';
    firstFilling = '';
    secondFilling = '';
    simbool = '';
};

btns.addEventListener('click', (e) => {
    if (!e.target.classList.contains('btn')) return;
    if (e.target.getAttribute('data-value') === 'c') return;

    rezWindow.textContent = '';

    let key = e.target.getAttribute('data-value');

    equalRez(Number(firstFilling), simbool, Number(secondFilling))

    if (key != '+' && key != '-' && key != '*' && key != '/') {

        if (simbool === '') {
            firstFilling += key;
            console.log(firstFilling);
            rezWindow.textContent = firstFilling;

        }
        if (firstFilling != '' && simbool.length != 0) {
            secondFilling += key;
            console.log(secondFilling);
            rezWindow.textContent = secondFilling;
        };
        // return
    }

    if (key === '+' || key === '-' || key === '*' || key === '/') {
        let arr = [];
        if (arr.length == 0) {
            arr.push(key);
            simbool = arr.toString();
            console.log(simbool)
            rezWindow.textContent = simbool;

        }
    }

});

equals.addEventListener('click', equalRez);



function equalRez(a, value, b) {
    let rezult;
    if (value === '*') {
        rezult = mult(a, b)
    };
    if (value === '/') {
        rezult = divi(a, b)
    };
    if (value === '-') {
        rezult = subt(a, b)
    }
    if (value === '+') {
        rezult = addition(a, b)
    };
    console.log(rezult)
    return rezWindow.textContent = rezult;

};



function mult(a, b) {
    return a * b
};

function divi(a, b) {
    return a / b
};

function subt(a, b) {
    return a - b
};

function addition(a, b) {
    return a + b
};

































// function suma(a) {
//     return function(b) {
//         return a + b
//     }
// }

// function minus(a) {
//     return function(b) {
//         return a - b
//     }
// }

// function mult(a) {
//     return function(b) {
//         return a * b
//     }
// }

// function del(a) {
//     return function(b) {
//         return a / b
//     }
// }

// function calc(func) {
//     return function(a) {
//         return function(b) {
//             return func(a)(b);
//         }
//     }
// }