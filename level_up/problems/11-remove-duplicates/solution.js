function removeDuplicates(arr) {
  const result = [];

  for (let item of arr) {
    if (!result.includes(item)) {
      result.push(item);
    }
  }

  return result;
}

function removeDuplicates1(arr) {
  const seen = {};
  const result = [];

  for (let item of arr) {
    if (!seen[item]) {
      seen[item] = true;
      result.push(item);
    }
  }

  return result;
}

module.exports = removeDuplicates1;
