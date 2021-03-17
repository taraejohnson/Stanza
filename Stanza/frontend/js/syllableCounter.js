let poetryTextEditor = "";
let syllablesDisplay = "";

let arrayOfEverything = [];
let arrayCountOfSyllablesForEachLine = [];
let arrayOfAllLines = [];
let arrayOfThisLinesWords = [];
let arrayForOneWordAndNumSyllables = [];

function addTextEditor() {
  let bookViewDiv = document.querySelector(".editor-div");
  let editorArea = document.createElement("div");
  editorArea.classList.add("editor-div");
  editorArea.setAttribute("name", "editorAreaInput");
  editorArea.setAttribute("id", "editor1");
  editorArea.setAttribute("contenteditable", true);
  editorArea.setAttribute("data-text", "Write here.");
  editorArea.setAttribute("method", "post");
  bookViewDiv.appendChild(editorArea);
  const userInput = document.createElement("input");
  userInput.setAttribute("type", "hidden");
  userInput.setAttribute("id", "");
  userInput.setAttribute("name", "userInput");
  const columnOfSyllableCounts = document.createElement("div");
  columnOfSyllableCounts.setAttribute("id", "div--count-of-syllables-per-line");
  bookViewDiv.appendChild(columnOfSyllableCounts);

  // NEW CODE FOR SIMULTANEOUS SCROLLING //////////////////////////////////////////////////////////////
  function updateOtherDivsScroll(){
    columnOfSyllableCounts.scrollTop = editorArea.scrollTop;
  }
  editorArea.addEventListener('scroll', updateOtherDivsScroll);
  /////////////////////////////////////////////////////////////////////////////////////////////////// END


  poetryTextEditor = document.getElementById("editor1");
  syllablesDisplay = document.getElementById(
    "div--count-of-syllables-per-line"
  );

  function stripNonAlphanumeric(inString) {
    let currentString = inString.replace(/[^a-z0-9- ↵]+/gi, " ");
    return currentString;
  }

  function filterUnnecessaryStrings(inArray) {
    let finalArrayOfWords = inArray.filter(function (oneWord) {
      return (
        oneWord != null &&
        oneWord != "" &&
        oneWord != "nbsp" &&
        oneWord != "br" &&
        oneWord != "div"
      );
    });
    return finalArrayOfWords;
  }

  function updateSyllables() {
    syllablesDisplay.innerHTML = "";
    let sizeOfSyllablesArray = arrayOfEverything.length;
    let arrayCountOfSyllablesForEachLine = new Array(sizeOfSyllablesArray);
    arrayOfEverything.forEach((line, inLineNum) => {
      let totalSyllablesForThisLine = 0;
      line.forEach((word) => {
        totalSyllablesForThisLine += word[1];
      });
      arrayCountOfSyllablesForEachLine[inLineNum] = totalSyllablesForThisLine;
    });
    arrayCountOfSyllablesForEachLine.forEach((element) => {
      syllablesDisplay.innerHTML += element + "<br>";
    });
  }

  function createAllArrays() {
    arrayOfEverything = [];
    let fullStringOfAllText = poetryTextEditor.innerHTML;
    splitIntoLines(fullStringOfAllText).forEach((el, i) => {
      if ((el == "" && i == 0) || (el == null && i == 0)) {
        return;
      } //skips empty element at [0]
      arrayOfAllLines.push(el);
    });
    arrayOfAllLines.forEach((el) => {
      arrayOfEverything.push(splitIntoArrayOfWords(el));
    });
    arrayOfEverything.forEach((oneLine, i) => {
      oneLine.forEach((oneWord, ii) => {
        lookupSyllables(oneWord, i, ii);
      });
    });
  }

  function splitIntoLines(inString) {
    arrayOfAllLines = [];
    let currentArrayOfLines = inString.split("<div>");
    currentArrayOfLines.filter(function (el) {
      return el != null && el != "";
    });
    return currentArrayOfLines;
  }

  function splitIntoArrayOfWords(inLine) {
    let thisLine = stripNonAlphanumeric(inLine);
    arrayOfThisLinesWords = thisLine.split(" ");
    arrayOfThisLinesWords = arrayOfThisLinesWords.filter(function (el) {
      return (
        el != null && el != "" && el != "nbsp" && el != "br" && el != "div"
      );
    });
    return arrayOfThisLinesWords;
  }

  function lookupSyllables(inWord, inLineNum, inWordNum) {
    (async () => {
      const res = await fetch(
        "https://api.datamuse.com/words?sp=" + inWord + "&md=s"
      );
      const json = await res.json();
      arrayOfEverything[inLineNum][inWordNum] = [];
      arrayForOneWordAndNumSyllables = [];
      if(json.length == 0) {
        arrayForOneWordAndNumSyllables.push(inWord);
        arrayForOneWordAndNumSyllables.push(1);
      } else{
        await arrayForOneWordAndNumSyllables.push(json[0].word);
        await arrayForOneWordAndNumSyllables.push(json[0].numSyllables);
      }
      arrayOfEverything[inLineNum][
        inWordNum
      ] = await arrayForOneWordAndNumSyllables;
    })();
  }

  // 1 second time delay to prevent instantly querying the API:
  let timeout = null;
  poetryTextEditor.addEventListener("keyup", function (e) {
    console.log("timeout");
    clearTimeout(timeout);
    timeout = setTimeout(function () {
      createAllArrays();
    }, 1000);
  });

  // Update syllables continuously (every second):
  (async () => {
    const interval = setInterval(function () {
      updateSyllables();
    }, 1000);
    //  clearInterval(interval);
  })();

  createAllArrays();
}

export { addTextEditor };
