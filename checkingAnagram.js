function validAnagram(firstArr, seconArr) {
  if (!(firstArr.length === seconArr.length)) {
    return false;
  }
  // checking the length of two arrays
  // declare two objs
  let lookObj = {};

  for (i = 0; i < firstArr.length; i++) {
    let letter = firstArr[i];
    lookObj[letter] ? (lookObj[letter] += 1) : (lookObj[letter] = 1);
  }

  for (i = 0; i < seconArr.length; i++) {
    let char = seconArr[i];
    if (!lookObj[char]) {
      return false;
    } else {
      return (lookObj[char] -= 1);
    }
  }
  console.log("here");
  return true;
}
validAnagram("ram", "arm");
