// reverse a string
// Solution 1 with JS built in methos
function revereAstring(str){
  return str.split("").reverse().join("")
}
console.log(revereAstring("Thank you"))

function reverseStringPrepand(str){
  let reversed = ''
  for(let char of str){
    reversed = char + reversed
  }
  return reversed
}
console.log(reverseStringPrepand("thank you"))

// Solution with recursion

function reverseRecursionMethod(str){
  if(str ==="")return ""
  return reverseRecursionMethod(str.substr(1)) +str[0]
}


console.log(reverseRecursionMethod("thank you boss"))