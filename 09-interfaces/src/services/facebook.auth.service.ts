import { IAuthService } from "./auth.service";

export class FacebookAuthService implements IAuthService {
    id: number = 0;
    token = "";
    login(email: string, password: string): void {
        console.log("mandar peticion a facebook.com");
        console.log("si facebook retorna un 200 guardar token en caso contrario mostrar error")
    }
    logout(): void {
        this.token = "";
    }
    getUserId(): number {
        return 0;
    }
    getUserProfilePicture(): string {
        return "obtener imagen de servicio de facebook"
    }
}
