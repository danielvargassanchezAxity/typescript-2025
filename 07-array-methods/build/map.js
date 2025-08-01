"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.testMap = void 0;
function testMap() {
    const user = [
        { id: 1, name: "daniel" },
        { id: 2, name: "julia" },
        { id: 3, name: "bernardo" },
    ];
    const request = user.map(x => {
        return {
            fullName: x.name,
            identifier: x.id,
        };
    });
    // console.log(request);
    const numbersList = [1, 2, 3, 4, 5, 6, 7, 9, 10];
    console.log(numbersList.map(x => x * 2));
}
exports.testMap = testMap;
