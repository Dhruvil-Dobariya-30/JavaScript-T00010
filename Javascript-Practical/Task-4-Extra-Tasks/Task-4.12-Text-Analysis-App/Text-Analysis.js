function analyzeText() {
  const text = document.getElementById("inputText").value.toLowerCase();
  const words = text.match(/\b\w+\b/g) || [];
  const wordCount = words.length;

  let totalLength = 0;
  const wordFrequency = {};

  for (const word of words) {
    totalLength += word.length;
    wordFrequency[word] = (wordFrequency[word] || 0) + 1;
  }

  const averageLength = wordCount ? totalLength / wordCount : 0;

  const sortedWords = [];
  for (const word in wordFrequency) {
    sortedWords.push([word, wordFrequency[word]]);
  }

  sortedWords.sort((a, b) => b[1] - a[1]);

  const commonWords = sortedWords
    .slice(0, sortedWords.length)
    .map(([word, count]) => `${word} (${count} times)`)
    .join(",  ");

  document.getElementById("results").innerHTML = `
    <p>Word Count: ${wordCount}</p>
    <p>Average Word Length: ${averageLength}</p>
    <p>Most Common Words: ${commonWords}</p>
  `;
}
