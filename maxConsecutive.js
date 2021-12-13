



function findMax(input) {
  let counter = 0;
  let maxCounter = 0;

  for (i = 0; i < input.length; i++) {
    if (input[i] == 1) {
      counter ++;


      maxCounter = Math.max(counter, maxCounter)
    } else counter = 0;
  }
 return maxCounter



}

findMax(1,1,0,1,1,1,0)
