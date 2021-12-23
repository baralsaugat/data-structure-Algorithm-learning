function maxSubArray(arr, num) {
  let maxSum = 0;
  let tempSum = 0;

  if (arr.length < num) {
    return null;
  }

  for (i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;

  for (i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(tempSum, maxSum);
  }
  return maxSum;
}

maxSubArray([1, 2, 2, 3, 4, 6, 7, 2, 4, 5], 4);
