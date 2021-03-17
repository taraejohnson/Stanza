let initialWordDiv = document.getElementById("initial-word-form");
const initialWordInput = document.querySelector("#initial-word-form input");
const relatedWord = document.getElementById("related-word");
const history = document.getElementById("history");
const proxyURL = "https://cors.io/?"; // This is in order to bypass the 'Access-Control-Allow-Origin' error
const maxRelatedWordDistance = 10; // Index of the next related word (from related words' array) will be between 0 and maxRelatedWordDistance-1
let rhyming = document.getElementById("ryhming");
let rWord = document.getElementById("rWord");
let spelledLike = document.getElementById("spelledLike");
const syllables = document.getElementById("syllables");

function addWordGenerator() {
  //Radio Buttons
  const radioButtonDiv = document.createElement("div");
  radioButtonDiv.classList.add("radio-button-div");
  const radioButtonHeader = document.createElement("h3");
  radioButtonHeader.classList.add("radio-button-header");
  radioButtonHeader.innerHTML = "Word Explorer";
  radioButtonDiv.appendChild(radioButtonHeader);
  const radioButtonExplanation = document.createElement("div");
  radioButtonExplanation.innerHTML =
    "Find new words & inspiration with this tool.";
  radioButtonExplanation.style.paddingBottom = "7px";
  radioButtonDiv.appendChild(radioButtonExplanation);

  let containerDiv = document.getElementById("containerDiv");
  containerDiv.appendChild(radioButtonDiv);
  const radioButton = ["Rhyming", "Related", "spelledLike"];
  radioButton.forEach((radioButtonValue, i) => {
    const radioButtonLabels = ["Rhyming", "Related", "Spelled Like"];
    const labelValue = document.createElement("label");
    labelValue.innerHTML = radioButtonLabels[i];
    labelValue.classList.add("radioButtonLabel");
    const inputValue = document.createElement("input");
    inputValue.type = "radio";
    inputValue.value = radioButtonValue;
    inputValue.setAttribute("id", `radioButton${radioButtonValue}`);
    inputValue.name = "selector";
    inputValue.rButtonValue = i;
    if (radioButtonValue == "Rhyming") {
      rhyming = inputValue;
      inputValue.checked = "checked";
    } else if (radioButtonValue == "Related") {
      rWord = inputValue;
    } else if (radioButtonValue == "spelledLike") {
      spelledLike = inputValue;
    }
    labelValue.style.paddingLeft = "3px";
    labelValue.style.paddingRight = "15px";
    radioButtonDiv.appendChild(inputValue);
    radioButtonDiv.appendChild(labelValue);
  });

  rightColumn.appendChild(radioButtonDiv);

  // Initial word form
  initialWordDiv = document.createElement("form");
  initialWordDiv.setAttribute("id", "initial-word-form");
  containerDiv.appendChild(initialWordDiv);
  const initialWordForm = document.createElement("input");
  initialWordForm.setAttribute("id", "generatorInputTextField");
  initialWordForm.setAttribute("placeholder", "Enter a Word Here");
  initialWordDiv.appendChild(initialWordForm);

  const generatorButton = document.createElement("button");
  generatorButton.setAttribute("id", "generatorButton");
  generatorButton.innerText = "Search";
  initialWordDiv.appendChild(generatorButton);

  rightColumn.appendChild(initialWordDiv);

  // Event Listeners
  initialWordDiv = document.getElementById("initial-word-form");
  initialWordDiv.addEventListener("submit", initialWordFormSubmit);
  function initialWordFormSubmit(event) {
    if (event != "") {
      event.preventDefault();
    }
    const newInitialWordInput = initialWordForm.value.trim().toLowerCase();
    if (newInitialWordInput) {
      initialWordForm.blur();
    }
    relatedWordClick();
  }

  let radioButton1 = document.getElementById("radioButtonRhyming");
  let radioButton2 = document.getElementById("radioButtonRelated");
  let radioButton3 = document.getElementById("radioButtonspelledLike");
  radioButton1.addEventListener("change", initialWordFormSubmit);
  radioButton2.addEventListener("change", initialWordFormSubmit);
  radioButton3.addEventListener("change", initialWordFormSubmit);

  let wordExplorerOutputDiv = document.createElement("div");
  wordExplorerOutputDiv.setAttribute("id", "wordExplorerOutputDiv");
  rightColumn.appendChild(wordExplorerOutputDiv);

  let arrayOfAllWords = [];
  function relatedWordClick(event) {
    if (initialWordForm.value.length < 5 && spelledLike.checked == true) {
      wordExplorerOutputDiv.innerHTML = "Please use a longer word. ";
      setTimeout(() => {
        wordExplorerOutputDiv.innerHTML = "";
      }, 3000);
    } else {
      fetch(
        `https://api.datamuse.com/words?${radioButtonIf()}=` +
          initialWordForm.value
      )
        .then((res) => res.json())
        .then((data) => {
          arrayOfAllWords = [];
          wordExplorerOutputDiv.innerHTML = "";
          let i = 0;
          let numberOfResults = Math.min(data.length, 33);
          for (i = 0; i < numberOfResults; i++) {
            if (i < numberOfResults - 1) {
              //makes sure there isn't a comma left at the end of all words
              wordExplorerOutputDiv.innerHTML += `${data[i].word}, `;
            } else {
              wordExplorerOutputDiv.innerHTML += data[i].word;
            }
          }
          if (data.length == 0) {
            wordExplorerOutputDiv.innerHTML =
              "That word is not in the API's dictionary.";
            setTimeout(() => {
              wordExplorerOutputDiv.innerHTML = "";
            }, 3000);
          }
          arrayOfAllWords.forEach((word) => {
            wordExplorerOutputDiv.innerHTML += word + ", ";
          });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  function radioButtonIf() {
    if (rhyming.checked == true) {
      return "rel_rhy";
    } else if (rWord.checked == true) return "ml";
    else if (spelledLike.checked == true) return "sp";
    else alert("No channel selected");
  }
}

export { addWordGenerator };
