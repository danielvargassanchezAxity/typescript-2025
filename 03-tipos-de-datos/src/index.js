"use strict";
// boolean: true - false
let active = true;
// any
let pruebaAny = 12;
pruebaAny = "test";
pruebaAny = [];
pruebaAny = true;
pruebaAny = [1, ""];
pruebaAny = null;
pruebaAny = undefined;
// number
const miEdad = 2899919129381293812938129381293812938912.12312;
const test = 1.00000001;
// string
let message = "Este es un mensaje";
// tupla
let dataTupla = [0, ""];
// const result = dataTupla[2].
//let dataTupla: any[] = [1,"",null];
// enum
var OrderStatus;
(function (OrderStatus) {
    OrderStatus[OrderStatus["active"] = 0] = "active";
    OrderStatus[OrderStatus["backOrder"] = 1] = "backOrder";
    OrderStatus[OrderStatus["cancel"] = 2] = "cancel";
})(OrderStatus || (OrderStatus = {}));
// if (status == OrderStatus.active) {
//     // pasar a pendiente el pedido
// }
// if (status == OrderStatus.backOrder) {
//     // cancelar el pedido 
// }
const daniel = null;
const testDaniel = undefined;
// template string
const myName = "Daniel";
const myAge = 28;
const myMessage = "Hola yo soy " + myName + " y tengo " + myAge + " años";
const myTemplateString = `Hola yo soy ${myName} y tengo ${myAge} años`;
console.log(myMessage);
console.log(myTemplateString);
