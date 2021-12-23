function recursiceRange(num) {
  if (num === 1) {
    return 1;
  }
  return num + recursiceRange(num - 1);
}

recursiceRange(6);

function recursiceRange(num) {
  if (num === 1) {
    return 1;
  }
  return num + recursiceRange(num - 1);
}

recursiceRange(6);

function productOfArray(arr) {
  if (arr.length === 0) {
    return 1;
  }
  return arr[0] * productOfArray(arr.slice(1));
}
// FIBONACCI SOLUTION
function fib(n) {
  if (n <= 2) return 1;
  return fib(n - 1) + fib(n - 2);
}
