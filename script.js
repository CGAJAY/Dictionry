let textInput = document.getElementById("text-inpt");
// textInput.value = "mind";
const searchBtn = document.getElementById("search-btn");
const contentCont = document.querySelector(".content");
const wordContDiv = document.createElement("div");
wordContDiv.classList.add("word-cont");
const searchedWord = document.createElement("h2");
const wordGreek = document.createElement("p");
wordGreek.classList.add("italic");
const languageCont = document.querySelector(".language-cont");
const wordType = document.createElement("strong");
const MeaningList = document.createElement("ol");
const Meaning = document.createElement("li");

async function findMeaning() {
  try {
    const response = await fetch(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${textInput.value}`
    );
    contentCont.textContent = "";
    const data = await response.json();
    searchedWord.textContent = textInput.value;
    wordContDiv.appendChild(searchedWord);
    wordGreek.textContent = `${data[0].phonetic}`;
    wordContDiv.appendChild(wordGreek);
    contentCont.appendChild(wordContDiv);
    wordType.textContent = `${data[0].meanings[0].partOfSpeech}`;
    contentCont.appendChild(wordType);
    console.log(data[0]);
    //   console.log(data[0].meanings[0]);
    //   console.log(data[0].meanings[0].definitions);
    data[0].meanings[0].definitions.forEach((define) => {
      console.log(define);
      MeaningList.innerHTML += `<li>${define.definition}</li>`;
    });
    contentCont.appendChild(MeaningList);
  } catch (error) {
    contentCont.textContent = "";
    let message = document.createElement("h2");
    message.textContent = `Input only english words`;
    contentCont.appendChild(message);
  }
}

searchBtn.addEventListener("click", findMeaning);
