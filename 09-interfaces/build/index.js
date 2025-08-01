"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const facebook_auth_service_1 = require("./services/facebook.auth.service");
var LoginType;
(function (LoginType) {
    LoginType[LoginType["myServiceAuth"] = 0] = "myServiceAuth";
    LoginType[LoginType["facebookAuth"] = 1] = "facebookAuth";
    LoginType[LoginType["twitterAuth"] = 2] = "twitterAuth";
    LoginType[LoginType["microsoftAuth"] = 3] = "microsoftAuth";
})(LoginType || (LoginType = {}));
class HandleAuthService {
    constructor(service) {
        this.id = 0;
        this.token = "";
        this.service = service;
    }
    login(email, password) {
        this.service.login(email, password);
    }
    logout() {
        this.service.logout();
    }
    getUserId() {
        return this.service.getUserId();
    }
    getUserProfilePicture() {
        return this.service.getUserProfilePicture();
    }
}
const handler = new HandleAuthService(new facebook_auth_service_1.FacebookAuthService());
handler.login("", "");
// function setTypeAuth(type: LoginType) {
//   const authServiceDictionary: { [key: number]: IAuthService } = {
//     [LoginType.facebookAuth]: new FacebookAuthService(),
//     [LoginType.myServiceAuth]: new MyAuthService(1),
//     [LoginType.twitterAuth]: new TwitterAuthService(),
//     [LoginType.microsoftAuth]: new MicrosoftAuthService(),
//   }
//   const instanceSelected = authServiceDictionary[type];
//   instanceSelected.login("usuario", "password");
//   instanceSelected.getUserProfilePicture();
// }
// setTypeAuth(LoginType.facebookAuth);
// setTypeAuth(LoginType.twitterAuth);
