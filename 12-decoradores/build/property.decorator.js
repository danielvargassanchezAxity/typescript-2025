"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// decorador de propiedades
function NotNull(message) {
    return function (target, key) {
        const getter = function () {
            return target;
        };
        const setter = function (data) {
            if (data === null || data === undefined) {
                throw new Error(message);
            }
            target = data;
        };
        Object.defineProperty(target, key, {
            get: getter,
            set: setter,
            enumerable: true,
            configurable: true,
        });
    };
}
function NotEmpty(message) {
    return function (target, key) {
        const getter = function () {
            return target;
        };
        const setter = function (data) {
            if (typeof (data) == 'string' && data == "") {
                throw new Error(message);
            }
            target = data;
        };
        Object.defineProperty(target, key, {
            get: getter,
            set: setter,
            enumerable: true,
            configurable: true,
        });
    };
}
class Post {
    constructor(title, pages, cp) {
        this.title = title;
        this.pages = pages;
        this.cp = cp;
    }
}
__decorate([
    NotEmpty("No puede contener titulos vacíos")
], Post.prototype, "title", void 0);
const post = new Post("hola", 100, "91000");
console.log(post);
