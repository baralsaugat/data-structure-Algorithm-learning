function binarySearch(arr, num) {
  let left = 0;
  let right = arr.length - 1;
  let mid = Math.floor((left + right) / 2);

  while (arr[mid] != num) {
    if (arr[mid] < num) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
    mid = Math.floor((left + right) / 2);
  }
  return arr[mid] === num ? mid : -1;
}

binarySearch([1, 2, 3, 4, 5], 5);
