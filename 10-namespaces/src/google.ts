export namespace Google {
    export interface ITest {
        test: string;
        doSomething(): void;
    }

    export function Test() {
        console.log("test function")
    }
    export class User {
        constructor() {
            console.log("Creando instancia de Google.User")
        }
    }
}