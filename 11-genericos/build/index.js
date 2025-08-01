"use strict";
function concat(array1, array2) {
    array2.forEach(x => {
        array1.push(x);
    });
    return array1;
}
const newArray = concat([1, 2, 3, 4, 5], [6, 7, 8, 9, 10]);
function concatAny(array1, array2) {
    array2.forEach(x => {
        array1.push(x);
    });
    return array1;
}
const newArrayString = concatAny([1, 2, 3], ["2", 1]);
const total = newArrayString.reduce((previues, current) => previues += current, 0);
// console.log(total);
function genericConcat(array1, array2) {
    array2.forEach(x => {
        array1.push(x);
    });
    return array1;
}
class User {
    constructor(id) {
        this.id = 0;
        this.name = "";
        this.id = id;
    }
}
const genericResultNumbers = genericConcat([1], [2, 3, 4, 5, 6]);
const result = genericResultNumbers.reduce((total, value) => total += value, 0);
const genericResultString = genericConcat([new User(1), new User(2)], [new User(3)]);
// console.log(genericResultNumbers)
// console.log(genericResultString[0].id)
function genericWithMultipleTypes(value, message) {
    console.log(message);
    return value;
}
class AuthService {
    test() {
        throw new Error("Method not implemented.");
    }
}
function blockElementsGeneric(value) {
    value.test();
}
blockElementsGeneric(new AuthService());
class ArrayList {
    constructor() {
        this.list = [];
    }
    addElement(element) {
        this.list.push(element);
    }
    getByIndex(index) {
        return this.list[index];
    }
    getLength() {
        return this.list.length;
    }
    getCompleteList() {
        return this.list;
    }
}
let genericListnumber = new ArrayList();
genericListnumber.addElement("1");
genericListnumber.addElement("100");
