// boolean: true - false
let active: boolean = true;

// any
let pruebaAny: any = 12;
pruebaAny = "test";
pruebaAny = []
pruebaAny = true
pruebaAny = [1,""];
pruebaAny = null
pruebaAny = undefined

// number
const miEdad: number = 2899919129381293812938129381293812938912.12312;
const test = 1.00000001

// string
let message = "Este es un mensaje";

// tupla
let dataTupla: [number, string] = [0, ""];
// const result = dataTupla[2].
//let dataTupla: any[] = [1,"",null];

// enum
enum OrderStatus {
    active = 0,
    backOrder = 1,
    cancel = 2
}

// if (status == OrderStatus.active) {
//     // pasar a pendiente el pedido
// }
// if (status == OrderStatus.backOrder) {
//     // cancelar el pedido 
// }

const daniel: number | null = null;
const testDaniel: undefined = undefined;

// template string

const myName = "Daniel";
const myAge = 28;

const myMessage = "Hola yo soy " + myName + " y tengo " + myAge + " años";
const myTemplateString = `Hola yo soy ${myName} y tengo ${myAge} años`;
 
console.log(myMessage);
console.log(myTemplateString);