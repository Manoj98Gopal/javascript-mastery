function longestWord(sentence) {
  if (!sentence) {
    return sentence;
  }
  const words = sentence.replace(/[^a-zA-Z\s]/g, "").split(" ");

  let largestIndex = 0;

  for (let i = 0; i < words.length; i++) {
    if (words[i].length > words[largestIndex].length) {
      largestIndex = i;
    }
  }

  return words[largestIndex];
}

function longestWord1(sentence) {
  if (!sentence) return sentence;
  const words = sentence.replace(/[^a-zA-Z\s]/g, "").split(" ");

  return words.reduce((longest, word) => {
    return (longest = longest.length < word.length ? word : longest);
  }, "");
}

longestWord1("The quick brown fox");

module.exports = longestWord1;
