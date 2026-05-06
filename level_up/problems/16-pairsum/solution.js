function pairSum(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  const result = [];

  while (left < right) {
    let sum = arr[left] + arr[right];

    if (sum === target) {
      result.push([arr[left], arr[right]]);
      left++;
      right--;
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }

  console.log(result)

  return result;
}



module.exports = pairSum;
