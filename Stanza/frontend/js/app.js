import { createHeader } from "./header.js";
import { landing } from "./landing.js";
import { poemChoiceElement } from "./poem-choice-page.js";
import { createFooter } from "./footer.js";
import { userPoemsElement } from "./user.js";
import { userPoemElement } from "./user-single-poem.js";

let loggedInUser = "";

const clearChildren = function (element) {
  while (element.firstChild) {
    element.removeChild(element.lastChild);
  }
};


let header = createHeader();
const container = document.querySelector(".container");
container.prepend(header);
let main = landing();
container.appendChild(main);
let footer = createFooter();
container.appendChild(footer);

fetch("http://localhost:8080/api/examplepoems")
  .then((response) => response.json())
  .catch((error) => console.log(error));

const getPoemTypes = function () {
  fetch("http://localhost:8080/api/examplepoemtype", {
    method: "GET",
    mode: "cors",
  })
    .then((response) => response.json())
    .then((examplePoemType) => poemChoiceElement(examplePoemType))
    .catch((error) => console.log(error));
};

const getSingleUserPoem = function (id) {
  fetch("http://localhost:8080/api/userpoems/" + id, {
    method: "GET",
    mode: "cors",
  })
    .then((response) => response.json())
    .then((userPoem) => {
      console.log(id);
      userPoemElement(userPoem);
    });
};

const getRandomExamplePoem = function (inPoemType) {
  fetch("http://localhost:8080/api/examplepoems", {
    method: "GET",
    mode: "cors",
  })
    .then((response) => response.json())
    .then((examplePoems) => {
      function filterForRandomPoem(examplePoems) {
        let examplePoemDisplay = document.querySelector(".type-examples-p");
        let filtered = examplePoems.filter(
          (onePoem) => onePoem.examplePoemType.typeName === inPoemType
        );
        console.log(filtered);
        let randomPoem = Math.floor(Math.random() * filtered.length);
        console.log(filtered[randomPoem]);
        examplePoemDisplay.innerHTML =
          `<a href="` +
          filtered[randomPoem].poemUrl +
          `" target="popup" onclick="window.open('` +
          filtered[randomPoem].poemUrl +
          `','name','width=600,height=400')">` +
          filtered[randomPoem].title +
          `</a><br>` +
          filtered[randomPoem].poet;
      }
      filterForRandomPoem(examplePoems);
    })
    .catch((error) => console.log(error));
};

const checkUserLogIn = function (user) {
  fetch("http://localhost:8080/api/user/", {
    method: "GET",
    mode: "cors",
  })
    .then((response) => response.json())
    .then((userList) => {
      console.log(user);
      let userFound = false;
      userList.forEach((currentUser) => {
        if (currentUser.userName === user) {
          loggedInUser = currentUser;
          userFound = true;
          userPoemsElement(currentUser);
          header.innerHTML = `${currentUser.userName}`;
          header.addEventListener("click", () => {
            updateUserPoems(currentUser);
          });
        }
      });

      if (userFound == false) {
        fetch("http://localhost:8080/api/user/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            userName: user,
          }),
        })
          .then((response) => response.json())
          .then((user) => {
            loggedInUser = user;
            updateUsers(user);
            console.log(user);
            header.innerHTML = `${user.userName}`;
            header.addEventListener("click", () => {
              updateUserPoems(user);
            });
          })
          .catch((error) => console.log(error));
      }
    });
};

const deleteUserPoem = function (id) {
  fetch("http://localhost:8080/api/userpoems/" + id, {
    method: "DELETE",
    mode: "cors",
  })
    .then((response) => response.json())
    .then((id) => updateUserPoems(id))
    .catch((error) => console.log(error));
};

const saveUserPoem = function () {
  fetch("http://localhost:8080/api/user/" + loggedInUser.id + "/poem", {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      poetName: "",
      title: titleInput.value,
      poemContent: editor1.innerHTML,
    }),
  })
    .then((response) => response.json())
    .then((userName) => updateUserPoems(userName))
    .catch((error) => console.log(error));
};

const editUserPoem = function (userPoem) {
  let poemEditor = document.querySelector(".saved-editor-div");
  console.log(loggedInUser);
  fetch("http://localhost:8080/api/userpoems/" + loggedInUser.id, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id: userPoem.id,
      poetName: userPoem.poetName,
      title: editTitleInput.value,
      poemContent: poemEditor.innerHTML,
    }),
  })
    .then((response) => response.json())
    .then((loggedInUser) => updateUserPoems(loggedInUser))
    .catch((error) => console.log(error));
};

const updateUserPoems = function () {
  fetch("http://localhost:8080/api/user/" + loggedInUser.id, {
    method: "GET",
    mode: "cors",
  })
    .then((response) => response.json())
    .then((loggedInUser) => userPoemsElement(loggedInUser))
    .catch((error) => console.log(error));
};

const updateUsers = function () {
  fetch("http://localhost:8080/api/user", {
    method: "GET",
    mode: "cors",
  })
    .then((response) => response.json())
    .then((loggedInUser) => userPoemsElement(loggedInUser))
    .catch((error) => console.log(error));
};

export { getPoemTypes };
export { getRandomExamplePoem };
export { clearChildren };
export { checkUserLogIn };
export { deleteUserPoem };
export { saveUserPoem };
export { editUserPoem };
export { getSingleUserPoem };
