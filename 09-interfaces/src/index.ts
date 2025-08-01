import { IAuthService } from "./services/auth.service";
import { FacebookAuthService } from "./services/facebook.auth.service";
import { MicrosoftAuthService } from "./services/microsoft.auth.service";
import { MyAuthService } from "./services/my.auth.service";
import { TwitterAuthService } from "./services/twitter.auth.service";

enum LoginType {
  myServiceAuth,
  facebookAuth,
  twitterAuth,
  microsoftAuth
}


class HandleAuthService {
  service: IAuthService;

  constructor(service: IAuthService) {
    this.service = service;
  }

  selectedLogin(email: string, password: string): void {
    this.service.login(email, password);
  }
  logout(): void {
    this.service.logout();
  }
  getUserId(): number {
    return this.service.getUserId();
  }
  getUserProfilePicture(): string {
    return this.service.getUserProfilePicture();
  }
}

const handler = new HandleAuthService(new FacebookAuthService());
handler.selectedLogin("","");


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


