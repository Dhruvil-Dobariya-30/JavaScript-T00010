let quotesDiv = document.getElementById("quotes");
let btn = document.getElementById("btn");

let quote;

async function getQuote() {
  const response = await fetch("https://dummyjson.com/quotes/random");
  quote = await response.json();
  console.log(quote);

  displayQuote();
}

getQuote();

function displayQuote() {
  quotesDiv = "";
  authorDiv = "";

  quotesDiv += `
  <div class="quote-data"><h4>Quote : </h4> ${quote.quote}</div>
  <div class="author-data"><span><h4>Author : </h4>${quote.author}</span></div>
  `;

  document.getElementById("quotes").innerHTML = quotesDiv;
}

getQuote();
