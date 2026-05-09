function zipArrays(arr1, arr2) {
  if (arr1.length === 0 || arr2.length === 0) return [];

  const result = [];

  if (arr1.length === arr2.length || arr1.length < arr2.length) {
    for (i = 0; i < arr1.length; i++) {
      result.push([arr1[i], arr2[i]]);
    }
  }

  if (arr1.length > arr2.length) {
    for (i = 0; i < arr2.length; i++) {
      result.push([arr1[i], arr2[i]]);
    }
  }

  return result;
}

module.exports = zipArrays;
