interface Listeners {
  [key: string]: Function;
}

const changeListeners: Listeners = {};
let password = ""

function broadcast() {
  Object.keys(changeListeners).forEach(k => changeListeners[k]());
}

export const PasswordService = {
  get: () => {
    return password;
  },

  set: (pwd: string) => {
    password = pwd;
    broadcast();
  },

  onChange: (key: string, cb: Function) => {
    changeListeners[key] = () => cb(password);
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
};

