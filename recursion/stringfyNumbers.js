function stringifyNumbers(obj) {
  var newObj = {};
  for (var key in obj) {
    if (typeof obj[key] === "number") {
      newObj[key] = obj[key].toString();
    } else if (typeof obj[key] === "object" && !Array.isArray(obj[key])) {
      newObj[key] = stringifyNumbers(obj[key]);
    } else {
      newObj[key] = obj[key];
    }
  }
  return newObj;
}

//   collect all the string of an object in an array

function collectStrings(Object) {
  // base case
  let arg = [];

  for (let key in Object) {
    if (typeof Object[key] === "string") {
      arg.push(Object[key]);
    } else if (typeof Object[key] === "object") {
      arg = arg.concat(collectStrings(Object[key]));
    } else {
      return arg;
    }
  }

  return arg;
}
