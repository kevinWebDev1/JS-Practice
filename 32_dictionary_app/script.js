const wordInput = document.querySelector("#word-input");
const searchBtn = document.querySelector("#search-button");
const result = document.querySelector("#result");
const imageContainer = document.querySelector(".img-container");
const loader = document.querySelector(".loader");

const card = document.createElement("div");
imageContainer.appendChild(card);

const note = document.querySelector("#note");
note.classList.add("hidden");

wordInput.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    searchBtn.click();
  }
});

searchBtn.addEventListener("click", () => {
  const word = wordInput.value.trim();
  fetchDictionary(word);
  fetchImages(word);
});

const fetchDictionary = (word) => {
  result.innerHTML = ""; // Clear previous content
  const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;

  if (!word) {
    const message = document.createElement("div");
    message.className = "card";
    message.textContent = "Please enter a word";
    result.appendChild(message);
    return;
  }

  loader.classList.remove("hidden");

  fetch(url)
    .then((res) => res.json())
    .then((dictionary) => {
      dictionary.forEach((dict) => {
        // WORD
        if (dict.word) {
          const wordCard = document.createElement("div");
          wordCard.className = "card";
          wordCard.innerHTML = `<b>Word</b>: ${dict.word}`;
          result.appendChild(wordCard);
        }

        // PHONETICS
        dict.phonetics.forEach((ele) => {
          console.log(ele)
          if (ele.text) {
            const phoneticCard = document.createElement("div");
            phoneticCard.className = "card";

            // PHONETIC
            const phoneticText = document.createElement("div");
            phoneticText.innerHTML = `<b>Phonetic</b>: ${ele.text}`;
            phoneticCard.appendChild(phoneticText);

            // AUDIO
            if (ele.audio) {
              const button = document.createElement("div");
              button.className = "play-btn";
              button.innerHTML = "<i class=\"fa-solid fa-volume-high\"></i>";

              button.addEventListener("click", () => {
                const audio = new Audio(ele.audio);
                audio
                  .play()
                  .catch((err) => console.error("Playback error:", err));
              });

              phoneticCard.appendChild(button);
            }

            result.appendChild(phoneticCard);
          }
        });

        // MEANINGS
        dict.meanings.forEach((meaning) => {
          // PART OF SPEECH
          if (meaning.partOfSpeech) {
            const partOfSpeechCard = document.createElement("div");
            partOfSpeechCard.className = "card";
            partOfSpeechCard.innerHTML = `<b>Part of Speech</b>: ${meaning.partOfSpeech}`;
            result.appendChild(partOfSpeechCard);
          }

          // DEFINITIONS
          meaning.definitions.forEach((def) => {
            if (def.definition) {
              const defCard = document.createElement("div");
              defCard.className = "card";
              defCard.innerHTML = `<b>Def:</b> ${def.definition}`;
              result.appendChild(defCard);

              if (def.example) {
                const exampleCard = document.createElement("div");
                exampleCard.innerHTML = `<b>Example</b>: ${def.example}`;
                defCard.appendChild(exampleCard);
              }
            }
          });

          // SYNONYMS
          const synonyms = meaning.synonyms.join(", ");
          if (synonyms) {
            const synCard = document.createElement("div");
            synCard.className = "card";
            synCard.innerHTML = `<b>Synonyms</b>: ${synonyms}`;
            result.appendChild(synCard);
          }

          // ANTONYMS
          const antonyms = meaning.antonyms.join(", ");
          if (antonyms) {
            const antCard = document.createElement("div");
            antCard.className = "card";
            antCard.innerHTML = `<b>Antonym</b>: ${antonyms}`;
            result.appendChild(antCard);
          }
        });
      });
    })
    .catch((err) => {
      console.error(err);
      const errorCard = document.createElement("div");
      errorCard.className = "card";
      errorCard.textContent = "Word not found or Spelling mistake";
      result.appendChild(errorCard);
    })
    .finally(() => {
      loader.classList.add("hidden");
    });
};

fetchDictionary("Hello");

function fetchImages(word) {
  if (!imageContainer) {
    console.error("img container element not found");
    return;
  }

  const api_key = "4gvNhdn9S4lnXypDfbfDaCUx4sZ7fuqo7ZdlukHjLUlRJ460k50PWT6m";
  const url = `https://api.pexels.com/v1/search?query=${word}&per_page=10`;

  imageContainer.innerHTML = "";
  if (!word) return;

  fetch(url, { headers: { Authorization: api_key } })
    .then((res) => res.json())
    .then((pexel) => {
      note.classList.remove("hidden");
      pexel.photos.forEach((pik) => {
        const src = pik.src.medium;
        const img = document.createElement("img");
        img.src = src;
        img.alt = word;
        img.classList.add("img");
        imageContainer.appendChild(img);
      });
    })
    .catch((err) => console.error(err));
}

