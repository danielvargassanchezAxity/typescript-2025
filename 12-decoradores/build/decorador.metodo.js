"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// decorador de metodo
function confirmDelete(message) {
    return function (target, key, descriptor) {
        const originalMethod = descriptor.value;
        descriptor.value = function (...args) {
            if (window.confirm(message)) {
                originalMethod.apply(this, args);
            }
            return null;
        };
    };
}
class UI {
    removeElement(element) {
        element.remove();
    }
}
__decorate([
    confirmDelete("¿Estás seguro que quieres eliminar?")
], UI.prototype, "removeElement", null);
const users = [
    "usuario 1 test",
    "usuario 2 test",
    "usuario 3 test",
    "usuario 4 test",
    "usuario 5 test",
    "usuario 6 test",
];
const ui = new UI();
const ul = document.createElement("ul");
users.forEach(user => {
    const li = document.createElement("li");
    li.addEventListener("click", () => {
        ui.removeElement(li);
    });
    li.textContent = user;
    ul.appendChild(li);
});
setTimeout(() => {
    document.body.appendChild(ul);
}, 1000);
