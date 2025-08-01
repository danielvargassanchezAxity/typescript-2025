class User {
    private _id: number = 0;
    name: string;
    private _email: string;

    constructor(name: string, email: string) {
        this._id = 10;
        this.name = name;
        this._email = email;
    }

    login(password: string): void {
        this.deleteCacheToken();
        console.log("haciendo login para el usuario " + this.email);
    }

    public get id(): number {
        return this._id;
    }

    public set id(setValue: number) {
        if (setValue <= 0) {
            this._id = 1;
            return;
        }
        this._id = setValue;
    }

    public set email(email: string) {
        if (!email.includes("@")) {
            throw new Error("No es un correo valido");
        }
        if (email.length <= 5) {
            throw new Error("Ingrese un correo con longitud mayor a 5");
        }

        this._email = email;
    }

    public get email(): string {
        return this._email;
    }

    protected deleteCacheToken(): void {
        
    }
}


const user = new User("daniel", "daniel@hotmail.com");
user.email = "emailcambiado@test.com"
user.id = 100;
user.login("XXXXXXX");
console.log(user.email);
// console.log(user.id)
// user.login();
