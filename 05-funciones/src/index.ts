// funciones sin valor de retorno y si parametros
function sayHi(): void {
    console.log("Hola que tal")
}
// sayHi();

// funcion con parametros
function addTwoNumbers(number1: number, number2: number): void {
    console.log(number1 + number2);
}
//addTwoNumbers(10,2);

// funcion con parametros y valores de retorno
function addTwoNumbersWithReturn(number1: number, number2: number): number {
    if (typeof(number1) == 'number') {
        return number1 + number2;
    }
    
    return 0;
}
//console.log(addTwoNumbersWithReturn(1,1));

function test2(): void {
    console.log("hola yo soy test2");
}

function test(callFunction: boolean) {
    if (callFunction) {
        test2();
    }
}
//test(false);

function functionTernary(condition: boolean, callback: () => void, elseCallback: () => void): void {
    if (condition) {
        callback();
    } else {
        elseCallback();
    }
}
function otro(): void {
    console.log("Escenario alterno")
}
functionTernary(true, otro, test2);


// metodos recursivos
//multiplicados

function multiply(initNumber: number, counter: number = 1): void {
    if (counter >= 10) return;

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
(): void => {

}

(number1: number, condition: boolean): void => {

}

(number1: number, condition: boolean): number => {
    return 0;
}

let testFunction = (number1: number, condition: boolean, callback: ()=> void): number => {
    return 0;
}
testFunction(1,true, test2);


testFunction = (number1: number, condition: boolean, callback: ()=> void): number => {
    const otherFunction = (callback: ()=> void) => {
        callback();
    }
    otherFunction(callback);
    return 100;
}
console.log(testFunction(1,true, test2));
