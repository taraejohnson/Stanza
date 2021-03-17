import { getRandomExamplePoem, saveUserPoem } from "./app.js";
import { addTextEditor } from "./syllableCounter.js";
import { addWordGenerator } from "./wordGenerator.js";
const poemTypeElement = function (examplePoemType) {
  const poemTypeContent = document.querySelector(".main-content");
  clearChildren(poemTypeContent);

  const containerDiv = document.createElement("div");
  containerDiv.setAttribute("id", "containerDiv");
  containerDiv.classList.add("descriptionDiv");
  poemTypeContent.appendChild(containerDiv);

  // wrapper div for 3x columns:
  const wrapperForFlexboxOrGrid = document.createElement("div");
  wrapperForFlexboxOrGrid.classList.add("wrapperForFlexboxOrGrid");
  containerDiv.appendChild(wrapperForFlexboxOrGrid);

  const leftColumn = document.createElement("div");
  leftColumn.setAttribute("id", "leftColumn");
  wrapperForFlexboxOrGrid.appendChild(leftColumn);

  const descHeader = document.createElement("h2");
  descHeader.classList.add("description-header");
  descHeader.innerText = examplePoemType.typeName;
  leftColumn.appendChild(descHeader);

  const typeDesP = document.createElement("p");
  typeDesP.classList.add("type-description-p");
  typeDesP.innerHTML = examplePoemType.typeDescription;
  leftColumn.appendChild(typeDesP);

  //poem type description & editor
  const editorDiv = document.createElement("div");
  editorDiv.classList.add("editor-div");
  wrapperForFlexboxOrGrid.appendChild(editorDiv);
  //title input
  const titleInput = document.createElement("input");
  titleInput.classList.add("title-input");
  titleInput.setAttribute("id", "titleInput");
  titleInput.setAttribute("placeholder", "Add a title");
  titleInput.setAttribute("method", "post");
  editorDiv.appendChild(titleInput);
  //editor toolbar
  const poemEditorFieldset = document.createElement("fieldset");
  poemEditorFieldset.classList.add("poem-editor-fieldset");
  editorDiv.appendChild(poemEditorFieldset);
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

  const imageLabelSyllableCountArrow = document.createElement("img");
  imageLabelSyllableCountArrow.setAttribute(
    "src",
    "./images/syllables-arrow2.png"
  );
  imageLabelSyllableCountArrow.style.height = "22px";
  imageLabelSyllableCountArrow.style.position = "relative";
  imageLabelSyllableCountArrow.style.top = "7px";
  imageLabelSyllableCountArrow.style.left = "18px";
  poemEditorFieldset.appendChild(imageLabelSyllableCountArrow);

  addTextEditor();

  const rightColumn = document.createElement("div");
  rightColumn.setAttribute("id", "rightColumn");
  wrapperForFlexboxOrGrid.appendChild(rightColumn);

  //poem type example random
  const typeExamplesDiv = document.createElement("div");
  typeExamplesDiv.classList.add("type-examples-div");
  leftColumn.appendChild(typeExamplesDiv);
  const typeExamplesHeader = document.createElement("h2");
  typeExamplesHeader.classList.add("type-examples-header");
  typeExamplesHeader.innerHTML = `Read an Example`;
  typeExamplesDiv.appendChild(typeExamplesHeader);
  let typeExamplesP = document.createElement("p");
  typeExamplesP.classList.add("type-examples-p");
  getRandomExamplePoem(examplePoemType.typeName);
  typeExamplesDiv.appendChild(typeExamplesP);
  const anotherExampleButton = document.createElement("button");
  anotherExampleButton.classList.add("another-example-button");
  anotherExampleButton.innerText = "Show me another";
  anotherExampleButton.addEventListener("click", () => {
    clearChildren(typeExamplesP);
    getRandomExamplePoem(examplePoemType.typeName);
  });
  typeExamplesDiv.appendChild(anotherExampleButton);

  //download poem function
  function getFrontHTML() {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        
    `;
  }

  function getBackHTML() {
    return `
        
    </body>
    </html>`;
  }

  function download(filename, text) {
    let downloadElement = document.createElement("a");
    downloadElement.setAttribute(
      "href",
      "data:text/plain;charset=utf-8," + encodeURIComponent(text)
    );
    downloadElement.setAttribute("download", filename);

    downloadElement.style.display = "none";
    editorDiv.appendChild(downloadElement);

    downloadElement.click();
    editorDiv.removeChild(downloadElement);
  }

  //user poem buttons (download, share, reset)
  const userPoemOptionsDiv = document.createElement("div");
  userPoemOptionsDiv.classList.add("user-poem-options-div");
  editorDiv.appendChild(userPoemOptionsDiv);
  const downloadButton = document.createElement("button");
  downloadButton.classList.add("download-button");
  downloadButton.innerText = "Download";
  downloadButton.addEventListener("click", () => {
    let text =
      getFrontHTML() +
      document.getElementById("editor1").innerHTML +
      getBackHTML();
    let filename = "yournewfile.html";

    download(filename, text);
  });
  userPoemOptionsDiv.appendChild(downloadButton);
  const saveButton = document.createElement("button");
  saveButton.classList.add("save-button");
  saveButton.innerText = "Save to Account";
  saveButton.addEventListener("click", () => {
    saveUserPoem();
  });
  userPoemOptionsDiv.appendChild(saveButton);
  const resetButton = document.createElement("button");
  resetButton.classList.add("reset-button");
  resetButton.innerText = "Reset";
  resetButton.addEventListener("click", () => {
    let resetEditor = document.getElementById("editor1");
    let resetTitle = document.getElementById("titleInput");
    resetEditor.innerText = "";
    resetTitle.value = "";
  });
  userPoemOptionsDiv.appendChild(resetButton);

  //tools button
  const toolsDiv = document.createElement("div");
  toolsDiv.classList.add("tools-div");
  containerDiv.appendChild(toolsDiv);
  const toolsButton = document.createElement("h2");
  toolsButton.innerText = "Tools";
  toolsDiv.appendChild(toolsButton);
  rightColumn.appendChild(toolsDiv);

  addWordGenerator();

  //poem type example random
  typeExamplesP = document.createElement("p");
  typeExamplesP.classList.add("type-examples-p");
  getRandomExamplePoem(examplePoemType.typeName);
  containerDiv.appendChild(typeExamplesP);

  wrapperForFlexboxOrGrid.style.position = 'relative';
  wrapperForFlexboxOrGrid.style.top = '-35px';
  document.body.style.backgroundPosition = 'center -65px';

  return poemTypeElement;
};

const clearChildren = function (element) {
  while (element.firstChild) {
    element.removeChild(element.lastChild);
  }
};

export { poemTypeElement };
