import { clearChildren } from "./app.js";
import { checkUserLogIn } from "./app.js";

const loginElement = function () {
  const loginContent = document.querySelector(".main-content");
  clearChildren(loginContent);

  const loginDiv = document.createElement("div");
  loginDiv.classList.add("login-div");
  loginContent.appendChild(loginDiv);

  //returning user login
  const loginForm = document.createElement("div");
  loginForm.classList.add("login-form");
  loginForm.setAttribute("method", "post");
  loginDiv.appendChild(loginForm);

  const loginTitle = document.createElement("h2");
  loginTitle.classList.add("login-title");
  loginTitle.innerText = "Returning Users";
  loginForm.appendChild(loginTitle);

  const loginInputLabel = document.createElement("label");
  loginInputLabel.classList.add("login-input-label");
  loginInputLabel.innerText = "Enter User Name:";
  loginForm.appendChild(loginInputLabel);

  const loginBr = document.createElement("br");
  loginForm.appendChild(loginBr);

  const loginInput = document.createElement("input");
  loginInput.classList.add("login-input");
  loginInput.setAttribute("id", "userName");
  loginForm.appendChild(loginInput);

  const loginFormSubmit = document.createElement("button");
  loginFormSubmit.classList.add("login-form-submit");
  loginFormSubmit.innerText = "Login";
  loginForm.appendChild(loginFormSubmit);

  loginFormSubmit.addEventListener("click", () => {
    checkUserLogIn(loginInput.value);
  });

  //new user login
  const newLoginForm = document.createElement("div");
  newLoginForm.classList.add("login-form");
  newLoginForm.setAttribute("method", "post");
  loginDiv.appendChild(newLoginForm);

  const newLoginTitle = document.createElement("h2");
  newLoginTitle.classList.add("login-title");
  newLoginTitle.innerText = "New Users";
  newLoginForm.appendChild(newLoginTitle);

  const newLoginInputLabel = document.createElement("label");
  newLoginInputLabel.classList.add("login-input-label");
  newLoginInputLabel.innerText = "Enter New User Name:";
  newLoginForm.appendChild(newLoginInputLabel);

  const newLoginBr = document.createElement("br");
  newLoginForm.appendChild(newLoginBr);

  const newLoginInput = document.createElement("input");
  newLoginInput.classList.add("login-input");
  newLoginInput.setAttribute("id", "newUserName");
  newLoginForm.appendChild(newLoginInput);

  const newLoginFormSubmit = document.createElement("button");
  newLoginFormSubmit.classList.add("new-login-form-submit");
  newLoginFormSubmit.innerText = "Create New Login";
  newLoginForm.appendChild(newLoginFormSubmit);

  newLoginFormSubmit.addEventListener("click", () => {
    checkUserLogIn(newLoginInput.value);
  });
};

export { loginElement };
