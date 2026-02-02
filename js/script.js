let pQuote = document.querySelector(".m-quotes");
const quoteButton = document.querySelector(".quote");
const finishButton = document.querySelector(".finish");
const change = document.querySelector(".change span");
let triviaArray = [];
let li = document.createElement("li");

const fetchMotivationalQuote = async function () {
  let res = await fetch(
    "https://motivational-spark-api.vercel.app/api/quotes/random/3",
  );
  let quotes = await res.json();
  console.log(quotes);
  selectRandomQuote(quotes);
};

const selectRandomQuote = function(quotes) {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];
  console.log(randomQuote);
  displayQuote(randomQuote);
}

const displayQuote = function(randomQuote) {
  const quote = randomQuote.quote;
  const author = randomQuote.author;
  pQuote.classList.remove("hide");
  pQuote.innerHTML = `${quote} <br> ${author}`;
}

quoteButton.addEventListener("click", function() {
  fetchMotivationalQuote();
});

let d = new Date();
let year = d.getFullYear();
change.innerText = year;
