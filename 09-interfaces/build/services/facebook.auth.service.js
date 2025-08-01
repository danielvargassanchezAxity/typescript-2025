"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FacebookAuthService = void 0;
class FacebookAuthService {
    constructor() {
        this.id = 0;
        this.token = "";
    }
    login(email, password) {
        console.log("mandar peticion a facebook.com");
        console.log("si facebook retorna un 200 guardar token en caso contrario mostrar error");
    }
    logout() {
        this.token = "";
    }
    getUserId() {
        return 0;
    }
    getUserProfilePicture() {
        return "obtener imagen de servicio de facebook";
    }
}
exports.FacebookAuthService = FacebookAuthService;
