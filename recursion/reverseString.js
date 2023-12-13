function reverse(str) {
  if (str.length === 1) {
    return str[0];
  }
  return str[str.length - 1] + reverse(str.slice(0, -1));
}
// isPalindrome Solution

function isPalindrome(str) {
  if (str.length === 1) return true;
  if (str.length === 2) return str[0] === str[1];
  if (str[0] === str.slice(-1)) return isPalindrome(str.slice(1, -1));
  return false;
}

function betNumber(amount, count) {
  newCount = count;
  if (amount <= 1) {
    console.log("Count = " + newCount);
  } else {
    newCount++;

    newAmount = amount - 0.1 * amount;
    console.log(newAmount);

    return betNumber(newAmount, newCount);
  }
}
