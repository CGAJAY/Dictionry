let textInput = document.getElementById("text-inpt");
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
    const data = await response.json();

    console.log(data);
    console.log(data[0].meanings[0].definitions);
    contentCont.textContent = "";
    searchedWord.textContent = textInput.value;
    textInput.value = "";
    wordContDiv.appendChild(searchedWord);
    if (data[0].phonetic != undefined) {
      wordGreek.textContent = `${data[0].phonetic}`;
    } else {
      wordGreek.textContent = "";
    }
    wordContDiv.appendChild(wordGreek);
    contentCont.appendChild(wordContDiv);
    wordType.textContent = `${data[0].meanings[0].partOfSpeech}`;
    contentCont.appendChild(wordType);
    MeaningList.innerHTML = "";
    data[0].meanings[0].definitions.forEach((define) => {
      MeaningList.innerHTML += `<li>${define.definition}</li>`;
    });
    contentCont.appendChild(MeaningList);
  } catch (error) {
    textInput.value = "";
    contentCont.textContent = "";
    let message = document.createElement("h2");
    message.textContent = `Input only english words`;
    contentCont.appendChild(message);
  }
}

searchBtn.addEventListener("click", findMeaning);
