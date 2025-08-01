import { Facebook } from "./facebook";
import { Google } from "./google";

const googleUser = new Google.User();
const facebookUser = new Facebook.User();

Google.Test();
Facebook.Test();

class OtherTest implements Google.ITest {
    test: string = "";

    doSomething(): void {
        throw new Error("Method not implemented.");
    }

}
