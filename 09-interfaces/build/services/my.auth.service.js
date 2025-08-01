"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyAuthService = void 0;
class MyAuthService {
    constructor(id) {
        this.token = "";
        this.id = id;
    }
    login(email, password) {
        console.log("validacion de email y password valido");
        console.log("consultar servicio backend y regresar token en caso de credenciales validas");
        this.token = "token recibido del backend";
    }
    logout() {
        console.log("eliminar token en el backend");
        this.token = "";
    }
    getUserId() {
        return this.id;
    }
    getUserProfilePicture() {
        console.log("ir a azure por la imagen a través del id", this.id);
        console.log("si encuentra la imagen regresar la url");
        return "url_azure";
    }
}
exports.MyAuthService = MyAuthService;
