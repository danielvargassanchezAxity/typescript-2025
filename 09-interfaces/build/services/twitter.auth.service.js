"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TwitterAuthService = void 0;
class TwitterAuthService {
    constructor() {
        this.id = 0;
        this.token = "";
    }
    login(email, password) {
        console.log("validar correo en lista negra");
        console.log("mandar coontraseña y password a servicio de twitter");
        console.log("if is famoso token else cookie");
    }
    logout() {
        this.token = "";
    }
    getUserId() {
        let isFamoso = true;
        if (isFamoso) {
            console.log("consultar servicio A");
            return 1;
        }
        else {
            console.log("consultar servicio B");
            return 0;
        }
    }
    getUserProfilePicture() {
        let isFamoso = false;
        if (isFamoso) {
            console.log("consultar servicio A");
            return "aaa";
        }
        else {
            console.log("consultar servicio B");
            return "bbb";
        }
    }
}
exports.TwitterAuthService = TwitterAuthService;
