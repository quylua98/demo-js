
interface Listeners {
  [key: string]: Function;
}

const changeListeners: Listeners = {};
let username = ""

function broadcast() {
  Object.keys(changeListeners).forEach(k => changeListeners[k]());
}

export const UserService = {
  get: () => {
    return username;
  },

  set: (u: string) => {
    username = u;
    broadcast();
  },

  onChange: (key: string, cb: Function) => {
    changeListeners[key] = () => cb(username);
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

  login: async () => {
    await setTimeout(() => {
      UserService.set("Logged innnnnnnnnn")
    }, 2000)
  }
};

