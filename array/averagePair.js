// my sol

function averagePair(arr, average) {
  let sum = 0;

  const n = arr.length;
  const newArr = [];

  for (i = 0; i < n - 1; i++) {
    sum = arr[i] + arr[i + 1];
    newArr.push(sum / 2);
  }

  console.log(newArr);
  for (i = 0; i < newArr.length; i++) {
    if (newArr[i] === average) {
      return true;
    }
  }
  return false;
}
averagePair([3, 2, 3, 3, 2, 3, 3, 3, 4, 5, 8, 9, 10, 11], 4.5);
// shorter solution
function averagePair(arr, average) {
  let sum = 0;

  const n = arr.length;

  for (i = 0; i < n - 1; i++) {
    sum = arr[i] + arr[i + 1];
    if (sum / 2 === average) {
      return true;
    }
  }
  return false;
}
averagePair([], 4.5);

// multipointer solution

function averagePair(arr, num) {
  let start = 0;
  let end = arr.length - 1;
  while (start < end) {
    let avg = (arr[start] + arr[end]) / 2;
    if (avg === num) return true;
    else if (avg < num) start++;
    else end--;
  }
  return false;
}
