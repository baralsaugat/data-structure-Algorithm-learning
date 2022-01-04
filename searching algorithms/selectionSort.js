function selectionSort(arr) {
  for (i = 0; i < arr.length - 1; i++) {
    let lowVal = arr[i];
    let index = i + 1;

    for (j = i + 1; j < arr.length - 2; j++) {
      if (arr[j] < lowVal) {
        index = j;

        lowVal = arr[j];
      }
    }
    let swap = arr[i];
    arr[i] = lowVal;
    arr[index] = swap;
  }
  return arr;
}

selectionSort([2, 4, 5, 3, 1, 6]);
