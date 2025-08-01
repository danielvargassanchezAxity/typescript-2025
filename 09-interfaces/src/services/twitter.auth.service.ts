import { IAuthService } from "./auth.service";

export class TwitterAuthService implements IAuthService {
    id: number = 0;
    token: string = "";
    login(email: string, password: string): void {
        console.log("validar correo en lista negra");
        console.log("mandar coontraseña y password a servicio de twitter");
        console.log("if is famoso token else cookie");
    }
    logout(): void {
        this.token = "";
    }

    getUserId(): number {
        let isFamoso = true;
        if (isFamoso) {
            console.log("consultar servicio A")
            return 1;
        } else {
            console.log("consultar servicio B");
            return 0;
        }
    }

    getUserProfilePicture(): string {
        let isFamoso = false;
        if (isFamoso) {
            console.log("consultar servicio A")
            return "aaa";
        } else {
            console.log("consultar servicio B");
            return "bbb";
        }
    }
}