function maxSumSubarray(arr, k) {
  let windowSum = 0;

  for (let i = 0; i < k; i++) {
    windowSum += arr[i];
  }

  let max = windowSum;

  for (let i = k; i < arr.length; i++) {
    windowSum = windowSum - arr[i - k] + arr[i];
    max = Math.max(windowSum, max);
  }

  return max;
}

module.exports = maxSumSubarray;
