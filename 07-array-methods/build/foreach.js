"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.forEach = void 0;
function forEach() {
    const numberList = [1, 2, 10, 24, 1, -10];
    let suma = 0;
    numberList.forEach((value, index) => {
        numberList[index] = value * 2;
        suma += value;
    });
    console.log(numberList);
    console.log(suma);
}
exports.forEach = forEach;
