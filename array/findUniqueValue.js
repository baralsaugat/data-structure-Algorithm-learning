function countUniqueValues(arr) {
  let i = 0;

  if (arr[i] === 0) {
    return 0;
  }
  for (j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
}

countUniqueValues([]);
