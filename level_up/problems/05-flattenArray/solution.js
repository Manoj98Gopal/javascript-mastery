function flattenArray(arr) {
  const result = [];

  function flatten(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        flatten(arr[i]);
      } else {
        result.push(arr[i]);
      }
    }
  }

  flatten(arr)

  return result;
}

module.exports = flattenArray;
