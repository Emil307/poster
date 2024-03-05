import { makeAutoObservable } from "mobx";
import type { TUser } from "@/domain/types/types";

class userState {
  token = ''
  user = {}

  constructor() {
    makeAutoObservable(this);
  }
  
  setUser(user: TUser) {
    this.user = user;
  }

  setToken(token: string) {
    this.token = token;
  }
}

export default new userState();
