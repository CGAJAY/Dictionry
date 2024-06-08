fetch("https://api.dictionaryapi.dev/api/v2/entries/en/hello")
  .then((result) => {
    return result.json();
  })
  .then((data) => console.log(data));
