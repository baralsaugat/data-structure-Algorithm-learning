function bubbleSort(arr) {
  for (i = arr.length - 1; i > 0; i--) {
    for (j = 0; j < i - 1; j++) {
      if (arr[j] >= arr[j + 1]) {
        var tempor = arr[j];

        arr[j] = arr[j + 1];
        arr[j + 1] = tempor;
      }
    }
  }
  return arr;
}

bubbleSort([1, 4, 5, 3, 2, 6]);
