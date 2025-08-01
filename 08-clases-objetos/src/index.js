"use strict";
class User {
    constructor(name, email) {
        this._id = 0;
        this._id = 10;
        this.name = name;
        this._email = email;
    }
    login(password) {
        console.log("haciendo login para el usuario " + this.email);
    }
    get id() {
        return this._id;
    }
    set id(setValue) {
        if (setValue <= 0) {
            this._id = 1;
            return;
        }
        this._id = setValue;
    }
    set email(email) {
        if (!email.includes("@")) {
            throw new Error("No es un correo valido");
        }
        if (email.length <= 5) {
            throw new Error("Ingrese un correo con longitud mayor a 5");
        }
        this._email = email;
    }
    get email() {
        return this._email;
    }
}
const user = new User("daniel", "daniel@hotmail.com");
user.email = "emailcambiado@test.com";
user.id = 100;
user.login("XXXXXXX");
console.log(user.email);
// console.log(user.id)
// user.login();
