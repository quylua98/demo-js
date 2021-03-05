import {LoginApi} from "@/api/LoginApi";

interface Listeners {
  [key: string]: Function;
}

export interface User {
  username: string;
}

const changeListeners: Listeners = {};
let user: User | null = null

function broadcast() {
  Object.keys(changeListeners).forEach(k => changeListeners[k]());
}

export const UserService = {
  get: () => {
    return user;
  },

  set: (u: User) => {
    user = u;
    broadcast();
  },

  onChange: (key: string, cb: Function) => {
    changeListeners[key] = () => cb(user);
  },

  /**
   * remove if unused
   * @param key
   */
  removeChange: (key: string) => {
    if (changeListeners[key]) {
      delete changeListeners[key];
    }
  },

  // Login async await
  loginAsyncAwait: async (usr = "", pwd = "") => {
    const username = await LoginApi.login(usr, pwd);
    if (username) {
      UserService.set({
        username: username
      })
    } else {
      alert("LOGIN FAIL")
    }
  },

  // Login promise
  loginPromise: (usr = "", pwd = "") => {
    LoginApi.login(usr, pwd).then(username => {
      if (username) {
        UserService.set({
          username: username
        })
      } else {
        alert("LOGIN FAIL")
      }
    })
  }
};

