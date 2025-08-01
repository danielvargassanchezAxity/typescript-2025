"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.filter = void 0;
function filter() {
    const numbersList = [1, 20, 145, 54, 36, 252];
    const user = [
        {
            isActive: true,
            name: "daniel"
        },
        {
            isActive: false,
            name: "alex"
        },
        {
            isActive: false,
            name: "ana"
        }
    ];
    const result = numbersList.filter((value) => value < 100);
    console.log(user.filter(x => !x.isActive));
}
exports.filter = filter;
