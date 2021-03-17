import { clearChildren } from "./app.js";

const aboutElement = function () {
  const aboutElement = document.querySelector(".main-content");
  clearChildren(aboutElement);

  const aboutMainDiv = document.createElement("div");
  aboutMainDiv.classList.add("about-div-main");
  aboutMainDiv.innerHTML =
    "Stanza was created with the dual visions of bringing an appreciation of poetry to a wider audience, and functioning as a helpful composing tool for experienced poets.<br><br>Use Stanza to create new poems, and log in to save and edit your work. Our 'Home' page allows you to choose from several major poetic forms to experiment with; for each form, you'll find a short guide to the form's conventions alongside examples of published poems for you to read and reference. Let our 'Word Explorer' tool help get you unstuck, or encourage you to experiment.<br><br>We hope our website inspires you to begin your journey on a path of poetry appreciation. And remember: it's okay to deviate from the guidelines; your poems might even be better for it.";
  aboutElement.appendChild(aboutMainDiv);

  return aboutElement;
};

export { aboutElement };
