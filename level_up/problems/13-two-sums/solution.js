function twoSum(arr, target) {
  const seen = {};

  for (let i = 0; i < arr.length; i++) {
    const value = target - arr[i];
    if (seen.hasOwnProperty(value)) {
      return [seen[value], i];
    }
    seen[arr[i]] = i;
  }

  return [];
}

module.exports = twoSum;
