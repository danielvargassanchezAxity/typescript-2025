"use strict";
// if
function validate() {
    let numbers = [1, 2, 3, 4, 5];
    if (numbers.includes(10)) {
        console.log("El producto se encuentra activo");
    }
    else {
        throw Error("El producto está inactivo");
    }
}
validate();
