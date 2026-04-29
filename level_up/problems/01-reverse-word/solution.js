function reverseWord(sentence) {
  const trimmedSentence = sentence.trim();
  const words = trimmedSentence.split(" ");
  const reversedWords = words.reverse();
  const result = reversedWords.join(" ");

  return result;
}

module.exports = reverseWord;
