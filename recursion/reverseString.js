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
