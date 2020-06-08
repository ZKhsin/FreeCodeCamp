const searchInput = document.querySelector("#search");
const searchBtn = document.querySelector(".search-btn");
const text = document.querySelector("#text");
const author = document.querySelector("#author");
const newQuote = document.querySelector("#new-quote");
const twitter = document.querySelector("#tweet-quote");

const URL = "./quote.json";

const quote = fetch(URL)
  .then((res) => res.json())
  .then((data) => {
    text.innerHTML = `<i class="fas fa-quote-left"></i>${data[0].quote}<i class="fas fa-quote-right"></i>`;
    author.textContent = `-- ${data[0].author}`;

    newQuote.addEventListener("click", () => {
      const i = getRandomNum();
      text.innerHTML = `<i class="fas fa-quote-left"></i>${data[i].quote}<i class="fas fa-quote-right"></i>`;
      author.textContent = `-- ${data[i].author}`;
    });

    searchBtn.addEventListener("click", () => {
      if (+searchInput.value <= data.length) {
        text.innerHTML = `<i class="fas fa-quote-left"></i>${
          data[+searchInput.value - 1].quote
        }<i class="fas fa-quote-right"></i>`;
        author.textContent = `-- ${data[+searchInput.value - 1].author}`;
      } else {
        alert("Search No Result!");
      }
      searchInput.value = "";
    });

    twitter.addEventListener("click", () => {
      twitter.setAttribute(
        "href",
        `https://twitter.com/intent/tweet?hashtags=FreeCodeCamp&text="${text.textContent}"${author.textContent}`
      );
    });
  });

function getRandomNum() {
  return Math.floor(Math.random() * 20);
}
