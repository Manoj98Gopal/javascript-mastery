function compressString(string) {
  if (string.length === 0) return string;

  let compressed = "";
  let count = 1;

  for (let i = 1; i < string.length; i++) {
    if (string[i] === string[i - 1]) {
      count++;
    } else {
      compressed += string[i - 1] + count;
      count = 1;
    }
  }

  compressed += string[string.length - 1] + count;

  return compressed;
}

module.exports = compressString;
