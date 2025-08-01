import { IAuthService } from "./auth.service";

export class MyAuthService implements IAuthService {
    id: number;
    token = "";
    constructor(id: number) {
        this.id = id;
    }

    login(email: string, password: string): void {
        console.log("validacion de email y password valido")
        console.log("consultar servicio backend y regresar token en caso de credenciales validas")
        this.token = "token recibido del backend"
    }
    logout(): void {
        console.log("eliminar token en el backend");
        this.token = "";
    }
    getUserId(): number {
        return this.id;
    }
    getUserProfilePicture(): string {
        console.log("ir a azure por la imagen a través del id", this.id);
        console.log("si encuentra la imagen regresar la url")
        return "url_azure";
    }
}