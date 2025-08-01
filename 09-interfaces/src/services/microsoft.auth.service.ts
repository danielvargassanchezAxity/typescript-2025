import { IAuthService } from "./auth.service";

export class MicrosoftAuthService implements IAuthService {
    id: number = 0;
    token: string = "";
    login(email: string, password: string): void {
        throw new Error("Method not implemented.");
    }
    logout(): void {
        throw new Error("Method not implemented.");
    }
    getUserId(): number {
        throw new Error("Method not implemented.");
    }
    getUserProfilePicture(): string {
        throw new Error("Method not implemented.");
    }

}