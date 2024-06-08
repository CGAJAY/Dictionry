let textInput = document.getElementById("text-inpt");
// textInput.value = "mind";
const searchBtn = document.getElementById("search-btn");
const contentCont = document.querySelector(".content");
const wordContDiv = document.createElement("div");
wordContDiv.classList.add("word-cont");
const searchedWord = document.createElement("h2");

function findMeaning() {
  fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${textInput.value}`)
    .then((result) => {
      return result.json();
    })
    .then((data) => {
      searchedWord.textContent = textInput.value;
      wordContDiv.appendChild(searchedWord);
      contentCont.appendChild(wordContDiv);
    });
}

searchBtn.addEventListener("click", findMeaning);
