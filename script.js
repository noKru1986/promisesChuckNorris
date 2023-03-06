/* function displayJoke(str) {
  const image = document.createElement("img");
  image.src =
    "https://api.chucknorris.io/img/chucknorris_logo_coloured_small@2x.png";
  document.body.appendChild(image);

  const paragraph = document.createElement("p");
  paragraph.innerText = str;
  document.body.appendChild(paragraph);
} */

/* let chuckNorrisJoke;

fetch("https://api.chucknorris.io/jokes/random")
  .then((response) => response.json())
  .then((data) => {
    chuckNorrisJoke = data;
    displayParagraph(data.value);
  }); */

// Iznad kodove treba prebaciti u arrow ili obicnu funkciju ovisno o kodu koji je gore...

const refreshJoke = (textElement) => {
  fetch("https://api.chucknorris.io/jokes/random")
    .then((response) => response.json())
    .then((data) => {
      textElement.innerText = data.value;
    });
};

const displayJoke = (str) => {
  const container = document.createElement("div");
  container.className = "flexCenter";
  document.body.appendChild(container);

  const image = document.createElement("img");
  image.src =
    "https://api.chucknorris.io/img/chucknorris_logo_coloured_small@2x.png";
  image.style.marginBottom = "40px";
  container.appendChild(image);

  const paragraph = document.createElement("p");
  paragraph.innerText = str;
  paragraph.style.marginBottom = "40px";
  paragraph.style.width = "50%";
  paragraph.style.textAlign = "center";
  container.appendChild(paragraph);

  const btn = document.createElement("button");
  btn.innerText = "Get new joke";
  btn.style.fontSize = "30px";
  btn.style.padding = "5px 20px";
  btn.style.borderRadius = "8px";
  btn.style.borderColor = "transparent";
  btn.style.cursor = "pointer";
  btn.onclick = () => refreshJoke(paragraph);
  container.appendChild(btn);
};

(function getJoke() {
  fetch("https://api.chucknorris.io/jokes/random")
    .then((response) => response.json())
    .then((data) => {
      displayJoke(data.value);
    });
})();
