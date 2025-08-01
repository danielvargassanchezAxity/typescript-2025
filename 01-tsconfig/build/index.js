"use strict";
console.log("hola mundo");
var Test;
(function (Test) {
    Test[Test["uno"] = 0] = "uno";
    Test[Test["dos"] = 1] = "dos";
    Test[Test["tres"] = 2] = "tres";
})(Test || (Test = {}));
Test.uno;
