import { poemTypeElement } from "./poemTypeView.js";

const poemChoiceElement = function (poemType) {
  const poemChoiceContent = document.querySelector(".main-content");
  clearChildren(poemChoiceContent);

  const typeOfPoemDiv = document.createElement("div");
  typeOfPoemDiv.classList.add("typeOfPoemBox");
  poemChoiceContent.appendChild(typeOfPoemDiv);

  poemType.forEach((examplePoemType) => {
    const poemTypeButton = document.createElement("button");
    poemTypeButton.classList.add("poem-type-button");
    poemTypeButton.innerText = examplePoemType.typeName;
    poemTypeButton.addEventListener("click", () =>
      poemTypeElement(examplePoemType)
    );
    typeOfPoemDiv.appendChild(poemTypeButton);
  });

  return poemChoiceElement;
};

const clearChildren = function (element) {
  while (element.firstChild) {
    element.removeChild(element.lastChild);
  }
};

export { poemChoiceElement };
