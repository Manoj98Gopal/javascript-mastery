function maxConsecutiveOnes(arr) {
  let maxOne = 0;
  let current = 0;

  for (let item of arr) {
    if (item) {
      current += 1;
    } else {
      maxOne = Math.max(maxOne,current)
      current = 0;
    }
  }

  return maxOne < current ? current : maxOne;
}

module.exports = maxConsecutiveOnes;
