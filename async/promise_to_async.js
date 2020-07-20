"use strict";

//  Callback Hell example
class UserStorage {
  async getUserWithRole(user, password) {
    const id = await this.loginUser(user, password);
    const role = await this.getRoles(id);
    return role;
  }
  loginUser(id, password) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (
          (id === "woo" && password === "dream") ||
          (id === "coder" && password === "academy")
        ) {
          resolve(id);
        } else {
          reject(new Error("not found"));
        }
      }, 2000);
    });
  }

  getRoles(user) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (user === "woo") {
          resolve({ name: "woo", role: "admin" });
        } else {
          reject(new Error("no access"));
        }
      }, 1000);
    });
  }
}

const userStorage = new UserStorage();
const id = prompt("enter your id");
const password = prompt("enter your password");

// promise chaining -> ✨ async/await ✨
userStorage
  .getUserWithRole(id, password) //
  .catch(console.log)
  .then(console.log);
