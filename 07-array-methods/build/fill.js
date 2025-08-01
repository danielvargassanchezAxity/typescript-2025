"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fill = void 0;
function fill() {
    let fruits = ["MANGO", "PLATANO", "MANZANA", "PERA"];
    fruits.fill("UVA", 1);
    console.log(fruits);
}
exports.fill = fill;
