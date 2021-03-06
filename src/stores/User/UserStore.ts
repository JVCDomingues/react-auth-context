import { createContext } from "react";
import { action, observable } from "mobx";

import { User } from "../../models/User";

export class UserStore {
  @observable name = '';
  @observable email = '';

  @action
  saveUser(user: User) {
    const { name: userName, email: userMail } = user;

    console.log(userName, userMail);

    this.name = userName;
    this.email = userMail;
  }
}

export const UserContext = createContext(new UserStore());