"use strict";
// funciones sin valor de retorno y si parametros
function sayHi() {
    console.log("Hola que tal");
}
// sayHi();
// funcion con parametros
function addTwoNumbers(number1, number2) {
    console.log(number1 + number2);
}
//addTwoNumbers(10,2);
// funcion con parametros y valores de retorno
function addTwoNumbersWithReturn(number1, number2) {
    if (typeof (number1) == 'number') {
        return number1 + number2;
    }
    return 0;
}
//console.log(addTwoNumbersWithReturn(1,1));
function test2() {
    console.log("hola yo soy test2");
}
function test(callFunction) {
    if (callFunction) {
        test2();
    }
}
//test(false);
function functionTernary(condition, callback, elseCallback) {
    if (condition) {
        callback();
    }
    else {
        elseCallback();
    }
}
function otro() {
    console.log("Escenario alterno");
}
functionTernary(true, otro, test2);
// metodos recursivos
//multiplicados
function multiply(initNumber, counter = 1) {
    if (counter >= 10)
        return;
    console.log(`El resultado de ${initNumber} * ${counter} es: ${initNumber * counter}`);
    multiply(initNumber, counter + 1);
}
let result = multiply(7);
// class Test {
//     miAtributo = 10;
//     test() {
//         this.miAtributo = 100;
//     }
// }
// (): number => {
//     return 0;
// }
// functionTernary(true, new Test().test, test2);
//arrow function
() => {
};
(number1, condition) => {
};
(number1, condition) => {
    return 0;
};
let testFunction = (number1, condition, callback) => {
    return 0;
};
testFunction(1, true, test2);
testFunction = (number1, condition, callback) => {
    const otherFunction = (callback) => {
        callback();
    };
    otherFunction(callback);
    return 100;
};
console.log(testFunction(1, true, test2));
