import { loginElement } from "./login.js";

const createHeader = function () {
  const header = document.createElement("header");
  header.classList.add("main-header");
  const loginButton = document.createElement("button");
  loginButton.classList.add("login-button");
  loginButton.innerText = "Login";
  loginButton.addEventListener("click", () => {
    loginElement();
  });
  header.appendChild(loginButton);
  return header;
};

export { createHeader };
