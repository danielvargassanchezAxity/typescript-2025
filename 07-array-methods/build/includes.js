"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.testIncludes = void 0;
class Test {
    constructor(value) {
        this.value = 0;
        this.value = value;
    }
}
function testIncludes() {
    const data = [109, 10, 124, 155];
    if (data.includes(10)) {
        console.log("Si está en la lista");
    }
    else {
        console.log("No está en la lista");
    }
    const searchObject = new Test(2);
    const dataObjects = [
        new Test(1),
        new Test(1),
        new Test(2),
        searchObject
    ];
    console.log(dataObjects.includes(searchObject));
}
exports.testIncludes = testIncludes;
