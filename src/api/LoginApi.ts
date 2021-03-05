export const LoginApi = {
  login: async (usr = "", pwd = "") => {
    await new Promise(r => setTimeout(r, 2000));
    if (usr === "admin" && pwd === "admin") {
      return "ADMIN"
    } else if (usr === "quy" && pwd === "quy") {
      return "ADMIN"
    } else {
      return "";
    }
  }
}