export interface IAuthService {
    id: number;
    token: string;
    login(email: string, password: string): void;
    logout(): void;
    getUserId(): number;
    getUserProfilePicture(): string;
}