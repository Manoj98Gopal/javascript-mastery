function findDuplicates(arr) {
  const obj = {};

  for (let item of arr) {
    if (obj[item]) {
      obj[item] += 1;
    } else {
      obj[item] = 1;
    }
  }

  const duplicates = [];

  for (let key in obj) {
    if (obj[key] > 1) {
      duplicates.push(Number(key));
    }
  }
  return duplicates;
}

module.exports = findDuplicates;
