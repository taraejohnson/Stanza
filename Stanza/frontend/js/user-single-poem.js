import { clearChildren, editUserPoem } from "./app.js";

const userPoemElement = function (userPoems) {
  const userPoemContent = document.querySelector(".main-content");
  clearChildren(userPoemContent);

  const poemEditDiv = document.createElement("div");
  poemEditDiv.classList.add("poem-edit-main-div");
  userPoemContent.appendChild(poemEditDiv);

  const userPoemEditDiv = document.createElement("div");
  userPoemEditDiv.classList.add("editor-div");

  const editTitleInput = document.createElement("input");
  editTitleInput.classList.add("title-input");
  editTitleInput.setAttribute("id", "editTitleInput");
  editTitleInput.setAttribute("method", "post");
  editTitleInput.setAttribute("value", userPoems.title);
  poemEditDiv.appendChild(editTitleInput);

  const poemEditorFieldset = document.createElement("fieldset");
  poemEditorFieldset.classList.add("poem-editor-fieldset");
  poemEditDiv.appendChild(poemEditorFieldset);
  const italicButton = document.createElement("button");
  italicButton.classList.add("fontStyle-italic");
  italicButton.setAttribute("title", "Italicize Highlighted Text");
  italicButton.innerHTML = `<i class="fas fa-italic"></i>`;
  italicButton.addEventListener("click", () => {
    document.execCommand("italic", false, null);
  });
  poemEditorFieldset.appendChild(italicButton);
  const boldButton = document.createElement("button");
  boldButton.classList.add("fontStyle-bold");
  boldButton.setAttribute("title", "Bold Highlighted Text");
  boldButton.innerHTML = `<i class="fas fa-bold"></i>`;
  boldButton.addEventListener("click", (e) => {
    e.preventDefault();
    document.execCommand("bold", false, null);
  });
  poemEditorFieldset.appendChild(boldButton);
  const underlineButton = document.createElement("button");
  underlineButton.classList.add("fontStyle-underline");
  underlineButton.setAttribute("title", "Underline Highlighted Text");
  underlineButton.innerHTML = `<i class="fas fa-underline"></i>`;
  underlineButton.addEventListener("click", () => {
    document.execCommand("underline", false, null);
  });
  poemEditorFieldset.appendChild(underlineButton);
  const strikeButton = document.createElement("button");
  strikeButton.classList.add("fontStyle-strikethrough");
  strikeButton.setAttribute("title", "Strikethrough Highlighted Text");
  strikeButton.innerHTML = `<i class="fas fa-strikethrough"></i>`;
  strikeButton.addEventListener("click", () => {
    document.execCommand("strikethrough", false, null);
  });
  poemEditorFieldset.appendChild(strikeButton);
  const fontSelect = document.createElement("select");
  fontSelect.classList.add("input");
  fontSelect.setAttribute("id", "font-input");
  fontSelect.addEventListener("change", () => {
    changeFont(this);
  });
  poemEditorFieldset.appendChild(fontSelect);
  const optionArial = document.createElement("option");
  optionArial.value = "Arial";
  optionArial.innerText = "Arial";
  fontSelect.appendChild(optionArial);
  const optionBallet = document.createElement("option");
  optionBallet.value = "Ballet";
  optionBallet.innerText = "Ballet";
  fontSelect.appendChild(optionBallet);
  const optionHelvetica = document.createElement("option");
  optionHelvetica.value = "Helvetica";
  optionHelvetica.innerText = "Helvetica";
  fontSelect.appendChild(optionHelvetica);
  const optionNewsreader = document.createElement("option");
  optionNewsreader.value = "Newsreader";
  optionNewsreader.innerText = "Newsreader";
  fontSelect.appendChild(optionNewsreader);
  const optionNotoSansJp = document.createElement("option");
  optionNotoSansJp.value = "Noto Sans JP";
  optionNotoSansJp.innerText = "Noto Sans JP";
  fontSelect.appendChild(optionNotoSansJp);
  const optionPtSerif = document.createElement("option");
  optionPtSerif.value = "PT Serif";
  optionPtSerif.innerText = "PT Serif";
  fontSelect.appendChild(optionPtSerif);
  const optionRoboto = document.createElement("option");
  optionRoboto.value = "Roboto";
  optionRoboto.innerText = "Roboto";
  fontSelect.appendChild(optionRoboto);
  const optionSource = document.createElement("option");
  optionSource.value = "Source Sans Pro";
  optionSource.innerText = "Source Sans Pro";
  fontSelect.appendChild(optionSource);
  const optionTimesNew = document.createElement("option");
  optionTimesNew.value = "Times New Roman";
  optionTimesNew.innerText = "Times New Roman";
  fontSelect.appendChild(optionTimesNew);
  const optionTruculenta = document.createElement("option");
  optionTruculenta.value = "Truculenta";
  optionTruculenta.innerText = "Truculenta";
  fontSelect.appendChild(optionTruculenta);

  //
  const alignLeftButton = document.createElement("button");
  alignLeftButton.classList.add("align-left-button");
  alignLeftButton.innerHTML = `<i class="fas fa-align-left"></i>`;
  alignLeftButton.addEventListener("click", () => {
    document.execCommand("justifyLeft", false, null);
  });
  poemEditorFieldset.appendChild(alignLeftButton);
  const alignCenterButton = document.createElement("button");
  alignCenterButton.classList.add("align-center-button");
  alignCenterButton.innerHTML = `<i class="fas fa-align-center"></i>`;
  alignCenterButton.addEventListener("click", () => {
    document.execCommand("justifyCenter", false, null);
  });
  poemEditorFieldset.appendChild(alignCenterButton);
  const alignRightButton = document.createElement("button");
  alignRightButton.classList.add("align-right-button");
  alignRightButton.innerHTML = `<i class="fas fa-align-right"></i>`;
  alignRightButton.addEventListener("click", () => {
    document.execCommand("justifyRight", false, null);
  });
  poemEditorFieldset.appendChild(alignRightButton);
  const redoButton = document.createElement("button");
  redoButton.classList.add("redo-apply-button");
  redoButton.innerHTML = `<i class="fas fa-redo-alt"></i>`;
  redoButton.addEventListener("click", () => {
    document.execCommand("redo", false, null);
  });
  poemEditorFieldset.appendChild(redoButton);
  const undoButton = document.createElement("button");
  undoButton.classList.add("undo-apply-button");
  undoButton.innerHTML = `<i class="fas fa-undo-alt"></i>`;
  undoButton.addEventListener("click", () => {
    document.execCommand("undo", false, null);
  });
  poemEditorFieldset.appendChild(undoButton);
  const colorChoice = document.createElement("input");
  colorChoice.classList.add("color-apply");
  colorChoice.setAttribute("type", "color");
  colorChoice.setAttribute("id", "myColor");
  colorChoice.addEventListener("change", () => {
    chooseColor();
  });
  poemEditorFieldset.appendChild(colorChoice);
  const fontSizeSelect = document.createElement("select");
  fontSizeSelect.classList.add("input");
  fontSizeSelect.id = "fontSize";
  fontSizeSelect.addEventListener("change", () => {
    changeSize();
  });
  poemEditorFieldset.appendChild(fontSizeSelect);
  const optionSize1 = document.createElement("option");
  optionSize1.value = "1";
  optionSize1.innerText = "1";
  fontSizeSelect.appendChild(optionSize1);

  userPoemEditDiv.classList.add("saved-editor-div");
  userPoemEditDiv.setAttribute("name", "editorAreaInput");
  userPoemEditDiv.setAttribute("id", "savedEditor1");
  userPoemEditDiv.setAttribute("contenteditable", true);
  userPoemEditDiv.setAttribute("method", "post");
  userPoemEditDiv.innerHTML = userPoems.poemContent;
  poemEditDiv.appendChild(userPoemEditDiv);

  const saveChangesButton = document.createElement("button");
  saveChangesButton.classList.add("save-changes-button");
  saveChangesButton.innerText = "Save Changes";
  saveChangesButton.addEventListener("click", () => {
    editUserPoem(userPoems);
  });
  poemEditDiv.appendChild(saveChangesButton);

  return userPoemElement;
};

export { userPoemElement };
