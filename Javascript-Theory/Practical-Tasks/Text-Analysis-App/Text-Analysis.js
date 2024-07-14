const inputData = document.getElementById("text");
const lenghtDiv = document.getElementById("lenght");
const WordsDiv = document.getElementById("words");
const CharDiv = document.getElementById("char");
const frequencyDiv = document.getElementById("frequency");

function Analysis() {
  // console.log(inputData.value);
  let data = inputData.value;
  findLength(data);
  WordCount(data);
  CharCount(data);
  wordFrequency(data);
}

function findLength(data) {
  lenghtDiv.innerHTML = data.length;
}

function WordCount(data) {
  // console.log(data.split.length);
  let words = data.trim().split(/\s+/);
  WordsDiv.innerHTML = words.length;
}

function CharCount(data) {
  let regex = /[a-zA-Z0-9]/g;
  let Data = data.match(regex).length;
  CharDiv.innerHTML = Data;
}

function wordFrequency(data) {
  let words = data.trim().toLowerCase().split(/\s+/);

  let frequency = {};

  words.forEach((word) => {
    frequency[word] = (frequency[word] || 0) + 1;
  });

  for (let word in frequency) {
    frequencyDiv.innerHTML += `<p>${word}: ${frequency[word]}</p>`;
  }
}
