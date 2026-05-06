function isAnagram(str1, str2) {
  const clean1 = str1.toLowerCase().replace(/\s+/g, "");
  const clean2 = str2.toLowerCase().replace(/\s+/g, "");

  if (clean1.length != clean2.length) return false;

  return clean1.split("").sort().join("") === clean2.split("").sort().join("");
}

function isAnagram1(str1, str2) {
  const clean1 = str1.toLowerCase().replace(/\s+/g, "");
  const clean2 = str2.toLowerCase().replace(/\s+/g, "");

  const freq = {};

  for (let item of clean1) {
    freq[item] = (freq[item] || 0) + 1;
  }

  for (let item of clean2) {
    freq[item] = (freq[item] || 0) - 1;
    if (freq[item] < 0) return false;
  }

  return true;
}

module.exports = isAnagram1;
