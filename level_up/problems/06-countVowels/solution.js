function countVowels(str) {
  const vowels = ["a", "e", "i", "o", "u"];

  const smallCase = str.toLowerCase();

  let count = 0;

  for (let i = 0; i < smallCase.length; i++) {
    if (vowels.includes(smallCase[i])) {
      count++;
    }
  }

  return count;
}

function countVowels1(str) {
  const vowels = new Set(["a", "e", "i", "o", "u"]);
  let count = 0;

  for (let char of str.toLowerCase()) {
    if (vowels.has(char)) count++;
  }

  return count;
}

function countVowels2(str) {
  // "g" means find all matches, i means case insensitive.
  const matches = str.match(/[aeiou]/gi);
  return matches ? matches.length : 0;
}

module.exports = countVowels;
