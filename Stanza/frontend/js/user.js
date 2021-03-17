import { clearChildren, deleteUserPoem, getSingleUserPoem } from "./app.js";

const userPoemsElement = function (userName) {
  const userPoemsElement = document.querySelector(".main-content");
  clearChildren(userPoemsElement);

  const userPoemsMainDiv = document.createElement("div");
  userPoemsMainDiv.classList.add("user-poems-main-div");
  userPoemsElement.appendChild(userPoemsMainDiv);

  const userPoemsDiv = document.createElement("div");
  userPoemsDiv.classList.add("user-poems-div");
  userPoemsMainDiv.appendChild(userPoemsDiv);

  const userPoemsHeader = document.createElement("h1");
  userPoemsHeader.classList.add("user-poems-header");
  userPoemsHeader.innerText = "View & Edit Your Poems";
  userPoemsMainDiv.prepend(userPoemsHeader);

  userName.userPoems.forEach((userPoems) => {
    const singleUserPoemDiv = document.createElement("div");
    singleUserPoemDiv.classList.add("single-user-poem-div");
    singleUserPoemDiv.setAttribute("id", "userPoemEditor");
    singleUserPoemDiv.setAttribute("method", "post");
    userPoemsDiv.appendChild(singleUserPoemDiv);

    const singleUserPoemHeader = document.createElement("h2");
    singleUserPoemHeader.classList.add("single-user-poem-h2");
    singleUserPoemHeader.innerText = userPoems.title;
    singleUserPoemDiv.appendChild(singleUserPoemHeader);

    const singleUserPoemP = document.createElement("p");
    singleUserPoemP.classList.add("single-user-poem-p");
    singleUserPoemP.innerHTML = userPoems.poemContent;
    singleUserPoemDiv.appendChild(singleUserPoemP);

    const userPoemEditButton = document.createElement("button");
    userPoemEditButton.classList.add("poem-edit-button");
    userPoemEditButton.innerText = "Edit";
    userPoemEditButton.addEventListener("click", () => {
      getSingleUserPoem(userPoems.id);
    });
    singleUserPoemDiv.appendChild(userPoemEditButton);
    const userPoemDeleteButton = document.createElement("button");
    userPoemDeleteButton.classList.add("poem-delete-button");
    userPoemDeleteButton.innerText = "Delete";
    userPoemDeleteButton.addEventListener("click", () => {
      deleteUserPoem(userPoems.id);
    });
    singleUserPoemDiv.appendChild(userPoemDeleteButton);
  });
};

export { userPoemsElement };
