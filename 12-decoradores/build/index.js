"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// decorador de clase
function repository() {
    return function (target) {
        const users = [];
        target.prototype.users = users;
        target.prototype.save = (user) => {
            target.prototype.users.push(user);
        };
        target.prototype.delete = (index) => {
            const users = [...target.prototype.users];
            users.splice(index, 1);
            target.prototype.users = [...users];
        };
        target.prototype.findByIndex = (index) => {
            const users = [...target.prototype.users];
            return users[index];
        };
        target.prototype.getAll = () => {
            return target.prototype.users;
        };
    };
}
let UserRepository = class UserRepository {
    constructor(maxSize, dataBaseTable) {
        this.maxSize = maxSize;
        this.dataBaseTable = dataBaseTable;
    }
};
UserRepository = __decorate([
    repository()
], UserRepository);
const userRepository = new UserRepository(100, "users");
userRepository.save("daniel");
userRepository.save("ana");
userRepository.save("pedro");
userRepository.save("luis");
userRepository.save("felipe");
userRepository.delete(0);
console.log(userRepository.findByIndex(2));
