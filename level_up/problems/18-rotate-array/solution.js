function rotateArray(array, k) {
  const result = [...array];
  let count = 1;

  while (count <= k) {
    const value = result.pop();
    result.unshift(value);
    count++;
  }

  return result;
}

function rotateArray1(arr, k) {
  if (!arr.length) return [];

  k = k % arr.length;

  if (k === 0) return [...arr];

  const splitPoint = arr.length - k;

  return [...arr.slice(splitPoint), ...arr.slice(0, splitPoint)];
}

rotateArray([1, 2, 3, 4, 5], 2);

module.exports = rotateArray1;
